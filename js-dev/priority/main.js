
//Geopattern pattern

try {
    var pattern = GeoPattern.generate(new Date());
    document.getElementById('canvas').style.background = pattern.toDataUrl();
}
catch(err){
    //If GeoPattern is unsupported... (Which it isn't in IE sometimes, thanks Microsoft)
    //Generate a new color
    var color = randomColor({
        luminosity: 'light'
    });
    //Convert to a tinycolor
    color = tinycolor(color);
    //If the color is too light
    if(color.toHsl().l >= 0.7) {
        color = color.toHsl();
        //Bring it down to 0.7
        color.l = 0.7;
    }
    //Convert back into a tinycolor
    color = tinycolor(color);
    //If the color is too saturated
    if(color.toHsl().s >= 0.6) {
        color = color.toHsl();
        //Bring it down to 0.6
        color.s = 0.6;
    }
    //Apply the color
    $('#canvas')[0].style.background = tinycolor(color).toHexString();
}

//Activity feed
GitHubActivity.feed({
    username: 'au5ton',
    selector: '#feed',
    limit: 6 // optional
});


//Most used languages

//data from austinj-stats
var data = {"Arduino":{"color":"#bd79d1","count":2},"HTML":{"color":"#e44b23","count":10},"Java":{"color":"#b07219","count":9},"JavaScript":{"color":"#f1e05a","count":9}};
var keys = []; //keys to the Dictionary (object)
var graph_data = [];

/*
Gets the names of the keys and saves them in keys so that we can access
`data` with bracket notation (like Swift dictionaries)
*/
for(prop in data) {
    keys.push(prop);
}

for(var i = 0; i < keys.length; i++) {
    graph_data.push({
        value: data[keys[i]]['count'],
        color: data[keys[i]]['color'],
        label: keys[i]
    });
}

// Get the context of the canvas element we want to select
var ctx = document.getElementById('myChart').getContext('2d');
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx).Pie(graph_data);


//Auto Copyright
document.getElementById('copyright').innerHTML = new Date().getFullYear();
var birthday = new Date(1998,10,22);
var age = ((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
var precision = 1000; //However many zeros is how many places
document.getElementById('age').innerHTML = Math.floor(age*precision)/precision;
