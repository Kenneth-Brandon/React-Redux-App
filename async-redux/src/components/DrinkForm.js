import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

const DrinkForm = (props) => {
  const handleGetData = (event) => {
    event.preventDefault();
    props.getData();
  };

  return (
    <div>
      {props.isFetchingData ? (
        <div>Making your drink...</div>
      ) : (
        <div>
          <button onClick={handleGetData}>Pony Up</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
    count: state.count,
  };
};

export default connect(mapStateToProps, { getData })(DrinkForm);
