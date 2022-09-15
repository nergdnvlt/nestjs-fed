import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  middleName: string

  @Field()
  age: number;

  @Field()
  username: string;

  @Field()
  email: string;
}
