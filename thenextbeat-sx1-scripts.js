
function TheNextBeatSX1() {}
// eslint-disable-next-line no-var

TheNextBeatSX1.init = function (id, debugging) {


    // turn on all LEDs
    // for (let i = 1; i <= 128; i++) { // Repeat the following code for the numbers 1 through 40
                                    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
        midi.sendShortMsg(0x90, 14, 0x7f);
        midi.sendShortMsg(0x90, 12, 0x7f);
        midi.sendShortMsg(0x90, 101, 0x7f);
        midi.sendShortMsg(0x90, 64, 0x7f);
        midi.sendShortMsg(0x90, 80, 0x7f);
        midi.sendShortMsg(0x90, 81, 0x7f);
        midi.sendShortMsg(0x90, 100, 0x7f);
    // Turn off
        midi.sendShortMsg(0x90, 13, 0x00);
        midi.sendShortMsg(0x90, 51, 0x00);
        midi.sendShortMsg(0x90, 60, 0x00);
        midi.sendShortMsg(0x90, 59, 0x00);
        midi.sendShortMsg(0x90, 72, 0x00);
        midi.sendShortMsg(0x90, 68, 0x00);
        midi.sendShortMsg(0x90, 67, 0x00);
        midi.sendShortMsg(0x90, 74, 0x00);
        midi.sendShortMsg(0x90, 66, 0x00);
        midi.sendShortMsg(0x90, 53, 0x00);
        midi.sendShortMsg(0x90, 70, 0x00);
        midi.sendShortMsg(0x90, 71, 0x00);
        midi.sendShortMsg(0x90, 76, 0x00);
        midi.sendShortMsg(0x90, 67, 0x00);
        midi.sendShortMsg(0x90, 69, 0x00);

    //    }


    TheNextBeatSX1.LED = function () {
     //   if (engine.getValue("[Channel1]", "track_loaded") === 1) {
     //       midi.sendShortMsg(0x80,0x4A,0x7f)   // 3 byte midi signal for turning your LED on
     //   } else if (engine.getValue("[Channel1]", "track_loaded") === 0) {
     //       midi.sendShortMsg(0x80,0x4A,0x00)   // 3 byte midi signal for turning your LED off
     //   }
     //   if (engine.getValue("[Channel2]", "track_loaded") === 1) {
     //       midi.sendShortMsg(0x81,0x4C,0x0f)   // 3 byte midi signal for turning your LED on
     //   } else if (engine.getValue("[Channel2]", "track_loaded") === 0) {
     //       midi.sendShortMsg(0x81,0x4C,0x00)   // 3 byte midi signal for turning your LED off
     //   }
    };
}

TheNextBeatSX1.shutdown = function() {
   // turn off all LEDs
   //for (let i = 1; i <= 128; i++) {
        midi.sendShortMsg(0x90, 64, 0x00);
        midi.sendShortMsg(0x90, 80, 0x00);
        midi.sendShortMsg(0x90, 81, 0x00);
        midi.sendShortMsg(0x90, 100, 0x00);
        midi.sendShortMsg(0x90, 14, 0x00);
        midi.sendShortMsg(0x90, 12, 0x00);
        midi.sendShortMsg(0x90, 101, 0x00);
        midi.sendShortMsg(0x90, 0x44, 0x00);
        midi.sendShortMsg(0x90, 0x46, 0x00);
        midi.sendShortMsg(0x90, 67, 0x00);
        midi.sendShortMsg(0x90, 69, 0x00);
    //}
}