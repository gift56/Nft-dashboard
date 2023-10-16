<template>
  <div
    class="w-[72px] h-[93vh] overflow-hidden hover:overflow-y-auto hover:overflow-x-hidden bg-inputBg border border-inputBorderColor rounded-2xl flex items-center justify-start flex-col gap-6"
  >
    <div class="w-full flex items-center justify-center py-4">
      <img src="@/assets/image/logo.png" alt="logo" />
    </div>
    <div class="flex flex-col items-center justify-center w-full gap-8">
      <div
        class="w-full relative before:content-[''] before:absolute before:bottom-0 before:w-[80%] before:h-[3px] before:left-[8px] before:bg-[#2E357B] pb-7 flex flex-col items-center justify-center gap-6"
      >
        <div
          v-for="icon in leftSideBarData"
          :key="icon.iconImage"
          class="first:bg-sidebarhoverColor w-full flex items-center justify-center h-10 hover:bg-sidebarhoverColor transition-all duration-300 cursor-pointer"
        >
          <img :src="icon.iconImage" alt="icons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { leftSideBarData } from "../utils/constant";

export default {
  name: "LeftSideBar",
  data() {
    return {
      leftSideBarData,
    };
  },
};
</script>
