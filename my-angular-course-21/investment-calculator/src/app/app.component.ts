import { Component, computed, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppService } from './app.service';
import { InvestmentInput } from './app.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    InvestmentResultsComponent,
    UserInputComponent,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  appService = inject(AppService);

  investmentResults = computed(() => this.appService.getInvestmentResults());

  calculateInvestmentResult(input: InvestmentInput) {
    this.appService.calculate(input);
  }
}
