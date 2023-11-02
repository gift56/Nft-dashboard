<template>
  <div class="flex flex-col w-full items-start justify-start gap-5">
    <div class="w-full flex items-center justify-between gap-4">
      <h2 class="text-3xl font-bold font-quicksand text-[#E2E4E9]">
        Popular NFT’s Live Auction
      </h2>
      <div class="flex items-center justify-end gap-2 cursor-pointer">
        <span class="text-sm font-bold text-[#5EEAD4] font-quicksand"
          >Show More</span
        >
        <img src="../assets/icons/rightArrowIcon.png" alt="rightArrow" />
      </div>
    </div>
    <div class="w-full flex flex-col xl:flex-row items-center justify-between gap-4">
      <div class="flex-1 relative h-[280px]">
        <img
          src="@/assets/image/nftImage1.png"
          alt="nft1"
          class="h-full rounded-3xl"
        />
        <div
          class="w-full h-full absolute inset-0 rounded-3xl flex items-end p-4 justify-start"
        >
          <div
            class="w-[307px] p-4 flex items-center justify-center flex-col gap-5 bg-[#00000066] border border-[#60A5FA] rounded-xl"
          >
            <div class="w-full flex items-start justify-between gap-5">
              <div class="flex flex-col items-center justify-center gap-2">
                <div class="flex items-center justify-start gap-1">
                  <img
                    src="@/assets/icons/hourglassIcon.png"
                    alt="timing"
                    class="w-6 h-6 object-contain"
                  />
                  <h4 class="text-lg font-semibold font-quicksand">
                    <CountdownTimer targetTime="2023-10-17T23:59:59" />
                  </h4>
                </div>
                <p class="text-xs font-semibold font-quicksand">
                  Time Remaining
                </p>
              </div>
              <div class="flex flex-col items-start justify-center gap-2">
                <h4 class="text-lg font-semibold font-quicksand">17.53 ETH</h4>
                <p class="text-xs font-semibold font-quicksand">Highest Bid</p>
              </div>
            </div>
            <button
              disabled
              class="w-full disabled:bg-[#161a42b3] disabled:cursor-not-allowed border-2 border-[#06B6D4] rounded-xl py-2 px-4 outline-none text-sm font-bold font-quicksand"
            >
              Place A Bid
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 relative h-[280px]">
        <img
          src="@/assets/image/nftImage2.png"
          alt="nft2"
          class="h-full rounded-3xl"
        />
        <div
          class="w-full h-full absolute inset-0 rounded-3xl flex items-end p-4 justify-start"
        >
          <div
            class="w-[307px] p-4 flex items-center justify-center flex-col gap-5 bg-[#00000066] border border-[#60A5FA] rounded-xl"
          >
            <div class="w-full flex items-start justify-between gap-5">
              <div class="flex flex-col items-center justify-center gap-2">
                <div class="flex items-center justify-start gap-1">
                  <img
                    src="@/assets/icons/hourglassIcon.png"
                    alt="timing"
                    class="w-6 h-6 object-contain"
                  />
                  <h4 class="text-lg font-semibold font-quicksand">
                    <CountdownTimer targetTime="2023-10-19T23:59:59" />
                  </h4>
                </div>
                <p class="text-xs font-semibold font-quicksand">
                  Time Remaining
                </p>
              </div>
              <div class="flex flex-col items-start justify-center gap-2">
                <h4 class="text-lg font-semibold font-quicksand">17.53 ETH</h4>
                <p class="text-xs font-semibold font-quicksand">Highest Bid</p>
              </div>
            </div>
            <button
              disabled
              class="w-full disabled:bg-[#161a42b3] disabled:cursor-not-allowed border-2 border-[#06B6D4] rounded-xl py-2 px-4 outline-none text-sm font-bold font-quicksand"
            >
              Place A Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from './CountdownTimer.vue';

export default {
    name: "Popular",
    components: { CountdownTimer }
};
</script>
