var youtubeCommands = {
    submit: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        .click('@hamburgerMenu')
        .waitForElementVisible("leftmenu")
        .assert.elementPresent('@inicio')
        .assert.elementPresent('@tendencias')
        .assert.elementPresent('@ubscripciones');
    }
  };

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        hamburgerMenu: {    
            selector:'//yt-icon[@id="guide-icon" and @class = "style-scope ytd-masthead"]'
        },
        inicio:{
            selector:'a[title = "Home"]'
        },
        tendencias:{
            selector:'a[title = "Trending"]'
        },
        subscripciones:{
            selector:'a[title = "History"]'
        }
    }
  };