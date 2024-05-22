import { onMounted, ref } from "vue"

export function useContextMenu(container){
  const x = ref(0)
  const y = ref(0)
  const visible = ref(false)
  function showMenu(e){
    e.preventDefault()
    e.stopPropagation()
    x.value = e.clientX
    y.value = e.clientY
    visible.value = true
  }
  function closeMenu(){
    visible.value = false
  }
  onMounted(()=>{
    container.addEventListener('contextmenu', showMenu)
    window.addEventListener('click',closeMenu, true);
    window.addEventListener('contextmenu',closeMenu, true);
  })
  onUnmounted(()=>{
    container.removeEventListener('contextmenu', showMenu)
  });
  return {
    x:?
    y:?
    visible: ?
  }
}