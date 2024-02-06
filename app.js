const adviceId = document.getElementById('advice-id')
const adviceTxt = document.getElementById('advice-text')
const adviceBtn = document.getElementById('generate-btn')
const cardContainer = document.querySelector('.card-container');
const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
  const res = await fetch(url)
  const { slip: {id, advice}} = await res.json()
  adviceId.innerText = id;
  adviceTxt.innerText = advice;
}

adviceBtn.addEventListener('click', async () => {
  // Trigger the flip animation again to flip 
  cardContainer.classList.toggle('flip');

  await getAdvice();
  // Trigger the flip animation again to flip back
  cardContainer.classList.toggle('flip');
});

getAdvice()



