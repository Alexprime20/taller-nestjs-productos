import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
import { CreateCatDto } from '../cats/dto/create-cat.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
  ) {}

  async findAll( paginationDto: PaginationDto ) {
    return 
  }
  
  async findOne(id:number) {
    return 
  }
  
  async create( createProductDto: CreateProductDto ) {
    return 
  }
  async update(id:number, updateProductDto: UpdateProductDto) {
    return 
  }
  async remove(id: number) {
    return 
  }

  // Otras funciones (create, update, delete) aquí...
}
