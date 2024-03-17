import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {}

  transform(number: any, digits?: any): any {
    // return this.decimalPipe.transform(value/1000000000, digits)
    if(number <= 999 && number >= -999){
      return number ;
    }
    // thousands
    else if(number >= 1000 && number <= 999999){
      return this.decimalPipe.transform(number/1000, digits) + ' K';
    }
    else if(number >= -999999 && number <= -1000){
      return this.decimalPipe.transform(number/1000, digits) + ' K';
    }
    // millions
    else if(number >= 1000000 && number <= 999999999){
      return this.decimalPipe.transform(number/1000000, digits) + ' Mio';
    }
    else if(number >= -999999999 && number <= -1000000){
      return this.decimalPipe.transform(number/1000000, digits) + ' Mio';
    }
    // billions
    else if(number >= 1000000000 && number <= 999999999999){
      return this.decimalPipe.transform(number/1000000000, digits) + ' Mrd';
    }
    else if(number >= -999999999999 && number <= -1000000000){
      return this.decimalPipe.transform(number/1000000000, digits) + ' Mrd';
    }
    // trillions
    else if(number >= 1000000000000 && number <= 999999999999999){
      return this.decimalPipe.transform(number/1000000000000, digits) + ' Bio';
    }
    else if(number >= -999999999999999 && number <= -1000000000000){
      return this.decimalPipe.transform(number/1000000000000, digits) + ' Bio';
    }
    else {
      return number ;
    }
  }
  

}
