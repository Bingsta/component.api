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

class Badges {

    public component: Component2;
    public buttonMods: Array<ComponentModifier> = [
      {
        name: "Theme",
        mergeField: "#theme#",
        selectedOption: ko.observable(),
        options: [
          {
            name: "Default",
            modifier: " btn-default"
          },
          {
            name: "Primary",
            modifier: " btn-primary"
          },
          {
            name: "Accent",
            modifier: " btn-accent"
          },
          {
            name: "Warning",
            modifier: " btn-warning"
          },
          {
            name: "Success",
            modifier: " btn-success"
          },
          {
            name: "Danger",
            modifier: " btn-danger"
          },
          {
            name: "Info",
            modifier: " btn-info"
          }
        ]
      },
      {
        name: "Size",
        mergeField: "#size#",
        selectedOption: ko.observable(),
        options: [
          {
            name: "Default",
            modifier: ""
          },
          {
            name: "Large",
            modifier: " btn-lg"
          },
          {
            name: "Small",
            modifier: " btn-sm"
          },
          {
            name: "Extra small",
            modifier: " btn-xs"
          }
        ]
      },
      {
        name: "State",
        mergeField: "#state#",
        selectedOption: ko.observable(),
        options: [
          {
            name: "Default",
            modifier: ""
          },
          {
            name: "Active",
            modifier: " active"
          },
          {
            name: "Disabled",
            modifier: " disabled"
          }
        ]
      }
    ];

    constructor() {

      this.component = new Component2("Badges", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<span class="badge">42</span>`
            }
          ],
          modifiers:[]
        },
        {
          name: "Link",
          codeBases: [
            {
              name: "HTML",
              code: `<a href="#">Inbox <span class="badge">42</span></a>`
            }
          ],
          modifiers:[]
        },
        {
          name: "Button",
          codeBases: [
            {
              name: "HTML",
              code: `<button class="btn#theme##size##state#" type="button">
              Messages <span class="badge">4</span>
            </button>`
            },
            {
              name: "widget",
              code: `<!-- ko widget: { kind: 'button', config: {"content": 'Messages', "badge": "42"#theme##size##state#}} --> <!-- /ko -->`
            }
          ],
          modifiers:this.buttonMods
        }
      ]);
    }

    activate() {
        
    }
}

export = Badges;