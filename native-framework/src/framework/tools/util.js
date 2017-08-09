//для того чтобы симулировать ззагрузку(показать лоудлер)
const wfm = {
    delay(ms = 1000) {
        return  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, ms)
        })
    },

    //хелпер для проверки существует ли объект
    isUnderfined(r) {
        return typeof r === 'undefined'
    }
}

export { wfm }