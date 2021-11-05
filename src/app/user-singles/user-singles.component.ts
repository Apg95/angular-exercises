import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-singles',
  templateUrl: './user-singles.component.html',
  styleUrls: ['./user-singles.component.css']
})
export class UserSinglesComponent implements OnInit {
@Input() box : any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
