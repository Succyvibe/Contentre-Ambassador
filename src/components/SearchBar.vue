<template>
  <div class="border-2 flex px-4 items-center py-3 rounded-lg">
    <img class="w-6" src="../assets/images/search.svg" alt="" />
    <input
      type="text"
      class="w-full ml-2 border-none outline-none text-lg font-semibold bg-transparent"
      placeholder="Search Help Center"
    />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
};
</script>
