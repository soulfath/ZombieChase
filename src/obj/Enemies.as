package obj 
{
	import data.Registry;
	import flash.utils.getTimer;
	import org.flixel.FlxGroup;
	import org.flixel.FlxObject;
	import org.flixel.FlxSprite;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Enemies extends FlxGroup 
	{
		
		private var lastReleased:int;
		private var releaseRate:int = 1000;
		private var _target:FlxSprite;
		
		public function Enemies(MaxSize:uint=0) 
		{
			super(MaxSize);
			for (var i:int = 0; i < 20; i++){
				add(new Enemy);
			}
	
		}
		
		public function release():void
		{
			var enemy:Enemy = Enemy(getFirstAvailable());
			
			if (enemy) {
				enemy.launch();
				enemy.exists = true;
				enemy.alive = true;
			}
		}
		
		override public function update():void
		{
			super.update();
			if ( !Registry.isPaused ){
				if (getTimer() > lastReleased + releaseRate)
				{
					lastReleased = getTimer();
					release();
				}
			}
		}
		
		public function bulletHitEnemy(_bullet:FlxObject, _enemy:FlxObject):void
		{
			_enemy.kill();
			_bullet.kill();
			
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