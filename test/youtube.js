module.exports = {
    //Step one does the first part or the test, verifies "acceder button"
    'Step one: Youtube Home Page': function(browser){
        //This part does the homePage instance to call the method
        var homePage = browser.page.homePage();
        //HomePage object now calls the signin method which has all the logic
        homePage.navigate()
        .signin();
    },
    'step two: Left Page' : function (browser) {
        //Page object instance (left menu page)
        var leftPage = browser.page.leftMenuPage();
        //call the command that has the logic fot this page 
        leftPage.leftElements();
        leftPage.expectMenu();
        leftPage.expectTrending();
        leftPage.expectSubscriptions();
  },
  'step three: Dot Square Menu' : function (browser) {
      //Dot Sqaure Menu page instance
        var dotMenu = browser.page.dotSquarePage();
        //Call method from the dot square menu page to do the logic 
        dotMenu.selectDotMenu();
        fotMenu.getMenuText();
  },'step four: Result Page' : function (browser) {
    var search = browser.page.resultPage();
        search.searchVideo();
        search.expectVideo();
        search.printViews();
        search.failAssert();
        search.takeScreenshot();
  }
};