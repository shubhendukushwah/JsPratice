// Spread Operator
// Use when we have to call function with arbitary arguments
// Can also use to merge array and objects
// Syntax : ...
  arr1 = [1,3,4];
  arr2 = [6,7,8];
  arr3 = [...arr1,...arr2];
  Array(6) [ 1, 3, 4, 6, 7, 8 ] //Output


// Rest Operator
// Used when we have to pass arbitary number of arguments
// Syntax same as Spread.(...)


// Destructuring assignment
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables,
var namesss = ['John','Wick']
var [firstName,lastName] = name

// Then 2 variables are created. firstName whose value is "John" and lastName whose value is "Wick"


=> Array of string/number:
arr = [1,3,5,6]
arr2=[2,4,6,6]arr.splice(index,1)

// Remove a particular element

  arr1.splice(arr1.indexOf(54),1) //remove 6 from arr

// Replace a particular element by new value
  arr.splice(arr1.indexOf(6),1,9)  //replace 6 by 9 in arr

// Operations between two arrays

// Merge
  arr3 = [...arr,...arr2]

// Filter array1 by array2 (Extract the matching elements from Array 1 which are also present in Array 2 and store the result array in array3)
    arr3 = arr.filter((item)=>arr2.includes(item))


// => Object/JSON: [use a user obj as below eg for practice]
obj1={ "id": 2, "name": 'Dean', "gender": 'm', "age": 23 }
obj2 = { "id": 3, "name": 'Alex', "gender": 'm', "age": 21 }

// Remove a particular property (key: value)
delete obj1.gender   //remove gender property form obj1

// Update a particular KEY’S VALUE
obj1.age = 44  //update age to 44 of obj1

// Add a new property
obj1.address = "102"
arr.splice(index,1)
// Merge two Object
obj3 = {...obj1,...obj2}



// Array objects
// => Array of Objects:
Eg: users = [
{ "id": 2, "name": 'Dean', "gender": 'm', "age": 23 },
{ "id": 3, "name": 'Alex', "gender": 'm', "age": 21 },
{ "id": 4, "name": 'Rinney', "gender":'f', "age": 22},
{ "id": 5, "name": 'Alias', "gender": 'm', "age": 16 },
{ "id": 5, "name": 'Linda', "gender": 'f', "age": 18 }
]


  id=3
// Insert a new user object with same properties in above array
  users.push({ "id": 7, "name": 'John', "gender": 'm', "age": 32 },)

// Fetch a particular user with matching id

  users.find((item)=> item.id == id)

// Delete a particular user with matching id

  function del(item,index,arr){
    if (item.id == id) {
      arr.splice(index,1)}
    }

    users.find((item)=>item.id==id)

//Update a particular user property with matching ID

users.find((item)=>item.id==id).age=100


// Filter male users from array and store resulted array in new array
newArr = users.filter((item)=>item.gender=='m')

// Find count of female users
users.filter((item)=>item.gender=='f').length



// Get sum of all users age using reduce function and object destruction

users.reduce((total,{age}=obj) => total+age,0)
