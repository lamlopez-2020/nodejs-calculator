export class InvalidInputError extends Error {
    constructor() {
        super('ENTRADA NO VÁLIDA');
    }
}

export class InvalidOperation extends Error {
    constructor() {
        super('OPERACIÓN NO VÁLIDA');
    }
}
