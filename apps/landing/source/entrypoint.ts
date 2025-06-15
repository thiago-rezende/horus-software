import { bootstrapApplication } from '@angular/platform-browser'

import { appConfig } from '~/landing/landing.config'

import { Landing } from '~/landing/landing'

bootstrapApplication(Landing, appConfig)
  .catch(err => console.error(err))
