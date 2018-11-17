/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* First test suite*/
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined and is not empty', function () {
            allFeeds.forEach(function (Obj) {
                expect(Obj.url).toBeDefined();
                expect(Obj.url.length).not.toBe(0);
            })
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined and is not empty', function () {
            allFeeds.forEach(function (Obj) {
                expect(Obj.name).toBeDefined();
                expect(Obj.name.length).not.toBe(0);
            })
        });

    });


    /* New test suite named "The menu" */
    describe('The Menu', function () {

        /*This ensures the menu element is hidden by default.*/
        it('menu is hidden by default', function () {
            let menuHidden = document.body.classList.contains('menu-hidden');
            expect(menuHidden).toBe(true);
        });
        /* This test  ensures the menu changes visibility when the menu icon is clicked and  it hides when clicked again.*/
        it('menu is visible when clicked and hides when clicked gain', function () {

            let menuIcon = document.querySelector('.icon-list');
            menuIcon.click();
            let menuHidden = document.body.classList.contains('menu-hidden');
            expect(menuHidden).toBe(false);

            menuIcon.click();
            menuHidden = document.body.classList.contains('menu-hidden');
            expect(menuHidden).toBe(true);

        });

    })


    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* This test ensures that ,when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container*/
        beforeEach(function (done) {
            loadFeed(1, done)
        })
        it('There must be at least one element in the feed container', function () {
            let feed = document.querySelector('.feed');
            let entry = feed.querySelectorAll('article.entry')
            expect(entry.length).not.toBe(0);
        });


    })

    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* New test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let feed1, feed2
        beforeEach(function (done) {
            loadFeed(0, function () {
                feed1 = document.querySelector('.feed').innerHTML;
                done();
            })
            loadFeed(2, function () {
                feed2 = document.querySelector('.feed').innerHTML;
                done();
            })

        })


        it('New feed is loaded with new content', function () {
            expect(feed1).not.toBe(feed2);
        });

    })




}());
function newFunction(element) {
    console.log(element);
}

