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
        // Arrange
        const testString: string = "Let's win this race";
        const expectedOutput: string = "Let's win this race";

        // Act
        const actualOutput: string = replaceTextContent(testString);

        // Assert
        expect(actualOutput).toBe(expectedOutput);
    })
    test('ensure a string with multiple instances of "election" are modified as expected', () => {
        //Arrange
        const testString: string = "Win Elections by Elections"
        const expectedOutput: string = "Win Erections by Erections"

        // Act
        const actualOutput: string = replaceTextContent(testString)

        // Assert
        expect(actualOutput).toBe(expectedOutput)
    })

})