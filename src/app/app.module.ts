import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ProductUriPipe } from './pipes/product-uri.pipe';

import { AuthGuard } from './interfaces/auth.guard';
import { AuthService } from './services/auth.service';

import {CustomPreloadingStrategy} from './customPreloading';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductUriPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomPreloadingStrategy,AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
