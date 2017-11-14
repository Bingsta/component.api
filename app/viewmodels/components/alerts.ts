import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import {
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption
} from 'interfaces';

class Alerts {

  public component: Component2;
  public mods: Array<ComponentModifier> = [
    {
      name: "Theme",
      mergeField: "#theme#",
      selectedOption: ko.observable(),
      options: [
        {
          name: "Warning",
          HTML: " alert-warning",
          widget: `"warning"`
        },
        {
          name: "Success",
          HTML: " alert-success",
          widget: `"success"`
        },
        {
          name: "Danger",
          HTML: " alert-danger",
          widget: `"danger"`
        },
        {
          name: "Info",
          HTML: " alert-info",
          widget: `"info"`
        }
      ]
    }
  ];

  constructor() {
    this.component = new Component2("Alert", [
      {
        name: "Base",
        codeBases: [
          {
            name: 'HTML',
            code: `<div class="alert#theme#"><strong>Alert example.</strong> This is an example of an alert.</div>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: { 
  kind: 'alert', 
  config: {
    "content": "<strong>Alert example.</strong> This is an example of an alert."#theme#
  }
} --> <!-- /ko -->`
          }

        ],
        modifiers: this.mods
      },
      {
        name: "Dismissable alert",
        codeBases: [
          {
            name: 'HTML',
            code:`
            <div class="alert  alert-dismissable#theme#">
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>Alert example.</strong> This is an example of an dismissable alert.
            </div>
            `
          },
          {
            name: 'widget',
            code:`
            <!-- ko widget: { 
  kind: 'alert', 
  config: {
    "content": "<strong>Alert example.</strong> This is an example of an dismissable alert.",
    "dismissable": true#theme#
  }
} --> <!-- /ko -->`
          }
        ],
        modifiers: this.mods
      }
    ]);
    
    this.component.reference = {
      about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
      cssOptions: [
        {
          type: 'Theme',
          selectors: '.alert-warning<br/>.alert-success<br/>.alert-danger<br/>.alert-info',
          description: 'Sets the main styling for the component'
        }
      ],
      widgetOptions: [
        {
          kind: 'alert',
          description: 'Standard alert component',
          options: [
            {
              name: 'content',
              description: 'HTML string which is data bound as the HTML content for the alert box',
              dataType: 'string',
              values:  'any',
              optional: false
            },
            {
              name: 'theme',
              description: 'Sets the css theme selector',
              dataType: 'string',
              values:  'warning<br/>success<br/>danger<br/>info',
              optional: true
            }
          ]
        }

      ],
      objectReference:[]
    }
  }

  activate() {

  }
}

export = Alerts;