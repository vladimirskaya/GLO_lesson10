'use strict'

let booksContainer = document.getElementsByClassName('books')[0];
let booksContainerItems = booksContainer.getElementsByClassName('book');
console.log(booksContainer, booksContainerItems);

//let div = document.createElement(div);
//div.innerHTML = "Here I am";
//
document.getElementsByClassName('adv')[0].remove();

booksContainer.prepend(booksContainerItems[1]);
booksContainerItems[2].remove;
booksContainer.append(booksContainerItems[2]);
booksContainerItems[1].after(booksContainerItems[3]);


document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
console.log(document.body.style.backgroundImage);

let bContItemTitle = booksContainerItems[2].getElementsByTagName('a')[0];
bContItemTitle.innerHTML = 'Книга 3. this и Прототипы Объектов';
console.log(booksContainerItems[2], bContItemTitle);

const  chaptersOfTitleItems = booksContainerItems[1].getElementsByTagName('li');
console.log(chaptersOfTitleItems);

//console.log(booksContainerItems[1].getElementsByTagName('ul'));
//booksContainerItems[1].getElementsByTagName('ul')[0].remove();


//let chapters = Array.from(booksContainerItems[1].getElementsByTagName('li'));

let intro1 = chaptersOfTitleItems[0],
	intro2 = chaptersOfTitleItems[1],
	chapter1 = chaptersOfTitleItems[3],
	chapter2 = chaptersOfTitleItems[6],
	chapter3 = chaptersOfTitleItems[8],
	chapter4 = chaptersOfTitleItems[4],
	chapter5 = chaptersOfTitleItems[5],
	annexesA = chaptersOfTitleItems[7],
	annexesB = chaptersOfTitleItems[9],
	annexesC = chaptersOfTitleItems[2],
	annexesD = chaptersOfTitleItems[10];

intro2.after(chapter1);
chapter1.after(chapter2);
chapter2.after(chapter3);
chapter3.after(chapter4);	
chapter4.after(chapter5);
chapter5.after(annexesA);
annexesA.after(annexesB);
annexesB.after(annexesC);
//chapter1.after(chapter2);
//console.log("sds", chapters);
//chaptersOfTitleItems[3].after(chaptersOfTitleItems[2]);
//chaptersOfTitleItems[6].after(chaptersOfTitleItems[2]);



