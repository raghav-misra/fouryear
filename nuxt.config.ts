export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
    ],
    tailwindcss: {
        cssPath: "~~/styles/tailwind.css",
        configPath: "tailwind.config"
    },
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                }
            ]
        }
    }
});
