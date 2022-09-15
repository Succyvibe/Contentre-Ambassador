<template>
  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="md:px-10">
        <img class="w-16" src="../assets/images/logo.png" alt="" srcset="" />

        <h1 class="text-3xl md:text-6xl font-semibold">
          Contentre Ambassador of the Month
        </h1>
        <p class="text-xl md:text-2xl mt-6">
          We want to recognize those who give back the most, the ambassadors who
          went above and beyond. We thank them greatly for their many
          contributions can’t wait to see what they do next!
        </p>

        <div class="flex space-x-10 mt-10">
          <div class="space-x-3">
            <label for="" class="text-2xl">Year:</label>
            <select class="border border-gray-400 rounded-xl p-3" name="" id="">
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
            </select>
          </div>
          <div class="space-x-5">
            <label for="" class="text-2xl">Year:</label>
            <select class="border border-gray-400 rounded-xl p-3" name="" id="">
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div
        class="bg-gray-300 md:flex justify-between p-6 md:p-16 rounded-3xl mt-16"
      >
        <div class="md:w-[50%]">
          <div class="md:w-[450px] md:h-[450px] rounded-3xl">
            <img
              class="w-full h-full rounded-3xl"
              src="../assets/images/winner1.png"
            />
          </div>
        </div>
        <div class="md:w-[50%] pt-5 md:pt-10">
          <p class="font-semibold text-lg">July 2022 winner</p>
          <h3 class="mt-16 text-4xl">Mehul Patel</h3>
          <p class="text-lg md:text-xl mt-4 md:mt-8">
            Mehul is an engineer who loves digging technology, and public
            speaker currently living in India. His interests range from
            technology to innovation. He has been working and contributing
            towards the open source community in all ways he can.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PrevAmb",
};
</script>
