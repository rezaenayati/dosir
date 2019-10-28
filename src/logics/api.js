export const fetchDoctor = async email => {
    const response = await fetch(`http://localhost:4000/doctor?email=${email}`);
    const doctorUsers = await response.json();    
    console.log(doctorUsers);
    return doctorUsers[0]
}