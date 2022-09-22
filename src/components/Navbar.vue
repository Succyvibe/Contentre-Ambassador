<template>
  <nav>
    <div
      class="container max-w-screen-xl mx-auto flex justify-between items-center p-4"
    >
      <div class="logo-box">
        <img class="w-14" src="../assets/images/logo.png" />
      </div>

      <!-- Navigation links -->
      <div class="flex space-x-4">
        <ul class="space-x-4 hidden md:flex">
          <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/"
            >Home</router-link
          >
          <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/Product"
            >Product</router-link
          >
          <!-- <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/Solutions"
            >Solutions</router-link
          > -->
          <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/Resources"
            >Docs/Resources</router-link
          >
          <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/Company"
            >Company</router-link
          >

          <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/help"
            >Help Center</router-link
          >
          <router-link
            class="text-[#888888] text-base font-normal hover:text-[#286963] active:bg-[#F6FDFC] focus:bg-[#F6FDFC] py-1 px-2 rounded"
            to="/Pricing"
            >Pricing</router-link
          >
        </ul>

        <!-- CTA -->
        <div class="space-x-4">
          <button class="text-[#286963] text-sm font-bold">Sign Up</button>
          <button
            class="bg-[#286963] text-sm font-normal px-6 py-2 rounded text-white"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
