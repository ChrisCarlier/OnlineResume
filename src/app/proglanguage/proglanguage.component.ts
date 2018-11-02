import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proglanguage',
  templateUrl: './proglanguage.component.html',
  styleUrls: ['./proglanguage.component.css']
})
export class ProglanguageComponent implements OnInit {

  @Input('proglanguageelement') element:{img:string, name:string};

  constructor() { }

  ngOnInit() {
  }

}
