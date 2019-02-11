const Permissions                   = require("../../../src/com/validator/Permissions");

describe("Permissions", () => {

    it("should expect the script to exist", () => {
        expect(Permissions).toBeDefined();
    });

    describe("is a class that", function () {

        it("should treat an object like a folder", () => {
            expect(Permissions.isFolder({ })).toBeTruthy();
        });
    });
});