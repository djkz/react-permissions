import { AddRule } from './components/Permissions/index.jsx';
import React from 'react';

// 
const [ADMIN, USER, GUEST] = [0,1,2]

const AddRules = ({}) => (
  [ 
    <AddRule key={1} name="canAddBorrower" condition={(deal, role) => { 
      if( role === GUEST ) return false;
      if( role === ADMIN ) return true;
      return deal.status !== 'paid_out';
    }} />
    ,
    <AddRule key={2} name="isGuest" condition={(deal, role) => { 
      if( role === GUEST ) return true;
      return false
    }} />,
  ]
    
)

export default AddRules;
