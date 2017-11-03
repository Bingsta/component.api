

export class Component2 {
  public variations: Array<ComponentVariations2>;
  public name: string;

  constructor(_name:string, _variations: Array<ComponentVariations2>) {
    this.variations = _variations;
  }
}

export interface ComponentVariations2 {
  name: string;
  codeBases: Array<ComponentCodeBase>;
  modifiers: Array<ComponentModifier>;
}

export interface ComponentCodeBase {
  name: string;
  code: string;
}

export interface ComponentModifier {
  name: string;
  mergeField: string;
  selectedOption: KnockoutObservable<ComponentModifierOption>;
  options: Array<ComponentModifierOption>;
}

export interface ComponentModifierOption {
  name: string;
  modifier: string;
}

export interface AccordianItemHeader {
  title: string;
  icon?: string;
}

export interface ViewModel {
  template: KnockoutObservable<string>;
  viewmodel: any;
}

export interface AccordianItem {
  open?: KnockoutObservable<boolean>;
  header: AccordianItemHeader;
  body: ViewModel;
}

export interface ModalComponentConfiguration {
  id?: KnockoutObservable<string>;
  title: KnockoutObservable<string>;
  body: ViewModel;
  footer?: ViewModel;
  size?: KnockoutObservable<string>;
}

export interface ButtonComponentConfiguration {
  content: string,
  theme?: string,
  size?: string,
  state?: string
}

export interface AlertComponentConfiguration {
  content: string,
  theme?: string,
  dismissable: boolean
}

export interface LabelsComponentConfiguration {
  content: string,
  theme?: string
}

export interface BadgeComponentConfiguration {
  content: string
}

export interface MenuItemComponentConfiguration {
  content: string,
  action: Function
}

export interface MenuComponentConfiguration {
  items: Array<MenuItemComponentConfiguration>
}

export interface DropdownButtonComponentConfiguration {
  button: ButtonComponentConfiguration,
  menu: MenuComponentConfiguration
}

export interface TabItemComponentConfiguration {
  title: string,
  badge: string,
  contentView: {
    view: any,
    model: any
  },
  active: KnockoutObservable<boolean>
}

export interface TabComponentConfiguration {
  theme: string,
  items: Array<TabItemComponentConfiguration>
}

export interface InputFieldConfiguration {
  id:string,
  label: string,
  value: string,
  placeholder: string,
  name:string,
  form: string,
  tabindex:number,
  spellcheck?: boolean,
  autofocus?: boolean,
  disabled?: boolean,
  required?: boolean,
  maxlength?: number,
  pattern?: string,
  readonly?: boolean
}

export interface TextAreaFieldConfiguration {
  id:string,
  label: string,
  value: string,
  placeholder: string,
  rows: number,
  name: string,
  form: string,
  tabindex:number,
  autofocus?: boolean,
  disabled?: boolean,
  required?: boolean,
  spellcheck?: boolean,
  maxlength?: number,
  readonly?:boolean
}

export interface SelectFieldConfiguration {
  id:string,
  label: string,
  name: string,
  form: string,
  tabindex:number,
  size?: number,
  disabled?: boolean,
  required?: boolean,
  multiple?: boolean,
  autofocus?: boolean
}

export interface CheckboxConfiguarion {
  id: string,
  label: string,
  tabindex: number,
  autofocus?: boolean,
  checked?: boolean,
  disabled?: boolean
}

export interface CheckboxGroupFieldConfiguration {
  label: string,
  name: string,
  form: string,
  options: Array<CheckboxConfiguarion>,
  disabled?: boolean
}