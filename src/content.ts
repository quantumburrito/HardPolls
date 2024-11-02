// Source File that perform text replacement


function replaceText(node: Node): void {
    if(node.nodeType == Node.TEXT_NODE) {
        node.textContent = node.textContent?.replace(/\belection\b/gi, "erection") || '';
    }
}

function walkDOM(node: Node): void {
    let child: Node | null  = node.firstChild;
    while(child) {
        const next = child.nextSibling;
        replaceText(child);
        walkDOM(child);
        child = next;
    }
}

walkDOM(document.body);

// Observe Dynamic Content Loading
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => walkDOM(node));

    });
});

observer.observe(document.body, {childList: true, subtree: true});