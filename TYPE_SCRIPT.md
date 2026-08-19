# Type Script - Apunts

Aquest és un document complementari al document principal del treball (i.e. Readme.md) i serveix com a resum del llenguatge de programació **TypeScript (TS)**.

## Conceptes Generals de TypeScript

TypeScript és un superconjunt (*superset*) amb tipat estàtic de JavaScript.

Que sigui un superconjunt vol dir que TypeScript conté tot JavaScript. Qualsevol codi que s'hagi escrit en JavaScript pur és automàticament codi vàlid en TypeScript. TypeScript simplement agafa JavaScript i hi afegeix eines noves per sobre.

Que sigui un llenguatge tipat estàtic vol dir que t'obliga (o et permet) posar "etiquetes" (*types*) a les teves variables, funcions i objectes.

Finalment, un concepte molt important és que ni els navegadors web ni els dispositius mòbils entenen TypeScript. Quan s'escriu un codi en TypeScript, abans que l'aplicació s'executi, passa per un procés de **compilació** (o transpilació) **a JavaScript**.

### Diferències clau entre JS i TS

Les principals diferències entre els dos llenguatges de programació són:

- **Detecció d'errors:** Com que JS és interpretat els errors es detecten directament a l'execució del codi, mentre que, com que TS es "compila" a JS, existeix una fase de detecció d'errors prèvia.
- **Corba d'aprenentatge:** Com que TS afegeix conceptes nous i sovint complexos per sobre de JS, la corba d'aprenentatge d'un (TS) serà sempre més gran que la de l'altre (JS).
- **Velocitat de configuració:** A JS la configuració és inmediata, doncs tots els dispositius, navegadors... ja entenen i fan servir JS de forma regular, mentre que TS requereix d'unes configuracions prèvies.
- **Manteniment a llarg termini:** El creixement d'un codi de JS sovint és més desestructurat, de forma que, a la llarga és més facil perdre el rastre de les coses. A TS però, com que és necessari estructurar les coses, ens dona una robustesa molt més alta per a projectes de gran escala o llarg termini.


Aquestes diferències sovint són les que fan que els desenvolupadors triin quin llenguatge és més adient per a certa aplicació. La norma general però és: Per a projectes ràpids se sol fer servir JS, mentre que per a projectes més grans i complexos la balança cau sobre TS.

Cal dir també que no hi ha cap llibreria, framework o codi de JS que no funcioni a TS, doncs en ser un superconjunt tot codi JS pot ferse servir a TS.

## Requisits

Partint dels requisits del document principal (README.md), no hi ha massa més a afegir, només que per instal·lar TypeScript (de forma genèrica al nostre dispositiu) cal executar la següent comanda:

```bash
npm i -g typescript
```

Segurament la comanda ens demani permisos d'usuari, se li poden donar fent servir `sudo`. 

Per tal de comprovar si ja es dispos de TypeScript al nostre dispositiu es pot executar la comanda següent.

```bash
tsc --version
```

## Compilació i tsconfig.json

Com ja s'ha mencionat abans, tot codi de TS s'ha de compilar a JS, per a això es pot executar la comanda:

```bash
tsc <nom_fitxer_ts>
```

Aquesta comanda ens retornarà un fitxer js amb tot el codi JS equivalent al codi TS del/s fitxer/s que li haguem passat. Adicionalment hi ha una gran varietat de paràmetres extra que podem afegir a la comanda, vegeu la [documentació ofical de TS](https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html#overview).

Sovint el que se sol fer, per tal d'evitar comandes llargues i feixugues, és fer servir un fitxer **tsconfig.json** a on poder afegir tota la configuració de compilació necessària per al nostre projecte. Notem que, en fer una aplicació en ReactNative, el fitxer tsconfig.json ja ens ve definit.


## Anotació tipada estàtica

Com ja hem comentat abans TS és un llenguatge tipat estàtic, és a dir, cal indicar a cada variable de quina mena és, això ho podem fer de diverses formes:

- **Anotació tipada estàtica IMPLÍCITA:** En donar un valor a una variable, aquesta prendrà el tipus del valor asignat.

```TypeScript
// Exemple An.Ti.Es. IMPLÍCITA
let num = 10; 
let str = '10'
```
  
- **Anotació tipada estàtica EXPLÍCITA:** Podem indicar el tipus d'una variable amb ':'. Es recomana no declarar explícitament si ja es declara implícitament per alleugerir pes el codi.

```TypeScript
// Exemple An.Ti.Es. EXPLÍCITA
let num: number
let str: string
let num2: number = 10 // INNECESSARI
```

També podem crear els nostres propis tipus de la forma:

```TypeScript
// Exemple senzill de creació d'un Tipus
type Frase = string; 
```

En el cas anterior una variable del tipus `Frase` es comportarà igual que una variable del tipus `string`. Per a fer una classe més complexa podem fer el següent:

```TypeScript
// Exemple de creació d'un tipus personalitzat
type FontSize = 'small' | 'big';
```

## Interfícies (interfaces)

Una interfície és una construcció de llenguatge de TS que ens permet donar forma a un objecte. En altres paraules, és com un contracte que l'objecte (variable o classe) es veu obligat a seguir (p.e. si la interfície diu que l'objecte ha de tindre un nom i una edat l'objecte (sigui classe o variable) haurà de disposar d'aquests paràmetres).

Una interfície es crea de la forma:

```TypeScript
interface Person {
  name: string;
  age: number;
  mail?: string; // Optional field
  readonly birthDate: Date; // Can't modify once created
}
```

Per definir el tipus dels objectes ho fem de la forma:

```TypeScript
const Jan: Person = {
  name: "Jan",
  age: 22,
  birthDate: new Date("2003-12-12")
}

// Per editar les variables (no readonly) a posteriori
Jan.mail = "jan@not-real-main.com";
```

També podem **extendre** les interfícies, donant a lloc a tipus més complexes de dades.

```TypeScript

interface Student extends Person{
  university: string;
  degree?: string;
  year: number;
}

// Podem crear un objecte de la forma
const Jan: Student = {
  name: "Jan",
  age: 22,
  birthDate: new Date("2003-12-12"),
  university: "Universitat Autònoma de Barcelona",
  degree: "Telecom.",
  year: 5,
}
```

També podem **implementar** classes fent servir interfícies. Quan fem això la classe es compromet a donar resposta COM A MÍNIM a tots els camps de la interfície. Per exemple:

```TypeScript
// Interfície
interface LivingBeeing {
  name: string;
  age: number;
}

// Classe implementada amb la interfície
class Human implements LivingBeeing{
  name: string; // OBLIGATORI
  age: number; // OBLIGATORI
  private socialSecurityNumber; // OPCIONAL, la interfície estableix uns mínims, però podem afegir més coses.

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  // ...
}

// Creació de la classe
const Jan = new Human("Jan", 22); 

// NOTA: Tot i que potser sembla herència per culpa de l'exemple, no ho és, la interfície només són uns requisits que la classe ha de cumplir.
```

Una cosa que també podem fer amb les interfícies és crear "signatures de mètode" (*method signatures*). Aquestes "signatures de mètode" són basicament funcions que declarem a les interfícies i que, en implementar la classe a la interfície concreta, obligem a la classe a implementar aquesta funció.

```Typescript
// Interfície document: paràmetres que qualsevol document hauria de tenir
interface Document {
  documentID: number;
  documentTitle?: string; // Opcional
}

// Interfície printable: indica tots els mètodes que ha de tindre alguna cosa que es pot imprimir
interface Printable {
  print(): void; // METHOD SIGNATURE
}

// Classe implementada amb la interfície
// Una classe por ser implementada fent servir multiples interfícies
class Report implements Document, Printable{
  documentID: number; // OBLIGATÒRI
  documentTitle?: string; // OBLIGATÒRI (que sigui ? també és obligatòri)

  constructor(documentID: number){
    this.documentID = documentID;
  }

  // Funció print OBLIGATÒRIA de la interfície 
  print(): void{
    console.log("Printing...")
  }
}

const septemberReport = new Report(1092026);
septemberReport.print();
```


## Funcions

Les funcions són fàcils d'entendre, es comporten com una funció normal però hem de definir els paràmetres d'entrada i sortida tal com:

```TypeScript
// Funció 1
function sum(x:number/*TIPUS VARIABLE ENTRADA*/, y:number): number /*TIPUS VARIABLE SORTIDA*/ {
  return x + y;
}

// Funció 2
function printText(text: string = "default text", otionalText?: string): void /*FEM SERVIR VOID PER INDICAR QUE NO RETORNEM RES*/ {
  console.log(text);
}

```

També es poden crear tipus (*Types*) per a les funcions, per exemple:

```TypeScript
// Tipus de funció
type MathOperation = (x: number, y: number) => number; 

// Implementació del tipus
const add: MathOperation = (a, b) => a + b;
```

Adicionalment es podràn rebre un nombre indefinit de paràmetres en forma de vector (array) de la forma:

```TypeScript
function sumManyNumbers(...numbers: number[]): number{
  return number.reduce((total, num) => total + num, 0);
}

let finalSum: number = sumManyNumbers(1, 2, 3, 4);
```

També es poden rebre paràmetres de diversos tipus de la forma:
```TypeScript
function whatIsParam(param: number | string): void{
  if (typeof param === "string"){
    console.log("string");
  }else if (typeof param === "number"{
    console.log("number");
  }else{
    console.log("this will never print");
  }
}
```

## Arrays
Els arrays són molt *straightforward*, es declaren de la següent forma
```TypeScript
// Definició de tipus "Type Suffix" - RECOMANADA 
const array: number[] = [1, 2, 3, 4];

// Definició del tipus "Array Generic" - existeix però ningú la fa servir
const array: Array<string> = ["abc", "def", "ghi"];
```

Les accions més comunes amb els arrays solen ser:
```TypeScript
let alumnes: string[] = ["Jan", "Gerard", "Aleix"];

// AFEGIR un element al final
alumnes.push("Lluna"); // ["Jan", "Gerard", "Aleix", "Lluna"]

// AFEGIR un element al principi
alumnes.unshift("Angel") // ["Angel", "Jan", "Gerard", "Aleix", "Lluna"]

// ELIMINAR darrer element
const ultim = alumnes.pop() // ["Angel", "Jan", "Gerard", "Aleix"]

// ELIMINAR primer element
const primer = alumnes.shift() // ["Jan", "Gerard", "Aleix"]

// RECUPERAR L'INDEX d'un dels elements
const indexGerard: number = alumnes.indexOf("Gerard");

// ELIMINAR element concret
if(indexGerard !== -1){
  alumnes.splice(indexGerard, 1); // ["Jan", "Aleix"]
}

// CONSULTAR si existeix una entrada o no
const existsJan: boolean = alumnes.includes("Jan");

// ORDENAR 
alumnes.sort()

// ORDENAR del revès
alumnes.reverse()

// ITERAR per tots els elements de l'array
alumnes.forEach(alumne => {
  //...
})


// Adicionalment també podem buscar (find), filtrar (filter) i mapejar (map), però donat el moment que necessiti això millor preguntar-ho a la IA de confiança
```

També es poden fer arrays de tipus personalitzats:
```TypeScript
interface Animal{
  species: string;
  name: string;
  age: number;
}

let familyPets: Animal[] = [
  {species: "dog", name: "Rex", age: 13},
  {species: "cat", name: "Pipi", age: 9},
  {species: "cat", name: "Blanqueta", age: 3}
]
```

Adicionalment es poden fer arrays que només podem llegir

```TypeScript
const paletaColors: readonly string[] = ["pink", "white", "green"];
```

Finalment, no hem de confondre arrays amb tupples, els tupples són arrays de mida fixa i amb elements que poden variar de tipus, com ara:

```TypeScript
let recordBotleFlip: [string, number] = ["Jan", 15];
```

## Genèrics

Els genèrics són una forma que tenim de parametritzar funcions i interfícies d'una forma més reutilizable, flexible i amb seguretat de tipus. 

Imaginem-nos que tenim dues funcions que fan el mateix però per a diferents tipus d'objectes. Si ara es vulgues agrupar les dues funcions en una alguns dirien que podriem posar els paràmetres del tipus *any* i ja, però per a una implementació més segura, rubista i flexible TS ens permet crear funcions de tipus indeterminat (s'entén el tipus de qualsevol cosa paràmetres, objectes i sortides) que es determinarà en el moment de la crida d'aquesta.

NOTA: Es podria dir que els genèrics són el mateix que els *templates* a C++, 


```TypeScript
function retornSenzill<T>(param: T): T{
  return param;
}

// Indicant explícitament el tipus
const num = retornSenzill<number>(25);

// Sense indicar el tipus
const str = retornSenzill("Jan");
```

Com ja s'ha esmentat a priori, també es poden fer servir generics per a interficies de la forma:

```TypeScript
// Definició d'una interfície amb un genèric
interface APIResponse<T>{
  data: T;
  timestamp: Date;
}

// Creació d'un objecte amb la interfície amb un genèric
const messageResponse: APIResponse<string> = {
  data: "missatge aleatori",
  timestamp: new Date()
} 

// NOTA: També es poden fer servir interfícies com a genèrics
interface User {
  name: string;
  age: number;
}

const userResponse: APIResponse<USER> = {
  data: {name: "Jan", age: 22;},
  date: new Date()
}
```

Es pot anar més enllà i restringir els genèrics a certes propietats. 

Imaginem-nos que volem fer una funció per saber el nom d'un objecte, de normal els objectes no tenen nom, però posem que tenim molts objectes/interfícies diferents que sí que disposen d'una variable "nom". Aleshores, per evitar fer una funció per cada tipus o una forma d'identificar objectes complexa, TS ens permet limitar els genèrics que entren a una funció. Potser aquest concepte queda més clar amb el següent exemple:

```TypeScript
// Varies interfícies i objectes amb un mateix paràmetre "name"
interface Human {
  name: string;
}

interface Pet {
  name: string;
}

interface WebPage {
  name: string
}

//...

const Jan: Human = {name: "Jan"}
const Dog: Pet = {name: "Ghost"}
const Wikipedia: WebPage = {name: "Wikipedia"}

// En comptes de fer una funció per cada objecte podem fer una funció amb  genèrics
function getName<T extends {name: string}>(object: T): string {
  return object.name;
}
```


## Bibliografia
[YT Video - TypeScript - The Basics - Fireship](https://www.youtube.com/watch?v=ahCwqrYpIuM)

## Annex

### 1. Taula dels *types* més comuns a TS 

| Type | Description | Example |
| --- | --- | --- |
| **`string`** | Represents textual data. | `let name: string = "Alice";` |
| **`number`** | Represents both integer and floating-point numbers. | `let age: number = 30;` |
| **`boolean`** | Represents true or false logical values. | `let isActive: boolean = true;` |
| **`array`** | Represents a list of values of a specific type. | `let scores: number[] = [95, 82, 88];` or `Array<string>` |
| **`tuple`** | Represents an array with a fixed number of elements and known types. | `let entry: [string, number] = ["id", 42];` |
| **`any`** | Opts out of type checking, allowing any value (use sparingly). | `let data: any = { x: 0 };` |
| **`unknown`** | A safer alternative to `any`; requires type checking before use. | `let input: unknown = "hello";` |
| **`void`** | Represents the absence of a return value (commonly used in functions). | `function log(): void { console.log("hi"); }` |
| **`null` & `undefined`** | Represents intentional absence of value or uninitialized variables. | `let empty: null = null;` |
| **`object`** | Represents any value that is not a primitive type. | `let obj: object = { key: "value" };` |
| **`enum`** | A way of giving more friendly names to sets of numeric or string values. | `enum Direction { Up, Down }` |
| **`union` (`|`)** | Allows a value to be one of several types. | `let id: string | number = "123";` |