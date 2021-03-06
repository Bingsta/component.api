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

    
    this.component.description = `<p class="font-up-2">Displays the main contact information for a contact.</p>`;
    
    this.component.reference = {
      about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
      cssOptions: [
      ],
      widgetOptions: [
        {
          kind: 'contact_block',
          description: 'Contact details components',
          options: [
            {
              name: 'contact',
              description: 'Object representing the contact to be displayed.',
              dataType: 'ContactConfiguration',
              values:  'any',
              optional: true
            },
            {
              name: 'id',
              description: 'ID of the contact you want to display. If you pass through an ID instead of a contact object the component will look up the contact object from the data point.',
              dataType: 'string',
              values:  'any',
              optional: true
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

export = ContactBlock;