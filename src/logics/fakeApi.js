export const fakeFetchPatientInfo = async (phone) => {
    for(var i = 0; i < db.patients.length; i++){
        if(db.patients[i].phone_num !== phone)
            continue;
        else
            return db.patients[i];
    }
    return null;
}

export const fakeFetchPatinetsList = async () => {
    return new Promise((resolve, reject) => {
        resolve(db.patients)
    });
    // console.log(db.patients);
    // return db.patients
}

const db = {
    patients: [
        {
            "phone_num": "09123555555",
            "first_name": "مهدی",
            "last_name": "همتی",
            "profile_pic": "http://uupload.ir/files/8byz_photo_2019-12-22_23-45-29.jpg",
            "birth_date": "1398/2/1",
            "gender": "مرد",
            "disease_history_duration": "درد بیدرمان",
            "education": "بی سواد",
            "job": "بیکار",
            "cause_of_siblings_death": "خیلی",
            "particular_disease": "زیاد",
            "allergies": "فراوان",
            "current_disease": "مرگ",
            "accident_experience": false,
            "blood_transition": false,
            "drug_consumption": false,
            "alcohol_consumption": false,
            "is_married": false,
            "PPD": false,
            "BIS": false,
            "pop_smear": false,
            "other_tests": false
        },
        {
            "phone_num": "09366666666",
            "first_name": "محمدرضا",
            "last_name": "روزگار",
            "profile_pic": "http://uupload.ir/files/3rvm_photo_2019-12-12_23-02-23.jpg",
            "birth_date": "1398/12/11",
            "gender": "مرد",
            "disease_history_duration": "درد بیدرمان",
            "education": "بی سواد",
            "job": "بیکار",
            "cause_of_siblings_death": "خیلی",
            "particular_disease": "زیاد",
            "allergies": "فراوان",
            "current_disease": "مرگ",
            "accident_experience": false,
            "blood_transition": false,
            "drug_consumption": false,
            "alcohol_consumption": false,
            "is_married": false,
            "PPD": false,
            "BIS": false,
            "pop_smear": false,
            "other_tests": false
        },
        {
            "phone_num": "09351234567",
            "first_name": "مصطفی",
            "last_name": "اشرفی",
            "profile_pic": "http://uupload.ir/files/cvbp_photo_2019-12-04_00-23-18.jpg",
            "birth_date": "1398/2/1",
            "gender": "مرد",
            "disease_history_duration": "درد بیدرمان",
            "education": "بی سواد",
            "job": "بیکار",
            "cause_of_siblings_death": "خیلی",
            "particular_disease": "زیاد",
            "allergies": "فراوان",
            "current_disease": "مرگ",
            "accident_experience": false,
            "blood_transition": false,
            "drug_consumption": false,
            "alcohol_consumption": false,
            "is_married": false,
            "PPD": false,
            "BIS": false,
            "pop_smear": false,
            "other_tests": false
        },
        {
            "phone_num": "09192121212",
            "first_name": "محمدرضا",
            "last_name": "رستگاران",
            "profile_pic": "http://uupload.ir/files/md0n_photo_2019-12-09_17-38-21.jpg",
            "birth_date": "1398/2/1",
            "gender": "مرد",
            "disease_history_duration": "درد بیدرمان",
            "education": "بی سواد",
            "job": "بیکار",
            "cause_of_siblings_death": "خیلی",
            "particular_disease": "زیاد",
            "allergies": "فراوان",
            "current_disease": "مرگ",
            "accident_experience": false,
            "blood_transition": false,
            "drug_consumption": false,
            "alcohol_consumption": false,
            "is_married": false,
            "PPD": false,
            "BIS": false,
            "pop_smear": false,
            "other_tests": false
        }
    ]
}




