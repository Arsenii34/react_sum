import { createRoot } from 'react-dom/client';

import { App } from './App';
export const Sum = ({a = 0, b = 0, }) => {
    let sum = a + b;
    return(
    <p>{`Sum of ${a} and ${b} is ${sum}`}</p>)
};
createRoot(document.getElementById('root')).render(<App />);


