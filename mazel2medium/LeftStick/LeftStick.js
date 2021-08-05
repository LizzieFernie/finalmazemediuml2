/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftStick extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("left_stick", "./LeftStick/costumes/left_stick.png", {
        x: 258,
        y: 102
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "left" }, this.whenIReceiveLeft)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLeft() {
    this.visible = true;
  }
}
