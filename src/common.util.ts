export const hasItemsInList = <T>(list: T): list is T => {
    return Array.isArray(list) && list.length > 0;
}