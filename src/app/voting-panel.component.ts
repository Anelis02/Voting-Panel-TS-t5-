//import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component} from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h1>Is Summer the best season?</h1>
    <h3>Agree: {{agreed}}</h3>
    <h3> Disagree: {{disagreed}}</h3>
    
    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
    
      (voted)="onVoted($event)">
    </app-voter>
   
  `
})
export class VotingPanelComponent  {
 
  agreed = 0;
  disagreed = 0;
  voters = ['Louis', 'Alex', 'Lara','Amy','Clara','John'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;

}}}