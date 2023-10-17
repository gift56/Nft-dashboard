<template>
  <div class="countdown">
    {{ formattedTime }}
  </div>
</template>

<script>
export default {
  props: {
    targetTime: {
      type: String, // Change the type to match your data format if needed
      required: true,
    },
  },
  data() {
    return {
      timeRemaining: 0,
    };
  },
  computed: {
    formattedTime() {
      const hours = String(Math.floor(this.timeRemaining / 3600)).padStart(
        2,
        "0"
      );
      const minutes = String(
        Math.floor((this.timeRemaining % 3600) / 60)
      ).padStart(2, "0");
      const seconds = String(this.timeRemaining % 60).padStart(2, "0");
      return `${hours}h:${minutes}m:${seconds}s`;
    },
  },
  methods: {
    updateCountdown() {
      const currentTime = new Date();
      this.timeRemaining = Math.max(
        0,
        Math.floor((new Date(this.targetTime) - currentTime) / 1000)
      );
    },
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
};
</script>
