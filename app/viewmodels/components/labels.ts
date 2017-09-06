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

class Labels {

    public component: Component;

    constructor() {

        this.component = new Component("Label", 
        [
            {
                name: "Base",
                HTML: {
                    code: `<span class="label label-default">LABEL EXAMPLE</span>`,
                    modifiers: [
                        {
                            name: "Theme",
                            modifiers:[
                                {
                                    name:   "default",
                                    css:    "label-default"
                                },
                                {
                                    name:   "primary",
                                    css:    "label-primary"
                                },
                                {
                                    name:   "accent",
                                    css:    "label-accent"
                                },
                                {
                                    name:   "warning",
                                    css:    "label-warning"
                                },
                                {
                                    name:   "success",
                                    css:    "label-success"
                                },
                                {
                                    name:   "danger",
                                    css:    "label-danger"
                                },
                                {
                                    name:   "info",
                                    css:    "label-info"
                                }
                            ]
                        }
                    ]   
                },
                Widget: {
                    code: `
                     <!-- ko widget: { 
                      kind: 'label', 
                      config: #widgetConfiguration#
                    } --> <!-- /ko -->
                    `,
                    defaultOptions: [
                      {
                        name: "content",
                        value: "LABEL EXAMPLE"
                      }
                    ],
                    config: [
                        {
                            name: "Theme",
                            options: [
                                {
                                  name: "default",
                                  value: "label-default"
                                },
                                {
                                  name: "primary",
                                  value: "label-primary"
                                },
                                {
                                  name: "accent",
                                  value: "label-accent"
                                },
                                {
                                  name: "warning",
                                  value: "label-warning"
                                },
                                {
                                  name: "success",
                                  value: "label-success"
                                },
                                {
                                  name: "danger",
                                  value: "label-danger"
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

export = Labels;