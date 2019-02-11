const   path            = require("path").posix;

class Permissions {

    constructor(folderStructure, changedFiles) {

        this.owners         = [];

        changedFiles.forEach(file => {
            this.getOwners(folderStructure, new Set(), path.parse(file));
        });
    }

    getOwners(folderStructure, ownersSet, filePath, currentPath = "") {

        let ownersClone        = new Set(ownersSet);

        if (folderStructure.OWNERS) {
            folderStructure.OWNERS.forEach(owner => {
               ownersClone.add(owner);
            });
        }

        // if the filePath equals the modified directory or there is a DEPENDENCIES file that has the filePath, add the owners
        if (filePath.dir === currentPath || Permissions.isDependent(folderStructure, filePath)) {
            this.owners.push(ownersClone);
        }

        // recursively branch through the file structure, passing the parents owners to children directories
        Object.keys(folderStructure).forEach(object => {
            if (Permissions.isFolder(folderStructure[object])) {
                this.getOwners(folderStructure[object], ownersClone, filePath, currentPath + "/" + object);
            }
        })
    }

    isValid(approvers) {

        for (let owner of this.owners) {
            let valid = false;
            for (let approver of approvers) {
                if (owner.has(approver)) valid = true;
            }
            if (!valid) return false;
        }

        return true;
    }

    static isFolder(obj) {
        return obj === Object(obj) && obj.constructor === Object;
    }

    static isDependent(folderStructure, filePath) {
        return folderStructure.DEPENDENCIES && folderStructure.DEPENDENCIES.has(filePath.dir);
    }
}

module.exports = Permissions;