/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Next extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("next", "./Next/costumes/next.svg", { x: 160, y: 55 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finalemoj" },
        this.whenIReceiveFinalemoj
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.costume = "level";
    this.broadcast("level");
    yield* this.wait(1);
  }

  *whenIReceiveFinalemoj() {
    this.goto(170, -152);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
