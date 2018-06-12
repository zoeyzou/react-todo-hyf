/*
  1. Write a JavaScript program
  - Create an object of Students with properties: firstName, lastName, address, telephone, postCode,
  course, grade.
  - Create array of objects of students that reflects  your class. Give random grades to each students
  anything between 60 and 95. Makes sure students names reflects your class mates. Assume everybody
  lives in Copenhagen area.
  - Create a function for finding average class grade.
  - Create a function for finding student who has got the lowest grade. Put an encouraging message.
  - Create a function for for finding student who got the highest grade. Put a celebration message.
  */

  const students = [
    {
      firstName: 'Zoey',
      lastName: 'Zou',
      address: 'Copenhagen area',
      telephone: 23232323,
      postCode: 1500,
      course: 'Web Development',
      grade: 90
    },
    {
      firstName: 'Mohammad',
      lastName: 'Subhiyeh',
      address: 'Copenhagen area',
      telephone: 23232324,
      postCode: 1501,
      course: 'Web Development',
      grade: 80
    },
    {
      firstName: 'Marco',
      lastName: 'M',
      address: 'Copenhagen area',
      telephone: 23232325,
      postCode: 1502,
      course: 'Web Development',
      grade: 78
    },
    {
      firstName: 'Zeeshan',
      lastName: 'Z',
      address: 'Copenhagen area',
      telephone: 23232325,
      postCode: 1504,
      course: 'Web Development',
      grade: 69
    },
    {
      firstName: 'Mohammad',
      lastName: 'Rahman',
      address: 'Copenhagen area',
      telephone: 23232326,
      postCode: 1505,
      course: 'Web Development',
      grade: 91
    },
    {
      firstName: 'Vignesh',
      lastName: 'V',
      address: 'Copenhagen area',
      telephone: 23232327,
      postCode: 1506,
      course: 'Web Development',
      grade: 78
    },
    {
      firstName: 'Egsan',
      lastName: 'E',
      address: 'Copenhagen area',
      telephone: 23232328,
      postCode: 1507,
      course: 'Web Development',
      grade: 74
    },
    {
      firstName: 'Mohammad',
      lastName: 'Huq',
      address: 'Copenhagen area',
      telephone: 23232329,
      postCode: 1508,
      course: 'Web Development',
      grade: 91
    },
    {
      firstName: 'Anuradha',
      lastName: 'A',
      address: 'Copenhagen area',
      telephone: 23232330,
      postCode: 1509,
      course: 'Web Development',
      grade: 66
    },
    {
      firstName: 'Anas',
      lastName: 'A',
      address: 'Copenhagen area',
      telephone: 23232331,
      postCode: 1510,
      course: 'Web Development',
      grade: 73
    },
    {
      firstName: 'Samara',
      lastName: 'S',
      address: 'Copenhagen area',
      telephone: 23232332,
      postCode: 1511,
      course: 'Web Development',
      grade: 86
    },
    {
      firstName: 'Gary',
      lastName: 'G',
      address: 'Copenhagen area',
      telephone: 23232333,
      postCode: 1512,
      course: 'Web Development',
      grade: 80
    },
    {
      firstName: 'Sajid',
      lastName: 'S',
      address: 'Copenhagen area',
      telephone: 23232334,
      postCode: 1513,
      course: 'Web Development',
      grade: 90
    },
    {
      firstName: 'Haretha',
      lastName: 'H',
      address: 'Copenhagen area',
      telephone: 23232335,
      postCode: 1514,
      course: 'Web Development',
      grade: 83
    },
    {
      firstName: 'Krishna',
      lastName: 'K',
      address: 'Copenhagen area',
      telephone: 23232336,
      postCode: 1515,
      course: 'Web Development',
      grade: 76
    }
  ];

  function getGrades(students) {
    let grades = [];
    for (let student of students) {
      score.push(student['grade']);
    } //get all the grade values
    return grades;
  } //function to get all the grades

  function averageGrade(students) {
    let score = getGrades(students);
    const sum = score.reduce((acc, curr) => acc + curr); //sum up all the values
    return sum / students.length; //get the average
  } //function to get the average grade based on the grades from getGrades function

  function findLowest(students) {
    students.sort((a, b) => a['grade'] - b['grade']);

    let student = `${students[0]['firstName']} ${students[0]['lastName']}`;
    for (let i = 1; i < students.length; i++) {
      if (students[i]['grade'] === students[0]['grade']) 
        student += `, ${students[i]['firstName']} ${students[i]['lastName']}`;
    }
    return "Sadly you have to work harder, " + student + "!";
  }
  
  function findHighest(students) {
    students.sort((a, b) => b['grade'] - a['grade']);

    let student = `${students[0]['firstName']} ${students[0]['lastName']}`;
    for (let i = 1; i < students.length; i++) {
      if (students[i]['grade'] === students[0]['grade']) 
        student += `, ${students[i]['firstName']} ${students[i]['lastName']}`;
    }
    return "Congratulations! You have done a good job, " + student + "!";
  }
  
  console.log(findLowest(students));
  console.log(findHighest(students));

/*
  2. Write a JavaScript program which iterates the integers from 1 to 1000. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
  For numbers which are multiples of both three and five print "FizzBuzz".
  */
  function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      let printOut = '';
      
      if (i % 3 === 0)
        printOut += 'Fizz';
      
      if (i % 5 === 0)
        printOut += 'Buzz';
      
      console.log(printOut + '\n');
    }
  }

  fizzBuzz();

/*
  3. Write a JavaScript program to construct the following pattern, using a nested for loop. This might be bit of a challenge but read on nested for loop.

  *
  * *
  * * *
  * * * *
  * * * * *
  * * * * * *
  */
