

export class Component2 {
  public variations: Array<ComponentVariations2>;
  public name: string;
  public description: string;
  public reference: Reference;

  constructor(_name:string, _variations: Array<ComponentVariations2>) {
    this.variations = _variations;
  }
}

export interface Reference {
  about?: string
  cssOptions?: Array<CssClass>
  widgetOptions?: Array<WidgetReference>
}

export interface CssClass {
  type: string
  selectors: string
  description: string
}

export interface WidgetReference {
  kind: string
  description: string
  options: Array<WidgetOption>
}

export interface WidgetOption {
  name: string
  description: string
  dataType: string
  values: string
  optional: boolean
}

export interface ComponentVariations2 {
  name: string
  codeBases: Array<ComponentCodeBase>
  modifiers: Array<ComponentModifier>
}

export interface ComponentCodeBase {
  name: string
  code: string
}

export interface ComponentModifier {
  name: string
  mergeField: string
  selectedOption: KnockoutObservable<ComponentModifierOption>
  options: Array<ComponentModifierOption>
}

export interface ComponentModifierOption {
  name: string
  HTML?: any
  widget?: any
}

export interface ViewModel {
  view: any
  model?: any
}

export interface ModalComponentConfiguration {
  id?: string
  title: string
  bodyView: ViewModel
  footerView?: ViewModel
  size?: string
}

export interface ButtonComponentConfiguration {
  content: string
  badge?: string
  theme?: string
  size?: string
  active?: boolean
  disabled?: boolean
}

export interface AlertComponentConfiguration {
  content: string
  theme?: string
  dismissable: boolean
}

export interface LabelsComponentConfiguration {
  content: string
  theme?: string
}

export interface BadgeComponentConfiguration {
  content: string
}

export interface MenuItemComponentConfiguration {
  content: string
  action: Function
}

export interface MenuComponentConfiguration {
  items: Array<MenuItemComponentConfiguration>
}

export interface DropdownButtonComponentConfiguration {
  button: ButtonComponentConfiguration
  menu: MenuComponentConfiguration
}

export interface TabItemComponentConfiguration {
  title: string
  badge: string
  contentView: ViewModel
  active: KnockoutObservable<boolean>
}

export interface TabComponentConfiguration {
  theme: string
  items: Array<TabItemComponentConfiguration>
}

export interface BaseInputConfiguration {
  id:string
  name:string
  form: string
  tabindex:number
  placeholder?: string
  value?: string
  autofocus?: boolean
  disabled?: boolean
  required?: boolean
  readonly?: boolean
}

export interface InputConfiguration extends BaseInputConfiguration {
  type: string
  spellcheck?: boolean
  maxlength?: number
  pattern?: string
  addon?: boolean
  step?: number
  datalist?: DatalistConfiguration
}

export interface InputFieldConfiguration {
  label: string
  input: InputConfiguration
}

export interface TextAreaConfiguration extends BaseInputConfiguration {
  rows: number
  name: string
  form: string
  spellcheck?: boolean
  maxlength?: number
}

export interface TextAreaFieldConfiguration {
  label: string
  input: TextAreaConfiguration
}

export interface DateInputConfiguration extends BaseInputConfiguration {
  type: string
  max?: Date
  min?: Date
  step?: string
  addon?: boolean
  datalist?: DatalistConfiguration
}

export interface DateFieldConfiguration {
  label: string
  input: DateInputConfiguration
}

export interface SelectInputConfiguration {
  id:string
  name: string
  form: string
  tabindex:number
  options: Array<optionConfiguration>
  size?: number
  disabled?: boolean
  required?: boolean
  multiple?: boolean
  autofocus?: boolean
}

export interface SelectFieldConfiguration {
  label: string
  input: SelectInputConfiguration
}
export interface optionConfiguration {
  title: string
  value: string
}

export interface CheckboxRadioGroupConfiguration{
  name: string
  form: string
  options: Array<CheckboxRadioConfiguarion>
}

export interface CheckboxRadioGroupFieldConfiguration  {
  label: string
  input: CheckboxRadioGroupConfiguration
}

export interface CheckboxRadioConfiguarion {
  id: string
  title: string
  tabindex: number
  autofocus?: boolean
  checked?: boolean
  disabled?: boolean
}

export interface FromToInputFieldConfiguration {
  label: string
  input: FromToInputConfiguration
}

export interface FromToInputConfiguration {
  from: FromToItem
  to: FromToItem
}

export interface FromToItem {
  label: string
  input: {
    kind: string
    config: DateFieldConfiguration
  }
}

export interface FixedTextFieldConfiguration {
  label: string
  text: string
}

export interface DataListOptionConfiguration {
  value: string
  label: string
} 

export interface DatalistConfiguration {
  id: string
  options:Array<DataListOptionConfiguration>
}