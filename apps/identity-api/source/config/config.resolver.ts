import { Config } from '~/config/config.interfaces'

export function resolveConfig(): Config {
  return {
    server: {
      port: parseInt(process.env.IDENTITY_API_SERVER_PORT, 10) || 3000,
      hostname: process.env.IDENTITY_API_SERVER_HOSTNAME || 'localhost',
    },
    project: {
      name: process.env.npm_package_name || 'unknown',
      version: process.env.npm_package_version || 'unknown',
      description: process.env.npm_package_description || 'unknown',
    },
    database: {
      type: process.env.TYPEORM_TYPE || 'sqlite',
      database: process.env.TYPEORM_DATABASE || ':memory:',
      synchronize: process.env.TYPEORM_SYNCHRONIZE || true,
      autoLoadEntities: process.env.TYPEORM_AUTO_LOAD_ENTITIES || true,
    },
  }
}
