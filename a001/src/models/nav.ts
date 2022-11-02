interface IState {
  slide: boolean;
}

export default {
  state: {
    slide: false,
  },
  reducers: {
    update(prevState: IState, payload: IState) {
      return { ...prevState, ...payload };
    },
  },
};
