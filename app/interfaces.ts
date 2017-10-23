

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
  view: string,
  viewmodel: any,
  active: KnockoutObservable<boolean>
}

export interface TabComponentConfiguration {
  items: Array<TabItemComponentConfiguration>
}