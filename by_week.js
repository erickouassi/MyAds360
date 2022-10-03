//currentdate = new Date();
const d = new Date();
var oneJan = new Date(d.getFullYear(), 0, 1);
var numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
var weekNumber = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);
console.log(`The week number of the current date (${d}) is ${weekNumber}.`);

async function getBanners() {
    // 
let url = 'by_week.json';
try {
let res = await fetch(url, {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
});
return await res.json();
} catch (error) {
console.log(error);
}
}

async function renderByDayAdText() {
let adtext = await getBanners();
let currentAd = adtext.filter(function(todayAd) {
    return todayAd.weekNumber == weekNumber; });
 //   console.log(currentAd);

// For each row 
let html = '';
 
currentAd.forEach(adData => {
                let htmlSegment = `
                <div class="#" style="width:330px;height:auto;background-color:powderblue;padding:5px;">
                <span>${adData.adText}</span><br>
                <span>${adData.cta}</span> <a href='${adData.adLink}'rel='nofollow'>
                <span style="text-decoration: none;">${adData.adLink}</span></a></div>`;
        
                html += htmlSegment;
            });
let container = document.querySelector('#weeklyTextAd');
            container.innerHTML = html;
}

renderByDayAdText();