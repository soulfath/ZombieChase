package;


import haxe.Timer;
import haxe.Unserializer;
import lime.app.Preloader;
import lime.audio.AudioSource;
import lime.audio.openal.AL;
import lime.audio.AudioBuffer;
import lime.graphics.Image;
import lime.text.Font;
import lime.utils.ByteArray;
import lime.utils.UInt8Array;
import lime.Assets;

#if sys
import sys.FileSystem;
#end

#if flash
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Loader;
import flash.events.Event;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLRequest;
#end


class DefaultAssetLibrary extends AssetLibrary {
	
	
	public var className (default, null) = new Map <String, Dynamic> ();
	public var path (default, null) = new Map <String, String> ();
	public var type (default, null) = new Map <String, AssetType> ();
	
	private var lastModified:Float;
	private var timer:Timer;
	
	
	public function new () {
		
		super ();
		
		#if flash
		
		className.set ("assets/data/80.csv", __ASSET__assets_data_80_csv);
		type.set ("assets/data/80.csv", AssetType.TEXT);
		className.set ("assets/data/attract1.fgr", __ASSET__assets_data_attract1_fgr);
		type.set ("assets/data/attract1.fgr", AssetType.TEXT);
		className.set ("assets/data/attract2.fgr", __ASSET__assets_data_attract2_fgr);
		type.set ("assets/data/attract2.fgr", AssetType.TEXT);
		className.set ("assets/data/data-goes-here.txt", __ASSET__assets_data_data_goes_here_txt);
		type.set ("assets/data/data-goes-here.txt", AssetType.TEXT);
		className.set ("assets/data/level.oep", __ASSET__assets_data_level_oep);
		type.set ("assets/data/level.oep", AssetType.TEXT);
		className.set ("assets/data/room1.oel", __ASSET__assets_data_room1_oel);
		type.set ("assets/data/room1.oel", AssetType.TEXT);
		className.set ("assets/images/bot.png", __ASSET__assets_images_bot_png);
		type.set ("assets/images/bot.png", AssetType.IMAGE);
		className.set ("assets/images/bot_bullet.png", __ASSET__assets_images_bot_bullet_png);
		type.set ("assets/images/bot_bullet.png", AssetType.IMAGE);
		className.set ("assets/images/bullet.png", __ASSET__assets_images_bullet_png);
		type.set ("assets/images/bullet.png", AssetType.IMAGE);
		className.set ("assets/images/coin.png", __ASSET__assets_images_coin_png);
		type.set ("assets/images/coin.png", AssetType.IMAGE);
		className.set ("assets/images/cursor.png", __ASSET__assets_images_cursor_png);
		type.set ("assets/images/cursor.png", AssetType.IMAGE);
		className.set ("assets/images/dirt.png", __ASSET__assets_images_dirt_png);
		type.set ("assets/images/dirt.png", AssetType.IMAGE);
		className.set ("assets/images/dirt_top.png", __ASSET__assets_images_dirt_top_png);
		type.set ("assets/images/dirt_top.png", AssetType.IMAGE);
		className.set ("assets/images/gibs.png", __ASSET__assets_images_gibs_png);
		type.set ("assets/images/gibs.png", AssetType.IMAGE);
		className.set ("assets/images/images-go-here.txt", __ASSET__assets_images_images_go_here_txt);
		type.set ("assets/images/images-go-here.txt", AssetType.TEXT);
		className.set ("assets/images/img_tiles.png", __ASSET__assets_images_img_tiles_png);
		type.set ("assets/images/img_tiles.png", AssetType.IMAGE);
		className.set ("assets/images/jet.png", __ASSET__assets_images_jet_png);
		type.set ("assets/images/jet.png", AssetType.IMAGE);
		className.set ("assets/images/miniframe.png", __ASSET__assets_images_miniframe_png);
		type.set ("assets/images/miniframe.png", AssetType.IMAGE);
		className.set ("assets/images/spaceman.png", __ASSET__assets_images_spaceman_png);
		type.set ("assets/images/spaceman.png", AssetType.IMAGE);
		className.set ("assets/images/spawner.png", __ASSET__assets_images_spawner_png);
		type.set ("assets/images/spawner.png", AssetType.IMAGE);
		className.set ("assets/images/spawner_gibs.png", __ASSET__assets_images_spawner_gibs_png);
		type.set ("assets/images/spawner_gibs.png", AssetType.IMAGE);
		className.set ("assets/images/tech_tiles.png", __ASSET__assets_images_tech_tiles_png);
		type.set ("assets/images/tech_tiles.png", AssetType.IMAGE);
		className.set ("assets/images/tiles.png", __ASSET__assets_images_tiles_png);
		type.set ("assets/images/tiles.png", AssetType.IMAGE);
		className.set ("assets/music/music-goes-here.txt", __ASSET__assets_music_music_goes_here_txt);
		type.set ("assets/music/music-goes-here.txt", AssetType.TEXT);
		className.set ("assets/sounds/asplode.mp3", __ASSET__assets_sounds_asplode_mp3);
		type.set ("assets/sounds/asplode.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/asplode.ogg", __ASSET__assets_sounds_asplode_ogg);
		type.set ("assets/sounds/asplode.ogg", AssetType.SOUND);
		className.set ("assets/sounds/button.mp3", __ASSET__assets_sounds_button_mp3);
		type.set ("assets/sounds/button.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/button.ogg", __ASSET__assets_sounds_button_ogg);
		type.set ("assets/sounds/button.ogg", AssetType.SOUND);
		className.set ("assets/sounds/countdown.mp3", __ASSET__assets_sounds_countdown_mp3);
		type.set ("assets/sounds/countdown.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/countdown.ogg", __ASSET__assets_sounds_countdown_ogg);
		type.set ("assets/sounds/countdown.ogg", AssetType.SOUND);
		className.set ("assets/sounds/enemy.mp3", __ASSET__assets_sounds_enemy_mp3);
		type.set ("assets/sounds/enemy.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/enemy.ogg", __ASSET__assets_sounds_enemy_ogg);
		type.set ("assets/sounds/enemy.ogg", AssetType.SOUND);
		className.set ("assets/sounds/hit.mp3", __ASSET__assets_sounds_hit_mp3);
		type.set ("assets/sounds/hit.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/hit.ogg", __ASSET__assets_sounds_hit_ogg);
		type.set ("assets/sounds/hit.ogg", AssetType.SOUND);
		className.set ("assets/sounds/hurt.mp3", __ASSET__assets_sounds_hurt_mp3);
		type.set ("assets/sounds/hurt.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/hurt.ogg", __ASSET__assets_sounds_hurt_ogg);
		type.set ("assets/sounds/hurt.ogg", AssetType.SOUND);
		className.set ("assets/sounds/jam.mp3", __ASSET__assets_sounds_jam_mp3);
		type.set ("assets/sounds/jam.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/jam.ogg", __ASSET__assets_sounds_jam_ogg);
		type.set ("assets/sounds/jam.ogg", AssetType.SOUND);
		className.set ("assets/sounds/jet.mp3", __ASSET__assets_sounds_jet_mp3);
		type.set ("assets/sounds/jet.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/jet.ogg", __ASSET__assets_sounds_jet_ogg);
		type.set ("assets/sounds/jet.ogg", AssetType.SOUND);
		className.set ("assets/sounds/jump.mp3", __ASSET__assets_sounds_jump_mp3);
		type.set ("assets/sounds/jump.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/jump.ogg", __ASSET__assets_sounds_jump_ogg);
		type.set ("assets/sounds/jump.ogg", AssetType.SOUND);
		className.set ("assets/sounds/menu_hit.mp3", __ASSET__assets_sounds_menu_hit_mp3);
		type.set ("assets/sounds/menu_hit.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/menu_hit.ogg", __ASSET__assets_sounds_menu_hit_ogg);
		type.set ("assets/sounds/menu_hit.ogg", AssetType.SOUND);
		className.set ("assets/sounds/menu_hit_2.mp3", __ASSET__assets_sounds_menu_hit_2_mp3);
		type.set ("assets/sounds/menu_hit_2.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/menu_hit_2.ogg", __ASSET__assets_sounds_menu_hit_2_ogg);
		type.set ("assets/sounds/menu_hit_2.ogg", AssetType.SOUND);
		className.set ("assets/sounds/mode.mp3", __ASSET__assets_sounds_mode_mp3);
		type.set ("assets/sounds/mode.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/mode.ogg", __ASSET__assets_sounds_mode_ogg);
		type.set ("assets/sounds/mode.ogg", AssetType.SOUND);
		className.set ("assets/sounds/shoot.mp3", __ASSET__assets_sounds_shoot_mp3);
		type.set ("assets/sounds/shoot.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/shoot.ogg", __ASSET__assets_sounds_shoot_ogg);
		type.set ("assets/sounds/shoot.ogg", AssetType.SOUND);
		className.set ("assets/sounds/sounds-go-here.txt", __ASSET__assets_sounds_sounds_go_here_txt);
		type.set ("assets/sounds/sounds-go-here.txt", AssetType.TEXT);
		className.set ("assets/sounds/beep.mp3", __ASSET__assets_sounds_beep_mp3);
		type.set ("assets/sounds/beep.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/flixel.mp3", __ASSET__assets_sounds_flixel_mp3);
		type.set ("assets/sounds/flixel.mp3", AssetType.MUSIC);
		className.set ("images/bot.png", __ASSET__images_bot_png);
		type.set ("images/bot.png", AssetType.IMAGE);
		className.set ("images/bot_bullet.png", __ASSET__images_bot_bullet_png);
		type.set ("images/bot_bullet.png", AssetType.IMAGE);
		className.set ("images/bullet.png", __ASSET__images_bullet_png);
		type.set ("images/bullet.png", AssetType.IMAGE);
		className.set ("images/coin.png", __ASSET__images_coin_png);
		type.set ("images/coin.png", AssetType.IMAGE);
		className.set ("images/cursor.png", __ASSET__images_cursor_png);
		type.set ("images/cursor.png", AssetType.IMAGE);
		className.set ("images/dirt.png", __ASSET__images_dirt_png);
		type.set ("images/dirt.png", AssetType.IMAGE);
		className.set ("images/dirt_top.png", __ASSET__images_dirt_top_png);
		type.set ("images/dirt_top.png", AssetType.IMAGE);
		className.set ("images/gibs.png", __ASSET__images_gibs_png);
		type.set ("images/gibs.png", AssetType.IMAGE);
		className.set ("images/images-go-here.txt", __ASSET__images_images_go_here_txt);
		type.set ("images/images-go-here.txt", AssetType.TEXT);
		className.set ("images/img_tiles.png", __ASSET__images_img_tiles_png);
		type.set ("images/img_tiles.png", AssetType.IMAGE);
		className.set ("images/jet.png", __ASSET__images_jet_png);
		type.set ("images/jet.png", AssetType.IMAGE);
		className.set ("images/miniframe.png", __ASSET__images_miniframe_png);
		type.set ("images/miniframe.png", AssetType.IMAGE);
		className.set ("images/spaceman.png", __ASSET__images_spaceman_png);
		type.set ("images/spaceman.png", AssetType.IMAGE);
		className.set ("images/spawner.png", __ASSET__images_spawner_png);
		type.set ("images/spawner.png", AssetType.IMAGE);
		className.set ("images/spawner_gibs.png", __ASSET__images_spawner_gibs_png);
		type.set ("images/spawner_gibs.png", AssetType.IMAGE);
		className.set ("images/tech_tiles.png", __ASSET__images_tech_tiles_png);
		type.set ("images/tech_tiles.png", AssetType.IMAGE);
		className.set ("images/tiles.png", __ASSET__images_tiles_png);
		type.set ("images/tiles.png", AssetType.IMAGE);
		className.set ("data/80.csv", __ASSET__data_80_csv);
		type.set ("data/80.csv", AssetType.TEXT);
		className.set ("data/attract1.fgr", __ASSET__data_attract1_fgr);
		type.set ("data/attract1.fgr", AssetType.TEXT);
		className.set ("data/attract2.fgr", __ASSET__data_attract2_fgr);
		type.set ("data/attract2.fgr", AssetType.TEXT);
		className.set ("data/data-goes-here.txt", __ASSET__data_data_goes_here_txt);
		type.set ("data/data-goes-here.txt", AssetType.TEXT);
		className.set ("data/level.oep", __ASSET__data_level_oep);
		type.set ("data/level.oep", AssetType.TEXT);
		className.set ("data/room1.oel", __ASSET__data_room1_oel);
		type.set ("data/room1.oel", AssetType.TEXT);
		className.set ("Asplode", __ASSET__assets_sounds_asplode_mp4);
		type.set ("Asplode", AssetType.MUSIC);
		className.set ("Button", __ASSET__assets_sounds_button_mp4);
		type.set ("Button", AssetType.MUSIC);
		className.set ("Countdown", __ASSET__assets_sounds_countdown_mp4);
		type.set ("Countdown", AssetType.MUSIC);
		className.set ("Enemy", __ASSET__assets_sounds_enemy_mp4);
		type.set ("Enemy", AssetType.MUSIC);
		className.set ("Hit", __ASSET__assets_sounds_hit_mp4);
		type.set ("Hit", AssetType.MUSIC);
		className.set ("Hurt", __ASSET__assets_sounds_hurt_mp4);
		type.set ("Hurt", AssetType.MUSIC);
		className.set ("Jam", __ASSET__assets_sounds_jam_mp4);
		type.set ("Jam", AssetType.MUSIC);
		className.set ("Jet", __ASSET__assets_sounds_jet_mp4);
		type.set ("Jet", AssetType.MUSIC);
		className.set ("Jump", __ASSET__assets_sounds_jump_mp4);
		type.set ("Jump", AssetType.MUSIC);
		className.set ("MenuHit", __ASSET__assets_sounds_menu_hit_mp4);
		type.set ("MenuHit", AssetType.MUSIC);
		className.set ("MenuHit2", __ASSET__assets_sounds_menu_hit_3);
		type.set ("MenuHit2", AssetType.MUSIC);
		className.set ("Mode", __ASSET__assets_sounds_mode_mp4);
		type.set ("Mode", AssetType.MUSIC);
		className.set ("Shoot", __ASSET__assets_sounds_shoot_mp4);
		type.set ("Shoot", AssetType.MUSIC);
		
		
		#elseif html5
		
		var id;
		id = "assets/data/80.csv";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/data/attract1.fgr";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/data/attract2.fgr";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/data/data-goes-here.txt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/data/level.oep";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/data/room1.oel";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/images/bot.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/bot_bullet.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/bullet.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/coin.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/cursor.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/dirt.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/dirt_top.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/gibs.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/images-go-here.txt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/images/img_tiles.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/jet.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/miniframe.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/spaceman.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/spawner.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/spawner_gibs.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/tech_tiles.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/images/tiles.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "assets/music/music-goes-here.txt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/sounds/asplode.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/asplode.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/button.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/button.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/countdown.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/countdown.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/enemy.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/enemy.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/hit.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/hit.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/hurt.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/hurt.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/jam.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/jam.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/jet.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/jet.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/jump.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/jump.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/menu_hit.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/menu_hit.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/menu_hit_2.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/menu_hit_2.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/mode.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/mode.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/shoot.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/shoot.ogg";
		path.set (id, id);
		
		type.set (id, AssetType.SOUND);
		id = "assets/sounds/sounds-go-here.txt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/sounds/beep.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/flixel.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "images/bot.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/bot_bullet.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/bullet.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/coin.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/cursor.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/dirt.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/dirt_top.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/gibs.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/images-go-here.txt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "images/img_tiles.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/jet.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/miniframe.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/spaceman.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/spawner.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/spawner_gibs.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/tech_tiles.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "images/tiles.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/80.csv";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/attract1.fgr";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/attract2.fgr";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/data-goes-here.txt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/level.oep";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/room1.oel";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "Asplode";
		path.set (id, "assets/sounds/asplode.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Button";
		path.set (id, "assets/sounds/button.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Countdown";
		path.set (id, "assets/sounds/countdown.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Enemy";
		path.set (id, "assets/sounds/enemy.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Hit";
		path.set (id, "assets/sounds/hit.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Hurt";
		path.set (id, "assets/sounds/hurt.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Jam";
		path.set (id, "assets/sounds/jam.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Jet";
		path.set (id, "assets/sounds/jet.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Jump";
		path.set (id, "assets/sounds/jump.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "MenuHit";
		path.set (id, "assets/sounds/menu_hit.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "MenuHit2";
		path.set (id, "assets/sounds/menu_hit_2.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Mode";
		path.set (id, "assets/sounds/mode.mp3");
		
		type.set (id, AssetType.MUSIC);
		id = "Shoot";
		path.set (id, "assets/sounds/shoot.mp3");
		
		type.set (id, AssetType.MUSIC);
		
		
		var assetsPrefix = ApplicationMain.config.assetsPrefix;
		if (assetsPrefix != null) {
			for (k in path.keys()) {
				path.set(k, assetsPrefix + path[k]);
			}
		}
		
		#else
		
		#if openfl
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		#end
		
		#if (windows || mac || linux)
		
		var useManifest = false;
		
		className.set ("assets/data/80.csv", __ASSET__assets_data_80_csv);
		type.set ("assets/data/80.csv", AssetType.TEXT);
		
		className.set ("assets/data/attract1.fgr", __ASSET__assets_data_attract1_fgr);
		type.set ("assets/data/attract1.fgr", AssetType.TEXT);
		
		className.set ("assets/data/attract2.fgr", __ASSET__assets_data_attract2_fgr);
		type.set ("assets/data/attract2.fgr", AssetType.TEXT);
		
		className.set ("assets/data/data-goes-here.txt", __ASSET__assets_data_data_goes_here_txt);
		type.set ("assets/data/data-goes-here.txt", AssetType.TEXT);
		
		className.set ("assets/data/level.oep", __ASSET__assets_data_level_oep);
		type.set ("assets/data/level.oep", AssetType.TEXT);
		
		className.set ("assets/data/room1.oel", __ASSET__assets_data_room1_oel);
		type.set ("assets/data/room1.oel", AssetType.TEXT);
		
		className.set ("assets/images/bot.png", __ASSET__assets_images_bot_png);
		type.set ("assets/images/bot.png", AssetType.IMAGE);
		
		className.set ("assets/images/bot_bullet.png", __ASSET__assets_images_bot_bullet_png);
		type.set ("assets/images/bot_bullet.png", AssetType.IMAGE);
		
		className.set ("assets/images/bullet.png", __ASSET__assets_images_bullet_png);
		type.set ("assets/images/bullet.png", AssetType.IMAGE);
		
		className.set ("assets/images/coin.png", __ASSET__assets_images_coin_png);
		type.set ("assets/images/coin.png", AssetType.IMAGE);
		
		className.set ("assets/images/cursor.png", __ASSET__assets_images_cursor_png);
		type.set ("assets/images/cursor.png", AssetType.IMAGE);
		
		className.set ("assets/images/dirt.png", __ASSET__assets_images_dirt_png);
		type.set ("assets/images/dirt.png", AssetType.IMAGE);
		
		className.set ("assets/images/dirt_top.png", __ASSET__assets_images_dirt_top_png);
		type.set ("assets/images/dirt_top.png", AssetType.IMAGE);
		
		className.set ("assets/images/gibs.png", __ASSET__assets_images_gibs_png);
		type.set ("assets/images/gibs.png", AssetType.IMAGE);
		
		className.set ("assets/images/images-go-here.txt", __ASSET__assets_images_images_go_here_txt);
		type.set ("assets/images/images-go-here.txt", AssetType.TEXT);
		
		className.set ("assets/images/img_tiles.png", __ASSET__assets_images_img_tiles_png);
		type.set ("assets/images/img_tiles.png", AssetType.IMAGE);
		
		className.set ("assets/images/jet.png", __ASSET__assets_images_jet_png);
		type.set ("assets/images/jet.png", AssetType.IMAGE);
		
		className.set ("assets/images/miniframe.png", __ASSET__assets_images_miniframe_png);
		type.set ("assets/images/miniframe.png", AssetType.IMAGE);
		
		className.set ("assets/images/spaceman.png", __ASSET__assets_images_spaceman_png);
		type.set ("assets/images/spaceman.png", AssetType.IMAGE);
		
		className.set ("assets/images/spawner.png", __ASSET__assets_images_spawner_png);
		type.set ("assets/images/spawner.png", AssetType.IMAGE);
		
		className.set ("assets/images/spawner_gibs.png", __ASSET__assets_images_spawner_gibs_png);
		type.set ("assets/images/spawner_gibs.png", AssetType.IMAGE);
		
		className.set ("assets/images/tech_tiles.png", __ASSET__assets_images_tech_tiles_png);
		type.set ("assets/images/tech_tiles.png", AssetType.IMAGE);
		
		className.set ("assets/images/tiles.png", __ASSET__assets_images_tiles_png);
		type.set ("assets/images/tiles.png", AssetType.IMAGE);
		
		className.set ("assets/music/music-goes-here.txt", __ASSET__assets_music_music_goes_here_txt);
		type.set ("assets/music/music-goes-here.txt", AssetType.TEXT);
		
		className.set ("assets/sounds/asplode.mp3", __ASSET__assets_sounds_asplode_mp3);
		type.set ("assets/sounds/asplode.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/asplode.ogg", __ASSET__assets_sounds_asplode_ogg);
		type.set ("assets/sounds/asplode.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/button.mp3", __ASSET__assets_sounds_button_mp3);
		type.set ("assets/sounds/button.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/button.ogg", __ASSET__assets_sounds_button_ogg);
		type.set ("assets/sounds/button.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/countdown.mp3", __ASSET__assets_sounds_countdown_mp3);
		type.set ("assets/sounds/countdown.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/countdown.ogg", __ASSET__assets_sounds_countdown_ogg);
		type.set ("assets/sounds/countdown.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/enemy.mp3", __ASSET__assets_sounds_enemy_mp3);
		type.set ("assets/sounds/enemy.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/enemy.ogg", __ASSET__assets_sounds_enemy_ogg);
		type.set ("assets/sounds/enemy.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/hit.mp3", __ASSET__assets_sounds_hit_mp3);
		type.set ("assets/sounds/hit.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/hit.ogg", __ASSET__assets_sounds_hit_ogg);
		type.set ("assets/sounds/hit.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/hurt.mp3", __ASSET__assets_sounds_hurt_mp3);
		type.set ("assets/sounds/hurt.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/hurt.ogg", __ASSET__assets_sounds_hurt_ogg);
		type.set ("assets/sounds/hurt.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/jam.mp3", __ASSET__assets_sounds_jam_mp3);
		type.set ("assets/sounds/jam.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/jam.ogg", __ASSET__assets_sounds_jam_ogg);
		type.set ("assets/sounds/jam.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/jet.mp3", __ASSET__assets_sounds_jet_mp3);
		type.set ("assets/sounds/jet.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/jet.ogg", __ASSET__assets_sounds_jet_ogg);
		type.set ("assets/sounds/jet.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/jump.mp3", __ASSET__assets_sounds_jump_mp3);
		type.set ("assets/sounds/jump.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/jump.ogg", __ASSET__assets_sounds_jump_ogg);
		type.set ("assets/sounds/jump.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/menu_hit.mp3", __ASSET__assets_sounds_menu_hit_mp3);
		type.set ("assets/sounds/menu_hit.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/menu_hit.ogg", __ASSET__assets_sounds_menu_hit_ogg);
		type.set ("assets/sounds/menu_hit.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/menu_hit_2.mp3", __ASSET__assets_sounds_menu_hit_2_mp3);
		type.set ("assets/sounds/menu_hit_2.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/menu_hit_2.ogg", __ASSET__assets_sounds_menu_hit_2_ogg);
		type.set ("assets/sounds/menu_hit_2.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/mode.mp3", __ASSET__assets_sounds_mode_mp3);
		type.set ("assets/sounds/mode.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/mode.ogg", __ASSET__assets_sounds_mode_ogg);
		type.set ("assets/sounds/mode.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/shoot.mp3", __ASSET__assets_sounds_shoot_mp3);
		type.set ("assets/sounds/shoot.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/shoot.ogg", __ASSET__assets_sounds_shoot_ogg);
		type.set ("assets/sounds/shoot.ogg", AssetType.SOUND);
		
		className.set ("assets/sounds/sounds-go-here.txt", __ASSET__assets_sounds_sounds_go_here_txt);
		type.set ("assets/sounds/sounds-go-here.txt", AssetType.TEXT);
		
		className.set ("assets/sounds/beep.mp3", __ASSET__assets_sounds_beep_mp3);
		type.set ("assets/sounds/beep.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/flixel.mp3", __ASSET__assets_sounds_flixel_mp3);
		type.set ("assets/sounds/flixel.mp3", AssetType.MUSIC);
		
		className.set ("images/bot.png", __ASSET__images_bot_png);
		type.set ("images/bot.png", AssetType.IMAGE);
		
		className.set ("images/bot_bullet.png", __ASSET__images_bot_bullet_png);
		type.set ("images/bot_bullet.png", AssetType.IMAGE);
		
		className.set ("images/bullet.png", __ASSET__images_bullet_png);
		type.set ("images/bullet.png", AssetType.IMAGE);
		
		className.set ("images/coin.png", __ASSET__images_coin_png);
		type.set ("images/coin.png", AssetType.IMAGE);
		
		className.set ("images/cursor.png", __ASSET__images_cursor_png);
		type.set ("images/cursor.png", AssetType.IMAGE);
		
		className.set ("images/dirt.png", __ASSET__images_dirt_png);
		type.set ("images/dirt.png", AssetType.IMAGE);
		
		className.set ("images/dirt_top.png", __ASSET__images_dirt_top_png);
		type.set ("images/dirt_top.png", AssetType.IMAGE);
		
		className.set ("images/gibs.png", __ASSET__images_gibs_png);
		type.set ("images/gibs.png", AssetType.IMAGE);
		
		className.set ("images/images-go-here.txt", __ASSET__images_images_go_here_txt);
		type.set ("images/images-go-here.txt", AssetType.TEXT);
		
		className.set ("images/img_tiles.png", __ASSET__images_img_tiles_png);
		type.set ("images/img_tiles.png", AssetType.IMAGE);
		
		className.set ("images/jet.png", __ASSET__images_jet_png);
		type.set ("images/jet.png", AssetType.IMAGE);
		
		className.set ("images/miniframe.png", __ASSET__images_miniframe_png);
		type.set ("images/miniframe.png", AssetType.IMAGE);
		
		className.set ("images/spaceman.png", __ASSET__images_spaceman_png);
		type.set ("images/spaceman.png", AssetType.IMAGE);
		
		className.set ("images/spawner.png", __ASSET__images_spawner_png);
		type.set ("images/spawner.png", AssetType.IMAGE);
		
		className.set ("images/spawner_gibs.png", __ASSET__images_spawner_gibs_png);
		type.set ("images/spawner_gibs.png", AssetType.IMAGE);
		
		className.set ("images/tech_tiles.png", __ASSET__images_tech_tiles_png);
		type.set ("images/tech_tiles.png", AssetType.IMAGE);
		
		className.set ("images/tiles.png", __ASSET__images_tiles_png);
		type.set ("images/tiles.png", AssetType.IMAGE);
		
		className.set ("data/80.csv", __ASSET__data_80_csv);
		type.set ("data/80.csv", AssetType.TEXT);
		
		className.set ("data/attract1.fgr", __ASSET__data_attract1_fgr);
		type.set ("data/attract1.fgr", AssetType.TEXT);
		
		className.set ("data/attract2.fgr", __ASSET__data_attract2_fgr);
		type.set ("data/attract2.fgr", AssetType.TEXT);
		
		className.set ("data/data-goes-here.txt", __ASSET__data_data_goes_here_txt);
		type.set ("data/data-goes-here.txt", AssetType.TEXT);
		
		className.set ("data/level.oep", __ASSET__data_level_oep);
		type.set ("data/level.oep", AssetType.TEXT);
		
		className.set ("data/room1.oel", __ASSET__data_room1_oel);
		type.set ("data/room1.oel", AssetType.TEXT);
		
		className.set ("Asplode", __ASSET__assets_sounds_asplode_mp4);
		type.set ("Asplode", AssetType.MUSIC);
		
		className.set ("Button", __ASSET__assets_sounds_button_mp4);
		type.set ("Button", AssetType.MUSIC);
		
		className.set ("Countdown", __ASSET__assets_sounds_countdown_mp4);
		type.set ("Countdown", AssetType.MUSIC);
		
		className.set ("Enemy", __ASSET__assets_sounds_enemy_mp4);
		type.set ("Enemy", AssetType.MUSIC);
		
		className.set ("Hit", __ASSET__assets_sounds_hit_mp4);
		type.set ("Hit", AssetType.MUSIC);
		
		className.set ("Hurt", __ASSET__assets_sounds_hurt_mp4);
		type.set ("Hurt", AssetType.MUSIC);
		
		className.set ("Jam", __ASSET__assets_sounds_jam_mp4);
		type.set ("Jam", AssetType.MUSIC);
		
		className.set ("Jet", __ASSET__assets_sounds_jet_mp4);
		type.set ("Jet", AssetType.MUSIC);
		
		className.set ("Jump", __ASSET__assets_sounds_jump_mp4);
		type.set ("Jump", AssetType.MUSIC);
		
		className.set ("MenuHit", __ASSET__assets_sounds_menu_hit_mp4);
		type.set ("MenuHit", AssetType.MUSIC);
		
		className.set ("MenuHit2", __ASSET__assets_sounds_menu_hit_3);
		type.set ("MenuHit2", AssetType.MUSIC);
		
		className.set ("Mode", __ASSET__assets_sounds_mode_mp4);
		type.set ("Mode", AssetType.MUSIC);
		
		className.set ("Shoot", __ASSET__assets_sounds_shoot_mp4);
		type.set ("Shoot", AssetType.MUSIC);
		
		
		if (useManifest) {
			
			loadManifest ();
			
			if (Sys.args ().indexOf ("-livereload") > -1) {
				
				var path = FileSystem.fullPath ("manifest");
				lastModified = FileSystem.stat (path).mtime.getTime ();
				
				timer = new Timer (2000);
				timer.run = function () {
					
					var modified = FileSystem.stat (path).mtime.getTime ();
					
					if (modified > lastModified) {
						
						lastModified = modified;
						loadManifest ();
						
						if (eventCallback != null) {
							
							eventCallback (this, "change");
							
						}
						
					}
					
				}
				
			}
			
		}
		
		#else
		
		loadManifest ();
		
		#end
		#end
		
	}
	
	
	public override function exists (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var assetType = this.type.get (id);
		
		if (assetType != null) {
			
			if (assetType == requestedType || ((requestedType == SOUND || requestedType == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if (requestedType == BINARY && (assetType == BINARY || assetType == TEXT || assetType == IMAGE)) {
				
				return true;
				
			} else if (requestedType == null || path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (requestedType == BINARY || requestedType == null || (assetType == BINARY && requestedType == TEXT)) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getAudioBuffer (id:String):AudioBuffer {
		
		#if flash
		
		var buffer = new AudioBuffer ();
		buffer.src = cast (Type.createInstance (className.get (id), []), Sound);
		return buffer;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return AudioBuffer.fromBytes (cast (Type.createInstance (className.get (id), []), ByteArray));
		else return AudioBuffer.fromFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if flash
		
		switch (type.get (id)) {
			
			case TEXT, BINARY:
				
				return cast (Type.createInstance (className.get (id), []), ByteArray);
			
			case IMAGE:
				
				var bitmapData = cast (Type.createInstance (className.get (id), []), BitmapData);
				return bitmapData.getPixels (bitmapData.rect);
			
			default:
				
				return null;
			
		}
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);
		
		#elseif html5
		
		var bytes:ByteArray = null;
		var data = Preloader.loaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			bytes = new ByteArray ();
			bytes.writeUTFBytes (data);
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes;
			
		} else {
			
			return null;
		}
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		else return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Font {
		
		#if flash
		
		var src = Type.createInstance (className.get (id), []);
		
		var font = new Font (src.fontName);
		font.src = src;
		return font;
		
		#elseif html5
		
		return cast (Type.createInstance (className.get (id), []), Font);
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			return cast (Type.createInstance (fontClass, []), Font);
			
		} else {
			
			return Font.fromFile (path.get (id));
			
		}
		
		#end
		
	}
	
	
	public override function getImage (id:String):Image {
		
		#if flash
		
		return Image.fromBitmapData (cast (Type.createInstance (className.get (id), []), BitmapData));
		
		#elseif html5
		
		return Image.fromImageElement (Preloader.images.get (path.get (id)));
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			return cast (Type.createInstance (fontClass, []), Image);
			
		} else {
			
			return Image.fromFile (path.get (id));
			
		}
		
		#end
		
	}
	
	
	/*public override function getMusic (id:String):Dynamic {
		
		#if flash
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		//var sound = new Sound ();
		//sound.__buffer = true;
		//sound.load (new URLRequest (path.get (id)));
		//return sound;
		return null;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		return null;
		//if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		//else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}*/
	
	
	public override function getPath (id:String):String {
		
		//#if ios
		
		//return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		//#else
		
		return path.get (id);
		
		//#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if html5
		
		var bytes:ByteArray = null;
		var data = Preloader.loaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			return cast data;
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes.readUTFBytes (bytes.length);
			
		} else {
			
			return null;
		}
		
		#else
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
		#end
		
	}
	
	
	public override function isLocal (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		
		#if flash
		
		//if (requestedType != AssetType.MUSIC && requestedType != AssetType.SOUND) {
			
			return className.exists (id);
			
		//}
		
		#end
		
		return true;
		
	}
	
	
	public override function list (type:String):Array<String> {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var items = [];
		
		for (id in this.type.keys ()) {
			
			if (requestedType == null || exists (id, type)) {
				
				items.push (id);
				
			}
			
		}
		
		return items;
		
	}
	
	
	public override function loadAudioBuffer (id:String, handler:AudioBuffer -> Void):Void {
		
		#if (flash)
		if (path.exists (id)) {
			
			var soundLoader = new Sound ();
			soundLoader.addEventListener (Event.COMPLETE, function (event) {
				
				var audioBuffer:AudioBuffer = new AudioBuffer();
				audioBuffer.src = event.currentTarget;
				handler (audioBuffer);
				
			});
			soundLoader.load (new URLRequest (path.get (id)));
			
		} else {
			handler (getAudioBuffer (id));
			
		}
		#else
		handler (getAudioBuffer (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bytes = new ByteArray ();
				bytes.writeUTFBytes (event.currentTarget.data);
				bytes.position = 0;
				
				handler (bytes);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#else
		
		handler (getBytes (id));
		
		#end
		
	}
	
	
	public override function loadImage (id:String, handler:Image -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapData;
				handler (Image.fromBitmapData (bitmapData));
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getImage (id));
			
		}
		
		#else
		
		handler (getImage (id));
		
		#end
		
	}
	
	
	#if (!flash && !html5)
	private function loadManifest ():Void {
		
		try {
			
			#if blackberry
			var bytes = ByteArray.readFile ("app/native/manifest");
			#elseif tizen
			var bytes = ByteArray.readFile ("../res/manifest");
			#elseif emscripten
			var bytes = ByteArray.readFile ("assets/manifest");
			#elseif (mac && java)
			var bytes = ByteArray.readFile ("../Resources/manifest");
			#elseif ios
			var bytes = ByteArray.readFile ("assets/manifest");
			#else
			var bytes = ByteArray.readFile ("manifest");
			#end
			
			if (bytes != null) {
				
				bytes.position = 0;
				
				if (bytes.length > 0) {
					
					var data = bytes.readUTFBytes (bytes.length);
					
					if (data != null && data.length > 0) {
						
						var manifest:Array<Dynamic> = Unserializer.run (data);
						
						for (asset in manifest) {
							
							if (!className.exists (asset.id)) {
								
								#if ios
								path.set (asset.id, "assets/" + asset.path);
								#else
								path.set (asset.id, asset.path);
								#end
								type.set (asset.id, cast (asset.type, AssetType));
								
							}
							
						}
						
					}
					
				}
				
			} else {
				
				trace ("Warning: Could not load asset manifest (bytes was null)");
				
			}
		
		} catch (e:Dynamic) {
			
			trace ('Warning: Could not load asset manifest (${e})');
			
		}
		
	}
	#end
	
	
	/*public override function loadMusic (id:String, handler:Dynamic -> Void):Void {
		
		#if (flash || html5)
		
		//if (path.exists (id)) {
			
		//	var loader = new Loader ();
		//	loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
		//		handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
		//	});
		//	loader.load (new URLRequest (path.get (id)));
			
		//} else {
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}*/
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		//#if html5
		
		/*if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (event.currentTarget.data);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}*/
		
		//#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		//#end
		
	}
	
	
}


#if !display
#if flash

@:keep @:bind #if display private #end class __ASSET__assets_data_80_csv extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_data_attract1_fgr extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_data_attract2_fgr extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_data_data_goes_here_txt extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_data_level_oep extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_data_room1_oel extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_images_bot_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_bot_bullet_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_bullet_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_coin_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_cursor_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_dirt_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_dirt_top_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_gibs_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_images_go_here_txt extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_images_img_tiles_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_jet_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_miniframe_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_spaceman_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_spawner_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_spawner_gibs_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_tech_tiles_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_images_tiles_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__assets_music_music_goes_here_txt extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_asplode_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_asplode_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_button_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_button_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_countdown_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_countdown_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_enemy_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_enemy_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_hit_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_hit_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_hurt_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_hurt_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jam_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jam_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jet_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jet_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jump_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jump_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_menu_hit_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_menu_hit_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_menu_hit_2_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_menu_hit_2_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_mode_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_mode_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_shoot_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_shoot_ogg extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_sounds_go_here_txt extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_beep_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_flixel_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__images_bot_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_bot_bullet_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_bullet_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_coin_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_cursor_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_dirt_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_dirt_top_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_gibs_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_images_go_here_txt extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__images_img_tiles_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_jet_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_miniframe_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_spaceman_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_spawner_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_spawner_gibs_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_tech_tiles_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__images_tiles_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_80_csv extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__data_attract1_fgr extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__data_attract2_fgr extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__data_data_goes_here_txt extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__data_level_oep extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__data_room1_oel extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_asplode_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_button_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_countdown_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_enemy_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_hit_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_hurt_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jam_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jet_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_jump_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_menu_hit_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_menu_hit_3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_mode_mp4 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_shoot_mp4 extends flash.media.Sound { }


#elseif html5




























































































#else



#if (windows || mac || linux)


@:file("assets/data/80.csv") #if display private #end class __ASSET__assets_data_80_csv extends lime.utils.ByteArray {}
@:file("assets/data/attract1.fgr") #if display private #end class __ASSET__assets_data_attract1_fgr extends lime.utils.ByteArray {}
@:file("assets/data/attract2.fgr") #if display private #end class __ASSET__assets_data_attract2_fgr extends lime.utils.ByteArray {}
@:file("assets/data/data-goes-here.txt") #if display private #end class __ASSET__assets_data_data_goes_here_txt extends lime.utils.ByteArray {}
@:file("assets/data/level.oep") #if display private #end class __ASSET__assets_data_level_oep extends lime.utils.ByteArray {}
@:file("assets/data/room1.oel") #if display private #end class __ASSET__assets_data_room1_oel extends lime.utils.ByteArray {}
@:image("assets/images/bot.png") #if display private #end class __ASSET__assets_images_bot_png extends lime.graphics.Image {}
@:image("assets/images/bot_bullet.png") #if display private #end class __ASSET__assets_images_bot_bullet_png extends lime.graphics.Image {}
@:image("assets/images/bullet.png") #if display private #end class __ASSET__assets_images_bullet_png extends lime.graphics.Image {}
@:image("assets/images/coin.png") #if display private #end class __ASSET__assets_images_coin_png extends lime.graphics.Image {}
@:image("assets/images/cursor.png") #if display private #end class __ASSET__assets_images_cursor_png extends lime.graphics.Image {}
@:image("assets/images/dirt.png") #if display private #end class __ASSET__assets_images_dirt_png extends lime.graphics.Image {}
@:image("assets/images/dirt_top.png") #if display private #end class __ASSET__assets_images_dirt_top_png extends lime.graphics.Image {}
@:image("assets/images/gibs.png") #if display private #end class __ASSET__assets_images_gibs_png extends lime.graphics.Image {}
@:file("assets/images/images-go-here.txt") #if display private #end class __ASSET__assets_images_images_go_here_txt extends lime.utils.ByteArray {}
@:image("assets/images/img_tiles.png") #if display private #end class __ASSET__assets_images_img_tiles_png extends lime.graphics.Image {}
@:image("assets/images/jet.png") #if display private #end class __ASSET__assets_images_jet_png extends lime.graphics.Image {}
@:image("assets/images/miniframe.png") #if display private #end class __ASSET__assets_images_miniframe_png extends lime.graphics.Image {}
@:image("assets/images/spaceman.png") #if display private #end class __ASSET__assets_images_spaceman_png extends lime.graphics.Image {}
@:image("assets/images/spawner.png") #if display private #end class __ASSET__assets_images_spawner_png extends lime.graphics.Image {}
@:image("assets/images/spawner_gibs.png") #if display private #end class __ASSET__assets_images_spawner_gibs_png extends lime.graphics.Image {}
@:image("assets/images/tech_tiles.png") #if display private #end class __ASSET__assets_images_tech_tiles_png extends lime.graphics.Image {}
@:image("assets/images/tiles.png") #if display private #end class __ASSET__assets_images_tiles_png extends lime.graphics.Image {}
@:file("assets/music/music-goes-here.txt") #if display private #end class __ASSET__assets_music_music_goes_here_txt extends lime.utils.ByteArray {}
@:file("assets/sounds/asplode.mp3") #if display private #end class __ASSET__assets_sounds_asplode_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/asplode.ogg") #if display private #end class __ASSET__assets_sounds_asplode_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/button.mp3") #if display private #end class __ASSET__assets_sounds_button_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/button.ogg") #if display private #end class __ASSET__assets_sounds_button_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/countdown.mp3") #if display private #end class __ASSET__assets_sounds_countdown_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/countdown.ogg") #if display private #end class __ASSET__assets_sounds_countdown_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/enemy.mp3") #if display private #end class __ASSET__assets_sounds_enemy_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/enemy.ogg") #if display private #end class __ASSET__assets_sounds_enemy_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/hit.mp3") #if display private #end class __ASSET__assets_sounds_hit_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/hit.ogg") #if display private #end class __ASSET__assets_sounds_hit_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/hurt.mp3") #if display private #end class __ASSET__assets_sounds_hurt_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/hurt.ogg") #if display private #end class __ASSET__assets_sounds_hurt_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/jam.mp3") #if display private #end class __ASSET__assets_sounds_jam_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/jam.ogg") #if display private #end class __ASSET__assets_sounds_jam_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/jet.mp3") #if display private #end class __ASSET__assets_sounds_jet_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/jet.ogg") #if display private #end class __ASSET__assets_sounds_jet_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/jump.mp3") #if display private #end class __ASSET__assets_sounds_jump_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/jump.ogg") #if display private #end class __ASSET__assets_sounds_jump_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/menu_hit.mp3") #if display private #end class __ASSET__assets_sounds_menu_hit_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/menu_hit.ogg") #if display private #end class __ASSET__assets_sounds_menu_hit_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/menu_hit_2.mp3") #if display private #end class __ASSET__assets_sounds_menu_hit_2_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/menu_hit_2.ogg") #if display private #end class __ASSET__assets_sounds_menu_hit_2_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/mode.mp3") #if display private #end class __ASSET__assets_sounds_mode_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/mode.ogg") #if display private #end class __ASSET__assets_sounds_mode_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/shoot.mp3") #if display private #end class __ASSET__assets_sounds_shoot_mp3 extends lime.utils.ByteArray {}
@:file("assets/sounds/shoot.ogg") #if display private #end class __ASSET__assets_sounds_shoot_ogg extends lime.utils.ByteArray {}
@:file("assets/sounds/sounds-go-here.txt") #if display private #end class __ASSET__assets_sounds_sounds_go_here_txt extends lime.utils.ByteArray {}
@:file("C:/HaxeToolkit/haxe/lib/flixel/3,3,8/assets/sounds/beep.mp3") #if display private #end class __ASSET__assets_sounds_beep_mp3 extends lime.utils.ByteArray {}
@:file("C:/HaxeToolkit/haxe/lib/flixel/3,3,8/assets/sounds/flixel.mp3") #if display private #end class __ASSET__assets_sounds_flixel_mp3 extends lime.utils.ByteArray {}
@:image("assets/images/bot.png") #if display private #end class __ASSET__images_bot_png extends lime.graphics.Image {}
@:image("assets/images/bot_bullet.png") #if display private #end class __ASSET__images_bot_bullet_png extends lime.graphics.Image {}
@:image("assets/images/bullet.png") #if display private #end class __ASSET__images_bullet_png extends lime.graphics.Image {}
@:image("assets/images/coin.png") #if display private #end class __ASSET__images_coin_png extends lime.graphics.Image {}
@:image("assets/images/cursor.png") #if display private #end class __ASSET__images_cursor_png extends lime.graphics.Image {}
@:image("assets/images/dirt.png") #if display private #end class __ASSET__images_dirt_png extends lime.graphics.Image {}
@:image("assets/images/dirt_top.png") #if display private #end class __ASSET__images_dirt_top_png extends lime.graphics.Image {}
@:image("assets/images/gibs.png") #if display private #end class __ASSET__images_gibs_png extends lime.graphics.Image {}
@:file("assets/images/images-go-here.txt") #if display private #end class __ASSET__images_images_go_here_txt extends lime.utils.ByteArray {}
@:image("assets/images/img_tiles.png") #if display private #end class __ASSET__images_img_tiles_png extends lime.graphics.Image {}
@:image("assets/images/jet.png") #if display private #end class __ASSET__images_jet_png extends lime.graphics.Image {}
@:image("assets/images/miniframe.png") #if display private #end class __ASSET__images_miniframe_png extends lime.graphics.Image {}
@:image("assets/images/spaceman.png") #if display private #end class __ASSET__images_spaceman_png extends lime.graphics.Image {}
@:image("assets/images/spawner.png") #if display private #end class __ASSET__images_spawner_png extends lime.graphics.Image {}
@:image("assets/images/spawner_gibs.png") #if display private #end class __ASSET__images_spawner_gibs_png extends lime.graphics.Image {}
@:image("assets/images/tech_tiles.png") #if display private #end class __ASSET__images_tech_tiles_png extends lime.graphics.Image {}
@:image("assets/images/tiles.png") #if display private #end class __ASSET__images_tiles_png extends lime.graphics.Image {}
@:file("assets/data/80.csv") #if display private #end class __ASSET__data_80_csv extends lime.utils.ByteArray {}
@:file("assets/data/attract1.fgr") #if display private #end class __ASSET__data_attract1_fgr extends lime.utils.ByteArray {}
@:file("assets/data/attract2.fgr") #if display private #end class __ASSET__data_attract2_fgr extends lime.utils.ByteArray {}
@:file("assets/data/data-goes-here.txt") #if display private #end class __ASSET__data_data_goes_here_txt extends lime.utils.ByteArray {}
@:file("assets/data/level.oep") #if display private #end class __ASSET__data_level_oep extends lime.utils.ByteArray {}
@:file("assets/data/room1.oel") #if display private #end class __ASSET__data_room1_oel extends lime.utils.ByteArray {}
@:file("assets/sounds/asplode.mp3") #if display private #end class __ASSET__assets_sounds_asplode_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/button.mp3") #if display private #end class __ASSET__assets_sounds_button_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/countdown.mp3") #if display private #end class __ASSET__assets_sounds_countdown_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/enemy.mp3") #if display private #end class __ASSET__assets_sounds_enemy_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/hit.mp3") #if display private #end class __ASSET__assets_sounds_hit_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/hurt.mp3") #if display private #end class __ASSET__assets_sounds_hurt_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/jam.mp3") #if display private #end class __ASSET__assets_sounds_jam_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/jet.mp3") #if display private #end class __ASSET__assets_sounds_jet_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/jump.mp3") #if display private #end class __ASSET__assets_sounds_jump_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/menu_hit.mp3") #if display private #end class __ASSET__assets_sounds_menu_hit_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/menu_hit_2.mp3") #if display private #end class __ASSET__assets_sounds_menu_hit_3 extends lime.utils.ByteArray {}
@:file("assets/sounds/mode.mp3") #if display private #end class __ASSET__assets_sounds_mode_mp4 extends lime.utils.ByteArray {}
@:file("assets/sounds/shoot.mp3") #if display private #end class __ASSET__assets_sounds_shoot_mp4 extends lime.utils.ByteArray {}



#end

#if openfl

#end

#end
#end

