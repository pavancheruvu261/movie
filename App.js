import './App.css';
import { MovieList } from './MovieList';
import { ColorList } from './ColorList';
import {Link,Switch,Route } from "react-router-dom";
import {AddMovie} from './add-movie';
import {EditMovie} from './edit-movie'
import {useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import Paper from '@mui/material/Paper';

function App() 
{
  const INITIAL_MOVIES = [
    {
      name: "F.R.I.E.N.D.S",
      poster: "data:image/jpeg;base64,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",
      rating: 9.8,
      summary: `Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004,.`,
      trailer:"https://www.youtube.com/embed/SWUBRto1WZQ"
    },
    {
      name: "Bahubali_2",
      poster: "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      rating: 8.6,
      summary: `Bahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli, 
      cond cinematic part in the Baahubali franchise, it is the follow-up to Baahubali.`,
      trailer:"https://www.youtube.com/embed/qD-6d8Wo3do"
    },
    {
      name: "GabbarSingh", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Gabbar_singh_poster.jpg/220px-Gabbar_singh_poster.jpg",
      rating: 9.0,
      summary: `Gabbar Singh is a 2012 Indian Telugu-language action comedy film directed by Harish Shankar and produced by Bandla Ganesh.`,
      trailer:"https://www.youtube.com/embed/FpFoQPj4sgs"
    },
    {
      name: "Varudu Kavalenu",
      poster: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/varudukaavalenu-20210413173327-19669.jpg",
      rating: 7.0,
      summary: `Varudu Kaavalenu ( transl. Groom wanted) is a 2021 Indian Telugu-language romantic comedy film directed by debutant Lakshmi Sowjanya and produced by.`
    },
    {
      name: "Dybbuk",
      poster: "https://timesofindia.indiatimes.com/thumb/87282580.cms?width=219&height=317&quality=80&imgsize=11450",
      rating: 8.5,
      summary: `In Jewish mythology, a dybbuk is a malicious possessing spirit believed to be the dislocated soul of a dead person. It supposedly leaves the host body once it has accomplished its goal, sometimes after being exorcised.`
    },
    {
      name: "Avengers",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      rating: 10.0,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.`
    },
    {
      name: "Nethrikann", poster: "https://static.toiimg.com/photo/msid-85172504/Netrikann.jpg?85172504",
      rating: 7.5,
      summary: `Netrikann is an 2021 Indian Tamil-language crime thriller film, a remake of the 2011 South Korean film Blind. It centres around a blind police officer in search of a serial killer The film is directed by Milind Rau and produced by Vignesh Shivan under the banner of Rowdy Pictures.`
    }
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const history=useHistory();
  const [mode,setMode]=useState("dark")
  const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={theme}>
      <Paper  elevation={4} >
      {/* style={{minHeight:"100vh"}} */}
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Button startIcon={<HomeIcon />} color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button startIcon={<TheatersIcon />} color="inherit" onClick={()=>history.push("/Movie-List")}>Movie-List</Button>
          <Button startIcon={<AddIcon />} color="inherit" onClick={()=>history.push("/add-movie")}>Add_New_Movie</Button>
          <Button startIcon={<PaletteIcon />} color="inherit" onClick={()=>history.push("/Color-game")}>Color_Game</Button>
          <Button onClick={()=>setMode(mode==="light"?"dark":"light")} color="inherit" style={{marginLeft:"auto"}}>{mode==="light"?"dark":"light"} mode</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    
      {/* <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-movie">Add_Movie</Link></li>
        <li><Link to="/Movie-List">Movie_List</Link></li>
        <li><Link to="/Color-game">Color-Game</Link></li>
        </ul>
      </nav> */}
    {/* <Router>
      <Routes>
         <Route path="/" caseSensitive={false} element={<Welcome />} />
         <Route path="/Movie-list" caseSensitive={false} element={<MovieList />} />
         <Route path="Color-game" caseSensitive={false} element={<ColorList />} />
       </Routes>
    </Router> */}
  
    <Switch>
      <Route exact path="/">
      <Welcome /> 
      </Route>
      <Route exact path="/Color-game">
      <ColorList /> 
      </Route >
      <Route exact path="/Movie-List">
      <MovieList movies={movies} setMovies={setMovies}/>   
      </Route> 
      <Route exact path="/Movie-List/edit/:id">
       <EditMovie movies={movies} setMovies={setMovies}  />  
      </Route>

      <Route exact path="/add-movie">
      <AddMovie movies={movies} setMovies={setMovies}  />   
      </Route>
      <Route path="/Movie-List/:id">
        <MovieDetails movies={movies} />
      </Route>
      <Route path="**">
      <Notfound />   
      </Route>
    </Switch>
    </div>
  </Paper>
    </ThemeProvider>
    
  );
}
function Welcome()
{
  return(
    <div className="home"><h1>Welcome😍</h1></div>
  
  );
}

function Notfound(){
  return(
    <div>
      <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404 not found"/>
    </div>
  ) 
}

function MovieDetails({movies}){
  const { id }=useParams();
  const moviee =movies[id];

  return(
    <div>
        <h1>{moviee.name}</h1> 
        <iframe width="640" height="360" src={moviee.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
    
}

export default App;
