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

class pill {

    public component: Component2;

    constructor() {
 
      this.component = new Component2("pill", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<span class="pill #theme#">Pill example</span>`
            }
          ],
          modifiers: [
            {
              name: "Theme",
              mergeField: "#theme#",
              selectedOption: ko.observable(),
              options: [
                {
                  name: "Default",
                  HTML: "pill-default",
                  widget: `"pill-default"`
                },
                {
                  name: "Primary",
                  HTML: "pill-primary",
                  widget: `"pill-primary"`
                },
                {
                  name: "Accent",
                  HTML: "pill-accent",
                  widget: `"pill-accent"`
                },
                {
                  name: "Success",
                  HTML: "pill-success",
                  widget: `"pill-success"`
                },
                {
                  name: "Warning",
                  HTML: "pill-warning",
                  widget: `"pill-warning"`
                },
                {
                  name: "Danger",
                  HTML: "pill-danger",
                  widget: `"pill-danger"`
                },
                {
                  name: "Info",
                  HTML: "pill-info",
                  widget: `"pill-info"`
                }
              ]
            }
          ]
        },
        {
            name: "Pill with icon",
            codeBases: [
              {
                name: "HTML",
                code: `<span class="pill #theme#"><i class="icon icon-checkmark3"></i> <span>Pill example</span></span>`
              }
            ],
            modifiers: [
              {
                name: "Theme",
                mergeField: "#theme#",
                selectedOption: ko.observable(),
                options: [
                    {
                      name: "Default",
                      HTML: "pill-default",
                      widget: `"pill-default"`
                    },
                    {
                      name: "Primary",
                      HTML: "pill-primary",
                      widget: `"pill-primary"`
                    },
                    {
                      name: "Accent",
                      HTML: "pill-accent",
                      widget: `"pill-accent"`
                    },
                    {
                      name: "Success",
                      HTML: "pill-success",
                      widget: `"pill-success"`
                    },
                    {
                      name: "Warning",
                      HTML: "pill-warning",
                      widget: `"pill-warning"`
                    },
                    {
                      name: "Danger",
                      HTML: "pill-danger",
                      widget: `"pill-danger"`
                    },
                    {
                      name: "Info",
                      HTML: "pill-info",
                      widget: `"pill-info"`
                    }
                ]
              }
            ]
          },
          {
              name: "Dismissable pill",
              codeBases: [
                {
                  name: "HTML",
                  code: `<span class="pill pill-dismissable #theme#"><span>Pill example</span> <i class="icon icon-cross3" data-bind="click:function(){alert('Test');}"></i></span>`
                }
              ],
              modifiers: [
                {
                  name: "Theme",
                  mergeField: "#theme#",
                  selectedOption: ko.observable(),
                  options: [
                      {
                        name: "Default",
                        HTML: "pill-default",
                        widget: `"pill-default"`
                      },
                      {
                        name: "Primary",
                        HTML: "pill-primary",
                        widget: `"pill-primary"`
                      },
                      {
                        name: "Accent",
                        HTML: "pill-accent",
                        widget: `"pill-accent"`
                      },
                      {
                        name: "Success",
                        HTML: "pill-success",
                        widget: `"pill-success"`
                      },
                      {
                        name: "Warning",
                        HTML: "pill-warning",
                        widget: `"pill-warning"`
                      },
                      {
                        name: "Danger",
                        HTML: "pill-danger",
                        widget: `"pill-danger"`
                      },
                      {
                        name: "Info",
                        HTML: "pill-info",
                        widget: `"pill-info"`
                      }
                  ]
                }
              ]
            }
      ]);
      
      this.component.reference = {
        about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
        cssOptions: [
          {
            type: 'Theme',
            selectors: '.pill-default<br/>.pill-primary<br/>.pill-accent<br/>.pill-warning<br/>.pill-success<br/>.pill-danger<br/>.pill-info',
            description: 'Sets the main styling for the component'
          }
        ],
        widgetOptions: [

        ],
        objectReference: [

        ]
      };

      this.component.description = `<p class="font-up-2">A pill represents an object that can be viewed with or without an icon.</p>`;
      
    }

    activate() {
    }
}

export = pill;