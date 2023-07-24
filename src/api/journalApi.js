import  axios  from "axios";

const journalApi = axios.create({
    baseURL:'https://diario-vuex-default-rtdb.firebaseio.com'
})

export default journalApi