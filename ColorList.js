import { ColorBox } from './ColorBox';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function ColorList() {
  const [paint, setColor] = useState("");
  const styles = { backgroundColor: paint, color: "black" };
  const INITIAL_COLORS = [];
  const [colors, setColors] = useState(INITIAL_COLORS);
  return (
    <div className="color">

      <TextField
        value={paint}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        id="outlined-required"
        label="Enter Color" />
      <Button onClick={() => setColors([...colors, paint])} variant="contained">Add Color</Button>

      {colors.map((col, index) => (
        <ColorBox key={index} paint={col} />
      ))}
    </div>
  );
}
