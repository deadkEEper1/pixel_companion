import { CreateDungeonInput } from './create-dungeon.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDungeonInput extends PartialType(CreateDungeonInput) {
  @Field(() => Int)
  id: number;
}
