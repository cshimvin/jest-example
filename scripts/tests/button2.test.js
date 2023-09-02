/**
 * @jest-environment jsdom
 */

 const { TestScheduler } = require("jest");
 const buttonClick = require("../button");
 
 // The following runs before the test is carried out
 beforeEach(() => {
    // file system command that allows you to open, read and write files
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.write(fileContents);
    document.close();
 });
 
 // This is the test
 describe("DOM tests", () => {
     test("expects p content to change", () => {
         buttonClick();
         expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () =>{
        expect(document.getElementsByTagName("h1").length).toBe(1);
     });
 });