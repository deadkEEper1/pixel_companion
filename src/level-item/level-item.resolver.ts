import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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

  @Query(() => [LevelItem], { name: 'levelItem' })
  findAll() {
    return this.levelItemService.findAll();
  }

  @Query(() => LevelItem, { name: 'levelItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.levelItemService.findOne(id);
  }

  @Mutation(() => LevelItem)
  updateLevelItem(@Args('updateLevelItemInput') updateLevelItemInput: UpdateLevelItemInput) {
    return this.levelItemService.update(updateLevelItemInput.id, updateLevelItemInput);
  }

  @Mutation(() => LevelItem)
  removeLevelItem(@Args('id', { type: () => Int }) id: number) {
    return this.levelItemService.remove(id);
  }
}
