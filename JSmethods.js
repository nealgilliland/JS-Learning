                                                            //FILTERING - filter an array down to a new array, for those who match a criteria
function filter(array, test){
  var passed = [];
  for (var i = 0; i < array.length; i++){
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));


                                                          //...this becomes
console.log(ancestry.filter(function(person) {
  return person.born > 1900 && person.born < 1925;
}));

                                                          //MAP - transforms an array, applying a function to all of it's elements, builds a new array with teh new values
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
    mapped.push(transform((array[i]));
  }
  return mapped;
};

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinety, function(person){
  return person.name;
}));

                                                        //...this becomes

console.log(array.map(function(person) {
  //add the rules for transforming each element here
}));
    //so...
console.log(ancestry.filter(function(person) {
  return person.died - person.born > 90;
}).map(function(person) {
  return person.name;
});
                                                    //REDUCE to a single value (find a person with the earliest dob, summing all numbers)

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
    return current;
};

console.log(reduce([1,2,3,4], function(a,b){ return a+ b; }, 0));

                                                  //...this becomes

var array = [1,2,3,4];
console.log(array.reduce(function(a,b){
  return a + b;
}));

//eg 2
console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born)
    return cur;
  else return min;
}));
