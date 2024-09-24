import { Component, computed, OnInit } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';

type RandomNumberGeneratorState = {
  generatedNumbers: number[];
};

@Component({
  selector: 'app-random-number-generator',
  template: `<div class="grid justify-center mt-7">
    <button class="btn btn-active btn-accent" (click)="addRandomNumber()">
      Add random number
    </button>
    <h1 class="text-center text-2xl font-bold">
      total of {{ numberOfRandomNumbers() }} random number(s) generated
    </h1>
    <div class="mt-7 divide-y-2 grid border-2 mb-9">
      @for (number of randomNumberState.generatedNumbers(); track $index) {
      <h2>
        <b class="border-r-2 py-3 px-2 w-12 inline-block">{{ $index + 1 }}.</b>
        {{ number }}
      </h2>
      }
    </div>
  </div>`,
  styles: [''],
  standalone: true,
})
export class RandomNumberGeneratorComponent implements OnInit {
  /**
   * [`signalState`] is used in your application to manage state in a reactive way. Here are some reasons why you might use [`signalState`]
   * 1. **Reactivity**: [`signalState`] allows you to create reactive state objects. When the state changes, any dependent computations or UI elements automatically update.
   * 2. **Immutability**: By using [`signalState`] and [`patchState`], you ensure that state updates are done immutably. This can help prevent bugs related to state mutations.
   * 3. **Readability**: The code becomes more readable and maintainable as the state management logic is centralized and follows a predictable pattern.
   * 4. **Performance**: Reactive state management can lead to performance improvements as only the parts of the UI that depend on the changed state will re-render.
   * This approach ensures that any changes to the state are automatically reflected in the UI and other dependent computations.
   */
  randomNumberState = signalState<RandomNumberGeneratorState>({
    generatedNumbers: [],
  });

  numberOfRandomNumbers = computed(
    () => this.randomNumberState().generatedNumbers.length
  );

  addRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);

    patchState(this.randomNumberState, (state) => ({
      ...state,
      generatedNumbers: [...state.generatedNumbers, randomNumber],
    }));
  }

  ngOnInit(): void {
    this.addRandomNumber();
  }
}
