import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from "../shared-components/shared-components.module";


const landingRoutes: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
    declarations: [
        LandingComponent,
        ExploreComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(landingRoutes),
        SharedComponentsModule
    ]
})
export class LandingModule {}
