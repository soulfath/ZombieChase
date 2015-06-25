package;

import flixel.FlxG;
import flixel.FlxObject;
import flixel.FlxSprite;
import flixel.util.FlxPoint;
import flixel.util.FlxVelocity;
import flixel.util.FlxRandom;
import flixel.util.FlxAngle;

/**
 * ...
 * @author ...
 */

class Enemy extends FlxSprite
{

	private var _brain:FSM;
	private var _idleTmr:Float;
	private var _moveDir:Float;
	public var seesPlayer:Bool = false;
	public var playerPos(default, null):FlxPoint;
	public var speed:Float = 50;
	public var etype(default, null):Int;
	
	public function new(X:Float=0, Y:Float=0, Etype:Int) 
	{
		super(X, Y);
		etype = Etype;
		loadGraphic(AssetPaths.spaceman__png, true, 8);
		setSize(20, 20);
		drag.x = drag.y = 10;
		width = 8;
		height = 14;
		_brain = new FSM(idle);
		_idleTmr = 0;
		playerPos = FlxPoint.get();
		setFacingFlip(FlxObject.LEFT, true, false);
		setFacingFlip(FlxObject.RIGHT, false, false);
		animation.add("idle", [0]);
		animation.add("run", [1, 2, 3, 0], 12);
		animation.add("jump", [4]);
		animation.add("idle_up", [5]);
		animation.add("run_up", [6, 7, 8, 5], 12);
		animation.add("jump_up", [9]);
		animation.add("jump_down", [10]);
	}
	
	override public function draw():Void
	{
		if ((velocity.x != 0 || velocity.y != 0) &&
			touching == FlxObject.NONE) {
				if ( Math.abs(velocity.x) > Math.abs(velocity.y))
				{
					if ( velocity.x < 0)
						facing = FlxObject.LEFT;
					else
						facing = FlxObject.RIGHT;
				}
				else 
				{
						if ( velocity.y < 0 )
							facing = FlxObject.UP;
						else
							facing = FlxObject.DOWN;
				}
				
				/*switch(facing)
				{
					case 
				}*/
			}
			super.draw();
	}
	
	public function idle():Void
	{
     if (seesPlayer)
     {
         _brain.activeState = chase;
     }
     else if (_idleTmr <= 0)
     {
         if (FlxRandom.chanceRoll(1))
         {
             _moveDir = -1;
             velocity.x = velocity.y = 0;
         }
         else
         {
             _moveDir = FlxRandom.intRanged(0, 8) * 45;
             FlxAngle.rotatePoint(speed * .5, 0, 0, 0, _moveDir, velocity);
         }
         _idleTmr = FlxRandom.intRanged(1, 4);
     }
     else
         _idleTmr -= FlxG.elapsed;
	}

	 public function chase():Void
	 {
		 if (!seesPlayer)
		 {
			 _brain.activeState = idle;
		 }
		 else
		 {
			 FlxVelocity.moveTowardsPoint(this, playerPos, Std.int(speed));
		 }
	 }

 override public function update():Void 
 {
     _brain.update();
     super.update();
 }
}