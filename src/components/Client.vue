<template>


    <!-- Search -->


    <form class="flex items-center mt-4 max-w-3xs w-xs mx-auto">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                <font-awesome-icon class="w-4 h-4 text-gray-500 dark:text-gray-400" icon="user" />

            </div>
            <input type="text" id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nome do cliente..." required />
        </div>
        <button type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search</span>
        </button>
    </form>

    <!-- End Search -->



    <div class="flex flex-col gap-5 py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6 ">

        <!-- Card -->

        <div
            class="items-center max-w-[350px] w-[320px] sm:w-[400px] px-4 rounded-lg flex hover:border-1 hover:border-blue-900 bg-gray-900 hover:bg-gray-900 border-blue-900">

            <font-awesome-icon class="text-gray-400 fa-3x" icon="user-circle" />

            <div class="w-full px-4 py-5 flex justify-center ">
                <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-200 ">
                        Samuel Gomes
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">
                        (11) 96512-4506
                    </span>
                </div>

            </div>
        </div>

        <!-- End Card -->

          <!-- Card -->

        <div
            class="items-center max-w-[350px] w-[320px] sm:w-[400px] px-4 rounded-lg flex hover:border-1 hover:border-blue-900 bg-gray-900 hover:bg-gray-900 border-blue-900">

            <font-awesome-icon class="text-gray-400 fa-3x" icon="user-circle" />

            <div class="w-full px-4 py-5 flex justify-center ">
                <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-200 ">
                        Hewerton
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">
                        (11) 96512-4506
                    </span>
                </div>

            </div>
        </div>

        <!-- End Card -->




    </div>

</template>

<script lang="ts" setup>


</script>
