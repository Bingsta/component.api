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

class Test {

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
                    code: 'sdas',
                    config: [
                        {
                            name: "sodks",
                            options: [
                                {
                                    name: "dsokd",
                                    value: "sdokso"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                name: "Variation 2",
                HTML: {
                    code: `<button class="btn btn-default">Tickle me</button>`,
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
                            name: "state",
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
                        }
                    ]   
                },
                Widget: {
                    code: 'sdas',
                    config: [
                        {
                            name: "sodks",
                            options: [
                                {
                                    name: "dsokd",
                                    value: "sdokso"
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

export = Test;