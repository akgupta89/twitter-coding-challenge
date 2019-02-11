const   Directory       = require("./Directory"),
        Permissions     = require("./Permissions");

module.exports = (...args) => {
    const approvers               = args[0]["approvers"].split(","),
          changedFiles            = args[0]["changed-files"].split(","),
          folderStructure         = new Directory(),
          permissionsValidator    = new Permissions(folderStructure, changedFiles);

    return permissionsValidator.isValid(approvers)?"Approved":"Insufficient approvals";
};