var youtubeCommands = {
    selectDotMenu: function() {
      this.api.pause(1000);
      //Waits for the body element to be present 
      return this.waitForElementVisible('body', 1000)
      //Clicks on the Dot Square Menu
        .click('@dotSquareMenu');
    },
    getMenuText: function(){
        this.api.pause(1000);
        //Waits for the body element to be present 
        return this.waitForElementVisible('body', 1000)
        //Gets the text present on the element and prints it
        .getText('@sections', function(result) {
        console.log('Text from the Dot square menu', result.value);
        });
    }
};

module.exports = {
    commands: [youtubeCommands],
    url: 'https://youtube.com',
    elements: {
        //Menu Selector
        dotSquareMenu: {    
            selector:'button[aria-label="YouTube apps"]'
        },
        //Sections Menu selector
        sections:{
            selector: '#sections'
        }
    }

  };