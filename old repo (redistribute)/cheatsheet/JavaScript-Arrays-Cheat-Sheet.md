# JavaScript Arrays CheatSheet

## Accessing Elements I

__a1.concat(a2)__               Return new array by joining arrays a1 and a2 together 

__a1.join(separator)__          Join all elements of array a1 into a string separated by separator arg

__a1.slice(start, end)__        Extract a section from start to end of array a1 and return a new array

__a1.indexOf(obj)__                                     Return first index of obj within array a1

__a1.lastIndexOf(obj)__                                 Return last index of obj within array a1

## Iterating I                      
__a1.forEach(fn)__                                      Calls function fn for each element in the array a1

__a1.every(fn)__                                        Return true if every element in array a1 satisfies provided testing function fn

__a1.some(fn)__                                         Return true if at least one element in array a1 satisfies provided testing function fn

__a1.filter(fn)__                                       Create a new array with all elements of array a1 which pass the filtering function fn


## Iterating II                     

__a1.map(fn)__                                          Create a new array with results of calling function fn on every element in array a1

__a1.reduce(fn)__                                       Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value

__a1.reduceRight(fn)__                                  Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value


## Mutating I

__a1.pop()__                                            Remove and return last element from array a1

__a1.push(obj)__                                        Add obj to end of array a1 and return new length

__a1.reverse()__                                        Reverse order of elements of array a1 in place

__a1.sort()__                                           Sort the elements of array a1 in place

__a1.splice(start, deleteCount, items)__                Change content of array a1 by removing existing elements and/or adding new elements

__a1.unshift(obj)__                                     Add obj to start of array a1 and return new length


## General I
__a1.toString()__                                       Return a string representing array a1 and its elements (same as a1. join(','))

__a1.toLocaleString()__                                 Return a localized string representing array a1 and its elements (similar to a1.join(','))

__Array.isArray(var)__                                  Return true if var is an array

__a1.length__                                           Return length of array a1

__a1[0]__                                               Access first element of array a1

source: https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet
