package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import org.flixel.FlxGame;
	import state.GameScreen;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Main extends FlxGame
	{
		
		public function Main() 
		{
			super(320, 240, GameScreen, 2);
			forceDebugger = true;
		}
		
	}
	
}