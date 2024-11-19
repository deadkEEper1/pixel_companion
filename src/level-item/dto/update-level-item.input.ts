import { CreateLevelItemInput } from './create-level-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLevelItemInput extends PartialType(CreateLevelItemInput) {
  @Field(() => Int)
  id: number;
}
