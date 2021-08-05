/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button", "./Button/costumes/button.svg", { x: 160, y: 55 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "instr" }, this.whenIReceiveInstr)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("startgame");
    this.broadcast("sky");
    this.visible = false;
  }

  *whenIReceiveInstr() {
    this.visible = true;
  }
}
