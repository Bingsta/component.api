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
  kind: 'group_contact_block',
  config: {
    group: {
      id: '48737492',
      name: 'Mr & Mrs Group Object Test',
      icon: 'icon-couplemalefemale',
      contacts: [
        {
          id: '983292',
          name: 'Testy Test',
          telephone: '072872367',
          email: 'testy.test@test.email.com'
        },
        {
          id: '8794539',
          name: 'Other Test',
          telephone: '072872367',
          email: 'other.test@test.email.com'
        }
      ]
    }
  }
}--><!-- /ko -->`
          },
          {
            name: 'widget',
            code: `<!-- ko widget: {
  kind: 'group_contact_block',
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
          description: 'Group contact details components',
          options: [
            {
              name: 'contact',
              description: 'Object representing the group to be displayed.',
              dataType: 'GroupConfiguration',
              values:  'any',
              optional: true
            },
            {
              name: 'id',
              description: 'ID of the group you want to display. If you pass through an ID instead of a contact object the component will look up the group object from the data point.',
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