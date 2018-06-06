# Feed Reader Testing

In this project we are given a web-based application that reads RSS feeds. The case is writing test suites according to given expectations.

## Expectations
1. Return the `allFeeds` variable to a passing state.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
4. Write a new test suite named `"The menu"`.
5. Write a test that ensures the menu element is hidden by default. 
7. Write a test suite named `"Initial Entries"`.
8. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
9. Write a test suite named `"New Feed Selection"`.
10. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
11. Implement error handling for undefined variables and out-of-bound array access.

## How to Run

1. Clone this [repo](https://github.com/kryaksy/frontend-nanodegree-feedreader.git),
2. Open index.html by your browser.

## Tech Used

- HTML/CSS
- Javascript
- jQuery
- [Jasmine](http://jasmine.github.io/)
- Sublime Text Editor 3
- Ajax

## Credits
- [Async tests – why the second done() call?](https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751)
- [How to test event listeners?](https://discussions.udacity.com/t/help-how-to-test-event-listeners/785384/2)