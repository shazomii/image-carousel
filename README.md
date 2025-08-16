# Image Carousel

A simple image carousel.

## Installation

```bash
npm install @shazomiii/image-carousel
```

## Usage

To use the image carousel, import the `createCarousel` function and call it with a selector for your carousel element.

```javascript
import createCarousel from '@shazomiii/image-carousel';

createCarousel('.carousel');
```

Your HTML should have the following structure:

```html
<div class="carousel">
    <div class="slides">
        <img src="..." alt="...">
        <img src="..." alt="...">
        <img src="..." alt="...">
    </div>
    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
    <div class="dots"></div>
</div>
```

### Development Server

To run the development server, clone the repository and run the following commands:

```bash
npm install
npm start
```

## License

[MIT](LICENSE)
