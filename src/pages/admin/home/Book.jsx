import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PackageBook({ data }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/admin/book', { state: { id: data.id } });
  };
  return (
    <div>
      <Button
        variant="contained"
        color="info"
        size="small"
        onClick={handleClick}
      >
        Book
      </Button>
    </div>
  );
}
