import { IsNotEmpty, IsString, IsUUID, IsEnum, IsArray, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RecordType, PaymentStatus } from '@prisma/client';

export class CreateMedicalRecordDto {
  @ApiProperty({ description: 'UUID of the patient associated with the medical record' })
  @IsUUID()
  @IsNotEmpty()
  patientId: string;

  @ApiProperty({ description: 'Type of medical record', enum: RecordType })
  @IsEnum(RecordType)
  @IsNotEmpty()
  recordType: RecordType;

  @ApiProperty({ description: 'Details of the medical record' })
  @IsString()
  @IsNotEmpty()
  details: string;

  @ApiProperty({ description: 'List of file paths associated with the medical record', type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  files?: string[];

  @ApiProperty({ description: 'Price associated with the medical record' })
  @IsInt()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'Payment status of the medical record', enum: PaymentStatus })
  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  paymentStatus: PaymentStatus;
}
