function createCountedItems(allItems: string[], uniqueItems: string[]) {
    return uniqueItems.reduce((acc, item) =>
        ({ ...acc, [item]: allItems.filter(i => i == item).length }), {});
}

export default createCountedItems;