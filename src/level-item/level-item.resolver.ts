import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LevelItemService } from './level-item.service';
import { LevelItem } from './entities/level-item.entity';
import { CreateLevelItemInput } from './dto/create-level-item.input';
import { UpdateLevelItemInput } from './dto/update-level-item.input';

@Resolver(() => LevelItem)
export class LevelItemResolver {
  constructor(private readonly levelItemService: LevelItemService) {}

  @Mutation(() => LevelItem)
  createLevelItem(@Args('createLevelItemInput') createLevelItemInput: CreateLevelItemInput) {
    return this.levelItemService.create(createLevelItemInput);
  }

  @Mutation(() => String)
  updateLevelItem(@Args('id') id: string, @Args('updateLevelItemInput') updateLevelItemInput: UpdateLevelItemInput) {
    return this.levelItemService.update(id, updateLevelItemInput);
  }
}
