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
} from '../../interfaces';

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
  <li class="active"><a href="#"><span class="nav-tabs__title">Home</span></a></li>
  <li><a href="#"><span class="nav-tabs__title">Menu 1</span></a></li>
  <li><a href="#"><span class="nav-tabs__title">Menu 2</span></a></li>
  <li><a href="#"><span class="nav-tabs__title">Menu 3</span></a></li>
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
        badge: '',
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
        badge: '',
        contentView: {
          view:  $("<div><h2>Example tab content</h2><p>Tab content for tab 2... This example has no binding just a HTML string.</p></div>").get(0),
          model: {}
        },
        active: ko.observable(false)
      },
      {
        title: 'Menu 2',
        badge: '',
        contentView: {
          view:  $("<div><h2>Tab 3</h2><p>Tab content for tab 2... This example has no binding just a HTML string.</p></div>").get(0),
          model: {}
        },
        active: ko.observable(false)
      },
      {
        title: 'Menu 3',
        badge: '',
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
      <li class="active"><a href="#"><span class="nav-tabs__title">Home</span>  <span class="badge">4</span></a></li>
      <li><a href="#"><span class="nav-tabs__title">Menu 1</span>  <span class="badge">4</span></a></li>
      <li><a href="#"><span class="nav-tabs__title">Menu 2</span>  <span class="badge">4</span></a></li>
      <li><a href="#"><span class="nav-tabs__title">Menu 3</span>  <span class="badge">4</span></a></li>
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