



function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    for (let i = 0; i < 11; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
    return `https://www.youtube.com/watch?v=${text}`;
}

// console.log(makeid());

let id = 'GhMjt30JezQ';
id = '5qap5aO4i9A';
id = '5qap5aO4i9Aw';
id = '5qapdsfsdgfsdfsdfsd';

let countSucces = 0;
let countError = 0;

// $.ajax({
//     type: 'HEAD',
//     url: `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`,
//     success: function () {
//         //it exists!
//         console.log("таке відео існує!");
//         document.querySelector('body').innerHTML = `<p>Succes</p>`;
//         // countSucces++;
//     },
//     error: function (jqXhr) {
//         if (jqXhr.status == 400) {
//             //it doesn't exist
//             console.log("такого відео не існує!");
//             document.querySelector('body').innerHTML = `<p>Error</p>`;
//             // countError++;
//         }
//     }
// });

// let body = document.querySelector('body');
// let array = document.getElementsByClassName('array')[0];
// let error = document.querySelector('.error');

function atempt(id) {
    $.ajax({
        type: 'HEAD',
        url: `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`,
        success: function () {
            //it exists!
            console.log("таке відео існує!");

            // array.insertAdjacentHTML('afterbegin', `1`);
            // countSucces++;
            // console.log('*'.repeat(100));
        },
        error: function (jqXhr) {
            if (jqXhr.status == 400) {
                //it doesn't exist
                // console.log("такого відео не існує!");
                
                // array.insertAdjacentHTML('afterbegin', `0`);
                // countError++;
            }
            console.log("такого відео не існує!");
        }
    });
}

// atempt(id);




// atempt(makeid());
// atempt('5qap5aO4i9A');


// for (let i = 0; i < 1000; i++) {
//     if (i == 599) atempt('5qap5aO4i9A');
//     else atempt(makeid());
//     atempt(makeid())
// }

// atempt('vNJKhmewonk');

for (let i = 0; i < 5000000; i++) { // :D
    // if (i == 1234) atempt('vNJKhmewonk');
    // else atempt(makeid());
    atempt(makeid());
}















// console.log(array);


// document.querySelector('body').insertAdjacentHTML('afterbegin', `<p>Succes</p>`);
// document.querySelector('body').innerHTML = `<p>Succes</p>`;
// atempt();

// fetch(`https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`)
// .then(() => {
//     console.log("таке відео існує!");
//     // countSucces++;
//     // console.log('Succes', countSucces, 'Error', countError);
//     document.querySelector('body').innerHTML = `<p>Succes</p>`;
// })
// .catch(() => {
//     console.log("такого відео не існує!");
//     // countError++;
//     // console.log('Succes', countSucces, 'Error', countError);
//     document.querySelector('body').innerHTML = `<p>Error</p>`;
// })

