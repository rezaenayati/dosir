export const fakePostReport = async (report) => {
    const re =  JSON.stringify({
        "doctor_phone": "09198307074",
        "patient_phone": "09123555555",
        "date": "1398/12/2",
        "next_date": "1399/3/3",
        "clinical_findings": "هیچی",
        "prescreption": [
          {
            "number": 1,
            "name": "مرگ موش",
            "dose": "کم"
          }
        ],
        "actions": "هیچی",
        "final_diagnosis": "مرگ"
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

export const fakeFetchPatinetsList = async () => {
    // return new Promise((resolve, reject) => {
    //     resolve(db.patients)
    // });
    // // console.log(db.patients);
    // return db.patients
}



