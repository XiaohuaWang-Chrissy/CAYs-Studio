function createLang() {
  let current = $state('en');
  return {
    get current() { return current; },
    toggle() { current = current === 'en' ? 'zh' : 'en'; }
  };
}

export const lang = createLang();
