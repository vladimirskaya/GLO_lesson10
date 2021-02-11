'use strict'

//get node-parent and node-children
let booksContainer = document.getElementsByClassName('books')[0];
let booksContainerItems = booksContainer.getElementsByClassName('book');
//console.log(booksContainer, booksContainerItems);

//delete advertising window
document.getElementsByClassName('adv')[0].remove();

//getting correct order of node-children
booksContainer.prepend(booksContainerItems[1]);
booksContainerItems[2].remove;
booksContainer.append(booksContainerItems[2]);
booksContainerItems[1].after(booksContainerItems[3]);

//change body background image
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
console.log(document.body.style.backgroundImage);

//edit title of the node-child
let bContItemTitle = booksContainerItems[2].getElementsByTagName('a')[0];
bContItemTitle.innerHTML = 'Книга 3. this и Прототипы Объектов';
console.log(booksContainerItems[2], bContItemTitle);

// do proper order of nodes-child №2
let  	chaptersOfTitleItems = booksContainerItems[1].getElementsByTagName('li'),
	intro1 = chaptersOfTitleItems[0],
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

// do proper order of nodes-child №5
	chaptersOfTitleItems = booksContainerItems[4].getElementsByTagName('li');
	console.log(chaptersOfTitleItems);
	intro1 = chaptersOfTitleItems[0];
	intro2 = chaptersOfTitleItems[1];
	chapter1 = chaptersOfTitleItems[9];
	chapter2 = chaptersOfTitleItems[3];
	chapter3 = chaptersOfTitleItems[4];
	chapter4 = chaptersOfTitleItems[2];
	chapter5 = chaptersOfTitleItems[6];
let chapter6 = chaptersOfTitleItems[7];
	annexesA = chaptersOfTitleItems[5];
	annexesB = chaptersOfTitleItems[8];
	annexesC = chaptersOfTitleItems[10];

intro2.after(chapter1);
chapter1.after(chapter2);
chapter2.after(chapter3);
chapter3.after(chapter4);	
chapter4.after(chapter5);
chapter5.after(chapter6);
chapter6.after(annexesA);
annexesA.after(annexesB);
annexesB.after(annexesC);

