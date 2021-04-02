var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-04-02&' +
          'sortBy=popularity&' +
          'apiKey=3ac945f900ed4b989311cdf600dc57e8';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
