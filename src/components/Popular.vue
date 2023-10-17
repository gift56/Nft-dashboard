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
    <div class="w-full flex items-center justify-between gap-4">
      <div class="flex-1 relative h-[280px]">
        <img src="../assets/image/nftImage1.png" alt="nft1" class="h-full rounded-3xl" />
      </div>
      <div class="flex-1 relative h-[280px]">
        <img src="../assets/image/nftImage2.png" alt="nft2" class="h-full rounded-3xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popular",
};
</script>
