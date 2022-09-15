import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', middleName: 'Macaulay', age: 12, username: 'textadhesive', email: 'Joy_Simpson327@joiniaa.com' },
    { id: 2, name: 'Richard Roe', middleName: 'Alayah', age: 21, username: 'snailsshore', email: 'Johnathan_Hilton2849@corti.com' },
    { id: 3, name: 'Layla Humphrey', middleName: 'Raja', age: 32, username: 'cleansuspend', email: 'Eduardo_Owen7606@extex.org' },
    { id: 4, name: 'Yousef Simmons', middleName: 'Vincenzo', age: 44, username: 'promisevital', email: 'Shelby_Sheldon2861@liret.org' },
    { id: 5, name: 'Joan McKee', middleName: 'Juan', age: 56, username: 'fordfashion', email: 'Nicole_Williams8806@gembat.biz' },
    { id: 6, name: 'Winston McMillan', middleName: 'Dianne', age: 1, username: 'mossytouchy', email: 'Eduardo_Brown2652@womeona.net' },
    { id: 7, name: 'Danyal Lane', middleName: 'Laurie', age: 35, username: 'skunkdividers', email: 'Harvey_Burnley2855@mafthy.com' },
    { id: 8, name: 'Kirby Blackburn', middleName: 'Shayaan', age: 36, username: 'skyannoy', email: 'Daron_Wilson3444@liret.org' },
  ];

  findById(id: number): User {
    return this.users.find((user) => user.id === Number(id));
  }
}
