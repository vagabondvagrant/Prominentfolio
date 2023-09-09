// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {},
//     backgroundColor: ['hover'],
//   },
//   plugins: [],
  
// }
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//     keyframes: {
//       'fade-in-2s': {
//         '0%': {
//           opacity: 0,
//         },
//         '100%': {
//           opacity: 1,
//         },
//       },
//       'fade-in-3s': {
//         '0%': {
//           opacity: 0,
//         },
//         '100%': {
//           opacity: 1,
//         },
//       },
//     },
//     animation: {
//       'fade-in-2s': 'fade-in-2s 2s ease-in-out', // 2 seconds for "I'm"
//       'fade-in-3s': 'fade-in-3s 3s ease-in-out', // 3 seconds for "Kabeer"
//     },
//     backgroundColor: ['hover'],
//   },
//   plugins: [],
//   variants: {
//     extend: {
//       animation: ['hover', 'focus', 'group-hover'],
//     },
//   },
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      'fade-in-2s': {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      'fade-in-3s': {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
    animation: {
      'fade-in-2s': 'fade-in-2s 2s ease-in-out', // 2 seconds for "I'm"
      'fade-in-3s': 'fade-in-3s 3s ease-in-out', // 3 seconds for "Kabeer"
    },
    backgroundColor: ['hover'],
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
    },
  },
};
