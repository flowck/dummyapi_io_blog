import { Location } from "common/typings";

export interface UserObj {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  location: Location;
  registerDate: string;
  updatedDate: string;
}

export class User {
  id!: string;
  title!: string;
  firstName!: string;
  lastName!: string;
  picture!: string;
  gender!: string;
  email!: string;
  dateOfBirth!: string;
  phone!: string;
  location!: Location;
  registerDate!: string;
  updatedDate!: string;
  fullName!: string;

  constructor(user: UserObj) {
    Object.keys(user).forEach((key) => {
      (this as Record<string, unknown>)[key] = (user as Record<string, any>)[key];
    });

    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
