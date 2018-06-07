/* Dev: Ibrahim Koray Aksoy - (https://kryaksy.github.io)
 * feedreader.js
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

/* All of tests within the $() function, since some of
 * these tests may require DOM elements.To ensure they
 * don't run until the DOM is ready.
 */
$(function() {

    /* TEST SUITE: RSS Feeds */
    describe('RSS Feeds', function() {

        /* To make sure that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* To ensure each feed has a URL defined
         * and that the URL is not empty.
         */
        it('has a defined URL', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined;
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* To ensure each feed has a name defined
         * and that the name is not empty.
         */
        it('has a defined name', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined;
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TEST SUITE: The Menu */
    describe('The menu', function() {
        var body = $('body'),
            menuIcon = $('.menu-icon-link');
        
        /* Test to ensure the menu element is hidden by default. 
         */
        it('is hidden by default', function() {
            expect(body[0].classList.contains('menu-hidden')).toBe(true);
        });

         /* Test to ensure the menu changes visibility when icon is clicked. 
          */
        it('changes visibility when icon is clicked', function() {
            menuIcon.click();
            expect(body[0].classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body[0].classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* TEST SUITE: Initial Entries */
    describe('Initial Entries', function() {

        /* Test to ensure there is at least a single .entry element 
         * within the .feed container, when the loadFeed function 
         * is called and completes its work, 
         */
        beforeEach(function (done) {
            loadFeed(0,done);
        });

        it('has at least one entry element', function() {
            expect($('.feed .entry').length).toBeDefined;
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* TEST SUITE: New Feed Selection */
    describe('New Feed Selection', function() {

        var oldContent,
            newContent,
            id = 1;


        beforeEach(function (done) {
            start = performance.now();
        /* Test to ensure that the content actually changes when 
         * a new feed is loaded by the loadFeed function.
         * Async Function Test
         */
            oldContent = $('.feed').children()[0].innerHTML;
            loadFeed(id,done);
        });

        afterEach(function () {
            id++;          
        });

        afterAll(function () {
            loadFeed(0);
        })

        it('changes to' + ' List 1' + ' from List 0', function() {
            newContent = $('.feed').children()[0].innerHTML;
            expect(newContent).toBeDefined;
            expect(oldContent).toBeDefined;
            expect(newContent).not.toBe(oldContent);
        });

        it('changes to' + ' List 2' + ' from List 1', function() {
            newContent = $('.feed').children()[0].innerHTML;
        /*  
         * Tries to load feed two times and expect the list
         * to change in both case
         */
            expect(newContent).toBeDefined;
            expect(oldContent).toBeDefined;
            expect(newContent).not.toBe(oldContent);
        });

        it('changes to' + ' List 3' + ' from List 2', function() {
            newContent = $('.feed').children()[0].innerHTML;
            expect(newContent).toBeDefined;
            expect(oldContent).toBeDefined;
            expect(newContent).not.toBe(oldContent);
        });

    });
}());
