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

class InputFields {

    public component: Component2;


    constructor() {
 
      this.component = new Component2("inputs", [
        {
          name: "Text inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/text-input-field',
  config: {
    label: "Text input example (for short text entries)",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Number inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/number-input-field',
  config: {
    label: "Number input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Email inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/email-input-field',
  config: {
    label: "Email input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Search inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/search-input-field',
  config: {
    label: "Search input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Telephone inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/telephone-input-field',
  config: {
    label: "Telephone input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Password inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/password-input-field',
  config: {
    label: "Password input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Range inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/range-input-field',
  config: {
    label: "Range input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "File inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/file-input-field',
  config: {
    label: "File input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Colour inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/colour-input-field',
  config: {
    label: "Colour input example",
    input: {
      id:'test_text',
      value: "",
      placeholder: "Hint text" ,
      name: 'textInputExample',
      form: 'inputtest',
      tabindex: 1,
      autofocus: true,
      disabled:false,
      required:false,
      spellcheck: true,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Textarea inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/textarea-input-field', 
  config: {
    label: "Textarea input example (for long text entries)",
    input: {
      id:'test_textarea',
      value: "",
      placeholder: "Hint text" ,
      rows: 4,
      name: 'textareaExample',
      form: 'inputtest',
      tabindex: 5
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: [
          ]
        },
        {
          name: "Date inputs",
          codeBases: [
            {
              name: "widget",
              code: `  <!-- ko 
  widget: { kind: 'inputs/date-input-field', 
  config: {
    label: "Date input example (for date entries)",
    input: {
      id:'date_text',
      value: '1975-05-19',
      name: 'dateInputExample',
      form: 'inputtest',
      tabindex: 6,
      autofocus: true,
      disabled:false,
      required:false,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Date & time input",
          codeBases: [
            {
              name: "widget",
              code: `  <!-- ko 
  widget: { kind: 'inputs/date-time-input-field', 
  config: {
    label: "Date & time input example",
    input: {
      id:'date_text',
      value: '1975-05-19',
      name: 'dateInputExample',
      form: 'inputtest',
      tabindex: 6,
      autofocus: true,
      disabled:false,
      required:false,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Time inputs",
          codeBases: [
            {
              name: "widget",
              code: `  <!-- ko 
  widget: { kind: 'inputs/time-input-field', 
  config: {
    label: "Time input example",
    input: {
      id:'date_text',
      value: '15:30',
      name: 'dateInputExample',
      form: 'inputtest',
      tabindex: 6,
      autofocus: true,
      disabled:false,
      required:false,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Month inputs",
          codeBases: [
            {
              name: "widget",
              code: `  <!-- ko 
  widget: { kind: 'inputs/month-input-field', 
  config: {
    label: "Month input example",
    input: {
      id:'date_text',
      value: '2017-10',
      name: 'dateInputExample',
      form: 'inputtest',
      tabindex: 6,
      autofocus: true,
      disabled:false,
      required:false,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Week inputs",
          codeBases: [
            {
              name: "widget",
              code: `  <!-- ko 
  widget: { kind: 'inputs/week-input-field', 
  config: {
    label: "Week input example",
    input: {
      id:'date_text',
      value: '2017-W23',
      name: 'dateInputExample',
      form: 'inputtest',
      tabindex: 6,
      autofocus: true,
      disabled:false,
      required:false,
      readonly:false
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "From - to date inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: {
  kind: 'inputs/from-to-input-field',
  config: {
    label: 'From - to example',
    input: {
      from: {
        label: "From",
        input: {
          id:'date_from_text',
          value: '1975-05-19',
          name: 'dateFromInputExample',
          form: 'inputtest',
          tabindex: 6,
          autofocus: true,
          disabled:false,
          required:false,
          readonly:false
        }
      },
      to: {
        label: "To",
        input: {
          id:'date_to_text',
          value: '2017-05-19',
          name: 'dateToInputExample',
          form: 'inputtest',
          tabindex: 7,
          autofocus: true,
          disabled:false,
          required:false,
          readonly:false
        }
      }
    }
  }
}--><!-- /ko -->`
            }
          ],
          modifiers: []
        },
        {
          name: "Select inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/select-input-field', 
  config: {
    label: "Select input example (for single option select)",
    input: {
      id:'test_selectbox',
      name: 'selectExample',
      form: 'inputtest',
      tabindex: 8,
      disabled:false,
      required:false,
      multiple:false,
      autofocus: false,
      options: [
        { value: '1', title: 'Option 1' },
        { value: '2', title: 'Option 2' },
        { value: '3', title: 'Option 3' },
        { value: '4', title: 'Option 4' },
        { value: '5', title: 'Option 5' },
      ]
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Multiple select inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/select-input-field', 
  config: {
    label: "Multiple select input example (for multiple option selection)",
    input: {
      id:'test_selectbox',
      name: 'selectExample',
      form: 'inputtest',
      tabindex: 8,
      disabled:false,
      required:false,
      multiple:true,
      autofocus: false,
      options: [
        { value: '1', title: 'Option 1' },
        { value: '2', title: 'Option 2' },
        { value: '3', title: 'Option 3' },
        { value: '4', title: 'Option 4' },
        { value: '5', title: 'Option 5' },
      ]
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Radio group input",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/radio-group-input-field', 
  config: {
    label: "Radio group example",
    input: {
      name: 'radioExample',
      form: 'inputtest',
      options: [
        {
          id: 'radio1',
          title: 'Option 1',
          value: '1',
          tabindex: 9
        },
        {
          id: 'radio2',
          title: 'Option 2',
          value: '2',
          tabindex: 10
        },
        {
          id: 'radio3',
          title: 'Option 3',
          value: '3',
          tabindex: 11
        }
      ]
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        },
        {
          name: "Checkbox group input",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/checkbox-group-input-field', 
  config: {
    label: "Checkbox group example",
    input: {
      name: 'checkExample',
      form: 'inputtest',
      options: [
        {
          id: 'check1',
          title: 'Option 1',
          value: '1',
          tabindex: 9
        },
        {
          id: 'check2',
          title: 'Option 2',
          value: '2',
          tabindex: 10
        },
        {
          id: 'check3',
          title: 'Option 3',
          value: '3',
          tabindex: 11
        }
      ]
    }
  }
}--><!-- /ko-->`
            }
          ],
          modifiers: []
        }
      ])
    }

    activate() {
    }
}

export = InputFields;