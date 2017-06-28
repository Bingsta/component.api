
export class ViewerComponentModel {
  public name: string;
  public html: string;
  public styles: Array<ComponentStyleCollection>;
  public initialise: Function;

  constructor(_name:string, _html:string, _styles:Array<ComponentStyleCollection>, _initialise?: Function) {
    this.name = _name;

    this.html = _html;
    this.styles = _styles;

    this.initialise = _initialise;
  }

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

export interface ModalComponent {
  id?: KnockoutObservable<string>;
  title: KnockoutObservable<string>;
  body: ViewModel;
  footer?: ViewModel;
  size?: KnockoutObservable<string>;
}