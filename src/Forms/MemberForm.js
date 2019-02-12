import React, { Component } from 'react';

class MemberForm extends Component {
  render() {
    return (
      <form>
          <h3>Type of Membership</h3> <input type="text"/>
          <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MemberForm;