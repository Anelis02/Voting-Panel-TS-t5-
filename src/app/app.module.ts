import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VoterComponent } from './vote/vote.component';
import { VotingPanelComponent} from './voting-panel/voting-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VotingPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
