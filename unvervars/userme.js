import axios from "axios"

export function userme(){
    axios.get("http://165.232.127.62:5001/usersme", {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}).then((res) => {
    // console.log(res.data)
    return (res.data)
})}