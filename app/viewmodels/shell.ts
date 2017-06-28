import * as router from 'plugins/router';
import * as app from 'durandal/app';
import * as ko from "knockout";


export class Shell {
  public accordianOpen:KnockoutObservable<boolean> = ko.observable(true);
  public navigationSection: KnockoutObservableArray<any> = ko.observableArray([]);

  constructor() {
    this.navigationSection([
      { 
        title: "Style",  
        items: this.router.navigationModel().filter((route) => {
          return /style/i.test(route.moduleId);
        }),
        open: ko.observable(false)
      },
      { 
        title: "Components",  
        items: this.router.navigationModel().filter((route) => {
          return /components/i.test(route.moduleId);
        }),
        open: ko.observable(false)
      }
    ]);
  }

  public router = router.map([
      { route: '',                        moduleId: 'viewmodels/home',                  title: "Home",          nav: true },
      { route: 'style/colours',           moduleId: 'viewmodels/style/colours',         title: "Colours",       nav: true },
      { route: 'style/type',              moduleId: 'viewmodels/style/type',            title: "type",          nav: true },
      { route: 'components/buttons',      moduleId: 'viewmodels/components/buttons',    title: "Buttons",       nav: true },
      { route: 'components/alerts',       moduleId: 'viewmodels/components/alerts',     title: "Alerts",        nav: true },
      { route: 'components/badges',       moduleId: 'viewmodels/components/badges',     title: "Badges",        nav: true },
      { route: 'components/labels',       moduleId: 'viewmodels/components/labels',     title: "Labels",        nav: true },
      { route: 'components/todal',        moduleId: 'viewmodels/components/modal',       title: "Modal",        nav: true },
      { route: 'components/test',         moduleId: 'viewmodels/components/test',       title: "Test",        nav: true }
    ]).buildNavigationModel();;

  activate() {
    return router.activate();
  }
}

export const shell = new Shell();