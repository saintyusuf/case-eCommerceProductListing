# Case - E-Commerce Product Listing

<table>
  <tbody>
    <tr>
      <td>
        Requested
      </td>
      <td>
        <h3>Overview</h3>
        <p>Create a responsive and performant e-commerce product catalog page using React. The page should display a list of products, allow filtering and sorting, and implement a shopping cart functionality.</p>
        <h3>Requirements</h3>
        <ol>
          <li>
            <p>Product Listing</p>
            <ul>
              <li>Fetch product data from a mock API (you can use json-server or any other mock API service).</li>
              <li>Display products in a grid layout with product image, name, price, and "Add to Cart" button.</li>
              <li>Implement infinite scrolling or pagination for loading more products.</li>
            </ul>
          </li>
          <li>
            <p>Filtering and Sorting</p>
            <ul>
              <li>Add a sidebar with filter options (e.g., by category, price range).</li>
              <li>Implement sorting functionality (e.g., by price, popularity).</li>
              <li>Ensure filters and sorting work together correctly.</li>
            </ul>
          </li>
          <li>
            <p>Shopping Cart</p>
            <ul>
              <li>Create a cart component that displays added items, quantities, and total price.</li>
              <li>Implement "Add to Cart" and "Remove from Cart" functionality.</li>
              <li>Use React Context or Redux for state management.</li>
            </ul>
          </li>
          <li>
            <p>Styling and Responsiveness</p>
            <ul>
              <li>Use a CSS-in-JS solution (e.g., styled-components, Emotion) or CSS modules.</li>
              <li>Ensure the layout is responsive and works well on mobile, tablet, and desktop.</li>
              <li>Implement a coherent and visually appealing design.</li>
            </ul>
          </li>
          <li>
            <p>Performance Optimization</p>
            <ul>
              <li>Implement code splitting and lazy loading for better initial load time.</li>
              <li>Use React.memo, useMemo, and useCallback where appropriate to optimize re-renders.</li>
              <li>Implement image lazy loading for product images.</li>
            </ul>
          </li>
          <li>
            <p>API Integration and Error Handling</p>
            <ul>
              <li>Handle API errors gracefully and display user-friendly error messages.</li>
              <li>Implement loading states while fetching data.</li>
              <li>Use React Query or SWR for efficient data fetching and caching.</li>
            </ul>
          </li>
          <li>
            <p>Testing</p>
            <ul>
              <li>Write unit tests for key components using Jest and React Testing Library.</li>
              <li>Implement at least one integration test for a critical user flow (e.g., adding a product to the cart).</li>
            </ul>
          </li>
          <li>
            <p>Documentation and Code Quality</p>
            <p>Write clear comments and documentation for complex parts of the code.</p>
            <ul>
              <li>Follow React best practices and maintain consistent code style.</li>
              <li>Use ESLint and Prettier for code formatting.</li>
            </ul>
          </li>
        </ol>
        <h3>Overview</h3>
        <ul>
          <li>Implement a simple product search functionality.</li>
          <li>Add animations for smoother user experience (e.g., cart updates, filtering).</li>
          <li>Implement a basic checkout process mockup.</li>
        </ul>
        <h3>Evaluation Criteria</h3>
        <ul>
          <li>Code quality and organization</li>
          <li>Performance and optimization techniques</li>
          <li>UI/UX design and responsiveness</li>
          <li>Error handling and edge cases</li>
          <li>Testing coverage and quality</li>
          <li>Documentation and code comments</li>
        </ul>
        <h3>Submission</h3>
        <ul>
          <li>Provide a GitHub repository with your code.</li>
          <li>Include a README with instructions on how to run the project locally.</li>
          <li>Deploy the application to a free hosting service (e.g., Vercel, Netlify) and provide the live URL.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        Result
      </td>
      <td>
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/1.png" alt="Result (Desktop)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/2.png" alt="Result (Desktop)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/3.png" alt="Result (Desktop)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/4.png" alt="Result (Desktop)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/5.png" alt="Result (Desktop)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/11.png" height="500px" alt="Result (Mobile)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/12.png" height="500px" alt="Result (Mobile)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/13.png" height="500px" alt="Result (Mobile)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/14.png" height="500px" alt="Result (Mobile)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/15.png" height="500px" alt="Result (Mobile)">
        <img src="https://github.com/saintyusuf/case-eCommerceProductListing/blob/main/case-details/16.png" height="500px" alt="Result (Mobile)">
      </td>
    </tr>
  </tbody>
</table>


## About

This is a case study to measure some React.js skills.

## Features

- Responsive design
- Layout design
- Infinite scrolling
- Lazy loading images
- Filtering and sorting
- Shopping cart, add to cart, change quantity, remove from cart
- Website loading animation
- Fetch product data from a mock api
- Dark mode
- Custom hooks
- Product search
- Product images slider

## Stack

HTML, CSS, JS, TS, React.js, Chakra UI, Redux Toolkit, Axios, GSAP, React Helmet, React Loader Spinner, React Toastify, React Infinite Scroll Component, React Lazy Load Image Component, Lottie, Swiper, React Router Dom

## Installation

Clone the repository
```bash 
git clone https://github.com/saintyusuf/case-eCommerceProductListing.git
```

Change directory
```bash 
cd case-eCommerceProductListing
```

Install dependencies
```bash
npm install
```

Run the project
```bash
npm run start
```