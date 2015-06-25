package;
import flixel.FlxSprite;
import flixel.tweens.FlxTween;
import flixel.tweens.FlxEase;

/**
 * ...
 * @author ...
 */

class Coin extends FlxSprite
{

	public function new(X:Float, Y:Float) 
	{
		super(X, Y);
		loadGraphic(AssetPaths.coin__png, false, 8, 8);
	}
	
	override public function kill():Void 
	{
			alive = false;
			FlxTween.tween(this, { alpha:0, y:y - 16 }, .33, {
				ease:FlxEase.circOut, complete:finishKill
			});
	}
	
	private function finishKill(_):Void {
		exists = false;
	}
}