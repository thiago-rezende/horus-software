import { Module } from '@nestjs/common'

import { ConfigModule, ConfigService } from '@nestjs/config'

import { TypeOrmModule } from '@nestjs/typeorm'

import { resolveConfig } from '~/config/config.resolver'

import { VersionModule } from '~/version/version.module'
import { Config, DatabaseConfig } from '~/config/config.interfaces'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [resolveConfig],
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<Config, true>) => ({
        type: configService.get<DatabaseConfig>('database').type,
        database: configService.get<DatabaseConfig>('database').database,
        synchronize: configService.get<DatabaseConfig>('database').synchronize,
        autoLoadEntities: configService.get<DatabaseConfig>('database').autoLoadEntities,
      }),
      inject: [ConfigService],
    }),
    VersionModule,
  ],
})
export class IdentityModule {}
