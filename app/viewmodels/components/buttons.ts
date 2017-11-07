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

class Buttons {

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

    this.component = new Component2("Button", [
      {
        name: "Base",
        codeBases: [
          {
            name: 'HTML',
            code: `<button class="btn#theme##size##state#">Press me</button>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: { kind: 'button', config: {"content": 'Press me widget'#theme##size##state#}} --> <!-- /ko -->`
          }

        ],
        modifiers: this.buttonMods
      },
      {
        name: "Badge (count)",
        codeBases: [
          {
            name: 'HTML',
            code: `<button class="btn#theme##size##state#">Messages <span class="badge">4</span></button>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: { kind: 'button', config: {"content": 'Messages', "badge": "42"#theme##size##state#}} --> <!-- /ko -->`
          }

        ],
        modifiers: this.buttonMods
      },
      {
        name: "Dropdown button",
        codeBases: [
          {
            name: 'HTML',
            code: `
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle #theme##size##state#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: { kind: 'dropdown_button', 
            config: {
              button: {
                content: "Hello"#theme##size##state#
              },
              menu: {
                items: [
                  { 
                      content: "item1",
                      action: function() {
                        alert("action 1")
                      }
                  },
                  { 
                      content: "item2",
                      action: function() {
                        alert("action 2")
                      }
                  }
                ]
              }
          
            }
          } --> <!-- /ko -->`
          }
        ],
        modifiers: this.buttonMods
      },
      {
        name: "Split button",
        codeBases: [
          {
            name: 'HTML',
            code: `
<div class="btn-group">
  <button type="button" class="btn#theme##size##state#">Action</button>
  <button type="button" class="btn dropdown-toggle#theme##size##state#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: { kind: 'splitbutton', 
            config: {
              button: {
                content: "Hello"#theme##size##state#
              },
              menu: {
                items: [
                  { 
                      content: "item1",
                      action: function() {
                        alert("action 1")
                      }
                  },
                  { 
                      content: "item2",
                      action: function() {
                        alert("action 2")
                      }
                  }
                ]
              }
          
            }
          } --> <!-- /ko -->`
          }
        ],
        modifiers: this.buttonMods
      }
    ]);

  }

  activate() {

  }
}

export = Buttons;