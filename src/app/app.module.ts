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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './table/table.component';
import { OrganizationNameComponent } from './organization-name/organization-name.component';
import { MainComponent } from './main/main.component';
import {MatSelectModule} from '@angular/material/select';
import { SubHeaderComponent } from './sub-header/sub-header.component';










@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      FooterComponent,
      TableComponent,
      OrganizationNameComponent,
      MainComponent,
      SubHeaderComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
