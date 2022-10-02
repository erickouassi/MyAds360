/*! *****************************************************************************
Copyright (c) YORISI LLC.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

async function getBanners() {
    let url = 'https://opensheet.elk.sh/1jTJHyJHcv9pDy4c_dZMRxE34QBbmmAC6P2c0106Ba_0/adByWeek';
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

async function renderByWeekAdText() {
    // Option 1
  let adtext = await getBanners();
   var now = new Date();
   var start = new Date(now.getFullYear(), 0, 0);
   var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
   var oneDay = 1000 * 60 * 60 * 24;  // 86400000
   var day = Math.floor(diff / oneDay);
   //console.log(day);  // Current Day Number
    var myItem = adtext.length;
    var index = (day - 1) % myItem;   
    //console.log(day);  // index of the array
    //console.log(now);
    //console.log(start);

   let dTextAd = `<div class="#" style="width:330px;height:auto;background-color:powderblue;padding:5px;">
     <span>${adtext[index].adText}</span><br>
     <span>${adtext[index].cta}</span> <a href='${adtext[index].adLink}' rel='nofollow'>
     <span style="text-decoration: none;">${adtext[index].adLink}</span>
     </a></div>`;
   document.querySelector('#weeklyTextAd').innerHTML = dTextAd;
   // <div id="weeklyTextAd"></div>  // to display advert
  // document.querySelector(".preload").style.display = "none"//stop the loading
}

renderByWeekAdText();