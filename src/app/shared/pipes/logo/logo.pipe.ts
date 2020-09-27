import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'logo'})

export class LogoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) { return ''; }
    if (value === 'Nodejs') { value = 'node'; }
    if (value === 'MongoDB') { value = 'mongo'; }
    if (value === 'Antic\'s') { value = 'antics'; }
    return `${value.toLowerCase()}-logo.png`;
  }
}
