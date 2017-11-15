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
            HTML: " btn-default",
            widget: `"btn-default"`
          },
          {
            name: "Primary",
            HTML: " btn-primary",
            widget: `"btn-primary"`
          },
          {
            name: "Accent",
            HTML: " btn-accent",
            widget: `"btn-accent"`
          },
          {
            name: "Warning",
            HTML: " btn-warning",
            widget: `"btn-warning"`
          },
          {
            name: "Success",
            HTML: " btn-success",
            widget: `"btn-success"`
          },
          {
            name: "Danger",
            HTML: " btn-danger",
            widget: `"btn-danger"`
          },
          {
            name: "Info",
            HTML: " btn-info",
            widget: `"btn-info"`
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
            HTML: "",
            widget: ""
          },
          {
            name: "Large",
            HTML: " btn-lg",
            widget: `"btn-lg"`
          },
          {
            name: "Small",
            HTML: " btn-sm",
            widget: `"btn-sm"`
          },
          {
            name: "Extra small",
            HTML: " btn-xs",
            widget: `"btn-xs"`
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
            HTML: "",
            widget: ""
          },
          {
            name: "Active",
            HTML: " active",
            widget: `"active"`
          },
          {
            name: "Disabled",
            HTML: " disabled",
            widget: `"disabled"`
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
      
      this.component.description = `<p class="font-up-2">Badges are labels which hold small amounts of information. Associate them to badges and links to show counts or states.</p>`;
      
    }

    activate() {
        
    }
}

export = Badges;