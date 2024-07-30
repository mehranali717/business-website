'use client'
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CustomPagination() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={1}>
      <Pagination
        count={7}
        page={page}
        onChange={handleChange}
        shape="rounded"
        sx={{margin:'auto'}}
        style={{display:'flex', justifyContent:'center', marginTop:'44px'}}
      />
    </Stack>
  );
}

export default CustomPagination;
