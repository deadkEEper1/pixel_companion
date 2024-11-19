import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LevelItemService } from './level-item.service';
import { LevelItem } from './entities/level-item.entity';
import { CreateLevelItemInput } from './dto/create-level-item.input';

@Resolver(() => LevelItem)
export class LevelItemResolver {
  constructor(private readonly levelItemService: LevelItemService) {}

  @Mutation(() => LevelItem)
  createLevelItem(@Args('createLevelItemInput') createLevelItemInput: CreateLevelItemInput) {
    return this.levelItemService.create(createLevelItemInput);
  }
}
