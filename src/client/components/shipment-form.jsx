import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Nav } from "./nav";
import { inputVendorId, inputOrderNum, inputTrackingNum, selectShippingAddress } from "../actions";
import custom from "../styles/custom.css"; // eslint-disable-line no-unused-vars
import shipmentFormStyle from "../styles/shipment-form.css"; // eslint-disable-line no-unused-vars

class ShipmentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendorId: { value: "" },
      trackingNum: { value: "" },
      orderNum: { value: "" },
      selectedShippingAddress: { value: "0-13" }
    };
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div styleName={"custom.container"}>
        <Nav {...this.props} />
        <div styleName={"shipmentFormStyle.container"}>
          <h2>Add A Shipment</h2>
          <form>
            <fieldset>
              <label htmlFor="vendorId">Vendor ID</label>
              <input
                type="text"
                placeholder="Vendor ID"
                id="vendorIdField"
                value={this.props.vendorId}
                onChange={event => {
                  dispatch(inputVendorId(event.target.value));
                }}
              />

              <label htmlFor="trackingNum">Tracking Number</label>
              <input
                type="text"
                placeholder="e.g 1234 5678 9101"
                id="trackingNum"
                value={this.props.trackingNum}
                onChange={event => dispatch(inputTrackingNum(event.target.value))}
              />

              <label htmlFor="orderNum">Order Number</label>
              <input
                type="text"
                placeholder="e.g N8992838923"
                id="orderNum"
                value={this.props.orderNum}
                onChange={event => dispatch(inputOrderNum(event.target.value))}
              />

              <label htmlFor="shippingAddressField">Shipping Address</label>
              <select
                id="selectedShippingAddress"
                onChange={event => {
                  dispatch(selectShippingAddress(event.target.value));
                }}
                value={this.props.selectedShippingAddress}
              >
                <option value="0-13">0-13 month</option>
              </select>


              <input type="submit" value="Add Shipment" />
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

ShipmentForm.propTypes = {
  vendorId: PropTypes.string,
  trackingNum: PropTypes.string,
  orderNum: PropTypes.string,
  shippingAddress: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    vendorId: state.vendorId.value,
    trackingNum: state.trackingNum.value,
    orderNum: state.orderNum.value,
    selectedShippingAddress: state.selectedShippingAddress.value
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(ShipmentForm);
