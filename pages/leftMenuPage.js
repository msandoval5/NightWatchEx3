var youtubeCommands = {
    leftElements: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        //Click on the hamburger menu
        .click('@hamburgerMenu')
    },
    expectTrending: function(){
        this.api.pause(1000);
        return this.waitForElementVisible('body', 1000)
        //Verifies it has the elements that we expect
        .assert.elementPresent('@tendencias');

    },
    expectMenu: function(){
    this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        //Verifies it has the elements that we expect
        .assert.elementPresent('@inicio');
    },
    expectSubscriptions: function(){
        this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        //Verifies it has the elements that we expect
        .assert.elementPresent('@ubscripciones');
    }
  };

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        //Hamburger menu selector
        hamburgerMenu: {    
            selector:'//yt-icon[@id="guide-icon" and @class = "style-scope ytd-masthead"]'
        },
        //Inicio button selector
        inicio:{
            selector:'a[title = "Home"]'
        },
        //Tendecias button selector
        tendencias:{
            selector:'a[title = "Trending"]'
        },
        //Subscripciones button selector
        subscripciones:{
            selector:'a[title = "History"]'
        }
    }
  };