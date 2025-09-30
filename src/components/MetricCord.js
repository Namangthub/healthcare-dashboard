// src/components/MetricCard.js
 
import React from 'react';

import { Card, CardContent, Typography, Box } from '@mui/material';
 
function MetricCard({ title, value, icon, color }) {

  return (
<Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
<CardContent>

        {/* Icon and Title */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
<Box sx={{ color: color, mr: 1 }}>

            {icon}
</Box>
<Typography color="text.secondary" gutterBottom>

            {title}
</Typography>
</Box>

        {/* Main Value */}
<Typography variant="h4" component="div">

          {value}
</Typography>
</CardContent>
</Card>

  );

}
 
export default MetricCard;
 