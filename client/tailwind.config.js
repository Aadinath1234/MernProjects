export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all React files in the src folder
    "./public/index.html",        // Includes the index.html file
  ],
  theme: {
    
      extend: {
        colors: {
          // primary: '#F5385D', // Define your primary color here
        },
  
         container:{
            center: true,
            padding: {
                DEFAULT: "1rem",
               sm:"2rem", 
            }  
         }
        
  
      },
    },
  
  plugins: [],
};
