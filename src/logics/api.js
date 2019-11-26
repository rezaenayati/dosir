import axios from 'axios';

export const createDoctor = async (phone, password, name, family) => {

    let formData = new FormData();
    formData.append("phone_num", phone);
    formData.append("password", password);
    formData.append("first_name", name);
    formData.append("last_name", family);
    
    console.log();
    
    const response = await fetch('http://127.0.0.1:8000/api/v1/doctor/create' , {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
        headers: {'Content-Type': 'multipart/form-data; boundary=764284731520932820366877'}
    })
    .catch(err => {
        console.log("Nashood");
    })
    console.log(response);
    return response;
}


export const createDoctor2 = async (phone, password, name, family) => {

    var bodyFormData = new FormData();
    bodyFormData.set("phone_num", "+989124541112");
    bodyFormData.set("password", "1234");
    bodyFormData.set("first_name", "reza");
    bodyFormData.set("last_name", "enayati");
    return new Promise((resolve, reject) => {
            let url = "http://127.0.0.1:8000/api/v1/doctor/create";
            axios.post(url)
              .body(bodyFormData)
              .headers({'Content-Type': 'multipart/form-data' })
              .then(({ data }) => {
                // cache.photos = data;
                // cache.timestamp = new Date();
                console.log(data);
                return data;
              })
              .then(data => resolve(data))
              .catch(e => reject(e));
    });
}










export const fetchPost = id => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/photos?id=${id}`)
        .then(({ data }) => resolve(data[0]))
        .catch(e => reject(e));
    });
};











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




//////////////////////











export const logInDoctor43567 = async (phone, password) => {
      var bodyFormData = new FormData();
      bodyFormData.append("phone_num", "+989124541112");
      bodyFormData.append("password", "1234");

    console.log("logInDocotr");
    
    fetch('http://127.0.0.1:8000/api/v1/login' , {
        method: 'POST',
        body: bodyFormData,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/form-data', 
            'Access-Control-Allow-Origin': '*',
            "Accept": '*/*',
        }
    }).then(response => {console.log(response)})
    .catch(err => { 
        console.log("Nashood");
    })
}



export const logInDoctor31312 = async (phone , password) => {

    var data = JSON.stringify({
        "phone_num": "+989192007074",
        "password": "1234"
      });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "http://127.0.0.1:8000/api/v1/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.withCredentials = true;
    // xhr.onreadystatechange = someHandler;
    xhr.send(data);
    
}

////////////////////////////// end of login methods























////////////////////////////////////////////////////////////////////
export const fetchDoctor = async email => {
    // console.log(email);
    
    // const response = await fetch(`http://localhost:4000/doctor?email=${email}`)
    // .catch(err => {
    //     console.log("Nashood");
    //     return false
    // });
    // const doctorUsers = await response.json();    
    // console.log(doctorUsers[0]);
    // return doctorUsers[0]
}

export const editDoctor = async (email , inputData) => {
    const response = await fetch(`http://localhost:4000/doctor?email=${email}`);
    const doctorUsers = await response.json();
    const id = doctorUsers[0].id;    
    Object.assign(doctorUsers[0] , inputData);
    // console.log(doctorUsers);
    console.log(inputData);


    const rsp = await fetch(`http://localhost:4000/doctor/${id}` , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctorUsers[0])
    })
    .catch(err => {
        console.log("Nashood");
    })
    console.log(rsp);
    return rsp;
}


export const postNewDoctor = async (doctor) => {
    console.log(doctor);
    
    const rsp = await fetch(`http://localhost:4000/doctor/` , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    })
    .catch(err => {
        console.log("Nashood");
    })
    console.log("raftim tosh");
    
    console.log(rsp);
    return rsp;
}