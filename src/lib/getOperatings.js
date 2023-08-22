/* eslint-disable no-unreachable */
import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getBinaryOperatings = ([leftSide, rightSide]) => {
    if (!leftSide || !rightSide) throw new InvalidInputError();

    const firstOperating = Number(leftSide.replaceAll(',', '.'));
    const secondOperating = Number(rightSide.replaceAll(',', '.'));

    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();
    if (isNaN(secondOperating) || !isFinite(secondOperating))
        throw new InvalidInputError();

    return [firstOperating, secondOperating];
};

export const getSingleOperating = ([leftSide, rightSide]) => {
    // Comprobamos que la parte izquierda no tenga valor
    // y la derecha sí lo tenga
    if (leftSide || !rightSide) throw new InvalidInputError();

    // Comprobamos que la parte derecha tenga al menos ()
    if (!rightSide.startsWith('(') && !rightSide.endsWith(')'))
        throw new InvalidInputError();

    // Extraemos el contenido de los paréntesis y validamos
    // que sea un número válido
    let firstOperating = rightSide.slice(1, -1);

    // Comprobamos el caracter vacío ya que al convertirlo sería un 0
    if (firstOperating === '') throw new InvalidInputError();

    firstOperating = Number(firstOperating.replaceAll(',', '.'));

    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();

    return [firstOperating];
};
