import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HeroesService } from './services/heroes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent, HeroesComponent, HeroeComponent],
  imports: [BrowserModule, HttpModule, APP_ROUTING, FormsModule, HttpClientModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
