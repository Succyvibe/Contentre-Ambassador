<template>
  <section class="mt-10 bg-[#286963] text-white">
    <div class="container max-w-screen-xl mx-auto p-4">
      <div class="mb-16">
        <h1 class="text-center text-3xl">Updates</h1>
      </div>
      <div class="">
        <div class="flex space-x-12 items-center pt-16 mb-20 border-t-2">
          <div class="w-[45%] h-[360px]">
            <img
              class="w-full h-full object-cover"
              src="../assets/images/product3.png"
              alt=""
            />
          </div>
          <div class="w-[45%]">
            <p class="text-xl text-gray-300">September 1, 2022</p>
            <h3 class="text-2xl my-3 font-bold">
              Introducing custom default titles
            </h3>
            <p>
              Random bug titles on your bug reports aren't your thing?
              Workspaces now come with these pre-defined options instead:
            </p>
            <ul class="mt-4 text-lg">
              <li class="list-disc ml-5 text-gray-400">
                Random (e.g., “Yellow Fire Ant”)
              </li>

              <li class="list-disc ml-5 text-gray-400">
                Contents and page title (e.g., "#36 Replay at Episode 1: What is
                the
              </li>
              <li class="list-disc ml-5 text-gray-400">
                Contents and URL path (e.g., "#36 Replay at
                /podcast/episode-1-what-is-the-perfect-bug-report-like")
              </li>
            </ul>
            <p class="mt-4 text-lg text-gray-400">
              This new feature improves the session list experience as it hints
              at what the bug report might be about and provides an easy way to
              refer to it when talking to others. Workspace admins can select
              this by heading to their Workspace >> General settings.
            </p>
            <p class="mt-4 text-lg text-gray-400">
              Another exciting release feature this week: console support for
              React components. Bird now captures React components logged to the
              console and allows developers to inspect Class components,
              Functional components, props, children and more! Be ready to spot
              objects on our console marked with the React logo.
            </p>
          </div>
        </div>

        <div class="p-4 border-t-2 pt-16">
          <div class="flex space-x-8 items-center">
            <div class="w-[50%] h-[360px]">
              <img
                class="w-full h-full object-cover"
                src="../assets/images/product3.png"
                alt=""
              />
            </div>
            <div class="w-[50%]">
              <p class="text-xl text-gray-300">August 15, 2022</p>
              <h3 class="text-2xl my-3 font-bold">
                Time-saving keyboard shortcuts
              </h3>
              <p class="mt-4 text-lg text-gray-400">
                When recording a session using the Bird extension, you can
                control your recording with our handy keyboard shortcuts.
              </p>
              <p class="mt-4 text-lg text-gray-400">
                Simply copy and paste this URL chrome://extensions/shortcuts to
                your browser to open the settings page.
              </p>

              <p class="mt-4 text-lg text-gray-400">
                Learn how to use Bird’s keyboard shortcuts here and give it a
                try today!‍
              </p>
            </div>
          </div>
        </div>

        <div class="p-4 border-t-2 pt-16 mt-12">
          <div class="flex space-x-8 items-center">
            <div class="w-[50%] h-[360px]">
              <img
                class="w-full h-full object-cover"
                src="../assets/images/product2.png"
                alt=""
              />
            </div>
            <div class="w-[50%]">
              <p class="text-xl text-gray-300">August 15, 2022</p>
              <h3 class="text-2xl my-3 font-bold">
                New integration with Azure DevOps
              </h3>
              <p class="mt-4 text-lg text-gray-400">
                Work more efficiently with your team and have a better workflow
                by using Bird.‍
              </p>
              <p class="mt-4 text-lg text-gray-400">
                Send your next bug report straight to your team's Azure DevOps
                board directly from Bird Eats Bug, saving you time to switch
                between apps while ensuring your bugs get fixed.
              </p>

              <p class="mt-4 text-lg text-gray-400">
                You can also provide more info to your team by adding your bug
                report as a comment to an existing Azure issue.
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 border-t-2 pt-16 mt-12">
          <div class="flex space-x-8 items-center">
            <div class="w-[50%] h-[360px]">
              <img
                class="w-full h-full object-cover"
                src="../assets/images/product2.png"
                alt=""
              />
            </div>
            <div class="w-[50%]">
              <p class="text-xl text-gray-300">August 15, 2022</p>
              <h3 class="text-2xl my-3 font-bold">
                Unfurling for public bug reports
              </h3>
              <p class="mt-4 text-lg text-gray-400">
                Another exciting feature release this week: link unfurling.
              </p>
              <p class="mt-4 text-lg text-gray-400">
                When you share a Bird public bug report link in apps like Slack,
                Notion, or LinkedIn, additional context about the link (e.g.,
                session title, description, and screenshots) is auto-appended to
                the message and displayed immediately, adding continuity to
                conversations.
              </p>

              <p class="mt-4 text-lg text-gray-400">
                Note: link unfurling only works for public bug reports (since
                private bug reports are... well, private.)
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 border-t-2 pt-16 mt-12">
          <div class="flex space-x-8 items-center">
            <div class="w-[50%] h-[360px]">
              <img
                class="w-full h-full object-cover"
                src="../assets/images/product2.png"
                alt=""
              />
            </div>
            <div class="w-[50%]">
              <p class="text-xl text-gray-300">August 15, 2022</p>
              <h3 class="text-2xl my-3 font-bold">A fresh new look</h3>
              <p class="mt-4 text-lg text-gray-400">
                We've gathered a lot of feedback from user interviews, our
                community, and analytics and made some essential refinements to
                our extension. We refreshed our design, making our instant
                replay feature easier to understand and use.
              </p>
              <p class="mt-4 text-lg text-gray-400">
                This new update also makes it simpler for new users to get
                started with Bird and progressively discover its various
                capabilities as they report more bugs.
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 border-t-2 pt-16 mt-12">
          <div class="flex space-x-8 items-center">
            <div class="w-[50%] h-[360px]">
              <img
                class="w-full h-full object-cover"
                src="../assets/images/product2.png"
                alt=""
              />
            </div>
            <div class="w-[50%]">
              <p class="text-xl text-gray-300">August 15, 2022</p>
              <h3 class="text-2xl my-3 font-bold">
                Meet Collections, a better way to organize your sessions
              </h3>
              <p class="mt-4 text-lg text-gray-400">
                Today’s release adds the ability to create collections to
                organize your sessions.
              </p>
              <p class="mt-4 text-lg text-gray-400">
                This is especially useful for people who use Bird beyond just
                bug reporting. Here’s an example: You can create a collection
                called Bugs where you store all your bug reports, and a
                collection called Demos, which houses explanation videos for
                your remote team members or even end users. Collections can be
                also used to group recordings by sprint. You can rename,
                archive, and delete Collections to further personalize your Bird
                workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
};
</script>
