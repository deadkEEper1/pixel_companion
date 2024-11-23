import { CreateLevelItemInput } from './create-level-item.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLevelItemInput extends PartialType(CreateLevelItemInput) {
  @Field(() => String)
  effect: string;
}
