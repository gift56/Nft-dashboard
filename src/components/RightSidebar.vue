<template>
  <div
    class="w-[318px] bg-inputBg border-2 border-[#075985] rounded-2xl h-[570px] overflow-hidden hover:overflow-y-auto hover:overflow-x-hidden flex flex-col items-center justify-start gap-8 relative p-4"
  >
    <div
      class="relative w-full flex flex-col gap-8 items-center justify-center"
    >
      <h2 class="text-3xl font-bold font-quicksand">My Profile</h2>
      <img
        src="@/assets/image/avatarImage.svg"
        alt="user_avatar"
        class="border-2 rounded-full border-[#3461FF]"
      />
      <h4 class="text-2xl font-semibold font-quicksand relative z-10">
        Musfiqur Rahman
      </h4>
      <div
        class="w-12 h-12 bg-ballsBg rounded-full absolute top-[5%] right-[-15%]"
      ></div>
      <div
        class="w-16 h-16 bg-balls2Bg rounded-full absolute top-[40%] right-[-22%] z-10"
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
      <div
        class="w-8 h-16 bg-balls4Bg rounded-br-full absolute top-[65%] left-[-12%] z-10"
      ></div>
      <div
        class="w-16 h-16 bg-[#FFA336] rounded-full absolute top-[80%] left-[-12%] blur-[89.5px]"
      ></div>
      <div
        class="w-5 h-5 bg-smallBallsBg rounded-full absolute top-[18%] left-[12%] z-10"
      ></div>
      <div
        class="w-5 h-5 bg-smallBallsBg2 rounded-full absolute top-[70%] right-[4%] z-10"
      ></div>
      <div
        class="w-3 h-3 bg-[#555D75] rounded-full absolute top-[46%] left-[2%] z-10"
      ></div>
      <div
        class="w-2 h-2 bg-[#555D75] rounded-full absolute top-[46%] right-[8%] z-10"
      ></div>
    </div>
    <div class="w-full grid grid-cols-4 items-start justify-start gap-6">
      <div class="flex items-center w-full flex-col gap-2 select-none">
        <div
          class="w-full py-2 rounded-2xl flex items-center justify-center border border-[#3461FF] text-lg font-semibold"
        >
          120
        </div>
        <h5 class="text-sm font-bold font-quicksand">Asset</h5>
      </div>
      <div class="flex items-center w-full flex-col gap-2 select-none">
        <div
          class="w-full py-2 rounded-2xl flex items-center justify-center border border-[#3461FF] text-lg font-semibold"
        >
          10K
        </div>
        <h5 class="text-sm font-bold font-quicksand">Followers</h5>
      </div>
      <div class="flex items-center w-full flex-col gap-2 select-none">
        <div
          class="w-full py-2 rounded-2xl flex items-center justify-center border border-[#3461FF] text-lg font-semibold"
        >
          70
        </div>
        <h5 class="text-sm font-bold font-quicksand">Likes</h5>
      </div>
      <div class="flex items-center w-full flex-col gap-2 select-none">
        <div
          class="w-full py-2 rounded-2xl flex items-center justify-center border border-[#3461FF] text-lg font-semibold"
        >
          60
        </div>
        <h5 class="text-sm font-bold font-quicksand">Bidding</h5>
      </div>
    </div>
    <div class="w-full flex flex-col items-start justify-start gap-3">
      <h3 class="text-xl font-bold font-quicksand">Your Balance</h3>
      <div
        class="flex items-center justify-between w-full border border-[#495099] rounded-2xl backdrop-blur-sm py-2 px-3"
      >
        <div class="flex items-center justify-start gap-2 select-none">
          <img src="@/assets/icons/ethereumIcon.png" alt="etheriumLogo" />
          <h2 class="text-lg font-bold font-quicksand">4,668 ETH</h2>
        </div>
        <div
          class="flex items-center justify-end gap-1 cursor-pointer select-none"
        >
          <span class="text-base font-semibold font-quicksand">Add</span>
          <img
            src="@/assets/icons/arrowDownIcon.png"
            alt="arrow"
            class="-rotate-90 w-4 h-4 object-contain"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start justify-start gap-4 w-full">
      <div class="w-full flex items-center justify-between">
        <h3 class="text-xl font-bold font-quicksand">Revenue</h3>
        <div
          class="flex items-center justify-end gap-1 cursor-pointer select-none"
        >
          <span class="text-base font-semibold font-quicksand">This Month</span>
          <img
            src="@/assets/icons/arrowDownIcon.png"
            alt="arrow"
            class="w-4 h-4 object-contain"
          />
        </div>
      </div>
      <div
        class="w-full h-[184px] rounded-2xl border-2 border-[#495099] backdrop-blur-sm overflow-hidden"
      >
        <RevenueChart />
      </div>
    </div>
    <div class="flex flex-col items-start justify-start gap-4 w-full">
      <div class="w-full flex items-center justify-between">
        <h3 class="text-xl font-bold font-quicksand">Recent Activity</h3>
        <div
          class="flex items-center justify-end gap-1 cursor-pointer select-none"
        >
          <span class="text-base font-semibold font-quicksand">See All</span>
          <img src="@/assets/icons/arrowRightLongIcon.png" alt="arrow" />
        </div>
      </div>
      <div class="flex flex-col items-start justify-start gap-4 w-full">
        <div
          v-for="activity in activityData"
          :key="activity.activityTitle"
          class="w-full flex items-center justify-between gap-6 p-2 rounded-2xl bg-darkColor2"
        >
          <div class="flex items-center justify-start gap-2">
            <img :src="activity.activityImage" :alt="activity.activityTitle" />
            <div class="flex flex-col items-start justify-start gap-1">
              <h2 class="text-sm font-semibold">
                {{ activity.activityTitle }}
              </h2>
              <span class="text-xs font-normal"
                >by
                <span
                  class="bg-clip-text text-transparent bg-textBg text-sm font-medium"
                  >{{ activity.autor }}</span
                ></span
              >
            </div>
          </div>
          <div class="flex flex-col items-end justify-end gap-3">
            <div>
              <h5 class="text-xs text-right font-medium text-[#67E8F9]">
                New Bid
              </h5>
              <h3 class="text-sm text-right font-semibold">
                {{ activity.details.headline }}
              </h3>
            </div>
            <span class="text-xs font-normal text-right text-[#93C5FD]">{{
              activity.details.timestamp
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { activityData } from "../utils/constant";
import RevenueChart from "./RevenueChart.vue";

export default {
  name: "RightSidebar",
  data() {
    return {
      activityData,
    };
  },
  components: { RevenueChart },
};
</script>
