package;

import haxe.Timer;
import haxe.Unserializer;
import openfl.Assets;
import openfl.display.Bitmap;
import openfl.display.BitmapData;
import openfl.display.Loader;
import openfl.events.Event;
import openfl.media.Sound;
import openfl.net.URLLoader;
import openfl.net.URLRequest;
import openfl.text.Font;
import openfl.utils.ByteArray;

class DefaultAssetLibrary extends openfl.AssetLibrary {
	public var className(default, null) = new Map<String, Dynamic>();
	public var path(default, null) = new Map<String, String>();
	public var type(default, null) = new Map<String, AssetType>();
	
	private var lastModified:Float;
	private var timer:Timer;
	
	public function new() {
		super();
		// register assets:
		add("assets/data/80.csv", TEXT);
		add("assets/data/attract1.fgr", TEXT);
		add("assets/data/attract2.fgr", TEXT);
		add("assets/data/data-goes-here.txt", TEXT);
		add("assets/images/bot.png", IMAGE);
		add("assets/images/bot_bullet.png", IMAGE);
		add("assets/images/bullet.png", IMAGE);
		add("assets/images/cursor.png", IMAGE);
		add("assets/images/dirt.png", IMAGE);
		add("assets/images/dirt_top.png", IMAGE);
		add("assets/images/gibs.png", IMAGE);
		add("assets/images/images-go-here.txt", TEXT);
		add("assets/images/img_tiles.png", IMAGE);
		add("assets/images/jet.png", IMAGE);
		add("assets/images/miniframe.png", IMAGE);
		add("assets/images/spaceman.png", IMAGE);
		add("assets/images/spawner.png", IMAGE);
		add("assets/images/spawner_gibs.png", IMAGE);
		add("assets/images/tech_tiles.png", IMAGE);
		add("assets/music/music-goes-here.txt", TEXT);
		add("assets/sounds/asplode.mp3", MUSIC);
		add("assets/sounds/asplode.ogg", SOUND);
		add("assets/sounds/button.mp3", MUSIC);
		add("assets/sounds/button.ogg", SOUND);
		add("assets/sounds/countdown.mp3", MUSIC);
		add("assets/sounds/countdown.ogg", SOUND);
		add("assets/sounds/enemy.mp3", MUSIC);
		add("assets/sounds/enemy.ogg", SOUND);
		add("assets/sounds/hit.mp3", MUSIC);
		add("assets/sounds/hit.ogg", SOUND);
		add("assets/sounds/hurt.mp3", MUSIC);
		add("assets/sounds/hurt.ogg", SOUND);
		add("assets/sounds/jam.mp3", MUSIC);
		add("assets/sounds/jam.ogg", SOUND);
		add("assets/sounds/jet.mp3", MUSIC);
		add("assets/sounds/jet.ogg", SOUND);
		add("assets/sounds/jump.mp3", MUSIC);
		add("assets/sounds/jump.ogg", SOUND);
		add("assets/sounds/menu_hit.mp3", MUSIC);
		add("assets/sounds/menu_hit.ogg", SOUND);
		add("assets/sounds/menu_hit_2.mp3", MUSIC);
		add("assets/sounds/menu_hit_2.ogg", SOUND);
		add("assets/sounds/mode.mp3", MUSIC);
		add("assets/sounds/mode.ogg", SOUND);
		add("assets/sounds/shoot.mp3", MUSIC);
		add("assets/sounds/shoot.ogg", SOUND);
		add("assets/sounds/sounds-go-here.txt", TEXT);
		add("assets/sounds/beep.mp3", MUSIC);
		add("assets/sounds/flixel.mp3", MUSIC);
		add("assets/sounds/beep.ogg", SOUND);
		add("assets/sounds/flixel.ogg", SOUND);
		add("images/bot.png", IMAGE);
		add("images/bot_bullet.png", IMAGE);
		add("images/bullet.png", IMAGE);
		add("images/cursor.png", IMAGE);
		add("images/dirt.png", IMAGE);
		add("images/dirt_top.png", IMAGE);
		add("images/gibs.png", IMAGE);
		add("images/images-go-here.txt", TEXT);
		add("images/img_tiles.png", IMAGE);
		add("images/jet.png", IMAGE);
		add("images/miniframe.png", IMAGE);
		add("images/spaceman.png", IMAGE);
		add("images/spawner.png", IMAGE);
		add("images/spawner_gibs.png", IMAGE);
		add("images/tech_tiles.png", IMAGE);
		add("data/80.csv", TEXT);
		add("data/attract1.fgr", TEXT);
		add("data/attract2.fgr", TEXT);
		add("data/data-goes-here.txt", TEXT);
		add("Asplode", MUSIC, "assets/sounds/asplode.mp3");
		add("Button", MUSIC, "assets/sounds/button.mp3");
		add("Countdown", MUSIC, "assets/sounds/countdown.mp3");
		add("Enemy", MUSIC, "assets/sounds/enemy.mp3");
		add("Hit", MUSIC, "assets/sounds/hit.mp3");
		add("Hurt", MUSIC, "assets/sounds/hurt.mp3");
		add("Jam", MUSIC, "assets/sounds/jam.mp3");
		add("Jet", MUSIC, "assets/sounds/jet.mp3");
		add("Jump", MUSIC, "assets/sounds/jump.mp3");
		add("MenuHit", MUSIC, "assets/sounds/menu_hit.mp3");
		add("MenuHit2", MUSIC, "assets/sounds/menu_hit_2.mp3");
		add("Mode", MUSIC, "assets/sounds/mode.mp3");
		add("Shoot", MUSIC, "assets/sounds/shoot.mp3");
		//
	}
	
	private function add(id:String, t:AssetType, ?p:String) {
		type.set(id, t);
		path.set(id, p != null ? p : id);
	}
	
	override public function getPath(id:String):String {
		return path.get(id);
	}
	
	override public function exists(id:String, t:AssetType):Bool {
		var r = type.get(id);
		if (r != null) {
			if (r == t || t == null) return true;
			switch (t) {
			case AssetType.SOUND: return r == AssetType.MUSIC;
			case AssetType.MUSIC: return r == AssetType.SOUND;
			case AssetType.BINARY: return true;
			default: return false;
			}
		}
		return false;
	}
	
	override public function getBitmapData(id:String):BitmapData {
		var q = ApplicationMain.loaders.get(path.get(id));
		var b:Bitmap = cast q.contentLoaderInfo.content;
		return b.bitmapData;
	}
	
	override public function getFont(id:String):Font {
		// not yet.
		return null;
	}
	
	override public function getSound(id:String):Sound {
		return new Sound(new URLRequest(path.get(id)));
	}
	
	override public function getMusic(id:String):Sound {
		return new Sound(new URLRequest(path.get(id)));
	}
	
	override public function getBytes(id:String):ByteArray {
		var r:ByteArray = null;
		var p = path.get(id);
		var d = ApplicationMain.urlLoaders.get(p).data;
		if (Std.is(d, String)) {
			(r = new ByteArray()).writeUTFBytes(cast d);
		} else if (Std.is(d, ByteArray)) {
			r = cast d;
		} else r = null;
		if (r != null) {
			r.position = 0;
			return r;
		} else return null;
	}
	
	override public function getText(id:String):String {
		var r:ByteArray = null;
		var p = path.get(id);
		var d = ApplicationMain.urlLoaders.get(p).data;
		if (Std.is(d, String)) {
			return cast d;
		} else if (Std.is(d, ByteArray)) {
			r = cast d;
			r.position = 0;
			return r.readUTFBytes(r.length);
		} else return null;
	}
	
	override public function list(t:AssetType):Array<String> {
		var r:Array<String> = [];
		for (id in type.keys()) {
			if (t == null || exists(id, t)) r.push(id);
		}
		return r;
	}
	
	override public function loadBitmapData(id:String, h:BitmapData->Void):Void {
		if (path.exists(id)) {
			var r = new Loader();
			var f:Event->Void = null;
			f = function(e:Event) {
				r.contentLoaderInfo.removeEventListener(Event.COMPLETE, f);
				var b:Bitmap = cast e.currentTarget.content;
				h(b.bitmapData);
				b = null; f = null; r = null;
			};
			r.addEventListener(Event.COMPLETE, f);
			r.load(new URLRequest(path.get(id)));
		} else h(getBitmapData(id));
	}
	
	override public function loadFont(id:String, h:Font->Void):Void {
		h(getFont(id));
	}
	
	override public function loadSound(id:String, h:Sound->Void):Void {
		h(getSound(id));
	}
	
	override public function loadMusic(id:String, h:Sound->Void):Void {
		h(getMusic(id));
	}
	
	override public function loadBytes(id:String, h:ByteArray->Void):Void {
		if (path.exists(id)) {
			var r = new URLLoader();
			var f:Event->Void = null;
			f = function(e:Event) {
				r.removeEventListener(Event.COMPLETE, f);
				var b = new ByteArray();
				b.writeUTFBytes(e.currentTarget.data);
				b.position = 0;
				h(b);
				b = null; f = null; r = null;
			};
			r.addEventListener(Event.COMPLETE, f);
		} else h(getBytes(id));
	}
	
	override public function loadText(id:String, h:String->Void):Void {
		if (path.exists(id)) {
			var r = new URLLoader();
			var f:Event->Void = null;
			f = function(e:Event) {
				r.removeEventListener(Event.COMPLETE, f);
				h(e.currentTarget.data);
				f = null; r = null;
			};
			r.addEventListener(Event.COMPLETE, f);
		} else h(getText(id));
	}
	
}
