package data
{
	import obj.Enemies;
	import obj.Player;
	import obj.Weapon;
	import org.flixel.FlxG;
	/**
	 * ...
	 * @author Al
	 */
	public class Registry 
	{
		
		public static var PLAYER : Player;
		public static var PLAYER2 : Player;
		public static var ENEMIES: Enemies;
		public static var WEAPON: Weapon;
		public static var isPaused:Boolean;
		
		[Embed(source="/data/background.png")] public static var IMAGEBACKGROUND:Class;
		[Embed(source="/data/private/graphics/trophy.png")] public static var TROPHY:Class;
		[Embed(source = "../../assets/sprites/zelda-hearts.png")] public static var zeldaLifeHeartsPNG:Class;
		[Embed(source = "../../assets/sprites/zelda-life.png")] public static var zeldaLifePanelPNG:Class;
		[Embed(source = '../../assets/sprites/healthbar.png')] public static var healthBarPNG:Class;
	
		public static function init():void
		{
			PLAYER 	= new Player(FlxG.width/2, FlxG.height/2);
			PLAYER2 	= new Player(FlxG.width / 2, FlxG.height / 2);
			WEAPON = new Weapon(PLAYER);
			ENEMIES	= new Enemies();
			isPaused = true;
		}
	}

}