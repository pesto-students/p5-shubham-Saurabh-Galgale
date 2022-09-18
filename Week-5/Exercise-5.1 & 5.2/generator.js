async function myDisplay() {
    let async1 = new Promise(function(resolve) {
      setTimeout(function() {resolve("hey i'm First");}, 1000);
    });
    let async2 = new Promise(function(resolve) {
      setTimeout(function() {resolve("I'm Second");}, 2000);
    });
    let async3 = new Promise(function(resolve) {
        setTimeout(function() {resolve("I'm Third");}, 3000);
      });
    
    var firstFn = await async1;
    console.log(firstFn);
    var secondFn = await async2;
    console.log(secondFn);
    var thirdFn = await async3;
    console.log(thirdFn);

  }
  
//   myDisplay();


  function* genfn() {
      yield 'this is First';
      yield 'this is Second';
      yield 'this is Third';
  }
  
  const generatorObj = genfn();
  
  console.log(generatorObj.next());
  console.log(generatorObj.next());
  console.log(generatorObj.next());
  console.log(generatorObj.next());// done: True