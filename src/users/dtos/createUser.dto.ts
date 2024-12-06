import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { IntersectionType, OmitType, PartialType, PickType } from "@nestjs/mapped-types"

export class CreateUserDto {
    @IsNotEmpty({ message: "Please enter username" })
    username: string;

    @IsNotEmpty()
    @IsEmail({}, { message: "Please enter valid email" })
    email: string;

    @IsNotEmpty()
    // @IsNumber({}, { message: "Please enter age as number" })
    age: string;
}

export class AdditionalUserInfo {
    @IsNotEmpty()
    ParseIntPipe
    level: number;
}


// export class UpdateUserDto extends OmitType(CreateUserDto, ['username', "email"] as const) {}

// export class UpdateUserDto extends PartialType(CreateUserDto){}

// export class UpdateUserDto extends PickType(CreateUserDto, ['username'] as const) { }

// export class UpdateUserDto extends IntersectionType(CreateUserDto, AdditionalUserInfo) { }


export class UpdateUserDto extends PartialType(
    OmitType(CreateUserDto, ['username'] as const),
  ) {}
  

