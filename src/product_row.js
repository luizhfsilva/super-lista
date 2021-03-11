'use strict';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td><input class="quantity" type="number"/></td>
        <td class="unity">{ props.item.unity }</td>
        <td class="name">{ item.name }</td>
      </tr>
    );
  }
}

let domContainer = document.getElementById('product_row_container');
ReactDOM.render(<ProductRow />, domContainer);
