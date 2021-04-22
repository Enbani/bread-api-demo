const axios = require('axios');

var seatGeekFuntion = async (queryString) => {
  let public = 'MzkxODk3MHwxNDc3NjA1OTk0'
  let secret = 'aUT22cqy4DXJEV8Qr4zPohOH-baJD0B_5-uapJff'
  try {
    let response = await axios.request({
      url: `https://api.seatgeek.com/2/events?q=${queryString}`,
      method: 'get',
      auth: {
        username: public,
        password: secret
      }
    });

    let queryData  = response.data;
    let highestScore = -1;
    let topEvent;

    queryData.events.forEach((event) => {
      console.log(`Title: ${event.title}\nScore: ${event.score}\n\n`);

      if (event.score > highestScore) {
        highestScore = event.score;
        topEvent = event.id;
      }
    })

    console.log(`Highest Event: ${topEvent} ${highestScore}`)

    try {
      let rec = await axios.request({
        url: `https://api.seatgeek.com/2/recommendations?events.id=${topEvent}`,
        method: 'get',
        auth: {
          username: public,
          password: secret
        }
      })

      let recData = rec.data.recommendations;

      recData.forEach((recommendation) => {
        console.log(recommendation.event.title)
      })
    } catch (e) {
      console.log(e)
    }
  } catch (e) {
    console.log(e);
  }
};

seatGeekFuntion('basketball');
