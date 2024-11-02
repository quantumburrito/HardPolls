export async function getToggleState(): Promise<boolean> {
    const result = await chrome.storage.local.get("ToggleSwitch");
    var state: boolean = result.ToggleSwitch;
    if (state == null) {
        await chrome.storage.local.set({"ToggleSwitch": true});
        state = true
    }
    return state;
}

export async function setToggleState(state: boolean):Promise <void> {
    await chrome.storage.local.set({"ToggleSwitch": state});
}

