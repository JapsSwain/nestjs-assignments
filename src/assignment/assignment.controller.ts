import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  
  @Get('prime/:number')
  checkPrime(@Param('number', ParseIntPipe) number: number): { isPrime: boolean } {
    return { isPrime: this.isPrime(number) };
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;  // numbers less than 2 are not prime
    if (num <= 3) return true;   // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

    // Check from 5 up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
}
