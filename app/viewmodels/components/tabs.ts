import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption,
  TabComponentConfiguration,
  TabItemComponentConfiguration
} from 'interfaces';

class Tabs {

    public component: Component2;

    public tabConfig: TabComponentConfiguration;

    constructor() {
 
      this.tabConfig = {
            theme: 'primary',
        items: [
          {
            title: 'tab 1',
            badge: '',
            contentView: {
              view: $(`<div><h2>Example</h2><p data-bind='html: content'></p></div>`).get(0),
              model: {
                content: '<h3>Databinding</h3><p>This is bound from a view model</p>'
              }
            },
            active: ko.observable(true)
          },
          {
            title: 'tab 2',
            badge: '',
            contentView: {
              view:  $(`<div><h2>Tab 2</h2><p>This has no binding</p></div>`).get(0),
              model: {}
            },
            active: ko.observable(false)
          },
          {
            title: 'tab 3',
            badge: '',
            contentView: {
              view:  $(`<div><h2>Tab 3</h2><p>This has no binding</p></div>`).get(0),
              model: {}
            },
            active: ko.observable(false)
          },
          {
            title: 'tab 4',
            badge: '',
            contentView: {
              view:  $(`<div><h2>Tab 4</h2><p>This has no binding</p></div>`).get(0),
              model: {}
            },
            active: ko.observable(false)
          }
        ]
      };

      this.component = new Component2("tabs", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<ul class="nav nav-tabs #theme#">
  <li class="active"><a href="javascript:void(0);"><span class="nav-tabs__title">Home</span></a></li>
  <li><a href="javascript:void(0);"><span class="nav-tabs__title">Menu 1</span></a></li>
  <li><a href="javascript:void(0);"><span class="nav-tabs__title">Menu 2</span></a></li>
  <li><a href="javascript:void(0);"><span class="nav-tabs__title">Menu 3</span></a></li>
</ul>`
            },
            {
              name: "widget",
              code: `
<!-- ko widget: { kind: 'tabs', config: 
  {
    items: [
      {
        title: 'Home',
        contentView: {
          view: $("<div><h2>Example tab content</h2><p data-bind='html: content'></p></div>").get(0),
          model: {
            content: '<h3>Databinding</h3><p>This text is bound from a view model</p>'
          }
        },
        active: ko.observable(true)
      },
      {
        title: 'Menu 1',
        contentView: {
          view:  $("<div><h2>Example tab content</h2><p>Tab content for tab 2... This example has no binding just a HTML string.</p></div>").get(0),
          model: {}
        },
        active: ko.observable(false)
      },
      {
        title: 'Menu 2',
        contentView: {
          view:  $("<div><h2>Tab 3</h2><p>Tab content for tab 2... This example has no binding just a HTML string.</p></div>").get(0),
          model: {}
        },
        active: ko.observable(false)
      },
      {
        title: 'Menu 3',
        contentView: {
          view:  $("<div><h2>Tab 4</h2><p>Tab content for tab 2... This example has no binding just a HTML string.</p></div>").get(0),
          model: {}
        },
        active: ko.observable(false)
      }
    ]
    #theme#
  }
}--><!--/ko-->`
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
                  HTML: "",
                  widget: ""
                },
                {
                  name: "Secondary",
                  HTML: "nav-tabs--secondary",
                  widget: `"secondary"`
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
      <li class="active"><a href="javascript:void(0)"><span class="nav-tabs__title">Home</span>  <span class="badge">4</span></a></li>
      <li><a href="javascript:void(0)"><span class="nav-tabs__title">Menu 1</span>  <span class="badge">4</span></a></li>
      <li><a href="javascript:void(0)"><span class="nav-tabs__title">Menu 2</span>  <span class="badge">4</span></a></li>
      <li><a href="javascript:void(0)"><span class="nav-tabs__title">Menu 3</span>  <span class="badge">4</span></a></li>
  </ul>`
              },
              {
                name: "widget",
                code: `
  <!-- ko widget: { kind: 'tabs', config: 
    {
      items: [
        {
          title: 'Home',
          badge: '42',
          contentView: {
            view: $("<div><h2>Example</h2><p data-bind='html: content'></p></div>").get(0),
            model: {
              content: '<h3>Databinding</h3><p>This is bound from a view model</p>'
            }
          },
          active: ko.observable(true)
        },
        {
          title: 'Menu 1',
          badge: '42',
          contentView: {
            view:  $("<div><h2>Tab 2</h2><p>This has no binding</p></div>").get(0),
            model: {}
          },
          active: ko.observable(false)
        },
        {
          title: 'Menu 2',
          badge: 'New!',
          contentView: {
            view:  $("<div><h2>Tab 3</h2><p>This has no binding</p></div>").get(0),
            model: {}
          },
          active: ko.observable(false)
        },
        {
          title: 'Menu 3',
          badge: 0,
          contentView: {
            view:  $("<div><h2>Tab 4</h2><p>This has no binding</p></div>").get(0),
            model: {}
          },
          active: ko.observable(false)
        }
      ]
      #theme#
    }
  }--><!--/ko-->`
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
                    HTML: "",
                    widget: ""
                  },
                  {
                    name: "Secondary",
                    HTML: "nav-tabs--secondary",
                    widget: `"secondary"`
                  }
                ]
              }
            ]
          }
      ]);

      this.component.description = `<p class="font-up-2">A tab keeps related content in a single container that is shown and hidden through navigation.</p>`;
      
      this.component.reference = {
        about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
        cssOptions: [
          {
            type: 'Theme',
            selectors: '.nav-tabs--secondary',
            description: 'Sets the main styling for the component. The default styling is the primary style.'
          }
        ],
        widgetOptions: [
          {
            kind: 'tabs',
            description: 'Standard tabs widget',
            options: [
              {
                name: 'theme',
                description: 'Sets the css theme selector',
                dataType: 'string',
                values:  'secondary',
                optional: true
              },
              {
                name: 'items',
                description: 'An array of objects which represent the individual tabs.',
                dataType: 'Array<<a href="#TabConfiguration">TabConfiguration</a>>',
                values:  '-',
                optional: true
              }
            ]
          }

        ],
        objectReference: [
          {
            name: 'TabConfiguration',
            description: "Object which represents an individual tab",
            options: [
              {
                name: 'title',
                description: 'Text which appears on the tab',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'Content view',
                description: 'A view model which gets bound as the view for the tab content.',
                dataType: '<a href="#ViewModel">ViewModel</a>',
                values: 'any',
                optional: false
              },
              {
                name: 'active',
                description: 'Boolean to indicate if the tab is currently active or not.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'badge',
                description: 'Binds as text to a badge component inside the tab. If ommitted or "0" badge does not appear.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              }
            ]
          },{
            name: 'ViewModel',
            description: "A durandal view-model object bound using durandal composition. See <a href=\"http://durandaljs.com/documentation/Using-Composition.html\" target=\"_new\">using composition</a>",
            options: [
              {
                name: 'view',
                description: 'HTML which gets bound to the view by durandals \'composition\'. If you pass in a string it is interperated as a view locator. If you pass in a HTMLElement it is rendered as the view.',
                dataType: 'string or HTMLElement',
                values: 'any',
                optional: false
              },
              {
                name: 'model',
                description: 'A view model which gets bound to the view.',
                dataType: 'any',
                values: 'any',
                optional: true
              }
            ]
          }
        ]
      }
    }

    activate() {
        
    }
}

export = Tabs;