/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sky", "./Stage/costumes/sky.svg", {
        x: 239.89170000000007,
        y: 180
      }),
      new Costume("instrsnowman", "./Stage/costumes/instrsnowman.svg", {
        x: 239.50000000000003,
        y: 179.4999999999998
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky)
    ];

    this.vars.myVariable = 0;
    this.vars.belly = 1;
    this.vars.hat = 1;
    this.vars.face = 1;
    this.vars.scarf = 0;
    this.vars.tillscarfcollected = 1;
    this.vars.done = 1;
    this.vars.done1 = 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "instrsnowman";
    this.broadcast("instr");
  }

  *whenIReceiveSky() {
    this.costume = "sky";
  }
}
