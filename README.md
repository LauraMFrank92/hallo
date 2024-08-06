React opfrisker

Hvad er Realt og hvad bruges det til?

React er et JavaScript-bibliotek udviklet  til at bygge brugergrænseflader, især enkelt-sides applikationer. React gør det muligt for udviklere at skabe webapplikationer, der kan opdatere og rendere effektivt, uden at skulle reloade siden.



Hvad er en komponent i React?

En komponent i React er en genanvendelig, isoleret enhed af kode, der repræsenterer en del af brugergrænsefladen. Komponenter kan være simple eller komplekse og kan indeholde både struktur (HTML eller JSX), stil (CSS) og logik (JavaScript). Komponenter gør det muligt at opdele en applikation i mindre dele, som hver især håndterer en specifik funktionalitet eller del af brugergrænsefladen.


Hvilke forskellige metoder kan du bruge til st style dine React-komponenter?

- inline styles kan anvendes direkte på dine JSX-elementer ved at bruge et style-objekt.
- Man kan importere almindelige CSS-filer og bruge dem til at style dine komponenter.
- CSS Modules giver mulighed for at skabe lokalt scope-de styles, hvilket betyder, at CSS-klasserne kun gælder for den specifikke komponent.


Hvad er state i React?

State i React refererer til en datastruktur, som komponenter bruger til at holde styr på ændringer over tid. Det er en vigtig del af Reacts evne til at skabe dynamiske og interaktive brugergrænseflader. State gør det muligt for komponenter at gemme og administrere deres egne data, og når state ændres, vil komponenten automatisk re-rendere for at afspejle de nye data.

Hovedtræk ved State
- Lokalitet: State er lokal for den komponent, der definerer den. Det betyder, at hver komponent kan have sin egen state, som ikke påvirker andre komponenters state.
- Mutabilitet: State kan ændres over tid som svar på brugerinteraktioner eller andre faktorer. Når state ændres, opdaterer React automatisk den relevante del af brugergrænsefladen.
- Initialisering: State initialiseres normalt i komponentens konstruktor eller ved hjælp af hooks som useState.



Hvad er props i React?

Props i React (forkortelse for "properties") er mekanismen, der gør det muligt for komponenter at modtage data fra deres forælderkomponenter. Props er læse-only, hvilket betyder, at en komponent aldrig bør ændre sine egne props; de bruges kun til at sende data og konfigurationer til en komponent.
Hovedtræk ved Props
- Læse-only: Props kan ikke ændres af den komponent, der modtager dem. De er designet til at være immutable, hvilket hjælper med at gøre komponenterne mere forudsigelige og lettere at debugge.
- Envejsdataflow: Props følger et envejsdataflow fra forælder til barn. Det betyder, at data altid flyder nedad i komponenttræet.
- Flexibilitet: Props kan bruges til at sende enhver form for data til en komponent, herunder primitive typer (som tal og strenge), funktioner, objekter, og endda andre komponenter.


hvordan adskiller State sig fra Props?

Egenskab	Props	State
Formål	Sender data fra forælder til barn	Håndterer interne data og tilstand
Mutabilitet	Immutable (læse-only)	Mutable (kan ændres)
Dataflow	Envejs, fra forælder til barn	Lokalt for komponenten
Anvendelse	Konfiguration og dataoverførsel	Dynamiske data og tilstande
Initialisering	Sættes af forælderkomponenten	Initialiseres af komponenten selv


Hvad er hooks i React?

- Hooks i React er funktioner, der gør det muligt at bruge state og andre React-funktioner i funktionskomponenter.
- Hooks giver udviklere en mere fleksibel og enklere måde at håndtere state og sideeffekter på uden at skulle bruge klasser.


forklar hvordan useState og eseEffekt hooks fungerer med eksempler


useState Hook
useState hook bruges til at tilføje state til en funktionskomponent. Den returnerer et array med to elementer: den aktuelle state-værdi og en funktion til at opdatere denne værdi.
Eksempel: En simpel tæller

/—/

import React, { useState } from 'react';

function Counter() {
  // Deklarerer en ny state-variabel kaldet "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

/—/

I dette eksempel:
* Vi importerer useState fra React.
* Vi kalder useState med den initiale state-værdi (0). useState returnerer et array, hvor det første element (count) er den aktuelle state-værdi, og det andet element (setCount) er en funktion til at opdatere denne værdi.
* Når knappen klikkes, kalder vi setCount med en ny værdi (count + 1), hvilket får komponenten til at re-render med den opdaterede state.


useEffect Hook
useEffect hook bruges til at håndtere sideeffekter i funktionskomponenter, såsom data-fetching, subscriptions eller manuelt at ændre DOM'en. useEffect kører efter hver render som standard, men kan konfigureres til kun at køre ved specifikke ændringer i afhængigheder.
Eksempel: Opdatering af dokumentets titel


/—/


useEffect Hook
useEffect hook bruges til at håndtere sideeffekter i funktionskomponenter, såsom data-fetching, subscriptions eller manuelt at ændre DOM'en. useEffect kører efter hver render som standard, men kan konfigureres til kun at køre ved specifikke ændringer i afhængigheder.
Eksempel: Opdatering af dokumentets titel

/—/

import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Brug af useEffect til at opdatere dokumentets titel
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Kun kør, når count ændrer sig

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

/—/

I dette eksempel:
* Vi importerer useState og useEffect fra React.
* useEffect hook bruges til at opdatere dokumentets titel hver gang count ændres.
* Vi angiver en afhængighedsarray som det andet argument til useEffect. Dette array indeholder count, hvilket betyder, at effekten kun kører igen, når count ændrer sig.
* Effekten kører første gang komponenten renders og derefter hver gang count opdateres.


Hvad er JSX?


JSX (JavaScript XML) er en syntaksudvidelse til JavaScript, der bruges i React til at beskrive, hvordan brugergrænsefladen skal se ud. Det ligner HTML, men har kraften i JavaScript bag sig, hvilket gør det muligt at skabe dynamiske og interaktive komponenter på en deklarativ måde. JSX gør det nemmere at skrive og forstå React-komponenter ved at kombinere JavaScript-logik og UI-struktur i én fil.


Hvordan adskiller JSX sig fra almindelig JavaScript?

JSX (JavaScript XML) adskiller sig fra almindelig JavaScript på flere måder, primært ved at tilføje en XML-lignende syntaks, der bruges til at beskrive UI-strukturer i React. Her er nogle af de væsentligste forskelle og hvordan de adskiller sig:
1. Syntaks
JSX:
* Ligner HTML, men er skrevet i JavaScript-filer.
* Tillader HTML-lignende struktur direkte i JavaScript-koden.
* Kræver transpilation (f.eks. med Babel) for at blive forstået af JavaScript-motoren.


Hvad er console.log() og hvilken rolle spiller det i JavaSripts udvikling?

console.log() er en metode i JavaScript, der bruges til at udskrive information til konsollen, typisk en del af udviklerens værktøjer i webbrowseren eller et terminalvindue i en servermiljø. Det er et af de mest grundlæggende og ofte anvendte værktøjer til fejlfinding og debugging i JavaScript-udvikling.


Hvornår er det nyttigt at bruge console.log() ?

Fejlfinding og Debugging
- Inspektion af Variabler: Når du har brug for at forstå, hvad værdierne af variabler er på et bestemt tidspunkt i din kode.
- Overvågning af Funktionskald: For at kontrollere, om en funktion bliver kaldt som forventet, og hvilke argumenter der sendes til den.
- Fejlfinding af Betingelser: For at kontrollere, om betingelser og loops fungerer korrekt.

Verificering af Data
- Når du arbejder med komplekse data strukturer som objekter og arrays, kan du bruge console.log() til at udskrive dem og se deres indhold.
- Kontrol af API-svar: Efter at have lavet et API-kald, kan du logge svaret for at sikre, at du modtager de forventede data.

Performance Monitoring
- Måling af Kodeudførelse: For at analysere hvor lang tid en bestemt del af din kode tager at køre ved hjælp af console.time() og console.timeEnd().

Visualisering af Flow
- Forståelse af Kodeflow: Logge information på forskellige punkter i din kode for at få indsigt i, hvordan koden udføres, især ved asynkrone operationer.

Udforskning af Komponenter i React
- Inspektion af Props og State: Når du arbejder med React, kan du logge props og state for at forstå, hvordan data strømmer gennem dine komponenter.

Udførelse af Hurtige Test
- Test af Funktionalitet: Hurtig test af små kodebidder eller funktioner uden at skulle oprette enheden eller integrationstest.
