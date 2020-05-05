/**
 * @param storageItem the local storage item to retrieve and modify
 * @param storageItemProperty the property of that storage item object
 * @param newKeyData the new data to store in that property
 */
const persistToLocalStorage = (
    storageItem: string,
    storageItemProperty: string,
    newKeyData: any,
): void => {
    let storageItemData = JSON.parse(
        localStorage.getItem(storageItem)!,
    );

    const updatedStorageData = {
        ...storageItemData,
        [storageItemProperty]: newKeyData,
    };

    localStorage.setItem(
        storageItem,
        JSON.stringify(updatedStorageData),
    );
};

export default persistToLocalStorage;
