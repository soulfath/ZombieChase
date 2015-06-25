package state 
{
	import data.Registry;
	import org.flixel.FlxG;
	import org.flixel.FlxState;
	import org.flixel.plugin.photonstorm.FlxControl;
	import org.flixel.plugin.photonstorm.FlxControlHandler;
	
	/**
	 * ...
	 * @author Al
	 */
	public class GameScreen extends FlxState 
	{
		
		public function GameScreen() 
		{
			
		}
		
		override public function create():void 
		{
			super.create();
			Registry.init();
			
			add(Registry.PLAYER);
			add(Registry.WEAPON.group);
			add(Registry.ENEMIES);
			
			
			FlxG.mouse.show();
			if (FlxG.getPlugin(FlxControl) == null)
				FlxG.addPlugin(new FlxControl);
			
			FlxControl.create(Registry.PLAYER, FlxControlHandler.MOVEMENT_ACCELERATES, FlxControlHandler.STOPPING_DECELERATES);
			FlxControl.player1.setWASDControl(true, true, true, true);
			FlxControl.player1.setAdvancedMovementSpeed(150, 150, 150, 150, 100, 100, 200, 200);
			
		}
		
		override public function update():void 
		{
			super.update();
			super.update();
			
			FlxG.overlap(Registry.WEAPON.group, Registry.ENEMIES, Registry.ENEMIES.bulletHitEnemy); 
			Registry.WEAPON.fireAtMouse();
		}
		
	}

}