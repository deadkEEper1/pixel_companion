import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DungeonsModule } from "./dungeons/dungeons.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dungeon } from "./dungeons/entities/dungeon.entity";
import { LevelModule } from './level/level.module';
import { Level } from './level/entities/level.entity';

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
      logging: true,
      entities: [Dungeon, Level],
      synchronize: true,
    }),
    DungeonsModule,
    LevelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
