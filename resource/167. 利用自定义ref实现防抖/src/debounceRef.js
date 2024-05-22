import { customRef } from 'vue';

export function debounceRef(value, duration = 1000) {
  let timer;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(val) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          trigger();
          value = val;
        }, duration);
      },
    };
  });
}
