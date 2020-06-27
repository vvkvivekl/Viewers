import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@ohif/ui';

const ContextMenu = ({ items, onClick }) => {
  return (
    // position: relative;
    // background-color: white;
    // border-radius: 5px;
    // z-index: 1000;
    // display: block;
    // width: 170px;
    <div
      className="relative bg-secondary-dark rounded z-50 block w-48"
      onContextMenu={e => e.preventDefault()}
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className="flex px-4 py-2 cursor-pointer items-center transition duration-300 hover:bg-primary-dark border-b border-primary-dark last:border-b-0"
        >
          <Typography>{item.label}</Typography>
        </div>
      ))}
    </div>
  );
};

ContextMenu.defaultProps = {
  items: [
    {
      label: 'Delete measurement',
      actionType: 'Delete',
      onClick: e => console.log('delete'),
    },
    {
      label: 'Relabel',
      actionType: 'Relabel',
      onClick: e => console.log('Relabel'),
    },
    {
      label: 'Test',
      actionType: 'Delete',
      onClick: e => console.log('Delete'),
    },
  ],
};

ContextMenu.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default ContextMenu;
