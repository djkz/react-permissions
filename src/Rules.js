import { AddRule } from './components/Permissions/index.jsx';
import React from 'react';

// 
const [ADMIN, USER, GUEST] = [0,1,2]

const AddRules = ({}) => (
  [ 
    <AddRule name="canAddBorrower" condition={(deal, role) => { 
      if( role === GUEST ) return false;
      if( role === ADMIN ) return true;
      return deal.status !== 'paid_out';
    }} />
    ,
    <AddRule name="isGuest" condition={(deal, role) => { 
      if( role === GUEST ) return true;
      return false
    }} />,
  ]
    
)

export default AddRules;
