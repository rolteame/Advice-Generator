let loadNewQuoteButton = document.getElementById("loadNew");

let adviceId = document.getElementById("adviceId");

let adviceQuote = document.getElementById('adviceText')


const getData = async () => {
  const responce = await fetch("https://api.adviceslip.com/advice", {
    method: 'GET',
  });

  if (!responce.ok) {
    throw new Error('Connot get Quote');
  }

  const data = await responce.json();

  return data;
}

const loadNewQuote = async (data) => {
  data = await getData()
  adviceId.innerText = `ADVICE # ${data.slip.id}`
  adviceQuote.innerText = `"${data.slip.advice}"`
}

document.addEventListener("click", loadNewQuote)