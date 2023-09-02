/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const buttonClick = require("../button");

// The following runs before the test is carried out
beforeEach(() => {
   document.body.innerHTML =  "<p id='par'></p>";
});

// This is the test
describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
});