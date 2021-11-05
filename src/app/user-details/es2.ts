
import {UserPrimo, Company, Address} from './es1'

class User implements UserPrimo{
    name: string;
    surname: string;
    id: number;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: string;
    username: string;
    profilePhotoUrl: string;
    companies: Company[];
    gender: string;
    constructor (user : UserPrimo) {
        this.name = user.name;
        this.surname = user.surname;
    }
    

    getFullname() {
        
        return `${this.name} ${this.surname}`
    }
}
const obj = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '14/12/1995',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: 'staff',
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	],
    gender: 'male'
}

const user = new User(obj);
console.log(user.getFullname());