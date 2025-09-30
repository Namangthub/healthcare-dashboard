// src/data/mockData.js
 
export const usersData = [

    // Paste the full array of sample data from the 'Users' collection here

    {

      "_id": "user001",

      "full_name": "Dr. Eleanor Vance",

      "email": "eleanor.vance@hospital.com",

      "role": "Doctor",

      "department": "Cardiology",

      "is_active": true,

      "created_at": "2023-01-10T09:00:00Z"

    },

    {

      "_id": "user002",

      "full_name": "Dr. Michael Chen",

      "email": "michael.chen@hospital.com",

      "role": "Doctor",

      "department": "Neurology",

      "is_active": true,

      "created_at": "2023-03-22T11:00:00Z"

    }

];
 
export const patientsData = [

    // Paste the full array of sample data from the 'Patients' collection here

    {

      "_id": "pat7345",

      "first_name": "Alice",

      "last_name": "Johnson",

      "date_of_birth": "1985-11-15T00:00:00Z",

      "gender": "Female",

      "contact_number": "555-1234",

      "insurance_id": "INS001A",

      "primary_doctor_id": "user001"

    },

    {

      "_id": "pat7346",

      "first_name": "Robert",

      "last_name": "Davis",

      "date_of_birth": "1960-05-25T00:00:00Z",

      "gender": "Male",

      "contact_number": "555-5678",

      "insurance_id": "INS002B",

      "primary_doctor_id": "user002"

    }

];
 
export const appointmentsData = [

    // Paste the full array of sample data from the 'Appointments' collection here

    {

      "_id": "appmt9001",

      "patient_id": "pat7345",

      "doctor_id": "user001",

      "scheduled_at": "2024-10-01T10:00:00Z",

      "duration_minutes": 30,

      "type": "Checkup",

      "status": "Scheduled",

      "reason": "Routine cardiac checkup"

    },

    {

      "_id": "appmt9002",

      "patient_id": "pat7346",

      "doctor_id": "user002",

      "scheduled_at": "2024-09-29T14:30:00Z",

      "duration_minutes": 45,

      "type": "Consultation",

      "status": "Completed",

      "reason": "Follow-up for chronic pain"

    }

];
 
export const medicalRecordsData = [

    // Paste the full array of sample data from the 'MedicalRecords' collection here

    // ...

];
 
// Combine them into a single object for easy import

const mockData = {

    users: usersData,

    patients: patientsData,

    appointments: appointmentsData,

    medicalRecords: medicalRecordsData

};
 
export default mockData;
 