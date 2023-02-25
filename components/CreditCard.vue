<script setup lang="ts">
defineProps<{
    credit: ICredit
}>();
</script>

<template>
    <div class="bg-slate-900 p-4 shadow-lg rounded flex items-center">
        <div>
            <h2 class="text-1xl font-bold">{{ credit.score }} on {{ credit.name }}</h2>
            <small>{{ credit.type === "course" ? "woah! you took this course!" : "it's an bird! it's a plane! it's an exam." }}</small>
        </div>
        <span class="flex-1"></span>
        <button class="btn btn-light btn-icon">
            edit
        </button>
    </div>
</template>