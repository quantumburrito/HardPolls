import { processPageContent } from '../src/content';
import { replaceTextContent } from '../src/textReplacer';

// Mock replaceTextContent
jest.mock('../src/textReplacer');

// Ensure replaceTextContent uses the mock
const mockReplaceTextContent = replaceTextContent as jest.MockedFunction<typeof replaceTextContent>;

describe('Content Script Text Replacement', () => {
    beforeEach(() => {
        document.body.innerHTML = ''; // Reset the DOM before each test
        mockReplaceTextContent.mockReset();
    });

    test('replaces text nodes using replaceTextContent', () => {
        // Arrange: Add sample text to the DOM
        document.body.innerHTML = '<p>The election results are out.</p>';
        mockReplaceTextContent.mockImplementation((text) => text.replace(/election/gi, 'erection'));

        // Act: Process the page content
        processPageContent();

        // Assert: Check that replaceTextContent was called and the DOM was updated
        expect(mockReplaceTextContent).toHaveBeenCalledWith('The election results are out.');
        expect(document.body.innerHTML).toBe('<p>The erection results are out.</p>');
    });

    test('observes and replaces dynamically added content', async () => {
        // Arrange: Set initial DOM content
        document.body.innerHTML = '<p>We elect a new leader.</p>';
        mockReplaceTextContent.mockImplementation((text) => {
            if (text.toLowerCase() === 'election day is near.') {
                return 'Erection day is near.';  // Preserve capitalization
            }
            return text.replace(/elect/gi, 'erect'); // For any other "elect"
        });
    
        // Act: Process the page and simulate new content being added
        processPageContent();
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Election day is near.';
        document.body.appendChild(newParagraph);
    
        // Wait for the observer to process the added node
        await new Promise(resolve => setTimeout(resolve, 0));
    
        // Assert: Verify that dynamically added content is also transformed
        expect(mockReplaceTextContent).toHaveBeenCalledWith('Election day is near.');
        expect(newParagraph.textContent).toBe('Erection day is near.');
    });
});