import {
  IsUUID,
  IsString,
  IsInt,
  Length,
  IsUrl,
  IsDecimal,
  Min,
  Max,
  IsOptional
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

  @IsDecimal()
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
