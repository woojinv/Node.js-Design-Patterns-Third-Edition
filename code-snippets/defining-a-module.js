// Load another dependency
const dependency = require('./anotherModule');

// a private function
function log() {
    console.log(`Well done ${dependency.username}`);
}

module.exports.run = () => {
    log();
};
