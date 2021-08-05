/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Scarf2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("scarf", "./Scarf2/costumes/scarf.png", { x: 338, y: 229 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startgame" },
        this.whenIReceiveStartgame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.visible = true;
  }
}
