import React from 'react';
import './App.scss';
import {Sum} from './index';
export const App = () => (
  <>
  <Sum {a = 10} />
  <Sum />
  <Sum {b = -5} />
  <Sum {a = 10} {b = 5} />
  <Sum {a = -10}  {b = -5}/>
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
