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
        open: ko.observable(true)
      },
      { 
        title: "Components",  
        items: this.router.navigationModel().filter((route) => {
          return /components/i.test(route.moduleId);
        }),
        open: ko.observable(true)
      },
      { 
        title: "Layouts",  
        items: this.router.navigationModel().filter((route) => {
          return /layouts/i.test(route.moduleId);
        }),
        open: ko.observable(true)
      }
    ]);
  }

  public router = router.map([
      { route: '',                        moduleId: 'viewmodels/style/styleguide',        title: "Styleguide",    nav: true },
      //{ route: 'style/styleguide',        moduleId: 'viewmodels/style/styleguide',      title: "Styleguide",    nav: true },
      { route: 'components/buttons',      moduleId: 'viewmodels/components/buttons',      title: "Buttons",       nav: true },
      { route: 'components/alerts',       moduleId: 'viewmodels/components/alerts',       title: "Alerts",        nav: true },
      { route: 'components/labels',       moduleId: 'viewmodels/components/labels',       title: "Labels",        nav: true },
      { route: 'components/badges',       moduleId: 'viewmodels/components/badges',       title: "Badges",        nav: true },
      { route: 'components/tabs',         moduleId: 'viewmodels/components/tabs',         title: "Tabs",          nav: true },
      { route: 'components/pills',        moduleId: 'viewmodels/components/pills',        title: "Pills",         nav: true },
      { route: 'components/inputs',       moduleId: 'viewmodels/components/inputs',       title: "Inputs",        nav: true },
      { route: 'components/input-fields', moduleId: 'viewmodels/components/input-fields', title: "Input fields",  nav: true },
      { route: 'components/pagination',   moduleId: 'viewmodels/components/pagination',   title: "Pagination",    nav: true },
      { route: 'components/modals',       moduleId: 'viewmodels/components/modals',       title: "Modals",        nav: true },
      { route: 'components/data-list',    moduleId: 'viewmodels/components/data-list',    title: "Data lists",    nav: true },
      { route: 'components/breadcrumb',   moduleId: 'viewmodels/components/breadcrumb',   title: "Breadcrumb",    nav: true },
      { route: 'components/contacts',     moduleId: 'viewmodels/components/contacts',     title: "Contacts",      nav: true },
      { route: 'layouts/forms',           moduleId: 'viewmodels/layouts/forms',           title: "Forms",         nav: true }
    ]).buildNavigationModel();;

  activate() {
    return router.activate();
  }
}

export const shell = new Shell();