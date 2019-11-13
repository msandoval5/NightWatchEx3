var youtubeCommands = {
    submit: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        .setValue('@searchBar','Automating with Node.js – 001')
        .click('@searchButoon')
        .waitForElementVisible('body',1000)
        .expect.element('@firstResult').text.to.equal('utomating with Node.js – 001')
        .getText('@views', function(result) {
            console.log('The views from the first result are: ', result.value);
            })
        .expect.element('@firstResult').text.to.equal('Automation with Selenium')
        .saveScreenshot('./reports/screenshot1.png');
    }
  };

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        searchBar: {    
            selector:'#search-input'
        },
        searchButton:{
            selector:'#search-icon-legacy'
        },
        firstResult:{
            selector:'//a[@title="Automating with Node.js - 001"]'
        },
        views:{
            selector:'//span[@class = "style-scope ytd-video-meta-block"][contains(text(),"4.9")]'
        }      
    }

  };
