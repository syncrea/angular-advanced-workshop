import {BrowserModule} from '@angular/platform-browser';
import {
  ApplicationRef,
  DoBootstrap,
  Injector,
  NgModule,
  NgModuleFactory,
  NgModuleFactoryLoader, NgModuleRef,
  SystemJsNgModuleLoader
} from '@angular/core';
import {createCustomElement} from '@angular/elements';

export interface App {
  path: string;
  moduleFactory: NgModuleFactory<any>;
  moduleRef: NgModuleRef<any>;
  elementName: string;
}

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
  ]
})
export class AppModule implements DoBootstrap {
  loadedApps: App[] = [];

  constructor(private injector: Injector, private loader: NgModuleFactoryLoader) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    Promise.all(
      Array.from(document.querySelectorAll('[micro-app-path]'))
        .map(element => {
          const path = element.getAttribute('micro-app-path');
          return this.loader.load(path)
            .then(moduleFactory => {
              const moduleRef = moduleFactory.create(this.injector);
              return <App>{path, moduleFactory, moduleRef, elementName: element.tagName.toLowerCase()};
            });
        })
    ).then((apps: App[]) => {
      apps.forEach(app => {
        if (this.loadedApps.find(findApp => findApp.path === app.path)) {
          console.log(`Ignoring already loaded micro app for element ${app.elementName}`);
          return;
        }

        const appElement = createCustomElement((<any>app.moduleFactory.moduleType).entry, {
          injector: app.moduleRef.injector
        });
        customElements.define(app.elementName, appElement);

        this.loadedApps.push(app);
        console.log(`Micro app with path ${app.path} loaded and registered for element ${app.elementName}`);
      });
    }).catch(error => console.error(error));
  }
}
