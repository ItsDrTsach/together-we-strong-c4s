//**** recomended to download "quokka" extension to see more clearly ****/




// **************************** 

//***array from / array fill:***

// let y = new Array(5).fill(0);
// let y1 = y; //not the sane as y1 = y, its just creating an array with the same values
// let y2 = Array.from(y); //now their two different variables pointing at the same array. all the changes will execute on both of them
// y[3] = 3 //changing both y and y1
// console.log(y);
// console.log(y1);
// console.log(y2);


// // the way "Array.from" works:
// function arrayFrom(arrayToCopy) {
//     let resultArray = [];
//     for(let i = 0; i < arrayToCopy.length; i++) {
//         resultArray[i] = arrayToCopy[i];
//     }
//     return resultArray;
// }
// console.log(arrayFrom([2,1,3]));

// ****************************








// ****************************

// ***array of:***

// let x = Array.of(1,2,3); // creating an array from strings or numbers
// let z = Array.from([1,2,3]); // creating an array from existing array
// console.log({x,z})


// // the way "Array.of" works:
// function arrayOf(...rest){
//     console.log(rest);
//     return [...rest];
// }
// console.log(arrayOf(1,2,3,4))

// ****************************








// ****************************

// ***concat / Array.prototype.concat: ***

// let x = [1,2,3]
// let x1 = ["hello"]
// let y = [4,5,6]

// let z = x.concat(x1, y); // joining y and z *to* x - and creating a new array. using the *method* concat
// let z1 = Array.prototype.concat(x,x1,y); // joining x, y and z - and creating a new array. using the *prototype function* of concat.
// // the difference bewtween those two is semantic.

// console.log({x,y,z});
// console.log({x,y,z1});
// //- same as:
// console.log({
//     "x": x,
//     "y": y,
//     "z": z
// })


// the way Array.prototype.concat works:
// function concat(arr1,arr2,arr3) {
//     return [...arr1, ...arr2, ...arr3];
// };
// ** למימוש הזה יש בעיה - אם מכניסים אליו סטרינג הוא מפרק אותו. אבל זה בגדול הרעיון.

// ****************************







// ****************************

// *** forEach: ***

// for eachElement inside the arr - activate the function.
// let arr = [1,2,3,4,5,"hello"];
// arr.forEach(element =>{
//     console.log(element);
// })



// // how forEach works?

// function myForEach(arr, cb) { //getting an array and a callback function
//     for(let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr); // we usualy used only the first argument "arr[i]" - but forEach is potnetially can get 3 arguments
//     }
// }

// //defining the callback function:
// const callbackfn = (value, index, array) => {
//     console.log([value]);
// }

// // myForEach - for every element in arr, activate callbackfn;
// myForEach(arr, callbackfn); 


// ****************************






// ****************************

// "every" method:

//a function that activates an cb function on every element in an array, and returns a boolean value
// const array = [1,2,3,4,5];
// const array2 = [2,4,6,8];


// // using every in a declerative function:
// function isAllEven(arr) {
//     return arr.every(x => x % 2 === 0)
// }
// console.log(isAllEven(array2));

// // or a simple as:
// console.log(array.every(x => x % 2 === 0));


// // another example of the use:
// const result = array.every(callbackfn);

// // defining callbackfn:
// function callbackfn(value, index, array) {
//     return value > 0; // true
//     // return value < 3; // false
// }
// console.log(result);


// // how "every" works?

// function myEvery(arr, cb) {
//     for(let i = 0; i < arr.length; i++) {
//         if(cb(arr[i], i, arr) === false) {
//             return false
//         }
//     }
//     return true
// }
// const result2 = myEvery(array2, callbackfn);
// console.log(result2)


// function isPalindrome(arr) {
//     return arr.every((x, i, arr) => x === arr[arr.length -i - 1]);
// }

// console.log(isPalindrome([1,2,3,2,1]));



// ****************************





// ****************************

// "some" method:
// // similiar to every, exepts it returns true if theres even 1 element that returns true, and false if there is none.
// let array = [1,2,3,4];

// console.log(array.some(element => element === 2));

// ****************************






// ****************************

// // "find" method:
// returns the element that returns true to de the callback function. if there is none, returns udefined
    // const arr = [
    //     { num: 1, second: [111] },
    //     { num: 2, second: [222] },
    //     { num: 123, second: [123123123] },
    //     { num: 3454, second: [345434543454] },
    //     { num: 235, second: [235235235] }
    //     ];
        
    //     const res = arr.find((value, index, arr) => {
    //          return value.num === 235
    //         });
    //         res.second.push(5)
    //     console.log(arr);


//     // how find works?

//     function myFind(arr, cb){
//         for (let i = 0; i < arr.length; i++) {
//             if(cb(arr[i], i, arr)) {
//                 return arr[i];
//             }
//         }
//     }

// console.log(myFind(arr, element => {return element.num === 235}));


// // "findIndex" Method:
// // returns the first index that the cb function returns true on it:
// console.log(arr.find(element => element.num === 235))
// console.log(arr.findIndex(element => element.num === 235));

// // the same as find, but it returns the index;
// // how it works?
// function myFindIndex(arr, cb){
//     for (let i = 0; i < arr.length; i++) {
//         if(cb(arr[i], i, arr)) {
//             return i;
//         }
//     }
// }
// console.log(myFindIndex(arr, element => {return element.num === 235}));


// //"indexOf" method:
// // returns the index of an element inside an array or a string
// let elem = arr[3];
// // let index = arr.indexOf([]); // false
// let index = arr.indexOf(elem);
// console.log(index);



// // "includes" method:
// // if the value is inside and array, it returns true, else returns false
// console.log(arr.includes(elem));

// // ****************************






// ****************************

// Array.prototype.filter():
// returns a new array, which its values are the values from the original array that passes a filter function (returns true).
// console.log(1);
// const array = [1,3,4,5,6,3,12,1,4,123,5,1234,34,543,454,234,1234];

// function callbackfn(value) {
// return value % 2 === 0;
// }

// const resArr = array.filter(callbackfn);
// console.log(resArr);

// function myFilterFunction(arr,cb) {
//     const res = []
//     for(let i = 0; i < arr.length; i++) {
//         if(cb(arr[i], i, arr)) {
//             res.push(arr[i]);
//         }
//     }
//     return res
// }

// console.log(myFilterFunction(array,callbackfn));

// ****************************





// ****************************
// Array. prototype.map()
// acticates a function for each element in the array

// const products = [
//     {name:"cheese", price: 5 ,id: 1},
//     {name:"milk", price: 5.5 ,id: 12},
//     {name:"candy", price: 0.1 ,id: 13},
//     {name: "coca cola", price: 54 ,id: 11234},
//     {name: "eggs", price: 52 ,id: 134},
//     {name: "whatever", price: 123123, id: 1123}
// ]

// //filter use:
// console.log(products.filter(product => product.price < 10));


// // map fucntion:
// function mapFunc(value, index, array) {
//     return {price: value.price}
// }

// console.log(products.map(mapFunc));


// // another exmaple:
// const numbers = [1,2,3,4,5,6,7];
// const result = numbers.map((number,i) => `square ${i+1} = ` + number*number);
// console.log(result);


// // another example:
// const str = "hello";
// const strArr = [...str].map(letter => letter + letter); // taking each letter and divide it
// console.log(strArr.join("")) // joining the doubled letters:

// // another example:
// // const ProductNames = products.map(product => product.name)
// const ProductNames = products.map(({name, price}) => ({name, price}))
// console.log(ProductNames);


// ****************************






// ****************************

// "reduce" method:
// sums all the outcomes of the cb functions with every vaule on the array.
// ובעברית - נותנים לה פונקציית קולבק. היא מפעילה את הקולבק על כל אחד מהערכים, ומחברת את כל התוצאות. זה
//  יכול להיות להיות סכום של הכל, כפל ועוד מלא

// const numbers = [1,2,3,4,5];
// const initial = 0;

// const reduceFn = (aggregate, current, index, array) => {
//     return aggregate + current;
// };
// const result = numbers.reduce(reduceFn, initial);
// console.log(result);


// //how reduce works?
// function myReduce(arr,cb,initial) {
//     let previousValue = initial
//     for (let i = 0; i < arr.length; i++) {
//         previousValue = cb(previousValue, arr[i], i, arr);
//     }
//     return previousValue
// }

// console.log(myReduce(numbers, reduceFn, 0));



// // usefull example - turning req params into json
// let res1 = "field1=value1&field2=value2&field3=value3" // מדמה queryParam
// .split("&"); // עושה ספליט (מפריד) בין כל האיברים בסימן & 
// console.log(res1);
// res2 = res1.map(s => s.split("=")) // על כל אחד מהאיברים, עושה ספליט בסימן "="

// console.log(res2);
// res3 = res2.map( ([ k, v ]) => ( { [k]: decodeURIComponent(v) })); // רלוונטי אם יש הרבה סימנים מהבראוסר, הוא הופך אותם לקריא בשביל השרת

// console.log(res3);

// res4 = res3.reduce((agg,x) => ({...agg,...x})); // פורס לאובג'קט
// console.log(res4)


// // usefull example - truning json into req params
// let string = Object.entries(res4)
// console.log(string);

// let string2 = string.map( ([ k, v ]) =>k+"="+encodeURIComponent(v));
// console.log(string2)

// let string3 = string2.join("&")
// console.log(string3)

// ****************************





// ****************************

// "sort" method: getting number smaller or bigger then 0
// if bigger then 0 sorting - a, b
// if smaller then 0 sorting - b, a
// let arr = [3,2,5,1,4,6];
// function sortingFunction(elemA, elemB) {
//     if(elemB > elemA) {
//         return 1; // a number smaller then 0
//     }
//     return -1; // a number bigger then 0
// }
// arr.sort(sortingFunction);
// console.log(arr);



// example: sorting by price

// const products = [
//     {name:"cheese", price: 5 ,id: 1},
//     {name:"milk", price: 5.5 ,id: 12},
//     {name:"candy", price: 0.1 ,id: 13},
//     {name: "coca cola", price: 54 ,id: 11234},
//     {name: "eggs", price: 52 ,id: 134},
//     {name: "whatever", price: 123123, id: 1123}
// ]


// const productsSorted = [...products].sort((productA, productB) => {
// return productB.price - productA.price
// });

// // // inshort:
// // const productsSorted = [...products].sort(({price: priceA}, {price: priceB}) => priceA - priceB);
// console.log(productsSorted);


// ****************************








 
//************* פעולות חדשות ***************/


// new Array(5) - מייצר ארראי חדש עם 5 איברים, פיל ממלא את האיברים


//  Array.fill - ממלא את ערכי האיברים 
//  can recieve: array.fill(value, start, end);


// Array.from - כמו לולאת פור שעוברת על האיברים אחד אחד ודוחפת לארראי חדש


// array.of - מייצר ארראי מערכים
//** arguments - the same as ...rest, but instead of an array, it returns an html collection - "array" like object


// Array.isArray(value) - chencking if value is array or not.


// concat / Array.prototype.concat - joining arrays together.


// every - actvating a function on every element in an array, if all of the results are true, returns true. otherwise returns false.


// some - activating a function on every element in an array, if only one of the results are true, returns true. 


// find - returns the element that returns true to de the callback function. if there is none, returns udefined


// findIndex - returns the first index of an array element that the cb function returns true on it.


// indexOf - cheking if an element is inside an array and returns its index.



//filter - returns a new array, which its values are the values from the original array that passes a filter function (returns true).



// map - acticates a function for each element in the array


// includes - returning true if an element is inside of an array, or false otherwise.


// reduce - sums all the outcomes of the cb functions with every vaule on the array.


// sort - sorting according to a function it gets.
// the output of this function needs to be a number smaller or bigger then 0
// if bigger then 0 sorting - a, b
// if smaller then 0 sorting - b, a

    


// Tasks:

// 1: creating Array.prototype.map()
const MyMap = function (callbackFunc1, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callbackFunc1(arr[i]))
    }
    return result
}


const callbackFunc1 = (num) => {
return (2 * num)
}

let array1 = [1,2,3,4,5,6];

console.log(MyMap(callbackFunc1,array1));

// object equivalent:
let myObject = 
{
    name: 2,
    age: 4,
    price: 5
}

function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
      result[key] = mapFn(object[key])
      return result
    }, {})
  }
  
  let newObject = objectMap(myObject, function(value) {
    return value * 2
  })

console.log(newObject)



// 2 creating Array.prototype.filter()
const myFilter = (callbackFunc, arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(callbackFunc(arr[i]) === true) {
        result.push(arr[i])};
    };
    return result
}


const callbackFunc2 = (num) => {
    if (num % 2 == 0) {
        return true;
    } return false;
};

let array2 = [1,2,4,5,8];

console.log(myFilter(callbackFunc2, array2));

console.log(array2.filter(callbackFunc2))


// object equivalent:
let myObject2 = 
{
    name: 2,
    age: 4,
    price: 5
}

const myObjFilter = (object, filterFn) => {
    let result = object;
    Object.keys(object).forEach((key) => {
        if(!filterFn(object[key])) {
            delete object[key];
        }
    })
    return result
}

let filteredObj = myObjFilter(myObject2, callbackFunc2);
console.log(filteredObj)



// create Array.prototype.every

const callbackFunc3 = (num) => {
    if (num % 2 == 0) {
        return true;
    } return false;
};

let array3 = [2,4,6,7];


const myEvery = (arr, callbackFunc) => {
 return !arr.some(element => !callbackFunc(element));
}

 function myEvery1(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr) === false) {
            return false
        }
    }
    return true
}

console.log(array3.some(callbackFunc3));

console.log(array3.every(callbackFunc3));

console.log(myEvery(array3,callbackFunc3));

console.log(myEvery1(array3,callbackFunc3));




// create Array.prototype.flatFiletr()

const array = [[1,3,4],[5,6,7],[8,9,1]];

function myFilterFunction(arr,cb) {
let res = arr.flat().filter(cb)
return res
}

function callbackfn(value) {
return value % 2 === 0;
}

console.log(myFilterFunction(array,callbackfn));
console.log(array.filter(callbackfn))


// equivalent of reduce:


const reduceFn = (aggregate, current, index, array) => {
    return aggregate + current;
};

let myObject3 = 
{
    name: 2,
    age: 4,
    price: 5
}

const initial = 0;

function myObjReduce(object, reduceFn, initial) {
    let previousValue = initial
    Object.keys(object).forEach(key =>{
        previousValue = reduceFn(previousValue, object[key]);
    });
    return previousValue
}

console.log(myObjReduce(myObject3, reduceFn, 0));