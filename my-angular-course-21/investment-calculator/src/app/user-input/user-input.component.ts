import { Component, computed, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../app.model';

export const DEFAULT_VALUES: InvestmentInput = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 5,
};

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  initialInvestment = signal(DEFAULT_VALUES.initialInvestment);
  annualInvestment = signal(DEFAULT_VALUES.annualInvestment);
  expectedReturn = signal(DEFAULT_VALUES.expectedReturn);
  duration = signal(DEFAULT_VALUES.duration);

  onSubmit() {
    this.calculate.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
    this.resetUserInput();
  }

  resetUserInput() {
    this.initialInvestment.set(DEFAULT_VALUES.initialInvestment);
    this.annualInvestment.set(DEFAULT_VALUES.annualInvestment);
    this.expectedReturn.set(DEFAULT_VALUES.expectedReturn);
    this.duration.set(DEFAULT_VALUES.duration);
  }
}
