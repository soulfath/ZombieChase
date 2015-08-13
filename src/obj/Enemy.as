package obj 
{
	import data.Registry;
	import org.flixel.FlxG;
	import org.flixel.FlxSprite;
	import org.flixel.plugin.photonstorm.FlxVelocity;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Enemy extends FlxSprite 
	{
		private var initPos:int = 0;
		private var _target:FlxSprite;
		
		
		public function Enemy(X:Number=0, Y:Number=0, SimpleGraphic:Class=null) 
		{
			health = 30;
			super(X, Y, SimpleGraphic);
			makeGraphic(8, 8, 0xffff0000);
			exists = false;

		}
		
		public function launch():void
		{
			health = 30;
			exists = true;
			initPos = int(Math.random() * 4);
			target = Registry.PLAYER;
			switch(initPos) {
				case 1: x = 64 + int(Math.random() * (FlxG.width  * 2- 128));
						y = -16;
						break;
				case 2: x = 64 + int(Math.random() * (FlxG.width * 2 - 128));
						y = FlxG.height * 2 + 16;
						break;
				case 3: y = 64 + int(Math.random() * (FlxG.height * 2- 128));
						x = -16;
						break;
				case 0: y = 64 + int(Math.random() * (FlxG.height * 2 - 128));
						x = FlxG.width * 2 + 16;
						break;

			}
			
			FlxVelocity.moveTowardsObject(this, target, 5,1500);
		}
		
		override public function hurt(Damage:Number):void
		{
			health = health - Damage;
			if(health <= 0){
				kill();
			}
		}
		
		public function hit(Damage:Number):Boolean
		{
			health = health - Damage;
			if(health <= 0){
				kill();
				return true;
			}
			return false;
		}
		
		override public function update():void
		{
			super.update();
			if ( !Registry.isPaused )
				FlxVelocity.moveTowardsObject(this, target, 60,1200);
		}
		
		override public function kill():void 
		{
			exists = false;
			//super.kill();
		}
		
		public function get target():FlxSprite 
		{
			return _target;
		}
		
		public function set target(value:FlxSprite):void 
		{
			_target = value;
		}
	
		
	}

}