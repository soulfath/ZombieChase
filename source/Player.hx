package;

import flixel.effects.particles.FlxEmitter;
import flixel.FlxObject;
import flixel.FlxSprite;
import flixel.group.FlxTypedGroup;
import flixel.input.gamepad.FlxGamepad;
import flixel.util.FlxAngle;
import flixel.util.FlxColor;
import flixel.FlxG;
import flixel.util.FlxTimer;
import flixel.util.FlxSpriteUtil;

/**
 * ...
 * @author ...
 */
	
class Player extends FlxSprite
{
	private var moveSpeed:Float = 200;
	
	private static var SHOOT_RATE:Float = 1 / 10; // 10 shot per sec
	
	public var isReadyToJump:Bool = true;
	public var flickering:Bool = false;
	
	private var _shootTimer = new FlxTimer();
	private var _jumpPower:Int = 200;
	private var _aim:Int = FlxObject.RIGHT;
	private var _gibs:FlxEmitter;
	private var _bullets:FlxTypedGroup<Bullet>;
	
	public function new(X:Float=0, Y:Float=0) 
	{
		super(X, Y);
		loadGraphic(AssetPaths.spaceman__png, true, 8);
		setSize(20, 20);
		moveSpeed = 200;
		drag.x = drag.y = 1500;
	//	setSize(8, 14);
		//offset.set(4, 2);
		// Animations
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
	
	override public function destroy():Void
	{
		super.destroy();
		
		#if android
		virtualPad = FlxDestroyUtil.destroy(virtualPad);
		#end
		
		_bullets = null;
		_gibs = null;
	}
	
	public override function update() {
		movement();
		super.update();
	}
	
	private function movement():Void 
	{
		var _up:Bool = false;
		var _down:Bool = false;
		var _left:Bool = false;
		var _right:Bool = false;
		_up = FlxG.keys.anyPressed(["UP","W"]);
		_down = FlxG.keys.anyPressed(["DOWN", "S"]);
		_left = FlxG.keys.anyPressed(["LEFT", "A"]);
		_right = FlxG.keys.anyPressed(["RIGHT", "D"]);
		
		if ( _up && _down ) {
			_up = _down = false;
		}
		if ( _left && _right ) {
			_left = _right = false;
		}
		if ( _up || _down || _left || _right ) {
			var mA:Float = 0;
			 if (_up)
			 {
				 mA = -90;
				 if (_left)
					 mA -= 45;
				 else if (_right)
					 mA += 45;
					 
			facing = FlxObject.UP;
			 }
			 else if (_down)
			 {
				 mA = 90;
				 if (_left)
					 mA += 45;
				 else if (_right)
					 mA -= 45;
					 
			facing = FlxObject.DOWN;
			 }
			 else if (_left){
				 mA = 180;
				facing = FlxObject.LEFT;
			}
			 else if (_right){
				 mA = 0;
				facing = FlxObject.RIGHT;				
			 }
			FlxAngle.rotatePoint(moveSpeed, 0, 0, 0, mA, velocity);
		}
	}
	
}