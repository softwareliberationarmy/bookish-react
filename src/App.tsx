import React, { useEffect, useState } from 'react';
import  Typography  from '@mui/material/Typography';

import axios from 'axios';

import BookList from './BookList';
import {Book} from './types';
import { log } from 'console';

function App() {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/books')
    .then(res => {
      setBooks(res.data);
    })
    .catch(err => {
      console.log(err);      
    });
  }, []);

  return (
    <div>
    <Typography variant='h2' component='h2' data-test='heading'>
      Bookish
    </Typography>
    <BookList books={books} />
    </div>
  );
}

export default App;
