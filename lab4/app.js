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
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.getWeather(lat, lng);
    }, err => {
        console.log("mispoes");
    });
    }

    getWeather(lat, lng){
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector("body").appendChild(temp);
            //console.log(json.currently.summary);
            //console.log(json);
        });
    }
}

let app = new Weather('87d0b90aaed973175e9e8896d40716eb');

