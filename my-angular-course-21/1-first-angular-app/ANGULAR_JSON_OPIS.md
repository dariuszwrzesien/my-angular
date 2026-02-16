# Opis konfiguracji angular.json

Plik `angular.json` to główny plik konfiguracyjny Angular CLI. Zawiera definicje projektu, narzędzi budowania i serwera deweloperskiego.

---

## Sekcja główna

### `$schema`

- **Ścieżka:** `./node_modules/@angular/cli/lib/config/schema.json`
- **Opis:** Wskazuje plik schematu JSON, który definiuje poprawną strukturę konfiguracji. Umożliwia walidację składni i podpowiedzi w edytorze (IntelliSense).

### `version`

- **Wartość:** `1`
- **Opis:** Wersja formatu pliku workspace Angular. Wersja 1 to aktualny standard.

### `cli`

- **Opis:** Ustawienia globalne Angular CLI.
- **`packageManager`:** `"npm"` — menedżer pakietów używany do instalacji zależności (`npm`, `yarn` lub `pnpm`).

### `newProjectRoot`

- **Wartość:** `"projects"`
- **Opis:** Katalog, w którym tworzone są nowe projekty przy użyciu `ng generate application` lub `ng generate library`.

---

## Sekcja `projects`

Zawiera definicje wszystkich projektów w workspace (aplikacji i bibliotek).

### `first-angular-app` — nazwa projektu

#### `projectType`

- **Wartość:** `"application"`
- **Opis:** Typ projektu — `application` (aplikacja webowa) lub `library` (biblioteka do współdzielenia).

#### `schematics`

- **Wartość:** `{}`
- **Opis:** Domyślne opcje dla schematów (np. `ng generate component`). Można tu ustawić np. preferowany styl plików (inline CSS vs plik CSS).

#### `root`

- **Wartość:** `""`
- **Opis:** Główny katalog projektu względem workspace. Pusty string = katalog bieżący.

#### `sourceRoot`

- **Wartość:** `"src"`
- **Opis:** Katalog ze źródłami aplikacji (komponenty, serwisy, moduły).

#### `prefix`

- **Wartość:** `"app"`
- **Opis:** Prefiks selektorów komponentów (np. `<app-header>`). Używany przy generowaniu nowych komponentów.

---

## Sekcja `architect`

Definiuje zadania buildowe (build, serve, test itp.).

### `build` — budowanie aplikacji

#### `builder`

- **Wartość:** `"@angular/build:application"`
- **Opis:** Silnik budowania — nowy build system Angular (esbuild + Vite).

#### `options` (opcje wspólne dla wszystkich konfiguracji)

| Opcja       | Wartość                 | Opis                                                                                     |
| ----------- | ----------------------- | ---------------------------------------------------------------------------------------- |
| `browser`   | `src/main.ts`           | Główny punkt wejścia aplikacji                                                           |
| `polyfills` | `["zone.js"]`           | Polyfille — `zone.js` obsługuje Angular change detection                                 |
| `tsConfig`  | `tsconfig.app.json`     | Plik konfiguracji TypeScript dla aplikacji                                               |
| `assets`    | `["src/assets", {...}]` | Pliki statyczne do kopiowania do builda: `src/assets` + cała zawartość katalogu `public` |
| `styles`    | `["src/styles.css"]`    | Globalne style CSS aplikacji                                                             |

#### `configurations`

**`production`:**

- `budgets` — limity rozmiaru bundle:
  - `initial`: ostrzeżenie przy 500 kB, błąd przy 1 MB (całkowity rozmiar początkowego ładowania)
  - `anyComponentStyle`: ostrzeżenie przy 4 kB, błąd przy 8 kB (style pojedynczego komponentu)
- `outputHashing`: `"all"` — dodaje hash do nazw plików wyjściowych (np. `main.abc123.js`) dla cache busting

**`development`:**

- `optimization`: `false` — wyłączona optymalizacja (szybszy build)
- `extractLicenses`: `false` — nie wydziela pliku z licencjami
- `sourceMap`: `true` — generuje mapy źródłowe (debugowanie)

#### `defaultConfiguration`

- **Wartość:** `"production"`
- **Opis:** Domyślna konfiguracja przy `ng build` (bez `--configuration`).

---

### `serve` — serwer deweloperski

#### `builder`

- **Wartość:** `"@angular/build:dev-server"`
- **Opis:** Uruchamia serwer deweloperski z hot reload (`ng serve`).

#### `configurations`

- **production:** używa builda produkcyjnego
- **development:** używa builda deweloperskiego (szybszy, z source mapami)

#### `defaultConfiguration`

- **Wartość:** `"development"`
- **Opis:** Przy `ng serve` używana jest konfiguracja development.

---

### `test` — testy jednostkowe

#### `builder`

- **Wartość:** `"@angular/build:unit-test"`
- **Opis:** Uruchamia testy jednostkowe (`ng test`).

---

## Przydatne komendy

- `ng build` — buduje aplikację (produkcja)
- `ng build --configuration development` — buduje w trybie deweloperskim
- `ng serve` — uruchamia serwer deweloperski (domyślnie na http://localhost:4200)
- `ng test` — uruchamia testy jednostkowe
