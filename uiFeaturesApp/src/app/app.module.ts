import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { PropsModule } from './props/props.module';
import { HttpClientModule } from '@angular/common/http';
import { AttributesModule } from './attributes/attributes.module';
import { EventsModule } from './events/events.module';
import { EventemitterModule } from './eventemitter/eventemitter.module';
import { SdirectivesModule } from './sdirectives/sdirectives.module';
import { IfComponent } from './sdirectives/if.component';
import { ProgressbarComponent } from './sdirectives/progressbar.component';
import { SwitchcaseComponent } from './sdirectives/switchcase.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    ProgressbarComponent,
    SwitchcaseComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PipesModule,
    PropsModule,
    AttributesModule,
    EventsModule,
    FormsModule,
    EventemitterModule,
    SdirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    IfComponent,
    ProgressbarComponent,
    SwitchcaseComponent
  ]
})
export class AppModule { }
