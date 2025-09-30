// src/mockData.js
 
// Simulate the data we'd get from our database counts
export const dashboardMetrics = [
  {
    title: "Total Patients",
    value: 589, // From Patients collection count
    percentage: "+4.5%",
    color: "#4CAF50", // Green
    icon: "PeopleIcon"
  },
  {
    title: "Appointments Today",
    value: 45, // From Appointments where scheduled_at is today
    percentage: "-1.2%",
    color: "#2196F3", // Blue
    icon: "EventIcon"
  },
  {
    title: "Active Doctors",
    value: 15, // From Users collection where role is 'Doctor' and is_active is true
    percentage: "+0.5%",
    color: "#FF9800", // Orange
    icon: "LocalHospitalIcon"
  },
  {
    title: "Pending Lab Results",
    value: 7, // Simulated from a hypothetical LabResults collection
    percentage: "N/A",
    color: "#F44336", // Red
    icon: "ScienceIcon"
  },
];