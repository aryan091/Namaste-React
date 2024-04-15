const Grocery = () => {
  return (
    <div className=" shadow-lg">
      <div className="m-2 p-2 shadow-lg text-center font-bold ">
        <h1 className="font-bold text-center text-2xl mb-2">Single Responsibility Principle (SRP)</h1>
        <ul className=" text-gray-500 m-1 p-1">
          <li>Each component should have a single responsibility, adhering to the principle of separation of concerns.</li>
          <li>Implementing this principle leads to modularity, easier debugging, code maintainability, and readability.</li>
          <li>Introduce custom hooks for utility functions, ensuring clear input and output definitions. For example, a useRestaurantMenu hook could handle data fetching, allowing the Restaurant Menu component to focus solely on rendering.</li>
          
        </ul>
      </div>
      <div className="m-4 p-4 shadow-lg text-center font-bold">
        <h1 className="font-bold text-center text-2xl mb-2">Lazy Loading</h1>
        <ul className=" text-gray-500 m-1 p-1">
          <li>Break down the application into smaller bundles or chunks to optimize performance.</li>
          <li>Dynamic bundling, also known as code splitting or lazy loading, involves loading specific components only when requested by the user.</li>
          <li>For instance, in a travel site, separate bundles can be created for different components like Planes, Hotels, and Buses.</li>
          <li>This approach reduces the initial file size, leading to faster loading times and improved user experience.</li>
          <li>Lazy loading is achieved using React's lazy function and Suspense component. Components are imported dynamically, and a fallback UI (like a loading spinner or shimmer effect) is displayed until the requested component is fully loaded.</li>
        </ul>
      </div>
      <div className="m-4 p-4 shadow-lg">
      <p className=" text-gray-500 m-1 p-1 font-bold text-center">By implementing these optimizations, React applications become more efficient, maintainable, and user-friendly. Modularity is enhanced through the SRP, while performance is improved using dynamic bundling and lazy loading techniques, resulting in faster load times and smoother user interactions.</p>
      </div>
      
    </div>
  );
};

export default Grocery;
