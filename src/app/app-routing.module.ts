import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoterComponent} from './vote/vote.component';
import {VotingPanelComponent} from './voting-panel/voting-panel.component';
const routes: Routes = [
  {path:"vote", component: VoterComponent},
  {path:"voting-panel", component:VotingPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
