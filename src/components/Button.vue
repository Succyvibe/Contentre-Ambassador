<template>
  <button
    class="mt-10 w-full md:w-48 py-3 text-lg rounded-xl bg-[#286963] hover:bg-[#1e4e49] transition duration-150 text-white"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
