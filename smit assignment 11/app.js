var cars = {
    
    honda: {
        city : {
            name : "city",
            company: "honda",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2022,
            price : 6000000,
            images : "images/city.webp",
            type : "sedan",
        },
        civic : {
            name : "civic",
            company: "honda",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2023,
            price : 8000000,
            images : "images/civic.jpg",
            type : "sedan",
        },
        BRV : {
            name : "BRV",
            company: "honda",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2022,
            price : 7500000,
            images : "images/brv.jpg",
            type : "SUV",
        },
        tucson : {
            name : "tucson",
            company: "honda",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2022,
            price : 8200000,
            images : "images/tucson.png",
            type : "SUV",
        },
        vezel : {
            name : "vezel",
            company: "honda",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2016,
            price : 6450000,
            images : "images/vezel.webp",
            type : "SUV",
        },
        CRZ : {
            name : "CRZ",
            company: "honda",
            color : ["Black","White","silver","Grey","blue"],
            auto : true,
            model: 2022,
            price : 9000000,
            images : "images/crz.jpg",
            type : "SUV",
        },
        HRV : {
            name : "HRV",
            company: "honda",
            color : ["Black","White","silver","Grey","redVine"],
            auto : true,
            model: 2022,
            price : 8900000,
            images : "images/hrv.jpg",
            type : "SUV",
        },

    },
    Toyota : {
        Corolla : {
            name : "corolla",
            company: "toyota",
            color : ["Black","White","silver","Grey","redVine"],
            auto : true,
            model: 2022,
            price : 7900000,
            images : "images/corolla.webp",
            type : "sedan",
        },
        aqua : {
            name : "auqa",
            company: "toyota",
            color : ["Black","White","silver","Grey","redVine"],
            auto : true,
            model: 2016,
            price : 4900000,
            images : "images/aqua.webp",
            type : "hatchback",
        },
        vitz : {
            name : "vitz",
            company: "toyota",
            color : ["Black","White","silver","Grey","redVine"],
            auto : true,
            model: 2022,
            price : 4400000,
            images : "images/vitz.webp",
            type : "hatchback",
        },
        prius : {
            name : "prius",
            company: "toyota",
            color : ["Black","White","silver","Grey","redVine"],
            auto : true,
            model: 2020,
            price : 7900000,
            images : "images/prius.jpeg",
            type : "sedan",
        },
        revo : {
            name : "revo",
            company: "toyota",
            color : ["Black","White","silver","Grey","redVine"],
            auto : true,
            model: 2022,
            price : 12900000,
            images : "images/Revo.png",
            type : "SUV",
        },
        fortuner : {
            name : "fortuner",
            company: "toyota",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2021,
            price : 17900000,
            images : "images/fortuner.webp",
            type : "SUV",
        },
        prado : {
            name : "prado",
            company: "toyota",
            color : ["Black","White","silver","Grey",],
            auto : true,
            model: 2022,
            price : 22900000,
            images : "images/prado.webp",
            type : "SUV",
        },
        camry : {
            name : "camry",
            company: "toyota",
            color : ["Black","White","silver","Grey",],
            auto : true,
            model: 2019,
            price : 24900000,
            images : "images/camry.webp",
            type : "sedan",
        },
        yaris : {
            name : "yaris",
            company: "toyota",
            color : ["Black","White","silver","Grey",],
            auto : true,
            model: 2022,
            price : 3900000,
            images : "images/yaris.jpg",
            type : "sedan",
        },
        Crown : {
            name : "Crown",
            company: "toyota",
            color : ["Black","White","silver","Grey",],
            auto : true,
            model: 2022,
            price : 3900000,
            images : "images/Crown.webp",
            type : "sedan",
        },

    },
    KIA: {
        sportage : {
            name : "sportage",
            company: "KIA",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2022,
            price : 9000000,
            images : "images/sportage.webp",
            type : "SUV",
        },
        picanto : {
            name : "picanto",
            company: "KIA",
            color : ["Black","White","silver","Grey"],
            auto : false,
            model: 2020,
            price : 2800000,
            images : "images/picanto.webp",
            type : "hatchback",
        },
        stonic : {
            name : "stonic",
            company: "KIA",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2020,
            price : 5200000,
            images : "images/stonic.jpg",
            type : "hatchback",
        },
        
    },
    suzuki: {
        alto : {
            name : "alto",
            company: "suzuki",
            color : ["Black","White","silver","Grey"],
            auto : true,
            model: 2022,
            price : 3000000,
            images : "images/alto.webp",
            type : "hatchback",
        },
        swift : {
            name : "swift",
            company: "suzuki",
            color : ["Black","White","silver","Grey"],
            auto : false,
            model: 2022,
            price : 4000000,
            images : "images/swift.webp",
            type : "hatchback",
        },
        mehran : {
            name : "mehran",
            company: "suzuki",
            color : ["Black","White","silver","Grey"],
            auto : false,
            model: 2015,
            price : 1500000,
            images : "images/mehran.webp",
            type : "hatchback",
        },
        liana : {
            name : "liana",
            company: "suzuki",
            color : ["Black","White","silver","Grey"],
            auto : false,
            model: 2015,
            price : 1500000,
            images : "images/liana.webp",
            type : "hatchback",
        },
    },    

}




for(var key in cars){
    for(var key1 in cars[key] ){
var card_div = document.getElementById("cards-div");
card_div.innerHTML +=`
<div class="card" style="width: 18rem;">
<img src="${cars[key][key1].images}" class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text">${cars[key][key1].name}</p>

  <p class="card-text">${cars[key][key1].company}</p>
  <p class="card-text">${cars[key][key1].model}</p>
  <p class="card-text">${cars[key][key1].price}</p>

</div>
</div>
`}}

function home(){
    location.reload()
}

function showHonda() {
    var cardDiv = document.getElementById("cards-div");
    cardDiv.innerHTML = ""; 
  
    for (var key in cars.honda) {
      var car = cars.honda[key];
  
      cardDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${car.images}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${car.name}</p>
            <p class="card-text">${car.company}</p>
            <p class="card-text">${car.model}</p>
            <p class="card-text">${car.price}</p>
          </div>
        </div>
      `;
    }
  }
  

function toyota(){
    var cardDiv = document.getElementById("cards-div")
    cardDiv.innerHTML = ""

    for(var key in cars.Toyota){
      var car = cars.Toyota[key]

      cardDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${car.images}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${car.name}</p>
          <p class="card-text">${car.company}</p>
          <p class="card-text">${car.model}</p>
          <p class="card-text">${car.price}</p>
        </div>
      </div>
    `;
    }
}

function KIA(){
    var cardDiv = document.getElementById("cards-div")
    cardDiv.innerHTML = ""

    for(var key in cars.KIA){
      var car = cars.KIA[key]

      cardDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${car.images}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${car.name}</p>
          <p class="card-text">${car.company}</p>
          <p class="card-text">${car.model}</p>
          <p class="card-text">${car.price}</p>
        </div>
      </div>
    `;
    }
}

function suzuki(){
    var cardDiv = document.getElementById("cards-div")
    cardDiv.innerHTML = ""

    for(var key in cars.suzuki){
      var car = cars.suzuki[key]

      cardDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${car.images}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${car.name}</p>
          <p class="card-text">${car.company}</p>
          <p class="card-text">${car.model}</p>
          <p class="card-text">${car.price}</p>
        </div>
      </div>
    `;
    }
}
