/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _22GrinningFaceEmojiPng extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "2-2-grinning-face-emoji-png",
        "./_22GrinningFaceEmojiPng/costumes/2-2-grinning-face-emoji-png.png",
        { x: 120, y: 120 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "smileemoj" },
        this.whenIReceiveSmileemoj
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveSmileemoj() {
    this.visible = true;
    this.goto(172, 112);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
