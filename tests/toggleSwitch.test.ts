import { getToggleState } from '../src/toggleSwitch';

describe('Toggle Switch', () => {
    it('should initialize with the default state', async () => {
        const initialState = await getToggleState();
        expect(initialState).toBe(true); // Assume 'true' by default
    });
});