import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useHistory} from 'react-router-dom';


export function AddMovie({movies,setMovies}){
    
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const history=useHistory();
  const resetForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };
  const addMovie = () => {
    console.log({ name, poster, rating, summary });
    const newMovie = { name, poster, rating, summary };
    setMovies([...movies, newMovie]);
    resetForm();
    

  };
    return(
    <div className="add-movie">
        <TextField value={name} onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
        <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Poster_url" variant="outlined" />
        <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
        <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
        <Button onClick={addMovie} variant="contained">Add Movie</Button>
        <Button onClick={()=>history.goBack()} variant="contained">Back</Button>
      </div>
    );
}