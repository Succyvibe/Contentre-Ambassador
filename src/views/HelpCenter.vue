<template>
  <!-- bg-[rgba(79,209,197,0.5)] -->
  <div class="">
    <header class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <!-- Hero section -->
        <div class="md:max-w-[60%] mx-auto">
          <h1 class="text-5xl md:text-7xl text-center mb-10 font-semibold">
            Help Center
          </h1>

          <p
            class="mb-10 text-lg md:text-xl font-semibold text-gray-500 text-center"
          >
            Got a question about selling with Paddle? We’re here to help.
          </p>
          <SearchBar />
        </div>
        <!--End Hero section -->
      </div>
    </header>

    <!-- ----------------Card -->
    <!-- bg-[#286963] -->
    <section class="mt-20">
      <div class="container max-w-screen-2xl mx-auto px-16 py-4">
        <div class="grid md:grid-cols-4 gap-4">
          <router-link
            to="/start"
            class="border-2 rounded-lg px-10 pt-24 md:pt-28 md:pb-24 pb-10 hover:bg-[#286963] transition relative"
          >
            <img class="w-14 mb-8" src="../assets/images/grow.png" alt="" />
            <div
              class="layer bg-transparent h-[100%] w-[100%] absolute top-0 left-0 transition duration-500 rounded-lg hover:bg-[#286963]"
            >
              <h3
                class="font-semibold text-4xl text-black w-[100%] absolute transition duration-500 mb-10"
              >
                Start
              </h3>
            </div>
          </router-link>

          <router-link
            to="/sell"
            class="border-2 rounded-l px-10 pt-24 md:pt-28 md:pb-24 pb-10 hover:bg-[#286963] transition relative"
          >
            <img class="w-14 mb-8" src="../assets/images/grow.png" alt="" />
            <div
              class="layer bg-transparent h-[100%] w-[100%] absolute top-0 left-0 transition duration-500 rounded-lg hover:bg-[#286963]"
            >
              <h3
                class="font-semibold text-4xl text-black w-[100%] absolute transition duration-500 mb-10"
              >
                Sell
              </h3>
            </div>
          </router-link>
          <router-link
            to="/manage"
            class="border-2 rounded-l px-10 pt-24 md:pt-28 md:pb-24 pb-10 hover:bg-[#286963] transition relative"
          >
            <img class="w-14 mb-8" src="../assets/images/grow.png" alt="" />
            <div
              class="layer bg-transparent h-[100%] w-[100%] absolute top-0 left-0 transition duration-500 rounded-lg hover:bg-[#286963]"
            >
              <h3
                class="font-semibold text-4xl text-black w-[100%] absolute transition duration-500 mb-10"
              >
                manage
              </h3>
            </div>
          </router-link>
          <router-link
            to="/grow"
            class="border-2 rounded-l px-10 pt-24 md:pt-28 md:pb-24 pb-10 hover:bg-[#286963] transition relative"
          >
            <img class="w-14 mb-8" src="../assets/images/grow.png" alt="" />
            <div
              class="layer bg-transparent h-[100%] w-[100%] absolute top-0 left-0 transition duration-500 rounded-lg hover:bg-[#286963]"
            >
              <h3
                class="font-semibold text-4xl text-black w-[100%] absolute transition duration-500 mb-10"
              >
                Grow
              </h3>
            </div>
          </router-link>
          <router-link
            to="/legal"
            class="border-2 rounded-l px-10 pt-24 md:pt-28 md:pb-24 pb-10 hover:bg-[#286963] transition relative"
          >
            <img class="w-14 mb-8" src="../assets/images/grow.png" alt="" />
            <div
              class="layer bg-transparent h-[100%] w-[100%] absolute top-0 left-0 transition duration-500 rounded-lg hover:bg-[#286963]"
            >
              <h3
                class="font-semibold text-4xl text-black w-[100%] absolute transition duration-500 mb-10"
              >
                Legal
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <!-- ------------End----Card -->

    <!-- ---------------Popular topics-->

    <section class="mt-20">
      <div class="container max-w-screen-2xl mx-auto px-16">
        <h4 class="text-black mb-12 font-semibold text-2xl">Popular topics</h4>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="border-2 rounded-xl px-5 py-8">
            <div class="grid md:grid-cols-1 gap-4">
              <a href="#" class="p-5 text-gray-500">
                <h5 class="font-semibold text-2xl">Start</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Intro to Contentre</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Set up Contentre</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Contentre Verification</h5>
              </a>
            </div>
          </div>

          <!-- ----------------Payments--------------------- -->
          <div class="border-2 rounded-xl px-5 py-8">
            <div class="grid md:grid-cols-1 gap-4">
              <a href="#" class="p-5 text-gray-500">
                <h5 class="font-semibold text-2xl">Sell</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Set up subscriptions</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Invoicing Tool</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Tax</h5>
              </a>
            </div>
          </div>

          <!-- -----------------Customer---------------------------- -->
          <div class="border-2 rounded-xl px-5 py-8">
            <div class="grid md:grid-cols-1 gap-4">
              <a href="#" class="p-5 text-gray-500">
                <h5 class="font-semibold text-2xl">Manage</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Your customers</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Reporting</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Get Paid</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">PSD2</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Risk Prevention</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">SDK</h5>
              </a>
            </div>
          </div>

          <!-- ------------------How to Profit------------------------- -->
          <div class="border-2 rounded-xl px-5 py-8">
            <div class="grid md:grid-cols-1 gap-4">
              <a href="#" class="p-5 text-gray-500">
                <h5 class="font-semibold text-2xl">Grow</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Affiliates</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Upsell</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Localisation</h5>
              </a>
            </div>
          </div>
          <!-- ----------------------Legal Provisions--------------- -->
          <div class="border-2 rounded-xl px-5 py-8">
            <div class="grid md:grid-cols-1 gap-4">
              <a href="#" class="p-5 text-gray-500">
                <h5 class="font-semibold text-2xl">Legal</h5>
              </a>
              <a href="#" class="bg-[#286963] p-6 text-white rounded-lg">
                <h5 class="text-xl">Sanctions</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ------------End----Popular topics -->
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.layer h3 {
  bottom: 0;
  left: 14%;
  position: absolute;
  transition: 0.5s;
}
.layer:hover h3 {
  bottom: 10%;
  opacity: 1;
  color: white;
}
</style>
