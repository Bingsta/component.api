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
          HTML: " btn-default",
          widget: `"default"`
        },
        {
          name: "Primary",
          HTML: " btn-primary",
          widget: `"primary"`
        },
        {
          name: "Accent",
          HTML: " btn-accent",
          widget: `"accent"`
        },
        {
          name: "Warning",
          HTML: " btn-warning",
          widget: `"warning"`
        },
        {
          name: "Success",
          HTML: " btn-success",
          widget: `"success"`
        },
        {
          name: "Danger",
          HTML: " btn-danger",
          widget: `"danger"`
        },
        {
          name: "Info",
          HTML: " btn-info",
          widget: `"info"`
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
          widget: `"large"`
        },
        {
          name: "Small",
          HTML: " btn-sm",
          widget: `"small"`
        },
        {
          name: "Extra small",
          HTML: " btn-xs",
          widget: `"extra-small"`
        }
      ]
    },
    {
      name: "active",
      mergeField: "#active#",
      selectedOption: ko.observable(),
      options: [
        {
          name: "false",
          HTML: "",
          widget: `false`
        },
        {
          name: "true",
          HTML: " active",
          widget: `true`
        }
      ]
    },
    {
      name: "disabled",
      mergeField: "#disabled#",
      selectedOption: ko.observable(),
      options: [
        {
          name: "false",
          HTML: "",
          widget: `false`
        },
        {
          name: "true",
          HTML: " disabled",
          widget: `true`
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
            code: `<button class="btn#theme##size##active##disabled#">Press me</button>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: 
{ 
  kind: 'button', 
  config: 
  {
    "content": 'Press me widget'#theme##size##active##disabled#
  }
} --> <!-- /ko -->`
          }

        ],
        modifiers: this.buttonMods
      },
      {
        name: "Badge (count)",
        codeBases: [
          {
            name: 'HTML',
            code: `<button class="btn#theme##size##active##disabled#">Messages <span class="badge">4</span></button>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: 
{ 
  kind: 'button', 
  config: {
    "content": 'Messages', 
    "badge": "42"#theme##size##active##disabled#
  }
} --> <!-- /ko -->`
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
  <button type="button" class="btn dropdown-toggle #theme##size##active##disabled#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                content: "Hello"#theme##size##active##disabled#
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
  <button type="button" class="btn#theme##size##active##disabled#">Action</button>
  <button type="button" class="btn dropdown-toggle#theme##size##active##disabled#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            code: `<!-- ko widget: { kind: 'split_button', 
            config: {
              button: {
                content: "Hello"#theme##size##active##disabled#
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

    this.component.description = `<p class="font-up-2">Buttons are used to invoke an event</p>`;

    this.component.reference = {
      about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
      cssOptions: [
        {
          type: 'Theme',
          selectors: '.btn-default<br/>.btn-primary<br/>.btn-accent<br/>.btn-warning<br/>.btn-success<br/>.btn-danger<br/>.btn-info',
          description: 'Sets the main styling for the component'
        },
        {
          type: 'Size',
          selectors: '.btn-large<br/>.btn-sm<br/>.btn-xs',
          description: 'Sets the size of the component'
        },
        {
          type: 'State',
          selectors: '.active<br/>.disabled',
          description: 'Provides a look and feel for button states'
        }
      ],
      widgetOptions: [
        {
          kind: 'button',
          description: 'Standard button component',
          options: [
            {
              name: 'content',
              description: 'String which is data bound as the text content for the button',
              dataType: 'string',
              values:  'any',
              optional: false
            },
            {
              name: 'badge',
              description: 'Optional string value which, if included, adds a badge component into the button with the string bound as the text for the badge',
              dataType: 'string',
              values:  'any',
              optional: true
            },
            {
              name: 'theme',
              description: 'Sets the css theme selector',
              dataType: 'string',
              values:  'default<br/>primary<br/>accent<br/>warning<br/>success<br/>danger<br/>info',
              optional: true
            },
            {
              name: 'size',
              description: 'Sets the css size selector',
              dataType: 'string',
              values:  'large<br/>small<br/>extra-small',
              optional: true
            },
            {
              name: 'active',
              description: 'Sets the button active state',
              dataType: 'boolean',
              values:  'any',
              optional: true
            },
            {
              name: 'disabled',
              description: 'Sets the button disabled state',
              dataType: 'boolean',
              values:  'any',
              optional: true
            }
          ]
        },
        {
          kind: 'dropdown_button',
          description: 'Button which displays a menu with a choice of actions to invoke.',
          options: [
            {
              name: 'button',
              description: 'Widget configuration for a button (as above)',
              dataType: 'Button',
              values:  'any',
              optional: false
            },
            {
              name: 'menu',
              description: 'An array of items with a content string and action associated to them. The items will be displayed in the dropdown menu when the dropdown button is actived.',
              dataType: 'Array<MenuItemComponentConfiguration>',
              values:  'any',
              optional: false
            }
          ]
        },
        {
          kind: 'split_button',
          description: 'Button which has a main action plus a dropdown of additional actions to invoke.',
          options: [
            {
              name: 'button',
              description: 'Widget configuration for a button (as above)',
              dataType: 'Button',
              values:  'any',
              optional: false
            },
            {
              name: 'menu',
              description: 'An array of items with a content string and action associated to them. The items will be displayed in the dropdown menu when the dropdown button is actived.',
              dataType: 'Array<MenuItemComponentConfiguration>',
              values:  'any',
              optional: false
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

export = Buttons;