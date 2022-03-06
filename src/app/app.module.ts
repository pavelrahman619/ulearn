import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 /* MATERIAL MODULES */
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatIconModule} from '@angular/material/icon';
 import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
