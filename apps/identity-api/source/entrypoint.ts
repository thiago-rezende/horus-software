import { NestFactory } from '@nestjs/core'

import { Logger, VERSION_NEUTRAL, VersioningType } from '@nestjs/common'

import type { NestExpressApplication } from '@nestjs/platform-express'

import { IdentityModule } from './identity.module'

async function bootstrap() {
  const logger = new Logger('Bootstrap', { timestamp: true })

  logger.log(`Starting ${process.env.npm_package_name} <v${process.env.npm_package_version}>`)

  const application = await NestFactory.create<NestExpressApplication>(IdentityModule)

  application.setGlobalPrefix('api')

  application.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  })

  const port = parseInt(process.env.IDENTITY_API_SERVER_PORT, 10) || 3000
  const hostname = process.env.IDENTITY_API_SERVER_HOSTNAME || 'localhost'

  await application.listen(port, hostname)

  logger.log(`Application ${process.env.npm_package_name} <v${process.env.npm_package_version}> is listening on http://${hostname}:${port}`)
}

bootstrap()
