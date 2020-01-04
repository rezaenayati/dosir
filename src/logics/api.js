import axios from 'axios';


const mainUrl = "http://37.152.189.54/api/v1/";

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
            url: `${mainUrl}account/doctor/create/`,
            data: body,
            crossDomain: true,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'POST'
            }
        })
        .then(response => resolve(response.data) )
        .catch((er) => reject(er))
    });

}

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
            url: `${mainUrl}account/login/`,
            data: body,
            crossDomain: true,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'POST'
            }
        })
        .then(response => resolve(response.data) )
        .catch((er) => reject(er))
    });
}

export const fetchDoctorInfo = async (access) => {
    console.log("axios");
    console.log(access);
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${mainUrl}account/doctor/info/`,
            crossDomain: true,
            headers:{
                'Authorization': `Bearer ${access}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': "POST, GET, PUT, OPTIONS, PATCH, DELETE"
            }
        })
        .then(response => resolve(response.data) )
        .catch((er) => reject(er))
    });
}

export const editDoctorInfo = async (access , doctor , editedDoctor) => { 
    console.log("editDoctorInfo");
    console.log(access);
    Object.assign(doctor , editedDoctor);
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: `${mainUrl}account/doctor/info/`,
            crossDomain: true,
            data: editedDoctor,
            headers:{
                'Authorization': `Bearer ${access}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'put'
            }
        })
        .then(response => console.log(response))
        .then(response => resolve(response.data) )
        .catch((er) => console.log(er))
    });

}

export const fetchPatientInfo = async (access) => {

    var data = JSON.stringify({
        'phone_num': '+989123555555'
    });

    console.log("enter fetch");

    console.log(access);
    
    

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${mainUrl}report/doctor/get-patient/`,
            data: data,
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${access}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'

            }
        }).then(response => console.log(response)).catch(err => console.log(err)).finally(res => console.log(res))
    });
}
