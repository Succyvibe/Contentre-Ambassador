<template>
  <header class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <!--Search input -->
      <div class="md:max-w-[60%] mx-auto">
        <SearchBar />
      </div>
      <!--End Search input -->

      <div class="max-w-[60%] md:max-w-screen-xl mt-4">
        <ul class="flex">
          <li>
            <router-link class="text-md font-semibold" :to="{ path: '/help' }"
              >Help</router-link
            >
          </li>
          <li class="ml-4 font-semibold">/</li>
          <li class="ml-4">
            <router-link class="text-lg font-semibold" :to="{ name: 'start' }"
              >Start</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>

  <section class="border-t-gray-800 border-2">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="md:flex mt-8">
        <!-- left-col -->
        <div class="border-r-2 flex-initial w-[20%]">
          <ul class="mb-10">
            <li class="mb-5 text-lg font-semibold">
              <button @click="showStart">Start</button>
            </li>
            <li>
              <router-link class="text-lg" :to="{ name: 'intro' }"
                >Intro to paddle</router-link
              >
            </li>
            <li><a class="text-lg" href="#">Set up Paddle</a></li>
            <li><a class="text-lg" href="#">Account Verification</a></li>
          </ul>

          <!-- Sell -->
          <ul class="mb-10">
            <li class="mb-5 text-lg font-semibold"><a href="#">Sell</a></li>
            <li><a class="text-lg" href="#">Set up subscriptions</a></li>
            <li><a class="text-lg" href="#">Invoicing Tool</a></li>
            <li><a class="text-lg" href="#">Tax</a></li>
          </ul>

          <!-- Manage -->
          <ul class="mb-10">
            <li class="mb-5 text-lg font-semibold"><a href="#">Manage</a></li>
            <li><a class="text-lg" href="#">Your customers</a></li>
            <li><a class="text-lg" href="#">Reporting</a></li>
            <li><a class="text-lg" href="#">Get Paid</a></li>
            <li><a class="text-lg" href="#">PSD2</a></li>
            <li><a class="text-lg" href="#">Risk Prevention</a></li>
            <li><a class="text-lg" href="#">SDK</a></li>
          </ul>

          <!-- Grow-->
          <ul class="mb-10">
            <li class="mb-5 text-lg font-semibold"><a href="#">Grow</a></li>
            <li><a class="text-lg" href="#">Affiliates</a></li>
            <li><a class="text-lg" href="#">Upsell</a></li>
            <li><a class="text-lg" href="#">Localisation</a></li>
          </ul>

          <!-- Legal-->
          <ul class="mb-10">
            <li class="mb-5 text-lg font-semibold"><a href="#">Legal</a></li>
            <li><a class="text-lg" href="#">Sanctions</a></li>
          </ul>
        </div>

        <!-- Right-col -->
        <div class="flex-initial w-[80%]">
          <div v-if="isShowStart" class="max-w-[70%] mx-auto">
            <div>
              <h1 class="md:text-5xl text-gray-800 font-semibold mb-5">
                Start
              </h1>
              <p class="text-xl text-gray-700">
                Are you looking into getting started with Paddle? You're in the
                right place. In the "Start" category you will find everything
                you need to know about Paddle to make an informed decision that
                we are the right fit for you and to get started!
              </p>

              <ul class="mt-6">
                <li>
                  <a class="underline text-gray-700 text-xl" href="#"
                    >Intro to Contentre</a
                  >
                </li>
                <li>
                  <a class="underline text-gray-700 text-xl" href="#"
                    >Set up Contentre</a
                  >
                </li>
                <li>
                  <a class="underline text-gray-700 text-xl" href="#"
                    >Account Verification</a
                  >
                </li>
              </ul>
            </div>

            <div class="mt-20">
              <div class="border-gray-400 border-2 rounded-lg bg-gray-200 p-9">
                <h5
                  class="text-center font-semibold mb-6 text-2xl text-gray-800"
                >
                  Need more help?
                </h5>
                <p class="text-xl text-gray-700">
                  Login to your Paddle account to chat directly with our Seller
                  Support Team or…
                </p>
                <div class="flex justify-between md:justify-center mt-6">
                  <a class="border-black rounded-xl border-2 py-2 px-6" href="#"
                    >Email us</a
                  >
                  <a
                    class="border-black md:ml-10 rounded-xl border-2 py-2 px-6"
                    href="#"
                    >Connect via Twitter</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "Solutions",
  components: {
    SearchBar,
  },

  data() {
    return {
      isShowStart: false,
    };
  },

  methods: {
    showStart() {
      this.isShowStart = !this.isShowStart;
    },
  },
};
</script>
