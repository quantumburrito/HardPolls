// src/textReplacer.ts

//Export th function with the correct type signature
export function replaceTextContent(text: string): string {
    return text.replace(/election/ig, "Erection") // replace (case incensitive) "Election" with "Erection"
}