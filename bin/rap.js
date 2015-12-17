#!/usr/bin/env node

const fs = require('fs');
const meow = require('meow');

const write = fs.writeFileSync;
const cwd = process.cwd();
const capitalize = str => str[0].toUpperCase() + str.slice(1);

const usage = `
    Usage
      $ rap -c <name>

    Options
      -c, --component  Add as component
      -h, --help  Show help

    Examples
      $ rap -c unicorn
      $ rap -h
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

const component = `app/components/${Name}`;
const path = `${cwd}/${component}.js`;

write(path, template);

console.log(`Created ${component} component`);
