import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Girlh from "./Girlh/Girlh.js";
import LeftStick from "./LeftStick/LeftStick.js";
import RightHand from "./RightHand/RightHand.js";
import Hat from "./Hat/Hat.js";
import Scarf from "./Scarf/Scarf.js";
import Snowmanface from "./Snowmanface/Snowmanface.js";
import Bellyf from "./Bellyf/Bellyf.js";
import LeftStick2 from "./LeftStick2/LeftStick2.js";
import RightHand2 from "./RightHand2/RightHand2.js";
import Hat2 from "./Hat2/Hat2.js";
import Scarf2 from "./Scarf2/Scarf2.js";
import Snowmanface2 from "./Snowmanface2/Snowmanface2.js";
import Bellyf2 from "./Bellyf2/Bellyf2.js";
import _82FearfulEmojiPng from "./_82FearfulEmojiPng/_82FearfulEmojiPng.js";
import _22GrinningFaceEmojiPng from "./_22GrinningFaceEmojiPng/_22GrinningFaceEmojiPng.js";
import _65057EmoticonSignalSmileyThumbEmojiFreeFrame from "./_65057EmoticonSignalSmileyThumbEmojiFreeFrame/_65057EmoticonSignalSmileyThumbEmojiFreeFrame.js";
import YouWinRemovebgPreview from "./YouWinRemovebgPreview/YouWinRemovebgPreview.js";
import Button from "./Button/Button.js";
import Next from "./Next/Next.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Girlh: new Girlh({
    x: 19,
    y: 144,
    direction: 90,
    costumeNumber: 1,
    size: 24,
    visible: true,
    layerOrder: 13
  }),
  LeftStick: new LeftStick({
    x: 134,
    y: -101,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 4
  }),
  RightHand: new RightHand({
    x: 219,
    y: -106,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 5
  }),
  Hat: new Hat({
    x: 181,
    y: -25,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 6
  }),
  Scarf: new Scarf({
    x: 184,
    y: -106,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 2
  }),
  Snowmanface: new Snowmanface({
    x: 177,
    y: -67,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 3
  }),
  Bellyf: new Bellyf({
    x: 177,
    y: -138,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1
  }),
  LeftStick2: new LeftStick2({
    x: -209.17930223454852,
    y: -144.4219755089082,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 12
  }),
  RightHand2: new RightHand2({
    x: 26.750338104495714,
    y: 131.90230352714943,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 7
  }),
  Hat2: new Hat2({
    x: -86.93217333481613,
    y: -30.78973317260806,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 10
  }),
  Scarf2: new Scarf2({
    x: -146.78147232006629,
    y: 80.62422459242771,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 11
  }),
  Snowmanface2: new Snowmanface2({
    x: 24.554718048129423,
    y: -88.27759988199989,
    direction: 90,
    costumeNumber: 1,
    size: 13,
    visible: true,
    layerOrder: 8
  }),
  Bellyf2: new Bellyf2({
    x: 24.613857758046066,
    y: 84.46335464676164,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 9
  }),
  _82FearfulEmojiPng: new _82FearfulEmojiPng({
    x: 172,
    y: 112,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 15
  }),
  _22GrinningFaceEmojiPng: new _22GrinningFaceEmojiPng({
    x: 172,
    y: 112,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 14
  }),
  _65057EmoticonSignalSmileyThumbEmojiFreeFrame: new _65057EmoticonSignalSmileyThumbEmojiFreeFrame(
    {
      x: 172,
      y: 112,
      direction: 90,
      costumeNumber: 1,
      size: 25,
      visible: true,
      layerOrder: 16
    }
  ),
  YouWinRemovebgPreview: new YouWinRemovebgPreview({
    x: -28,
    y: -14,
    direction: 90,
    costumeNumber: 1,
    size: 196.72131147540983,
    visible: false,
    layerOrder: 17
  }),
  Button: new Button({
    x: 178,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 18
  }),
  Next: new Next({
    x: 170,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 19
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
