import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DropdownButtonComponentConfiguration } from '../../interfaces';

class Badge {

    public config: KnockoutObservable<DropdownButtonComponentConfiguration>;

    constructor() {

    }

    activate(settings: any) {
        //add configuration file
        if (settings.config) {
            //this.config = ko.observable(settings.config);
            console.log("Badge component>>>");
            console.log(settings.config);
            this.config().button.content = "Hello";
            this.config().menu.items = [
                { 
                    content: "item1",
                },
                { 
                    content: "item2",
                }
            ]
        }
        else {
            throw "Missing configuration file"
        }
    }


}

export = Badge;