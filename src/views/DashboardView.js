// src/views/DashboardView.js

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MetricCard from '../components/MetricCard'; // Import the card
import mockData from '../data/mockData'; // Import the mock data
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TodayIcon from '@mui/icons-material/Today';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// --- Data Aggregation Logic ---
const totalPatients = mockData.patients.length;

const scheduledAppointments = mockData.appointments.filter(
  (app) => app.status === 'Scheduled'
).length;

const completedAppointments = mockData.appointments.filter(
  (app) => app.status === 'Completed'
).length;

const totalStaff = mockData.users.length;

function DashboardView() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>

      {/* Grid for Metric Cards */}
      <Grid container spacing={3}>
        
        {/* Card 1: Total Patients */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Patients"
            value={totalPatients}
            icon={<PeopleAltIcon />}
            color="primary.main"
          />
        </Grid>
        
        {/* Card 2: Scheduled Appointments */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Scheduled Appointments"
            value={scheduledAppointments}
            icon={<TodayIcon />}
            color="secondary.main"
          />
        </Grid>

        {/* Card 3: Completed Visits (Completed Appointments) */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Completed Visits"
            value={completedAppointments}
            icon={<CheckCircleOutlineIcon />}
            color="success.main"
          />
        </Grid>

        {/* Card 4: Total Staff/Doctors */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Staff"
            value={totalStaff}
            icon={<TrendingUpIcon />}
            color="error.main"
          />
        </Grid>

      </Grid>
      
      {/* Placeholder for Charts/Tables */}
      <Box sx={{ mt: 4, height: '400px', p: 3, border: '1px dashed #ccc', borderRadius: 2 }}>
        <Typography variant="h5" color="text.secondary">
            Charts and Detailed Reports will be built here next.
        </Typography>
      </Box>

    </Box>
  );
}

export default DashboardView;