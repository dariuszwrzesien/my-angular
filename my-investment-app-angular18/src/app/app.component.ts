import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type UserInput } from './user-input/user-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { type InvestmentResults } from './investment-results/investment-results.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  annualData = signal<InvestmentResults[]>([]);
  private appService = inject(AppService);

  onCalculate(data: UserInput) {
    const annualData = this.appService.calculateInvestmentResults(data);
    this.annualData.set(annualData);
  }
}
