// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userContainer = document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadindScreen = document.querySelector("loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// //initially variables need????
// let oldTab = userTab;
// const API_KEY = "9d48ec17413fef7f506eaa2c83eb05e2";
// oldTab.classList.add("current-tab");
// getfromSessionStorage();


// function switchTab(newTab){
//     if(newTab != oldTab){
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");

//         if(!searchForm.contains("active")) {
//             //kya search form wala container is invisible, if yes then make it visible
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         else{
//             //pehle search tab pr tha ab ur weather visible krna h
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             //ab maye ur weather me agya hun to weather v display rkna parega, so lets check local storage first
//             //for cordinates, if we have saved them there.
//             getfromSessionStorage(); 
//         }


//     }
// }

// userTab.addEventListener("click", () =>{
//     //pass clicked tab as input parameter
//     switchTab(userTab);
// });

// searchTab.addEventListener("click", () =>{
//     //pass clicked tab as input parameter
//     switchTab(searchTab);
// });

// //check if cordinates are already present in session storage.
// function getfromSessionStorage(){
//     const localCoordinates = sessionStorage.getItem("user-cordinates");
//     if(!localCoordinates){
//         //agar local cordiate nhi mile to kya krna parega
//         grantAccessContainer.classList.add("active");
//     }
//     else{
//         const coordinates =JSON.parse(localCordinates);
//         fetchUserWeatherInfo(coordinates);
//     }
// }

// async function fetchUserWeatherInfo(coordinates) {
//     const {lat, lon} = coordinates;
//     //make grantcontainer invisible
//     grantAccessContainer.classList.remove("active");
//     //make loader visible
//     loadindScreen.classList.add("active");
//     //API CALL
//     try{
//         const response =await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
//         );
//         const data = await response.json();



//         loadindScreen.classList.remove("active");
//         userContainer.classList.add("active");
//         renderWeatherInfo(data);

//     }
//     catch(err){
//         loadindScreen.classList.remove("active");
//         //homwe work
//     }
// }

// function renderWeatherInfo(data){
//     //firstly we have to fetch the elements


//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]")
//     const temp = document.querySelector("[data-temp]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");

//     // faetch values from weahtherINFO object and put it UI elements
//     cityName.innerText = data?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innertext = weatherInfo?.main?.temp;
//     windspeed.innerText = weatherInfo?.wind?.speed;
//     humidity.innerText = weatherInfo?.main?.humidity;
//     cloudiness.innerText = weatherInfo?.clouds?.all;


// }


// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         alert("No geolocation supported.");
//     }
// }
// function showPosition(position){
//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,

//     }
//     sessionStorage.setItem("user-cordinates",JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
// }
// const grantAccessButton = document.querySelector("data-grantAccess");
// grantAccessButton.addEventListener("click",getLocation);

// const searchInput = document.querySelector("data-searchInput");
// searchForm.addEventListener("submit",(e) => {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if(cityName === "")
//         return;
//     else
//         fetchUserWeatherInfo(cityName);
// })

// async function fetchUserWeatherInfo(city){
//     loadindScreen.classList.add("avtive");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try{
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`

//         );
//         const data =await response.json();
//         loadindScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch{
//         //homework
//     }
// }










// DOM Elements
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let oldTab = userTab;
const API_KEY = "9d48ec17413fef7f506eaa2c83eb05e2";
oldTab.classList.add("current-tab");
getFromSessionStorage();

function switchTab(newTab) {
  if (newTab !== oldTab) {
    oldTab.classList.remove("current-tab");
    oldTab = newTab;
    oldTab.classList.add("current-tab");

    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }
  }
}

userTab.addEventListener("click", () => switchTab(userTab));
searchTab.addEventListener("click", () => switchTab(searchTab));

function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("user-cordinates");
  if (!localCoordinates) {
    grantAccessContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;
  grantAccessContainer.classList.remove("active");
  loadingScreen.classList.add("active");
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    if(data.cod === "404"){
        loadingScreen.classList.remove("active");
        alert("City not found. Please check the spelling and try again.")
    }
    else{
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    // loadingScreen.classList.remove("active");
    // userInfoContainer.classList.add("active");
    // renderWeatherInfo(data);
  } catch (err) {
    loadingScreen.classList.remove("active");
    alert("Error fetching weather data.");
  }
}

function renderWeatherInfo(data) {
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const desc = document.querySelector("[data-weatherDesc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  cityName.innerText = data?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
  desc.innerText = data?.weather?.[0]?.description;
  weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
  temp.innerText = `${data?.main?.temp}°C`;
  windspeed.innerText = `${data?.wind?.speed}m/s`;
  humidity.innerText = `${data?.main?.humidity}%`;
  cloudiness.innerText = `${data?.clouds?.all}%`;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation not supported.");
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  sessionStorage.setItem("user-cordinates", JSON.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = searchInput.value;
  if (cityName !== "") {
    fetchSearchWeatherInfo(cityName);
  }
});

async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add("active");
  userInfoContainer.classList.remove("active");
  grantAccessContainer.classList.remove("active");
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

     // ✅ Check for invalid city
    if(data.cod === "404"){
        loadingScreen.classList.remove("active");
        alert("City not found. Please enter a valid city name.");
        return
    }
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch {
    loadingScreen.classList.remove("active");
    alert("Error fetching city weather data.");
  }
}
