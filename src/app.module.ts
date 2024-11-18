import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver} from './app.resolver';
import { DungeonsModule } from "./dungeons/dungeons.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Save schema to schema.gql in the root directory
    }),
    DungeonsModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
