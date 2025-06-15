import { Config } from '~/config/config.interfaces'

const config: Config = {
  server: {
    baseUrl: 'http://localhost:3000',
  },
  project: {
    name: '@horus-software/identity',
    version: '0.0.0',
    description: 'horus.software identity provider api',
  },
}

export default config
