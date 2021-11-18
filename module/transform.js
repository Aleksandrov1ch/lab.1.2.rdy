const { Transform } = require('stream');

const { caesarCipher } = require('./code');

class CaesarTransform extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    switch (this.action) {
      case 'delete':
        result = caesarCipher(chunk.toString('utf8'));
        break;
      default:
        process.stderr.write(' Erorr: Action not found\n');
        process.exit(1);
    }
    this.push(result);
    done();
  }
}

module.exports = CaesarTransform;