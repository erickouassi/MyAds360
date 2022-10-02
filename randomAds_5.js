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
  // console.log(randomAds[1]);
    let html = '';
    randomAds.forEach(newAds => {
        let htmlSegment = `
        <div id="${newAds.id_ad}" class="textadslot">
        <a class="header_link text-decoration-none" href='${newAds.adLink}'>${newAds.company}</a>
        <br />
        <span>${newAds.adText}</span><br>
        <span>${newAds.cta}</span>
        <br />
        <a class="footer_link text-decoration-none" href='${newAds.adLink}' target="_blank" rel='nofollow'>${newAds.adLink}</a>
          </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.adText');
    container.innerHTML = html;
}

renderAdText();

// CSS specific for Ad
var styles = `
#textadbox {
    border: solid 1px #000099;
    width: 300px;
    height: auto;
    padding: 4px;
    font-size: 11px;
    font-family: sans-serif,helvetica;
  }
  #textadbox .header_link {
    font-size: 14px;
  }
  #textadbox .footer_link {
    font-size: 9px;
    color: green;
  }
  .textadslot {
    margin-bottom: 10px;
   position: relative !important;
  }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)