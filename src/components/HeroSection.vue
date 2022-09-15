<template>
  <section class="mt-10 bg-[rgba(79,209,197,0.5)]">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="md:flex justify-between items-center">
        <div class="md:w-[50%]">
          <h1 class="text-2xl font-semibold md:text-5xl">
            Contentre Ambassador Program
          </h1>
          <p class="text-lg md:text-3xl mt-4 md:mt-8">
            Do you want to empower the developer community, make the internet
            safer, and build your brand while you’re at it?
          </p>
          <a href="#form" class="scroll-smooth">
            <Button text="Join the Mission" />
          </a>
        </div>
        <div class="mt-10">
          <img class="w-[500px]" src="../assets/images/hero-img1.jpg" />
        </div>
      </div>
    </div>
  </section>

  <!-- -----------Section-2------------------- -->
  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="md:flex justify-between items-center">
        <div class="mt-10">
          <img class="w-[500px]" src="../assets/images/hero-img1.jpg" />
        </div>

        <div class="md:w-[50%]">
          <h1 class="text-3xl font-semibold md:text-5xl">Our goal</h1>
          <p class="text-lg md:text-xl mt-4 md:mt-8">
            At Contentre we love developers, and serving and giving back to the
            developer community is one of the most rewarding things we do. Join
            us in our mission to advocate for the developer by sharing knowledge
            on identity and security related topics through meetups,
            conferences, written content, webinars and other events as an
            Contentre Ambassador.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- --------Section 3--------------- -->

  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="md:flex justify-between items-center">
        <div class="md:w-[50%]">
          <h1 class="text-3xl font-semibold md:text-5xl">
            Meet the Ambassadors
          </h1>
          <p class="text-lg md:text-xl mt-4 md:mt-8">
            We have over 150 Ambassadors in 37 countries excited to help the
            developer community with identity and security.
          </p>

          <router-link to="/ambassador">
            <Button text="See All Ambassadors" />
          </router-link>
        </div>
        <div class="mt-10">
          <img class="w-[500px]" src="../assets/images/hero-img1.jpg" />
        </div>
      </div>
    </div>
  </section>

  <!-- -----------Section 4 -->
  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <h1 class="text-3xl font-semibold mt-20 md:text-5xl">
        Contentre Ambassadors of the Month
      </h1>
      <p class="text-lg md:text-xl mt-4 md:mt-8">
        We want to recognize those who give back the most, the ambassadors who
        went above and beyond.<br />
        We thank them greatly for their many contributions this month and can’t
        wait to see what they do next!
      </p>

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
      <router-link to="/prevamb">
        <Button text="See Previous Winners" />
      </router-link>
    </div>
  </section>

  <!-- -------Section 5------------------- -->

  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="md:flex justify-between items-center">
        <div class="mt-10">
          <img class="w-[500px]" src="../assets/images/hero-img1.jpg" />
        </div>

        <div class="md:w-[50%]">
          <h1 class="text-3xl font-semibold md:text-5xl">
            Can I be an Ambassador?
          </h1>
          <p class="text-lg md:text-xl mt-4 md:mt-8">
            If you are content creator or enjoy learning and sharing your
            knowledge with other developers, then you should apply to be an
            Auth0 Ambassador! Ambassadors must:
          </p>

          <div class="flex mt-10 space-x-3">
            <img
              class="w-10 h-10"
              src="../assets/images/check-icon.png"
              alt=""
            />

            <p class="text-lg md:text-2xl">
              Contribute to the program on a quarterly basis
            </p>
          </div>
          <div class="flex mt-10 space-x-3">
            <img
              class="w-10 h-10"
              src="../assets/images/check-icon.png"
              alt=""
            />

            <p class="text-lg md:text-2xl">
              Be active participants and/or a leader in a developer community
            </p>
          </div>
          <div class="flex mt-10 space-x-3">
            <img
              class="w-10 h-10"
              src="../assets/images/check-icon.png"
              alt=""
            />

            <p class="text-lg md:text-2xl">
              Demonstrate interest in creating or sharing technical content be
              it via blog posts, public speaking, or developer events
            </p>
          </div>
          <div class="flex mt-10 space-x-3">
            <img
              class="w-10 h-10"
              src="../assets/images/check-icon.png"
              alt=""
            />

            <p class="text-lg md:text-2xl">
              Be committed to Auth0's core values of collaboration,
              experimentation, and transparency
            </p>
          </div>
          <div class="flex mt-10 space-x-3">
            <img
              class="w-10 h-10"
              src="../assets/images/check-icon.png"
              alt=""
            />

            <p class="text-lg md:text-2xl">
              Dream of becoming a Developer Advocate
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ------Section 6----------------------- -->
  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h1 class="text-5xl">Your Rewards</h1>
          <p class="mt-10 text-xl">
            This is not a paid position, but you will get access to some great
            rewards and perks for being an Auth0 Ambassador in exchange for
            contributing to the program.
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Recognition on Auth0’s social media accounts
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Access to sponsorship & travel perks
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Training with experts on authentication, security and identity
            topics
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Custom Auth0 gear that identifies you as part of the Ambassador
            Program
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Exclusive access to new and experimental Auth0 features
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ----------------Section 7 -->
  <section class="mt-10">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="mb-10 md:mb-10 md:my-16">
        <h1 class="text-3xl md:text-5xl mb-10">
          You won’t be alone in this mission
        </h1>
        <p class="text-xl">
          You’ll have access to expert support from our developer relations team
          and a global network of Auth0 Ambassadors that will help you build up
          your brand and local developer community by:
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Recognition on Contentre social media accounts
          </p>
        </div>

        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Recognition on Contentre social media accounts
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Access to sponsorship & travel perks
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Training with experts on authentication, security and identity
            topics
          </p>
        </div>
        <div class="bg-[#286963] p-8 rounded-3xl">
          <img class="w-20" src="../assets/images/graph2.png" alt="" />
          <p class="my-5 text-xl text-white">
            Custom Contentre gear that identifies you as part of the Ambassador
            Program
          </p>
        </div>
        <div class="p-4 md:p-8 rounded-3xl flex justify-center items-center">
          <h1 class="text-2xl md:text-4xl font-semibold">
            The more you do, the more rewards and perks you get!
          </h1>
        </div>
      </div>
    </div>
  </section>

  <!-- --------section 8------------------ -->

  <section id="form" class="mt-10 mb-20">
    <div
      class="container max-w-screen-xl mx-auto bg-gray-300 p-10 md:px-24 md:py-12 mt-10 md:mt-28 rounded-3xl"
    >
      <div class="flex flex-col md:flex-row">
        <div class="md:w-[50%] md:px-10">
          <img class="w-16" src="../assets/images/logo.png" alt="" srcset="" />

          <h1 class="text-3xl md:text-6xl font-semibold">Join the mission</h1>
          <p class="text-xl md:text-2xl mt-6">
            Tell us about yourself by filling out the form and we’ll be in touch
            soon! We require ambassadors to be 18 years old or over.
          </p>
        </div>
        <div class="md:w-[50%] md:border-l-2 md:px-40 mt-10 md:mt-0">
          <div class="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
            />
            <input
              type="text"
              placeholder="Email"
              class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
            />
            <input
              type="text"
              placeholder="City"
              class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
            />
            <input
              type="text"
              placeholder="State/Province/Region"
              class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
            />
            <input
              type="text"
              placeholder="Region"
              class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
            />
            <input
              type="text"
              placeholder="Link to a tech blog post, talk or OSS project"
              class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
            />

            <div>
              <select
                class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963]"
                name=""
                id=""
              >
                <option value="">Avocado Labs</option>
                <option value="">Contentre Blog</option>
                <option value="">Contentre Employees</option>
                <option value="">Twitter/social media</option>
                <option value="">Search Engine</option>
                <option value="">Solomon Eseme youtube channel</option>
                <option value="">Contentre Login challenge</option>
              </select>
            </div>

            <!---------Radio buttons--------  -->
            <div class="flex flex-col">
              <label for="" class="md:w-96 py-3"
                >Have you ever used Contentre before?</label
              >

              <div class="flex flex-col">
                <label for=""><input type="radio" /> Yes</label>
                <label for=""><input type="radio" /> No</label>
              </div>
            </div>

            <!-----------------  -->

            <!-- -----------text area----------- -->

            <div class="">
              <textarea
                class="block w-full md:w-96 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#286963] resize-none mb-10 text-lg"
                placeholder="In your own words, tell us why you will be a good fit for the ambassador program. Please include links and/or profiles"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <!-- -------end----text area----------- -->

            <!-- ----Checkbox----- -->

            <label for="" class="block md:w-96 py-3 text-lg">
              <input type="checkbox" /> I confirm that I am 18 years old or over
            </label>
            <!-- ---End of-Checkbox----- -->

            <!-- --------submit button------------- -->

            <Button text="Apply" />
            <!-- ----End of----submit 
            button------------- -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "HeroSection",
  components: {
    Button,
  },
};
</script>
