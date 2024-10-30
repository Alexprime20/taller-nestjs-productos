import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductEntity } from './entities/product.entity'; // Importa la entidad Product
import { Category } from '../categories/entities/category.entity'; // Importa la entidad Category

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
