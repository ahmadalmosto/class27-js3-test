// VERSION 2

/*
1. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/

/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM 
- Creates an unordered list for each book

Use the following array of objects:
*/

const books = [{
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL: 'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
  },
  {
    bookName: 'Refactoring',
    author: 'Kent Beck & Martin Fowler',
    coverUrl: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
  },
];

// function booksInfo(arr) {
//   for (let book of books) {
//     console.log(book);
//     const body = document.querySelector('body')
//     const ul = document.createElement('ul');
//     const img = document.createElement('img')
//     body.appendChild(ul);
//     body.appendChild(img)
//     img.src = book.coverURL;
//     // ul.innerText = `${book.bookName}' ' ${book.author}' ' ${book.coverURL}`;
//     ul.innerText =  book.author+" : "+book.bookName
//   }
// }
// booksInfo(books)
/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
*/

/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://jsonplaceholder.typicode.com/users
- Make use of async/await syntax
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/
// async function fetchApi(){
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const response = await fetch(url);
//   const data = await response.json();
//   const body = document.querySelector('body')
//    const ul = document.createElement('ul');
//    body.appendChild(ul);
//    ul.innerText = data[0].name +" "+ data[0].email +" " + data[0].address.city;
// }
// fetchApi().then(()=>{
//   console.log('done')
// })
/*
5.
a) Create a class, called Animal, that includes:
- A constructor method
- "type", "color", "size" properties
- 1 additional method, called "getType", which returns the type

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/
// class Animal {
//   constructor(type,color,size){
//     this._type= type;
//     this._color=color;
//     this._size = size;
//   }
//   getType(){
//     return this._type
//   }
// }
// const animalOne = new Animal('dog','black','big');
/*
6.
Write a JavaScript function that:
- Accepts a string of 4 words (all lowercase letters) as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/
function convert(str){
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // console.log(splitStr[i]) 
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);  
      console.log(splitStr[i]) 
  }
  
  return splitStr.join(' '); 
};
convert(' hi my name is ahamd');