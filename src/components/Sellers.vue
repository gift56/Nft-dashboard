<template>
  <div class="flex flex-col w-full items-start justify-start gap-5">
    <h2 class="text-2xl font-bold font-quicksand text-[#6EE7B7] select-none">
      ⭐ Top Sellers
    </h2>
    <div
      class="seller w-full overflow-x-scroll whitespace-nowrap scroll-smooth overflow-y-hidden"
    >
      <div
        v-for="(seller, index) in topSellersData"
        :key="index"
        class="relative mx-2 inline-block cursor-pointer pb-6 w-[180px]"
      >
        <div className="w-full flex items-center justify-start gap-3">
          <img
            :src="seller.sellerImage"
            :alt="seller.username"
            class="w-[60px] aspect-square rounded-xl object-contain"
          />
          <div className="flex items-start flex-col justify-start">
            <h2
              className="whitespace-normal text-base font-bold flex items-center gap-2"
            >
              {{ seller.username }}
              <img
                src="../assets/icons/verificationIcon.png"
                alt="verifired"
                v-if="seller.verified"
              />
            </h2>
            <p className="text-sm font-bold text-[#5EEAD4] font-quicksand">
              {{ seller.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { topSellersData } from "../utils/constant";

export default {
  name: "Sellers",
  data() {
    return {
      topSellersData,
    };
  },
};
</script>
