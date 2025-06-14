import { Injectable } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'

import { ProjectConfig, Config } from '~/config/config.interfaces'

@Injectable()
export class VersionService {
  constructor(private readonly configService: ConfigService<Config, true>) {}

  public getName(): string {
    const projectConfig = this.configService.get<ProjectConfig>('project')

    return projectConfig.name
  }

  public getVersion(): string {
    const projectConfig = this.configService.get<ProjectConfig>('project')

    return projectConfig.version
  }
}
