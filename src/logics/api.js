import axios from 'axios';

export const createDoctor = async (phone, password, name, family) => {

    console.log("axios");
    var body = JSON.stringify({
        "phone_num": phone,
        "password": password,
        "first_name": name,
        "last_name": family
    });
    console.log(phone);
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/v1/doctor/create',
            data: body,
            crossDomain: true,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            }
        })
        .then(response => resolve(response.data) )
        .catch((er) => reject(er))
    });

}

////////////// Log In Methods

///////////////this method works only in development mode

export const logInDoctor = async (phone, password) => {
    console.log("axios");
    var body = JSON.stringify({
        "phone_num": phone,
        "password": password
    });
    console.log(phone);
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/v1/login',
            data: body,
            crossDomain: true,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            }
        })
        .then(response => resolve(response.data) )
        .catch((er) => console.log(er))
    });
}



export const fetchDoctorInfo = async (access) => {
    console.log("axios");
    console.log(access);
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/v1/doctor/info',
            crossDomain: true,
            headers:{
                'Authorization': 'Bearer ' + access,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            }
        })
        .then(response => resolve(response.data) )
        .catch((er) => console.log(er))
    });
}

export const editDoctor = { 
    
}