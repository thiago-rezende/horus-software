import { Component } from '@angular/core'

import config from '~/config'

@Component({
  selector: 'identity',
  templateUrl: './identity.template.html',
  styleUrl: './identity.styles.css',
})
export class Identity {
  readonly config = config
}
