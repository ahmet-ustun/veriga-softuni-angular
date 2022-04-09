import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius'
})
export class CelciusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${value} °C`;
  }

}
