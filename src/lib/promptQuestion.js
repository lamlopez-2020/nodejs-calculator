import readline from 'readline';
import { promisify } from 'util';

const consoleInterfase = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const promptQuestion = promisify(consoleInterfase.question).bind(
    consoleInterfase
);
