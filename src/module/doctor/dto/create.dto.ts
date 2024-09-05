import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsString, MinLength, IsPhoneNumber, IsEmail, IsOptional, IsArray, ValidateNested, IsInt } from "class-validator";

class Location {
  @IsNotEmpty()
  @ApiProperty({ example: 41.3074 })
  latitude: number;

  @IsNotEmpty()
  @ApiProperty({ example: 69.2442 })
  longitude: number;
}

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(5)
  @ApiProperty({ example: "John Doe" })
  fullname: string;

  @IsNotEmpty()
  @IsPhoneNumber('UZ', { message: "Phone number must be a valid Uzbekistan number" })
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: "+998901234567" })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @ApiProperty({ example: "12345" })
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: "john@example.com" })
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(50)
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: "About doctor" })
  description?: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ example: ["Dentist", "Surgeon"] })
  specialization: string[];

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: "doctor_photo.jpg" })
  photo: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Location)
  @ApiProperty({ example: { latitude: 41.3074, longitude: 69.2442 } })
  location: Location;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: "Shayhontohur, Tashkent, Uzbekistan" })
  address: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: "Tashkent" })
  region: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 60, description: "Duration per patient in minutes" })
  durationPerPatient: number;
}
