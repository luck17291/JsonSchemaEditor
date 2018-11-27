import { DefaultWidgetRegistry } from "ngx-schema-form";
import { ArrayWidgetComponent } from "./array/array.widget";
import { ObjectWidgetComponent } from "./object/object.widget";
import { StringWidgetComponent } from "./string/string.widget";
import { GridWidgetComponent } from "./grid/grid.widget";

export class PenetraceWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('array', ArrayWidgetComponent);
    this.register('object', ObjectWidgetComponent);

    this.register('string', StringWidgetComponent);
    this.register('grid', GridWidgetComponent);

    this.setDefaultWidget(StringWidgetComponent);
  }
}
