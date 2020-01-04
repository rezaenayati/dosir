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
export const fakeDoctorInfoForReportElement = async (phone) => {

}

export const fakeFetchPatinetsList = async () => {
    // return new Promise((resolve, reject) => {
    //     resolve(db.patients)
    // });
    // // console.log(db.patients);
    // return db.patients
}



