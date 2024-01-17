# js-exercise

[link to project] ("https://sofiahjerpe.github.io/js-exercise/")

### Variables

### Data types

## arrays

```js
- arrays
- arrays and loops
- the Sauna
```
[Go to Sauna project] (https://sofiahjerpe.github.io/js-exercise/arrays/theSauna.html)
## functions

## calculator

## dom-manipulation

```js
- pt 1
- pt 2
```

## simple-registration

## classes

#### Skolan - Öva på att använda klasser i JS

```js
-skola
-lärare
-kurser
-studenter
-dela upp kod i olika filer alla js filer importeras i rätt ordning


class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teachers = [];
    /* skolans övriga egenskaper */
  }
}
```

```js
class Subject {
    /* koden...*/
  }
}
```

14. Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar om programmet (vilket händer vid varje redigering av script-filen) så kan vi längst ner i script-filen skapa (alltså den koden läses in sist hela tiden) logik för att koppla några studenter till skolan, några ämnen till studenterna och några lärare till ämnena och så vidare. Skapa sån logik nu.

15. Skapa en funktion (OBS, en fristående funktion) , _displayAllStudents_ som loopar igenom skolans alla studenter med hjälp av en loop. Alla studenter med respektive egenskaper ska skrivas ut i konsolen.

16. Skapa nu fler funktioner, _displayAllSubjectsOfStudent(student)_, _displayAllStudentsEnlistedToSubject(subject)_, _displayAllTeachers_. Varje funktion bör ha något returvärde.

17. Bygg ut med ett ytterligare typ av klass, lägg till en klass som handlar om betyg. Vilka instansvariabler ska den ha? Vilka metoder kan behövas i denna klass? Hur ska relationen mellan de andra klasserna vara? Vilka metoder bör finnas i de andra klasserna som behandlar betyg? Försöka lösa detta och inspektera och lek runt med det i konsolen.
