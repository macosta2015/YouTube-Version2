import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import './Row&Column.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <div className="custom-box">
    {/* <Box sx={{ width: '100%', height: '100vh', backgroundColor: 'green' }}>       */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Item>4</Item>
        </Grid>
      </Grid>
    {/* </Box> */}
    </div>

  );
}