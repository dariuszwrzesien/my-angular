# Historia zmian Angular od wersji 16 do obecnej

Dokument przedstawia kluczowe zmiany i nowe funkcje we frameworku Angular na przestrzeni wersji 16–21.

---

## Angular 16 (Maj 2023) — „Angular Momentum”

**Jedna z największych aktualizacji od początku Angulara.**

### Reactywność — Angular Signals (Developer Preview)

- Nowy model reaktywności: `signal`, `computed`, `effect`
- Lepsza wydajność zmiany wykrywania
- Możliwość przyszłego usunięcia Zone.js
- Interoperacyjność z RxJS: `toObservable`, `toSignal`, `takeUntilDestroyed`

### Server-Side Rendering (SSR)

- **Hydracja** (Developer Preview) — ponowne wykorzystanie DOM z SSR zamiast pełnego re-renderu
- Do ~45% poprawy Largest Contentful Paint (LCP)
- `provideClientHydration()` — prosta integracja
- Lepsza obsługa Content Security Policy (CSP)

### Narzędzia i build

- **esbuild + Vite** (Developer Preview) — do 72% szybsze budowanie produkcji
- Nowe projekty standalone: `ng new --standalone`
- Migracja do standalone: `ng generate @angular/core:standalone`
- Doświadczalne wsparcie dla Jest

### Developer Experience

- **Required inputs** — `@Input({ required: true })`
- Powiązanie danych Routera z inputami komponentów
- Samozamykające się tagi komponentów: `<my-component />`
- `DestroyRef` — wstrzykiwalny OnDestroy
- Autoimporty komponentów i pipe'ów w szablonach

### Wymagania

- Node.js: v16 lub v18
- TypeScript: 4.9+
- Usunięto Angular Compatibility Compiler (ngcc)

---

## Angular 17 (Listopad 2023) — „Angular Renaissance”

### Nowa składnia przepływu sterowania

- `@if` / `@else` zamiast `*ngIf`
- `@for` z obowiązkowym `track` (i blok `@empty`)
- `@switch` / `@case` / `@default` zamiast `*ngSwitch`
- Do ~90% szybszy runtime w publicznych benchmarkach

### Deferrable Views — `@defer`

- Opóźnione ładowanie treści i zależności
- Triggery: `on viewport`, `on hover`, `on idle` itp.
- Bloki: `@placeholder`, `@loading`, `@error`
- Wbudowane prefetchowanie

### Wydajność i narzędzia

- esbuild domyślnie w CLI
- Do ~87% szybsze budowanie przy hybrydowym renderze
- Do ~67% szybsze budowanie po stronie klienta
- Nowe logo i identyfikacja wizualna Angulara
- Nowa interaktywna ścieżka nauki

### SSR

- Lepsze wsparcie dla hybrydowego renderowania (SSR + CSR)

---

## Angular 18 (Maj 2024)

### Doświadczalne funkcje

- **Zoneless change detection** — aplikacje bez Zone.js

### Stabilizacja API

- Material 3 — stabilny
- Deferrable views (`@defer`) — stabilne
- Wbudowana składnia sterowania (`@if`, `@for`, `@switch`) — stabilna

### SSR i hydracja

- Wsparcie dla i18n hydracji
- Lepsze narzędzia debugowania hydracji
- Hydracja w Angular Material
- Event replay (inspiracja Google Search)

### Dokumentacja

- **angular.dev** — nowa główna strona dokumentacji Angulara

---

## Angular 19 (Listopad 2024)

### Hydracja i renderowanie

- **Incremental hydration** (Developer Preview)
- Kontrola nad renderowaniem tras: na kliencie, serwerze lub w czasie budowania
- Rozwiązywanie parametrów tras podczas prerenderowania

### Reactywność

- Stabilizacja core reactivity primitives
- Nowe API: `linkedSignal`, `resource`

### Developer Experience

- Schematyki do wymuszania najlepszych praktyk
- Uruchamianie schematyków z Language Service
- Time picker w Material
- Usuwanie nieużywanych importów
- Hot Module Replacement (HMR) dla stylów

### Inne

- Rozwiązanie ponad 2700 community requestów z GitHub

---

## Angular 20 (Maj 2025)

### Stabilizacja API

- `effect`, `linkedSignal`, `toSignal` — stabilne
- **Incremental hydration** — stabilizacja
- Konfiguracja trybu renderowania na poziomie tras
- **Zoneless** — Developer Preview

### Debugowanie

- Ulepszenia Angular DevTools
- Integracja z Chrome DevTools — raportowanie Angular

### Developer Experience

- Zaktualizowany style guide
- Lepsze sprawdzanie typów
- Language Service dla host bindings
- Wsparcie dla nieotagowanych template literal expressions
- Template Hot Module Replacement domyślnie włączony

### GenAI

- Wsparcie dla llms.txt
- Nowe przewodniki i materiały na angular.dev

---

## Angular 21 (Listopad 2025) — obecna wersja

### Signal Forms (Eksperymentalne)

- Nowe formularze oparte na Signals
- Skalowalne, kompozycyjne i reaktywne
- Walidacja oparta na schematach
- Brak potrzeby `ControlValueAccessor` przy bindingach

### Angular Aria (Developer Preview)

- Headless komponenty z priorytetem dostępności
- 8 wzorców UI: Accordion, Combobox, Grid, Listbox, Menu, Tabs, Toolbar, Tree
- Kompletnie nieustylowane — do własnego stylowania

### AI i narzędzia

- **MCP Server** — stabilny, zintegrowany w Angular CLI
- 7 narzędzi dla AI agentów i LLM
- Nowa sekcja angular.dev/ai — zasoby dla AI

### Testowanie

- **Vitest** — domyślny i stabilny test runner
- Migracja z Jasmine: `ng g @schematics/angular:refactor-jasmine-vitest`
- Karma i Jasmine nadal wspierane

### Zoneless domyślnie

- **Nowe aplikacje nie zawierają zone.js domyślnie**
- Zoneless change detection — stabilny
- Korzyści: lepsze Core Web Vitals, mniejszy bundle, łatwiejszy debugging

### Inne ulepszenia

- Wsparcie dla wyrażeń regularnych w szablonach
- Wbudowany formatter Signals w DevTools
- Możliwość dostosowania `IntersectionObserver` dla `@defer on viewport`
- `SimpleChanges` — generyczne
- `KeyValue` pipe — obsługa obiektów z opcjonalnymi kluczami
- CDK overlays — użycie natywnych popoverów przeglądarki

---

## Harmonogram wsparcia (stan na 2026)

| Wersja | Status        | Wersja wydana | LTS do     |
| ------ | ------------- | ------------- | ---------- |
| 21.x   | Aktywna       | 2025-11-19    | 2027-05-19 |
| 20.x   | LTS           | 2025-05-28    | 2026-11-28 |
| 19.x   | LTS           | 2024-11-19    | 2026-05-19 |
| 18.x   | Nie wspierana | 2024-05-22    | —          |
| 17.x   | Nie wspierana | 2023-11-08    | —          |
| 16.x   | Nie wspierana | 2023-05-03    | —          |

---

## Wymagania wersji (Node.js, TypeScript)

| Wersja | Node.js                             | TypeScript     |
| ------ | ----------------------------------- | -------------- |
| 21.x   | ^20.19.0 \|\| ^22.12.0 \|\| ^24.0.0 | >=5.9.0 <6.0.0 |
| 20.x   | ^20.19.0 \|\| ^22.12.0 \|\| ^24.0.0 | >=5.8.0 <6.0.0 |
| 19.x   | ^18.19.1 \|\| ^20.11.1 \|\| ^22.0.0 | >=5.5.0 <5.9.0 |
| 18.x   | ^18.19.1 \|\| ^20.11.1 \|\| ^22.0.0 | >=5.4.0 <5.6.0 |
| 17.x   | ^18.13.0 \|\| ^20.9.0               | >=5.2.0 <5.5.0 |
| 16.x   | ^16.14.0 \|\| ^18.10.0              | >=4.9.3 <5.2.0 |

---

## Źródła

- [Angular Blog](https://blog.angular.dev/):
  - [Angular v16](https://blog.angular.dev/angular-v16-is-here-4d7a28ec680d)
  - [Angular v17](https://blog.angular.dev/introducing-angular-v17-4d7033312e4b)
  - [Angular v18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe)
  - [Angular v19](https://blog.angular.dev/meet-angular-v19-7b29dfd05b84)
  - [Angular v20](https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301)
  - [Angular v21](https://blog.angular.dev/announcing-angular-v21-57946c34f14b)
- [Angular Release Reference](https://angular.dev/reference/releases)
- [Angular Update Guide](https://angular.dev/update-guide)
