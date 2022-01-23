# <b> Depop's Community - Shop Pages </b>

This application is the front end for depop's shop pages. These pages allow users to view data about items that are available for sale.

# <b> Getting started </b>

```sh
npm i
npm start
```

</br>

# <b> Running tests </b>

```sh
npm run test
```

<br>

# <b> Requirements </b>

- Retrieves data from a given API endpoint
- Displays products in a list
- Functionality to like/unlike a product
- Functionality to show/hide sold items

<br>

# <b> Technologies used:</b>

- React
- Chakra UI
- React testing Library

<br/>

## <b> React Justification </b>

React is a great choice for front-end development as it allows us to develop applications in a componentised manner. Hence supporting one of the core programming principles: separation of concerns.

Alternative options were Angular and Vue, however, React is superior imo due to virtual DOM capabilities. Whenever we update an element in the DOM, it updates the virtual DOM and uses diff algorithms to compare virtual DOM with real DOM before updating - hence the UI rendering speed is a lot faster in React than VUE.

Also, React is light-weight, and it has a manageable learning curve compared to the other technologies.

 <br/>

## <b> Why did I use a component library and why Chakra in particular? </b>

This task could've been approached in a wide range of ways with regards to the way in which I carried out the styling. I could've used standard CSS files, CSS modules, Styled Components.

I decided to use a component libary as it offers a single source of truth with regards to development. It allows me to utilise already existing components and style accordingly. If we had to scale out the product e.g. add new features/pages, we would have had to duplicate the CSS if we hadn't used a component library or design system. However, using a component library mitigates this risk.

Also, duplicating this css leads to risk of human error e.g. styling things differently hence leading to an inconsistent product. Using a component library means that there wouldn't be any risk with regards to variation between pages. Hence, using a component library gives us consistency - hence fostering a product with a greater user experience.

I could've also used other component libraries like Tailwind CSS (which is great), Material UI and even potentially the Depop Design System (but i didn't have access to this unfortunately).

I chose Chakra in particular because it creates accessibile components out of the box. This ensures that our pages follow the WCAG guidelines of POUR - percievability, operabilitity, understandable, and robustness.

# <b> Challenges </b>

<b>1st Challenge: Broken Image Links </b>

During the development phase, i realised that the external API was returning some missing/broken images. This was ruining the user experience as the API kept trying to load the images over and over again until it eventually failed.

<b> Solution to 1st Problem </b>

One approach would've been using onError event to replace the image that failed to load with a fall back image. Iirc, this is supported by all browsers.

I was using the Chakra UI Image component during the development of this page. I came to realise that the Image component has a fallback placeholder. I downloaded a random "image not found" picture to use as a placeholder, but I'm assuming in production, we'd probably use a proper image that was created by Depop's UI team?

<b>2nd Challenge - API response times / providing user with feedback </b>

At times, API was taking time to make calls/get results. Hence the view was rendered without data momentarily. This wasnt great for user experience as it didnt give the user any indication as to what was going on.

<b> Solution to 2nd Problem
</b>

Added a loading state to our products page. I set this to true before the API call try method. I then set it to false once this ends. Whilst it is true, i render a spinner - this gives the user info about what is going on..

<b> 3rd Challenge - State. state and more state. </b>

One of the tasks required me to add a dropdown list showing the liked product. With respect of time, i couldn't get this done. However, from a system design point of view, I would've stored liked images on server side rather than on the client. I could've used hooks (useState)
to store it, or i could've used redux. However, i think for performance and scalabilitty purposes its better to store this on client. Also, if you have multiple users, they need to be able to see what other people liked etc.

<b> 4th Challenge - Not being able to communicate with the team </b>

I generally like talking to colleagues about tickets during backlog refinements or sprint planning so we can all agree on requirements between ourselves and with product owners (if they're present). This allows us to come to a consensus and hence ensures that I'm developing features that'll benefit our users.

# <b> Conclusion </b>

I really enjoyed this task - it was a good challenge. Really allowed me to push myself and arrive at a solution that somewhat looks like the provided designs :)
