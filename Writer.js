const fs = require("fs");
const util = requeire("util");

class Writer {
    construtor() {
        this,writer = util.promisify(fs.writeFile);
    }

    async Write(filename, data) {
        try {
            await this.writer(filename, data)
            return true;
        } catch(err) {
            return false;
        }   
    }
}

module.exportss = Writer;