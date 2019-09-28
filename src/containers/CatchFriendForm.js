import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatefriendFormData } from '../actions/friendform'

class CatchFriendForm extends Component {

  state = {
  	friendname: '',
  	contact: '',
  	reached_out: ''
  } 
  

  handleOnChange = event => {

    const { name, value} = event.target;

    const currentFormData = Object.assign({}, this.props.friendFormData, {
      [name]: value
    });

    this.props.updatefriendFormData(currentFormData);
  }

  handleOnSubmit = event => {

    event.preventDefault();
    this.setState({ 
	    friendname: '',
	  	contact: '',
	  	reached_out: ''
	  });

  };



  render() {

    const {friendname, contact, reached_out} = this.props.friendFormData;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form 
                className="form-horizontal" 
                onSubmit={this.handleOnSubmit}>

                  <div className="form-group" >
                    <label htmlFor="friendname" className="col-md-4 control-label">Friend Name</label>
                    <div className="col-md-6">
                      <textarea
                        className="form-control"
                        type="text"
                        name="friendname"
                        onChange={this.handleOnChange} 
                        value={friendname}/>
               
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact" className="col-md-4 control-label">Contact </label>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="text"
                        name="contact"
                         onChange={this.handleOnChange} 
                         value={contact}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reached_out" className="col-md-2 control-label">Reached out? </label>
                    <div className="col-md-2">
                      <input
                        className="form-control"
                        type="checkbox"
                        name="reached_out"
                         onChange={this.handleOnChange} 
                         value={reached_out}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    friendFormData: state.friendFormData
  })

}



export default connect(mapStateToProps, {updatefriendFormData})(CatchFriendForm);
