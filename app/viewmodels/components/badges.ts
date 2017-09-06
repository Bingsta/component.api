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

class Badges {

    public component: Component;

    constructor() {

        this.component = new Component("Badge", 
        [
            {
                name: "Base",
                HTML: {
                    code: `<span class="badge">34</span>`,
                    modifiers: [
                    ]   
                },
                Widget: {
                    code: `
                     <!-- ko widget: { 
                      kind: 'badge', 
                      config: #widgetConfiguration#
                    } --> <!-- /ko -->
                    `,
                    defaultOptions: [
                      {
                        name: "content",
                        value: "34"
                      }
                    ],
                    config: [
                        
                    ]
                }
            }
        ]);

    }

    activate() {
        
    }
}

export = Badges;