import {getToggleState, setToggleState} from "./toggleSwitch"

async function initializePopup(): Promise<void> {
    const toggleSwitch = document.getElementById("toggleSwitch") as HTMLInputElement;

    // Fetch the current state of the toggle switch
    const currentState = await getToggleState();
    toggleSwitch.checked = currentState;

    // Add an event listener to apply changes to toggle switch state
    toggleSwitch.addEventListener("change", async () => {
        await setToggleState(toggleSwitch.checked);

        // Notify content script to add or remove replacements
        chrome.runtime.sendMessage({action: "toggle"});
    })
}

// Initialize popu once DOM is fully loaded
document.addEventListener("DOMContentLoaded",() => {
    initializePopup().catch(console.error);
})