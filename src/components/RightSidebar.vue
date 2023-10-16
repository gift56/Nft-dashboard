<template>
  <div
    class="w-[268px] bg-inputBorderColor border-2 border-[#075985] rounded-2xl h-[94vh] overflow-hidden hover:overflow-y-auto hover:overflow-x-hidden flex flex-col items-center justify-start gap-8 relative p-4"
  >
    <div
      class="relative w-full flex flex-col gap-4 items-center justify-center"
    >
      <h2 class="text-3xl font-bold font-quicksand">My Profile</h2>
      <img
        src="@/assets/image/avatarImage.svg"
        alt="user_avatar"
        class="border-2 rounded-full border-[#fc6767]"
      />
      <h4 class="text-2xl font-semibold font-quicksand relative z-10">
        Musfiqur Rahman
      </h4>
      <div
        class="w-12 h-12 bg-ballsBg rounded-full absolute top-[5%] right-[-15%]"
      ></div>
      <div
        class="w-16 h-16 bg-balls2Bg rounded-full absolute top-[40%] right-[-25%] z-10"
      ></div>
      <div
        class="w-16 h-16 bg-[#FFA336] rounded-full absolute top-[46%] right-[-25%] blur-[39.5px]"
      ></div>
      <div
        class="w-16 h-16 bg-balls3Bg rounded-full absolute top-[18%] left-[-25%] z-10"
      ></div>
      <div
        class="w-[102px] h-[102px] bg-[#A22DFF] rounded-full absolute top-[18%] left-[-25%] blur-[89.5px]"
      ></div>
      <div class="w-8 h-16 bg-balls4Bg rounded-br-full absolute top-[80%] left-[-12%] z-10"></div>
      <div
        class="w-16 h-16 bg-[#FFA336] rounded-full absolute top-[80%] left-[-12%] blur-[89.5px]"
      ></div>
      <div class="w-5 h-5 bg-smallBallsBg rounded-full absolute top-[16%] left-[12%] z-10"></div>
      <div class="w-5 h-5 bg-smallBallsBg2 rounded-full absolute top-[16%] left-[12%] z-10"></div>
      <div class="w-3 h-3 bg-[#555D75] rounded-full absolute top-[16%] left-[12%] z-10"></div>
      <div class="w-2 h-2 bg-[#555D75] rounded-full absolute top-[16%] left-[12%] z-10"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSideBar",
};
</script>
