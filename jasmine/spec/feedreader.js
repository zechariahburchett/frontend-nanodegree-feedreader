/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //checks that allFeeds is defined
            expect(allFeeds.length).not.toBe(0); //checks that allFeeds is not empty
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url defined', function() {
           for(let feed of allFeeds){
             expect(feed.url).toBeDefined(); //checks that url is defined
             expect(feed.url).not.toBe(0); //checks that url is not empty
           }
         });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
           for(let feed of allFeeds){
             expect(feed.name).toBeDefined(); //checks that name is defined
             expect(feed.name).not.toBe(0); //checks that name is not empty
           }
         });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu hidden by default', function(){
           const body = document.querySelector('body');
           expect(body.classList.contains('menu-hidden')).toBe(true); //checking that menu-hidden is active by default
         });

         /*Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu toggles', function(){
            const body = document.querySelector('body');
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click(); //check if menu opens when clicked
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click(); //check if menu is hidden when clicked again
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });
    });

    /*Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         //before each must be ran for loadFeed for test to be done
        beforeEach(function(done){
          loadFeed(0, done);
        });
        it('feed has at least 1 entry', function(){
          const feed = document.querySelector('.feed'); //storing feed from dom
          expect(feed.children.length).toBeGreaterThan(0); //making sure there are 1 or more children of feed...a child of feed is an .entry element
        });
         });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
