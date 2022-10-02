async function getBanners() {
    let url = 'https://opensheet.elk.sh/1jTJHyJHcv9pDy4c_dZMRxE34QBbmmAC6P2c0106Ba_0/adText';
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

async function renderAdText() {
    let adtext = await getBanners();
  var n = 3
  randomAds = adtext.sort(() => .5 - Math.random()).slice(0, n)
   //console.log(randomAds);
    let html = '';
    randomAds.forEach(newAds => {
        let htmlSegment = `<div class="#" style="width:330px;height:auto;background-color:powderblue;padding:5px;">
<span>${newAds.adText}</span><br>
<span>${newAds.cta}</span>
<a class="text-decoration-none" href='${newAds.adLink}' rel='nofollow'>
${newAds.adLink}
</a><hr></div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.adText');
    container.innerHTML = html;
}

renderAdText();