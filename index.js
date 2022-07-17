const plugin = require('tailwindcss/plugin');

const typography = plugin(function ({ addUtilities }) {
  const typographyUtilities = {
    '.text-body-01': {
      fontSize: '1.8rem',
      fontWeight: '400',
      lineHeight: '150%',
    },
    '.text-body-02': {
      fontSize: '1.6rem',
      fontWeight: '400',
      lineHeight: '150%',
    },
    '.text-body-03': {
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: '150%',
    },
    '.text-subtitle-01': {
      fontSize: '1.8rem',
      fontWeight: '400',
      lineHeight: '130%',
    },
    '.text-subtitle-02': {
      fontSize: '1.6rem',
      fontWeight: '500',
      lineHeight: '130%',
      letterSpacing: '0.015em',
    },
    '.text-subtitle-03': {
      fontSize: '1.4rem',
      fontWeight: '600',
      lineHeight: '130%',
    },
    '.text-caption': {
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: '130%',
    },
    '.text-label': {
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: '140%',
    },
    '.text-button': {
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: '140%',
    },
    '.text-helper': {
      fontSize: '1.2rem',
      fontWeight: '400',
      lineHeight: '150%',
    },
  };
  addUtilities(typographyUtilities, ['responsive', 'hover']);
});

module.exports = typography;
