/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'rubik' : 'Rubik, sans-serif',
      },
      colors: {
        /**Text */
        'p-violet':'hsl(276, 100%, 81%)',
        'm-violet':'hsl(276, 55%, 52%)',
        'd-d-violet':'hsl(271, 15%, 43%)',
        'g-blue':'hsl(206, 6%, 79%)',
        'v-d-d-violet':'hsl(271, 36%, 24%)',
        'd-g-violet':'hsl(270, 7%, 64%)',
        /**Gradients */
        'l-magenta':'hsl(293, 100%, 63%)',
        'l-violet':'hsl(264, 100%, 61%)',
        /**Secondary */
        'white':'hsl(0, 0%, 100%)',
        'l-g-violet':'hsl(270, 20%, 96%)',
        'v-l-magenta':'hsl(289, 100%, 72%)',
      },
    },
  },
  plugins: [],
}
/**
#### Text

- Pale Violet (sub-heading at the top of the app UI): hsl(276, 100%, 81%)
- Moderate Violet (chat on the left): hsl(276, 55%, 52%)
- Desaturated Dark Violet (chat on the right): hsl(271, 15%, 43%)
- Grayish Blue (placeholder text): hsl(206, 6%, 79%)
- Very Dark Desaturated Violet (main heading): hsl(271, 36%, 24%)
- Dark Grayish Violet (paragraph): hsl(270, 7%, 64%)

#### Gradients

These two colors are the vibrant background colors you see throughout the design and are applied as a linear gradient:

- Light Magenta: hsl(293, 100%, 63%)
- Light Violet: hsl(264, 100%, 61%)

### Secondary

- White: hsl(0, 0%, 100%)
- Light Grayish Violet (app background): hsl(270, 20%, 96%)
- Very Dark Desaturated Violet (submit button background): hsl(271, 36%, 24%)
- Very Light Magenta (radio button outline): hsl(289, 100%, 72%)*/