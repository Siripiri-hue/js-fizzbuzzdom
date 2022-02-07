const title = document.createElement("h1");
title.innerHTML = `FizzBuzz DOM`;
document.body.appendChild(title);
title.classList.add("centered");

const list = document.createElement("ul");
document.body.appendChild(list);

for (let i=0; i < 100; i++)
{
    const listItem = document.createElement("li");
    let content = "";
    if ( ( (i+1) % 3 === 0) && ( (i+1) % 5 === 0) )
    {
        // console.log(`FizzBuzz`);
        listItem.innerHTML = `FizzBuzz`;
    } 
    else if ( (i+1) % 3 === 0)
    {
        // console.log(`Fizz`);
        listItem.innerHTML = `Fizz`;
    }
    else if ( (i+1) % 5 === 0)
    {
        // console.log(`Buzz`);
        listItem.innerHTML = `Buzz`;
    }
    else
    {
        // console.log(i+1);
        listItem.innerHTML = `${i+1}`;
    }
    list.append(listItem);
        
}