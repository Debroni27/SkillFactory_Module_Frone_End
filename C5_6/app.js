const resultNode = document.querySelector(".showResult");
const btnNode = document.querySelector(".resultBtn");

const options = {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const getReq = (url) => {
  return fetch(url, options)
    .then((response) => {
      return response.url;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

btnNode.addEventListener("click", async function () {
  const value1 = document.getElementById("wiegth").value;
  const value2 = document.getElementById("heigth").value;
  let showResult;
  showResult = document.getElementById("finalRelult");
  if (
    Number(value1) >= 100 &&
    Number(value1) <= 300 &&
    Number(value2) >= 100 &&
    Number(value2) <= 300
  ) {
    let resultURL = `https://picsum.photos/${value1}/${value2}`;
    let cardURL = await getReq(resultURL);
    resultNode.innerHTML = `<div class="result-card">
        <img
          src="${cardURL}"
          class="result-card-image"
        />
      </div>`;
  } else {
    showResult.innerHTML = "«одно из чисел вне диапазона от 100 до 300»";
  }
});
