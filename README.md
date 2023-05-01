### Getting Started with Create React App

### Get The Code

## git clone

``` 
https://github.com/chandanhm1999/CatalogImage-Viewer-React
```

>Implementig a catalog viewer for a collection of images.

![catlogpt](https://user-images.githubusercontent.com/109410990/235488458-815774f6-9936-4387-b544-2b4b5d1eb955.png)

https://user-images.githubusercontent.com/109410990/235488528-5096e6b2-f1e5-4e84-9910-cef89bf2b360.mp4

> Frontend Tech: React, Typescript, Material UI

## Requirements:
* The catalog shows the first image with its details (Random text) on right when opened.
* Clicking on the previous or next button displays the previous or next image with details respectively.
* Clicking the next button when the last image is showing should display the first image(cycling).
* Clicking the previous button when the first image is showing should display the last image(cycling).
* There will be a play/pause icon button which should alternately start and stop the automatic display of images in the carousel. Begin with the currently displayed image and display the images for a 3 second interval. Clicking on any carousel indicator or the previous or next button when the slideshow is active loads the appropriate image and the slideshow continues from that image
* Clicking on any thumbnail should show that image with details.
* The currently selected thumbnail image should be highlighted and others should be in grayscale.

```
Mocks link:- https://xd.adobe.com/view/731ce2e3-d55c-4537-b3d1-53e818f67a6d-264f/
```

## Do's
* Use Material UI kit to develop the UI.
* Use functional components and hooks.
* It should be responsive.

## Available Scripts

### In the project directory, you can run:

 ```
 npm start
 ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### The page will reload when you make changes.\

 ```
 npm test
 ```

**Build**
 ```
 npm run build
 ```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 ```
 npm run eject
 ```

** Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
