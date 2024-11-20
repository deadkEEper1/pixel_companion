import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DungeonsModule } from "./dungeons/dungeons.module";
import { LevelModule } from './level/level.module';
import { LevelItemModule } from './level-item/level-item.module';

import { Dungeon } from "./dungeons/entities/dungeon.entity";
import { Level } from './level/entities/level.entity';
import { LevelItem } from './level-item/entities/level-item.entity';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Save schema to schema.gql in the root directory
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Jura',
      password: 'admin',
      database: 'pixel_companion',
      // logging: true,
      entities: [Dungeon, Level, LevelItem],
      synchronize: true,
    }),
    DungeonsModule,
    LevelModule,
    LevelItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
