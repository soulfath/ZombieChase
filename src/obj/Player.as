package obj 
{
	import org.flixel.FlxSprite;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Player extends FlxSprite 
	{
		
		public function Player(X:Number=0, Y:Number=0, SimpleGraphic:Class=null) 
		{
			super(X, Y, SimpleGraphic);
			makeGraphic(10, 10);
		}
		
	}

}