import { IsNotEmpty, IsString } from "class-validator";

export class UpdateColorDto {
    @IsString()
    @IsNotEmpty()
    name:string
}
