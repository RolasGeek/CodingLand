import { User } from './user';


export class Category {
    id : number;
    objectCode : string;
    name : string;
    description : string;
    user : User;
}