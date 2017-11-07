import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { MenuComponentConfiguration, MenuItemComponentConfiguration } from 'interfaces';

class Menu {

  public config: KnockoutObservable<MenuComponentConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      //this.config = ko.observable(settings.config);
      console.log("menu component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);

    }
    else {
      throw "Missing configuration file"
    }
  }


}

export = Menu;