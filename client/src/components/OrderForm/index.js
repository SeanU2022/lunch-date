import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// import { ADD_ORDER } from '../../utils/mutations';
import { QUERY_ORDERS } from '../../utils/queries';

import Auth from '../../utils/auth';

const OrderForm = () => {

  const [month, setMonthText] = useState('');
  const [plannedDate, setPlannedDateText] = useState('');
  const [plannedDayOfYearNumber, setPlannedDayOfYearNumber] = useState('');
  const [plannedWeekOfYearNumber, setPlannedWeekOfYearNumber] = useState('');
  const [plannedDayOfMonthNumber, setPlannedDayOfMonthNumber] = useState('');
  const [plannedDayOfWeekNumber, setPlannedDayOfWeekNumber] = useState('');
  const [plannedDayOfWeek, setPlannedDayOfWeek] = useState('');
  const [quantity, setQuantity] = useState('');  
  const [todaysMeal, setTodaysMeal] = useState('');  
  const [orderText, setOrderText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  // const [addOrder, { error }] = useMutation(ADD_ORDER, {
  //   update(cache, { data: { addOrder } }) {
  //     try {
  //       const { orders } = cache.readQuery({ query: QUERY_ORDERS });

  //       cache.writeQuery({
  //         query: QUERY_ORDERS,
  //         data: { orderss: [addOrder, ...orders] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // update me object's cache
  //     // const { me } = cache.readQuery({ query: QUERY_ME });
  //     // cache.writeQuery({
  //     //   query: QUERY_ME,
  //     //   data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
  //     // });
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addOrder({
        variables: {
          month,
          plannedDate,
          plannedDayOfYearNumber,
          plannedWeekOfYearNumber,
          plannedDayOfMonthNumber,
          plannedDayOfWeekNumber,
          plannedDayOfWeek,
          quantity,
          todaysMeal,
          orderText
        },
      });

      setMonthText('');
      setPlannedDateText('');
      setPlannedDayOfYearNumber('');
      setPlannedWeekOfYearNumber('');
      setPlannedDayOfMonthNumber('');
      setPlannedDayOfWeekNumber('');
      setPlannedDayOfWeek('');
      setQuantity('');
      setTodaysMeal('');
      setOrderText('');

    } catch (err) {
      console.error(err);
    }
  };

  // to  finish

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }
  // };

  return (
    <div>
      <h3>Hungry?</h3>
  {/* // to  finish */}
      {/* {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )} */}
    </div>
  );
};

export default OrderForm;
