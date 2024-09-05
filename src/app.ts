import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';
import { DoctorModule } from './module/doctor/doctor.module';
import { UserModule } from './module/user/user.module';
import { AppointmentModule } from './module/appointment/appointment.module';
import { PrescriptionModule } from './module/prescription/prescription.module';
import { ReviewModule } from './module/review/review.module';
import { SymptomCheckerModule } from './module/symptom-checker/symptom-checker.module';
import { AuthModule } from '@module';

@Module({
  imports: [
    AuthModule,
    DoctorModule,
    UserModule,
    AppointmentModule,
    PrescriptionModule,
    // MedicalRecordModule,
    ReviewModule,
    SymptomCheckerModule
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule { }
