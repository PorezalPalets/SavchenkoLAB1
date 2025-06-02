import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Loan } from './loans.model';

@Module({
  controllers: [LoansController],
  providers: [LoansService],
  imports:[
    SequelizeModule.forFeature([Loan])
  ]
})
export class LoansModule {}
