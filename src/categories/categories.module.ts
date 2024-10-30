import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Module({
    imports: [],
    controllers: [CategoriesController],
    providers: [CategoriesService],
})
export class CategoriesModule {}
