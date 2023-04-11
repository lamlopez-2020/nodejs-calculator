import { promptQuestion } from '#Lib/promptQuestion.js';
import { BYNARY_OPERATORS } from '#Constants/operators.js';
import { getOperator } from '#Lib/getOperator.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { InvalidOperation } from '#Errors/invalidOperation.js';
import { getBinaryOperating, getSingleOperating } from '#Lib/getOperatings.js';
import { OPERATIONS } from '#Constants/operations.js';

(async () => {
    try {
        // 1ª Create user input by console
        const userAnswer = await promptQuestion('Introduce la operación: ');

        // 2ª Console input validation and separate the parts of them into operands and operator

        const standarizeInput = userAnswer.trim();

        if (!standarizeInput) throw new InvalidInputError();

        const operator = getOperator(standarizeInput);

        const splittedInput = standarizeInput.split(operator);

        let firstOperating, secondOperating;

        if (BYNARY_OPERATORS.includes(operator))
            [firstOperating, secondOperating] =
                getBinaryOperating(splittedInput);
        else [firstOperating] = getSingleOperating(splittedInput);

        // 3ª Perform the operation

        const result = OPERATIONS[operator](firstOperating, secondOperating);

        const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

        if (isNaN(roundedResult) || !isFinite(roundedResult))
            throw new InvalidOperation();
        else console.log(roundedResult);
    } catch (error) {
        if (
            error instanceof InvalidInputError ||
            error instanceof InvalidOperation
        )
            console.log(error.message);
        else
            console.log(
                `Error no Controlado : ${error.message}. Stack: ${error.stack}`
            );
    }
})();
