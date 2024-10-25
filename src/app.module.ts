import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CatsModule, ProductsModule, CommonModule],
})
export class AppModule {}