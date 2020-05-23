// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"

Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/
// function getNumber(){
//     for(let i=1;i<=100;i++){
//         if(i%3==0 && i%5==0){
//            console.log('jackPot') 
//         }else if(i%3==0){
//             console.log("multiple of 3")
//         }else if(i%5==0){
//             console.log("This is a multiple of 5")
//         }else{
//             console.log(i);
//         }
//     }
// }
// getNumber();
/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
// function appendImage(){
//     const body = document.querySelector('body')
//     const button = document.createElement('button')
//     const img = document.createElement('img')
//     // const img = document.createElement('img');
    
//     body.appendChild(button);
//     body.appendChild(img);
//     button.innerText='click me!'
//     button.addEventListener('click',()=>{
// img.src='https://avatars3.githubusercontent.com/u/20858568?s=200&v=4';
// button.remove();
//     })
// }
// appendImage();
/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
*/
// api its allow two applications talk to each other like weather app;
// api allow to use github api and display information about HackYourRepo 
/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Make use of async/await syntax
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/
// async function fetchApi(){
    
//     const url = 'https://reqres.in/api/users';
//     const response = await fetch(url);
//     const text = await response.json();
//     const dataArr = text.data;
//     console.log(dataArr)
//     // return parseInt(text);
//     console.log(text.data)
//     console.log(text.data[0].last_name)
//     dataArr.forEach(element => {
//         console.log(element.last_name)
//         const body = document.querySelector('body')
//         const ul = document.createElement('ul');
//         body.appendChild(ul);
//         ul.innerText = element.first_name +" "+ element.last_name;
//     });
  
// }
// fetchApi().then(()=>{
//     console.log('done')
// })
/*
5.
a) Create a class, called Person, that includes:
- A constructor method
- "name", "age", "home city" properties
- 1 additional method, called "getName", which returns the name

b) Instantiate the class, and give it your name + attributes

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/
class Person{
    constructor(name,age,city){
        this._name = name;
        this._age = age;
        this._city= city;
    }
    get name(){
        return this._name;
    }
}
const myInfo= new Person('ahmad',32,'Assen')
/*
6. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/
