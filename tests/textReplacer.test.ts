import { replaceTextContent } from  '../src/textReplacer';

describe('Text Replacement', () => {
    test('replaces "election" with "erection" regarless of case', () => {
        // Arrange
        const testString: string = "Let's Win this ELecTion";
        const expectedOutput: string = "Let's win this Erection";
        
        //Act
        const actualOutput: string = replaceTextContent(testString);

        // Assert 
        expect(actualOutput).toBe(expectedOutput);
    })
})