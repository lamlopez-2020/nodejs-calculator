import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    // 1ª Capturar la entrada del usuario por consola
    const userAnswer = await promptQuestion('Introduzca la operación ');
    console.log(userAnswer);
})();
