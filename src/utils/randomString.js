
export default function randomString(size=6){
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const arr = []
    for(let i = 0 ; i < size; i++){
        const randomIdx = Math.floor(Math.random() * size)
        arr.push(str[randomIdx])
    }
    return arr.join("")
}