import { Injectable } from '@nestjs/common'

@Injectable()
export class VersionService {
  public getName(): string {
    return process.env.npm_package_name
  }

  public getVersion(): string {
    return process.env.npm_package_version
  }
}
