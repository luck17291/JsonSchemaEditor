import { Component, Input } from '@angular/core';

@Component({
    selector: 'basic-info',
    templateUrl: 'basic-info.component.html'
})
export class BasicInfoComponent {
    @Input() schema: string;
    @Input() model: string;
}
