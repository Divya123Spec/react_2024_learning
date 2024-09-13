// Reselect is a library for creating memoized selectors in a React/Redux application. 
// It is commonly used to compute derived data from the Redux store's state in an efficient way

// Why Use Reselect?
// Performance: By memoizing the result of selectors, Reselect prevents unnecessary recalculations, which can be beneficial when dealing with large datasets or expensive operations.
// Separation of Concerns: It helps to keep logic that derives state in selectors rather than components, which simplifies components and makes them easier to test

// Input Selectors (selectItems, selectFilter) pull specific slices of the state.
// Memoized Selector (selectFilteredItems) processes the input selectors' output. '
// It only recomputes the result when the input selectors' values change. Otherwise, it returns the cached result from the previous call.