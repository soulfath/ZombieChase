package;

import flixel.addons.editors.ogmo.FlxOgmoLoader;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.group.FlxTypedGroup;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.util.FlxRandom;
import flixel.FlxCamera;
import flixel.tile.FlxTilemap;
import openfl.Assets;
import flixel.FlxObject;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	private var _tileMap:FlxTilemap;
	private var _player:Player;
	private var _map:FlxOgmoLoader;
	private var _mWalss:FlxTilemap;
	private var _grpCoins:FlxTypedGroup<Coin>;
	private var _grpEnemies = new FlxTypedGroup<Enemy>();
	 
	override public function create():Void
	{
		_player = new Player(16, 16);
		_grpCoins = new FlxTypedGroup<Coin>();
		_map = new FlxOgmoLoader(AssetPaths.room1__oel);
		_map.loadEntities(placeEntities, "entities");
		_mWalss = _map.loadTilemap(AssetPaths.tiles__png, 16, 16, "wall");
		_mWalss.setTileProperties(1, FlxObject.NONE);
		_mWalss.setTileProperties(2, FlxObject.ANY);
		add(_mWalss);
		add(_grpEnemies);
		add(_grpCoins);
		add(_player);
		FlxG.camera.follow(_player, FlxCamera.STYLE_TOPDOWN, 1);
		super.create();
	}
	
	/**
	 * Function that is called when this state is destroyed - you might want to 
	 * consider setting all objects this state uses to null to help garbage collection.
	 */
	override public function destroy():Void
	{
		super.destroy();
	}

	/**
	 * Function that is called once every frame.
	 */
	override public function update():Void
	{
		super.update();
		// Collisions with environment
		FlxG.collide(_mWalss, _player);
		FlxG.collide(_player, _grpCoins, playerTouchCoin);
		FlxG.collide(_grpEnemies, _mWalss);
		_grpEnemies.forEachAlive(checkEnemyVision);
	}	
	
	function checkEnemyVision(e:Enemy) 
	{
		 if (_mWalss.ray(e.getMidpoint(), _player.getMidpoint()))
		 {
			 e.seesPlayer = true;
			 e.playerPos.copyFrom(_player.getMidpoint());
		 }
		 else
			 e.seesPlayer = false;
	}
	
	function playerTouchCoin(P:Player,C:Coin) 
	{
		if ( P.alive && P.exists && C.alive && C.exists) {
				C.kill();
		}
	}
	
	private function placeEntities(entityName:String, entityData:Xml):Void {
		var x:Int = Std.parseInt(entityData.get("x"));
		var y:Int = Std.parseInt(entityData.get("y"));
		if ( entityName == "player" ) {
				_player.x = x;
				_player.y = y;
		}
		else if ( entityName == "coin" ) {
			_grpCoins.add(new Coin(x + 4, y + 4));
		}
		else if ( entityName == "enemy") {
			_grpEnemies.add(new Enemy(x + 4, y, Std.parseInt(entityData.get("etype"))));
		}
	}

}