var youtubeCommands = {
    submit: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        .click('@hamburgerMenu')
        .waitForElementVisible("leftmenu")
        .assert.elementPresent('@acceder')
    }
  };

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        hamburgerMenu: {    
            selector:'//yt-icon[@id="guide-icon" and @class = "style-scope ytd-masthead"]'
        },
        acceder:{
            selector:'//ytd-button-renderer[@class="style-scope ytd-masthead style-suggestive size-small"]//a[contains(@href,"ServiceLogin") and @class = "yt-simple-endpoint style-scope ytd-button-renderer"]'
        }
    }

  };