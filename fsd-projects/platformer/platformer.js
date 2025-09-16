$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    //TODO 2 - Create Platforms 
createPlatform(200, 600, 80, 20, "blue")
createPlatform(700, 350, 80, 20, "blue")
createPlatform(400, 530, 80, 20, "blue",)
createPlatform(600, 450, 80, 20, "blue")
createPlatform(100, 700, 80, 20, "blue")
createPlatform(900, 300, 80, 20, "blue")
createPlatform(1300, 200, 80, 20, "blue")
createPlatform(1100, 300, 80, 20, "blue")



    // TODO 3 - Create Collectables
createCollectable("dragonball", 1300, 350, .05);
createCollectable("dragonball", 600, 200, );
createCollectable("apple" , 1300, 150, .07);
createCollectable("apple" , 700, 300);
createCollectable("cloud", 900, 200, .01);

    
    // TODO 4 - Create Cannons
createCannon("top", 300, 2000);
createCannon("right", 300, 700);
createCannon("left", 1000, 2000);
createCannon("top", 700, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
