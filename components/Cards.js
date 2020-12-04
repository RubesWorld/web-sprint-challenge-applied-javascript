// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        for(let key in res){
            let value = res[key];
            console.log(value)
            for(let i=0;i<=value.length;i++){
                let cards = cardMaker(value[i])
                document.querySelector('.cards-container').appendChild(cards)
            }
        }
    })
    .catch(err=>{
        console.log(err)
    })
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(data){
    //create elements 
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let authorContainer = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    //create the structure via appendChild
    card.appendChild(headline);
    card.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(authorName);

    //add class list
    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //add content 
    headline.textContent = data['headline'];
    img.src = data['authorPhoto']
    authorName.textContent = `By: ${data["authorName"]}`

    //eventListener
    card.addEventListener('click',event=>{
    event.target(console.log(target))
    })

    //return
    return card;
}

