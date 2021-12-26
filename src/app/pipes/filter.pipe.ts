import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString: string){
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const cryptos = [];
    for(const crypto of value){

      if(crypto['name'] === filterString){
        cryptos.push(crypto);
      }
   }
   return cryptos;
  }
}
