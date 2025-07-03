import { NestFactory } from '@nestjs/core'

import { Logger, VERSION_NEUTRAL, VersioningType } from '@nestjs/common'

import type { NestExpressApplication } from '@nestjs/platform-express'

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes'

import { IdentityModule } from './identity.module'

async function bootstrap() {
  const logger = new Logger('Bootstrap', { timestamp: true })

  logger.log(`Starting ${process.env.npm_package_name} <v${process.env.npm_package_version}>`)

  const application = await NestFactory.create<NestExpressApplication>(IdentityModule)

  application.enableCors()

  application.setGlobalPrefix('api')

  application.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  })

  const swagger = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setVersion(process.env.npm_package_version)
    .setDescription(process.env.npm_package_description)
    .build()

  const documentFactory = () => SwaggerModule.createDocument(application, swagger)

  SwaggerModule.setup('/api/swagger', application, documentFactory, {
    jsonDocumentUrl: '/api/swagger/json',
    customCss: new SwaggerTheme().getBuffer(SwaggerThemeNameEnum.DARK),
  })

  const port = parseInt(process.env.IDENTITY_API_SERVER_PORT, 10) || 3000
  const hostname = process.env.IDENTITY_API_SERVER_HOSTNAME || 'localhost'

  await application.listen(port, hostname)

  logger.log(`Application ${process.env.npm_package_name} <v${process.env.npm_package_version}> is listening on http://${hostname}:${port}`)
}

bootstrap()
