const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

let para = document.createElement('p');
para.textContent = "Hey! I'm red!"
para.style.color = "red";
container.appendChild(para);

let header = document.createElement('h3');
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

let secondDiv = document.createElement('div');
secondDiv.style.backgroundColor = "black";
secondDiv.style.border = "10px solid pink";

let secondHeader = document.createElement("h1");
secondHeader.textContent = "I'm in a div!"
secondHeader.style.color = "white";
secondDiv.appendChild(secondHeader);

let secondPara = document.createElement("p");
secondPara.textContent = "ME TOO!";
secondPara.style.color = "white";
secondDiv.appendChild(secondPara);

container.appendChild(secondDiv);