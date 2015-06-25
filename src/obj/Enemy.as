package obj 
{
	import org.flixel.FlxG;
	import org.flixel.FlxSprite;
	
	/**
	 * ...
	 * @author Al
	 */
	public class Enemy extends FlxSprite 
	{
		
		public function Enemy(X:Number=0, Y:Number=0, SimpleGraphic:Class=null) 
		{
			super(X, Y, SimpleGraphic);
			makeGraphic(8, 8, 0xffff0000);
			exists = false;
		}
		
		public function launch()
		{
			exists = true;
			x = 64 + int(Math.random() * (FlxG.width - 128));
			y = -16;
			
			velocity.x = -50 + int(Math.random() * 100);
			velocity.y = 100;
		}
		
		override public function update():void
		{
			super.update();
			
			if (y > FlxG.height) {
				exists 	= false;
				y 		= -16;
			}
		}
		
		override public function kill():void 
		{
			super.kill();
		}
		
	}

}