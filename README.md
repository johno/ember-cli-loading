# Ember Loading

An ember [ember-cli](http://ember-cli.com) addon for loading SVG components. This
addon was created to make it simple to add different types of loading indicators
into an app. The SVGs were created entirely by <https://github.com/jxnblk/loading>.

## Installation

Install the addon through npm:

```
$ npm install ember-cli-loading
```

## Usage

You now have access to the following components:

```
{{loading-balls}}
{{loading-bars}}
{{loading-bubbles}}
{{loading-cubes}}
{{loading-cylon}}
{{loading-spin}}
{{loading-spinning-bubbles}}
{{loading-spokes}}
```

### Optional color and size values

You can change the color and size, too.

```hbs
{{loading-bars color='green' size=100}}
```

### Add it to your loading.hbs

For an application-wide loading indicator, you can call the component from the loading
template:

`templates/loading.hbs`
```hbs
{{loading-bubbles color='white' size=100}}
```

## Acknowledgements

The SVGs were created by <https://github.com/jxnblk/loading>.

## License

MIT

The License for Brent Jackson's loading SVGs: <https://github.com/jxnblk/loading>.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
