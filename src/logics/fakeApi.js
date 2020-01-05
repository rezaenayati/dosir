import axios from 'axios';


export const fakePostReport = async (
        doctor_phone, 
        doctor_first_name,
        doctor_last_name,
        doctor_title,
        patient_phone, 
        date, 
        next_date, 
        clinical_findings, 
        prescreption, 
        actions, 
        final_diagnosis) => {
    const re =  JSON.stringify({
        "doctor_phone": doctor_phone,
        "doctor_first_name": doctor_first_name,
        "doctor_last_name": doctor_last_name,
        "doctor_title": doctor_title,
        "patient_phone": patient_phone,
        "date": date,
        "next_date": next_date,
        "clinical_findings": clinical_findings,
        "prescreption": prescreption,
        "actions": actions,
        "final_diagnosis": final_diagnosis
    });
    const res = await fetch(`https://murmuring-atoll-41693.herokuapp.com/reports` , {
        method: 'POST',
        body: re,
        headers: {
            'Content-Type': 'application/json'
          },
      
    })   
    const result = await res.json();
    return result

}

export const fakeFetchPatientInfo = async (phone) => {
    const res = await fetch(`https://murmuring-atoll-41693.herokuapp.com/patients?phone_num=${phone}`)   
    const result = await res.json();
    return result[0]
}

export const fakeFetchReportList = async (phone) => {
    const res = await fetch(`https://murmuring-atoll-41693.herokuapp.com/reports?patient_phone=${phone}`)
    const result = await res.json();
    return result
}

export const fakeFetchPatinetsList = async (phone) => {
    const res = await fetch(`https://murmuring-atoll-41693.herokuapp.com/reports?doctor_phone=${phone}`)
    const result = await res.json();
    var patients = [];
    for(var i = 0 ; i < result.length ; i++){
        var {patient_phone} = result[i];
        var bool = true
        for(var j = 0 ; j < patients.length ; j++){
            if(patient_phone === patients[j].phone_num){
                bool = false;
                break;
            }
        }
        if(!bool){
            bool = true;
            continue;
        }
        const patient = await fakeFetchPatientInfo(patient_phone);
        patients.push(patient)
    }
    console.log(patients);
    return patients
    // return new Promise((resolve, reject) => {
    //     axios({
    //         method: 'get',
    //         url: `https://murmuring-atoll-41693.herokuapp.com/reports?doctor_phone=${phone}`,
    //         headers:{
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(response => console.log(response.data))
    //     .catch((er) => reject(er))
    // });
}



