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


async function renderRandomAdText() {
   let adtext = await getBanners();
   let index = Math.floor(Math.random() * adtext.length); // random banner
  // console.log(adtext[index]);
    let html = '';
    let htmlSegment = `<div class="#" style="width:330px;height:auto;background-color:powderblue;padding:5px;">
	<span>${adtext[index].adText}</span><br>
    <span>${adtext[index].cta}</span> <a href='${adtext[index].adLink}'>
    <span style="text-decoration: none;">${adtext[index].adLink}</span>
    </a></div>`; 

        html += htmlSegment;

    let container = document.querySelector('.adText');
    container.innerHTML = html;
}

renderRandomAdText();