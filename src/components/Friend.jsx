import React from 'react';
import Button from './Button';

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const txtColor =
    friend.balance < 0 ? 'red' : friend.balance > 0 ? 'green' : '';

  const txt =
    friend.balance < 0
      ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
      : friend.balance > 0
      ? `${friend.name} owes you $${Math.abs(friend.balance)}`
      : `You and ${friend.name} are even`;

  const isSelected = selectedFriend?.id === friend.id;

  ///////////////////////////////
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img alt={friend.name} src={friend.image} />
      <h3>{friend.name}</h3>
      <p className={txtColor}>{txt}</p>

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;
