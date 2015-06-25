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
		public static var WEAPON : Weapon;
		public static var ENEMIES: Enemies;
		
		public static function init()
		{
			PLAYER 	= new Player(FlxG.width/2, FlxG.height/2);
			WEAPON 	= new Weapon(PLAYER);
			ENEMIES	= new Enemies();
		}
	}

}