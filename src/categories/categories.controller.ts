import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    create(@Body() category: Category) {
        return this.categoriesService.create(category);
    }

    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoriesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() category: Partial<Category>) {
        return this.categoriesService.update(id, category);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.categoriesService.remove(id);
    }
}
