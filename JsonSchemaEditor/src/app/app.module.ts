import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  SchemaFormModule,
  WidgetRegistry,
  TemplateSchemaModule,
  DefaultWidgetRegistry
} from 'ngx-schema-form';

import { AppComponent } from './app.component';
import { GenericComponent } from './generic-form/generic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonService } from './jsonSchema/json.service';
import { PenetraceWidgetRegistry } from './penetracewidgets/penetrace-widget-registry';
import { ArrayWidgetComponent } from './penetracewidgets/array/array.widget';
import { ObjectWidgetComponent } from './penetracewidgets/object/object.widget';
import { StringWidgetComponent } from './penetracewidgets/string/string.widget';
import { GridWidgetComponent } from './penetracewidgets/grid/grid.widget';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    ArrayWidgetComponent,
    ObjectWidgetComponent,
    StringWidgetComponent,
    GridWidgetComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SchemaFormModule.forRoot(),
    TemplateSchemaModule
  ],
  entryComponents: [
    ArrayWidgetComponent,
    ObjectWidgetComponent,
    StringWidgetComponent,
    GridWidgetComponent,
  ],
  providers: [{ provide: WidgetRegistry, useClass: PenetraceWidgetRegistry }, // PenetraceWidgetRegistry / DefaultWidgetRegistry
    JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
