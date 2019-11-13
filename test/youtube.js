module.exports = {
    'Step one: navigate to LinkedIn': function(browser){
        browser
        .url('https://www.linkedin.com/')
        .pause(10000);
    },
    'step one: navigate to google' : function (browser) {
    browser
      .url('https://www.google.com')
      //.waitForElementVisible('body', 1000)
      .pause(1000)
      .setValue('input[type=text]', 'nightwatch')
      
      //.waitForElementVisible('input[name=btnK]', 1000)
  }
}