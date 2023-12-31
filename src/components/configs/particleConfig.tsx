export default {
  fullScreen: { enable: false },
  background: {
    color: "",
  },
  particles: {
    move: {
      speed: 0.5,
    },
    color: {
      value: ''
    }
  },
  opacity: {
    animation: {
      enable: true,
      speed: 0.03,
      sync: true,
      startValue: "max",
      count: 1,
      destroy: "min",
    },
    value: {
      min: 0,
      max: 0.5,
    },
  },
  preset: "stars",
};
