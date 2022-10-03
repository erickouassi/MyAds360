

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const M = new Date();
let mm = month[M.getMonth()];


async function getBanners() {
    // 
let url = 'by_month.json';
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
    return todayAd.monthText == mm; });
  //  console.log(currentAd);

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
let container = document.querySelector('#monthlyTextAd');
            container.innerHTML = html;
}

renderByDayAdText();