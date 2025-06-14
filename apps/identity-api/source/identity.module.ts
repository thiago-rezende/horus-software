import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'

import { resolveConfig } from '~/config/config.resolver'

import { VersionModule } from '~/version/version.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [resolveConfig],
      cache: true,
      isGlobal: true,
    }),
    VersionModule,
  ],
})
export class IdentityModule {}
