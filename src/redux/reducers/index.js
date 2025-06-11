import contactReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";

const rootReducer = {
  contacts: contactReducer,
  filters: filtersReducer,
};

export default rootReducer;
