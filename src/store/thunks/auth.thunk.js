import axios from 'axios'


export const createUser = ({ user }) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    return async () => {
        try {
            const { data } = await axios.post(url, user)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}
