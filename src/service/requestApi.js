const BASE_URL = 'http://localhost:3001/api/v1';

const LOGIN_ENDPOINT = `${BASE_URL}/user/login`;
const GET_USER_DATA_ENDPOINT = `${BASE_URL}/user/profile`;
const UPDATE_USER_DATA_ENDPOINT = `${BASE_URL}/user/profile`;

export const signIn = async (email,password) => {
    try{
        const response = await fetch(LOGIN_ENDPOINT, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            completed: false
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })

        const data = await response.json();
        const token = data.body.token;
        return token;
    }catch(e){
        console.error(e.message)
    }  
};

export const getUserData = async (token) => {
    try{
        const response = await fetch(GET_USER_DATA_ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        const userData = data.body 
        return userData;
    }catch(e){
        console.log(e.message)
    }
}

export const updateUserData = async (token,userData,firstName,lastName) => {
    try{
        const response = await fetch(UPDATE_USER_DATA_ENDPOINT, {
            method: "PUT",
            body: JSON.stringify({
                firstName : firstName.length === 0 ? userData.firstName : firstName,
                lastName : lastName.length === 0 ? userData.lastName : lastName,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        return await response.json();
    }catch(e){
        console.log(e.message)
    }
}

