import React, { Component } from 'react';

class ProductsForm extends Component {
  render() {
    return (
      <from>
      <h2>Product Details</h2>  
      <h3>Product Title: </h3> <input type="text"/>
      <p>Descriptions</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <select name="" id="">
      <option value=""> test 1</option>
      <option value=""> test 2</option>
      <option value=""> test 3</option>
      </select>
      </from>
    );
  }
}

export default ProductsForm;