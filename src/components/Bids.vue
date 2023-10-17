<template>
  <div class="flex flex-col w-full items-start justify-start gap-5">
    <h2
      class="text-2xl font-semibold font-quicksand text-[#6EE7B7] select-none"
    >
      🔥 Hot Bids
    </h2>
    <div
      class="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 monitor:grid-cols-6 gap-x-6 gap-y-10"
    >
      <div
        v-for="bid in bidsData"
        :key="bid.artName"
        class="w-full flex flex-col gap-3 items-start justify-start"
      >
        <div class="flex flex-col items-start justify-start w-full">
          <div class="w-full flex items-center justify-between gap-4">
            <div
              class="bg-[#161A42] rounded-tl-lg rounded-tr-lg py-2 w-[130px] text-center text-sm font-bold text-[#FAFAFB]"
            >
              <CountdownTimer :targetTime="bid.countdown" />
            </div>
            <div class="flex items-center gap-1">
              <span class="text-sm font-medium text-[#FAFAFB]">{{
                bid.totalLike
              }}</span>
              <img src="../assets/icons/heartIcon.png" alt="heart" />
            </div>
          </div>
          <img
            :src="bid.bidImage"
            :alt="bid.artName"
            class="w-full rounded-2xl aspect-square"
          />
        </div>
        <div class="w-full flex flex-col items-start justify-start gap-2">
          <h2 class="text-sm font-semibold text-[#FAFAFB]">
            {{ bid.artName }}
          </h2>
          <div class="w-full flex items-center justify-between">
            <h4
              class="text-sm font-bold bg-clip-text text-transparent bg-textBg2"
            >
              {{ bid.artPrice }}
            </h4>
            <div class="relative">
              <img
                :src="user"
                :alt="user"
                class="first:absolute last:absolute relative z-40 first:left-[-80%] last:right-[-50%] last:top-0 last:z-10"
                v-for="user in bid.bidUsers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bidsData } from "../utils/constant";
import CountdownTimer from "./CountdownTimer.vue";

export default {
    name: "Bids",
    data() {
        return {
            bidsData,
        };
    },
    components: { CountdownTimer }
};
</script>
