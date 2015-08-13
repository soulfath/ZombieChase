package obj 
{
	import data.Registry;
	import org.flixel.FlxG;
	import org.flixel.FlxPoint;
	import org.flixel.FlxSprite;
	import org.flixel.plugin.photonstorm.FlxColor;
	import org.flixel.plugin.photonstorm.FlxMath;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Player extends FlxSprite 
	{
		private var _speed:Number;
		private var level:int = 1;
		
		public function Player(X:Number=0, Y:Number=0, SimpleGraphic:Class=null) 
		{
			
			super(X, Y, SimpleGraphic);
			makeGraphic(10, 10);
			health = 5;
			speed = 100;
			trace("at ply " +health);
		}
		
		override public function update():void 
		{
			if ( !Registry.isPaused ){
				super.update();
				moveTowardsMouse();
			}
		}
		
		public function moveTowardsMouse():void
		{
			var a:Number = angleBetweenMouse(this);
			
			this.velocity.x = Math.cos(a) * speed;
			this.velocity.y = Math.sin(a) * speed;
		}
		
		private function angleBetweenMouse(a:FlxSprite, asDegrees:Boolean = false):Number
		{
			//	In order to get the angle between the object and mouse, we need the objects screen coordinates (rather than world coordinates)
			var p:FlxPoint = a.getScreenXY();
			
			var dx:Number = FlxG.mouse.screenX - p.x;
			var dy:Number = FlxG.mouse.screenY - p.y;
			
			if (asDegrees)
			{
				return FlxMath.asDegrees(Math.atan2(dy, dx));
			}
			else
			{
				return Math.atan2(dy, dx);
			}
		}
		
		public function get speed():Number 
		{
			return _speed;
		}
		
		public function set speed(value:Number):void 
		{
			_speed = value;
		}
		
		override public function hurt(Damage:Number):void 
		{
			health--;
			//super.hurt(Damage);
		}
	}

}