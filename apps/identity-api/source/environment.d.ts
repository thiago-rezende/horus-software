declare namespace NodeJS {
  interface ProcessEnv {
    /* npm variables */
    npm_package_name: string
    npm_package_version: string
    npm_package_description: string

    /* application variables */
    IDENTITY_API_SERVER_PORT: string
    IDENTITY_API_SERVER_HOSTNAME: string

    /* typeorm variables */
    TYPEORM_TYPE: 'sqlite' | 'postgres'
    TYPEORM_DATABASE: string
    TYPEORM_SYNCHRONIZE: boolean
    TYPEORM_AUTO_LOAD_ENTITIES: boolean
  }
}
