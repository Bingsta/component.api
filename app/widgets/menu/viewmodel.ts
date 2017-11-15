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
      
      this.config = ko.observable(settings.config);

      if(!this.config().labelledby) {
        console.error('Missing labelledby value on menu component');
        this.config().labelledby = '';
      }

      this.config().items.forEach((item, index) => {
        if(!item.action){
          item.action = null;
        }

        if(!item.content){
          item.content = '';
        }

        if(!item.disabled){
          item.disabled = false;
        }

      });

    }
    else {
      throw "Missing configuration file";
    }
  }

  public ClickHandler(item: MenuItemComponentConfiguration):void {
    if(!item.disabled){
      item.action();
    }
  }

}

export = Menu;