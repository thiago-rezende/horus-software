import { Controller, Get } from '@nestjs/common'

import { VersionService } from '~/version/version.service'

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  public version() {
    return {
      name: this.versionService.getName(),
      version: this.versionService.getVersion(),
    }
  }
}
