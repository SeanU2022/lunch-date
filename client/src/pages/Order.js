import React from 'react';
import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
import OrderList from '../components/OrderList';

import { QUERY_THOUGHTS } from '../utils/queries';
import { QUERY_ORDERS } from '../utils/queries';

const Home = () => {
const { loading, data } = useQuery(QUERY_ORDERS);
  const orders = data?.orders || [];

  return (
    <main>
      <div className="flex-row justify-center">
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div> */}


        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <OrderList
              orders={orders}
              title="Getting Hungry?..."
            />
          )}
        </div>

        
      </div>
    </main>
  );
};

export default Home;
