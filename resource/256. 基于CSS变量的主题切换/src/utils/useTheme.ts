import { ref, watchEffect } from 'vue';
type Theme = 'light' | 'dark';
const key = '__theme__';
const theme = ref<Theme>((localStorage.getItem(key) as Theme) || 'light');

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  localStorage.setItem(key, theme.value);
});

export function useTheme() {
  return {
    theme,
    toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    },
  };
}
