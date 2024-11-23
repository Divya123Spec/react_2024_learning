const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// In React, Web Vitals are metrics introduced by Google to measure the user experience 
// quality of your web application. These metrics focus on aspects such as loading performance, 
// interactivity, and visual stability. React applications typically use the reportWebVitals file 
// to gather these metrics