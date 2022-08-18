var fs = require('fs');


fs.readFile('urls.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  
  fetch('url', {
        method: 'GET',
        body: data,
        .then(function())
    }

    