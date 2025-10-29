const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.toReversed();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher.length >= 5) {
    longNames.push(teacher);
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'sxarray teachers

const edIndex = teachers.indexOf("Ed");
teachers.splice(edIndex, 1);
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const fabioIndex = teachers.indexOf("Fabio");
const isFabioPresent = fabioIndex !== -1;
console.log(isFabioPresent);

// oppure 

const isFabioPresentTwo = teachers.includes("Fabio");
console.log(isFabioPresentTwo);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  if (i === teachers.length - 1) {
    teachersString += teachers[i];
  }
  else {
  teachersString += `${teachers[i]}, `;
  }
}
console.log(teachersString);

// oppure

const teachersStringTwo = teachers.toString();
console.log(teachersStringTwo);

// oppure 

const teachersStringThree = teachers.join(", ")
console.log(teachersStringThree);


