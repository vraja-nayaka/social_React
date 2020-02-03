function makeRequest() {
  const pageNumberEl = document.querySelector("#page-number");
  clickMeBotton.addEventListener("click", makeRequest);
  $.ajax(
    `https://repetitora.net/api/JS/Imagas?page=${pageNumberEl.value}&count=1`,
    {
      success: function(data) {
        data.forEack(el => {
          const img = document.cteateElement("img");
          img.src = el.thumbnail;
          document.querySelector("#result").appendCild(img);
        });
      }
    }
  );
}
export default makeRequest;
