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

class Labels {

    public component: Component2;

    constructor() {
 
      this.component = new Component2("label", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<span class="label#theme#">Label example</span>`
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
                  HTML: " label-default",
                  widget: `"label-default"`
                },
                {
                  name: "Primary",
                  HTML: " label-primary",
                  widget: `"label-primary"`
                },
                {
                  name: "Accent",
                  HTML: " label-accent",
                  widget: `"label-accent"`
                },
                {
                  name: "Warning",
                  HTML: " label-warning",
                  widget: `"label-warning"`
                },
                {
                  name: "Success",
                  HTML: " label-success",
                  widget: `"label-success"`
                },
                {
                  name: "Danger",
                  HTML: " label-danger",
                  widget: `"label-danger"`
                },
                {
                  name: "Info",
                  HTML: " label-info",
                  widget: `"label-info"`
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
          selectors: '.label-default<br/>.label-primary<br/>.label-accent<br/>.label-warning<br/>.label-success<br/>.label-danger<br/>.label-info',
          description: 'Sets the main styling for the component'
        }
      ],
      widgetOptions: [

      ],
      objectReference: [

      ]
    };
    
    this.component.description = `<p class="font-up-2">Labels hold small amounts of information.</p>`;

  }

  activate() {
      
  }
}

export = Labels;