export const fakeFetchPatientInfo = async (phone) => {
    for(var i = 0; i < db.patients.length; i++){
        if(db.patients[i].phone_num !== phone)
            continue;
        else
            return db.patients[i];
    }
    return null;
}

const db = {
    patients: [
        {
            "phone_num": "09123555555",
            "first_name": "مهدی",
            "last_name": "همتی",
            "profile_pic": "",
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
            "phone_num": "09123555555",
            "first_name": "مهدی",
            "last_name": "همتی",
            "profile_pic": "",
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
            "phone_num": "09123555555",
            "first_name": "مهدی",
            "last_name": "همتی",
            "profile_pic": "",
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
            "phone_num": "09123555555",
            "first_name": "مهدی",
            "last_name": "همتی",
            "profile_pic": "",
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




