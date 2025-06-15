export interface ServerConfig {
  baseUrl: string
}

export interface ProjectConfig {
  name: string
  version: string
  description: string
}

export interface Config {
  server: ServerConfig
  project: ProjectConfig
}
