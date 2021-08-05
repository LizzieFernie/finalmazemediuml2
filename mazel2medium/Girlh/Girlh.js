/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Girlh extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("girlh", "./Girlh/costumes/girlh.png", { x: 170, y: 209 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startgame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenKeyDownArrowPressed() {
    this.y += -56;
    if (this.touching(Color.rgb(84, 248, 43))) {
      this.y += 56;
    } else {
      if (this.touching(this.sprites["Bellyf2"].andClones())) {
        this.stage.vars.belly += 1;
        this.broadcast("bellyf");
      }
      if (
        this.touching(this.sprites["Snowmanface2"].andClones()) &&
        !(this.stage.vars.belly == 0)
      ) {
        this.stage.vars.face += 1;
        this.broadcast("snowmanface");
        this.broadcast("smileemoj");
      }
    }
    if (
      this.touching(this.sprites["Hat2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0)
    ) {
      this.stage.vars.hat += 1;
      this.broadcast("hat");
    }
    if (
      this.touching(this.sprites["Scarf"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0) &&
      !(this.stage.vars.hat == 0)
    ) {
      this.stage.vars.tillscarfcollected += 1;
      this.broadcast("scarf");
    }
    if (
      this.touching(this.sprites["Scarf2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0) &&
      !(this.stage.vars.hat == 0)
    ) {
      this.stage.vars.tillscarfcollected += 1;
      this.broadcast("scarf");
    }
    if (
      this.touching(this.sprites["LeftStick2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("left");
      this.stage.vars.done += 1;
    }
    if (
      this.touching(this.sprites["RightHand2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("right");
      this.broadcast("yay");
      this.stage.vars.done1 += 1;
    }
  }

  *whenKeyUpArrowPressed() {
    this.y += 56;
    if (this.touching(Color.rgb(115, 205, 113))) {
      this.y += -56;
    } else {
      if (this.touching(this.sprites["Bellyf2"].andClones())) {
        this.stage.vars.belly += 1;
        this.broadcast("bellyf");
      }
    }
    if (
      this.touching(this.sprites["Snowmanface2"].andClones()) &&
      !(this.stage.vars.belly == 0)
    ) {
      this.broadcast("snowmanface");
      this.broadcast("sademoj");
      this.stage.vars.face += 1;
    }
    if (
      this.touching(this.sprites["Hat2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0)
    ) {
      this.stage.vars.hat += 1;
      this.broadcast("hat");
    }
    if (
      this.touching(this.sprites["Scarf2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0) &&
      !(this.stage.vars.hat == 0)
    ) {
      this.stage.vars.tillscarfcollected += 1;
      this.broadcast("scarf");
    }
    if (
      this.touching(this.sprites["LeftStick2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("left");
      this.stage.vars.done += 1;
    }
    if (
      this.touching(this.sprites["RightHand2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("right");
      this.broadcast("yay");
      this.stage.vars.done1 += 1;
    }
  }

  *whenKeyLeftArrowPressed() {
    this.x += -56;
    if (this.touching(Color.rgb(84, 248, 43))) {
      this.x += 56;
    } else {
      if (this.touching(this.sprites["Bellyf2"].andClones())) {
        this.stage.vars.belly += 1;
        this.broadcast("bellyf");
      }
    }
    if (
      this.touching(this.sprites["Snowmanface2"].andClones()) &&
      !(this.stage.vars.belly == 0)
    ) {
      this.broadcast("snowmanface");
      this.broadcast("smileemoj");
      this.stage.vars.face += 1;
    }
    if (
      this.touching(this.sprites["Hat2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0)
    ) {
      this.stage.vars.hat += 1;
      this.broadcast("hat");
    }
    if (
      this.touching(this.sprites["Scarf2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0) &&
      !(this.stage.vars.hat == 0)
    ) {
      this.stage.vars.tillscarfcollected += 1;
      this.broadcast("scarf");
    }
    if (
      this.touching(this.sprites["LeftStick2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("left");
      this.stage.vars.done += 1;
    }
    if (
      this.touching(this.sprites["RightHand2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("right");
      this.broadcast("yay");
      this.stage.vars.done1 += 1;
    }
  }

  *whenKeyRightArrowPressed() {
    this.x += 56;
    if (this.touching(Color.rgb(84, 248, 43))) {
      this.x += -56;
    } else {
      if (this.touching(this.sprites["Bellyf2"].andClones())) {
        this.stage.vars.belly += 1;
        this.broadcast("bellyf");
      }
    }
    if (
      this.touching(this.sprites["Snowmanface2"].andClones()) &&
      !(this.stage.vars.belly == 0)
    ) {
      this.broadcast("snowmanface");
      this.broadcast("smileemoj");
      this.stage.vars.face += 1;
    }
    if (
      this.touching(this.sprites["Hat2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0)
    ) {
      this.stage.vars.hat += 1;
      this.broadcast("hat");
    }
    if (
      this.touching(this.sprites["Scarf"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0) &&
      !(this.stage.vars.hat == 0)
    ) {
      this.broadcast("scarf");
      this.stage.vars.tillscarfcollected += 1;
    }
    if (
      this.touching(this.sprites["Scarf2"].andClones()) &&
      !(this.stage.vars.belly == 0) &&
      !(this.stage.vars.face == 0) &&
      !(this.stage.vars.hat == 0)
    ) {
      this.stage.vars.tillscarfcollected += 1;
      this.broadcast("scarf");
    }
    if (
      this.touching(this.sprites["LeftStick2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("left");
      this.stage.vars.done += 1;
    }
    if (
      this.touching(this.sprites["RightHand2"].andClones()) &&
      !(this.stage.vars.tillscarfcollected == 0)
    ) {
      this.broadcast("right");
      this.broadcast("yay");
      this.stage.vars.done1 += 1;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.done = 0;
    this.stage.vars.done1 = 0;
    this.visible = false;
    this.broadcast("instr");
  }

  *whenIReceiveStartgame() {
    this.stage.vars.belly = 0;
    this.stage.vars.done1 = 0;
    this.stage.vars.tillscarfcollected = 0;
    this.stage.vars.face = 0;
    this.stage.vars.hat = 0;
    this.visible = true;
    this.goto(-205, 144);
    this.broadcast("sademoj");
  }

  *whenGreenFlagClicked2() {
    while (!(this.stage.vars.done > 0 && this.stage.vars.done1 > 0)) {
      yield;
    }
    yield* this.wait(1);
    this.broadcast("finalemoj");
  }
}
