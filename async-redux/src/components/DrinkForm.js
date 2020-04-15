import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

const DrinkForm = (props) => {
  const handleGetData = (event) => {
    event.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>Making your drink...</div>
      ) : (
        <button onClick={handleGetData}>Pony Up</button>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(DrinkForm);
