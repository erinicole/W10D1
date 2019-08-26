
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let newEl = document.createElement("p");
  newEl.innerText = string;
  htmlElement.innerHTML = "";
  htmlElement.appendChild(newEl); 
};

htmlGenerator('Party Time.', partyHeader);