import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number } {
    return { factorial: this.factorial(number) };
  }

  private factorial(num: number): number {
    if (num < 0) return null; // Factorial is not defined for negative numbers
    if (num === 0 || num === 1) return 1; // Factorial of 0 and 1 is 1
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
