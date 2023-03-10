const apiKey = '2fDha0W69PzSKHd9CdqrCyY1klTcz5Bm5jRVM7Vn';
const url = 'https://api.nasa.gov/planetary/apod?';

let container = document.querySelector(".container");
let button = document.getElementById('fetch-image');

button.addEventListener('click', () => {
  let imageContainer = document.querySelector(".image-container");
  imageContainer.remove();

  let newImageContainer = document.createElement("div");
  newImageContainer.classList.add("image-container");

  container.append(newImageContainer);

  let dateInput = document.querySelector(".details-input input");
  let date = dateInput.value;

  let request = new XMLHttpRequest();
  request.open('GET', url + "date=" + date + "&api_key=" + apiKey, true);
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);
      // console.log(data)
      let imageUrl = data.url;
      let image = document.createElement("img");
      image.src = imageUrl;
      newImageContainer.append(image);
    } else {
      window.alert('Please enter the date in correct format.')
    }
  }
})

let hdButton = document.getElementById('fetch-hd');
hdButton.addEventListener("click", () => {
  let imageContainer = document.querySelector(".image-container");
  imageContainer.remove();

  let newImageContainer = document.createElement("div");
  newImageContainer.classList.add("image-container");

  container.append(newImageContainer);

  let dateInput = document.querySelector(".details-input input");
  let date = dateInput.value;

  let request = new XMLHttpRequest();
  request.open('GET', url + "date=" + date + "&api_key=" + apiKey, true);
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);
      // console.log(data)
      let imageUrl = data.hdurl;
      let image = document.createElement("img");
      image.src = imageUrl;
      newImageContainer.append(image);
    } else {
      window.alert('Please enter the date in correct format.')
    }
  }
})
