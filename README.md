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


10. Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika klasser med olika logik) och lägg in de i rätt klass: _addTeacher_, _enlistToSubject_, _addStudent_, _addSubject_

11. Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i de olika instanserna. Skriv ut instansen hela tiden och inspektera dem. Kan du tänka dig någon likhet med ett riktigt adminprogram för en skola där en admin till exempel skriver ut en lista på alla ämnen för att se vilka respektive lärare som är ansvariga för respektive kurs.

12. Skapa fler metoder, _quitSubject_, _removeTeacher_, _relegateStudent_, _fireTeacher_. I vilka klasser hör dessa metoder hemma? Och om vi till exempel sparkar en lärare, så måste vi ju ta bort lärarens koppling med skolan, och ämnet/ämnerna som läraren undervisar i. Hur löser vi detta i våra metoder, nu får vi börja tänka oss för lite.

13. Lek runt med dessa metoder i konsolen. Lägg till lite här och ta bort lite där, i de olika instanserna. Rätt smidigt va?

14. Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar om programmet (vilket händer vid varje redigering av script-filen) så kan vi längst ner i script-filen skapa (alltså den koden läses in sist hela tiden) logik för att koppla några studenter till skolan, några ämnen till studenterna och några lärare till ämnena och så vidare. Skapa sån logik nu.

15. Skapa en funktion (OBS, en fristående funktion) , _displayAllStudents_ som loopar igenom skolans alla studenter med hjälp av en loop. Alla studenter med respektive egenskaper ska skrivas ut i konsolen.

16. Skapa nu fler funktioner, _displayAllSubjectsOfStudent(student)_, _displayAllStudentsEnlistedToSubject(subject)_, _displayAllTeachers_. Varje funktion bör ha något returvärde.

17. Bygg ut med ett ytterligare typ av klass, lägg till en klass som handlar om betyg. Vilka instansvariabler ska den ha? Vilka metoder kan behövas i denna klass? Hur ska relationen mellan de andra klasserna vara? Vilka metoder bör finnas i de andra klasserna som behandlar betyg? Försöka lösa detta och inspektera och lek runt med det i konsolen.
