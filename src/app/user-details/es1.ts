export interface UserPrimo {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: string;
  username: string;
  profilePhotoUrl: string;
  companies: Company[];
  gender: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  location: Address;
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export enum Role {
  Staff = "Staff", 
  Student = "Student",
  Manager = "Manager",
  Admin = "Admin"
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}

const obj: UserPrimo = {
  id: 3487,
  name: "Mario",
  surname: "Rossi",
  age: 30,
  dateOfBirth: "14/12/1995",
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