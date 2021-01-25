const resultNode = document.querySelector(".showResult");
const btnNode = document.querySelector(".resultBtn");

let saveStore = localStorage.getItem("saveStoreKey");
if (saveStore !== null) {
  resultNode.innerHTML = localStorage.getItem("saveStoreKey");
}

const getReq = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

async function displayImg(numPage, countImg) {
  let cards = "";
  let resultURL = `https://picsum.photos/v2/list?page=${numPage}&limit=${countImg}`;
  let imgContent = await getReq(resultURL);
  imgContent.forEach((item) => {
    const cardBlock = `<div class="result-card">
                <img class="result-card-image" src="${item.download_url}"/>
            </div>`;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
  localStorage.setItem("saveStoreKey", cards);
}

btnNode.addEventListener("click", async function () {
  resultNode.innerHTML = "";
  localStorage.clear();
  const value1 = document.getElementById("num1").value;
  const value2 = document.getElementById("num2").value;
  let showResult;
  showResult = document.getElementById("finalResult");
  if (
    Number(value1) >= 1 &&
    Number(value1) <= 10 &&
    Number(value2) >= 1 &&
    Number(value2) <= 10
  ) {
    displayImg(value1, value2);
  } else if (
    Number(value1) >= 1 &&
    Number(value1) <= 10 &&
    (Number(value2) < 1 || Number(value2) > 10)
  ) {
    showResult.innerHTML = "Лимит вне диапазона от 1 до 10";
  } else if (
    (Number(value1) < 1 || Number(value1) > 10) &&
    Number(value2) >= 1 &&
    Number(value2) <= 10
  ) {
    showResult.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  } else {
    showResult.innerHTML = `Номер страницы и лимит
            вне диапазона от 1 до 10`;
  }
});
