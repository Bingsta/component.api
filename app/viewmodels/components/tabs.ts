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

class Tabs {

    public component: Component2;

    constructor() {
 
      this.component = new Component2("tabs", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<ul class="nav nav-tabs #theme#">
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">Menu 1</a></li>
    <li><a href="#">Menu 2</a></li>
    <li><a href="#">Menu 3</a></li>
</ul>`
            }
          ],
          modifiers: [
            {
              name: "Theme",
              mergeField: "#theme#",
              selectedOption: ko.observable(),
              options: [
                {
                  name: "Primary",
                  modifier: ""
                },
                {
                  name: "Secondary",
                  modifier: "nav-tabs--secondary"
                }
              ]
            }
          ]
        },
        {
            name: "Badge (count)",
            codeBases: [
              {
                name: "HTML",
                code: `<ul class="nav nav-tabs #theme#">
      <li class="active"><a href="#">Home  <span class="badge">4</span></a></li>
      <li><a href="#">Menu 1  <span class="badge">4</span></a></li>
      <li><a href="#">Menu 2  <span class="badge">4</span></a></li>
      <li><a href="#">Menu 3  <span class="badge">4</span></a></li>
  </ul>`
              }
            ],
            modifiers: [
              {
                name: "Theme",
                mergeField: "#theme#",
                selectedOption: ko.observable(),
                options: [
                  {
                    name: "Primary",
                    modifier: ""
                  },
                  {
                    name: "Secondary",
                    modifier: "nav-tabs--secondary"
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

export = Tabs;