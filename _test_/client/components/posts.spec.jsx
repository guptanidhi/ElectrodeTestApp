import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import thunkMiddleware from "redux-thunk";

//import rootReducer from "../../../src/client/reducers/index";
import Posts from "../../../src/client/components/posts";
import {getPosts} from "../../../src/client/actions/index";
import reducer from "../../../src/client/reducers/index";



const store = createStore(
  reducer,
  {},
  applyMiddleware(thunkMiddleware)
);


getPosts()(store.dispatch).then((posts) => {
  console.log(posts);
  console.log(store.getState());
}).catch((error) => {
  console.log(error);
});



const component = mount(
  <Provider store={store}>
    <BrowserRouter>
      <Posts />
    </BrowserRouter>
  </Provider>
);

describe("Posts component", () => {
  it("Check initial rendering", () => {
    expect(component.find(".posts")).toHaveLength(0);
  });
  console.log(component.html());

});
