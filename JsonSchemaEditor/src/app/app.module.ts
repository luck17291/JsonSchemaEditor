import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'ngx-schema-form';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info-form/basic-info.component';
import { FormControl, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent
  ],
  imports: [
    SchemaFormModule.forRoot(),
    FormsModule,
    BrowserModule,
  ],
  providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
  bootstrap: [AppComponent]
})
export class AppModule { }
