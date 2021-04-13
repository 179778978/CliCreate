#!/usr/bin/env node

//https://github.com/SBoudrias/Inquirer.js
const inquirer = require('inquirer')
//https://github.com/chalk/chalk
const chalk = require('chalk')
//https://github.com/sindresorhus/ora
const ora = require('ora')
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'confirm',
      message: 'Are you sure you want to?',
      name: 'ok',
    },
    {
      type: 'input',
      message: '你想要什么？',
      name: 'which',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.ok) {
      console.log(chalk.green('some thing ok'))
    } else {
      console.log(chalk.red('some thing not ok'))
    }
    if (answers.which) {
      console.log(chalk.green(answers.which))
    } else {
      console.log(chalk.red('some thing not ok'))
    }
    const spinner = ora('Loading unicorns').start()

    setTimeout(() => {
      spinner.color = 'yellow'
      spinner.text = 'Loading rainbows'
    }, 1000)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
