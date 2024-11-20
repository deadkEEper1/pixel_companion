import {InputType, ID, Field} from '@nestjs/graphql';

@InputType()
export class CreateLevelItemInput {
    @Field(() => ID, {description: 'Example field (placeholder)'})
    levelId: string;

    @Field(() => String, {description: 'Item type'})
    type: string;

    // potion specific props
    @Field(() => String, {description: 'Potion color'})
    color: string;

    @Field(() => String, {description: 'image'})
    image: string;
}
