//helper роутер, который будет помогать работать с навигацией с нашим приложением
export const router = {
    getUrl() {
        return window.location.hash.slice(1)
    },

    navigate (hash) {
        window.location.hash = hash
    }
}