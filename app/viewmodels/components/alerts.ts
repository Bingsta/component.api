import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  Component,
  ComponentVariations,
  HTMLComponentVariation,
  CSSModifiers,
  CSSModifer,
  WidgetComponentVariation,
  WidgetConfiguration,
  WidgetConfigurationOption
} from '../../interfaces';

class Buttons {

    public component: Component;

    constructor() {

        this.component = new Component("Alert", 
        [
            {
                name: "Base",
                HTML: {
                    code: `<div class="alert alert-warning"><strong>Alert example.</strong> This is an example of an alert.</div>`,
                    modifiers: [
                        {
                            name: "Theme",
                            modifiers:[
                                {
                                    name:   "warning",
                                    css:    "alert-warning"
                                },
                                {
                                    name:   "success",
                                    css:    "alert-success"
                                },
                                {
                                    name:   "danger",
                                    css:    "alert-danger"
                                },
                                {
                                    name:   "info",
                                    css:    "alert-info"
                                }
                            ]
                        }
                    ]   
                },
                Widget: {
                    code: `
                     <!-- ko widget: { 
                      kind: 'alert', 
                      config: #widgetConfiguration#
                    } --> <!-- /ko -->
                    `,
                    defaultOptions: [
                      {
                        name: "content",
                        value: "<strong>Alert example.</strong> This is an example of an alert."
                      }
                    ],
                    config: [
                        {
                            name: "Theme",
                            options: [
                                {
                                  name: "warning",
                                  value: "alert-warning"
                                },
                                {
                                  name: "success",
                                  value: "alert-success"
                                },
                                {
                                  name: "danger",
                                  value: "alert-danger"
                                },
                                {
                                  name: "info",
                                  value: "alert-info"
                                }
                            ]
                        }
                    ]
                }
            },
            { 
              name: "Dismissable",
              HTML: {
                  code: `
                  <div class="alert  alert-warning  alert-dismissable">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Alert example.</strong> This is an example of an alert.
                  </div>
                  `,
                  modifiers: [
                      {
                          name: "Theme",
                          modifiers:[
                              {
                                  name:   "warning",
                                  css:    "alert-warning"
                              },
                              {
                                  name:   "success",
                                  css:    "alert-success"
                              },
                              {
                                  name:   "danger",
                                  css:    "alert-danger"
                              },
                              {
                                  name:   "info",
                                  css:    "alert-info"
                              }
                          ]
                      }
                  ]   
              },
              Widget: {
                  code: `
                   <!-- ko widget: { 
                    kind: 'alert', 
                    config: #widgetConfiguration#
                  } --> <!-- /ko -->
                  `,
                  defaultOptions: [
                    {
                      name: "content",
                      value: "<strong>Alert example.</strong> This is an example of an alert."
                    },
                    {
                      name: "dismissable",
                      value: true
                    }
                  ],
                  config: [
                      {
                          name: "Theme",
                          options: [
                              {
                                name: "warning",
                                value: "alert-warning"
                              },
                              {
                                name: "success",
                                value: "alert-success"
                              },
                              {
                                name: "danger",
                                value: "alert-danger"
                              },
                              {
                                name: "info",
                                value: "alert-info"
                              }
                          ]
                      }
                  ]
              }
            }
        ]);

    }

    activate() {
        
    }
}

export = Buttons;