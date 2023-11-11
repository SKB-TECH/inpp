import axios from "axios";

export const stockageData = (cle,data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(cle, JSON.stringify(data))
    }
}
export const removeStorageData = (cle) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(cle)
    }
}
// suppression localstorage
export const ClearStorage = (cle) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(cle)
    }
}

// recuperation localstorage
export const recupereStorage = (cle) => {
    let data = ''
    if (typeof window !== 'undefined') {
        try {
            const datalocal = localStorage.getItem(cle);
            if (datalocal) {
                data = JSON.parse(datalocal)
            }
        } catch (e) {
            return null
        }
    }
    return data;
}



export const login=async(datas)=>{
        try {
            const BASIC_URL = String(process.env.NEXT_PUBLIC_URL);
            const reponse = await axios.post(
                `${BASIC_URL}compte/user/login`, datas
            );
            const {data} =reponse;
            const is=true;
            if(reponse.status===201) {
                stockageData('islog',true)
                stockageData('token', reponse.data);
            }
            else{
                stockageData('isExist',!is)
            }
            return data;
        } catch (error) {
            console.log(error)
      }
    }

export const New_visite=async (datas)=>{
        try {
            const BASIC_URL = String(process.env.NEXT_PUBLIC_BASE_URL);
            const reponse = await axios.post(`${BASIC_URL}visite/new_visite`, datas);
            const {data} = reponse;
            if(reponse.status === 201) stockageData("send",true);
            return data;
        } catch (error) {
            console.log(error)
    }
  }

// valider visite
export const Valide=async(id) => {
        try {
            // @ts-ignore
            const BASIC_URL = String(process.env.NEXT_PUBLIC_BASE_URL);
            const reponse = await axios.put(`${BASIC_URL}visite/valide_visite/${id}`);
            const {data} = reponse; if(reponse.status===201) stockageData("valide",true);
            return data;
        } catch (error) {
           console.log(error)
        }
 } 

// delete account
export const  Allvisites= async()=>{
    try {
        // @ts-ignore
        const BASIC_URL = String(process.env.NEXT_PUBLIC_BASE_URL);
        const reponse = await axios.get(`https://api-kinnp.onrender.com/api/v1/visite/getallvisite`,{
            headers:{
                'Accept': 'application/json'
            }
        });
        const {data} =  reponse; 
        stockageData("demandes",reponse.data?.data);
        return data;
    } catch (error) {
        console.log(error)
}}