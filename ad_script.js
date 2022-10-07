let d = new Date();
let currentHour = d.getHours(); // 18
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let oneJan = new Date(d.getFullYear(), 0, 1);
let numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
let weekNumber = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);  // 37
let month = allMonths[d.getMonth()];  // May
let day = weekday[d.getDay()];   // Monday


async function getBanners() {
let url = 'ad_data.json';
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

// Daily
async function renderByDayAdText() {
let adtext = await getBanners();
let currentAd = adtext.filter(function(todayAd) {
    return todayAd.frequency == day; });
    //console.log(currentAd);

// For each row 
let html = '';
 currentAd.forEach(adData => {
                let htmlSegment = `
                <div class="notice" style="width:330px;height:auto;padding:5px;">
                <span>${adData.adText}</span><br>
                <span>${adData.callToAction}</span> <a href='${adData.adURL}'rel='nofollow'>
                <span style="text-decoration: none;">${adData.adURL}</span></a></div>`;
        
                html += htmlSegment;
            });          
          
let container = document.querySelector('#todayTextAd');
            container.innerHTML = html;
  
}

renderByDayAdText();

// Monthly
async function renderByMonthAdText() {
  let adtext = await getBanners();
  let currentAd = adtext.filter(function(todayAd) {
      return todayAd.frequency == month; });
      //console.log(currentAd);
  
  // For each row 
  let html = '';
   
  currentAd.forEach(adData => {
                  let htmlSegment = `
                  <div class="notice" style="width:330px;height:auto;padding:5px;">
                  <span>${adData.adText}</span><br>
                  <span>${adData.callToAction}</span> <a href='${adData.adURL}'rel='nofollow'>
                  <span style="text-decoration: none;">${adData.adURL}</span></a></div>`;
          
                  html += htmlSegment;
              });
  let container = document.querySelector('#monthlyTextAd');
              container.innerHTML = html;
  }
  
  renderByMonthAdText();

  // Weekly
async function renderByWeekAdText() {
  let adtext = await getBanners();
  let currentAd = adtext.filter(function(todayAd) {
      return todayAd.frequency == weekNumber; });
      //console.log(currentAd);
  
  // For each row 
  let html = '';
   
  currentAd.forEach(adData => {
                  let htmlSegment = `
                  <div class="notice" style="width:330px;height:auto;padding:5px;">
                  <span>${adData.adText}</span><br>
                  <span>${adData.callToAction}</span> <a href='${adData.adURL}'rel='nofollow'>
                  <span style="text-decoration: none;">${adData.adURL}</span></a></div>`;
          
                  html += htmlSegment;
              });
  let container = document.querySelector('#weeklyTextAd');
              container.innerHTML = html;
  }
  
  renderByWeekAdText();

   // Random
async function renderByRandomAdText() {
  let adtext = await getBanners();
  let currentAd = adtext.filter(function(todayAd) {
      return todayAd.frequency == "random"; });
  let index = Math.floor(Math.random() * currentAd.length); // random banner
  let adData = currentAd[index];
  
  // For random row 
  let html = '';
  let htmlSegment = `<div class="notice" style="width:330px;height:auto;padding:5px;">
<span>${adData.adText}</span><br>
  <span>${adData.callToAction}</span> <a href='${adData.adURL}' rel='nofollow'>
  <span style="text-decoration: none;">${adData.adURL}</span>
  </a></div>`; 

  html += htmlSegment;

  let container = document.querySelector('#randomTextAd');
              container.innerHTML = html;
  }
  
  renderByRandomAdText();

  
// Ads by time (Morning, Afternoon, Evening)
async function renderByTimeAdText() {
  let cycleAds;
  
      if (currentHour < 12)
      // Morning 
          cycleAds = `
  <div class="notice" style="width:330px;height:auto;padding:5px;">
<span>Use the promo code <mark>3x48mX</mark> to get 50% off your first month to any unlimited, all-you-can-wash membership with EverWash Car Club.
Use my link: <a href='https://bit.ly/3KtPaNB' rel='nofollow'>
  <span style="text-decoration: none;">https://bit.ly/3KtPaNB</span></a>
  </span></div>`;
  
      else if (currentHour >= 12 && currentHour <= 17)
      // Afternoon 
          cycleAds = `
          <div class="notice" style="width:330px;height:auto;padding:5px;">
<span>I love MoneyGram's easy online transfers & you will too! Use my code <mark>RAFPCM2RN9</mark> for zero fees on your 1st transfer.
              Try them at: <a href='https://bit.ly/3pwcAcM' rel='nofollow'>
  <span style="text-decoration: none;">https://bit.ly/3pwcAcM</span></a>
  </span></div>`;
          
      else if (currentHour >= 17 && currentHour <= 24)
      // Evening 
          cycleAds = `
          <div class="notice" style="width:330px;height:auto;padding:5px;">
<span>Hey! I've been using Cash App to send money and spend using the Cash Card. Try it using my code <mark>JCMLKKL</mark> and you'll get $5.
              Use my link: <a href='https://bit.ly/3sFOEWm' rel='nofollow'>
  <span style="text-decoration: none;">https://bit.ly/3sFOEWm</span></a>
  </span></div>`;

      let hrsAd = `${cycleAds}`;
      document.querySelector('#timeTextAd').innerHTML = hrsAd;
    
  }
  
  renderByTimeAdText();