export const createDoctor = async (phone, password, name, family) => {
    const dc = {
        "phone_num": "09124543212",
        "password": "1234",
        "first_name": "mr",
        "last_name": "roozo"
    };
    console.log(JSON.stringify(dc));
    
    // var data = new FormData();
    // data.append("phone_num", "+989121111111");
    // data.append("password", "1234");
    // data.append("first_name", "ali");
    // data.append("last_name", "mirferdos");

    // console.log(data);

    const response = await fetch('http://192.168.5.54:8000/api/v1/doctor/create' , {
        method: 'POST',
        body: JSON.stringify(dc)
    })
    .catch(err => {
        console.log("Nashood");
    })
    console.log(response);
    return response;
}


export const createDoctor2 = async (phone, password, name, family) => {
    var data = new FormData();
    data.append("phone_num", "+989121111111");
    data.append("password", "1234");
    data.append("first_name", "ali");
    data.append("last_name", "mirferdos");

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "http://192.168.7.159:8000/api/v1/doctor/create");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}



export const logInDoctor = async (phone, password) => {


    const doctor = {
        'phone_num': phone,
        'password': password
    }
    console.log("logInDocotr");
    const response = await fetch('http://192.168.43.46:8000/api/v1/login' , {
        method: 'POST',
        body: JSON.stringify(doctor) 
    })
    .catch(err => {
        console.log("Nashood");
    })
    console.log(response);
    return response;

}



export const logInDoctor2 = async (phone , password) => {
    
}





////////////////////////////////////////////////////////////////////
export const fetchDoctor = async email => {
    const response = await fetch(`http://localhost:4000/doctor?email=${email}`);
    const doctorUsers = await response.json();    
    console.log(doctorUsers);
    return doctorUsers[0]
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