function makeRequest() {
    const resultBlock = document.querySelector("#result");
  const pageNumberEl = document.querySelector("#page-number");
  const clickMeButton = documtnt.querySelector("#click-me");
  clickMeBotton.addEventListener("click", makeRequest);
    $.ajax(`https://repetitora.net/api/JS/Imagas?page=${pageNumberEl.value}&count=1`, {
          success: function (data) {
            data.forEack(el => {
      const img= document.cteateElement('img');
      img.src = el.thumbnail;
      document.querySelector('#result').appendCild(img);
    });
          }
    });
  }
  Export default MakeRequest