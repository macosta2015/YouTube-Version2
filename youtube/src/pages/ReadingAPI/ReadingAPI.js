import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StandardImageList from '../../components/images';

import './ReadingAPI.css'

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

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
      <Grid class="father-grid">
        <Grid container className="centered-grid" 
          rowSpacing={1} 
          columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
  }}
> 
          <Grid item xs={12} sm={12} md={12} lg={3} xl={6}>
            <Item>
              <Typography>{message}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={6}>
            <Item>
              <StandardImageList />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={6} sx={{ display: { xs: 'none', sm: 'none', xl: 'block' } }}>

            <Item>
              4
            </Item>
          </Grid>
        </Grid>        
      </Grid>
    </div>

  );
}