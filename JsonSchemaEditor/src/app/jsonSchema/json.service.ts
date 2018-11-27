import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {

    constructor() { }

    private basicInfo = {
        '$schema': 'http://json-schema.org/draft-04/hyper-schema#',
        'type': 'object',
        'properties': {
            'basic-info': {
                'type': 'object',
                'widget': 'grid',
                'properties': {
                    'column1': {
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
                            }
                        }
                    },
                    'column2': {
                        'type': 'object',
                        'properties': {
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
                    }
                }
            }
        }
    };

    private basicInfo2 = {
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

    getBasicInfoSchema() {
        return this.basicInfo;
    }
}
