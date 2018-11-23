import { Component, OnInit } from '@angular/core';
import { JsonService } from './jsonSchema/json.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySchemaStr = '';
  mySchema = {};
  myModel = { "baseOn": "None", "surveyLanguage": "NO", "surveyType": "2", "surveyName": "New survey", "sampleType": "1", "contactMethod": "1", "collectionMethod": "1", "targetGroup": "1" };

  constructor(private jsonService: JsonService) {

  }

  ngOnInit() {
    this.mySchema = this.jsonService.getBasicInfoSchema();
    this.mySchemaStr = JSON.stringify(this.mySchema, undefined, 2);
  }

  onUpdateSchema() {
    this.mySchema = JSON.parse(this.mySchemaStr);
  }
}
