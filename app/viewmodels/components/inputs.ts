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

class Inputs {

    public component: Component2;

    constructor() {
 
      this.component = new Component2("inputs", [
        {
          name: "Inputs",
          codeBases: [
            {
              name: "HTML",
              code: `<input type="#type#" class="form-control" placeholder="Hint text">`
            }
          ],
          modifiers: [
            {
              name: "Input type",
              mergeField: "#type#",
              selectedOption: ko.observable(),
              options: [
                {
                  name: "Text input",
                  modifier: "text"
                },
                {
                  name: "Checkbox input",
                  modifier: "checkbox"
                },
                {
                  name: "Radio input",
                  modifier: "radio"
                },
                {
                  name: "Email input",
                  modifier: "email"
                },
                {
                  name: "Search input",
                  modifier: "search"
                },
                {
                  name: "Number input",
                  modifier: "number"
                },
                {
                  name: "Range input",
                  modifier: "range"
                },
                {
                  name: "Date input",
                  modifier: "date"
                },
                {
                  name: "Month input",
                  modifier: "month"
                },
                {
                  name: "Week input",
                  modifier: "week"
                },
                {
                  name: "Time input",
                  modifier: "time"
                },
                {
                  name: "Date & time input",
                  modifier: "datetime-local"
                },
                {
                  name: "Password input",
                  modifier: "password"
                },
                {
                  name: "Telephone input",
                  modifier: "tel"
                },
                {
                  name: "URL input",
                  modifier: "url"
                },
                {
                  name: "Colour input",
                  modifier: "color"
                },
                {
                  name: "File picker",
                  modifier: "file"
                }
              ]
            }
          ]
        },{
          name: "Text area",
          codeBases: [
            {
              name: "HTML",
              code: `<textarea class="form-control" rows="4">`
            }
          ],
          modifiers: [
          ]
        },{
            name: "Selects",
            codeBases: [
              {
                name: "HTML",
                code: `<select #type# class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</select>`
              }
            ],
            modifiers: [
              {
                name: "Input type",
                mergeField: "#type#",
                selectedOption: ko.observable(),
                options: [
                  {
                    name: "Single select",
                    modifier: ""
                  },
                  {
                    name: "Multiple select",
                    modifier: "multiple"
                  }
                ]
              }
            ]
          },
          {
            name: "Stacked checkbox/radio groups",
            codeBases: [
              {
                name: "HTML",
                code: `<div class="#type#">
  <label>
    <input type="#type#" name="options#type#s" id="options#type#s1" value="option1" class="form-control" checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="#type#">
  <label>
    <input type="#type#" name="options#type#s" id="options#type#s2" value="option2" class="form-control">
    Option two can be something else also as awesome
  </label>
</div>
<div class="#type# disabled">
  <label>
    <input type="#type#" name="options#type#s" id="options#type#s3" value="option3" class="form-control" disabled>
    Option three is disabled
  </label>
</div>`
              }
            ],
            modifiers: [
              {
                name: "Type",
                mergeField: "#type#",
                selectedOption: ko.observable(),
                options: [
                  {
                    name: "Radios",
                    modifier: "radio"
                  },
                  {
                    name: "Checkboxes",
                    modifier: "checkbox"
                  }
                ]
              }
            ]
          },
          {
            name: "Inline checkbox/radio groups",
            codeBases: [
              {
                name: "HTML",
                code: `<label class="#type#-inline">
  <input type="#type#" name="inline#type#Options" id="inline#type#1" class="form-control" value="option1"> Option 1
</label>
<label class="#type#-inline">
  <input type="#type#" name="inline#type#Options" id="inline#type#2" class="form-control" value="option2"> Option 2
</label>
<label class="#type#-inline">
  <input type="#type#" name="inline#type#Options" id="inline#type#3" class="form-control" value="option3"> Option 3
</label>`
              }
            ],
            modifiers: [
              {
                name: "Type",
                mergeField: "#type#",
                selectedOption: ko.observable(),
                options: [
                  {
                    name: "Radios",
                    modifier: "radio"
                  },
                  {
                    name: "Checkboxes",
                    modifier: "checkbox"
                  }
                ]
              }
            ]
          },
          {
            name: "Input icon add ons",
            codeBases: [
              {
                name: "HTML",
                code: `<div class="input-group">
    #content#
</div>`
              }
            ],
            modifiers: [
              {
                name: "Alignment",
                mergeField: "#content#",
                selectedOption: ko.observable(),
                options: [
                    {
                      name: "Left",
                      modifier: ` <span class="input-group-addon" id="sizing-addon1"><i class="icon icon-pencil"></i></span>
  <input type="text" class="form-control" placeholder="Hint text" aria-describedby="sizing-addon1">`
                    },
                    {
                      name: "Right",
                      modifier: ` <input type="search" class="form-control" placeholder="Hint text" aria-describedby="sizing-addon1">
  <span class="input-group-addon" id="sizing-addon1"><i class="icon icon-search3"></i></span>`
                    },
                    {
                      name: "Both",
                      modifier: ` <span class="input-group-addon" id="sizing-addon1">£</span>
  <input type="number" class="form-control" placeholder="Hint text" aria-describedby="sizing-addon1">
  <span class="input-group-addon" id="sizing-addon1">.00</span>`
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

export = Inputs;