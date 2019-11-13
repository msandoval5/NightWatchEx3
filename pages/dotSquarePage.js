var youtubeCommands = {
    submit: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        .click('@dotSquareMenu')
        .getText('@sections', function(result) {
            console.log('Text from the Dot square menu', result.value);
            });
    }
};

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        dotSquareMenu: {    
            selector:'button[aria-label="YouTube apps"]'
        },
        sections:{
            selector: '#sections'
        }
    }

  };