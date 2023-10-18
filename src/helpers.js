const { readFileSync, writeFileSync } = require('fs');
const chalk = require('chalk');

function readJSONFile(path, fileName) {
  try {
    const collection = readFileSync(`${path}/${fileName}`, 'utf8');
    console.log(chalk.green(`Successfully read from ${fileName}`));
    return collection ? JSON.parse(collection) : [];
  } catch (error) {
    console.log(chalk.red(`Error reading from ${fileName}: ${error.message}`));
    return [];
  }
}

function writeJSONFile(path, fileName, data) {
  try {
    data = JSON.stringify(data);
    writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
    console.log(chalk.green(`Successfully wrote to ${fileName}`));
  } catch (error) {
    console.log(chalk.red(`Error writing to ${fileName}: ${error.message}`));
  }
}

module.exports = {
  readJSONFile,
  writeJSONFile
};