<script setup>
import LeftSideBar from "../components/LeftSideBar.vue";
</script>

<template>
  <main
    class="flex items-start justify-start w-full h-screen overflow-hidden gap-6 p-6"
  >
    <div class="flex-shrink">
      <LeftSideBar />
    </div>
    <div class="flex-grow">djdj</div>
    <div class="flex-shrink"></div>
  </main>
</template>
