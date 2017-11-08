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

class Tags {

    public component: Component2;

    constructor() {
 
      this.component = new Component2("tags", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<span class="tags #theme#">Tag example</span>`
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
                  HTML: "tags-default",
                  widget: `"tags-default"`
                },
                {
                  name: "Primary",
                  HTML: "tags-primary",
                  widget: `"tags-primary"`
                },
                {
                  name: "Accent",
                  HTML: "tags-accent",
                  widget: `"tags-accent"`
                },
                {
                  name: "Success",
                  HTML: "tags-success",
                  widget: `"tags-success"`
                },
                {
                  name: "Warning",
                  HTML: "tags-warning",
                  widget: `"tags-warning"`
                },
                {
                  name: "Danger",
                  HTML: "tags-danger",
                  widget: `"tags-danger"`
                },
                {
                  name: "Info",
                  HTML: "tags-info",
                  widget: `"tags-info"`
                }
              ]
            }
          ]
        },
        {
            name: "Tag with icon",
            codeBases: [
              {
                name: "HTML",
                code: `<span class="tags #theme#"><i class="icon icon-checkmark3"></i> <span>Tag example</span></span>`
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
                      HTML: "tags-default",
                      widget: `"tags-default"`
                    },
                    {
                      name: "Primary",
                      HTML: "tags-primary",
                      widget: `"tags-primary"`
                    },
                    {
                      name: "Accent",
                      HTML: "tags-accent",
                      widget: `"tags-accent"`
                    },
                    {
                      name: "Success",
                      HTML: "tags-success",
                      widget: `"tags-success"`
                    },
                    {
                      name: "Warning",
                      HTML: "tags-warning",
                      widget: `"tags-warning"`
                    },
                    {
                      name: "Danger",
                      HTML: "tags-danger",
                      widget: `"tags-danger"`
                    },
                    {
                      name: "Info",
                      HTML: "tags-info",
                      widget: `"tags-info"`
                    }
                ]
              }
            ]
          },
          {
              name: "Dismissable tag",
              codeBases: [
                {
                  name: "HTML",
                  code: `<span class="tags tags-dismissable #theme#"><span>Tag example</span> <i class="icon icon-cross3" data-bind="click:function(){alert('Test');}"></i></span>`
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
                        HTML: "tags-default",
                        widget: `"tags-default"`
                      },
                      {
                        name: "Primary",
                        HTML: "tags-primary",
                        widget: `"tags-primary"`
                      },
                      {
                        name: "Accent",
                        HTML: "tags-accent",
                        widget: `"tags-accent"`
                      },
                      {
                        name: "Success",
                        HTML: "tags-success",
                        widget: `"tags-success"`
                      },
                      {
                        name: "Warning",
                        HTML: "tags-warning",
                        widget: `"tags-warning"`
                      },
                      {
                        name: "Danger",
                        HTML: "tags-danger",
                        widget: `"tags-danger"`
                      },
                      {
                        name: "Info",
                        HTML: "tags-info",
                        widget: `"tags-info"`
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

export = Tags;