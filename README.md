# polymer-char-lcd

[![npm](https://img.shields.io/npm/v/polymer-char-lcd.svg)](https://www.npmjs.com/package/polymer-char-lcd)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/polymer-char-lcd)

## Character LCD display emulator (Web Component)

![polymer-char-lcd](https://jazz-soft.github.io/img/polymer-char-lcd.gif)

## Usage
### Install the Web Component
`npm install polymer-char-lcd --save`

### HTML

```html
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script type="module">
  import 'polymer-char-lcd';
</script>
```
```html
<char-lcd rows=2 cols=16 rom=eu></char-lcd>
```

## Attributes
`rom` - `jp` (default) for Japanese standard font or `eu` for European standard font;  
`rows` - number or rows; default: 2;  
`cols` - number of columns; default: 16;

## API
`char(r, c, h)` - set character `h` at row `r`, column `c`;  
`text(r, c, s)` - write string `s` starting at row `r`, column `c`;  
this function treats `\n` as new line and maps UNICODE characters to the internal character set;  
`font(n, data)` - define the pixels of the `n`-th character; `data` is an array of bytes.

## Testing with Polymer
Make sure the Polymer CLI is installed:
`npm install -g polymer-cli`  
In the project directory:  
run `npm install`  
run `polymer serve --open`

## Non-Polymer version
https://github.com/jazz-soft/char-lcd
