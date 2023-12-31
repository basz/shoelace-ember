# shoelace-ember

Addon that integrates [shoelace](https://shoelace.style/) into your EmberJS application.

## Compatibility

- Ember.js v3.28 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install shoelace-ember
```

## Usage

After installation you should be able to use any shoelace component. For detailed usage instruction view [usage](https://shoelace.style/getting-started/usage) documention of shoelace.

## Configuration

You may set some configuration options via the environment file.

```js
'shoelace-ember': {
  // optional, defaults to  '/shoelace-ember'
  basePath: '/shoelace-ember',
  // optional, defaults to 'auto'
  theme: 'light',
  // optional, list of languages to include, defaults to auto detected language is also included
  languages: [],
  // optional, defaults to auto detected language
  language: 'auto',
  // optional, when omitted all components are included
  components: []
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
