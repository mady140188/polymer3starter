import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-dropdown/iron-dropdown.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        span {
          color: blue;
        }
        :host {
          display: inline-block;
        }

        iron-icon{
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }

        :host([pressed]) iron-icon{
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }

        iron-dropdown{
          border: 1px solid gray;
          background: white;
          font-size: 2em;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <iron-icon icon=[[toggleIcon]]></iron-icon>
      <button on-click="_openDropdown">open the dropdown</button>
      <iron-dropdown id="dropdown" horizontal-align="right" vertical-align="top">
        <div slot="dropdown-content">Hello!</div>
         <div slot="dropdown-content">Hello!</div>
          <div slot="dropdown-content">Hello!</div>
           <div slot="dropdown-content">Hello!</div>
      </iron-dropdown>
    `;
  }

  static get properties(){
    return {
      toggleIcon: {
        type: String
      },
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.pressed = !this.pressed;
  }

  _openDropdown(){
    this.$.dropdown.open();
  }
}

customElements.define('icon-toggle', IconToggle);
