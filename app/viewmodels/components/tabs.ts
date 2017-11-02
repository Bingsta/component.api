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
 
<<<<<<< HEAD
      this.component = new Component2("label", [
=======
      this.component = new Component2("tabs", [
>>>>>>> 986e991f0b48aef8684585ebd5dd7184fa57b69c
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
<<<<<<< HEAD
              code: `<span class="label#theme#">Label example</span>`
            },{
              name: "widget",
              code: `<!-- ko widget: { kind: 'tabs', 
              config: {
                items: [
                  {
                    title: "home",
                    view: '<h3 class="cl-heading">Home content</h3><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>',
                    viewmodel: {},
                    active: ko.observable(true)
                  },
                  {
                    title: "profile",
                    view: '<h3 class="cl-heading">Profile content</h3><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>',
                    viewmodel: {},
                    active: ko.observable(false)
                  },
                  {
                    title: "messages",
                    view: '<h3 class="cl-heading">Messages content</h3><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>',
                    viewmodel: {},
                    active: ko.observable(false)
                  },
                  {
                    title: "settings",
                    view: '<h3 class="cl-heading">Settings content</h3><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>',
                    viewmodel: {},
                    active: ko.observable(false)
                  }
                ]
              }
            } --> <!-- /ko -->`
            }
          ],
          modifiers:[]
        }
=======
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
>>>>>>> 986e991f0b48aef8684585ebd5dd7184fa57b69c
      ])
    }

    activate() {
        
    }
}

export = Tabs;