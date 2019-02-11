export const toggleCheck = () => {
  return {
    type: "TOGGLE_CHECK"
  };
};

export const incNumber = () => {
  return {
    type: "INC_NUMBER"
  };
};

export const decNumber = () => {
  return {
    type: "DEC_NUMBER"
  };
};

export const inputVendorId = value => {
  return {
    type: "INPUT_VENDOR_ID",
    value
  };
};

export const inputTrackingNum = value => {
  return {
    type: "INPUT_TRACKING_NUM",
    value
  };
};

export const inputOrderNum = value => {
  return {
    type: "INPUT_ORDER_NUM",
    value
  };
};

export const selectShippingAddress = value => {
  return {
    type: "SELECT_SHIPPING_ADDRESS",
    value
  };
};
