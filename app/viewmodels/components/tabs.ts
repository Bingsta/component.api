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
 
      this.component = new Component2("label", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
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
      ])
    }

    activate() {
        
    }
}

export = Tabs;