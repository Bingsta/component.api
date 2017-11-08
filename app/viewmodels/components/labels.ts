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
      ])
    }

    activate() {
        
    }
}

export = Labels;