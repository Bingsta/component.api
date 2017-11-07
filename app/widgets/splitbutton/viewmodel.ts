import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DropdownButtonComponentConfiguration } from 'interfaces';

class Splitbutton {

    public config: KnockoutObservable<DropdownButtonComponentConfiguration>;

    constructor() {

    }

    activate(settings: any) {
        //add configuration file
        if (settings.config) {
            //this.config = ko.observable(settings.config);
            console.log("dropdown_button component>>>");
            console.log(settings.config);
            this.config = ko.observable(settings.config);
        }
        else {
            throw "Missing configuration file"
        }
    }


}

export = Splitbutton;