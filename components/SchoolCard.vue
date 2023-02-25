<script setup lang="ts">
defineProps<{
    school: ISchool
}>();
</script>

<template>
    <div class="bg-slate-900 p-4 shadow-lg rounded flex items-center">
        <!-- <h2 class="text-1xl font-bold mb-2">{{ school.name }}</h2>
        <div class="flex items-stretch">
            <NuxtLink class="btn btn-light mr-2" :to="`/schools/${school.id}`">open</NuxtLink>
            <a class="btn btn-dark btn-icon mr-2" target="_blank" :href="school.website">
                open_in_new
            </a>
        </div> -->
        <div>
            <h2 class="text-1xl font-bold">{{ school.name }}</h2>
            <small class="link"><a :href="school.website" target="_blank">visit website</a></small>
        </div>
        <span class="flex-1"></span>
        <button class="btn btn-light btn-icon">
            room_preferences
        </button>
    </div>
</template>