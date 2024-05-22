<template>
  <div class="container">
    <slot></slot>
    <Teleport to="body">
      <Transition>
        <div class="context-menu">
          <!-- 菜单项 -->
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
