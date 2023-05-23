# wdio-spotify-tests

## Introduction
This project is a test automation framework for testing the login and list creation functionalities of the Spotify website. The tests have been implemented using WebdriverIO, an all in one framework for your web app development. It enables you to run small and lightweight component tests as well as running e2e test scenarios in the browser.

## Aproach
This project contains two test scenarios:
 - `spotify-list.js`: This test scenario tests the creation and deletion of a list of songs in Spotify.
 - `spotify-login.cy.js`: This test scenario validates the login functionality of the Spotify website. It covers different test cases such as successful login, incorrect credentials, and password reset.

## Requirements

- [Node.js](https://nodejs.org/) V18  or higher.
- [Chrome](https://www.google.com/chrome/) V111  or higher.

## Setup
1 - Clone this repository to your local machine and navigate to the project directory.

2 - Run `npm init` to be initializing a new npm package.

3 - Run `npm install webdriverio` to install WebdriverIO dependency.

4 - Run `npm i @wdio/cli` to allow us to set up the WebdriverIO config file. 

## Test execution
Before running the tests, you must have a valid Spotify account. Replace the placeholders USERNAME and PASSWORD in the command line.

To run the tests use the following command:
```
export WDIO_user="USERNAME" && export WDIO_pass="PASSWORD" && npm run wdio
```


## Test Results
When you run the tests, you can see the Chrome browser executing the test scenarios just like a real user. The test results are displayed on the console, allowing you to step through each test case.
