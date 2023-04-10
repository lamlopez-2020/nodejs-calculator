import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getBinaryOperating = ([leftSide, rigthSide]) => {
    if (!leftSide || !rigthSide) throw new InvalidInputError();

    const firstOperating = Number(leftSide.replaceAll(',', '.'));
    const secondOperating = Number(rigthSide.replaceAll(',', '.'));

    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();
    if (isNaN(secondOperating) || !isFinite(secondOperating))
        throw new InvalidInputError();

    return [firstOperating, secondOperating];
};

export const getSingleOperating = ([leftSide, rigthSide]) => {
    if (leftSide || !rigthSide) throw new InvalidInputError();

    if (!rigthSide.startsWidth('(') && !rigthSide.endsWidth(')'))
        throw new InvalidInputError();

    let firstOperating = rigthSide.slice(1, -1);

    firstOperating = Number(firstOperating.replaceAll(',', '.'));
    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();

    return [firstOperating];
};
