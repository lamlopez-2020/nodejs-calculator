import { promptQuestion } from '#Lib/promptQuestion.js';
import { InvalidInputError, InvalidOperation } from '#Errors/errors.js';
import { OPERATIONS } from '#Constants/operations.js';
import { extractByredex } from '#Lib/extractByRedex.js';

export const bootstrap = async () => {
    try {
        // 1ª Create user input by console
        const userAnswer = await promptQuestion('Introduce la operación: ');

        // 2ª Console input validation and separate the parts of them into operands and operator

        const standarizeInput = userAnswer.trim().replaceAll(',', '.');

        if (!standarizeInput) throw new InvalidInputError();

        if (standarizeInput === 'exit') return true;

        const [firstOperating, operator, secondOperating] =
            extractByredex(standarizeInput);

        // 3ª Perform the operation
        const result = OPERATIONS[operator](firstOperating, secondOperating);

        const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

        if (isNaN(roundedResult) || !isFinite(roundedResult))
            throw new InvalidOperation();
        else console.log(`El resultado es: ${roundedResult}\n`);
    } catch (error) {
        if (
            error instanceof InvalidInputError ||
            error instanceof InvalidOperation
        )
            console.log(`${error.message}\n`);
        else
            console.log(
                `Error no Controlado : ${error.message}. Stack: ${error.stack}\n`
            );
    }
};
