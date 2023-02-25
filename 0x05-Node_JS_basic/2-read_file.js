const fs = require('fs');

const arrToObj = (arr) => {
  const obj = [];
  arr.forEach((user) => {
    const userdb = user.toString('utf-8').trim().split(',');
    const firstname = userdb[0];
    const lastname = userdb[1];
    const age = userdb[2];
    const field = userdb[3];
    obj.push({
      firstname, lastname, age, field,
    });
  });
  return obj;
};

const countStudents = (path) => {
  // file to string
  const data = fs.readFileSync(path, 'utf8');

  if (data === null) {
    throw new Error('Cannot load the database');
  }
  // string to array
  const dbArr = data.toString('utf-8').trim().split('\n');
  // array to object
  const dbObj = arrToObj(dbArr);
  const cs = [];
  const swe = [];
  dbObj.forEach((user) => {
    if (user.field === 'CS') {
      cs.push(user.firstname);
    } else {
      swe.push(user.firstname);
    }
  });
  console.log(`Number of students: ${dbObj.length}`);
  if (cs.length > 0) {
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.toString().replaceAll(',', ', ')}`);
  }
  if (swe.length > 0) {
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.toString().replaceAll(',', ', ')}`);
  }
};

countStudents('database.csv');
