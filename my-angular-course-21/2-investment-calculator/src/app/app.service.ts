import { Injectable, signal } from '@angular/core';
import { InvestmentInput, InvestmentResult } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  investmentResults = signal<InvestmentResult[]>([]);

  private calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }: InvestmentInput) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }

  getInvestmentResults() {
    return this.investmentResults();
  }

  calculate(input: InvestmentInput): void {
    const results = this.calculateInvestmentResults({
      ...input,
    });
    this.investmentResults.set(results);
  }
}
