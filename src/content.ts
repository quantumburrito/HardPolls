// src/content.ts

import { replaceTextContent } from './textReplacer';


// Function to recursively process all text nodes in the DOM
export function processPageContent() {
    // Helper function to process each text node
    const processTextNode = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
            node.textContent = replaceTextContent(node.textContent);
        }
    };

    // Walk through the DOM to find and replace text in text nodes
    const walkDOM = (node: Node) => {
        processTextNode(node);
        let child: Node | null = node.firstChild;
        while (child) {
            walkDOM(child);
            child = child.nextSibling;
        }
    };

    // Initial processing of the current page content
    walkDOM(document.body);

    // Observe for dynamic content changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => walkDOM(node));
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

processPageContent();