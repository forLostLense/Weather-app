var names = ['Jasmine', 'Eddie', 'Love'];
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jasmine'));

var person = {
  name: 'Jasmine',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to' + name);
    });
  }
};
person.greet();

function add (a, b) {
  return a + b;
};

var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(4,7));

var addStatement2 = (a,b) => a + b;
console.log(addStatement2(4,7));
