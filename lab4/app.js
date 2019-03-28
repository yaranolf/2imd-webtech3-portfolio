class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        console.log("API working ofwa");
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
        console.log(navigator);
    }

    getMyLocation(){
        console.log("Getting your location");
        navigator.geolocation.getCurrentPosition(position => { //function(position)
        console.log("Found ya little bastard");
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.getWeather(lat, lng);
    }, err => {
        console.log("Didn't think so man");
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
        console.log("Giphy almost ready");
        this.initialize();
    }

    initialize(){
        this.getGiphy();
    }

    getGiphy(){
        let q = 'weather';
        let urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY_GIPHY}&q=${q}&limit=25&offset=1&rating=G&lang=en`;
        fetch(urlGiphy)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            let giphy = document.createElement("section");

            //media in link gaat van 0 tot 4, randomizer
            let mediaKey = Math.floor(Math.random()*5);


            let randArrId = Math.floor(Math.random()*26);
            //vloeken op de juiste syntax om id uit json response te krijgen
            /*let data = JSON.parse(data);
            for(let i = 0; i < data.length; i++){
                let idImage = data[i].id;
            }*/
            //let idImage = JSON.parse({data},[id]);
            //let idImage = JSON.parse(response.data[id]);
            //let idImage = JSON.parse(response,{data:id});
            //let idImage = JSON.parse(response.data),id;
            //let idImage = json.result(data[id]);
            
            let idImage = json.data[randArrId]["id"];
            console.log(idImage);


            //images preview_webp --> uit JSON stringify en kunnen displayen in div
            let urlImage = `https://media${mediaKey}.giphy.com/media/${idImage}/giphy-preview.webp`;

            giphy.innerHTML = `<img src=${urlImage}>`;
            document.querySelector("body").appendChild(giphy);
        });
    }
}
        /*fetch(urlGiphy)
            .then(response => {
                return response.json();
            })
            .then(json => {
                let img = result.img;
                let output = "";
                for(var index in img){
                    let giphyObj = img[index];
                    let giphyUrl = giphyObj.images.original.url;
                    console.log(giphyUrl);
                    output += "<img width='200px' src='" + gifUrl + "'/>";
                }
                $("#container").html(output);
            });
    }*/

    /*getGiphy(){
        let q = 'weather';
        let urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY_GIPHY}&q${q}&limit=25&offset=0&rating=G&lang=en`;
        
        fetch(urlGiphy)
            .then(response => {
                return response.json();
            })
            .then(json => {
                let giphy = document.createElement("div");
                //giphy.innerHTML = json.currently.summary;
                document.querySelector("body").appendChild(giphy);
        });
    }*/

let appGiphy = new Giphy('Gjxedg0F0pjq4IP3y0xxP8X63zYwc8cx');
