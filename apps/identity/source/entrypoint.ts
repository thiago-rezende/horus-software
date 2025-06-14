import { bootstrapApplication } from '@angular/platform-browser'

import { appConfig } from '~/identity/identity.config'

import { Identity } from '~/identity/identity'

bootstrapApplication(Identity, appConfig)
  .catch(err => console.error(err))
