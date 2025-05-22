import axiosConfig from "../../DB/AxiosConfig";


export const getAllStores = async () => {
    try {
        const response = await axiosConfig.get('/stores')
        return response.data
    } catch (error) {

        console.error("Error fetching stores:", error);
        throw error; 
    }
}