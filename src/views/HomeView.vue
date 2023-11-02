<template>
  <main
    class="flex items-start justify-start w-full h-screen overflow-hidden p-6 gap-6 relative"
  >
    <div class="flex-shrink">
      <LeftSideBar />
    </div>
    <div
      class="flex-grow flex flex-col items-start justify-start gap-8 h-screen overflow-x-hidden hover:overflow-y-auto pb-20 scrollbar-hide"
    >
      <Navbar />
      <Popular />
      <Sellers />
      <Bids />
    </div>
    <div class="hidden xl:block xl:flex-shrink">
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
import Bids from "../components/Bids.vue";

export default {
  name: "HomeView",
  components: {
    LeftSideBar,
    RightSideBar,
    Navbar,
    Popular,
    Sellers,
    Bids,
  },
};
</script>
