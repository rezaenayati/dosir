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