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
      <h4 class="text-2xl font-semibold font-quicksand">Musfiqur Rahman</h4>
      <div class="w-12 h-12 bg-ballsBg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSideBar",
};
</script>
