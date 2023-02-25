<script setup lang="ts">
const credits: ICredit[] = [
    { id: "0", type: "exam", name: "AP Calculus BC", score: "5" },
    { id: "1", type: "course", name: "CSCI 14", score: "A" }
];

const schools: ISchool[] = [
    { id: "0", name: "University of Maryland", website: "https://umd.edu" },
    { id: "1", name: "University of Minnesota", website: "https://tc.umn.edu" },
    { id: "2", name: "Rutgers University", website: "https://rutgers.edu" },
    { id: "3", name: "San Jose State University", website: "https://sjsu.edu" },
];

const creditModeEdit = ref(true);
const currentCreditId = ref(null);
const creditFields: Omit<ICredit, "id"> = reactive({
    type: "course",
    name: "MATH 1234",
    score: "100"
});

const schoolModeEdit = ref(false);
const currentSchoolId = ref(null);
const schoolFields: Omit<ISchool, "id"> = reactive({
    name: "Hustlers' University",
    website: "https://raghavmisra.dev"
});

</script>

<template>
    <main class="p-5">
        <details open>
            <summary>
                <h1 class="text-4xl font-bold mr-5">credits</h1>
                <button class="btn btn-light btn-icon mt-2">library_add</button>
            </summary>

            <div class="grid gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CreditCard class="mb-2" v-for="credit in credits" :key="credit.id" :credit="credit" />
                <span v-if="credits.length === 0">you haven't added any credits.</span>
            </div>
        </details>

        <hr class="border-none h-0.5 bg-white rounded my-3">

        <details open>
            <summary>
                <h1 class="text-4xl font-bold mr-5">schools</h1>
                <button class="btn btn-light btn-icon mt-2">library_add</button>
            </summary>

            <div class="grid gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <SchoolCard class="mb-2" v-for="school in schools" :key="school.id" :school="school" />
                <span v-if="schools.length === 0">you have no schools right now, add one!</span>
            </div>
        </details>
    </main>
</template>

<style scoped>
details h1::before {
    content: "show ";
}

details[open] h1::before {
    content: "";
}
</style>