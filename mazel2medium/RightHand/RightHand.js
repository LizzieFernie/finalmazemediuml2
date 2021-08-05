/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightHand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("right_hand", "./RightHand/costumes/right_hand.svg", {
        x: 92.60572855661425,
        y: 148.00607913246523
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRight() {
    this.visible = true;
  }
}
