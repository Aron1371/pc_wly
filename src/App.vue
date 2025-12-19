<template>
  <RouterView />
</template>
<script setup>
import { reactive, watch, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import config from "./config";

const state = reactive({
  isChannel: false,
});

// 导航菜单展开状态
const isNavOpen = ref(false);

// 关于我们下拉菜单展开状态
const isAboutDropdownOpen = ref(false);

// 切换导航菜单
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

// 关闭导航菜单
const closeNav = () => {
  isNavOpen.value = false;
};

// 切换关于我们下拉菜单
const toggleAboutDropdown = (event) => {
  // 在移动端，阻止默认的链接跳转行为
  if (window.innerWidth <= 767) {
    event.preventDefault();
    isAboutDropdownOpen.value = !isAboutDropdownOpen.value;
  }
};

// 关闭关于我们下拉菜单
const closeAboutDropdown = () => {
  isAboutDropdownOpen.value = false;
};

const route = useRoute();
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath == "/channel") {
      state.isChannel = true;
    } else {
      state.isChannel = false;
    }
  }
);

onMounted(() => {
  document.title = config.TITLE;
});
</script>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>
