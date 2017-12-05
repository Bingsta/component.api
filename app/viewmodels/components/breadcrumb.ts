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

class Breadcrumb {

  public component: Component2;

  constructor() {

    this.component = new Component2("Button", [
      {
        name: "Base",
        codeBases: [
          {
            name: 'HTML',
            code: `<ol class="breadcrumb">
  <li><a href="#">Property list</a></li>
  <li><a href="#">21 Arcacia Avenue...</a></li>
  <li class="active">Landlord</li>
  <li class="previous"><a href="#">Previous</a></li>
  <li class="next"><a href="#">Next</a></li>
</ol>`
          }

        ],
        modifiers: []
      }
    ]);

    this.component.description = `<p class="font-up-2">Helps the user navigate between lists and enities.</p>`;


  }

  activate() {

  }
}

export = Breadcrumb;