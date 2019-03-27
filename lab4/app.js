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

class Giphy{
    constructor(API_KEY_GIPHY){
        this.API_KEY_GIPHY = API_KEY_GIPHY;
        console.log("jow");
        this.initialize();
    }

    initialize(){
        this.getGiphy();
    }

    getGiphy(){
        let urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY_GIPHY}&q=weather&limit=25&offset=0&rating=G&lang=en`;
        
        fetch(urlGiphy)
            .then(response => {
                return response.json();
            })
            .then(json => {
                let giphy = document.createElement("div");
                //giphy.innerHTML = json.currently.summary;
                document.querySelector("body").appendChild(giphy);
        });
    }
}

let app_Giphy = new Giphy('Gjxedg0F0pjq4IP3y0xxP8X63zYwc8cx');

