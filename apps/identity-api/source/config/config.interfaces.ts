export interface ServerConfig {
  port: number
  hostname: string
}

export interface ProjectConfig {
  name: string
  version: string
  description: string
}

export interface DatabaseConfig {
  type: 'sqlite' | 'postgres'
  database: string
  synchronize: boolean
  autoLoadEntities: boolean
}

export interface Config {
  server: ServerConfig
  project: ProjectConfig
  database: DatabaseConfig
}
