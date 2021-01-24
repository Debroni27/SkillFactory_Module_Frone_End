function getReq(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

const resultNode = document.querySelector(".result_req");

const btnNode = document.querySelector(".btn");

function displayResult(apiData) {
  let cards = "";
  console.log("start cards", cards);

  apiData.forEach((item) => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  console.log("end cards", cards);

  resultNode.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
  const value = document.querySelector("input").value;
  let showResult;
  showResult = document.getElementById("showRes");
  if (value >= 11 || value <= 0) {
    showResult.innerHTML = "«число вне диапазона от 1 до 10»!";
  } else {
    getReq(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
    console.log(value);
  }
});
