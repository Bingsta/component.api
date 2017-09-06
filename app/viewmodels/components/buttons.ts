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

        this.component = new Component("Button", 
        [
            {
                name: "Base",
                HTML: {
                    code: `<button class="btn btn-default">Press me</button>`,
                    modifiers: [
                        {
                            name: "Theme",
                            modifiers:[
                                {
                                    name:   "default",
                                    css:    "btn-default"
                                },
                                {
                                    name:   "primary",
                                    css:    "btn-primary"
                                },
                                {
                                    name:   "accent",
                                    css:    "btn-accent"
                                },
                                {
                                    name:   "warning",
                                    css:    "btn-warning"
                                },
                                {
                                    name:   "success",
                                    css:    "btn-success"
                                },
                                {
                                    name:   "danger",
                                    css:    "btn-danger"
                                },
                                {
                                    name:   "info",
                                    css:    "btn-info"
                                }
                            ]
                        },
                        {
                            name: "State",
                            modifiers: [
                                {
                                    name:   "default",
                                    css:    "",
                                },
                                {
                                    name:   "active",
                                    css:    "active"
                                },
                                {
                                    name:   "disabled",
                                    css:    "disabled"
                                }
                            ]
                        },
                        {
                            name: "Size",
                            modifiers: [
                                {
                                    name:   "default",
                                    css:    "",
                                },
                                {
                                    name:   "large",
                                    css:    "btn-lg"
                                },
                                {
                                    name:   "small",
                                    css:    "btn-sm"
                                },
                                {
                                    name:   "extra small",
                                    css:    "btn-xs"
                                }
                            ]
                        }
                    ]   
                },
                Widget: {
                    code: `
                     <!-- ko widget: { 
                      kind: 'button', 
                      config: #widgetConfiguration#
                    } --> <!-- /ko -->
                    `,
                    defaultOptions: [
                      {
                        name: "content",
                        value: "Press me please"
                      }
                    ],
                    config: [
                        {
                            name: "Theme",
                            options: [
                                {
                                  name: "default",
                                  value: "btn-default"
                                },
                                {
                                  name: "primary",
                                  value: "btn-primary"
                                },
                                {
                                  name: "accent",
                                  value: "btn-accent"
                                },
                                {
                                  name: "warning",
                                  value: "btn-warning"
                                },
                                {
                                  name: "success",
                                  value: "btn-success"
                                },
                                {
                                  name: "danger",
                                  value: "btn-danger"
                                }
                            ]
                        },
                        {
                          name: "Size",
                          options: [
                            {
                              name: "default",
                              value: ""
                            },
                            {
                              name: "large",
                              value: "btn-lg"
                            },
                            {
                              name: "small",
                              value: "btn-sm"
                            },
                            {
                              name: "extra-small",
                              value: "btn-xs"
                            }
                          ]
                        },
                        {
                          name: "State",
                          options: [
                            {
                              name: "default",
                              value: ""
                            },
                            {
                              name: "active",
                              value: "active"
                            },
                            {
                              name: "disabled",
                              value: "disabled"
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