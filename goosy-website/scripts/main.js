let myImage = document.querySelector('img');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/unreal_1.png') {
      myImage.setAttribute('src','images/unreal_2.png');
    } else {
      myImage.setAttribute('src','images/unreal_1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `WELCOME TO GOOSY.XYZ, ${myName}`;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'WELCOME TO GOOSY.XYZ, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }