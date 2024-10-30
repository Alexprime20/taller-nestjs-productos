import { Injectable } from '@nestjs/common';

import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
    constructor(
        
    ) {}

    async create(category: Category): Promise<Category> {
        return 
    }

    async findAll(): Promise<Category[]> {
        return 
    }

    async findOne(id: number): Promise<Category> {
        return ;
    }

    async update(id: number, category: Partial<Category>) {
        
    }

    async remove(id: number): Promise<void> {
        
    }
}
