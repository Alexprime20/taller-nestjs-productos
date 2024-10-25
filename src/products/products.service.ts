import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';
import { ResponseAllProducts } from './interfaces/response-products.interface';
import { ManagerError } from 'src/common/errors/manager.error';

@Injectable()
export class ProductsService {

  private products: ProductEntity[] = [
    // { id: 1, name: "product1", description: "description1", stock: 5, price: 10, photo: ["photo1.jpg"], isActive: true },
    // { id: 2, name: "product2", description: "description2", stock: 3, price: 5, photo: ["photo1.jpg"], isActive: true },
    // { id: 3, name: "product3", description: "description3", stock: 4, price: 20, photo: ["photo1.jpg"], isActive: true },
    // { id: 4, name: "product4", description: "description4", stock: 1, price: 10, photo: ["photo1.jpg"], isActive: false },
    // { id: 5, name: "product5", description: "description5", stock: 6, price: 15, photo: ["photo1.jpg"], isActive: true },
  ]

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(paginationDto: PaginationDto): Promise<ResponseAllProducts> {
    try {

      if( this.products.length === 0 ){
        throw new ManagerError({
          type: "NOT_FOUND",
          message: "Products not found!",
        });
      }

      const { limit, page } = paginationDto;
      const total = this.products.filter((product) => product.isActive === true).length;

      const skip = (page - 1) * limit;
      //           (  2  - 1   ) * 10

      const lastPage = Math.ceil(total / limit);

      const data = this.products.slice(skip, limit);


      return {
        page,
        lastPage,
        limit,
        total,
        data,
      };
    } catch (error) {
      ManagerError.createSignatureError( error.message )
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
