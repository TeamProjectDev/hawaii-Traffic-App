console.log('oof');

var map;

function initMap() { //initation
    map = new google.maps.Map(document.querySelector('#map'), { // where the map is located in HMTL
      center: {lat:21.300776, lng:-158.051877}, //where it will be defaulted too
      zoom: 15 //zoom of how close it is
    });
};

var imageExport = (imageName) => `<img src='images/${imageName}' />`;

//for vue

var headerHolder = Vue.component("always", {
    props : ["img","title","items"],
    template : `
    <div id="header">

            <div id="titleStuff">
                <h2 class="pageTitle" v-html="title"></h2>
                <span class="pageLogo" v-html="img"></span>
            </div>

            <div id="category">
                <p> Template </p>
            </div>
            
            <div id="header-itemHolder">

                <a v-for="item in items" href="item.link" class="items"> {{item.name}} </a>

            </div>
    </div>
    `
});

var dataPath = new Vue({
    el:'#root',
    data: {
        slogans: {
            map: { slogan: "View the entire map of Hawaii with a Map", link: ''},
            camera: { slogan: "Get a live scoop of the road", link: ''},
            about : { slogan: "A little shouout for credits", link: ''}
        },
        header: {
            title: 'ProjecTraffic',
            image: imageExport('Logo.png'),
            contents: [
                {link: 'google.com', name:'Near You'},
                {link: 'google.com', name:'Map'},
                {link: 'google.com', name:'Traffic Cam'},
                {link: 'google.com', name:'About Me'},
            ]
        },
        Report: {
            date: '18/11/02',
            options: ["traffic","weather","Incidents"]
        }
    },
    methods: {

    }
});
