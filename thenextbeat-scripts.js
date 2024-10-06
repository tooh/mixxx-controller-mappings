function THENEXTBEAT() {}

// The button that enables/disables scratching
THENEXTBEAT.wheelTouch = function (channel, control, value, status, group) {
    var deckNumber = script.deckFromGroup(group);
     
  if (value === 0x7F) {  
        var alpha = 1.0/8;
        var beta = alpha/32;
        engine.scratchEnable(deckNumber, 128, 33+1/3, alpha, beta);
    } else {   
        engine.scratchDisable(deckNumber);
    }
}

// The wheel that actually controls the scratching
THENEXTBEAT.wheelTurn = function (channel, control, value, status, group) {
    // --- Choose only one of the following!
    
    // A: For a control that centers on 0:
    var newValue;
    if (value < 64) {
        newValue = value ;
    } else {
        newValue = value - 128;
    }

    // B: For a control that centers on 0x40 (64):
    //var newValue = value - 64;
    
    // --- End choice
    
    // In either case, register the movement
    var deckNumber = script.deckFromGroup(group);
    if (engine.isScratching(deckNumber)) {
        engine.scratchTick(deckNumber, newValue); // Scratch!
    } else {
        engine.setValue(group, 'jog', newValue); // Pitch bend
    }
}