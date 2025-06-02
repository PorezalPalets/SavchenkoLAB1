import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { LoansService } from './loans.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Loan } from './loans.model';

@ApiTags('Рассрочка')
@Controller('loans')
export class LoansController {

    constructor(private loansService: LoansService){}

    @ApiOperation({summary: 'Добавление покупки в рассрочку в базу данных'})
    @ApiResponse({status: 200, type: Loan})
     @Post()
        create(@Body() loanDto: CreateLoanDto){
            return this.loansService.createItem(loanDto);
        }

    @ApiOperation({summary: 'Получить базу дынных по всем покупкам в рассрочку'})
    @ApiResponse({status: 200, type: [Loan]})
    @Get()
        getAll(){
            return this.loansService.getAllItems();
        }
    
}
