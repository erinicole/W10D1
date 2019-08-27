
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
let header = document.getElementsByClassName("drop-down-dog-nav")[0];
function dogLinkCreator(dogs) {
  let dogList = [];
  for (let key in dogs) {
    let anchor = document.createElement('a');
    anchor.innerText = key;
    anchor.setAttribute("href", dogs[key]);
    let list = document.createElement("li");
    list.classList.add("dog-link", "hide-me");
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

function handleEnter(el) {
  el.addEventListener('mouseenter', e => {
    Array.from(dropdown.children).forEach( child => {
      child.classList.remove('hide-me');
    });
  });
}

function handleLeave(el) {
  el.addEventListener('mouseleave', e => {
    Array.from(dropdown.children).forEach(child => {
      child.classList.add('hide-me');
    });
  });
}

attachDogLinks(dogs, dropdown);
handleEnter(header);
handleLeave(header);