import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const consoleInterface = createInterface({ input, output });

// Invocando el método readline.createInterfase en modo promesa, async-await

export const userAnswer = await consoleInterface.question(
    'Introduce tu operación: ',
);
