let searchImage = document.getElementById("searchImage");

searchImage.addEventListener("click", async () => {
  let inputVal = document.getElementById("inputValue");
  let inputHeading = document.getElementById("inputHeading");
  let images = document.getElementById("images");
  let endBtn = document.getElementById("endBtn");
  let loadMoreBtn = document.getElementById("loadMore");
  let innerContent = document.getElementById("innerContent");

  let accesskey = "GJwk-AM4LLeIGFGXhRBNCr8JQjGOLIGcLC-GPC0NwcU";
  let secretkey = "HWfKwXhDwonWZNuChJd8BPDE23DmVFlWqGLFfl9dWy0";
  let appID = 635546;

  let page = 1;

  let api = `https://api.unsplash.com/search/photos?page=${page}&query=${inputVal.value}&client_id=${accesskey}&per_page=15`;
  let data = await fetch(api);
  let response = await data.json();
  let responseResult = response.results;
  console.log(responseResult);

  inputHeading.style.display = "block";

  // images.addEventListener(
  //   ("mouseover",
  //   () => {
  //     innerContent.style.display = "flex";
  //   })
  // );

  images.style.display = "flex";

  inputHeading.innerText = `Free ${
    inputVal.value[0].toUpperCase() + inputVal.value.slice(1)
  } Photos`;

  console.log(data);

  for (let i = 0; i < responseResult.length; i++) {
    let newDiv = `<div style="background-image: url(${
      responseResult[i].urls.small
    }); background-position: center; background-size: cover;" id="everyImage">   
    <div id="innerContent">
    <div class="user">
          <div class="left">
            <img
              src=${responseResult[i].user.profile_image.small}
            />
          </div>
          <div class="right">
          <a href=${responseResult[i].user.links.html}>
            <p id="userName">${
              responseResult[i].user.first_name +
              " " +
              responseResult[i].user.last_name
            }</p>
            </a>
            <p id="status">Available For Hire</p>
          </div>
        </div>
        <div class="downloadBTN">
          <button>Download</button>
        </div>
        </div>
 </div>`;

    images.innerHTML += newDiv;
  }
  endBtn.style.display = "flex";
});
