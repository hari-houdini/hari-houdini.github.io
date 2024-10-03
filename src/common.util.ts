export const hasItemsInList = <T>(list: T): list is T => {
    return Array.isArray(list) && list.length > 0;
}

export const getIdFromUrl = (url: string, fallBackString?: string) => {
    const idRegex = /people\/(\d+)\//;
    const match = url.match(idRegex)
    return match?.[1] ?? fallBackString;
}