# Odin shopping cart

## Live: <https://ver0s.github.io/odin-shopping-cart/>

With this project I wanted to experiment and play around with data fetching in React applications. I purposefully went the more 'raw' approach without using libraries such as `ReactQuery` or loaders from `React Router` data APIs. I wanted to see what benefits those things give me and what problems do they solve before taking them for granted. And I received what I asked for - I now know how big of an optimization and quality of life improvement these two things are. Caching, revalidating, less code, avoidance of creating my own custom wrappers and hooks etc. In future projects I plan to use these libraries to see how they work maybe even alongside some newer React features such as `Suspense`. Also one of the bigger things that my research has taught me is how often React Query is enough of solution and Redux or other state managers are often an unnecessary addition.

Features:

-   You can browse products, add them to cart, delete from cart and fine tune the quantity
-   Cart data is persisted in local storage
-   Made with responsive design in mind
-   Custom hook for data fetching with error handling

Things that I plan to work on. Both in this specific project and as a whole:

-   **Testing:** I will try to add some meaningful tests to the project but honestly I'll admit that it's the part where I struggle the most. And especially in terms of frontend tests. The bigger the project the more you have to mock external libraries or APIs or do integration testing to see how several components work with each other.
-   **Code reausability:** I'll have to add more reusable components for buttons, links etc. Tailwind is great but with it I can't just style every link at once with one selector.Well, theoretically I can but it would go against it's principles so I'll have to embrace components.
-   **Git workflow:** In this project I tried my best to write meaningful git messages with the help of conventional commits prefixes. I think I did pretty good but I still need to work on my understanding of merge conflicts etc.
-   **CSS:** I really tried to make this project as responsive as I could. Right now it's in a pretty good state but could always use some work.

Technologies used:

-   React
-   Typescript
-   React Router
-   Tailwind
-   Vite
-   FakeStore API (In the future I should pick my APIs more carefully since I wanted to implement a search bar with debouncing that calls that API for a specific product. Sadly the API doesn't let me search through it with a specific search parameter)
