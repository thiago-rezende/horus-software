import { NestFactory } from '@nestjs/core'

import type { NestExpressApplication } from '@nestjs/platform-express'

import { IdentityModule } from './identity.module'

async function bootstrap() {
  console.log(`[ ${process.env.npm_package_name} ] v${process.env.npm_package_version}\n|- ${process.env.npm_package_description}`)

  const application = await NestFactory.create<NestExpressApplication>(IdentityModule)

  await application.listen(process.env.IDENTITY_API_SERVER_PORT || 3000)
}

bootstrap()
