export class ViewerComponentModel {
  public name: string;
  public html: string;
  public widget: string;
  public styles: Array<ComponentStyleCollection>;
  public initialise: Function;

  constructor(
      _name:string,
      _html:string, 
      _styles:Array<ComponentStyleCollection>, 
      _initialise?:Function, 
      _widget?:string,
      _widgetStyles?:Array<ComponentWidgetConfigurationCollection>
    ) {

    this.name = _name;

    this.html = _html;
    this.styles = _styles;

    this.widget = _widget;

    this.initialise = _initialise;

  }

}

export class Component {
  public variations: Array<ComponentVariations>;
  public name: string;

  constructor(_name:string, _variations: Array<ComponentVariations>) {
    this.variations = _variations;
  }
}

export interface ComponentVariations {
  name: string;
  HTML?: HTMLComponentVariation;
  Widget?: WidgetComponentVariation
}

export interface HTMLComponentVariation {
  code: string,
  modifiers: Array<CSSModifiers>
}

export interface CSSModifiers {
  name: string,
  modifiers: Array<CSSModifer>
}

export interface CSSModifer {
  name: string,
  css: string
}

export interface WidgetComponentVariation {
  code: string,
  config: Array<WidgetConfiguration>,
  defaultOptions: Array<WidgetConfigurationOption>
}

export interface WidgetConfiguration {
  name: string,
  options: Array<WidgetConfigurationOption>
}

export interface WidgetConfigurationOption {
  name: string,
  value: any
}

export interface ComponentStyleCollection {
  title:string;
  open: KnockoutObservable<boolean>;
  items: Array<ComponentStyle>; 
}

export interface ComponentStyle {
  name: string;
  className: string;
  applied: KnockoutObservable<boolean>;
}


export interface ComponentWidgetConfigurationCollection {
  title:string;
  options: Array<ComponentWidgetConfiguration>; 
}

export interface ComponentWidgetConfiguration {
  name: string;
  value: string;
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