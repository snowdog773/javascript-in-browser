console.log("test");

// const clicky = document.getElementById('button');

// clicky.addEventListener('click', function() {
//     console.log("button clicked");
// });

// or tidier

document.getElementById('button')
        .addEventListener('click',
        event =>console.log("button clicked")
        );

// const images = document.getElementsByTagName('img');

//the const images is a HTML collection NOT A PROPER ARRAY. So we use Array.from to make it
// behave like an array

// Array.from(images) 
// .forEach(
//     image => alert(`ALT = "${image.getAttribute("alt")}`)
//     );

// Another method 


    const images = document.getElementsByTagName('img');

    for (const image of images)
    console.log(`ALT="${ image.getAttribute("alt")}"`);


    // const buttons = document.getElementsByClassName('disabled');

    // for (const butt of buttons) {

    // butt.addEventListener('click',
    //         e => {
    //             console.log("nope!")
    //             e.stopPropagation()
    //             e.preventDefault()
    //         });
    //     }
            //stopPropogation and preventDefault disable the buttons. preventDefault does the
            // actual disabling, and stopPropogation stops "bubbling" -- look up 

            const link = document.querySelectorAll('a[href^="http://"]');
            for (const x of link) {
                x.addEventListener('click', e => {
                e.stopPropagation();
                e.preventDefault();
                const pressedOK = confirm("do you wish to leave?");
                if (pressedOK)
                    location.href = anchor.getAttribute("href");
                 else
                 alert("thanks for staying");
                })}

            // using a query selector to create a HTML object of all a tags containing http using strict CSS
            // selectors. Then a for of loop to stop propogation and prevent default of all elements
            // within the HTML collection, and also use a confirm (pop up box yes/no) to see if users
            // wants to navigate away. If yes then ????????????? location.href, if no, pop up box
            // thanks for staying.
