/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("hat", "./Hat/costumes/hat.png", { x: 352, y: 274 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "hat" }, this.whenIReceiveHat)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveHat() {
    this.visible = true;
  }
}
