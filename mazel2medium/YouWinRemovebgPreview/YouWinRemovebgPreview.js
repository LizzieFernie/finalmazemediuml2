/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class YouWinRemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "you_win-removebg-preview",
        "./YouWinRemovebgPreview/costumes/you_win-removebg-preview.png",
        { x: 366, y: 170.5 }
      )
    ];

    this.sounds = [new Sound("Win", "./YouWinRemovebgPreview/sounds/Win.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finalemoj" },
        this.whenIReceiveFinalemoj
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFinalemoj() {
    this.visible = true;
    yield* this.playSoundUntilDone("Win");
    this.audioEffects.pitch += 10;
    this.visible = false;
  }
}
