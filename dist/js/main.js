var menue = [
  {
    title: 'HTML and CSS Week 1',
    items: [
      {
        title: 'Day 1: First meeting',
        link: 'https://github.com/mate-academy/fs-program/blob/master/lesson_00_instructions.md',
      },
      {
        title: 'Day 2: HTML',
        link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
        items: [
          {
            title: 'Algo main: Sum numbers in range',
            link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
          },
          {
            title: 'Algo stretch: Seek and destroy',
            link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
          },
          {
            title: 'Project: Create html form',
            link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
          }
        ],
      }
    ],
  },
  {
    title: 'HTML and CSS Week 2',
    items: [
      {
        title: 'Day 1: npm, gulp, sass',
        items: [
          {
            title: 'Algo main: Sum numbers in range',
            link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
          },
          {
            title: 'Algo stretch: Seek and destroy',
            link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
          },
          {
            title: 'Project: Create html form',
            link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
          }
        ],
      },
      {
        title: 'Day 2: BEM',
        link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
        items: [
          {
            title: 'Algo main: Sum numbers in range',
            link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
          },
          {
            title: 'Algo stretch: sum all primes',
          },
          {
            title: 'Project: Create html form',
            link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
          }
        ],
      }
    ],
  },
];



let myMenue = document.querySelector(".myMenue");





for (var i = 0; i < menue.length; i++) {
  let menueItem = menue[i];
  console.log('menueItem', menueItem);
  const myUl = document.createElement("ul");
  myUl.classList.add("parentUl");
  myMenue.appendChild(myUl);
  myUl.innerHTML = menueItem.title;
  console.log(myUl);
  console.log(menue[i])
  var items = menue[i].items;
  for (var j = 0; j < items.length; j++) {
    let ulItem = items[j];
    console.log("ulItem", ulItem);
    const myLi = document.createElement("li");
    myLi.classList.add("listParent");
    myUl.appendChild(myLi);
    myLink = document.createElement('a');
    myLink.innerHTML = ulItem.title;
    myLink.setAttribute('href',ulItem.link)
    myLi.appendChild(myLink)
    console.log(myLink);
    console.log(myLi);
    console.log(items[j]);
    var items2 = items[j].items;
    if (items2) {
      for (var z = 0; z < items2.length; z++){
        let lastItem = items2[z];
        const deepUl = document.createElement("ul");
        deepUl.classList.add('nestedUl');
        myLi.appendChild(deepUl)
        const deepestLi = document.createElement('li');
        deepestLi.classList.add('deepestLi');
        deepUl.appendChild(deepestLi);
        myLink2 = document.createElement('a');
        myLink2.innerHTML = lastItem.title;
        myLink2.setAttribute('href', lastItem.link)
        deepestLi.appendChild(myLink2)
        console.log(items2[z])
        console.log(lastItem.title);
   }
  }
 }
};

const showItems = function(){
var nestedUl = document.getElementsByClassName("nestedUl");
for(let i=0; i<nestedUl.length; i++){
  nestedUl[i].classList.remove('nestedUl');
 }
}

showItems();


// const createTriangle =function (){
// const triangle = document.createElement("img");
// triangle.setAttribute('src', '../img/triangle.jpg');
// console.log(triangle);
// var listParent = getElementsByClassName("listParent");
// if(li has children ul)
// {
//   for(i = 0; I<listParent.length; i++){
//    listParent[i].appendChild(triangle)
// }
// }











