import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const GridComponent = () => {
  const renderGridItem = (content) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        sx={{
          padding: 2,
          textAlign: 'center',
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        <Typography variant="h6">{content}</Typography>
      </Paper>
    </Grid>
  );

  return (
    <div>
      <Grid container spacing={3}>
        {renderGridItem('Grid Item 1')}
        {renderGridItem('Grid Item 2')}
        {renderGridItem('Grid Item 3')}
        {renderGridItem('Grid Item 4')}
        {renderGridItem('Grid Item 5')}
        {renderGridItem('Grid Item 6')}
        {renderGridItem('Grid Item 7')}
        {renderGridItem('Grid Item 8')}
      </Grid>
    </div>
  );
};

export default GridComponent;
