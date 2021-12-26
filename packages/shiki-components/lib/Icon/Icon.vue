<script setup lang="ts">
import iconUrl from './icon.svg';
</script>

<template>
  <i><img :src="iconUrl" />生日快乐</i>
</template>

<style scoped lang="less">
img {
  position: relative;
  left: -80px;
  filter: drop-shadow(80px 0 var(--color));

  width: 24px;
  height: 24px;

  user-select: none;
  vertical-align: text-top;
}

i {
  --color: tomato;
  line-height: 24px;
  vertical-align: text-top;
  color: var(--color);

  &:hover {
    --color: royalblue;
  }
}
</style>
