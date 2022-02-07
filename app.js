const title = document.createElement("h1");
title.innerHTML = `FizzBuzz DOM`;
document.body.appendChild(title);
title.classList.add("centered");




for (let i=0; i < 100; i++)
{
    if ( ( (i+1) % 3 === 0) && ( (i+1) % 5 === 0) )
        console.log(`BuzzFuzz`);
    else if ( (i+1) % 3 === 0)
        console.log(`Buzz`);
    else if ( (i+1) % 5 === 0)
        console.log(`Fuzz`);
    else
        console.log(i+1);
}