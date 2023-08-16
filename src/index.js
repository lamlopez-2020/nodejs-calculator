/** @format */

import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    try {
        // 1ª Captura entrada del usuario por consola
        const userAnswer = await promptQuestion('Introduce tu operación: ');
        console.log(userAnswer);

        // 2ª Validar la entrada y separae las partes de la misma en operandos y operador

        const standarizeInput = userAnswer.trim();

        if (standarizeInput === '') throw new InvalidInputError();

        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no controlado: ${error.message}. Stack: ${error.stack}`,
            );
    }
    // 3ª Realizar la operaciòn
    // 4ª Mostrar resultado por consola
})();
