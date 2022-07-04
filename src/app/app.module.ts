import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VillaNameAndTypeComponent } from './villa-name-and-type/villa-name-and-type.component';

@NgModule({
  declarations: [
    AppComponent,
    VillaNameAndTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
