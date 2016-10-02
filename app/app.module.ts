import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.services';

import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule, routing ],
  declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
