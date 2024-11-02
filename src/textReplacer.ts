// src/textReplacer.ts

export function replaceTextContent(text: string, active: boolean): string {
    if(active) {
        // Replace all instances of "election" with "erection" (case-insensitive, global)
        text = text.replace(/\belection\b/gi, (match) => {
            if (match === match.toUpperCase()) return "ERECTION"; // Fully uppercase
            return match[0] === match[0].toUpperCase() ? "Erection" : "erection"; // Capitalized or lowercase
        });

        // Replace all instances of "elect" with "erect" (case-insensitive, global)
        text = text.replace(/\belect\b/gi, (match) => {
            if (match === match.toUpperCase()) return "ERECT"; // Fully uppercase
            return match[0] === match[0].toUpperCase() ? "Erect" : "erect"; // Capitalized or lowercase
        });

    } else {
        // Replace all instances of "erection" with "election" (case-insensitive, global)
        text = text.replace(/\belection\b/gi, (match) => {
            if (match === match.toUpperCase()) return "ELECTION"; // Fully uppercase
            return match[0] === match[0].toUpperCase() ? "Election" : "election"; // Capitalized or lowercase
        });

        // Replace all instances of "erect" with "elect" (case-insensitive, global)
        text = text.replace(/\belect\b/gi, (match) => {
            if (match === match.toUpperCase()) return "ELECT"; // Fully uppercase
            return match[0] === match[0].toUpperCase() ? "Elect" : "elect"; // Capitalized or lowercase
        });
    }
    return text;
}