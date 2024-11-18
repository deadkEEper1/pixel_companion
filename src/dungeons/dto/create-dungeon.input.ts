import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDungeonInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  seed: string;
}
