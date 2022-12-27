export class SomeCustomError extends Error {
    public readonly code: number;
    public readonly debug: string;

    constructor(debugData: string) {
        super();

        this.code = 12345;
        this.debug = `Debug data: ${debugData}.`;

        Object.setPrototypeOf(this, SomeCustomError.prototype);
    }
}