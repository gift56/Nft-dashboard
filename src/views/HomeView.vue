<template>
  <main
    class="flex items-start justify-start w-full h-screen overflow-hidden gap-6 p-6"
  >
    <div class="flex-shrink">
      <LeftSideBar />
    </div>
    <div class="flex-grow flex flex-col items-start justify-start gap-8">
      <Navbar />
      <Popular />
      <Sellers />
    </div>
    <div class="flex-shrink">
      <RightSideBar />
    </div>
  </main>
</template>

<script>
import LeftSideBar from "../components/LeftSideBar.vue";
import Navbar from "../components/Navbar.vue";
import RightSideBar from "../components/RightSidebar.vue";
import Popular from "../components/Popular.vue";
import Sellers from "../components/Sellers.vue";

export default {
  components: {
    LeftSideBar,
    RightSideBar,
    Navbar,
    Popular,
    Sellers,
  },
};
</script>
