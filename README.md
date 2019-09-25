# js-slug

This package as no dependency and let you transform any string with special chars into a nice string with only Alpha, Digits and dash caracters.
Typical use : Transform a title into a url segment.

# Usage
If you use npm, you'll need node >12 because it's a ESM.
- `npm install @tpoisseau/slug`

```js
import slug from '@tpoisseau/slug';
```

If you wan't use it directly in browser

```js
import slug from 'https://raw.githubusercontent.com/tpoisseau/js-slug/master/index.mjs';
```

And then

```js
slug('1 < 2') // 1-2
slug('Hey! How are you') // hey-how-are-you
slug('tôi tên là d͌ức tạ') // toi-ten-la-duc-ta
slug('learn adonis in 30 minutes') // learn-adonis-in-30-minutes
```
