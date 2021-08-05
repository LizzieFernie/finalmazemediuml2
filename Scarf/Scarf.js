/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Scarf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("scarf", "./Scarf/costumes/scarf.png", { x: 338, y: 229 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "scarf" }, this.whenIReceiveScarf)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveScarf() {
    this.visible = true;
  }
}
