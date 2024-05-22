import { computed } from 'vue';

export function useVModel(props, propName, emit) {
  const model = computed({
    get() {
      const proxy = new Proxy(props[propName], {
        get(target, key) {
          return Reflect.get(target, key);
        },
        set(target, key, value) {
          console.log('set');
          emit('update:' + propName, {
            ...target,
            [key]: value,
          });
          return true;
        },
      });
      return proxy;
    },
    set(val) {
      console.log('set');
      emit('update:' + propName, val);
    },
  });
  return model;
}
