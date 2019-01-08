import reducer from "../../client/reducers";

export default async function initTop(options) {
  await options.awaitInits();
  const inits = options.inits;
//debugger; // eslint-disable-line no-debugger

  const initData = {
    reducer,
    initialState: {
      checkBox: { checked: false },
      number: { value: 999 },
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
    }
  };

  inits.forEach((init) => {
    initData.initialState = {...initData.initialState, ...init.initialState};
  });


  return initData;
}
