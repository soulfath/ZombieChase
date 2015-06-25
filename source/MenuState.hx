package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.util.FlxSave;
using flixel.util.FlxSpriteUtil;
import flixel.FlxState;
import flixel.util.FlxDestroyUtil;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;

import flixel.util.FlxColor;

/**
 * A FlxState which can be used for the game's menu.
 */
class MenuState extends FlxState
{
	private var buttonPlay:FlxButton;
	private var title1:FlxText;
	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	override public function create():Void
	{
		FlxG.cameras.bgColor = 0xff131c1b;
		
		if ( FlxG.sound.music != null ) {
			FlxG.sound.music.stop();
		}
		
		var save:FlxSave = new FlxSave();
		
		if ( save.bind("Coba")) {
			save.data.plays = save.data.plays  == null ? 0.0 : save.data.plays++;
		
			FlxG.log.add("play " + save.data.plays );
			save.close();
		}
		
		title1 = new FlxText(-50, FlxG.height/ 3 , 128, "MYGAME");
		title1.size = 24;
		title1.color = FlxColor.WHITE;
		title1.moves = true;
		title1.velocity.x = 100;
		title1.antialiasing = true;
		add(title1);
		
		buttonPlay = new FlxButton(0, 0, "Play", ClickToPlay);
		add(buttonPlay);
		buttonPlay.screenCenter();
		super.create();
	}
	
	/**
	 * Function that is called when this state is destroyed - you might want to 
	 * consider setting all objects this state uses to null to help garbage collection.
	 */
	override public function destroy():Void
	{
		buttonPlay = FlxDestroyUtil.destroy(buttonPlay);
		super.destroy();
	}
	
	/**
	 * Function that is called once every frame.
	 */
	override public function update():Void
	{
		super.update();
		if ( title1.x > FlxG.width / 2) {
				title1.x = FlxG.width / 2;
				title1.velocity.x = 0;
				FlxG.cameras.flash(FlxColor.RED, 0.5);
				FlxG.cameras.shake(0.035, 0.5);
				title1.color = FlxColor.YELLOW;
		}
		
	}
	
	private function ClickToPlay():Void
	{
		FlxG.switchState(new PlayState());	
	}
	
		
}