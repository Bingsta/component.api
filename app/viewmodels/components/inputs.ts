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
                  modifier: "email"
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
          },{
            name: "Input groups",
            codeBases: [
              {
                name: "HTML",
                code: `<div class="input-group">
        <span class="input-group-addon" id="sizing-addon1">@</span>
        <input type="#type#" class="form-control" placeholder="Username" aria-describedby="sizing-addon1">
    </div>`
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
                      name: "Email input",
                      modifier: "email"
                    },
                    {
                      name: "Search input",
                      modifier: "email"
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