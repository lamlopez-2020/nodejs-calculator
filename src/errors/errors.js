export class InvalidInputError extends Error {
    constructor() {
        super('ENTRADA NO VÁLIDA');
    }
}

// error de operaciones infinitas
export class InvalidOperation extends Error {
    constructor() {
        super('OPERACIÓN NO VÁLIDA');
    }
}
