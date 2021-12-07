<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white shadow" >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/"><ArrowNarrowLeftIcon class="h-5 w-auto text-gray-500 mr-5"/></router-link>
            <img class="block lg:hidden h-8 w-auto" :src="require('../assets/logo-removebg-preview.png')" alt="" />
            <img class="hidden lg:block h-8 w-auto" :src="require('../assets/logo-removebg-preview.png')" alt="Workflow" />
             <h1 class="text-indigo-700">Refactoring</h1>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>


</script>