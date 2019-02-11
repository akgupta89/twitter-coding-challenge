const Directory                 = require("../../../src/com/validator/Directory"),
      directory                 = new Directory();


describe("Directory", () => {

    it("should expect the script to exist", () => {
        expect(Directory).toBeDefined();
    });

    describe("is a object data structure and", function () {

        it("should be an object", () => {
            expect(directory.constructor === Object).toBeTruthy();
        });

        it("should have content in the data structure", () => {
            expect(Object.keys(directory).length).toBeGreaterThan(0);
        });
    });
});