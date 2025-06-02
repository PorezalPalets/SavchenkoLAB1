import { Injectable } from '@nestjs/common';
import { Loan } from './loans.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLoanDto } from './dto/create-loan.dto';

@Injectable()
export class LoansService {

     constructor(@InjectModel(Loan) private loanRepository: typeof Loan){
    
        }
    
        async createItem(dto: CreateLoanDto){
    
            const loan = await this.loanRepository.create(dto);
            return loan;
        }
    
        async getAllItems(){
            const loans = await this.loanRepository.findAll();
            return loans;
        }
}
