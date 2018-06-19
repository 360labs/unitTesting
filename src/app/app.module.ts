import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormTestComponent } from './form-test/form-test.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { RouterTestComponent } from './router-test/router-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormTestComponent,
    HttpTestComponent,
    RouterTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
