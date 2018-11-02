import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.css']
})
export class SpeakingComponent implements OnInit {

  @Input('speakingelement') element:{img:string, langue:string, level:string};

  constructor() { }

  ngOnInit() {
  }

}
