package obj 
{
	import org.flixel.plugin.photonstorm.FlxWeapon;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Weapon extends FlxWeapon 
	{
		
		public function Weapon(_parent:*) 
		{
			super("pixelWeapon");
			
			makePixelBullet(50);
			setFiringPosition//	This weapon will fire from a fixed (stationary) position
			setParent(_parent, "x", "y");
			setFireRate(100);
			setBulletSpeed(300);
		}
		
	}

}