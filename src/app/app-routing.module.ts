import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { GalleryViewComponent } from './pages/gallery-view/gallery-view.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InfrastructureComponent } from './pages/infrastructure/infrastructure.component';
import { MessageComponent } from './pages/message/message.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import {FranchiseComponent} from "./pages/franchise/franchise.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'infrastructure',
    component: InfrastructureComponent,
    pathMatch: 'full'
  },
  {
    path: 'facility',
    component: FacilitiesComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'academics',
  //   component: AcademicComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'admission',
    component: AdmissionComponent,
    pathMatch: 'full'
  },
  {
    path: 'our-team',
    component: OurTeamComponent,
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    pathMatch: 'full'
  },
  {
    path: 'franchise',
    component: FranchiseComponent,
    pathMatch: 'full'
  },
  {
    path: 'message/:id',
    component: MessageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full'
  },
  {
    path: 'gallery/:id',
    component: GalleryViewComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true ,scrollPositionRestoration:"enabled"})], //TODO:Added useHash
  exports: [RouterModule]
})
export class AppRoutingModule { }
