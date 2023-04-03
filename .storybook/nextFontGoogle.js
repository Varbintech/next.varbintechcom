module.exports = new Proxy(
  {},
  {
    get: function getter(_, receiver) {
      return () => ({
        style: {
          fontFamily: receiver,
        },
      })
    },
  },
);
