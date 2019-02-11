import { combineReducers } from "redux";

const checkBox = (store, action) => {
  if (action.type === "TOGGLE_CHECK") {
    return {
      checked: !store.checked
    };
  }

  return store || { checked: false };
};

const number = (store, action) => {
  if (action.type === "INC_NUMBER") {
    return {
      value: store.value + 1
    };
  } else if (action.type === "DEC_NUMBER") {
    return {
      value: store.value - 1
    };
  }

  return store || { value: 0 };
};

const textarea = (store, action) => {
  if (action.type === "INPUT_TEXT_AREA") {
    return {
      value: action.value
    };
  }

  return store || { value: "" };
};

const vendorId = (store, action) => {
  if (action.type === "INPUT_VENDOR_ID") {
    return {
      value: action.value
    };
  }

  return store || { value: "" };
};

const selectedShippingAddress = (store, action) => {
  if (action.type === "SELECT_SHIPPING_ADDRESS") {
    return {
      value: action.value
    };
  }
  return store || { value: "0-13" };
};

const orderNum = (store, action) => {
  if (action.type === "INPUT_ORDER_NUM") {
    return {
      value: action.value
    };
  }
  return store || { value: "" };
};

const trackingNum = (store, action) => {
  if (action.type === "INPUT_TRACKING_NUM") {
    return {
      value: action.value
    };
  }
  return store || { value: "" };
};

export default combineReducers({
  checkBox,
  number,
  textarea,
  vendorId,
  orderNum,
  trackingNum,
  selectedShippingAddress
});
