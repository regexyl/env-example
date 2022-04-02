#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

fs.readFile(path.join(process.cwd(), '.env'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data)

  const output: string[] = [];

  const lines = data.split('\n');
  lines.forEach((line, index) => {
    if (checkIfCommentOrEmptyLine(line)) {
      output.push(line);
      return;
    }

    const equalsIndex = checkIfValidEnvLine(line);
    if (equalsIndex === -1) {
      throw new Error(
        `Line ${index} does not have a valid config (i.e. no equals sign).`
      );
    }
    output.push(line.split('=')[0] + '=');
  });
  console.log(output)

  fs.writeFileSync(
    path.join(process.cwd(), '.env.example'),
    output.join('\n'),
    { flag: 'w+' }
  );

  console.log('✨ .env.example successfully generated.');
  process.exit();
});

// Utility Functions

function checkIfCommentOrEmptyLine(line: string): boolean {
  return line === '' || line.startsWith('#');
}

/**
 * Checks if an instance of a line in `.env` is a valid config.
 * @param  {string} line An instance of a `.env` line.
 * @returns number The index of the `=` symbol if found. If not found, -1 is
 * returned.
 */
function checkIfValidEnvLine(line: string): number {
  return line.indexOf('=');
}
