#!/usr/bin/env node

const fs = require('fs');
const stream = require('stream');
const util = require('util');
const chalk = require('chalk');
const program = require('commander');

const valid = require('./module/valid');
const CaesarTransform = require('./module/transform');

const pipeline = util.promisify(stream.pipeline);

const actions = async _ => {
    const {input, output, action } = program.opts();
    valid.isEmpty(input) && process.stdout.write('Enter the text and press ENTER to encode/decode | press CTRL + C to exit: ')

    const ReadableStream = !valid.isEmpty(input) ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = !valid.isEmpty(output) ? fs.createWriteStream((output), { flags: 'a' }) : process.stdout;

    try {
      await pipeline(
        ReadableStream,
        new CaesarTransform(action),
        WriteableStream
      );
      process.stdout.write(`Text ${action}d\n`);
    } catch (e) {
      process.stderr.write(` ${e.message}\n`);
      process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log(chalk.yellow.bold('Code: ') + code));
process.on('SIGINT', _ => { process.exit(0); });

program
  .requiredOption('-a --action <action>', 'An action encode/decode')
  .option('-i, --input <filename>', 'An input file')
  .option('-o --output <filename>', 'An output file')
  .action(actions)

program.parse(process.argv);