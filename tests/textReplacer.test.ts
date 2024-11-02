import { replaceTextContent } from  '../src/textReplacer';

describe('Text Replacement', () => {
    test('replaces "election" with "erection" regarless of case', () => {
        // Arrange
        const testString: string = "Let's win this ELecTion";
        const expectedOutput: string = "Let's win this Erection";
        
        //Act
        const actualOutput: string = replaceTextContent(testString);

        // Assert 
        expect(actualOutput).toBe(expectedOutput);
    })
    test('ensure string without instance of "election" is modified', () => {
        //Arrange
        const testStirng: string = "Let's win this race";
        const expectedOutput: string = "Let's win this race";

        // Act
        const actualOutput: string = replaceTextContent(testStirng);

        // Assert
        expect(actualOutput).toBe(expectedOutput);
    })

})