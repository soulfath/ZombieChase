package obj 
{
	import flash.utils.getTimer;
	import org.flixel.FlxGroup;
	import org.flixel.FlxObject;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Enemies extends FlxGroup 
	{
		
		private var lastReleased:int;
		private var releaseRate:int = 500;
		public function Enemies(MaxSize:uint=0) 
		{
			super(MaxSize);
			for (var i:int = 0; i < 100; i++)
				add(new Enemy);
	
		}
		
		public function release():void
		{
			var enemy:Enemy = Enemy(getFirstAvailable());
			
			if (enemy) {
				enemy.launch();
			}
		}
		
		override public function update():void
		{
			super.update();
			
			if (getTimer() > lastReleased + releaseRate)
			{
				lastReleased = getTimer();
				release();
			}
		}
		
		public function bulletHitEnemy(_bullet:FlxObject, _enemy:FlxObject):void
		{
			_enemy.kill();
			_bullet.kill();
			
		}
	}

}