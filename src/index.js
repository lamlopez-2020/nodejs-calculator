import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    try {
        // 1ª Create user input by console
        const userAnswer = await promptQuestion('Introduce la operación: ');
        console.log(userAnswer);

        // 2ª Console input validation

        const standarizeInput = userAnswer.trim();

        if (standarizeInput === '') throw new InvalidInputError();

        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no Controlado : ${error.message}. Stack: ${error.stack}`
            );
    }
})();
