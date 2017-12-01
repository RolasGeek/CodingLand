import { User } from './user';

export class Topic {
    id : number = 0;
    categoryId : number;
    user : User = null;
    name : string = '';
    description : string = '';
    answered : boolean = false;
    insertDate: Date;
    updateDate : Date;
    postCount : number;
}