<template>
  <!-- <ContextMenu :relative="dom元素"></ContextMenu> -->

  <!-- <div>
    <ContextMenu></ContextMenu>
  </div> -->
  <div style="transform: ">
    <ContextMenu
      :menu="[
        { label: '添加' },
        { label: '编辑' },
        { label: '删除' },
        { label: '查看' },
        { label: '复制' },
      ]"
      @select="$event=>"
    >
      <div class="inner"></div>
    </ContextMenu>
  </div>
</template>
