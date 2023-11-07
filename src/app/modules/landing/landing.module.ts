import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedElementsModule } from "../shared-elements/shared-elements.module";


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
        SharedElementsModule
    ]
})
export class LandingModule {}
