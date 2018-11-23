import { Component, Input } from '@angular/core';

@Component({
    selector: 'generic-form',
    templateUrl: 'generic-form.component.html'
})
export class GenericComponent {
    @Input() schema: string;
    @Input() model: string;
}
