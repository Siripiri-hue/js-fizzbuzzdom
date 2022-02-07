const title = document.createElement("h1");
title.innerHTML = `FizzBuzz DOM`;
document.body.appendChild(title);
title.classList.add("centered");

const list = document.createElement("ul");
document.body.appendChild(list);

for (let i=0; i < 100; i++)
{
    const listItem = document.createElement("li");

    if ( ( (i+1) % 3 === 0) && ( (i+1) % 5 === 0) ) 
    {
        // console.log(`FizzBuzz`);
        listItem.innerHTML = `FizzBuzz`; //scrivo nel li
        listItem.classList.add("threeAndFive");
    } 
    else if ( (i+1) % 3 === 0) 
    {
        // console.log(`Fizz`);
        listItem.innerHTML = `Fizz`; //scrivo nel li
        listItem.classList.add("three");
    }
    else if ( (i+1) % 5 === 0) 
    {
        // console.log(`Buzz`);
        listItem.innerHTML = `Buzz`; //scrivo nel li
        listItem.classList.add("five");
    }
    else 
    {
        // console.log(i+1);
        listItem.innerHTML = `${i+1}`; //scrivo nel li
        listItem.classList.add("basic");
    }

    list.append(listItem); //aggiungo elemento li alla lista
}