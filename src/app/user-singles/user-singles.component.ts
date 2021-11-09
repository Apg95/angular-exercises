import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user-lists/interfaccia-utenti';

@Component({
  selector: 'app-user-singles',
  templateUrl: './user-singles.component.html',
  styleUrls: ['./user-singles.component.css']
})
export class UserSinglesComponent implements OnInit {
@Input() box : any;
@Output() removeE = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

}
