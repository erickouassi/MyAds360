

async function getBanners() {
    let url = 'by_day.json';
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

async function renderRandomAdText() {
   let adtext = await getBanners();
   let index = Math.floor(Math.random() * adtext.length); // random banner
  // console.log(adtext[index]);
   let adData = adtext[index];
    let html = '';
    let htmlSegment = `<div class="#" style="width:330px;height:auto;background-color:powderblue;padding:5px;">
	<span>${adData.adText}</span><br>
    <span>${adData.cta}</span> <a href='${adData.adLink}' rel='nofollow'>
    <span style="text-decoration: none;">${adData.adLink}</span>
    </a></div>`; 

        html += htmlSegment;

    let container = document.querySelector('#randomTextAd');
    container.innerHTML = html;
    //document.querySelector('#randomTextAd').innerHTML = html;
    // <div id="randomTextAd"></div>  // to display advert
}

renderRandomAdText();

