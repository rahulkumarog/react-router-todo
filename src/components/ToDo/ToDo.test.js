import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ToDo from './ToDo';

describe('ToDo', () => {
  let props;
  let shallowToDo;
  let renderedToDo;
  let mountedToDo;

  const shallowTestComponent = () => {
    if (!shallowToDo) {
      shallowToDo = shallow(<ToDo {...props} />);
    }
    return shallowToDo;
  };

  const renderTestComponent = () => {
    if (!renderedToDo) {
      renderedToDo = render(<ToDo {...props} />);
    }
    return renderedToDo;
  };

  const mountTestComponent = () => {
    if (!mountedToDo) {
      mountedToDo = mount(<ToDo {...props} />);
    }
    return mountedToDo;
  };  

  beforeEach(() => {
    props = {};
    shallowToDo = undefined;
    renderedToDo = undefined;
    mountedToDo = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
