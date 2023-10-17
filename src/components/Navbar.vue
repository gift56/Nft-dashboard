<template>
  <header class="w-full flex items-center justify-between gap-3">
    <div
      class="flex items-center justify-start gap-5 w-[35%] mainLaptop:w-[400px] h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg px-4"
    >
      <img src="@/assets/icons/searchIcon.png" alt="searchIcon" />
      <input
        type="text"
        placeholder="Search by creator or collection"
        class="h-full w-full bg-transparent outline-none text-sm mainLaptop:text-base font-normal"
      />
    </div>
    <div
      class="w-fit h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg px-4 flex items-center justify-start gap-3 hover:shadow-connectShadow transition-all duration-300 cursor-pointer hover:border-primary"
    >
      <img src="@/assets/icons/ethImage.png" alt="ethImage" />
      <h4 class="text-sm mainLaptop:text-base font-medium">3,25 ETH</h4>
    </div>
    <div
      class="w-fit h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg p-3 flex items-center justify-start gap-3 hover:shadow-connectShadow transition-all duration-300 cursor-pointer hover:border-primary"
    >
      <img src="@/assets/icons/notificationIcon.png" alt="notification" />
    </div>
    <div
      class="w-fit h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg px-3 mainLaptop:px-4 flex items-center justify-start gap-3 hover:shadow-connectShadow transition-all duration-300 cursor-pointer hover:border-primary"
    >
      <h4 class="text-sm mainLaptop:text-base font-normal">Create</h4>
    </div>
    <div
      class="w-fit h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg px-3 mainLaptop:px-4 flex items-center justify-start gap-3 hover:shadow-connectShadow transition-all duration-300 cursor-pointer hover:border-primary"
    >
      <h4 class="text-sm mainLaptop:text-base font-normal">Connect Wallet</h4>
    </div>
    <div class="flex items-center h-14 border-l-2 px-3 gap-3 cursor-pointer">
      <img
        src="@/assets/image/avatarImage.svg"
        alt="avatar"
        class="w-14 h-14 rounded-full"
      />
      <div class="flex items-center justify-start gap-5">
        <div
          class="hidden monitor:flex flex-col items-start justify-start gap-2"
        >
          <h3
            class="text-base monitor:text-lg font-semibold text-[#E2E4E9] font-quicksand"
          >
            Musfiqur Rahman
          </h3>
          <p class="text-sm font-normal font-quicksand text-[#93C5FD]">
            ryzenpixel@gmail.com
          </p>
        </div>
        <img src="@/assets/icons/arrowDownIcon.png" alt="avatar" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
