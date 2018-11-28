import {PolymerElement, html} from '@polymer/polymer';
import 'char-lcd';

export class CharLcd extends PolymerElement {

  static get template() { return html``; }

  static get properties() {
    return {
      rom: {
        type: String,
        value: 'jp',
      },
      rows: {
        type: Number,
        value: 2,
      },
      cols: {
        type: Number,
        value: 16,
      }
    }
  }

  ready() {
    super.ready();
    this.lcd = new window.CharLCD({
      at: this.shadowRoot,
      rom: this.rom,
      rows: this.rows,
      cols: this.cols
    });
  }

  char(r, c, h) { this.lcd.char(r, c, h); }
  text(r, c, str) { this.lcd.text(r, c, str); }
  font(n, data) { this.lcd.font(n, data); }

}

customElements.define('char-lcd', CharLcd);
