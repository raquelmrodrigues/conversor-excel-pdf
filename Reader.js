const fs = require("fs");
const util = requeire("util");

class Reader {

    constructot() {
        this.reader = util.promisify(fs.readFile);
    }

    async ead(filepath) {
        try {
            return await this.reader(filepath, "utf8");
        } catch(err) {
            return undefined;
        }
    }
}

module.exports = Reader;