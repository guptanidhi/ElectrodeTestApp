import React from "react";
import { mount } from "enzyme";
import PagewithProps from "client/components/pageWithProps";
import Notifications from "react-notify-toast";
import { MemoryRouter } from 'react-router';

describe("PagewithProps", () => {
  let component;
  // let container;

  beforeEach(() => {
    // container = document.createElement("div");
  });

  beforeAll(() => {
    component = mount(<MemoryRouter><PagewithProps /></MemoryRouter>);
  });

  afterEach(() => {
    // ReactDOM.unmountComponentAtNode(container);
  });

  it("component renders", () => {
    expect(component).toBeTruthy();
  });

  it("component should contain Notifications Component", () => {
    expect(component.find(Notifications)).toHaveLength(1)
  });

  it("should have main heading & it contain 'Page With Props'", () => {
    let mainHeading;
    if(component.find('h1').length > 1) {
      mainHeading = component.find('h1').at(0).text();
    } else {
      mainHeading = component.find('h1').text();
    }
    expect(component.find('h1')).toHaveLength(1);
    expect(mainHeading).toBe('Page With Props');
  });
  
  it("should have sub heading & it contain 'Prop means Properties'", () => {
    let subHeading;
    if(component.find('h2').length > 1) {
      subHeading = component.find('h2').at(0).text();
    } else {
      subHeading = component.find('h2').text();
    }
    console.log(component.find('h2').childAt(0).html())
    expect(component.find('h2')).toHaveLength(1)
    expect(subHeading).toBe('Prop means Properties');
  });

  it("should have description", () => {
    expect(component.find('p')).toHaveLength(1);
  });

  // it("has expected content with deep render", () => {
  //   const initialState = {
  //     checkBox: { checked: false },
  //     number: { value: 999 }
  //   };

  //   const store = createStore(rootReducer, initialState);

  //   component = ReactDOM.render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Home />
  //       </BrowserRouter>
  //     </Provider>,
  //     container
  //   );

  //   expect(component).to.not.be.false;
  // });
});
