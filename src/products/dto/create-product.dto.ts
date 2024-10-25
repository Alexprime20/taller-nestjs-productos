import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsOptional()
    description: string;
    
    @IsNumber()
    @Min(0)
    stock: number = 0;
    
    @IsNumber()
    @Min(0)
    price: number = 0;
    
    @IsArray()
    @IsOptional()
    photo: string[];
}
