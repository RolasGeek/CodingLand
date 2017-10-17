import { User } from './user';


export class Post {
    id: number;
    comment : '';
    solution : '';
    user : User;
    isCorrect : boolean;
    insertDate: Date;
    updateDate : Date;
}