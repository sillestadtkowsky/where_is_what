import { Component, Input } from '@angular/core';

import { Wohnung } from '../../models/wohnung.model';

@Component({
  selector: 'wohnungen',
  templateUrl: 'wohnungen.component.html'
})
export class WohnungenComponent {

    @Input()
    private value: Array<Wohnung>;

    constructor() {}

}
