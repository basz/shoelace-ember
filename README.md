# @shoelace-style/ember

Proof of concept addon which integrates [shoelace](https://shoelace.style/) into an ember application.

## Compatibility

- Ember.js v3.28 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install @shoelace-style/ember
```

## Usage

After installation you should be able to use any shoelace component. For detailed usage instruction view [usage](https://shoelace.style/getting-started/usage) documention of shoelace.

## Configuration

Your application use it environment to set some configuration options.

```js
shoelace: {
  // optional, defaults to  '/@shoelace-style/ember'
  basePath: '/@shoelace-style/ember',
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
