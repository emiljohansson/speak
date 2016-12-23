# speak

> Have the computer speak out a string or pass it a command.

speak supports both a simple string or passing a public command that outputs a string.

## Install

```sh
`cd path/to/speak`
```

```sh
npm link
```

## Usage

```js
var speak = require('path/to/speak');
speak('Hello, world!', () => {
  // done
});
// => 'Hello, world!'

speak(undefined, () => {
  // done
}, 'weather');
// => 'Denver, CO: 4 C degrees.'
```

```sh
speak 'Hello, world!'
```

```sh
speak weather
```

## API

### speak(string, cb, cmd)

#### string

Type: `string`

The string to be spoken.

#### cb

Type: `function`

Will be called on complete.

#### cmd

Type: `string`

Optional string that should represent a public command which logs a string.

## License

MIT © [Emil Johansson](http://emiljohansson.se)
