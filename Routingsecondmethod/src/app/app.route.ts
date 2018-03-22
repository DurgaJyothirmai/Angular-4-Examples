import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';
import { Route5Component } from './route5/route5.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


export const appRoute: Routes = [
    {
        'path':'home',
        'component': Route1Component
    },
    {
        'path':'about',
        'component': Route2Component
    },
    {
        'path': 'contact',
        'component': Route3Component,
        'children': [
            {
                'path':'policy',
                'component': Route4Component
            },
            {
                'path':'employeeDetails/:id',
                'component': Route5Component
            }
        ]
    },
    {
        'path': '',
        'component': Route1Component
    },
    {
        'path':'**',
        'component': PageNotFoundComponent
    }
]

export const routerConfig:ModuleWithProviders = RouterModule.forRoot(appRoute);