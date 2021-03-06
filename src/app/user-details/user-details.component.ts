import { Component, OnInit } from '@angular/core';
import { UserPrimo, Role, Gender } from './es1';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  
  obj: UserPrimo = {
    id: 3487,
    name: "Mario",
    surname: "Rossi",
    age: 30,
    dateOfBirth: "1995/12/14",
    address: {
      city: "Roma",
      street: "Via roma 10",
      postalCode: "00100",
    },
    role: Role.Staff,
    username: "MarioRossi80",
    profilePhotoUrl: "https://bit.ly/3yRngEP",
    companies: [
      {
        id: 148979,
        name: "Develhope",
        description: "La migliore",
        location: {
          city: "Palermo",
          street: "Via Libertà 58",
          postalCode: "90139",
        },
      },
      {
        id: 123123,
        name: "Apple",
        description: "E insomma...",
        location: {
          city: "Cupertino",
          street: "One Apple Park Way",
          postalCode: "95014",
        },
      },
    ],
    gender: Gender.Male,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
