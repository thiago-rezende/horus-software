declare namespace NodeJS {
  interface ProcessEnv {
    /* npm variables */
    npm_package_name: string
    npm_package_version: string
    npm_package_description: string

    /* application variables */
    IDENTITY_API_SERVER_PORT: number
    IDENTITY_API_SERVER_HOSTNAME: string
  }
}
