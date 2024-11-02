import { replaceTextContent } from '../src/textReplacer';

describe('Text Replacement - Common Real-World Scenarios', () => {
    test.each([
        ["The election results are in.", "The erection results are in."],  // Standard lowercase
        ["Election day is here!", "Erection day is here!"],  // Capitalized "Election"
        ["We elect a new leader.", "We erect a new leader."],  // Standard lowercase "elect"
        ["Elect me for the next election!", "Erect me for the next erection!"],  // Mixed "elect" and "election"
        ["ELECTION and ELECT both happen today.", "ERECTION and ERECT both happen today."],  // All uppercase
        ["Let's win the election and re-elect him.", "Let's win the erection and re-erect him."],  // Multiple occurrences and partial word match check
        ["This text has nothing to replace.", "This text has nothing to replace."]  // No replacement
    ])('transforms "%s" to "%s"', (input, expectedOutput) => {
        const actualOutput = replaceTextContent(input);
        expect(actualOutput).toBe(expectedOutput);
    });
});