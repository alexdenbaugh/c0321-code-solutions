function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('return of medicalSchool("Dan Abramov"):', medicalSchool('Dan Abramov'));
console.log('return of lawSchool("Ryan Florence"):', lawSchool('Ryan Florence'));
