import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLevelInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
