package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import org.flixel.FlxG;
	import org.flixel.FlxGame;
	import state.GameScreen;
	import state.MenuScreen;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Main extends FlxGame
	{
		
		public function Main() 
		{
			super(320, 240, MenuScreen, 2);
			forceDebugger = true;
			FlxG.mouse.show();
		}
		
	}
	
}