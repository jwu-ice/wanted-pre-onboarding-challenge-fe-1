export const LocalStore = (() => {
  return {
    get(key: string) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    },
    set(key: string, value: unknown) {
      const newValue = JSON.stringify(value);
      localStorage.setItem(key, newValue);
    },
    remove(key: string) {
      localStorage.removeItem(key);
    },
    clear() {
      localStorage.clear();
    },
  };
})();

export const SessionStore = (() => {
  return {
    get(key: string) {
      const data = sessionStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    },
    set(key: string, value: unknown) {
      const newValue = JSON.stringify(value);
      sessionStorage.setItem(key, newValue);
    },
    remove(key: string) {
      sessionStorage.removeItem(key);
    },
    clear() {
      sessionStorage.clear();
    },
  };
})();
