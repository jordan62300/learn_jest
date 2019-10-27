export async function sleep (t) {
    return new Promise((resolve , reject) => {
        window.setTimeout(() => {
        resolve('hello')
        }, t * 1000)
    })
}