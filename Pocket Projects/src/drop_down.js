
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

let dropdown = document.getElementsByClassName("drop-down-dog-list")[0];

function dogLinkCreator(dogs) {
  let dogList = [];
  for (let key in dogs) {
    let anchor = document.createElement('a');
    anchor.innerText = key;
    anchor.setAttribute("href", dogs[key]);
    let list = document.createElement("li");
    list.classList.add("dog-link");
    list.appendChild(anchor);
    dogList.push(list);
  }
  return dogList;
}

function attachDogLinks(dogs, el) {
  let dogLinks = dogLinkCreator(dogs);
  for(let i = 0; i < dogLinks.length; i++) {
    el.appendChild(dogLinks[i]);
  }
}

attachDogLinks(dogs, dropdown);