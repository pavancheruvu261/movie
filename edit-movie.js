import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useHistory, useParams} from 'react-router-dom';


export function EditMovie({movies,setMovies}){
  const {id}=useParams();
  const movie=movies[id];
  console.log(id,movie);
    
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const history=useHistory();
  const resetForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };
  const addMovie = () => {
    console.log({ name, poster, rating, summary });
    const updateMovies = { name, poster, rating, summary };
    const copyMovies=[...movies]
    copyMovies[id]=updateMovies
    setMovies(copyMovies);
    resetForm();
    history.push("/Movie-List")
    

  };
    return(
    <div className="add-movie">
        <TextField value={name} onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
        <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Poster_url" variant="outlined" />
        <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
        <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
        <Button onClick={addMovie} variant="contained" color="success">Save</Button>
        <Button onClick={()=>history.goBack()} variant="contained">Back</Button>
      </div>
    );
}