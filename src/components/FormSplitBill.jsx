import React, { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  ///////////////////////////////
  const paidByFriend = bill ? bill - paidByUser : '';

  ///////////////////////////////
  const handleSubmit = function (e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  ///////////////////////////////
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <div className="form-items">
        <h2>
          Split a bill with <span>{selectedFriend.name}</span>
        </h2>

        <label>💰 Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={e => setBill(Number(e.target.value))}
        />

        <label>🧍Your expense</label>
        <input
          type="number"
          value={paidByUser}
          onChange={e =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />

        <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense:</label>
        <input type="number" value={paidByFriend} disabled />

        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={e => setWhoIsPaying(e.target.value)}
        >
          <option value="user">🧍You</option>
          <option value="friend">🧑‍🤝‍🧑{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
      </div>
    </form>
  );
};

export default FormSplitBill;
