import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { InfrastructureComponent } from './pages/infrastructure/infrastructure.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { GalleryViewComponent } from './pages/gallery-view/gallery-view.component';
import { MessageComponent } from './pages/message/message.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
AppComponent,
HomepageComponent,
GalleryComponent,
AboutUsComponent,
AcademicComponent,
AdmissionComponent,
FacilitiesComponent,
OurTeamComponent,
InfrastructureComponent,
NavbarComponent,
FooterComponent,
PageNotFoundComponent,
GalleryViewComponent,
MessageComponent,
FranchiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
