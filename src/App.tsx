import { Button, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


interface CarModel {
  id: number;
  name: string;
}

const futureCars: CarModel[] = [
  {
    id: 1,
    name: 'Volkswagen'
  },
  {
    id: 2,
    name: 'BMW'
  },
  {
    id: 3,
    name: 'Toyota'
  },
  {
    id: 4,
    name: 'Nissan'
  },
  {
    id: 5,
    name: 'General Motors'
  },
  {
    id: 6,
    name: 'Hyundai'
  },
  {
    id: 7,
    name: 'Peugeot'
  },
  {
    id: 8,
    name: 'Kia'
  },
  {
    id: 9,
    name: 'Volvo'
  },
  {
    id: 10,
    name: 'Mazda'
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

function App() {
  const defaultSelected = [7, 8];
  const [initialChecked, setInitialChecked] = useState(defaultSelected);
  const [initialList, setInitialList] = useState(futureCars);
  const [applyButtonAppear, setApplyButtonAppear] = useState(false);
  const classes = useStyles();

  const handleChange = (id: any) => {
    setApplyButtonAppear(true);
    if (initialChecked.includes(id))
      setInitialChecked(initialChecked.filter(item => +item !== +id));
    else
      setInitialChecked([...initialChecked, id]);
  };

  useEffect(() => {
    if (initialChecked.sort().toString() == defaultSelected.sort().toString()) {
      setApplyButtonAppear(false);
      setInitialList(futureCars);
    }
  }, [initialChecked])

  const resetFunc = () => {
    setInitialChecked([7, 8]);
    setInitialList(futureCars);
    setApplyButtonAppear(false);
  }

  const applyChanges = () => {
    const Checked = initialList.filter(item => initialChecked.find(itemm => item.id === itemm))
    const UnChecked = initialList.filter(item => !Checked.includes(item))
    setInitialList([...Checked, ...UnChecked]);
  }

  return (
    <div className="App">

      <header>
        <h2>Future Cars</h2>
      </header>
      <div className='button_div'>
        <Button onClick={resetFunc} variant="outlined" color="secondary">RESET</Button>
        {applyButtonAppear &&
          <Button onClick={applyChanges} variant="outlined" color="primary">APPLY CHANGES</Button>}
      </div>
      <div className="table">
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {initialList.map((item) => {
              return (
                <div key={item.id} className="button_div">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={initialChecked.includes(item.id)}
                        onChange={() => handleChange(item.id)}
                        name={item.name} />
                    }
                    label={item.name}
                  />
                  <Typography variant="body2">{item.id}</Typography>
                </div>
              )
            })}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default App;


