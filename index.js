const minimist          = require("minimist");

module.exports = () => {
    const args  = minimist(process.argv.slice(2));
    let   cmd   = "";

    if (args["approvers"] && args["changed-files"]) {
        cmd = "validate";
    } else {
        cmd = "error";
    }

    switch (cmd) {
        case "validate":
            console.log(require("./src/com/validator/Validate.js")(args));
            break;

        default:
            console.error("Error: Invalid command / arguments!");
            break;
    }
};