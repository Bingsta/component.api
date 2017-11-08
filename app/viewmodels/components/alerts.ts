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
          widget: `"alert-warning"`
        },
        {
          name: "Success",
          HTML: " alert-success",
          widget: `"alert-success"`
        },
        {
          name: "Danger",
          HTML: " alert-danger",
          widget: `"alert-danger"`
        },
        {
          name: "Info",
          HTML: " alert-info",
          widget: `"alert-info"`
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
            code: `
            <!-- ko widget: { 
             kind: 'alert', 
             config: {"content": "<strong>Alert example.</strong> This is an example of an alert."#theme#}
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
    ])
  }

  activate() {

  }
}

export = Alerts;