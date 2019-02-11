const   fs              = require("fs"),
        path            = require("path").posix;

class Directory {

    constructor(dir = "./") {
        this.path = path.normalize(dir);
        this.structure = {};

        let files = fs.readdirSync(this.path);
        files.forEach(file => {
            if (fs.statSync(path.join(this.path, file)).isDirectory())
                this.addFolder(file);
            else {
                this.addFile(file);
            }
        });

        return this.structure;
    }

    addFolder(name) {
        this.structure[name] = new Directory(path.normalize(path.join(this.path, name)));
    }

    addFile(name) {
        if (name === "DEPENDENCIES" || name === "OWNERS") {
            this.structure[name] = new Set(this.readLineByLine(name));
        } else {
            this.structure[name] = "file";
        }
    }

    readLineByLine(name) {
        return fs.readFileSync(path.join(this.path, name), "utf8").trim().split(/\r?\n/);
    }
}

module.exports = Directory;