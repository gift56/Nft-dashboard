<template>
  <main
    class="flex items-start justify-start w-full h-screen overflow-hidden gap-6 p-6"
  >
    <div class="flex-shrink">
      <LeftSideBar />
    </div>
    <div class="flex-grow flex flex-col items-start justify-start gap-8">

    </div>
    <div class="flex-shrink">
      <RightSideBar />
    </div>
  </main>
</template>

<script>
import LeftSideBar from "../components/LeftSideBar.vue";
import RightSideBar from "../components/RightSidebar.vue";

export default {
  components: {
    LeftSideBar,
    RightSideBar,
  },
};
</script>
