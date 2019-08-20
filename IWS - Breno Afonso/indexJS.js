
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // setar oq será escrito
    $( "#button1" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  } );
  ////////////////////////////////////////////////////////////////////////////////
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect2" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect2:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // setar oq será escrito
    $( "#button2" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect2" ).hide();
 

  } );
////////////////////////////////////////////////////////////////////////////////
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect3" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect3:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // setar oq será escrito
    $( "#button3" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect3" ).hide();
 

  } );

  ////////////////////////////////////////////////////////////////////////////////
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect4" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect4:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // setar oq será escrito
    $( "#button4" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect4" ).hide();
 

  } );
  ////////////////////////////////////////////////////////////////////////////////
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect5" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect5:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // setar oq será escrito
    $( "#button5" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect5" ).hide();
 

  } );
  ////////////////////////////////////////////////////////////////////////////////
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect6" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect6:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // setar oq será escrito
    $( "#button6" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect6" ).hide();
 

  } );