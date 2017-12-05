import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { GroupContactBlockConfiguration, GroupConfiguration, ContactConfiguration } from 'interfaces';

class GroupContactBlock {

  public config: KnockoutObservable<GroupContactBlockConfiguration>;
  public group: KnockoutObservable<GroupConfiguration>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      console.log(">>>>>>>>>>>>>>>> here")
      if(this.config().group) {
        this.group = ko.observable(this.config().group);
      }
      else if(this.config().id) {
        this.group = ko.observable(this.getGroup(this.config().id))
      }
      else {
        throw "Missing group information. Requires an object or id string."
      }

    }
    else{
      throw "Missing configuration file"
    }
  }

  private getGroup(id:string): GroupConfiguration {
    let groupFound: boolean = true;

    if(groupFound) {
      return {
        id: '48737492',
        name: 'Mr & Mrs Group ID Test',
        icon: 'icon-couplemalefemale',
        contacts: [
          {
            id: '983292',
            name: 'Testy Test',
            telephone: '072872367',
            email: 'testy.test@test.email.com'
          },
          {
            id: '8794539',
            name: 'Other Test',
            telephone: '072872367',
            email: 'other.test@test.email.com'
          }
        ]
      }
    }
    else {
      throw "Unable to find group by id"
    }
  }

}

export = GroupContactBlock;