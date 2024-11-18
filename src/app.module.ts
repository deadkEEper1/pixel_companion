import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DungeonsModule } from "./dungeons/dungeons.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dungeon } from "./dungeons/entities/dungeon.entity";

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
      entities: [Dungeon],
      synchronize: true,
    }),
    DungeonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
