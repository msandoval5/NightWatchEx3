var youtubeCommands = {
    searchVideo: function() {
      this.api.pause(1000);
      //Waits for the body element to be visible
      return this.waitForElementVisible('body', 1000)
      //sets the desired value to the search input
        .setValue('@searchBar','Automating with Node.js – 001')
        //Clicks for search
        .click('@searchButoon')
        //Waits for the page to be visible
        .waitForElementVisible('body',1000)
        //Asserts that the first result is the desired one
    },
    expectVideo: function(){
        this.api.pause(1000);
        //Waits for the body element to be visible
        return this.waitForElementVisible('body', 1000)
        .expect.element('@firstResult').text.to.equal('Automating with Node.js – 001')
        //Print the video views
    },
    printViews: function () {
        this.api.pause(1000);
        //Waits for the body element to be visible
        return this.waitForElementVisible('body', 1000)
        //Print the video views
        .getText('@views', function(result) {
            console.log('The views from the first result are: ', result.value);
            })
    },
    failAssert: function(){
        this.api.pause(1000);
        //Waits for the body element to be visible
        return this.waitForElementVisible('body', 1000)
         //This is the fail assert, compares to a non exixting video title
         .expect.element('@firstResult').text.to.equal('Automation with Selenium')
    },
    takeScreenshot: function(){
        this.api.pause(1000);
        //Waits for the body element to be visible
        return this.waitForElementVisible('body', 1000)
          //Performs a screenshot
          .saveScreenshot('./reports/screenshot1.png');
    }
    
  };

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        //Search bar selector
        searchBar: {    
            selector:'#search-input'
        },
        //Search Button selector
        searchButton:{
            selector:'#search-icon-legacy'
        },
        //First result selector
        firstResult:{
            selector:'//a[@title="Automating with Node.js - 001"]'
        },
        //Views number selector
        views:{
            selector:'//span[@class = "style-scope ytd-video-meta-block"][contains(text(),"4.9")]'
        }      
    }

  };
