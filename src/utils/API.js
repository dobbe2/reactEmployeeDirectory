import axios from "axios";

export default {
    getRandomUsers:function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,email,phone,cell,picture,id")
    }
}