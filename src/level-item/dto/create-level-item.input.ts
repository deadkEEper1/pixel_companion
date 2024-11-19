import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLevelItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
