import { INVALID_INPUT } from '#Constants/messages.js';
import { OPERATORS } from '#Constants/operators.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    // 1ª Create user input by console
    const userAnswer = await promptQuestion('Introduce la operación: ');
    console.log(userAnswer);

    // 2ª Console input validation

    const standarizeInput = userAnswer.trim();

    if (standarizeInput === '') {
        console.log(INVALID_INPUT);
        return;
    }

    let operator;

    for (const allowedOperator of OPERATORS) {
        if (standarizeInput.includes(allowedOperator)) {
            if (
                operator ||
                standarizeInput.indexOf(allowedOperator) !==
                    standarizeInput.lastIndexOf(allowedOperator)
            )
                console.log(INVALID_INPUT);

            operator = allowedOperator;
        }
    }

    if (!operator) console.log(INVALID_INPUT);
})();
