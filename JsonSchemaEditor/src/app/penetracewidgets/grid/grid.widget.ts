import { Component, AfterViewInit } from '@angular/core';
import { ObjectWidget } from 'ngx-schema-form';

@Component({
  selector: 'sf-form-object',
  templateUrl: './grid.widget.html'
})
export class GridWidgetComponent extends ObjectWidget implements AfterViewInit {

  ngAfterViewInit() {
    // console.log(this.formProperty);
  }
}
