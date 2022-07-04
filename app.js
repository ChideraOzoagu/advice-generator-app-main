const adviceBtn = document.querySelector(".advice-btn");
const adviceText = document.querySelector(".advice-text");
const adviceId = document.querySelector(".advice-id");

// fetch API
const url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const {id, advice} = data.slip;
    adviceId.innerHTML = `Adivce ${id}`
    adviceText.innerHTML = `"${advice}"`

    if (!response.ok) {
      const msg = `There was an error "${response.status}  ${response.statusText}"`;
      throw new Error(msg);
    }
  } 
  catch (error) {
  }
};
adviceBtn.addEventListener("click", getAdvice);
