export default function cookieSplitter(){
    let cookie
    const idArray = document.cookie.split(' @ ')
    const id = idArray[1]
    const token = idArray[0]
    cookie.id=id
    cookie.token=token
    return cookie
}