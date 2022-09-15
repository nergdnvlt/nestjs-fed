import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
// @Directive('@external')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  // @Directive('@external')
  id: number;

  @Field((type) => [Post])
  posts?: Post[];
}
