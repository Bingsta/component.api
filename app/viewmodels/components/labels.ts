import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption
} from '../../interfaces';

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
                  modifier: " label-default"
                },
                {
                  name: "Primary",
                  modifier: " label-primary"
                },
                {
                  name: "Accent",
                  modifier: " label-accent"
                },
                {
                  name: "Warning",
                  modifier: " label-warning"
                },
                {
                  name: "Success",
                  modifier: " label-success"
                },
                {
                  name: "Danger",
                  modifier: " label-danger"
                },
                {
                  name: "Info",
                  modifier: " label-info"
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