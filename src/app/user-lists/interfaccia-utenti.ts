export interface User {
id: number;
name: string;
surname: string;
age: number;
dateOfBirth: string;
address: Address;
role: Role;
username: string;
profilePhotoUrl: string;
gender: Gender;
}

export interface Address {
city: string;
street: string;
postalCode: string;
}

export enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
  }

export enum Role {
    Staff = "Staff", 
    Student = "Student",
    Manager = "Manager",
    Admin = "Admin"
  }