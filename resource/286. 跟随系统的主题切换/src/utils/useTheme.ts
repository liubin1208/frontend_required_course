import { ref, watchEffect } from 'vue';
type Theme = 'light' | 'dark' | 'OS';
const LOCAL_KEY = '__theme__';
const theme = ref<Theme>((localStorage.getItem(LOCAL_KEY) as Theme) || 'light');

const match = matchMedia('(prefers-color-scheme: dark)');
function followOS() {
  document.documentElement.dataset.theme = match.matches ? 'dark' : 'light';
}

watchEffect(() => {
  localStorage.setItem(LOCAL_KEY, theme.value);
  if (theme.value === 'OS') {
    // 特殊处理： 要么是light，要么是dark
    followOS();
    match.addEventListener('change', followOS);
  } else {
    document.documentElement.dataset.theme = theme.value;
    match.removeEventListener('change', followOS);
  }
});

export default function useTheme() {
  return {
    theme,
  };
}
