import { Pipe, PipeTransform } from '@angular/core';

type temperatureType = 'cel' | 'fah';
type symbolType = '°C' | '°F';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: temperatureType,
    outputType?: temperatureType
  ) {
    if (value === null) {
      return value;
    }
    const temperature = this.convertStrategy(value, inputType, outputType);
    const symbol = this.symbolStrategy(inputType, outputType);
    return `${temperature.toFixed(2)} ${symbol}`;
  }

  private convertStrategy(
    value: string | number,
    input: temperatureType,
    output?: temperatureType
  ): number {
    if (input === 'cel' && output === 'fah') {
      return this.convertFromCelsiusToFahrenheit(value);
    } else if (input === 'fah' && output === 'cel') {
      return this.convertFromFahrenheitToCelsius(value);
    }
    return this.convertToNumber(value);
  }

  private symbolStrategy(input: temperatureType, output?: temperatureType) {
    if (!output) {
      return input === 'cel' ? '°C' : '°F';
    }
    return output === 'cel' ? '°C' : '°F';
  }

  private convertFromCelsiusToFahrenheit(value: string | number) {
    const temperatureValue = this.convertToNumber(value);
    return temperatureValue * (9 / 5) + 32;
  }

  private convertFromFahrenheitToCelsius(value: string | number) {
    const temperatureValue = this.convertToNumber(value);
    return temperatureValue - 32 * (5 / 9);
  }

  private convertToNumber(value: string | number) {
    if (typeof value === 'string') {
      return parseFloat(value);
    }

    return value;
  }
}
