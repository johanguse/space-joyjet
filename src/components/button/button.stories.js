import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from '@storybook/addon-actions';

storiesOf(`Joyjet`, module).add(`button`, () => (
  <button className="hero-button" onClick={action('clicked')}>
    click
  </button>
))