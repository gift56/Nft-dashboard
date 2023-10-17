<template>
  <div class="flex flex-col w-full items-start justify-start gap-5">
    <h2
      class="text-2xl font-semibold font-quicksand text-[#6EE7B7] select-none"
    >
      🔥 Hot Bids
    </h2>
    <div
      class="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 monitor:grid-cols-6 gap-6"
    >
      <div
        v-for="bid in bidsData"
        :key="bid.artName"
        class="w-full flex flex-col gap-3 items-start justify-start"
      >
        <div class="flex flex-col items-start justify-start w-full">
          <div class="w-full flex items-center justify-between gap-4">
            <div
              class="bg-[#161A42] rounded-tl-lg rounded-tr-lg py-2 px-4 text-sm font-bold text-[#FAFAFB]"
            >
              {{ bid.countdown }}
            </div>
            <div class="flex items-center gap-1">
              <span class="text-sm font-medium text-[#FAFAFB]">{{
                bid.totalLike
              }}</span>
              <img src="../assets/icons/heartIcon.png" alt="heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bidsData } from "../utils/constant";

export default {
  name: "Bids",
  data() {
    return {
      bidsData,
    };
  },
};
</script>
