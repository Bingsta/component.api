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

class ContactBlock {

  public component: Component2;

  constructor() {

    this.component = new Component2("Button", [
      {
        name: "Base",
        codeBases: [
          {
            name: 'HTML',
            code: `<div class="contact">
  <div class="contact__row">
    <div class="text-icon  contact__item  contact__name"><i class="icon icon-user"></i><span class="text">Lee Crosby</span></div>
  </div>
  <div class="contact__row">
    <div class="text-icon  contact-item  contact__phone"><i class="icon icon-phone2"></i><a class="text" href="tel:07837982" class="text">07837982</a></div>
    <div class="text-icon  contact-item  contact__email"><i class="icon icon-envelop"></i><a class="text" href="mailto:test.test@test.com" class="text">test.test@test.com</a></div>
  </div>
</div>`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: {
  kind: 'contact_block',
  config: {
    contact: {
      id: '9999999',
      name: 'Object Test',
      telephone: '07111111',
      email: 'object.test@anemail.com'
    }
  }
}--><!-- /ko -->`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: {
  kind: 'contact_block',
  config: {
    id: '7834982'
  }
}--><!-- /ko -->`
          }

        ],
        modifiers: []
      }
    ]);

    
    this.component.description = `<p class="font-up-2">Displays a list of related data. The title or label for the data is displayed on the left with the data to the right.</p>`;

  }

  activate() {

  }
}

export = ContactBlock;