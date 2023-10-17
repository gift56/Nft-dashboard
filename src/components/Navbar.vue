<template>
  <header class="w-full flex items-center justify-between gap-6">
    <div
      class="flex items-center justify-start gap-5 w-[400px] h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg px-4"
    >
      <img src="@/assets/icons/searchIcon.png" alt="searchIcon" />
      <input
        type="text"
        placeholder="Search by creator or collection"
        class="h-full w-full bg-transparent outline-none text-base font-normal"
      />
    </div>
    <div
      class="w-fit h-14 rounded-2xl border-2 border-inputBorderColor bg-inputBg px-4 flex items-center justify-start gap-3"
    >
      <img src="../assets/icons/ethImage.png" alt="ethImage" />
      <h4 class="text-base font-medium">3,25 ETH</h4>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
