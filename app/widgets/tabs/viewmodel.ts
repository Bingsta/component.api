import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { TabComponentConfiguration, TabItemComponentConfiguration } from '../../interfaces';

class Tabs {

  public config: KnockoutObservable<TabComponentConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("Tabs component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);

    }
    else {
      throw "Missing configuration file"
    }
  }

  public handleTabClicked(item: TabItemComponentConfiguration, event: JQueryEventObject):void{
    let self: Tabs = this;
    self.config().items.forEach((theItem) => {theItem.active(false);});
    item.active(true);
  }

}

export = Tabs;