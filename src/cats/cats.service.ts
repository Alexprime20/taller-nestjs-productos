import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  private currentId = 1;

  create(createCatDto: CreateCatDto): Cat {
    const newCat: Cat = {
      id: this.currentId++,
      ...createCatDto,
      isActive: true,
    };
    this.cats.push(newCat);
    return newCat;
  }

  findAll(page: number = 1, limit: number = 10) {
    const activeCats = this.cats.filter(cat => cat.isActive);
    const total = activeCats.length;
    const lastPage = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      page,
      limit,
      total,
      lastPage,
      data: activeCats.slice(start, end),
    };
  }

  findOne(id: number): Cat {
    const cat = this.cats.find(cat => cat.id === id && cat.isActive);
    if (!cat) {
      throw new NotFoundException('Cat not found');
    }
    return cat;
  }

  update(id: number, updateCatDto: UpdateCatDto): Cat {
    const cat = this.findOne(id);
    Object.assign(cat, updateCatDto);
    return cat;
  }

  remove(id: number): void {
    const cat = this.findOne(id);
    cat.isActive = false;
  }
}