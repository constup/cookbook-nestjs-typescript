import { NonInjectableClass } from './non-injectable-class';

describe('NonInjectableClass', () => {
    it('should be defined', () => {
        expect(new NonInjectableClass()).toBeDefined();
    });
});
