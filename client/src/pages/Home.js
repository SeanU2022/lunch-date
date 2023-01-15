import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth'

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import { Navigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { QUERY_THOUGHTS } from '../utils/queries';
import Landing from '../components/Landing';
import Container from './Container';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  if(!Auth.loggedIn()){
    return(
      <main>
        <Navigate replace to="/login" />
      </main>
    )
  }
  else{
    return(
      <main>
      <div>
        <Landing/> 
      </div>

      </main>

    )
  }
  // return (
  //   <main>
  //     <div className="flex-row justify-center">
  //     if (!Auth.loggedIn()) {
  //     } else {
  //       (
  //       }

  //       {/* <Container/> */}

  //       {/* <div
  //         className="col-12 col-md-10 mb-3 p-3"
  //         style={{ border: '1px dotted #1a1a1a' }}
  //       >
  //         <ThoughtForm />
  //       </div> */}
  //       {/* <div className="col-12 col-md-8 mb-3">
  //         {loading ? (
  //           <div>Loading...</div>
  //         ) : (
  //           <ThoughtList
  //             thoughts={thoughts}
  //             title="Some Feed for Thought(s)..."
  //           />
  //         )}
  //       </div> */}
  //     </div>
  //   </main>
  // );
};

export default Home;
