import {
  IsUUID,
  IsString,
  IsInt,
  Length,
  IsUrl,
  IsDecimal,
  Min,
  Max,
  IsOptional,
  IsNumber
} from "class-validator";

export class CreateProductDto {
  @IsString()
  @Length(0, 30)
    name: string;

  @IsInt()
    price: number;

  @IsInt()
    pieces: number;

  @IsUUID("all")
    categoryId: string;

  @IsNumber({ maxDecimalPlaces: 2 })
    weight: number;

  @IsString()
    image: string;

  @IsInt()
    stock: number;

  @IsInt()
  @IsOptional()
    discount: number;

  @IsOptional()
  @IsInt()
    priceDiscount: number;

  @IsInt()
    numInstructions: number;

  @IsInt()
    numMinifigures: number;

  @IsInt()
  @Min(1)
  @Max(5)
    rating: number;

  @IsString()
    size: string;
}

export class UpdateProductDto {
  @IsString()
    productId: string;

  @IsString()
  @IsOptional()
  @Length(0, 30)
    name: string;

  @IsInt()
  @IsOptional()
    price: number;

  @IsOptional()
  @IsInt()
    pieces: number;

  @IsUUID('all')
  @IsOptional()
    categoryId: string;

  @IsOptional()
  @IsDecimal()
    weight: number;

  @IsString()
  @IsOptional()
    image: string;

  @IsInt()
  @IsOptional()
    stock: number;

  @IsInt()
  @IsOptional()
    discount: number;

  @IsInt()
  @IsOptional()
    priceDiscount: number;

  @IsInt()
  @IsOptional()
    numInstructions: number;

  @IsInt()
  @IsOptional()
    numMinifigures: number;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsOptional()
    rating: number;

  @IsOptional()
  @IsString()
    size: string;
}
