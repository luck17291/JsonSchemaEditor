import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySchemaStr = '';
  mySchema = {};
  myModel = {};

  ngOnInit() {
    this.mySchema = {
      'properties': {
        'email': {
          'type': 'string',
          'description': 'email',
          'format': 'email'
        },
        'password': {
          'type': 'string',
          'description': 'Password'
        },
        'rememberMe': {
          'type': 'boolean',
          'default': false,
          'description': 'Remember me'
        }
      },
      'required': ['email', 'password', 'rememberMe']
    };

    this.mySchemaStr = JSON.stringify(this.mySchema, undefined, 2);
  }

  onUpdateSchema() {
    this.mySchema = JSON.parse(this.mySchemaStr);
  }
}
