
console.log("🙈 🙉 🙊");

class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        console.log("jow");
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
        console.log(navigator);
    }

    getMyLocation(){
        console.log("Getting location");
        navigator.geolocation.getCurrentPosition(position => { //function(position)
        console.log("found you");
       let lat=position.coords.latitude;
        let lng = position.coords.longitude;
        this.getWeather(lat,lng);
        console.log(position);

    }, err => {
        console.log("mispoes");
    });
    }
}

getWeather(lat, lng);{
    //ajax call / XHR
    //https://api.darksky.net/forecast/70cbb5b3805551203ecfbda0653231af/37.8267,-122.4233

    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(json=>{
        console.log(json);
});
}
