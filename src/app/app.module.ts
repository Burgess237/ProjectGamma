import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { RowGeneratorComponent } from './row-generator/row-generator.component';

const appRoutes: Routes = [
{path: 'start', component: StartComponent},
{path: 'landing', component: LandingComponent},
{path: '', redirectTo: 'start', pathMatch: 'full'},
{path: 'main', component: MainComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LandingComponent,
    MainComponent,
    ContentComponent,
    RowGeneratorComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
