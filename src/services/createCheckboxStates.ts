function createCheckboxStates(items: string[]): { [key: string]: boolean } {
    return items.reduce((acc, item) => ({ ...acc, [item]: false }), {});
}

export default createCheckboxStates;