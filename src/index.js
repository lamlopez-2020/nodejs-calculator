/** @format */

import { operations } from '#Constants/operations.js';
import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getBinaryOperatings, getSingleOperating } from '#Lib/getOperatings.js';

import { getOperator } from '#Lib/getOperator.js';
import { userAnswer } from '#Lib/userAnswer.js';

(async () => {
    try {
        // 1ª Obtener la entrada del usuario por consola

        console.log(userAnswer);

        // 2ª Obtener la entrada de usuario

        const standarizeInput = userAnswer.trim();

        if (!standarizeInput) throw new InvalidInputError();

        // 3ª Separar operandos
        const operator = getOperator(standarizeInput);

        const splittedInput = standarizeInput.split(operator);

        let firstOperating, secondOperating;

        if (BINARY_OPERATORS.includes(operator))
            [firstOperating, secondOperating] =
                getBinaryOperatings(splittedInput);
        else [firstOperating] = getSingleOperating(splittedInput);

        // 3º Realizar la operación
        const result = operations[operator](firstOperating, secondOperating);

        console.log(firstOperating, operator, secondOperating, result);
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no esperado: ${error.message}. Stack: ${error.stack}`,
            );
    }

    // 4ª Mostrar resultado por consola
})();
