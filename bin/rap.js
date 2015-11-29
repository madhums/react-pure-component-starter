#!/usr/bin/env node

'use strict';

const fs = require('fs');
const meow = require('meow');

const write = fs.writeFileSync;
const mkdir = fs.mkdirSync;
const cwd = process.cwd();
const capitalize = str => str[0].toUpperCase() + str.slice(1);

const usage = `
    Usage
      $ zap -c <name>

    Options
      -c, --component  Add as component
      -h, --help  Show help

    Examples
      $ zap -c unicorn
      $ zap -h
`;

const cli = meow(usage, {
  alias: {
    c: 'component',
    h: 'help'
  }
});

const needHelp = cli.flags.help ||
  !cli.flags.component ||
  typeof cli.flags.component === 'boolean';

if (needHelp) cli.showHelp();

const name = cli.flags.component;
const Name = capitalize(name);

const template = `
import React, { Component } from 'react';

class ${Name} extends Component {
  render () {
    return (
      <div className="${name}">
        {/* ${name} */}
      </div>
    );
  }
}

export default ${Name};
`;

const path = `${cwd}/app/components/${Name}`;

mkdir(path);
write(path + '/index.js', template);
write(path + '/index.css', `
/* ${Name} styles */

.${name} {

}
`);

console.log(`Created ${path} component`);
