import './App.css';
import Card from '@mui/material/Card';
import CheckIcon from '@mui/icons-material/Check';
import {useState} from 'react';

import { data } from './data';

export const App = () => {
  const currentLocalHour = new Date().getHours();
  const currentDataset = currentLocalHour < 12 ? data.morning: data.evening;

  const [todos, setTodos] = useState(currentDataset);

  const handleClick = (itemId) => {
    const currentItem = {...todos[itemId], complete: true};
    const updatedData = [...todos.filter(item => item.id !== itemId), currentItem].sort((a, b) => a.id - b.id);

    setTodos(updatedData);
  };

	return (
		<div className='container'>
			{todos.map((item) => (
				<Card sx={{ minWidth: 275 }} key={item.id}>
          <div className='card' onClick={() => handleClick(item.id)} style={{ backgroundImage: `url(${item.img})` }}>
            <CheckIcon className={ item.complete ? 'check__icon show' : 'check__icon'}  color={'success'} fontSize='inherit'/>
          </div>
				</Card>
			))}
		</div>
	);
};

export default App;
