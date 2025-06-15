import { Component } from '@angular/core'

import config from '~/config'

@Component({
  selector: 'landing',
  templateUrl: './landing.template.html',
  styleUrl: './landing.styles.css',
})
export class Landing {
  readonly config = config
}
