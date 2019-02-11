const exec                    = require("child_process").execSync;

describe("validate_approvals", () => {

    it("should pass the first test case", () => {
        expect(exec("validate_approvals --approvers alovelace,ghopper --changed-files src/com/twitter/follow/Follow.java,src/com/twitter/user/User.java").toString().trim()).toBe("Approved");
    });

    it("should pass the second test case", () => {
        expect(exec("validate_approvals --approvers alovelace --changed-files src/com/twitter/follow/Follow.java").toString().trim()).toBeTruthy("Insufficient approvals");
    });

    it("should pass the third test case", () => {
        expect(exec("validate_approvals --approvers eclarke --changed-files src/com/twitter/follow/Follow.java").toString().trim()).toBeTruthy("Insufficient approvals");
    });

    it("should pass the fourth test case", () => {
        expect(exec("validate_approvals --approvers alovelace,eclarke --changed-files src/com/twitter/follow/Follow.java").toString().trim()).toBeTruthy("Approved");
    });

    it("should pass the fifth test case", () => {
        expect(exec("validate_approvals --approvers mfox --changed-files src/com/twitter/tweet/Tweet.java").toString().trim()).toBeTruthy("Approved");
    });
});
