export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
    ],
    tailwindcss: {
        cssPath: "~~/styles/tailwind.css",
        configPath: "tailwind.config"
    }
});
