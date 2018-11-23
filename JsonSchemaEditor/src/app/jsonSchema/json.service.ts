import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {

    constructor() { }

    private basicInfo = {
        '$schema': 'http://json-schema.org/draft-04/hyper-schema#',
        'type': 'object',
        'properties': {
            'surveyName': {
                'type': 'string',
                'description': 'Survey Name'
            },
            'baseOn': {
                'type': 'string',
                'description': 'Base On',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "None",
                        "enum": [
                            "None"
                        ]
                    },
                    {
                        "description": "Survey 1",
                        "enum": [
                            "survey1"
                        ]
                    },
                    {
                        "description": "Survey 2",
                        "enum": [
                            "survey2"
                        ]
                    }
                ]
            },
            'startDate': {
                'type': 'string',
                'description': 'Start Date',
                'widget': 'date-time'
            },
            'endDate': {
                'type': 'string',
                'description': 'End Date',
                'widget': 'date-time'
            },
            'surveyLanguage': {
                'type': 'string',
                'description': 'Survey Language',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "English",
                        "enum": [
                            "EN"
                        ]
                    },
                    {
                        "description": "Norwegian",
                        "enum": [
                            "NO"
                        ]
                    },
                    {
                        "description": "Tiếng Việt",
                        "enum": [
                            "vn"
                        ]
                    }
                ]
            },
            'surveyType': {
                'type': 'string',
                'description': 'Survey Type',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "Panel Type",
                        "enum": [
                            "1"
                        ]
                    },
                    {
                        "description": "Panel Type 1",
                        "enum": [
                            "2"
                        ]
                    },
                    {
                        "description": "Panel Type 2",
                        "enum": [
                            "3"
                        ]
                    }
                ]
            },
            'sampleType': {
                'type': 'string',
                'description': 'Sample Type',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "Panel Type",
                        "enum": [
                            "1"
                        ]
                    },
                    {
                        "description": "Panel Type 1",
                        "enum": [
                            "2"
                        ]
                    },
                    {
                        "description": "Panel Type 2",
                        "enum": [
                            "3"
                        ]
                    }
                ]
            },
            'contactMethod': {
                'type': 'string',
                'description': 'Contact Method',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "Internet(Online)",
                        "enum": [
                            "1"
                        ]
                    },
                    {
                        "description": "Phone",
                        "enum": [
                            "2"
                        ]
                    }
                ]
            },
            'collectionMethod': {
                'type': 'string',
                'description': 'Collection Method',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "Web",
                        "enum": [
                            "1"
                        ]
                    },
                    {
                        "description": "Paper",
                        "enum": [
                            "2"
                        ]
                    }
                ]
            },
            'targetGroup': {
                'type': 'string',
                'description': 'Target Group',
                'widget': 'select',
                "oneOf": [
                    {
                        "description": "Consumer Market",
                        "enum": [
                            "1"
                        ]
                    },
                    {
                        "description": "Paper",
                        "enum": [
                            "2"
                        ]
                    }
                ]
            }
        }
    };

    private sample = {
        "$schema": "http://json-schema.org/draft-04/hyper-schema#",
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string",
                "placeholder": "First name",
                "minLength": 2,
                "maxLength": 40,
                "title": "First name",
                "description": "First name"
            },
            "lastName": {
                "type": "string",
                "placeholder": "Last name",
                "minLength": 2,
                "maxLength": 40,
                "title": "Last name",
                "description": "Last name"
            },
            "bornOn": {
                "type": "string",
                "format": "date",
                "widget": "date",
                "default": "1800-12-12",
                "placeholder": "Ex: 2009-03-11",
                "description": "Born on"
            },
            "contributors": {
                "description": "Contributors",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "widget": "array"
            },
            "categories": {
                "type": "array",
                "items": {
                    "type": "string",
                    "oneOf": [
                        {
                            "description": "Dog",
                            "enum": [
                                "dog"
                            ]
                        },
                        {
                            "description": "Cat",
                            "enum": [
                                "cat"
                            ]
                        },
                        {
                            "description": "Daulphin",
                            "enum": [
                                "daulphin"
                            ]
                        }
                    ]
                },
                "widget": "checkbox"
            },
            "moreInfo": {
                "type": "boolean",
                "widget": "checkbox",
                "description": "More information?",
                "default": true
            },
            "survey": {
                "type": "object",
                "description": "Little survey",
                "properties": {
                    "q1": {
                        "type": "string",
                        "description": "Enter a number"
                    },
                    "q2": {
                        "type": "object",
                        "description": "Address",
                        "properties": {
                            "color": {
                                "description": "color",
                                "type": "string",
                                "default": "#aaa000",
                                "pattern": "ff$",
                                "widget": "color"
                            },
                            "zip": {
                                "description": "zip",
                                "type": "number",
                                "default": 15
                            }
                        }
                    }
                }
            },
            "favoriteColor": {
                "type": "string",
                "pattern": "^#[0-9a-fA-F]{6}$",
                "widget": "color",
                "default": "#aaa111",
                "description": "Favorite color",
                "visibleIf": {
                    "moreInfo": [
                        true
                    ]
                }
            },
            "transactionNumber": {
                "type": "integer",
                "minimum": 0,
                "readOnly": "true",
                "description": "Transaction number"
            },
            "transactionDescription": {
                "type": "string",
                "widget": "textline",
                "description": "What is being transacted"
            },
            "category": {
                "type": "array",
                "widget": "select",
                "items": {
                    "type": "string",
                    "oneOf": [
                        {
                            "description": "Design",
                            "enum": [
                                "design"
                            ]
                        },
                        {
                            "description": "High-Tech",
                            "enum": [
                                "hightech"
                            ]
                        },
                        {
                            "description": "Materials",
                            "enum": [
                                "materials"
                            ]
                        },
                        {
                            "description": "Services",
                            "enum": [
                                "services"
                            ]
                        }
                    ]
                },
                "description": "Category"
            },
            "promotion": {
                "type": "string",
                "description": "Promotion",
                "widget": "radio",
                "oneOf": [
                    {
                        "description": "Student discount (20%)",
                        "enum": [
                            "student"
                        ]
                    },
                    {
                        "description": "Summer 2016 discount (15%)",
                        "enum": [
                            "summer"
                        ]
                    },
                    {
                        "description": "None",
                        "enum": [
                            "none"
                        ]
                    }
                ]
            },
            "confirmationMail": {
                "type": "string",
                "description": "Email",
                "format": "email"
            },
            "password": {
                "type": "string",
                "widget": "password",
                "description": "Password"
            },
            "numberOfBoxes": {
                "type": "number",
                "widget": {
                    "id": "range"
                },
                "description": "Number of boxes required",
                "minimum": 1,
                "maximum": 10
            },
            "deliveryService": {
                "type": "string",
                "widget": "select",
                "description": "Delivery service",
                "oneOf": [
                    {
                        "description": "UPS",
                        "enum": [
                            "ups"
                        ]
                    },
                    {
                        "description": "FedEx",
                        "enum": [
                            "fedex"
                        ]
                    },
                    {
                        "description": "Other",
                        "enum": [
                            "other"
                        ]
                    }
                ],
                "default": "fedex"
            },
            "otherDeliveryService": {
                "type": "string",
                "minLength": 2,
                "visibleIf": {
                    "deliveryService": [
                        "other"
                    ]
                }
            },
            "freeShipping": {
                "type": "boolean",
                "widget": "checkbox",
                "description": "Free shipping",
                "visibleIf": {
                    "deliveryService": [
                        "other",
                        "ups"
                    ]
                }
            },
            "shippingPrice": {
                "type": "number",
                "description": "ShippingCost",
                "minimum": 0,
                "maximum": 200,
                "visibleIf": {
                    "freeShipping": [
                        false
                    ]
                }
            },
            "sendApologies": {
                "type": "boolean",
                "widget": "checkbox",
                "description": "Send apologies for the shipping cost",
                "visibleIf": {
                    "shippingPrice": [
                        22,
                        23
                    ]
                }
            },
            "useCustomEmail": {
                "type": "boolean",
                "description": "Write a custom email ?"
            },
            "customEmail": {
                "type": "string",
                "widget": "textarea",
                "description": "Email to send",
                "visibleIf": {
                    "useCustomEmail": [
                        true
                    ]
                },
                "pattern": "^<h1>"
            },
            "userManual": {
                "type": "object",
                "widget": "file",
                "properties": {
                    "content-type": {
                        "type": "string"
                    },
                    "filename": {
                        "type": "string"
                    },
                    "size": {
                        "type": "integer"
                    },
                    "encoding": {
                        "type": "string"
                    },
                    "data": {
                        "type": "string"
                    }
                },
                "description": "Add a manual for the delivered items",
                "visibleIf": {
                    "category": [
                        "hightech"
                    ]
                }
            },
            "colors": {
                "type": "array",
                "description": "Colors",
                "index": "i",
                "items": {
                    "type": "string",
                    "description": "Color $i",
                    "widget": "color",
                    "buttons": [
                        {
                            "label": "Supprimer",
                            "id": "Remove"
                        }
                    ]
                },
                "buttons": [
                    {
                        "label": "Ajouter",
                        "id": "addItem",
                        "parameters": {
                            "value": "#afeadd"
                        }
                    },
                    {
                        "label": "Reset",
                        "id": "reset"
                    }
                ]
            }
        },
        "buttons": [
            {
                "label": "Alert",
                "id": "alert"
            },
            {
                "label": "Reset",
                "id": "reset"
            },
            {
                "label": "Disable all",
                "id": "disable"
            }
        ],
        "fieldsets": [
            {
                "id": "part_1",
                "title": "Part 1 - Recipient",
                "fields": [
                    "firstName",
                    "lastName",
                    "contributors",
                    "categories",
                    "bornOn",
                    "moreInfo",
                    "favoriteColor",
                    "colors",
                    "survey"
                ]
            },
            {
                "id": "part_2",
                "title": "Part 2 - Transaction",
                "fields": [
                    "transactionNumber",
                    "transactionDescription",
                    "promotion",
                    "category",
                    "userManual"
                ]
            },
            {
                "id": "part_3",
                "title": "Part 3 - Shipping",
                "fields": [
                    "numberOfBoxes",
                    "deliveryService",
                    "otherDeliveryService",
                    "freeShipping",
                    "shippingPrice",
                    "sendApologies"
                ]
            },
            {
                "id": "part_4",
                "title": "Part 4 - Email",
                "fields": [
                    "useCustomEmail",
                    "customEmail"
                ]
            },
            {
                "id": "part_5",
                "title": "Part 5 - Confirmation",
                "fields": [
                    "confirmationMail",
                    "password"
                ]
            }
        ],
        "required": [
            "firstName",
            "lastName",
            "transactionNumber",
            "password"
        ]
    }


    getBasicInfoSchema() {
        return this.basicInfo;
    }

    getSampleSchema() {
        return this.sample;
    }
}
