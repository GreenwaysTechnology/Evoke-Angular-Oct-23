import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { PropsModule } from './props/props.module';
import { HttpClientModule } from '@angular/common/http';
import { AttributesModule } from './attributes/attributes.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PipesModule,
    PropsModule,
    AttributesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
