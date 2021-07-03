export default function useStorage() {
  function setLocalStorage(key: string, data: Object) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function setCookie(name: string, data: Object, days: number) {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    document.cookie = `${name} = ${
      JSON.stringify(data) || ''
    } ${expires}; path=/`;
  }

  return { setLocalStorage, setCookie };
}
