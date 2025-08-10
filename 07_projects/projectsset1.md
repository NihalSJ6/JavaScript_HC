# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-q3zg61ek?file=index.html)

## Used StackBlitz for basic DOM projects


# Solution Code


## Project 1

```javascript
const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button) {
  console.log(button);


//click the buttons to change the background color
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)

    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }

  });

});

```


## Project 2


```javascript
const form = document.querySelector('form');
// this usecase will give you empty

// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');


//Casecheck for invalid input of height and weight
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } 

  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  
  else {
    //bmi formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

});

```

## Project 3
 ```javascript

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date();

  //logs time on the console
  // console.log(date.toLocaleTimeString())

 //displays time every second on Orange colored clock
  clock.innerHTML = date.toLocaleTimeString();
  
}, 1000)

 ```


 ## Project 5

 ```javascript
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./chaiaurcode.js"></script>
  </body>
</html>
 ```



 ## Project 6
 ```javascript

 //generate a random color

const randomColor = function() {
  const hex = "0123456789ABCDEF"

  let color = '#'

  for(let i=0; i<6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

let intervalId; //declaring the var in global scope

const startChangingColor = function() {
  if(!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 2000)
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function() {
  clearInterval(intervalId);
  intervalId = null; //flushout intervalID after clearInterval
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

console.log(randomColor())

 ```