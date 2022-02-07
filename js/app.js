const title = document.createElement("h1"); //creo elemento h1
title.innerHTML = `FizzBuzz DOM`; //scrivo nell'h1
document.body.appendChild(title); //aggiungo elemento all'html
title.classList.add("centered"); //aggiungo classi all'h1

const list = document.createElement("ul"); //creo elemento ul
document.body.appendChild(list); //aggiungo elemento all'html

for (let i=0; i < 100; i++)
{
    const listItem = document.createElement("li"); //creo elemento li

    if ( ( (i+1) % 3 === 0) && ( (i+1) % 5 === 0) ) //controllo se è multiplo sia di 3 che di 5
    {
        // console.log(`FizzBuzz`);
        listItem.innerHTML = `FizzBuzz`; //scrivo nel li
        listItem.classList.add("threeAndFive"); //aggiungo classi al li
    } 
    else if ( (i+1) % 3 === 0) //controllo se è multiplo di 3
    {
        // console.log(`Fizz`);
        listItem.innerHTML = `Fizz`; //scrivo nel li
        listItem.classList.add("three"); //aggiungo classi al li
    }
    else if ( (i+1) % 5 === 0) //controllo se è multiplo di 5
    {
        // console.log(`Buzz`);
        listItem.innerHTML = `Buzz`; //scrivo nel li
        listItem.classList.add("five"); //aggiungo classi al li
    }
    else 
    {
        // console.log(i+1);
        listItem.innerHTML = `${i+1}`; //scrivo nel li
        listItem.classList.add("basic"); //aggiungo classi al li
    }

    list.append(listItem); //aggiungo elemento li alla lista
}