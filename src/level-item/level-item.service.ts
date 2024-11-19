import { Injectable } from '@nestjs/common';
import { CreateLevelItemInput } from './dto/create-level-item.input';
import { UpdateLevelItemInput } from './dto/update-level-item.input';

@Injectable()
export class LevelItemService {
  create(createLevelItemInput: CreateLevelItemInput) {
    return 'This action adds a new levelItem';
  }

  findAll() {
    return `This action returns all levelItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} levelItem`;
  }

  update(id: number, updateLevelItemInput: UpdateLevelItemInput) {
    return `This action updates a #${id} levelItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} levelItem`;
  }
}
