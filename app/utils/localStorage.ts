export function getLocalStorageItem(item: string) {
  return window.localStorage.getItem(item);
}

export function updateLocalStorageItem(item: string, value: string) {
  return window.localStorage.setItem(item, value);
}
