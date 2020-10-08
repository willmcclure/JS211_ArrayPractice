'use strict'

//  Create an array called cars which consists of 4 different types of cars as String type. 
// The first car type should be Ford and includes Honda.
        let cars = ["Ford", "Toyota", "Nissan", "Honda"]

// .length
    //  Console.log the length of the array.
        console.log(cars.length)

// Create another array called moreCars with 4 more different types of cars. 
// The last car type should be Honda.

        let moreCars = ["Chrysler", "Tesla", "Fiat", "Honda"]

// .concat()
    //  Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
        let totalCars = cars.concat(moreCars)
    //  Run the program.
        console.log(totalCars)

// .indexOf() and .lastIndexOf()
    //  Use the indexOf method to console.log the index of Honda.
    //  indexOf returns the first instance of Honda
    //  lastIndexOf would return the second instance of Honda
        console.log(totalCars.lastIndexOf('Honda'))
    //  Use the lastIndexOf method to console.log the index of Ford.
        console.log(totalCars.lastIndexOf('Ford'))

// .join()
    //  Use the join method to covert the array totalCars into a string called stringOfCars.
        let stringOfCars = totalCars.join(" ")
        // console log stringOfCars
        console.log(stringOfCars)

// .split()
    //  Use the split method to convert stringOfCars back intro an array called totalCars.
        totalCars = stringOfCars.split(" ")
    // console log totalCars
        console.log(totalCars)

// .reverse()
    //  Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
        let carsInReverse = totalCars.reverse()
    //  Run the program.
        console.log(carsInReverse)

// .sort()
    //  Use the sort method to put the array carsInReverse into alphabetical order.
    carsInReverse.sort()
    //  Based on the types of cars you used, predict which item in the array should be at index 0. Chrysler
    //  Run the program.
    console.log(carsInReverse)
  

// .slice()
    // Use the slice method to remove Ford and Honda from the carsInReverse array. 
    let removedCars = carsInReverse.slice(2, 4)
    // move them into a new array called removedCars.
    console.log(removedCars)

// .splice()
    // Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
    carsInReverse.splice(1, 2, removedCars)
    // console log it
    console.log(carsInReverse)

// .push()
    // Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
    carsInReverse.push('Fiat', 'Ford')
    // console log it
    console.log(carsInReverse)

// .pop()
    // Use the pop method to remove and console.log the last item in the array carsInReverse.
    console.log(carsInReverse.pop())

// .shift()
    // Use the shift method to remove and console.log the first item in the array carsInReverse.
    console.log(carsInReverse.shift())

// .unshift()
    // Use the unshift method to add a new type of car to the array carsInReverse.
    carsInReverse.unshift('Golf')
    console.log(carsInReverse)

// .forEach()
    // Create an array called numbers with the following items: 23, 45, 0, 2. 
    let numbers = [23, 45, 0, 2] 
    // Write code that will add 2 to each item in the array numbers.
    
   numbers.forEach(number => console.log(number + 2));
   
    // .forEach() requires a function to be passed into it as its first argument. 
    // Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. 
    numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

    function addTwo(number) {
        return number + 2;
    };

    numbers.forEach(number => console.log(addTwo(number)))