window.matchMedia =
  window.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

export const tabletMediaQueryWidth: MediaQueryList = window.matchMedia(
  '(max-width: 1000px)',
);

export const mobileMediaQueryWidth: MediaQueryList =
  window.matchMedia('(max-width: 600px)');
