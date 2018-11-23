import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry, TemplateSchemaModule } from 'ngx-schema-form';
import { AppComponent } from './app.component';
import { GenericComponent } from './generic-form/generic-form.component';
import { FormsModule } from '@angular/forms';
import { JsonService } from './jsonSchema/json.service';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent
  ],
  imports: [
    SchemaFormModule.forRoot(),
    TemplateSchemaModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
    JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
