(function (console) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.loadEmbed = function(o) {
	ApplicationMain.embeds = (ApplicationMain.embeds != null?ApplicationMain.embeds:0) + 1;
	var f = null;
	f = function(_) {
		o.removeEventListener("load",f);
		if(--ApplicationMain.embeds == 0) ApplicationMain.preload();
	};
	o.addEventListener("load",f);
};
ApplicationMain.main = function() {
	if(ApplicationMain.embeds == null || ApplicationMain.embeds == 0) ApplicationMain.preload();
};
ApplicationMain.preload = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe_ds_StringMap();
	ApplicationMain.urlLoaders = new haxe_ds_StringMap();
	ApplicationMain.total = 0;
	flash_Lib.get_current().loaderInfo = flash_display_LoaderInfo.create(null);
	flash_Lib.get_stage().set_frameRate(60);
	flash_Lib.get_current().addChild(ApplicationMain.preloader = new flixel_system_FlxPreloader());
	ApplicationMain.preloader.onInit();
	ApplicationMain.loadBinary("assets/data/80.csv");
	ApplicationMain.loadBinary("assets/data/attract1.fgr");
	ApplicationMain.loadBinary("assets/data/attract2.fgr");
	ApplicationMain.loadBinary("assets/data/data-goes-here.txt");
	ApplicationMain.loadFile("assets/images/bot.png");
	ApplicationMain.loadFile("assets/images/bot_bullet.png");
	ApplicationMain.loadFile("assets/images/bullet.png");
	ApplicationMain.loadFile("assets/images/cursor.png");
	ApplicationMain.loadFile("assets/images/dirt.png");
	ApplicationMain.loadFile("assets/images/dirt_top.png");
	ApplicationMain.loadFile("assets/images/gibs.png");
	ApplicationMain.loadBinary("assets/images/images-go-here.txt");
	ApplicationMain.loadFile("assets/images/img_tiles.png");
	ApplicationMain.loadFile("assets/images/jet.png");
	ApplicationMain.loadFile("assets/images/miniframe.png");
	ApplicationMain.loadFile("assets/images/spaceman.png");
	ApplicationMain.loadFile("assets/images/spawner.png");
	ApplicationMain.loadFile("assets/images/spawner_gibs.png");
	ApplicationMain.loadFile("assets/images/tech_tiles.png");
	ApplicationMain.loadBinary("assets/music/music-goes-here.txt");
	ApplicationMain.loadSound("assets/sounds/asplode.mp3");
	ApplicationMain.loadSound("assets/sounds/asplode.ogg");
	ApplicationMain.loadSound("assets/sounds/button.mp3");
	ApplicationMain.loadSound("assets/sounds/button.ogg");
	ApplicationMain.loadSound("assets/sounds/countdown.mp3");
	ApplicationMain.loadSound("assets/sounds/countdown.ogg");
	ApplicationMain.loadSound("assets/sounds/enemy.mp3");
	ApplicationMain.loadSound("assets/sounds/enemy.ogg");
	ApplicationMain.loadSound("assets/sounds/hit.mp3");
	ApplicationMain.loadSound("assets/sounds/hit.ogg");
	ApplicationMain.loadSound("assets/sounds/hurt.mp3");
	ApplicationMain.loadSound("assets/sounds/hurt.ogg");
	ApplicationMain.loadSound("assets/sounds/jam.mp3");
	ApplicationMain.loadSound("assets/sounds/jam.ogg");
	ApplicationMain.loadSound("assets/sounds/jet.mp3");
	ApplicationMain.loadSound("assets/sounds/jet.ogg");
	ApplicationMain.loadSound("assets/sounds/jump.mp3");
	ApplicationMain.loadSound("assets/sounds/jump.ogg");
	ApplicationMain.loadSound("assets/sounds/menu_hit.mp3");
	ApplicationMain.loadSound("assets/sounds/menu_hit.ogg");
	ApplicationMain.loadSound("assets/sounds/menu_hit_2.mp3");
	ApplicationMain.loadSound("assets/sounds/menu_hit_2.ogg");
	ApplicationMain.loadSound("assets/sounds/mode.mp3");
	ApplicationMain.loadSound("assets/sounds/mode.ogg");
	ApplicationMain.loadSound("assets/sounds/shoot.mp3");
	ApplicationMain.loadSound("assets/sounds/shoot.ogg");
	ApplicationMain.loadBinary("assets/sounds/sounds-go-here.txt");
	ApplicationMain.loadSound("assets/sounds/beep.mp3");
	ApplicationMain.loadSound("assets/sounds/flixel.mp3");
	ApplicationMain.loadSound("assets/sounds/beep.ogg");
	ApplicationMain.loadSound("assets/sounds/flixel.ogg");
	ApplicationMain.loadFile("images/bot.png");
	ApplicationMain.loadFile("images/bot_bullet.png");
	ApplicationMain.loadFile("images/bullet.png");
	ApplicationMain.loadFile("images/cursor.png");
	ApplicationMain.loadFile("images/dirt.png");
	ApplicationMain.loadFile("images/dirt_top.png");
	ApplicationMain.loadFile("images/gibs.png");
	ApplicationMain.loadBinary("images/images-go-here.txt");
	ApplicationMain.loadFile("images/img_tiles.png");
	ApplicationMain.loadFile("images/jet.png");
	ApplicationMain.loadFile("images/miniframe.png");
	ApplicationMain.loadFile("images/spaceman.png");
	ApplicationMain.loadFile("images/spawner.png");
	ApplicationMain.loadFile("images/spawner_gibs.png");
	ApplicationMain.loadFile("images/tech_tiles.png");
	ApplicationMain.loadBinary("data/80.csv");
	ApplicationMain.loadBinary("data/attract1.fgr");
	ApplicationMain.loadBinary("data/attract2.fgr");
	ApplicationMain.loadBinary("data/data-goes-here.txt");
	ApplicationMain.loadSound("assets/sounds/asplode.mp3");
	ApplicationMain.loadSound("assets/sounds/button.mp3");
	ApplicationMain.loadSound("assets/sounds/countdown.mp3");
	ApplicationMain.loadSound("assets/sounds/enemy.mp3");
	ApplicationMain.loadSound("assets/sounds/hit.mp3");
	ApplicationMain.loadSound("assets/sounds/hurt.mp3");
	ApplicationMain.loadSound("assets/sounds/jam.mp3");
	ApplicationMain.loadSound("assets/sounds/jet.mp3");
	ApplicationMain.loadSound("assets/sounds/jump.mp3");
	ApplicationMain.loadSound("assets/sounds/menu_hit.mp3");
	ApplicationMain.loadSound("assets/sounds/menu_hit_2.mp3");
	ApplicationMain.loadSound("assets/sounds/mode.mp3");
	ApplicationMain.loadSound("assets/sounds/shoot.mp3");
	var resourcePrefix = "NME_:bitmap_";
	var _g = 0;
	var _g1 = haxe_Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total != 0) {
		ApplicationMain.loaderStack = [];
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			ApplicationMain.loaderStack.push(p);
		}
		ApplicationMain.urlLoaderStack = [];
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var p1 = $it1.next();
			ApplicationMain.urlLoaderStack.push(p1);
		}
		var _g2 = 0;
		while(_g2 < 8) {
			var i = _g2++;
			ApplicationMain.nextLoader();
		}
	} else ApplicationMain.begin();
};
ApplicationMain.nextLoader = function() {
	if(ApplicationMain.loaderStack.length != 0) {
		var p = ApplicationMain.loaderStack.shift();
		var o = ApplicationMain.loaders.get(p);
		o.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
		o.load(new flash_net_URLRequest(p));
	} else if(ApplicationMain.urlLoaderStack.length != 0) {
		var p1 = ApplicationMain.urlLoaderStack.shift();
		var o1 = ApplicationMain.urlLoaders.get(p1);
		o1.addEventListener("complete",ApplicationMain.loader_onComplete);
		o1.load(new flash_net_URLRequest(p1));
	}
};
ApplicationMain.loadFile = function(p) {
	var value = new flash_display_Loader();
	ApplicationMain.loaders.set(p,value);
	ApplicationMain.total++;
};
ApplicationMain.loadBinary = function(p) {
	var o = new flash_net_URLLoader();
	o.set_dataFormat(0);
	ApplicationMain.urlLoaders.set(p,o);
	ApplicationMain.total++;
};
ApplicationMain.loadSound = function(p) {
	return;
	var i = p.lastIndexOf(".");
	var c = flash_media_Sound;
	var s;
	var o;
	var m = flash_Lib.get_mobile();
	var f = null;
	var q = "canplaythrough";
	if(i == -1) return;
	if(!c.canPlayType || !c.canPlayType(HxOverrides.substr(p,i + 1,null))) return;
	s = HxOverrides.substr(p,0,i) + ".mp3";
	if(c.library.exists(s)) return;
	ApplicationMain.total++;
	c.library.set(s,o = new Audio(p));
	f = function(_) {
		if(!m) o.removeEventListener(q,f);
		ApplicationMain.preloader.onUpdate(++ApplicationMain.completed,ApplicationMain.total);
		if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
	};
	if(m) f(null); else o.addEventListener(q,f);
};
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener("complete",ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType;
	if(instance == null) classType = null; else classType = js_Boot.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin(); else ApplicationMain.nextLoader();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener("complete",ApplicationMain.preloader_onComplete);
	flash_Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Main.main == null) {
		var o = new DocumentClass();
		if(js_Boot.__instanceof(o,flash_display_DisplayObject)) flash_Lib.get_current().addChild(o);
	} else Main.main();
};
var flash_events_IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash_events_IEventDispatcher;
flash_events_IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash_events_IEventDispatcher.prototype = {
	addEventListener: null
	,removeEventListener: null
	,dispatchEvent: null
	,__class__: flash_events_IEventDispatcher
};
var flash_events_EventDispatcher = function() {
	this.eventList = new haxe_ds_StringMap();
};
$hxClasses["flash.events.EventDispatcher"] = flash_events_EventDispatcher;
flash_events_EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash_events_EventDispatcher.__interfaces__ = [flash_events_IEventDispatcher];
flash_events_EventDispatcher.prototype = {
	eventList: null
	,addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o;
		if(!this.eventList.exists(type)) {
			var value = o = [];
			this.eventList.set(type,value);
		} else o = this.eventList.get(type);
		o.push(listener);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		if(this.eventList.exists(type)) {
			var r = this.eventList.get(type);
			var _g = 0;
			while(_g < r.length) {
				var o = r[_g];
				++_g;
				if(Reflect.compareMethods(o,listener)) {
					HxOverrides.remove(r,o);
					break;
				}
			}
			if(r.length == 0) this.eventList.remove(type);
		}
	}
	,hasEventListener: function(type) {
		return this.eventList.exists(type);
	}
	,dispatchEvent: function(event) {
		if(event.get_target() == null) event.set_target(this);
		event.set_currentTarget(this);
		var t = event.type;
		if(this.eventList.exists(t)) {
			var list = this.eventList.get(t);
			var i = 0;
			var n = list.length;
			while(i < n) list[i++](event);
		}
		return true;
	}
	,__class__: flash_events_EventDispatcher
};
var flash_events_EventWrapper = function() {
	flash_events_EventDispatcher.call(this);
	this.eventMap = new haxe_ds_ObjectMap();
};
$hxClasses["flash.events.EventWrapper"] = flash_events_EventWrapper;
flash_events_EventWrapper.__name__ = ["flash","events","EventWrapper"];
flash_events_EventWrapper.__super__ = flash_events_EventDispatcher;
flash_events_EventWrapper.prototype = $extend(flash_events_EventDispatcher.prototype,{
	component: null
	,eventMap: null
	,addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var _g = this;
		flash_events_EventDispatcher.prototype.addEventListener.call(this,type,listener,useCapture,priority,weak);
		var f;
		var wrapper = function(e) {
			if(e.get_target() == _g.component) e.set_target(_g);
			e.set_currentTarget(_g);
			listener(e);
		};
		f = wrapper;
		if(!(this.eventMap.h.__keys__[listener.__id__] != null)) this.eventMap.set(listener,f);
		this.component.addEventListener(type,f,useCapture);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		flash_events_EventDispatcher.prototype.removeEventListener.call(this,type,listener,useCapture);
		if(this.eventMap.h.__keys__[listener.__id__] != null) {
			this.component.removeEventListener(type,this.eventMap.h[listener.__id__],useCapture);
			this.eventMap.remove(listener);
		}
	}
	,__class__: flash_events_EventWrapper
});
var flash_display_DisplayObject = function() {
	this.y = 0;
	this.x = 0;
	this.rotation = 0;
	this.scaleY = 1;
	this.scaleX = 1;
	this.alpha = 1;
	this.visible = true;
	flash_events_EventWrapper.call(this);
	this.eventRemap = new haxe_ds_StringMap();
	if(this.component == null) this.component = flash_Lib.jsNode("div");
	this.component.node = this;
	this.transform = new flash_geom_Transform(this);
};
$hxClasses["flash.display.DisplayObject"] = flash_display_DisplayObject;
flash_display_DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash_display_DisplayObject.__init = function() {
	flash_display_DisplayObject.routedEvents = new haxe_ds_StringMap();
	var m = ["mouseMove","mouseOver","mouseOut","mouseClick","mouseDown","mouseUp","rightClick","rightMouseDown","rightMouseUp","middleClick","middleMouseDown","middleMouseUp","mouseWheel","touchMove","touchBegin","touchEnd"];
	var i = -1;
	var l = m.length;
	while(++i < l) flash_display_DisplayObject.routedEvents.set(m[i],1);
};
flash_display_DisplayObject.__super__ = flash_events_EventWrapper;
flash_display_DisplayObject.prototype = $extend(flash_events_EventWrapper.prototype,{
	name: null
	,visible: null
	,alpha: null
	,scaleX: null
	,scaleY: null
	,rotation: null
	,x: null
	,y: null
	,parent: null
	,scrollRect: null
	,mask: null
	,transform: null
	,__filters: null
	,loaderInfo: null
	,mouseX: null
	,mouseY: null
	,__stage: null
	,__width: null
	,__height: null
	,broadcastEvent: function(e) {
		this.dispatchEvent(e);
	}
	,invalidate: function() {
	}
	,_syncMtx_set: null
	,syncMtx: function() {
		var s = this.component.style;
		var v;
		var n;
		if(this._syncMtx_set != true) {
			this._syncMtx_set = true;
			flash_Lib.setCSSProperties(s,"transform-origin","0% 0%",31);
		}
		v = "";
		if(this.x != 0 || this.y != 0) v += "translate(" + this.x + "px, " + this.y + "px) ";
		if(this.scaleX != 1 || this.scaleY != 1) v += "scale(" + this.scaleX + ", " + this.scaleY + ") ";
		if(this.rotation != 0) v += "rotate(" + this.rotation + "deg) ";
		if(this.transform != null) {
			var m = this.transform.get_matrix();
			if(m != null && !m.isIdentity()) v += "matrix(" + m.a + ", " + m.b + ", " + m.c + ", " + m.d + ", " + m.tx + ", " + m.ty + ")" + " ";
		}
		n = "transform";
		s.setProperty(n,v,null);
		s.setProperty("-o-" + n,v,null);
		s.setProperty("-ms-" + n,v,null);
		s.setProperty("-moz-" + n,v,null);
		s.setProperty("-webkit-" + n,v,null);
	}
	,set_x: function(v) {
		if(this.x != v) {
			this.x = v;
			this.syncMtx();
		}
		return v;
	}
	,set_y: function(v) {
		if(this.y != v) {
			this.y = v;
			this.syncMtx();
		}
		return v;
	}
	,set_rotation: function(v) {
		if(this.rotation != v) {
			this.rotation = v;
			this.syncMtx();
		}
		return v;
	}
	,set_scaleX: function(v) {
		if(this.scaleX != v) {
			this.scaleX = v;
			this.syncMtx();
		}
		return v;
	}
	,set_scaleY: function(v) {
		if(this.scaleY != v) {
			this.scaleY = v;
			this.syncMtx();
		}
		return v;
	}
	,get_width: function() {
		return this.__width || 0;
	}
	,get_height: function() {
		return this.__height || 0;
	}
	,set_width: function(v) {
		var q = this.get_width();
		this.set_scaleX(q == 0 || q == null?1:v / q);
		this.__width = v;
		return v;
	}
	,set_height: function(v) {
		var q = this.get_height();
		this.set_scaleY(q == 0 || q == null?1:v / q);
		this.__height = v;
		return v;
	}
	,set_alpha: function(v) {
		if(v != this.alpha) this.component.style.opacity = (this.alpha = v).toFixed(4);
		return v;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		return this.__filters.slice();
	}
	,set_filters: function(v) {
		this.__filters = v;
		return v;
	}
	,set_visible: function(v) {
		if(this.visible != v) {
			this.visible = v;
			if(v) this.component.style.display = ""; else this.component.style.display = "none";
		}
		return v;
	}
	,set_scrollRect: function(v) {
		return v;
	}
	,get_stage: function() {
		return this.__stage;
	}
	,set_stage: function(v) {
		if(this.__stage != v) {
			var z = this.__stage != null != (v != null);
			this.__stage = v;
			if(z) this.dispatchEvent(new flash_events_Event(v != null?"addedToStage":"removedFromStage"));
		}
		return v;
	}
	,getBounds: function(o) {
		var m = this.getGlobalMatrix();
		var r = new flash_geom_Rectangle(0,0,this.get_width(),this.get_height());
		if(o == null) o = this;
		if(o != this) {
			r.transform(m);
			if(o != null) {
				m = o.getGlobalMatrix();
				m.invert();
				r.transform(m);
			}
		}
		return r;
	}
	,getRect: function(o) {
		return this.getBounds(o);
	}
	,concatTransform: function(m) {
		if(!this.transform.get_matrix().isIdentity()) m.concat(this.transform.get_matrix());
		if(this.rotation != 0) m.rotate(this.rotation * Math.PI / 180);
		if(this.scaleX != 1 || this.scaleY != 1) m.scale(this.scaleX,this.scaleY);
		if(this.x != 0 || this.y != 0) m.translate(this.x,this.y);
	}
	,getGlobalMatrix: function(m) {
		if(m == null) m = new flash_geom_Matrix();
		var o = this;
		while(o != null) {
			o.concatTransform(m);
			o = o.parent;
		}
		return m;
	}
	,globalToLocal: function(q,r) {
		if(r == null) r = new flash_geom_Point();
		var m = flash_display_DisplayObject.convMatrix;
		var u = q.x;
		var v = q.y;
		if(m == null) m = flash_display_DisplayObject.convMatrix = new flash_geom_Matrix();
		m.identity();
		m = this.getGlobalMatrix(m);
		m.invert();
		r.x = u * m.a + v * m.c + m.tx;
		r.y = u * m.b + v * m.d + m.ty;
		return r;
	}
	,localToGlobal: function(q,r) {
		if(r == null) r = new flash_geom_Point();
		var m = flash_display_DisplayObject.convMatrix;
		var u = q.x;
		var v = q.y;
		if(m == null) m = flash_display_DisplayObject.convMatrix = new flash_geom_Matrix();
		m.identity();
		m = this.getGlobalMatrix(m);
		r.x = u * m.a + v * m.c + m.tx;
		r.y = u * m.b + v * m.d + m.ty;
		return r;
	}
	,get_mouseX: function() {
		return (flash_display_DisplayObject.convPoint = this.globalToLocal(flash_Lib.get_current().get_stage().mousePos,flash_display_DisplayObject.convPoint)).x;
	}
	,get_mouseY: function() {
		return (flash_display_DisplayObject.convPoint = this.globalToLocal(flash_Lib.get_current().get_stage().mousePos,flash_display_DisplayObject.convPoint)).y;
	}
	,hitTestPoint: function(x,y,p) {
		if(p == null) p = false;
		flash_display_DisplayObject.convPoint.x = x;
		flash_display_DisplayObject.convPoint.y = y;
		this.globalToLocal(flash_display_DisplayObject.convPoint,flash_display_DisplayObject.convPoint);
		return this.hitTestLocal(flash_display_DisplayObject.convPoint.x,flash_display_DisplayObject.convPoint.y,p);
	}
	,hitTestLocal: function(x,y,p,v) {
		return (!v || this.visible) && x >= 0 && y >= 0 && x <= this.get_width() && y <= this.get_height();
	}
	,eventRemap: null
	,addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		flash_events_EventWrapper.prototype.addEventListener.call(this,type,listener,useCapture,priority,weak);
	}
	,broadcastMouse: function(h,e,ms,mc) {
		if(!this.visible) return false;
		var o;
		var t = e.type;
		var m;
		var m2;
		var d = h.length;
		var l;
		var x;
		var y;
		h.push(this);
		if(mc.length > 0) m = mc.pop(); else m = new flash_geom_Matrix();
		l = ms.length;
		while(l <= d) {
			o = h[l];
			m.identity();
			o.concatTransform(m);
			m.invert();
			if(mc.length > 0) m2 = mc.pop(); else m2 = new flash_geom_Matrix();
			if(l > 0) m2.copy(ms[l - 1]); else m2.identity();
			m2.concat(m);
			ms.push(m2);
			l++;
		}
		m.copy(ms[d]);
		x = e.stageX * m.a + e.stageY * m.c + m.tx;
		y = e.stageX * m.b + e.stageY * m.d + m.ty;
		mc.push(m);
		h.pop();
		if(this.hitTestLocal(x,y,true,true)) {
			if(e.relatedObject == null) {
				e.localX = x;
				e.localY = y;
				e.relatedObject = this;
			}
			this.dispatchEvent(e);
			return true;
		}
		return false;
	}
	,dispatchEvent: function(event) {
		var r = flash_events_EventWrapper.prototype.dispatchEvent.call(this,event);
		if(r && flash_display_DisplayObject.routedEvents.exists(event.type) && event.bubbles) {
			var o = this.parent;
			if(o != null) o.dispatchEvent(event);
		}
		return r;
	}
	,toString: function() {
		return Type.getClassName(js_Boot.getClass(this));
	}
	,__class__: flash_display_DisplayObject
	,__properties__: {get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_filters:"set_filters",get_filters:"get_filters",set_scrollRect:"set_scrollRect",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width",set_y:"set_y",set_x:"set_x",set_rotation:"set_rotation",set_scaleY:"set_scaleY",set_scaleX:"set_scaleX",set_alpha:"set_alpha",set_visible:"set_visible",set_stage:"set_stage",get_stage:"get_stage"}
});
var flash_display_InteractiveObject = function() {
	flash_display_DisplayObject.call(this);
	this.tabEnabled = false;
	this.tabIndex = 0;
	this.mouseEnabled = this.doubleClickEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash_display_InteractiveObject;
flash_display_InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash_display_InteractiveObject.__super__ = flash_display_DisplayObject;
flash_display_InteractiveObject.prototype = $extend(flash_display_DisplayObject.prototype,{
	doubleClickEnabled: null
	,focusRect: null
	,mouseEnabled: null
	,tabEnabled: null
	,tabIndex: null
	,giveFocus: function() {
		this.component.focus();
	}
	,__class__: flash_display_InteractiveObject
});
var flash_display_DisplayObjectContainer = function() {
	flash_display_InteractiveObject.call(this);
	this.children = [];
	this.mouseChildren = true;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash_display_DisplayObjectContainer;
flash_display_DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash_display_DisplayObjectContainer.__super__ = flash_display_InteractiveObject;
flash_display_DisplayObjectContainer.prototype = $extend(flash_display_InteractiveObject.prototype,{
	children: null
	,numChildren: null
	,mouseChildren: null
	,get_numChildren: function() {
		return this.children.length;
	}
	,addChild: function(o) {
		if(o.parent != null) o.parent.removeChild(o);
		o.parent = this;
		o.set_stage(this.get_stage());
		this.children.push(o);
		this.component.appendChild(o.component);
		var e = new flash_events_Event("added");
		o.dispatchEvent(e);
		this.dispatchEvent(e);
		return o;
	}
	,removeChild: function(o) {
		if(o.parent == this) {
			o.parent = null;
			o.set_stage(null);
			HxOverrides.remove(this.children,o);
			this.component.removeChild(o.component);
			var e = new flash_events_Event("removed");
			o.dispatchEvent(e);
			this.dispatchEvent(e);
		}
		return o;
	}
	,addChildAt: function(o,v) {
		if(v < this.children.length) {
			if(o.parent != null) o.parent.removeChild(o);
			o.parent = this;
			o.set_stage(this.get_stage());
			this.component.insertBefore(o.component,this.children[v].component);
			this.children.splice(v,0,o);
			return o;
		} else return this.addChild(o);
	}
	,removeChildAt: function(v) {
		return this.removeChild(this.children[v]);
	}
	,removeChildren: function(b,e) {
		if(b == null) b = 0;
		if(e == null) e = this.children.length;
		var i = e - b;
		while(--i >= 0) this.removeChild(this.children[b]);
	}
	,getChildAt: function(v) {
		return this.children[v];
	}
	,getChildIndex: function(v) {
		var i = -1;
		var l = this.children.length;
		while(++i < l) if(this.children[i] == v) return i;
		return -1;
	}
	,setChildIndex: function(v,i) {
		if(v.parent == this && i >= 0 && i <= this.children.length) {
			this.removeChild(v);
			this.addChildAt(v,i);
		}
	}
	,contains: function(v) {
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			if(o == v) return true;
		}
		return false;
	}
	,broadcastEvent: function(e) {
		this.dispatchEvent(e);
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.broadcastEvent(e);
		}
	}
	,broadcastMouse: function(h,e,ms,mc) {
		if(!this.visible) return false;
		var r = false;
		if(this.mouseChildren) {
			var i = this.children.length;
			if(i > 0) {
				h.push(this);
				while(--i >= 0) if(this.children[i].broadcastMouse(h,e,ms,mc)) {
					r = true;
					break;
				}
				h.pop();
			}
		}
		while(ms.length > h.length) mc.push(ms.pop());
		r = r || flash_display_InteractiveObject.prototype.broadcastMouse.call(this,h,e,ms,mc);
		while(ms.length > h.length) mc.push(ms.pop());
		return r;
	}
	,hitTestLocal: function(x,y,p,v) {
		if(!v || this.visible) {
			var i = this.children.length;
			var m;
			var o;
			if(i > 0) {
				m = flash_geom_Matrix.create();
				while(--i >= 0) {
					m.identity();
					o = this.children[i];
					o.concatTransform(m);
					m.invert();
					if(o.hitTestLocal(x * m.a + y * m.c + m.tx,x * m.b + y * m.d + m.ty,p,v)) return true;
				}
				flash_geom_Matrix.pool.push(m);
			}
		}
		return false;
	}
	,set_stage: function(v) {
		flash_display_InteractiveObject.prototype.set_stage.call(this,v);
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.set_stage(v);
		}
		return v;
	}
	,__class__: flash_display_DisplayObjectContainer
	,__properties__: $extend(flash_display_InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
var flash_display_IBitmapDrawable = function() { };
$hxClasses["flash.display.IBitmapDrawable"] = flash_display_IBitmapDrawable;
flash_display_IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash_display_IBitmapDrawable.prototype = {
	drawToSurface: null
	,__class__: flash_display_IBitmapDrawable
};
var flash_display_Sprite = function() {
	flash_display_DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash_display_Sprite;
flash_display_Sprite.__name__ = ["flash","display","Sprite"];
flash_display_Sprite.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_Sprite.__super__ = flash_display_DisplayObjectContainer;
flash_display_Sprite.prototype = $extend(flash_display_DisplayObjectContainer.prototype,{
	graphics: null
	,_graphics: null
	,useHandCursor: null
	,buttonMode: null
	,get_graphics: function() {
		if(this._graphics == null) {
			var o = new flash_display_Graphics();
			var q = o.component;
			o.set_displayObject(this);
			if(this.children.length == 0) this.component.appendChild(q); else this.component.insertBefore(q,this.children[0].component);
			this._graphics = o;
		}
		return this._graphics;
	}
	,set_stage: function(v) {
		var z = this.get_stage() == null && v != null;
		var r = flash_display_DisplayObjectContainer.prototype.set_stage.call(this,v);
		if(z && this._graphics != null) this._graphics.invalidate();
		return r;
	}
	,set_buttonMode: function(o) {
		if(o) this.component.style.cursor = "pointer"; else this.component.style.cursor = null;
		return this.useHandCursor = o;
	}
	,startDrag: function(c,r) {
		if(this.get_stage() != null) this.get_stage().__startDrag(this,c,r);
	}
	,stopDrag: function() {
		if(this.get_stage() != null) this.get_stage().__stopDrag(this);
	}
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		this.get_graphics().drawToSurface(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing);
	}
	,hitTestLocal: function(x,y,p,v) {
		if(flash_display_DisplayObjectContainer.prototype.hitTestLocal.call(this,x,y,p,v)) return true;
		if(!v || this.visible) {
			var g = this._graphics;
			if(g != null) return g.hitTestLocal(x,y,p);
		}
		return false;
	}
	,__class__: flash_display_Sprite
	,__properties__: $extend(flash_display_DisplayObjectContainer.prototype.__properties__,{set_buttonMode:"set_buttonMode",get_graphics:"get_graphics"})
});
var Main = function() {
	this.startFullscreen = false;
	this.skipSplash = false;
	this.framerate = 60;
	this.zoom = -1;
	this.initialState = MenuState;
	this.gameHeight = 240;
	this.gameWidth = 320;
	flash_display_Sprite.call(this);
	if(this.get_stage() != null) this.init(); else this.addEventListener("addedToStage",$bind(this,this.init));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	flash_Lib.get_current().addChild(new Main());
};
Main.__super__ = flash_display_Sprite;
Main.prototype = $extend(flash_display_Sprite.prototype,{
	gameWidth: null
	,gameHeight: null
	,initialState: null
	,zoom: null
	,framerate: null
	,skipSplash: null
	,startFullscreen: null
	,init: function(E) {
		if(this.hasEventListener("addedToStage")) this.removeEventListener("addedToStage",$bind(this,this.init));
		this.setupGame();
	}
	,setupGame: function() {
		var stageWidth = flash_Lib.get_current().get_stage().get_stageWidth();
		var stageHeight = flash_Lib.get_current().get_stage().get_stageHeight();
		if(this.zoom == -1) {
			var ratioX = stageWidth / this.gameWidth;
			var ratioY = stageHeight / this.gameHeight;
			this.zoom = Math.min(ratioX,ratioY);
			this.gameWidth = Math.ceil(stageWidth / this.zoom);
			this.gameHeight = Math.ceil(stageHeight / this.zoom);
		}
		this.addChild(new flixel_FlxGame(this.gameWidth,this.gameHeight,this.initialState,this.zoom,this.framerate,this.framerate,this.skipSplash,this.startFullscreen));
	}
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash_Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var flixel_interfaces_IFlxDestroyable = function() { };
$hxClasses["flixel.interfaces.IFlxDestroyable"] = flixel_interfaces_IFlxDestroyable;
flixel_interfaces_IFlxDestroyable.__name__ = ["flixel","interfaces","IFlxDestroyable"];
flixel_interfaces_IFlxDestroyable.prototype = {
	destroy: null
	,__class__: flixel_interfaces_IFlxDestroyable
};
var flixel_FlxBasic = function() {
	this.collisionType = 0;
	this.exists = true;
	this.alive = true;
	this.visible = true;
	this.active = true;
	this.ID = -1;
};
$hxClasses["flixel.FlxBasic"] = flixel_FlxBasic;
flixel_FlxBasic.__name__ = ["flixel","FlxBasic"];
flixel_FlxBasic.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_FlxBasic.prototype = {
	ID: null
	,active: null
	,visible: null
	,alive: null
	,exists: null
	,collisionType: null
	,destroy: function() {
		this.set_exists(false);
	}
	,kill: function() {
		this.set_alive(false);
		this.set_exists(false);
	}
	,revive: function() {
		this.set_alive(true);
		this.set_exists(true);
	}
	,update: function() {
	}
	,draw: function() {
	}
	,set_visible: function(Value) {
		return this.visible = Value;
	}
	,set_active: function(Value) {
		return this.active = Value;
	}
	,set_exists: function(Value) {
		return this.exists = Value;
	}
	,set_alive: function(Value) {
		return this.alive = Value;
	}
	,toString: function() {
		return flixel_util_FlxStringUtil.getDebugString([flixel_util_LabelValuePair._pool.get().create("active",this.active),flixel_util_LabelValuePair._pool.get().create("visible",this.visible),flixel_util_LabelValuePair._pool.get().create("alive",this.alive),flixel_util_LabelValuePair._pool.get().create("exists",this.exists)]);
	}
	,__class__: flixel_FlxBasic
	,__properties__: {set_exists:"set_exists",set_alive:"set_alive",set_visible:"set_visible",set_active:"set_active"}
};
var flixel_interfaces_IFlxPooled = function() { };
$hxClasses["flixel.interfaces.IFlxPooled"] = flixel_interfaces_IFlxPooled;
flixel_interfaces_IFlxPooled.__name__ = ["flixel","interfaces","IFlxPooled"];
flixel_interfaces_IFlxPooled.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_interfaces_IFlxPooled.prototype = {
	put: null
	,_inPool: null
	,__class__: flixel_interfaces_IFlxPooled
};
var flixel_util_FlxPool_$flixel_$util_$FlxRect = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_util_FlxRect"] = flixel_util_FlxPool_$flixel_$util_$FlxRect;
flixel_util_FlxPool_$flixel_$util_$FlxRect.__name__ = ["flixel","util","FlxPool_flixel_util_FlxRect"];
flixel_util_FlxPool_$flixel_$util_$FlxRect.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel_util_FlxPool_$flixel_$util_$FlxRect
	,__properties__: {get_length:"get_length"}
};
var flixel_util_FlxRect = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._inPool = false;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this;
};
$hxClasses["flixel.util.FlxRect"] = flixel_util_FlxRect;
flixel_util_FlxRect.__name__ = ["flixel","util","FlxRect"];
flixel_util_FlxRect.__interfaces__ = [flixel_interfaces_IFlxPooled];
flixel_util_FlxRect.get = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	var rect = flixel_util_FlxRect._pool.get().set(X,Y,Width,Height);
	rect._inPool = false;
	return rect;
};
flixel_util_FlxRect.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,_inPool: null
	,put: function() {
		if(!this._inPool) {
			this._inPool = true;
			flixel_util_FlxRect._pool.putUnsafe(this);
		}
	}
	,setSize: function(Width,Height) {
		this.width = Width;
		this.height = Height;
		return this;
	}
	,set: function(X,Y,Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,copyFrom: function(Rect) {
		this.x = Rect.x;
		this.y = Rect.y;
		this.width = Rect.width;
		this.height = Rect.height;
		return this;
	}
	,copyTo: function(Rect) {
		Rect.x = this.x;
		Rect.y = this.y;
		Rect.width = this.width;
		Rect.height = this.height;
		return Rect;
	}
	,copyFromFlash: function(FlashRect) {
		this.x = FlashRect.x;
		this.y = FlashRect.y;
		this.width = FlashRect.width;
		this.height = FlashRect.height;
		return this;
	}
	,copyToFlash: function(FlashRect) {
		FlashRect.x = this.x;
		FlashRect.y = this.y;
		FlashRect.width = this.width;
		FlashRect.height = this.height;
		return FlashRect;
	}
	,overlaps: function(Rect) {
		return Rect.x + Rect.width > this.x && Rect.x < this.x + this.width && Rect.y + Rect.height > this.y && Rect.y < this.y + this.height;
	}
	,containsFlxPoint: function(Point) {
		return flixel_util_FlxMath.pointInFlxRect(Point.x,Point.y,this);
	}
	,union: function(Rect) {
		var minX = Math.min(this.x,Rect.x);
		var minY = Math.min(this.y,Rect.y);
		var maxX = Math.max(this.x + this.width,Rect.x + Rect.width);
		var maxY = Math.max(this.y + this.height,Rect.y + Rect.height);
		this.x = minX;
		this.y = minY;
		this.width = maxX - minX;
		this.height = maxY - minY;
		return this;
	}
	,destroy: function() {
	}
	,toString: function() {
		return flixel_util_FlxStringUtil.getDebugString([flixel_util_LabelValuePair._pool.get().create("x",this.x),flixel_util_LabelValuePair._pool.get().create("y",this.y),flixel_util_LabelValuePair._pool.get().create("w",this.width),flixel_util_LabelValuePair._pool.get().create("h",this.height)]);
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(Value) {
		this.width -= Value - this.x;
		return this.x = Value;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(Value) {
		this.width = Value - this.x;
		return Value;
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(Value) {
		this.height -= Value - this.y;
		return this.y = Value;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(Value) {
		this.height = Value - this.y;
		return Value;
	}
	,__class__: flixel_util_FlxRect
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_top:"set_top",get_top:"get_top",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left"}
};
var flixel_FlxObject = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.collisonXDrag = true;
	this.allowCollisions = 4369;
	this.wasTouching = 0;
	this.touching = 0;
	this.health = 1;
	this.maxAngular = 10000;
	this.angularDrag = 0;
	this.angularAcceleration = 0;
	this.angularVelocity = 0;
	this.elasticity = 0;
	this.mass = 1;
	this.immovable = false;
	this.moves = true;
	this.angle = 0;
	this.pixelPerfectRender = true;
	this.y = 0;
	this.x = 0;
	flixel_FlxBasic.call(this);
	this.set_x(X);
	this.set_y(Y);
	this.set_width(Width);
	this.set_height(Height);
	this.initVars();
};
$hxClasses["flixel.FlxObject"] = flixel_FlxObject;
flixel_FlxObject.__name__ = ["flixel","FlxObject"];
flixel_FlxObject.separate = function(Object1,Object2) {
	var separatedX = flixel_FlxObject.separateX(Object1,Object2);
	var separatedY = flixel_FlxObject.separateY(Object1,Object2);
	return separatedX || separatedY;
};
flixel_FlxObject.separateX = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(Object1.collisionType == 3) return (js_Boot.__cast(Object1 , flixel_tile_FlxTilemap)).overlapsWithCallback(Object2,flixel_FlxObject.separateX);
	if(Object2.collisionType == 3) return (js_Boot.__cast(Object2 , flixel_tile_FlxTilemap)).overlapsWithCallback(Object1,flixel_FlxObject.separateX,true);
	var overlap = 0;
	var obj1delta = Object1.x - Object1.last.x;
	var obj2delta = Object2.x - Object2.last.x;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs;
		if(obj1delta > 0) obj1deltaAbs = obj1delta; else obj1deltaAbs = -obj1delta;
		var obj2deltaAbs;
		if(obj2delta > 0) obj2deltaAbs = obj2delta; else obj2deltaAbs = -obj2delta;
		var obj1rect = flixel_FlxObject._firstSeparateFlxRect.set(Object1.x - (obj1delta > 0?obj1delta:0),Object1.last.y,Object1.get_width() + obj1deltaAbs,Object1.get_height());
		var obj2rect = flixel_FlxObject._secondSeparateFlxRect.set(Object2.x - (obj2delta > 0?obj2delta:0),Object2.last.y,Object2.get_width() + obj2deltaAbs,Object2.get_height());
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + flixel_FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.x + Object1.get_width() - Object2.x;
				if(overlap > maxOverlap || (Object1.allowCollisions & 16) == 0 || (Object2.allowCollisions & 1) == 0) overlap = 0; else {
					Object1.touching |= 16;
					Object2.touching |= 1;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.x - Object2.get_width() - Object2.x;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 1) == 0 || (Object2.allowCollisions & 16) == 0) overlap = 0; else {
					Object1.touching |= 1;
					Object2.touching |= 16;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.x;
		var obj2v = Object2.velocity.x;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_x(Object1.x - overlap);
			var _g = Object2;
			_g.set_x(_g.x + overlap);
			var obj1velocity;
			obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity;
			obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.set_x(average + obj1velocity * Object1.elasticity);
			Object2.velocity.set_x(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_x(Object1.x - overlap);
			Object1.velocity.set_x(obj2v - obj1v * Object1.elasticity);
		} else if(!obj2immovable) {
			var _g1 = Object2;
			_g1.set_x(_g1.x + overlap);
			Object2.velocity.set_x(obj1v - obj2v * Object2.elasticity);
		}
		return true;
	} else return false;
};
flixel_FlxObject.separateY = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(Object1.collisionType == 3) return (js_Boot.__cast(Object1 , flixel_tile_FlxTilemap)).overlapsWithCallback(Object2,flixel_FlxObject.separateY);
	if(Object2.collisionType == 3) return (js_Boot.__cast(Object2 , flixel_tile_FlxTilemap)).overlapsWithCallback(Object1,flixel_FlxObject.separateY,true);
	var overlap = 0;
	var obj1delta = Object1.y - Object1.last.y;
	var obj2delta = Object2.y - Object2.last.y;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs;
		if(obj1delta > 0) obj1deltaAbs = obj1delta; else obj1deltaAbs = -obj1delta;
		var obj2deltaAbs;
		if(obj2delta > 0) obj2deltaAbs = obj2delta; else obj2deltaAbs = -obj2delta;
		var obj1rect = flixel_FlxObject._firstSeparateFlxRect.set(Object1.x,Object1.y - (obj1delta > 0?obj1delta:0),Object1.get_width(),Object1.get_height() + obj1deltaAbs);
		var obj2rect = flixel_FlxObject._secondSeparateFlxRect.set(Object2.x,Object2.y - (obj2delta > 0?obj2delta:0),Object2.get_width(),Object2.get_height() + obj2deltaAbs);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + flixel_FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.y + Object1.get_height() - Object2.y;
				if(overlap > maxOverlap || (Object1.allowCollisions & 4096) == 0 || (Object2.allowCollisions & 256) == 0) overlap = 0; else {
					Object1.touching |= 4096;
					Object2.touching |= 256;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.y - Object2.get_height() - Object2.y;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 256) == 0 || (Object2.allowCollisions & 4096) == 0) overlap = 0; else {
					Object1.touching |= 256;
					Object2.touching |= 4096;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.y;
		var obj2v = Object2.velocity.y;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_y(Object1.y - overlap);
			var _g = Object2;
			_g.set_y(_g.y + overlap);
			var obj1velocity;
			obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity;
			obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.set_y(average + obj1velocity * Object1.elasticity);
			Object2.velocity.set_y(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_y(Object1.y - overlap);
			Object1.velocity.set_y(obj2v - obj1v * Object1.elasticity);
			if(Object1.collisonXDrag && Object2.active && Object2.moves && obj1delta > obj2delta) {
				var _g1 = Object1;
				_g1.set_x(_g1.x + (Object2.x - Object2.last.x));
			}
		} else if(!obj2immovable) {
			var _g2 = Object2;
			_g2.set_y(_g2.y + overlap);
			Object2.velocity.set_y(obj1v - obj2v * Object2.elasticity);
			if(Object2.collisonXDrag && Object1.active && Object1.moves && obj1delta < obj2delta) {
				var _g3 = Object2;
				_g3.set_x(_g3.x + (Object1.x - Object1.last.x));
			}
		}
		return true;
	} else return false;
};
flixel_FlxObject.__super__ = flixel_FlxBasic;
flixel_FlxObject.prototype = $extend(flixel_FlxBasic.prototype,{
	x: null
	,y: null
	,width: null
	,height: null
	,pixelPerfectRender: null
	,angle: null
	,moves: null
	,immovable: null
	,scrollFactor: null
	,velocity: null
	,acceleration: null
	,drag: null
	,maxVelocity: null
	,last: null
	,mass: null
	,elasticity: null
	,angularVelocity: null
	,angularAcceleration: null
	,angularDrag: null
	,maxAngular: null
	,health: null
	,touching: null
	,wasTouching: null
	,allowCollisions: null
	,collisonXDrag: null
	,_point: null
	,_cameras: null
	,initVars: function() {
		this.collisionType = 1;
		this.last = flixel_util_FlxPoint.get(this.x,this.y);
		this.scrollFactor = flixel_util_FlxPoint.get(1,1);
		this._point = flixel_util_FlxPoint.get(null,null);
		this.velocity = flixel_util_FlxPoint.get(null,null);
		this.acceleration = flixel_util_FlxPoint.get(null,null);
		this.drag = flixel_util_FlxPoint.get(null,null);
		this.maxVelocity = flixel_util_FlxPoint.get(10000,10000);
	}
	,initMotionVars: function() {
		this.velocity = flixel_util_FlxPoint.get(null,null);
		this.acceleration = flixel_util_FlxPoint.get(null,null);
		this.drag = flixel_util_FlxPoint.get(null,null);
		this.maxVelocity = flixel_util_FlxPoint.get(10000,10000);
	}
	,destroy: function() {
		flixel_FlxBasic.prototype.destroy.call(this);
		this.velocity = flixel_util_FlxDestroyUtil.put(this.velocity);
		this.acceleration = flixel_util_FlxDestroyUtil.put(this.acceleration);
		this.drag = flixel_util_FlxDestroyUtil.put(this.drag);
		this.maxVelocity = flixel_util_FlxDestroyUtil.put(this.maxVelocity);
		this.scrollFactor = flixel_util_FlxDestroyUtil.put(this.scrollFactor);
		this.last = flixel_util_FlxDestroyUtil.put(this.last);
		this._point = flixel_util_FlxDestroyUtil.put(this._point);
		this._cameras = null;
	}
	,update: function() {
		this.last.set_x(this.x);
		this.last.set_y(this.y);
		if(this.moves) this.updateMotion();
		this.wasTouching = this.touching;
		this.touching = 0;
	}
	,updateMotion: function() {
		var dt = flixel_FlxG.elapsed;
		var velocityDelta = 0.5 * (flixel_util_FlxVelocity.computeVelocity(this.angularVelocity,this.angularAcceleration,this.angularDrag,this.maxAngular) - this.angularVelocity);
		this.angularVelocity += velocityDelta;
		var _g = this;
		_g.set_angle(_g.angle + this.angularVelocity * dt);
		this.angularVelocity += velocityDelta;
		velocityDelta = 0.5 * (flixel_util_FlxVelocity.computeVelocity(this.velocity.x,this.acceleration.x,this.drag.x,this.maxVelocity.x) - this.velocity.x);
		var _g1 = this.velocity;
		_g1.set_x(_g1.x + velocityDelta);
		var delta = this.velocity.x * dt;
		var _g2 = this.velocity;
		_g2.set_x(_g2.x + velocityDelta);
		var _g3 = this;
		_g3.set_x(_g3.x + delta);
		velocityDelta = 0.5 * (flixel_util_FlxVelocity.computeVelocity(this.velocity.y,this.acceleration.y,this.drag.y,this.maxVelocity.y) - this.velocity.y);
		var _g4 = this.velocity;
		_g4.set_y(_g4.y + velocityDelta);
		delta = this.velocity.y * dt;
		var _g5 = this.velocity;
		_g5.set_y(_g5.y + velocityDelta);
		var _g6 = this;
		_g6.set_y(_g6.y + delta);
	}
	,draw: function() {
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel_group_FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel_group_FlxGroup.overlaps($bind(this,this.overlapsCallback),group,0,0,InScreenSpace,Camera);
		if(ObjectOrGroup.collisionType == 3) return (js_Boot.__cast(ObjectOrGroup , flixel_tile_FlxTilemap)).overlaps(this,InScreenSpace,Camera);
		var object;
		object = js_Boot.__cast(ObjectOrGroup , flixel_FlxObject);
		if(!InScreenSpace) return object.x + object.get_width() > this.x && object.x < this.x + this.get_width() && object.y + object.get_height() > this.y && object.y < this.y + this.get_height();
		if(Camera == null) Camera = flixel_FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.get_width() > this._point.x && objectScreenPos.x < this._point.x + this.get_width() && objectScreenPos.y + object.get_height() > this._point.y && objectScreenPos.y < this._point.y + this.get_height();
	}
	,overlapsCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		return this.overlaps(ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel_group_FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel_group_FlxGroup.overlaps($bind(this,this.overlapsAtCallback),group,X,Y,InScreenSpace,Camera);
		if(ObjectOrGroup.collisionType == 3) {
			var tilemap;
			tilemap = js_Boot.__cast(ObjectOrGroup , flixel_tile_FlxTilemap);
			return tilemap.overlapsAt(tilemap.x - (X - this.x),tilemap.y - (Y - this.y),this,InScreenSpace,Camera);
		}
		var object;
		object = js_Boot.__cast(ObjectOrGroup , flixel_FlxObject);
		if(!InScreenSpace) return object.x + object.get_width() > X && object.x < X + this.get_width() && object.y + object.get_height() > Y && object.y < Y + this.get_height();
		if(Camera == null) Camera = flixel_FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.get_width() > this._point.x && objectScreenPos.x < this._point.x + this.get_width() && objectScreenPos.y + object.get_height() > this._point.y && objectScreenPos.y < this._point.y + this.get_height();
	}
	,overlapsAtCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		return this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return point.x > this.x && point.x < this.x + this.get_width() && point.y > this.y && point.y < this.y + this.get_height();
		if(Camera == null) Camera = flixel_FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		if(point._weak) point.put();
		return X > this._point.x && X < this._point.x + this.get_width() && Y > this._point.y && Y < this._point.y + this.get_height();
	}
	,inWorldBounds: function() {
		return this.x + this.get_width() > flixel_FlxG.worldBounds.x && this.x < flixel_FlxG.worldBounds.get_right() && this.y + this.get_height() > flixel_FlxG.worldBounds.y && this.y < flixel_FlxG.worldBounds.get_bottom();
	}
	,getScreenXY: function(point,Camera) {
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		if(Camera == null) Camera = flixel_FlxG.camera;
		return point.set(this.x - Camera.scroll.x * this.scrollFactor.x,this.y - Camera.scroll.y * this.scrollFactor.y);
	}
	,getMidpoint: function(point) {
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		return point.set(this.x + this.get_width() * 0.5,this.y + this.get_height() * 0.5);
	}
	,reset: function(X,Y) {
		this.revive();
		this.touching = 0;
		this.wasTouching = 0;
		this.setPosition(X,Y);
		this.last.set(this.x,this.y);
		this.velocity.set();
	}
	,isOnScreen: function(Camera) {
		if(Camera == null) Camera = flixel_FlxG.camera;
		this.getScreenXY(this._point,Camera);
		return this._point.x + this.get_width() > 0 && this._point.x < Camera.width && this._point.y + this.get_height() > 0 && this._point.y < Camera.height;
	}
	,isTouching: function(Direction) {
		return (this.touching & Direction) > 0;
	}
	,justTouched: function(Direction) {
		return (this.touching & Direction) > 0 && (this.wasTouching & Direction) <= 0;
	}
	,hurt: function(Damage) {
		this.health = this.health - Damage;
		if(this.health <= 0) this.kill();
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,toString: function() {
		return flixel_util_FlxStringUtil.getDebugString([flixel_util_LabelValuePair._pool.get().create("x",this.x),flixel_util_LabelValuePair._pool.get().create("y",this.y),flixel_util_LabelValuePair.weak("w",this.get_width()),flixel_util_LabelValuePair.weak("h",this.get_height()),flixel_util_LabelValuePair._pool.get().create("visible",this.visible),flixel_util_LabelValuePair._pool.get().create("velocity",this.velocity)]);
	}
	,set_x: function(NewX) {
		return this.x = NewX;
	}
	,set_y: function(NewY) {
		return this.y = NewY;
	}
	,set_width: function(Width) {
		this.width = Width;
		return Width;
	}
	,set_height: function(Height) {
		this.height = Height;
		return Height;
	}
	,get_width: function() {
		return this.width;
	}
	,get_height: function() {
		return this.height;
	}
	,get_solid: function() {
		return (this.allowCollisions & 4369) > 0;
	}
	,set_solid: function(Solid) {
		if(Solid) this.allowCollisions = 4369; else this.allowCollisions = 0;
		return Solid;
	}
	,set_angle: function(Value) {
		return this.angle = Value;
	}
	,set_moves: function(Value) {
		return this.moves = Value;
	}
	,set_immovable: function(Value) {
		return this.immovable = Value;
	}
	,get_camera: function() {
		if(this._cameras == null || this._cameras.length == 0) return flixel_FlxCamera.defaultCameras[0]; else return this._cameras[0];
	}
	,set_camera: function(Value) {
		if(this._cameras == null) this._cameras = [Value]; else this._cameras[0] = Value;
		return Value;
	}
	,get_cameras: function() {
		if(this._cameras == null) return flixel_FlxCamera.defaultCameras; else return this._cameras;
	}
	,set_cameras: function(Value) {
		return this._cameras = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		return this.pixelPerfectRender = Value;
	}
	,__class__: flixel_FlxObject
	,__properties__: $extend(flixel_FlxBasic.prototype.__properties__,{set_solid:"set_solid",get_solid:"get_solid",set_immovable:"set_immovable",set_moves:"set_moves",set_angle:"set_angle",set_pixelPerfectRender:"set_pixelPerfectRender",set_cameras:"set_cameras",get_cameras:"get_cameras",set_camera:"set_camera",get_camera:"get_camera",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width",set_y:"set_y",set_x:"set_x"})
});
var flixel_FlxSprite = function(X,Y,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._facingFlip = new haxe_ds_IntMap();
	this._angleChanged = false;
	this._cosAngle = 1;
	this._sinAngle = 0;
	this.useColorTransform = false;
	this.color = 16777215;
	this.flipY = false;
	this.flipX = false;
	this.facing = 16;
	this.alpha = 1.0;
	this.bakedRotationAngle = 0;
	this.frames = 0;
	this.frameHeight = 0;
	this.frameWidth = 0;
	this.dirty = true;
	this.antialiasing = false;
	flixel_FlxObject.call(this,X,Y);
	if(SimpleGraphic != null) this.loadGraphic(SimpleGraphic);
};
$hxClasses["flixel.FlxSprite"] = flixel_FlxSprite;
flixel_FlxSprite.__name__ = ["flixel","FlxSprite"];
flixel_FlxSprite.__super__ = flixel_FlxObject;
flixel_FlxSprite.prototype = $extend(flixel_FlxObject.prototype,{
	animation: null
	,framePixels: null
	,antialiasing: null
	,dirty: null
	,frame: null
	,frameWidth: null
	,frameHeight: null
	,frames: null
	,region: null
	,framesData: null
	,cachedGraphics: null
	,bakedRotationAngle: null
	,alpha: null
	,facing: null
	,flipX: null
	,flipY: null
	,origin: null
	,offset: null
	,scale: null
	,blend: null
	,color: null
	,colorTransform: null
	,useColorTransform: null
	,_flashPoint: null
	,_flashRect: null
	,_flashRect2: null
	,_flashPointZero: null
	,_matrix: null
	,_halfWidth: null
	,_halfHeight: null
	,_sinAngle: null
	,_cosAngle: null
	,_angleChanged: null
	,_facingFlip: null
	,initVars: function() {
		flixel_FlxObject.prototype.initVars.call(this);
		this.animation = new flixel_animation_FlxAnimationController(this);
		this._flashPoint = new flash_geom_Point();
		this._flashRect = new flash_geom_Rectangle();
		this._flashRect2 = new flash_geom_Rectangle();
		this._flashPointZero = new flash_geom_Point();
		this.offset = flixel_util_FlxPoint.get(null,null);
		this.origin = flixel_util_FlxPoint.get(null,null);
		this.scale = flixel_util_FlxPoint.get(1,1);
		this._matrix = new flash_geom_Matrix();
	}
	,destroy: function() {
		flixel_FlxObject.prototype.destroy.call(this);
		this.animation = flixel_util_FlxDestroyUtil.destroy(this.animation);
		this.offset = flixel_util_FlxDestroyUtil.put(this.offset);
		this.origin = flixel_util_FlxDestroyUtil.put(this.origin);
		this.scale = flixel_util_FlxDestroyUtil.put(this.scale);
		this.framePixels = flixel_util_FlxDestroyUtil.dispose(this.framePixels);
		this._flashPoint = null;
		this._flashRect = null;
		this._flashRect2 = null;
		this._flashPointZero = null;
		this._matrix = null;
		this.colorTransform = null;
		this.set_blend(null);
		this.set_frame(null);
		this.framesData = null;
		this.set_cachedGraphics(null);
		this.region = null;
	}
	,clone: function(NewSprite) {
		if(NewSprite == null) NewSprite = new flixel_FlxSprite();
		return NewSprite.loadGraphicFromSprite(this);
	}
	,loadGraphicFromSprite: function(Sprite) {
		if(!this.exists) flixel_FlxG.log.warn("Warning, trying to clone " + Type.getClassName(js_Boot.getClass(this)) + " object that doesn't exist.");
		this.region = Sprite.region.clone();
		this.bakedRotationAngle = Sprite.bakedRotationAngle;
		this.set_cachedGraphics(Sprite.cachedGraphics);
		this.set_width(this.frameWidth = Sprite.frameWidth);
		this.set_height(this.frameHeight = Sprite.frameHeight);
		if(this.bakedRotationAngle > 0) {
			this.set_width(Sprite.get_width());
			this.set_height(Sprite.get_height());
			this.centerOffsets();
		}
		this.updateFrameData();
		this.resetHelpers();
		this.antialiasing = Sprite.antialiasing;
		this.animation.copyFrom(Sprite.animation);
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Animated == null) Animated = false;
		this.bakedRotationAngle = 0;
		this.set_cachedGraphics(flixel_FlxG.bitmap.addWithSpaces(Graphic,0,0,1,1,Unique,Key));
		if(Width == 0) {
			if(Animated == true) Width = this.cachedGraphics.bitmap.component.height; else Width = this.cachedGraphics.bitmap.component.width;
			if(Width > this.cachedGraphics.bitmap.component.width) Width = this.cachedGraphics.bitmap.component.width; else Width = Width;
		}
		if(Height == 0) {
			if(Animated == true) Height = Width; else Height = this.cachedGraphics.bitmap.component.height;
			if(Height > this.cachedGraphics.bitmap.component.height) Height = this.cachedGraphics.bitmap.component.height; else Height = Height;
		}
		if(!js_Boot.__instanceof(Graphic,flixel_util_loaders_TextureRegion)) {
			this.region = new flixel_system_layer_Region(0,0,Width,Height);
			this.region.width = this.cachedGraphics.bitmap.component.width;
			this.region.height = this.cachedGraphics.bitmap.component.height;
		} else {
			this.region = (js_Boot.__cast(Graphic , flixel_util_loaders_TextureRegion)).region.clone();
			if(this.region.tileWidth > 0) Width = this.region.tileWidth; else this.region.tileWidth = this.region.width;
			if(this.region.tileHeight > 0) Height = this.region.tileWidth; else this.region.tileHeight = this.region.height;
		}
		this.set_width(this.frameWidth = Width);
		this.set_height(this.frameHeight = Height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		var rows = Std["int"](Math.sqrt(Rotations));
		var brush = flixel_FlxG.bitmap.addWithSpaces(Graphic,0,0,1,1,false,Key).bitmap;
		var isRegion = js_Boot.__instanceof(Graphic,flixel_util_loaders_TextureRegion);
		var spriteRegion;
		if(isRegion == true) spriteRegion = Graphic; else spriteRegion = null;
		var tempRegion;
		if(isRegion == true) tempRegion = spriteRegion.region; else tempRegion = null;
		if(Frame >= 0 || isRegion) {
			var full = brush;
			if(isRegion) {
				brush = new flash_display_BitmapData(tempRegion.width,tempRegion.height);
				this._flashRect.x = tempRegion.startX;
				this._flashRect.y = tempRegion.startY;
				this._flashRect.width = tempRegion.width;
				this._flashRect.height = tempRegion.height;
				brush.copyPixels(full,this._flashRect,this._flashPointZero);
			} else {
				brush = new flash_display_BitmapData(full.component.height,full.component.height);
				var rx = Frame * brush.component.width;
				var ry = 0;
				var fw = full.component.width;
				if(rx >= fw) {
					ry = (rx / fw | 0) * brush.component.height;
					rx %= fw;
				}
				this._flashRect.x = rx;
				this._flashRect.y = ry;
				this._flashRect.width = brush.component.width;
				this._flashRect.height = brush.component.height;
				brush.copyPixels(full,this._flashRect,this._flashPointZero);
			}
		}
		var max = brush.component.width;
		if(brush.component.height > max) max = brush.component.height;
		if(AutoBuffer) max = max * 1.5 | 0;
		var columns = Math.ceil(Rotations / rows);
		this.set_width(max * columns);
		this.set_height(max * rows);
		var key = "";
		if(typeof(Graphic) == "string") key = Graphic; else if(js_Boot.__instanceof(Graphic,Class)) key = Type.getClassName(Graphic); else if(js_Boot.__instanceof(Graphic,flash_display_BitmapData) && Key != null) key = Key; else if(isRegion) {
			key = spriteRegion.data.key;
			key += ":" + tempRegion.startX + ":" + tempRegion.startY + ":" + tempRegion.width + ":" + tempRegion.height + ":" + Rotations;
		} else return null;
		if(!isRegion) key += ":" + Frame + ":" + this.get_width() + "x" + this.get_height() + ":" + Rotations;
		var skipGen = flixel_FlxG.bitmap.checkCache(key);
		this.set_cachedGraphics(flixel_FlxG.bitmap.create(Std["int"](this.get_width()) + columns - 1,Std["int"](this.get_height()) + rows - 1,0,true,key));
		this.bakedRotationAngle = 360 / Rotations;
		if(!skipGen) {
			var row = 0;
			var column;
			var bakedAngle = 0;
			var halfBrushWidth = brush.component.width * 0.5 | 0;
			var halfBrushHeight = brush.component.height * 0.5 | 0;
			var midpointX = max * 0.5 | 0;
			var midpointY = max * 0.5 | 0;
			while(row < rows) {
				column = 0;
				while(column < columns) {
					this._matrix.identity();
					this._matrix.translate(-halfBrushWidth,-halfBrushHeight);
					this._matrix.rotate(bakedAngle * (Math.PI / 180));
					this._matrix.translate(max * column + midpointX + column,midpointY + row);
					bakedAngle += this.bakedRotationAngle;
					this.cachedGraphics.bitmap.draw(brush,this._matrix,null,null,null,AntiAliasing);
					column++;
				}
				midpointY += max;
				row++;
			}
		}
		this.frameWidth = this.frameHeight = max;
		this.set_width(this.set_height(max));
		this.region = new flixel_system_layer_Region(0,0,max,max,1,1);
		this.region.width = this.cachedGraphics.bitmap.component.width;
		this.region.height = this.cachedGraphics.bitmap.component.height;
		this.updateFrameData();
		if(AutoBuffer) {
			this.set_width(brush.component.width);
			this.set_height(brush.component.height);
			this.centerOffsets();
		}
		this.animation.createPrerotated();
		this.resetHelpers();
		return this;
	}
	,loadGraphicFromTexture: function(Data,Unique,FrameName) {
		if(Unique == null) Unique = false;
		this.bakedRotationAngle = 0;
		if(js_Boot.__instanceof(Data,flixel_util_loaders_CachedGraphics)) {
			this.set_cachedGraphics(Data);
			if(this.cachedGraphics.data == null) return null;
		} else if(js_Boot.__instanceof(Data,flixel_util_loaders_TexturePackerData)) {
			this.set_cachedGraphics(flixel_FlxG.bitmap.addWithSpaces(Data.assetName,0,0,1,1,Unique,null));
			this.cachedGraphics.data = Data;
		} else return null;
		this.region = new flixel_system_layer_Region();
		this.region.width = this.cachedGraphics.bitmap.component.width;
		this.region.height = this.cachedGraphics.bitmap.component.height;
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		if(FrameName != null) this.animation.set_frameName(FrameName);
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		return this;
	}
	,loadRotatedGraphicFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		var temp = this.loadGraphicFromTexture(Data);
		if(temp == null) return null;
		this.animation.set_frameName(Image);
		var key = Std.string(Data.assetName) + ":" + Image;
		var frameBitmapData = this.getFlxFrameBitmapData();
		if(flixel_FlxG.bitmap.get(key) == null) frameBitmapData = frameBitmapData.clone();
		this.loadRotatedGraphic(frameBitmapData,Rotations,-1,AntiAliasing,AutoBuffer,key);
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		this.bakedRotationAngle = 0;
		this.set_cachedGraphics(flixel_FlxG.bitmap.create(Width,Height,Color,Unique,Key));
		this.region = new flixel_system_layer_Region();
		this.region.width = Width;
		this.region.height = Height;
		this.set_width(this.region.tileWidth = this.frameWidth = this.cachedGraphics.bitmap.component.width);
		this.set_height(this.region.tileHeight = this.frameHeight = this.cachedGraphics.bitmap.component.height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return this;
	}
	,resetSize: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetFrameSize: function() {
		this.frameWidth = this.frame.sourceSize.x | 0;
		this.frameHeight = this.frame.sourceSize.y | 0;
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetSizeFromFrame: function() {
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,setGraphicSize: function(Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Width <= 0 && Height <= 0) return;
		var newScaleX = Width / this.frameWidth;
		var newScaleY = Height / this.frameHeight;
		this.scale.set(newScaleX,newScaleY);
		if(Width <= 0) this.scale.set_x(newScaleY); else if(Height <= 0) this.scale.set_y(newScaleX);
	}
	,updateHitbox: function() {
		var newWidth = this.scale.x * this.frameWidth;
		var newHeight = this.scale.y * this.frameHeight;
		this.set_width(newWidth);
		this.set_height(newHeight);
		this.offset.set(-((newWidth - this.frameWidth) * 0.5),-((newHeight - this.frameHeight) * 0.5));
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,resetHelpers: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
		this._flashRect2.x = 0;
		this._flashRect2.y = 0;
		this._flashRect2.width = this.cachedGraphics.bitmap.component.width;
		this._flashRect2.height = this.cachedGraphics.bitmap.component.height;
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		this.dirty = true;
		this.getFlxFrameBitmapData();
		this._halfWidth = this.frameWidth * 0.5;
		this._halfHeight = this.frameHeight * 0.5;
	}
	,update: function() {
		flixel_FlxObject.prototype.update.call(this);
		this.animation.update();
	}
	,draw: function() {
		if(this.alpha == 0) return;
		if(this.dirty) this.calcFrame();
		var simpleRender = this.isSimpleRender();
		var _g = 0;
		var _g1 = this.get_cameras();
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(!camera.visible || !camera.exists || !this.isOnScreen(camera)) continue;
			this._point.set_x(this.x - camera.scroll.x * this.scrollFactor.x - this.offset.x);
			this._point.set_y(this.y - camera.scroll.y * this.scrollFactor.y - this.offset.y);
			if(simpleRender) {
				this._flashPoint.x = Math.floor(this._point.x);
				this._flashPoint.y = Math.floor(this._point.y);
				camera.buffer.copyPixels(this.framePixels,this._flashRect,this._flashPoint,null,null,true);
			} else {
				this._matrix.identity();
				this._matrix.translate(-this.origin.x,-this.origin.y);
				this._matrix.scale(this.scale.x,this.scale.y);
				if(this.angle != 0 && this.bakedRotationAngle <= 0) this._matrix.rotate(this.angle * (Math.PI / 180));
				var _g2 = this._point;
				_g2.set_x(_g2.x + this.origin.x);
				var _g21 = this._point;
				_g21.set_y(_g21.y + this.origin.y);
				if(this.pixelPerfectRender) this._point.floor();
				this._matrix.translate(this._point.x,this._point.y);
				camera.buffer.draw(this.framePixels,this._matrix,null,this.blend,null,this.antialiasing || camera.antialiasing);
			}
		}
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(Brush.dirty) {
			Brush.dirty = true;
			Brush.calcFrame();
		}
		var bitmapData = Brush.framePixels;
		if((Brush.angle == 0 || Brush.bakedRotationAngle > 0) && Brush.scale.x == 1 && Brush.scale.y == 1 && Brush.blend == null) {
			this._flashPoint.x = X + this.region.startX;
			this._flashPoint.y = Y + this.region.startY;
			this._flashRect2.width = bitmapData.component.width;
			this._flashRect2.height = bitmapData.component.height;
			this.cachedGraphics.bitmap.copyPixels(bitmapData,this._flashRect2,this._flashPoint,null,null,true);
			this._flashRect2.width = this.cachedGraphics.bitmap.component.width;
			this._flashRect2.height = this.cachedGraphics.bitmap.component.height;
			this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
			this.dirty = true;
			this.calcFrame();
			return;
		}
		this._matrix.identity();
		this._matrix.translate(-Brush.origin.x,-Brush.origin.y);
		this._matrix.scale(Brush.scale.x,Brush.scale.y);
		if(Brush.angle != 0) this._matrix.rotate(Brush.angle * (Math.PI / 180));
		this._matrix.translate(X + this.region.startX + Brush.origin.x,Y + this.region.startY + Brush.origin.y);
		var brushBlend = Brush.blend;
		this.cachedGraphics.bitmap.draw(bitmapData,this._matrix,null,brushBlend,null,Brush.antialiasing);
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		this.dirty = true;
		this.calcFrame();
	}
	,drawFrame: function(Force) {
		if(Force == null) Force = false;
		if(Force || this.dirty) {
			this.dirty = true;
			this.calcFrame();
		}
	}
	,centerOffsets: function(AdjustPosition) {
		if(AdjustPosition == null) AdjustPosition = false;
		this.offset.set_x((this.frameWidth - this.get_width()) * 0.5);
		this.offset.set_y((this.frameHeight - this.get_height()) * 0.5);
		if(AdjustPosition) {
			var _g = this;
			_g.set_x(_g.x + this.offset.x);
			var _g1 = this;
			_g1.set_y(_g1.y + this.offset.y);
		}
	}
	,centerOrigin: function() {
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = [];
		var row = this.region.startY;
		var column;
		var rows = this.region.height;
		var columns = this.region.width;
		this.cachedGraphics.bitmap.lock();
		while(row < rows) {
			column = this.region.startX;
			while(column < columns) {
				if(this.cachedGraphics.bitmap.getPixel32(column,row) == Color) {
					this.cachedGraphics.bitmap.setPixel32(column,row,NewColor);
					if(FetchPositions) positions.push(flixel_util_FlxPoint.get(column,row));
					this.dirty = true;
				}
				column++;
			}
			row++;
		}
		this.cachedGraphics.bitmap.unlock();
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		return positions;
	}
	,setColorTransform: function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
		if(alphaOffset == null) alphaOffset = 0;
		if(blueOffset == null) blueOffset = 0;
		if(greenOffset == null) greenOffset = 0;
		if(redOffset == null) redOffset = 0;
		if(alphaMultiplier == null) alphaMultiplier = 1.0;
		if(blueMultiplier == null) blueMultiplier = 1.0;
		if(greenMultiplier == null) greenMultiplier = 1.0;
		if(redMultiplier == null) redMultiplier = 1.0;
		this.set_color((redMultiplier * 255 | 0) << 16 | (greenMultiplier * 255 | 0) << 8 | (blueMultiplier * 255 | 0));
		this.set_alpha(alphaMultiplier);
		if(this.colorTransform == null) this.colorTransform = new flash_geom_ColorTransform(); else {
			this.colorTransform.redMultiplier = redMultiplier;
			this.colorTransform.greenMultiplier = greenMultiplier;
			this.colorTransform.blueMultiplier = blueMultiplier;
			this.colorTransform.alphaMultiplier = alphaMultiplier;
			this.colorTransform.redOffset = redOffset;
			this.colorTransform.greenOffset = greenOffset;
			this.colorTransform.blueOffset = blueOffset;
			this.colorTransform.alphaOffset = alphaOffset;
		}
		this.useColorTransform = this.alpha != 1 || this.color != 16777215 || redOffset != 0 || greenOffset != 0 || blueOffset != 0 || alphaOffset != 0;
		this.dirty = true;
	}
	,updateColorTransform: function() {
		if(this.alpha != 1 || this.color != 16777215) {
			if(this.colorTransform == null) this.colorTransform = new flash_geom_ColorTransform((this.color >> 16) / 255,(this.color >> 8 & 255) / 255,(this.color & 255) / 255,this.alpha); else {
				this.colorTransform.redMultiplier = (this.color >> 16) / 255;
				this.colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
				this.colorTransform.blueMultiplier = (this.color & 255) / 255;
				this.colorTransform.alphaMultiplier = this.alpha;
			}
			this.useColorTransform = true;
		} else {
			if(this.colorTransform != null) {
				this.colorTransform.redMultiplier = 1;
				this.colorTransform.greenMultiplier = 1;
				this.colorTransform.blueMultiplier = 1;
				this.colorTransform.alphaMultiplier = 1;
			}
			this.useColorTransform = false;
		}
		this.dirty = true;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		if(Camera == null) Camera = flixel_FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.set_x(this._point.x - this.offset.x);
		this._point.set_y(this._point.y - this.offset.y);
		this._flashPoint.x = point.x - Camera.scroll.x - this._point.x;
		this._flashPoint.y = point.y - Camera.scroll.y - this._point.y;
		if(point._weak) point.put();
		if(this._flashPoint.x < 0 || this._flashPoint.x > this.frameWidth || this._flashPoint.y < 0 || this._flashPoint.y > this.frameHeight) return false; else {
			var frameData = this.getFlxFrameBitmapData();
			var pixelColor = frameData.getPixel32(this._flashPoint.x | 0,this._flashPoint.y | 0);
			var pixelAlpha = pixelColor >> 24 & 255;
			return pixelAlpha * this.alpha >= Mask;
		}
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) RunOnCpp = false;
		if(this.cachedGraphics == null) this.loadGraphic(flixel__$FlxSprite_GraphicDefault);
		this.getFlxFrameBitmapData();
	}
	,updateFrameData: function() {
		if(this.cachedGraphics == null) return;
		if(this.cachedGraphics.data != null && (this.region.tileWidth == 0 && this.region.tileHeight == 0)) this.framesData = this.cachedGraphics.get_tilesheet().getTexturePackerFrames(this.cachedGraphics.data); else this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region,null);
		this.frames = this.framesData.frames.length;
		this.animation.set_frameIndex(0);
		this.set_frame(this.framesData.frames[0]);
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,getFlxFrameBitmapData: function() {
		if(this.frame != null && this.dirty) {
			if(!this.flipX && !this.flipY && this.frame.type == flixel_system_layer_frames_FrameType.REGULAR) this.framePixels = this.frame.paintOnBitmap(this.framePixels); else {
				var frameBmd = null;
				if(this.flipX && this.flipY) frameBmd = this.frame.getHVReversedBitmap(); else if(this.flipX) frameBmd = this.frame.getHReversedBitmap(); else if(this.flipY) frameBmd = this.frame.getVReversedBitmap(); else frameBmd = this.frame.getBitmap();
				if(this.framePixels == null || this.framePixels.component.width != this.frameWidth || this.framePixels.component.height != this.frameHeight) {
					if(this.framePixels != null) this.framePixels.dispose();
					this.framePixels = new flash_display_BitmapData(this.frame.sourceSize.x | 0,this.frame.sourceSize.y | 0);
				}
				this.framePixels.copyPixels(frameBmd,this._flashRect,this._flashPointZero);
			}
			if(this.useColorTransform) this.framePixels.colorTransform(this._flashRect,this.colorTransform);
			this.dirty = false;
		}
		return this.framePixels;
	}
	,getGraphicMidpoint: function(point) {
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		return point.set(this.x + this.frameWidth * 0.5,this.y + this.frameHeight * 0.5);
	}
	,resetFrameBitmapDatas: function() {
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	}
	,isOnScreen: function(Camera) {
		if(Camera == null) Camera = flixel_FlxG.camera;
		var minX = this.x - this.offset.x - Camera.scroll.x * this.scrollFactor.x;
		var minY = this.y - this.offset.y - Camera.scroll.y * this.scrollFactor.y;
		var maxX = 0;
		var maxY = 0;
		if((this.angle == 0 || this.bakedRotationAngle > 0) && this.scale.x == 1 && this.scale.y == 1) {
			maxX = minX + this.frameWidth;
			maxY = minY + this.frameHeight;
		} else {
			var radiusX = this._halfWidth;
			var radiusY = this._halfHeight;
			if(this.origin.x == this._halfWidth) radiusX = Math.abs(this._halfWidth * this.scale.x); else {
				var sox = this.scale.x * this.origin.x;
				var sfw = this.scale.x * this.frameWidth;
				var x1 = Math.abs(sox);
				var x2 = Math.abs(sfw - sox);
				radiusX = Math.max(x2,x1);
			}
			if(this.origin.y == this._halfHeight) radiusY = Math.abs(this._halfHeight * this.scale.y); else {
				var soy = this.scale.y * this.origin.y;
				var sfh = this.scale.y * this.frameHeight;
				var y1 = Math.abs(soy);
				var y2 = Math.abs(sfh - soy);
				radiusY = Math.max(y2,y1);
			}
			var radius = Math.max(radiusX,radiusY);
			radius *= 1.41421356237;
			minX += this.origin.x;
			maxX = minX + radius;
			minX -= radius;
			minY += this.origin.y;
			maxY = minY + radius;
			minY -= radius;
		}
		if(maxX < 0 || minX > Camera.width) return false;
		if(maxY < 0 || minY > Camera.height) return false;
		return true;
	}
	,isSimpleRender: function() {
		return (this.angle == 0 || this.bakedRotationAngle > 0) && this.scale.x == 1 && this.scale.y == 1 && this.blend == null && this.pixelPerfectRender;
	}
	,setFacingFlip: function(Direction,FlipX,FlipY) {
		this._facingFlip.h[Direction] = { x : FlipX, y : FlipY};
	}
	,get_pixels: function() {
		return this.cachedGraphics.bitmap;
	}
	,set_pixels: function(Pixels) {
		var key = flixel_FlxG.bitmap.getCacheKeyFor(Pixels);
		if(key == null) {
			key = flixel_FlxG.bitmap.getUniqueKey();
			this.set_cachedGraphics(flixel_FlxG.bitmap.addWithSpaces(Pixels,0,0,1,1,false,key));
			this.cachedGraphics.set_destroyOnNoUse(true);
		} else this.set_cachedGraphics(flixel_FlxG.bitmap.get(key));
		if(this.region == null) this.region = new flixel_system_layer_Region();
		this.region.startX = 0;
		this.region.startY = 0;
		this.region.tileWidth = this.region.width = this.cachedGraphics.bitmap.component.width;
		this.region.tileHeight = this.region.height = this.cachedGraphics.bitmap.component.height;
		this.region.spacingX = 0;
		this.region.spacingY = 0;
		this.set_width(this.frameWidth = this.cachedGraphics.bitmap.component.width);
		this.set_height(this.frameHeight = this.cachedGraphics.bitmap.component.height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		return Pixels;
	}
	,set_frame: function(Value) {
		this.frame = Value;
		if(this.frame != null) {
			this.frameWidth = this.frame.sourceSize.x | 0;
			this.frameHeight = this.frame.sourceSize.y | 0;
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = this.frameWidth;
			this._flashRect.height = this.frameHeight;
			this.dirty = true;
		} else if(this.framesData != null && this.framesData.frames != null && this.framesData.frames.length > 0) {
			this.frame = this.framesData.frames[0];
			this.dirty = true;
		}
		return this.frame;
	}
	,set_facing: function(Direction) {
		var flip = this._facingFlip.h[Direction];
		if(flip != null) {
			this.set_flipX(flip.x);
			this.set_flipY(flip.y);
		}
		return this.facing = Direction;
	}
	,set_alpha: function(Alpha) {
		if(Alpha > 1) Alpha = 1;
		if(Alpha < 0) Alpha = 0;
		if(Alpha == this.alpha) return this.alpha;
		this.alpha = Alpha;
		this.updateColorTransform();
		return this.alpha;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this.color == Color) return Color;
		this.color = Color;
		this.updateColorTransform();
		return this.color;
	}
	,set_angle: function(Value) {
		this._angleChanged = this.angle != Value || this._angleChanged;
		return flixel_FlxObject.prototype.set_angle.call(this,Value);
	}
	,set_blend: function(Value) {
		return this.blend = Value;
	}
	,set_cachedGraphics: function(Value) {
		var oldCached = this.cachedGraphics;
		if(this.cachedGraphics != Value && Value != null) {
			var _g = Value;
			var _g1 = _g.useCount;
			_g.set_useCount(_g1 + 1);
			_g1;
		}
		if(oldCached != null && oldCached != Value) {
			var _g2 = oldCached;
			var _g11 = _g2.useCount;
			_g2.set_useCount(_g11 - 1);
			_g11;
		}
		return this.cachedGraphics = Value;
	}
	,set_flipX: function(Value) {
		if(this.flipX != Value) this.dirty = true;
		return this.flipX = Value;
	}
	,set_flipY: function(Value) {
		if(this.flipY != Value) this.dirty = true;
		return this.flipY = Value;
	}
	,__class__: flixel_FlxSprite
	,__properties__: $extend(flixel_FlxObject.prototype.__properties__,{set_color:"set_color",set_blend:"set_blend",set_flipY:"set_flipY",set_flipX:"set_flipX",set_facing:"set_facing",set_alpha:"set_alpha",set_cachedGraphics:"set_cachedGraphics",set_frame:"set_frame",set_pixels:"set_pixels",get_pixels:"get_pixels"})
});
var Bullet = function() {
	flixel_FlxSprite.call(this);
	this.loadGraphic("images/bullet.png",true);
	this.set_width(6);
	this.set_height(6);
	this.offset.set(1,1);
	this.animation.add("up",[0]);
	this.animation.add("down",[1]);
	this.animation.add("left",[2]);
	this.animation.add("right",[3]);
	this.animation.add("poof",[4,5,6,7],50,false);
	this._speed = 360;
};
$hxClasses["Bullet"] = Bullet;
Bullet.__name__ = ["Bullet"];
Bullet.__super__ = flixel_FlxSprite;
Bullet.prototype = $extend(flixel_FlxSprite.prototype,{
	_speed: null
	,update: function() {
		if(!this.alive) {
			if(this.animation.get_finished()) this.set_exists(false);
		} else if(this.touching != 0) this.kill();
		flixel_FlxSprite.prototype.update.call(this);
	}
	,kill: function() {
		if(!this.alive) return;
		this.velocity.set(0,0);
		if(this.isOnScreen()) flixel_FlxG.sound.play("Jump");
		this.set_alive(false);
		this.set_solid(false);
		this.animation.play("poof");
	}
	,shoot: function(Location,Aim) {
		flixel_FlxG.sound.play("Shoot");
		flixel_FlxSprite.prototype.reset.call(this,Location.x - this.get_width() / 2,Location.y - this.get_height() / 2);
		this.set_solid(true);
		switch(Aim) {
		case 256:
			this.animation.play("up");
			this.velocity.set_y(-this._speed);
			break;
		case 4096:
			this.animation.play("down");
			this.velocity.set_y(this._speed);
			break;
		case 1:
			this.animation.play("left");
			this.velocity.set_x(-this._speed);
			break;
		case 16:
			this.animation.play("right");
			this.velocity.set_x(this._speed);
			break;
		}
	}
	,__class__: Bullet
});
var openfl_AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl_AssetLibrary;
openfl_AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl_AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getText: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getPath: function(id) {
		return null;
	}
	,getSound: function(id) {
		return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		return null;
	}
	,load: function(h) {
		h(this);
	}
	,loadBitmapData: function(id,h) {
		h(this.getBitmapData(id));
	}
	,loadBytes: function(id,h) {
		h(this.getBytes(id));
	}
	,loadText: function(id,h) {
		h(this.getText(id));
	}
	,loadFont: function(id,h) {
		h(this.getFont(id));
	}
	,loadMovieClip: function(id,h) {
		h(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,__class__: openfl_AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe_ds_StringMap();
	this.path = new haxe_ds_StringMap();
	this.className = new haxe_ds_StringMap();
	openfl_AssetLibrary.call(this);
	this.add("assets/data/80.csv",openfl_AssetType.TEXT);
	this.add("assets/data/attract1.fgr",openfl_AssetType.TEXT);
	this.add("assets/data/attract2.fgr",openfl_AssetType.TEXT);
	this.add("assets/data/data-goes-here.txt",openfl_AssetType.TEXT);
	this.add("assets/images/bot.png",openfl_AssetType.IMAGE);
	this.add("assets/images/bot_bullet.png",openfl_AssetType.IMAGE);
	this.add("assets/images/bullet.png",openfl_AssetType.IMAGE);
	this.add("assets/images/cursor.png",openfl_AssetType.IMAGE);
	this.add("assets/images/dirt.png",openfl_AssetType.IMAGE);
	this.add("assets/images/dirt_top.png",openfl_AssetType.IMAGE);
	this.add("assets/images/gibs.png",openfl_AssetType.IMAGE);
	this.add("assets/images/images-go-here.txt",openfl_AssetType.TEXT);
	this.add("assets/images/img_tiles.png",openfl_AssetType.IMAGE);
	this.add("assets/images/jet.png",openfl_AssetType.IMAGE);
	this.add("assets/images/miniframe.png",openfl_AssetType.IMAGE);
	this.add("assets/images/spaceman.png",openfl_AssetType.IMAGE);
	this.add("assets/images/spawner.png",openfl_AssetType.IMAGE);
	this.add("assets/images/spawner_gibs.png",openfl_AssetType.IMAGE);
	this.add("assets/images/tech_tiles.png",openfl_AssetType.IMAGE);
	this.add("assets/music/music-goes-here.txt",openfl_AssetType.TEXT);
	this.add("assets/sounds/asplode.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/asplode.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/button.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/button.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/countdown.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/countdown.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/enemy.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/enemy.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/hit.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/hit.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/hurt.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/hurt.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/jam.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/jam.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/jet.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/jet.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/jump.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/jump.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/menu_hit.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/menu_hit.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/menu_hit_2.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/menu_hit_2.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/mode.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/mode.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/shoot.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/shoot.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/sounds-go-here.txt",openfl_AssetType.TEXT);
	this.add("assets/sounds/beep.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/flixel.mp3",openfl_AssetType.MUSIC);
	this.add("assets/sounds/beep.ogg",openfl_AssetType.SOUND);
	this.add("assets/sounds/flixel.ogg",openfl_AssetType.SOUND);
	this.add("images/bot.png",openfl_AssetType.IMAGE);
	this.add("images/bot_bullet.png",openfl_AssetType.IMAGE);
	this.add("images/bullet.png",openfl_AssetType.IMAGE);
	this.add("images/cursor.png",openfl_AssetType.IMAGE);
	this.add("images/dirt.png",openfl_AssetType.IMAGE);
	this.add("images/dirt_top.png",openfl_AssetType.IMAGE);
	this.add("images/gibs.png",openfl_AssetType.IMAGE);
	this.add("images/images-go-here.txt",openfl_AssetType.TEXT);
	this.add("images/img_tiles.png",openfl_AssetType.IMAGE);
	this.add("images/jet.png",openfl_AssetType.IMAGE);
	this.add("images/miniframe.png",openfl_AssetType.IMAGE);
	this.add("images/spaceman.png",openfl_AssetType.IMAGE);
	this.add("images/spawner.png",openfl_AssetType.IMAGE);
	this.add("images/spawner_gibs.png",openfl_AssetType.IMAGE);
	this.add("images/tech_tiles.png",openfl_AssetType.IMAGE);
	this.add("data/80.csv",openfl_AssetType.TEXT);
	this.add("data/attract1.fgr",openfl_AssetType.TEXT);
	this.add("data/attract2.fgr",openfl_AssetType.TEXT);
	this.add("data/data-goes-here.txt",openfl_AssetType.TEXT);
	this.add("Asplode",openfl_AssetType.MUSIC,"assets/sounds/asplode.mp3");
	this.add("Button",openfl_AssetType.MUSIC,"assets/sounds/button.mp3");
	this.add("Countdown",openfl_AssetType.MUSIC,"assets/sounds/countdown.mp3");
	this.add("Enemy",openfl_AssetType.MUSIC,"assets/sounds/enemy.mp3");
	this.add("Hit",openfl_AssetType.MUSIC,"assets/sounds/hit.mp3");
	this.add("Hurt",openfl_AssetType.MUSIC,"assets/sounds/hurt.mp3");
	this.add("Jam",openfl_AssetType.MUSIC,"assets/sounds/jam.mp3");
	this.add("Jet",openfl_AssetType.MUSIC,"assets/sounds/jet.mp3");
	this.add("Jump",openfl_AssetType.MUSIC,"assets/sounds/jump.mp3");
	this.add("MenuHit",openfl_AssetType.MUSIC,"assets/sounds/menu_hit.mp3");
	this.add("MenuHit2",openfl_AssetType.MUSIC,"assets/sounds/menu_hit_2.mp3");
	this.add("Mode",openfl_AssetType.MUSIC,"assets/sounds/mode.mp3");
	this.add("Shoot",openfl_AssetType.MUSIC,"assets/sounds/shoot.mp3");
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl_AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl_AssetLibrary.prototype,{
	className: null
	,path: null
	,type: null
	,lastModified: null
	,timer: null
	,add: function(id,t,p) {
		this.type.set(id,t);
		this.path.set(id,p != null?p:id);
	}
	,getPath: function(id) {
		return this.path.get(id);
	}
	,exists: function(id,t) {
		var r = this.type.get(id);
		if(r != null) {
			if(r == t || t == null) return true;
			switch(t[1]) {
			case 5:
				return r == openfl_AssetType.MUSIC;
			case 4:
				return r == openfl_AssetType.SOUND;
			case 0:
				return true;
			default:
				return false;
			}
		}
		return false;
	}
	,getBitmapData: function(id) {
		var q;
		var key = this.path.get(id);
		q = ApplicationMain.loaders.get(key);
		var b = q.contentLoaderInfo.content;
		return b.bitmapData;
	}
	,getFont: function(id) {
		return null;
	}
	,getSound: function(id) {
		return new flash_media_Sound(new flash_net_URLRequest(this.path.get(id)));
	}
	,getMusic: function(id) {
		return new flash_media_Sound(new flash_net_URLRequest(this.path.get(id)));
	}
	,getBytes: function(id) {
		var r = null;
		var p = this.path.get(id);
		var d = ApplicationMain.urlLoaders.get(p).data;
		if(typeof(d) == "string") (r = new flash_utils_ByteArray()).writeUTFBytes(d); else if(js_Boot.__instanceof(d,flash_utils_ByteArray)) r = d; else r = null;
		if(r != null) {
			r.position = 0;
			return r;
		} else return null;
	}
	,getText: function(id) {
		var r = null;
		var p = this.path.get(id);
		var d = ApplicationMain.urlLoaders.get(p).data;
		if(typeof(d) == "string") return d; else if(js_Boot.__instanceof(d,flash_utils_ByteArray)) {
			r = d;
			r.position = 0;
			return r.readUTFBytes(r.length);
		} else return null;
	}
	,list: function(t) {
		var r = [];
		var $it0 = this.type.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			if(t == null || this.exists(id,t)) r.push(id);
		}
		return r;
	}
	,loadBitmapData: function(id,h) {
		if(this.path.exists(id)) {
			var r = new flash_display_Loader();
			var f = null;
			f = function(e) {
				r.contentLoaderInfo.removeEventListener("complete",f);
				var b = e.get_currentTarget().content;
				h(b.bitmapData);
				b = null;
				f = null;
				r = null;
			};
			r.addEventListener("complete",f);
			r.load(new flash_net_URLRequest(this.path.get(id)));
		} else h(this.getBitmapData(id));
	}
	,loadFont: function(id,h) {
		h(this.getFont(id));
	}
	,loadSound: function(id,h) {
		h(this.getSound(id));
	}
	,loadMusic: function(id,h) {
		h(this.getMusic(id));
	}
	,loadBytes: function(id,h) {
		if(this.path.exists(id)) {
			var r = new flash_net_URLLoader();
			var f = null;
			f = function(e) {
				r.removeEventListener("complete",f);
				var b = new flash_utils_ByteArray();
				b.writeUTFBytes(e.get_currentTarget().data);
				b.position = 0;
				h(b);
				b = null;
				f = null;
				r = null;
			};
			r.addEventListener("complete",f);
		} else h(this.getBytes(id));
	}
	,loadText: function(id,h) {
		if(this.path.exists(id)) {
			var r = new flash_net_URLLoader();
			var f = null;
			f = function(e) {
				r.removeEventListener("complete",f);
				h(e.get_currentTarget().data);
				f = null;
				r = null;
			};
			r.addEventListener("complete",f);
		} else h(this.getText(id));
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = [];
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
};
Math.__name__ = ["Math"];
var flixel_group_FlxTypedGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	this._marker = 0;
	this.length = 0;
	flixel_FlxBasic.call(this);
	this.members = [];
	this.set_maxSize(Std["int"](Math.abs(MaxSize)));
	this.collisionType = 2;
};
$hxClasses["flixel.group.FlxTypedGroup"] = flixel_group_FlxTypedGroup;
flixel_group_FlxTypedGroup.__name__ = ["flixel","group","FlxTypedGroup"];
flixel_group_FlxTypedGroup.__super__ = flixel_FlxBasic;
flixel_group_FlxTypedGroup.prototype = $extend(flixel_FlxBasic.prototype,{
	members: null
	,maxSize: null
	,length: null
	,_marker: null
	,destroy: function() {
		flixel_FlxBasic.prototype.destroy.call(this);
		if(this.members != null) {
			var i = 0;
			var basic = null;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null) basic.destroy();
			}
			this.members = null;
		}
	}
	,update: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.active) basic.update();
		}
	}
	,draw: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.visible) basic.draw();
		}
	}
	,add: function(Object) {
		if(Object == null) return null;
		if(HxOverrides.indexOf(this.members,Object,0) >= 0) return Object;
		var index = this.getFirstNull();
		if(index != -1) {
			this.members[index] = Object;
			if(index >= this.length) this.length = index + 1;
			return Object;
		}
		if(this.maxSize > 0 && this.length >= this.maxSize) return Object;
		this.members.push(Object);
		this.length++;
		return Object;
	}
	,recycle: function(ObjectClass,ContructorArgs,Force,Revive) {
		if(Revive == null) Revive = true;
		if(Force == null) Force = false;
		if(ContructorArgs == null) ContructorArgs = [];
		var basic = null;
		if(this.maxSize > 0) {
			if(this.length < this.maxSize) {
				if(ObjectClass == null) return null;
				return this.add(Type.createInstance(ObjectClass,ContructorArgs));
			} else {
				basic = this.members[this._marker++];
				if(this._marker >= this.maxSize) this._marker = 0;
				if(Revive) basic.revive();
				return basic;
			}
		} else {
			basic = this.getFirstAvailable(ObjectClass,Force);
			if(basic != null) {
				if(Revive) basic.revive();
				return basic;
			}
			if(ObjectClass == null) return null;
			return this.add(Type.createInstance(ObjectClass,ContructorArgs));
		}
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		if(this.members == null) return null;
		var index = HxOverrides.indexOf(this.members,Object,0);
		if(index < 0) return null;
		if(Splice) this.members.splice(index,1); else this.members[index] = null;
		return Object;
	}
	,replace: function(OldObject,NewObject) {
		var index = HxOverrides.indexOf(this.members,OldObject,0);
		if(index < 0) return null;
		this.members[index] = NewObject;
		return NewObject;
	}
	,sort: function(Function,Order) {
		if(Order == null) Order = -1;
		this.members.sort((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(Function,Order));
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && basic.collisionType == 2) basic.setAll(VariableName,Value,Recurse); else Reflect.setProperty(basic,VariableName,Value);
			}
		}
	}
	,callAll: function(FunctionName,Args,Recurse) {
		if(Recurse == null) Recurse = true;
		if(Args == null) Args = [];
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && basic.collisionType == 2) (js_Boot.__cast(basic , flixel_group_FlxTypedGroup)).callAll(FunctionName,Args,Recurse); else Reflect.callMethod(basic,Reflect.getProperty(basic,FunctionName),Args);
			}
		}
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) Force = false;
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.exists && (ObjectClass == null || js_Boot.__instanceof(basic,ObjectClass))) {
				if(Force && Type.getClassName(basic == null?null:js_Boot.getClass(basic)) != Type.getClassName(ObjectClass)) continue;
				return this.members[i - 1];
			}
		}
		return null;
	}
	,getFirstNull: function() {
		var i = 0;
		while(i < this.length) {
			if(this.members[i] == null) return i;
			i++;
		}
		return -1;
	}
	,getFirstExisting: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) return basic;
		}
		return null;
	}
	,getFirstAlive: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) return basic;
		}
		return null;
	}
	,getFirstDead: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) return basic;
		}
		return null;
	}
	,countLiving: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(basic.exists && basic.alive) count++;
			}
		}
		return count;
	}
	,countDead: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(!basic.alive) count++;
			}
		}
		return count;
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		if(StartIndex < 0) StartIndex = 0;
		if(Length <= 0) Length = this.length;
		return flixel_util_FlxRandom.getObject_getRandom_T(this.members,StartIndex,Length);
	}
	,clear: function() {
		this.length = 0;
		flixel_util_FlxArrayUtil.clearArray(this.members);
	}
	,kill: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) basic.kill();
		}
		flixel_FlxBasic.prototype.kill.call(this);
	}
	,iterator: function(filter) {
		return new flixel_group_FlxTypedGroupIterator(this.members,filter);
	}
	,forEach: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) Function(basic);
		}
	}
	,forEachAlive: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) Function(basic);
		}
	}
	,forEachDead: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) Function(basic);
		}
	}
	,forEachExists: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) Function(basic);
		}
	}
	,forEachOfType: function(ObjectClass,Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && js_Boot.__instanceof(basic,ObjectClass)) Function(basic);
		}
	}
	,set_maxSize: function(Size) {
		this.maxSize = Std["int"](Math.abs(Size));
		if(this._marker >= this.maxSize) this._marker = 0;
		if(this.maxSize == 0 || this.members == null || this.maxSize >= this.length) return this.maxSize;
		var i = this.maxSize;
		var l = this.length;
		var basic = null;
		while(i < l) {
			basic = this.members[i++];
			if(basic != null) basic.destroy();
		}
		flixel_util_FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this.members,this.maxSize);
		this.length = this.members.length;
		return this.maxSize;
	}
	,__class__: flixel_group_FlxTypedGroup
	,__properties__: $extend(flixel_FlxBasic.prototype.__properties__,{set_maxSize:"set_maxSize"})
});
var flixel_group_FlxGroup = function(MaxSize) {
	flixel_group_FlxTypedGroup.call(this,MaxSize);
};
$hxClasses["flixel.group.FlxGroup"] = flixel_group_FlxGroup;
flixel_group_FlxGroup.__name__ = ["flixel","group","FlxGroup"];
flixel_group_FlxGroup.overlaps = function(Callback,Group,X,Y,InScreenSpace,Camera) {
	var result = false;
	if(Group != null) {
		var i = 0;
		var l = Group.length;
		var basic;
		while(i < l) {
			basic = Group.members[i++];
			if(basic != null && Callback(basic,X,Y,InScreenSpace,Camera)) {
				result = true;
				break;
			}
		}
	}
	return result;
};
flixel_group_FlxGroup.resolveGroup = function(ObjectOrGroup) {
	var group = null;
	if(ObjectOrGroup.collisionType == 4 || ObjectOrGroup.collisionType == 2) {
		if(ObjectOrGroup.collisionType == 2) group = ObjectOrGroup; else if(ObjectOrGroup.collisionType == 4) group = (js_Boot.__cast(ObjectOrGroup , flixel_group_FlxSpriteGroup)).group;
	}
	return group;
};
flixel_group_FlxGroup.__super__ = flixel_group_FlxTypedGroup;
flixel_group_FlxGroup.prototype = $extend(flixel_group_FlxTypedGroup.prototype,{
	__class__: flixel_group_FlxGroup
});
var flixel_FlxState = function(MaxSize) {
	this._requestSubStateReset = false;
	this.destroySubStates = true;
	this.persistentDraw = true;
	this.persistentUpdate = false;
	flixel_group_FlxGroup.call(this,MaxSize);
};
$hxClasses["flixel.FlxState"] = flixel_FlxState;
flixel_FlxState.__name__ = ["flixel","FlxState"];
flixel_FlxState.__super__ = flixel_group_FlxGroup;
flixel_FlxState.prototype = $extend(flixel_group_FlxGroup.prototype,{
	persistentUpdate: null
	,persistentDraw: null
	,destroySubStates: null
	,subState: null
	,_requestedSubState: null
	,_requestSubStateReset: null
	,create: function() {
	}
	,draw: function() {
		if(this.persistentDraw || this.subState == null) flixel_group_FlxGroup.prototype.draw.call(this);
		if(this.subState != null) this.subState.draw();
	}
	,openSubState: function(SubState) {
		this._requestSubStateReset = true;
		this._requestedSubState = SubState;
	}
	,closeSubState: function() {
		this._requestSubStateReset = true;
	}
	,resetSubState: function() {
		if(this.subState != null) {
			if(this.subState.closeCallback != null) this.subState.closeCallback();
			if(this.destroySubStates) this.subState.destroy();
		}
		this.subState = this._requestedSubState;
		this._requestedSubState = null;
		if(this.subState != null) {
			if(!this.persistentUpdate) flixel_FlxG.inputs.reset();
			if(!this.subState._created) {
				this.subState._created = true;
				this.subState._parentState = this;
				this.subState.create();
			}
		}
	}
	,destroy: function() {
		if(this.subState != null) {
			this.subState.destroy();
			this.subState = null;
		}
		flixel_group_FlxGroup.prototype.destroy.call(this);
	}
	,onFocusLost: function() {
	}
	,onFocus: function() {
	}
	,onResize: function(Width,Height) {
	}
	,tryUpdate: function() {
		if(this.persistentUpdate || this.subState == null) this.update();
		if(this._requestSubStateReset) {
			this._requestSubStateReset = false;
			this.resetSubState();
		} else if(this.subState != null) this.subState.tryUpdate();
	}
	,get_bgColor: function() {
		return flixel_FlxG.cameras.get_bgColor();
	}
	,set_bgColor: function(Value) {
		return flixel_FlxG.cameras.set_bgColor(Value);
	}
	,__class__: flixel_FlxState
	,__properties__: $extend(flixel_group_FlxGroup.prototype.__properties__,{set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"})
});
var MenuState = function(MaxSize) {
	flixel_FlxState.call(this,MaxSize);
};
$hxClasses["MenuState"] = MenuState;
MenuState.__name__ = ["MenuState"];
MenuState.__super__ = flixel_FlxState;
MenuState.prototype = $extend(flixel_FlxState.prototype,{
	buttonPlay: null
	,title1: null
	,create: function() {
		flixel_FlxG.cameras.set_bgColor(-15524837);
		if(flixel_FlxG.sound.music != null) flixel_FlxG.sound.music.stop();
		var save = new flixel_util_FlxSave();
		if(save.bind("Coba")) {
			if(save.data.plays == null) save.data.plays = 0.0; else save.data.plays = save.data.plays++;
			save.close();
		}
		this.title1 = new flixel_text_FlxText(-50,flixel_FlxG.height / 3,128,"MYGAME");
		this.title1.set_size(24);
		this.title1.set_color(-1);
		this.title1.set_moves(true);
		this.title1.velocity.set_x(100);
		this.title1.antialiasing = true;
		this.add(this.title1);
		this.buttonPlay = new flixel_ui_FlxButton(0,0,"Play",$bind(this,this.ClickToPlay));
		this.add(this.buttonPlay);
		flixel_util_FlxSpriteUtil.screenCenter(this.buttonPlay);
		flixel_FlxState.prototype.create.call(this);
	}
	,destroy: function() {
		this.buttonPlay = flixel_util_FlxDestroyUtil.destroy(this.buttonPlay);
		flixel_FlxState.prototype.destroy.call(this);
	}
	,update: function() {
		flixel_FlxState.prototype.update.call(this);
		if(this.title1.x > flixel_FlxG.width / 2) {
			this.title1.set_x(flixel_FlxG.width / 2);
			this.title1.velocity.set_x(0);
			flixel_FlxG.cameras.flash(-65536,0.5);
			flixel_FlxG.cameras.shake(0.035,0.5);
			this.title1.set_color(-256);
		}
	}
	,ClickToPlay: function() {
		flixel_FlxG.switchState(new PlayState());
	}
	,__class__: MenuState
});
var NMEPreloader = function() {
	flash_display_Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 7;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 2;
	this.outline = new flash_display_Sprite();
	this.outline.get_graphics().beginFill(color,0.07);
	this.outline.get_graphics().drawRect(0,0,width,height);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash_display_Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash_display_Sprite;
NMEPreloader.prototype = $extend(flash_display_Sprite.prototype,{
	outline: null
	,progress: null
	,getBackgroundColor: function() {
		return 0;
	}
	,getHeight: function() {
		var height = 480;
		if(height > 0) return height; else return flash_Lib.get_current().get_stage().get_stageHeight();
	}
	,getWidth: function() {
		var width = 640;
		if(width > 0) return width; else return flash_Lib.get_current().get_stage().get_stageWidth();
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash_events_Event("complete"));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded = 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var PlayState = function(MaxSize) {
	flixel_FlxState.call(this,MaxSize);
};
$hxClasses["PlayState"] = PlayState;
PlayState.__name__ = ["PlayState"];
PlayState.__super__ = flixel_FlxState;
PlayState.prototype = $extend(flixel_FlxState.prototype,{
	_map: null
	,_tileMap: null
	,player: null
	,create: function() {
		this.player = new Player(10,10);
		this.generateLevel();
		this.add(this.player);
		flixel_FlxState.prototype.create.call(this);
	}
	,destroy: function() {
		flixel_FlxState.prototype.destroy.call(this);
	}
	,update: function() {
		flixel_FlxState.prototype.update.call(this);
		flixel_FlxG.overlap(this._tileMap,this.player,null,flixel_FlxObject.separate);
	}
	,generateLevel: function() {
		var r = 160;
		this._map = [];
		var numTilesTotal = 400;
		var _g = 0;
		while(_g < numTilesTotal) {
			var i = _g++;
			this._map[i] = 0;
		}
		this.fillTileMapRectWithRandomTiles(0,0,640,16,1,6,this._map,20);
		this.fillTileMapRectWithRandomTiles(0,16,16,624,1,6,this._map,20);
		this.fillTileMapRectWithRandomTiles(624,16,16,624,1,6,this._map,20);
		this.fillTileMapRectWithRandomTiles(16,616,608,8,16,17,this._map,20);
		this.fillTileMapRectWithRandomTiles(16,624,608,16,32,47,this._map,20);
		this.buildRoom(r * 0,r * 0,true);
		this.buildRoom(r,r * 0);
		this.buildRoom(r * 2,r * 0);
		this.buildRoom(r * 3,r * 0,true);
		this.buildRoom(r * 0,r,true);
		this.buildRoom(r,r);
		this.buildRoom(r * 2,r);
		this.buildRoom(r * 3,r,true);
		this.buildRoom(r * 0,r * 2);
		this.buildRoom(r,r * 2);
		this.buildRoom(r * 2,r * 2);
		this.buildRoom(r * 3,r * 2);
		this.buildRoom(r * 0,r * 3,true);
		this.buildRoom(r,r * 3);
		this.buildRoom(r * 2,r * 3);
		this.buildRoom(r * 3,r * 3,true);
		this._tileMap = new flixel_tile_FlxTilemap();
		this._tileMap.loadMap(openfl_Assets.getText("assets/data/80.csv"),"images/img_tiles.png",20,20,8,8);
		this.add(this._tileMap);
	}
	,buildRoom: function(RX,RY,Spawners) {
		if(Spawners == null) Spawners = false;
		var rw = 20;
		var sx = 0;
		var sy = 0;
		if(Spawners) {
			sx = flixel_util_FlxRandom.intRanged(2,rw - 6);
			sy = flixel_util_FlxRandom.intRanged(2,rw - 6);
		}
		var numBlocks = flixel_util_FlxRandom.intRanged(3,6);
		var maxW = 10;
		var minW = 2;
		var maxH = 8;
		var minH = 1;
		var bx;
		var by;
		var bw;
		var bh;
		var check;
		if(!Spawners) numBlocks++;
		var _g = 0;
		while(_g < numBlocks) {
			var i = _g++;
			do {
				bw = flixel_util_FlxRandom.intRanged(minW,maxW);
				bh = flixel_util_FlxRandom.intRanged(minH,maxH);
				bx = flixel_util_FlxRandom.intRanged(-1,rw - bw);
				by = flixel_util_FlxRandom.intRanged(-1,rw - bh);
				if(Spawners) check = sx > bx + bw || sx + 3 < bx || sy > by + bh || sy + 3 < by; else check = true;
			} while(!check);
			this.fillTileMapRectWithRandomTiles(RX + bx * 8,RY + by * 8,bw * 8,bh * 8,1,6,this._map,20);
			if(bw >= 4 && bh >= 5) {
				this.fillTileMapRectWithRandomTiles(RX + bx * 8 + 8,RY + by * 8,bw * 8 - 16,8,16,17,this._map,20);
				this.fillTileMapRectWithRandomTiles(RX + bx * 8 + 8,RY + by * 8 + 8,bw * 8 - 16,bh * 8 - 24,32,47,this._map,20);
			}
		}
		if(Spawners) {
		}
	}
	,fillTileMapRectWithRandomTiles: function(X,Y,Width,Height,StartTile,EndTile,MapArray,MapWidth) {
		var numColsToPush = Math.floor(Width / 8);
		var numRowsToPush = Math.floor(Height / 8);
		var xStartIndex = Math.floor(X / 8);
		var yStartIndex = Math.floor(Y / 8);
		var startColToPush = Math.floor(X / 8);
		var startRowToPush = Math.floor(Y / 8);
		var randomTile;
		var currentTileIndex;
		var _g = 0;
		while(_g < numRowsToPush) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < numColsToPush) {
				var j = _g1++;
				randomTile = flixel_util_FlxRandom.intRanged(StartTile,EndTile);
				currentTileIndex = xStartIndex + j + (yStartIndex + i) * MapWidth;
				this._map[currentTileIndex] = randomTile;
			}
		}
		return this._map;
	}
	,__class__: PlayState
});
var Player = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._aim = 16;
	this._jumpPower = 200;
	this._shootTimer = new flixel_util_FlxTimer();
	this.flickering = false;
	this.isReadyToJump = true;
	this.moveSpeed = 200;
	flixel_FlxSprite.call(this,X,Y);
	this.loadGraphic("images/spaceman.png",true,8);
	this.moveSpeed = 200;
	this.drag.set_x(this.drag.set_y(1500));
	this.animation.add("idle",[0]);
	this.animation.add("run",[1,2,3,0],12);
	this.animation.add("jump",[4]);
	this.animation.add("idle_up",[5]);
	this.animation.add("run_up",[6,7,8,5],12);
	this.animation.add("jump_up",[9]);
	this.animation.add("jump_down",[10]);
};
$hxClasses["Player"] = Player;
Player.__name__ = ["Player"];
Player.__super__ = flixel_FlxSprite;
Player.prototype = $extend(flixel_FlxSprite.prototype,{
	moveSpeed: null
	,isReadyToJump: null
	,flickering: null
	,_shootTimer: null
	,_jumpPower: null
	,_aim: null
	,_gibs: null
	,_bullets: null
	,destroy: function() {
		flixel_FlxSprite.prototype.destroy.call(this);
		this._bullets = null;
		this._gibs = null;
	}
	,update: function() {
		this.acceleration.set_x(0);
		this.updateKeyboardInput();
		flixel_FlxSprite.prototype.update.call(this);
	}
	,updateKeyboardInput: function() {
		if(flixel_FlxG.keys.checkKeyStatus(["A","LEFT"],1)) this.moveLeft(); else if(flixel_FlxG.keys.checkKeyStatus(["D","RIGHT"],1)) this.moveRight();
		if(flixel_FlxG.keys.checkKeyStatus(["W","UP"],1)) this.moveUp(); else if(flixel_FlxG.keys.checkKeyStatus(["S","DOWN"],1)) this.moveDown();
	}
	,updateVirtualPadInput: function() {
	}
	,updateAnimations: function() {
		if(this.velocity.y != 0) {
			if(this._aim == 256) this.animation.play("jump_up"); else if(this._aim == 4096) this.animation.play("jump_down"); else this.animation.play("jump");
		} else if(this.velocity.x == 0) {
			if(this._aim == 256) this.animation.play("idle_up"); else this.animation.play("idle");
		} else if(this._aim == 256) this.animation.play("run_up"); else this.animation.play("run");
	}
	,hurt: function(Damage) {
		Damage = 0;
		if(this.flickering) return;
		flixel_FlxG.sound.play("Hurt");
		this.flicker(1.3);
		if(Reg.score > 1000) Reg.score -= 1000;
		if(this.velocity.x > 0) this.velocity.set_x(-this.maxVelocity.x); else this.velocity.set_x(this.maxVelocity.x);
		flixel_FlxSprite.prototype.hurt.call(this,Damage);
	}
	,flicker: function(Duration) {
		var _g = this;
		flixel_effects_FlxFlicker.flicker(this,Duration,0.02,true,true,function(_) {
			_g.flickering = false;
		},null);
		this;
		this.flickering = true;
	}
	,kill: function() {
		if(!this.alive) return;
		this.set_solid(false);
		flixel_FlxG.sound.play("Asplode");
		flixel_FlxG.sound.play("MenuHit2");
		flixel_FlxSprite.prototype.kill.call(this);
		this.set_exists(true);
		this.set_active(false);
		this.set_visible(false);
		this.set_moves(false);
		this.velocity.set();
		this.acceleration.set();
		flixel_FlxG.camera.shake(0.005,0.35);
		flixel_FlxG.camera.flash(-2561118,0.35);
		new flixel_util_FlxTimer().start(2,function(_) {
			flixel_FlxG.switchState(Type.createInstance(Type.getClass(flixel_FlxG.game._state),[]));
		});
	}
	,moveLeft: function() {
		this.set_facing(this._aim = 1);
		var _g = this.acceleration;
		_g.set_x(_g.x - this.drag.x);
	}
	,moveRight: function() {
		this.set_facing(this._aim = 16);
		var _g = this.acceleration;
		_g.set_x(_g.x + this.drag.x);
	}
	,moveUp: function() {
		this._aim = 256;
		var _g = this.acceleration;
		_g.set_y(_g.y + this.drag.y);
	}
	,moveDown: function() {
		this._aim = 4096;
		var _g = this.acceleration;
		_g.set_y(_g.y - this.drag.y);
	}
	,shoot: function() {
		if(this._shootTimer.active) return;
		this._shootTimer.start(Player.SHOOT_RATE);
		if(this.flickering) flixel_FlxG.sound.play("Jam"); else {
			this.getMidpoint(this._point);
			this._bullets.recycle(Bullet).shoot(this._point,this._aim);
			if(this._aim == 4096) {
				var _g = this.velocity;
				_g.set_y(_g.y - 36);
			}
		}
	}
	,__class__: Player
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Reg = function() { };
$hxClasses["Reg"] = Reg;
Reg.__name__ = ["Reg"];
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js_Boot.__instanceof(v,t);
};
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		return Reflect.callMethod(e,f,params);
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var Xml = function() { };
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.prototype = {
	nodeType: null
	,nodeName: null
	,children: null
	,attributeMap: null
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		return this.attributeMap.get(att);
	}
	,elements: function() {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		var ret;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.children;
		while(_g1 < _g2.length) {
			var child = _g2[_g1];
			++_g1;
			if(child.nodeType == Xml.Element) _g.push(child);
		}
		ret = _g;
		return HxOverrides.iter(ret);
	}
	,__class__: Xml
};
var flash_display_Stage = function() {
	this.intervalHandle = null;
	this.touchCount = 0;
	this.isTouchScreen = false;
	this.frameRate = null;
	flash_display_DisplayObjectContainer.call(this);
	var s = this.component.style;
	var o = window;
	var i;
	s.position = "absolute";
	s.overflow = "hidden";
	s.left = s.top = "0";
	s.width = s.height = "100%";
	this.mousePos = new flash_geom_Point();
	o.addEventListener("contextmenu",function(_) {
		_.preventDefault();
	});
	o.addEventListener("click",$bind(this,this.onMouse));
	o.addEventListener("mousedown",$bind(this,this.onMouse));
	o.addEventListener("mouseup",$bind(this,this.onMouse));
	o.addEventListener("mousemove",$bind(this,this.onMouse));
	o.addEventListener("mousewheel",$bind(this,this.onWheel));
	o.addEventListener("DOMMouseScroll",$bind(this,this.onWheel));
	o.addEventListener("touchmove",this.getOnTouch(0));
	o.addEventListener("touchstart",this.getOnTouch(1));
	o.addEventListener("touchend",this.getOnTouch(2));
	o.addEventListener("touchcancel",this.getOnTouch(2));
	this.mouseMtxDepth = [];
	this.mouseMtxStack = [];
	this.mouseMtxCache = [];
	this.mouseTriggered = [];
	this.mouseUntrigger = [];
	i = -1;
	while(++i < 3) {
		this.mouseTriggered[i] = false;
		this.mouseUntrigger[i] = this.getMouseUntrigger(i);
	}
};
$hxClasses["flash.display.Stage"] = flash_display_Stage;
flash_display_Stage.__name__ = ["flash","display","Stage"];
flash_display_Stage.__super__ = flash_display_DisplayObjectContainer;
flash_display_Stage.prototype = $extend(flash_display_DisplayObjectContainer.prototype,{
	align: null
	,quality: null
	,scaleMode: null
	,displayState: null
	,stageWidth: null
	,stageHeight: null
	,showDefaultContextMenu: null
	,frameRate: null
	,mousePos: null
	,isTouchScreen: null
	,touchCount: null
	,intervalHandle: null
	,mouseMtxDepth: null
	,mouseMtxStack: null
	,mouseMtxCache: null
	,mouseOver: null
	,mouseDown: null
	,mouseLastEvent: null
	,mouseTriggered: null
	,mouseUntrigger: null
	,mouseDownTriggered: null
	,mouseUpTriggered: null
	,_broadcastMouseEvent: function(f) {
		var o = this.mouseOver;
		var q;
		f.stageX = this.mousePos.x;
		f.stageY = this.mousePos.y;
		this.broadcastMouse(this.mouseMtxDepth,f,this.mouseMtxStack,this.mouseMtxCache);
		this.mouseOver = q = f.relatedObject;
		if(o != q) {
			if(o != null) o.dispatchEvent(this._alterMouseEvent(f,"mouseOut"));
			if(q != null) q.dispatchEvent(this._alterMouseEvent(f,"mouseOver"));
		}
	}
	,_broadcastTouchEvent: function(f,x,y) {
		f.stageX = x;
		f.stageY = y;
		this.broadcastMouse(this.mouseMtxDepth,f,this.mouseMtxStack,this.mouseMtxCache);
	}
	,getMouseUntrigger: function(i) {
		var _g = this;
		return function() {
			_g.mouseTriggered[i] = false;
		};
	}
	,_alterMouseEvent: function(e,type) {
		var r = new flash_events_MouseEvent(type,e.bubbles,e.cancelable,e.localX,e.localY,e.relatedObject,e.ctrlKey,e.altKey,e.shiftKey,e.buttonDown,e.delta);
		r.stageX = e.stageX;
		r.stageY = e.stageY;
		return r;
	}
	,_translateMouseEvent: function(e,type) {
		return new flash_events_MouseEvent(type,true,false,null,null,null,e.ctrlKey,e.altKey,e.shiftKey);
	}
	,_translateTouchEvent: function(e,o,type) {
		var r = new flash_events_TouchEvent(type,true,false,o.identifier,false,null,null,o.radiusX,o.radiusY,o.force,null,e.ctrlKey,e.altKey,e.shiftKey);
		r.__jsEvent = e;
		return r;
	}
	,mouseEventPrevent: function(o,x,y) {
		var mp = this.mousePos;
		var q = mp.x == x && mp.y == y;
		if(o >= 0 && q && this.mouseTriggered[o]) return true;
		if(!q) this.mousePos.setTo(x,y);
		if(o >= 0 && !this.mouseTriggered[o]) {
			this.mouseTriggered[o] = true;
			window.setTimeout(this.mouseUntrigger[o],0);
		}
		if(o == 1) {
			if(this.mouseDown) this._broadcastMouseEvent(this._alterMouseEvent(this.mouseLastEvent,"mouseUp")); else this.mouseDown = true;
		} else if(o == 2) {
			if(!this.mouseDown) this._broadcastMouseEvent(new flash_events_MouseEvent("mouseDown")); else this.mouseDown = false;
		}
		return false;
	}
	,getOnTouch: function(i) {
		var _g = this;
		return function(e) {
			_g.onTouch(e,i);
		};
	}
	,onTouch: function(e,m) {
		var lt = e.targetTouches;
		var nt = lt.length;
		var lc = e.changedTouches;
		var nc = lc.length;
		var qt;
		if(nt > 0) qt = lt[0]; else if(nc > 0) qt = lc[0]; else qt = null;
		var i;
		var t;
		var o;
		e.preventDefault();
		this.isTouchScreen = true;
		if(qt != null && (m == 0 || m == 1 && nt == nc || m == 2 && nt == 0 && nc > 0) && !this.mouseEventPrevent(m,qt.pageX,qt.pageY)) {
			this.mouseLastEvent = new flash_events_MouseEvent(m == 1?"mouseDown":m == 2?"mouseUp":"mouseMove");
			this.mouseLastEvent.__jsEvent = e;
			this._broadcastMouseEvent(this.mouseLastEvent);
			if(m == 2) {
				var ec = new flash_events_MouseEvent("mouseClick");
				ec.__jsEvent = e;
				this._broadcastMouseEvent(ec);
			}
		}
		if(nc > 0) {
			switch(m) {
			case 1:
				t = "touchBegin";
				break;
			case 2:
				t = "touchEnd";
				break;
			default:
				t = "touchMove";
			}
			i = -1;
			while(++i < nc) {
				o = lc[i];
				this._broadcastTouchEvent(this._translateTouchEvent(e,o,t),o.pageX,o.pageY);
			}
		}
	}
	,onWheel: function(e) {
		var f = this._translateMouseEvent(e,"mouseWheel");
		var d = e.wheelDelta;
		if(d != null) {
			if(Math.abs(d) > 40) d = Math.round(d / 40); else if(d < 0) d = -1; else if(d > 0) d = 1; else d = 0;
		} else d = -e.detail;
		f.delta = d;
		this.mousePos.setTo(e.pageX,e.pageY);
		this._broadcastMouseEvent(f);
	}
	,onMouse: function(e) {
		var t = null;
		var o = -1;
		var b;
		if(e.type == "mousemove") {
			t = "mouseMove";
			o = 0;
		} else {
			b = e.button;
			var _g = e.type;
			switch(_g) {
			case "click":
				if(b == 0) t = "mouseClick"; else if(b == 1) t = "rightClick"; else if(b == 2) t = "middleClick"; else t = t;
				break;
			case "mousedown":
				if(b == 0) t = "mouseDown"; else if(b == 1) t = "middleMouseDown"; else if(b == 2) t = "rightMouseDown"; else t = t;
				o = 1;
				break;
			case "mouseup":
				if(b == 0) t = "mouseUp"; else if(b == 1) t = "middleMouseUp"; else if(b == 2) t = "rightMouseUp"; else t = t;
				o = 2;
				break;
			default:
				return;
			}
		}
		if(!this.mouseEventPrevent(o,e.pageX,e.pageY)) {
			this.mouseLastEvent = new flash_events_MouseEvent(t);
			this.mouseLastEvent.__jsEvent = e;
			this._broadcastMouseEvent(this.mouseLastEvent);
		}
	}
	,__dragging: null
	,__dragObject: null
	,__dragBounds: null
	,__dragOffsetX: null
	,__dragOffsetY: null
	,__onDrag: function(e) {
		var parent = this.__dragObject.parent;
		if(parent == null) return;
		var mouse = parent.globalToLocal(this.mousePos);
		var x = this.__dragOffsetX + mouse.x;
		var y = this.__dragOffsetY + mouse.y;
		var r = this.__dragBounds;
		if(r != null) {
			if(x < r.x) x = r.x; else if(x > r.x + r.width) x = r.x + r.width;
			if(y < r.y) y = r.y; else if(y > r.y + r.height) y = r.y + r.height;
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__startDrag: function(o,c,r) {
		if(this.__dragObject == null) this.addEventListener("mouseMove",$bind(this,this.__onDrag));
		this.__dragObject = o;
		if(c) {
			this.__dragOffsetX = -this.__dragObject.get_width() / 2;
			this.__dragOffsetY = -this.__dragObject.get_height() / 2;
		} else {
			var mouse = this.__dragObject.parent.globalToLocal(this.mousePos);
			this.__dragOffsetX = this.__dragObject.x - mouse.x;
			this.__dragOffsetY = this.__dragObject.y - mouse.y;
		}
	}
	,__stopDrag: function(o) {
		if(this.__dragObject != null) {
			this.removeEventListener("mouseMove",$bind(this,this.__onDrag));
			this.__dragObject = null;
		}
	}
	,hitTestLocal: function(x,y,p,v) {
		return !v || this.visible;
	}
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o = this.component;
		this.component = window;
		flash_display_DisplayObjectContainer.prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
		this.component = o;
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		var o = this.component;
		this.component = window;
		flash_display_DisplayObjectContainer.prototype.removeEventListener.call(this,type,listener,useCapture);
		this.component = o;
	}
	,get_focus: function() {
		var o = document.activeElement;
		if(o != null && Std["is"](o = o.node,flash_display_InteractiveObject)) return o; else return null;
	}
	,set_focus: function(v) {
		if(v != null) v.giveFocus(); else this.component.blur();
		return v;
	}
	,get_stageWidth: function() {
		return window.innerWidth;
	}
	,get_stageHeight: function() {
		return window.innerHeight;
	}
	,get_stage: function() {
		return this;
	}
	,set_frameRate: function(v) {
		if(this.frameRate != v) {
			if(this.intervalHandle != null) {
				if(this.frameRate <= 0) window._cancelAnimationFrame(this.intervalHandle); else window.clearInterval(this.intervalHandle);
			}
			if((this.frameRate = v) <= 0) this.intervalHandle = window._requestAnimationFrame($bind(this,this.onTimer)); else this.intervalHandle = window.setInterval($bind(this,this.onTimer),Std["int"](Math.max(0,1000 / v)));
		}
		return v;
	}
	,onTimer: function() {
		var t = flash_Lib.getTimer();
		var f;
		var i = -1;
		while(++i < flash_Lib.schLength) {
			flash_Lib.schList[i]();
			flash_Lib.schList[i] = null;
		}
		flash_Lib.schLength = 0;
		this.broadcastEvent(new flash_events_Event("enterFrame"));
		f = this.frameRate;
		if(f <= 0) this.intervalHandle = window._requestAnimationFrame($bind(this,this.onTimer));
	}
	,__class__: flash_display_Stage
	,__properties__: $extend(flash_display_DisplayObjectContainer.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
var flash_geom_Point = function(u,v) {
	this.x = u != null?u:0;
	this.y = v != null?v:0;
};
$hxClasses["flash.geom.Point"] = flash_geom_Point;
flash_geom_Point.__name__ = ["flash","geom","Point"];
flash_geom_Point.interpolate = function(a,b,f) {
	return new flash_geom_Point(a.x + f * (b.x - a.x),a.y + f * (b.y - a.y));
};
flash_geom_Point.polar = function(l,d) {
	return new flash_geom_Point(Math.cos(d) * l,Math.sin(d) * l);
};
flash_geom_Point.prototype = {
	x: null
	,y: null
	,clone: function() {
		return new flash_geom_Point(this.x,this.y);
	}
	,equals: function(o) {
		return this.x == o.x && this.y == o.y;
	}
	,setTo: function(u,v) {
		this.x = u;
		this.y = v;
	}
	,length: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,toString: function() {
		return "point(" + this.x + ", " + this.y + ")";
	}
	,normalize: function(l) {
		if(this.y == 0) if(this.x < 0) this.x = -l; else this.x = l; else if(this.x == 0) if(this.y < 0) this.y = -l; else this.y = l; else {
			var m = l / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= m;
			this.y *= m;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,add: function(o) {
		return new flash_geom_Point(this.x + o.x,this.y + o.y);
	}
	,subtract: function(o) {
		return new flash_geom_Point(this.x - o.x,this.y - o.y);
	}
	,__class__: flash_geom_Point
	,__properties__: {get_length:"get_length"}
};
var flash_geom_Transform = function(displayObject) {
	if(displayObject == null) throw new js__$Boot_HaxeError("Cannot create Transform with no DisplayObject.");
	this._displayObject = displayObject;
	this._matrix = new flash_geom_Matrix();
	this._fullMatrix = new flash_geom_Matrix();
	this.set_colorTransform(new flash_geom_ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash_geom_Transform;
flash_geom_Transform.__name__ = ["flash","geom","Transform"];
flash_geom_Transform.prototype = {
	colorTransform: null
	,concatenatedMatrix: null
	,_displayObject: null
	,_fullMatrix: null
	,_matrix: null
	,nmeGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) (m = new flash_geom_Matrix(localMatrix.a,localMatrix.b,localMatrix.c,localMatrix.d,localMatrix.tx,localMatrix.ty)).concat(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,nmeSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,nmeSetMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,get_concatenatedMatrix: function() {
		return this.nmeGetFullMatrix(this._matrix);
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.syncMtx();
		return this._matrix;
	}
	,get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,__class__: flash_geom_Transform
	,__properties__: {get_pixelBounds:"get_pixelBounds",set_matrix:"set_matrix",get_matrix:"get_matrix",get_concatenatedMatrix:"get_concatenatedMatrix",set_colorTransform:"set_colorTransform"}
};
var flash_geom_Matrix = function(a,b,c,d,tx,ty) {
	if(a == null) this.a = 1; else this.a = a;
	if(b == null) this.b = 0; else this.b = b;
	if(c == null) this.c = 0; else this.c = c;
	if(d == null) this.d = 1; else this.d = d;
	if(tx == null) this.tx = 0; else this.tx = tx;
	if(ty == null) this.ty = 0; else this.ty = ty;
};
$hxClasses["flash.geom.Matrix"] = flash_geom_Matrix;
flash_geom_Matrix.__name__ = ["flash","geom","Matrix"];
flash_geom_Matrix.create = function() {
	var m = flash_geom_Matrix.pool;
	if(m.length > 0) return m.pop(); else return new flash_geom_Matrix();
};
flash_geom_Matrix.prototype = {
	a: null
	,b: null
	,c: null
	,d: null
	,tx: null
	,ty: null
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.tx = tx;
		this.c = c;
		this.d = d;
		this.ty = ty;
	}
	,clone: function() {
		return new flash_geom_Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,identity: function() {
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0;
	}
	,isIdentity: function() {
		return this.a == 1 && this.d == 1 && this.tx == 0 && this.ty == 0 && this.b == 0 && this.c == 0;
	}
	,copy: function(s) {
		this.a = s.a;
		this.b = s.b;
		this.c = s.c;
		this.d = s.d;
		this.tx = s.tx;
		this.ty = s.ty;
	}
	,invert: function() {
		var t;
		var n = this.a * this.d - this.b * this.c;
		if(n == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			n = 1 / n;
			t = this.d * n;
			this.d = this.a * n;
			this.a = t;
			this.b *= -n;
			this.c *= -n;
			t = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = t;
		}
	}
	,translate: function(x,y) {
		this.tx += x;
		this.ty += y;
	}
	,rotate: function(o) {
		var ox = Math.cos(o);
		var oy = Math.sin(o);
		var t;
		t = this.a * ox - this.b * oy;
		this.b = this.a * oy + this.b * ox;
		this.a = t;
		t = this.c * ox - this.d * oy;
		this.d = this.c * oy + this.d * ox;
		this.c = t;
		t = this.tx * ox - this.ty * oy;
		this.ty = this.tx * oy + this.ty * ox;
		this.tx = t;
	}
	,scale: function(x,y) {
		this.a *= x;
		this.b *= y;
		this.c *= x;
		this.d *= y;
		this.tx *= x;
		this.ty *= y;
	}
	,concat: function(o) {
		var t;
		t = this.a * o.a + this.b * o.c;
		this.b = this.a * o.b + this.b * o.d;
		this.a = t;
		t = this.c * o.a + this.d * o.c;
		this.d = this.c * o.b + this.d * o.d;
		this.c = t;
		t = this.tx * o.a + this.ty * o.c + o.tx;
		this.ty = this.tx * o.b + this.ty * o.d + o.ty;
		this.tx = t;
	}
	,transformPoint: function(o) {
		return new flash_geom_Point(o.x * this.a + o.y * this.c + this.tx,o.x * this.b + o.y * this.d + this.ty);
	}
	,createBox: function(sx,sy,r,x,y) {
		this.a = sx;
		this.d = sy;
		this.b = r != null?r:0;
		this.tx = x != null?x:0;
		this.ty = y != null?y:0;
	}
	,createGradientBox: function(w,h,r,x,y) {
		this.a = w / 1638.4;
		this.d = h / 1638.4;
		if(r != null && r != 0) {
			var rx = Math.cos(r);
			var ry = Math.sin(r);
			this.b = ry * this.d;
			this.c = -ry * this.a;
			this.a *= rx;
			this.d *= rx;
		} else this.b = this.c = 0;
		if(x != null) this.tx = x + w / 2; else this.tx = w / 2;
		if(y != null) this.ty = y + h / 2; else this.ty = h / 2;
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,to3dString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,free: function() {
		flash_geom_Matrix.pool.push(this);
	}
	,__class__: flash_geom_Matrix
};
var flash_geom_ColorTransform = function(r,g,b,a,ro,go,bo,ao) {
	this.redMultiplier = r != null?r:1;
	this.greenMultiplier = g != null?g:1;
	this.blueMultiplier = b != null?b:1;
	this.alphaMultiplier = a != null?a:1;
	this.redOffset = ro != null?ro:0;
	this.greenOffset = go != null?go:0;
	this.blueOffset = bo != null?bo:0;
	this.alphaOffset = ao != null?ao:0;
};
$hxClasses["flash.geom.ColorTransform"] = flash_geom_ColorTransform;
flash_geom_ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash_geom_ColorTransform.prototype = {
	alphaMultiplier: null
	,alphaOffset: null
	,blueMultiplier: null
	,blueOffset: null
	,greenMultiplier: null
	,greenOffset: null
	,redMultiplier: null
	,redOffset: null
	,concat: function(o) {
		this.redMultiplier += o.redMultiplier;
		this.greenMultiplier += o.greenMultiplier;
		this.blueMultiplier += o.blueMultiplier;
		this.alphaMultiplier += o.alphaMultiplier;
	}
	,isColorSetter: function() {
		return this.redMultiplier == 0 && this.greenMultiplier == 0 && this.blueMultiplier == 0 && (this.alphaMultiplier == 0 || this.alphaOffset == 0);
	}
	,isAlphaMultiplier: function() {
		return this.redMultiplier == 1 && this.greenMultiplier == 1 && this.blueMultiplier == 1 && this.redOffset == 0 && this.greenOffset == 0 && this.blueOffset == 0 && this.alphaOffset == 0;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: flash_geom_ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var flash_Lib = function() { };
$hxClasses["flash.Lib"] = flash_Lib;
flash_Lib.__name__ = ["flash","Lib"];
flash_Lib.__properties__ = {get_mobile:"get_mobile",get_stage:"get_stage",get_current:"get_current"}
flash_Lib.get_mobile = function() {
	if(flash_Lib._mobile == null) {
		var o = navigator.userAgent || navigator.vendor || wnd.opera;
		flash_Lib._mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4));
	}
	return flash_Lib._mobile;
};
flash_Lib.__init = function() {
	var o;
	flash_Lib.schList = [];
	flash_Lib.schLength = 0;
	var wnd = window;
	var n = "equestAnimationFrame";
	var lrq = flash_Lib.getTimer();
	wnd._requestAnimationFrame = wnd["r" + n] || wnd["webkitR" + n] || wnd["mozR" + n] || wnd["oR" + n] || wnd["msR" + n] || function(o1) {
		return wnd.setTimeout(o1,Std["int"](700 / flash_Lib.get_stage().frameRate));
	};
	n = "ancelAnimationFrame";
	wnd._cancelAnimationFrame = wnd["c" + n] || wnd["webkitC" + n] || wnd["mozC" + n] || wnd["oC" + n] || wnd["msC" + n] || function(o2) {
		wnd.clearTimeout(o2);
		return;
	};
};
flash_Lib.getTimer = function() {
	return Std["int"](new Date() - flash_Lib.qTimeStamp);
};
flash_Lib.getURL = function(url,target) {
	window.open(url.url,target);
};
flash_Lib.jsNode = function(o) {
	var r = document.createElement(o);
	var s = r.style;
	s.position = "absolute";
	switch(o) {
	case "canvas":
		s.setProperty("-webkit-touch-callout","none",null);
		flash_Lib.setCSSProperties(s,"user-select","none",47);
		break;
	case "input":case "textarea":
		s.outline = "none";
		break;
	}
	return r;
};
flash_Lib.jsHelper = function() {
	if(flash_Lib.qHelper == null) {
		var o = flash_Lib.jsNode("div");
		flash_Lib.get_stage().component.appendChild(o);
		o.style.visibility = "hidden";
		o.appendChild(flash_Lib.qHelper = flash_Lib.jsNode("div"));
	}
	return flash_Lib.qHelper;
};
flash_Lib.get_current = function() {
	if(flash_Lib.qCurrent == null) flash_Lib.get_stage().addChild(flash_Lib.qCurrent = new flash_display_MovieClip());
	return flash_Lib.qCurrent;
};
flash_Lib.get_stage = function() {
	if(flash_Lib.qStage == null) document.body.appendChild((flash_Lib.qStage = new flash_display_Stage()).component);
	return flash_Lib.qStage;
};
flash_Lib.schedule = function(m) {
	flash_Lib.schList[flash_Lib.schLength++] = m;
};
flash_Lib.rgba = function(color) {
	return "rgba(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + "," + ((color >> 24 & 255) / 255).toFixed(4) + ")";
};
flash_Lib.rgbf = function(color,alpha) {
	return "rgba(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + "," + alpha.toFixed(4) + ")";
};
flash_Lib.setCSSProperties = function(o,k,v,f) {
	if(!f) f = 31;
	if(f & 1) o.setProperty(k,v,null);
	if(f & 2) o.setProperty("-webkit-" + k,v,null);
	if(f & 4) o.setProperty("-moz-" + k,v,null);
	if(f & 8) o.setProperty("-ms-" + k,v,null);
	if(f & 16) o.setProperty("-o-" + k,v,null);
	if(f & 32) o.setProperty("-khtml-" + k,v,null);
};
var flash_display_Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	this.pixelSnapping = false;
	this.smoothing = false;
	flash_display_DisplayObject.call(this);
	this.set_bitmapData(bitmapData);
};
$hxClasses["flash.display.Bitmap"] = flash_display_Bitmap;
flash_display_Bitmap.__name__ = ["flash","display","Bitmap"];
flash_display_Bitmap.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_Bitmap.__super__ = flash_display_DisplayObject;
flash_display_Bitmap.prototype = $extend(flash_display_DisplayObject.prototype,{
	bitmapData: null
	,smoothing: null
	,pixelSnapping: null
	,set_bitmapData: function(v) {
		if(this.bitmapData != null) this.component.removeChild(this.bitmapData.component);
		if(v != null) this.component.appendChild(v.handle());
		return this.bitmapData = v;
	}
	,get_width: function() {
		if(this.__width != null) return this.__width; else if(this.bitmapData != null) return this.bitmapData.component.width; else return 0;
	}
	,get_height: function() {
		if(this.__height != null) return this.__height; else if(this.bitmapData != null) return this.bitmapData.component.height; else return 0;
	}
	,drawToSurface: function(cnv,ctx,matrix,ctr,blendMode,clipRect,smoothing) {
		this.bitmapData.drawToSurface(cnv,ctx,matrix,ctr,blendMode,clipRect,smoothing);
	}
	,hitTestLocal: function(x,y,p,v) {
		return (!v || this.visible) && this.bitmapData != null && x >= 0 && y >= 0 && x < this.bitmapData.component.width && y < this.bitmapData.component.height;
	}
	,__class__: flash_display_Bitmap
	,__properties__: $extend(flash_display_DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
var flash_display_BitmapData = function(w,h,t,c) {
	if(t == null) t = true;
	this.__sync = 1;
	this.__transparent = t;
	this.__revision = 0;
	this.__rect = new flash_geom_Rectangle(0,0,w,h);
	this.component = flash_Lib.jsNode("canvas");
	this.component.width = w;
	this.component.height = h;
	this.__context = this.component.getContext("2d");
	flash_display_BitmapData.setSmoothing(this.__context,true);
	this.__pixelData = this.__context.createImageData(1,1);
	if(c == null) c = -1;
	if(!t) c |= -16777216;
	if((c & -16777216) != 0) this.fillRect(this.__rect,c);
};
$hxClasses["flash.display.BitmapData"] = flash_display_BitmapData;
flash_display_BitmapData.__name__ = ["flash","display","BitmapData"];
flash_display_BitmapData.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_BitmapData.setSmoothing = function(o,v) {
	o.imageSmoothingEnabled = o.oImageSmoothingEnabled = o.msImageSmoothingEnabled = o.webkitImageSmoothingEnabled = o.mozImageSmoothingEnabled = v;
};
flash_display_BitmapData.makeColor = function(color) {
	return "rgba(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + "," + ((color >> 24 & 255) / 255).toFixed(4) + ")";
};
flash_display_BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash_display_BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
};
flash_display_BitmapData.__isPNG = function(d) {
	if(d.length < 8) return false;
	d.position = 0;
	return d.data.getUint8(d.position++) == 137 && d.data.getUint8(d.position++) == 80 && d.data.getUint8(d.position++) == 78 && d.data.getUint8(d.position++) == 71 && d.data.getUint8(d.position++) == 13 && d.data.getUint8(d.position++) == 10 && d.data.getUint8(d.position++) == 26 && d.data.getUint8(d.position++) == 10;
};
flash_display_BitmapData.__isJPG = function(d) {
	if(d.length < 2) return false;
	d.position = 0;
	return d.data.getUint8(d.position++) == 255 && d.data.getUint8(d.position++) == 216;
};
flash_display_BitmapData.prototype = {
	component: null
	,width: null
	,height: null
	,transparent: null
	,rect: null
	,get_rect: function() {
		return this.__rect.clone();
	}
	,__rect: null
	,__context: null
	,__imageData: null
	,__pixelData: null
	,__sync: null
	,__transparent: null
	,__revision: null
	,fillRect: function(area,color) {
		if(area == null || area.width <= 0 || area.height <= 0) return;
		if(area.equals(this.__rect) && this.__transparent && (color & -16777216) == 0) {
			this.component.width = this.component.width;
			return;
		}
		if(!this.__transparent) color |= -16777216; else if((color & -16777216) != -16777216) this.__context.clearRect(area.x,area.y,area.width,area.height);
		if((color & -16777216) != 0) {
			this.__context.fillStyle = flash_display_BitmapData.makeColor(color);
			this.__context.fillRect(area.x,area.y,area.width,area.height);
		}
		this.__sync |= 5;
	}
	,clone: function() {
		this.syncCanvas();
		var r = new flash_display_BitmapData(this.component.width,this.component.height,this.__transparent,0);
		r.__context.drawImage(this.component,0,0);
		r.__sync |= 5;
		return r;
	}
	,dispose: function() {
		this.component.width = this.component.height = 1;
		this.__imageData = null;
		this.__sync = 5;
	}
	,handle: function() {
		this.syncCanvas();
		if((this.__sync & 4) != 0) {
			this.__revision++;
			this.__sync &= -5;
		}
		return this.component;
	}
	,drawToSurface: function(cnv,ctx,matrix,ctr,blendMode,clipRect,smoothing) {
		ctx.save();
		if(smoothing != null && ctx.imageSmoothingEnabled != smoothing) flash_display_BitmapData.setSmoothing(ctx,smoothing);
		if(matrix != null) {
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		}
		ctx.drawImage(this.handle(),0,0);
		ctx.restore();
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		this.syncCanvas();
		if(alphaBitmapData != null) throw new js__$Boot_HaxeError("alphaBitmapData is not supported yet.");
		var bit = sourceBitmapData.handle();
		var bw;
		var bh;
		var tw = this.component.width;
		var th = this.component.height;
		if(bit == null || (bw = bit.width) <= 0 || (bh = bit.height) <= 0) return;
		var dx = ~(~destPoint.x);
		var dy = ~(~destPoint.y);
		var sx;
		var sy;
		var sw;
		var sh;
		if(sourceRect != null) {
			sx = sourceRect.x;
			sy = sourceRect.y;
			sw = sourceRect.width;
			sh = sourceRect.height;
			if(sx < 0) {
				sw += sx;
				sx = 0;
			}
			if(sy < 0) {
				sh += sy;
				sy = 0;
			}
			if(sx + sw > bw) sw = bw - sx;
			if(sy + sh > bh) sh = bh - sy;
		} else {
			sx = sy = 0;
			sw = bw;
			sh = bh;
		}
		if(dx < 0) {
			sw += dx;
			sx -= dx;
			dx = 0;
		}
		if(dy < 0) {
			sh += dy;
			sy -= dy;
			dy = 0;
		}
		if(dx + sw > tw) sw = tw - dx;
		if(dy + sh > th) sh = th - dy;
		if(sw <= 0 || sh <= 0) return;
		if(this.__transparent && !mergeAlpha) this.__context.clearRect(dx,dy,sw,sh);
		this.__context.drawImage(bit,sx,sy,sw,sh,dx,dy,sw,sh);
		this.__sync |= 5;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		this.syncCanvas();
		var a = 0;
		this.__context.save();
		if(colorTransform != null) {
			a = colorTransform.alphaMultiplier;
			colorTransform.alphaMultiplier = 1;
			this.__context.globalAlpha *= a;
		}
		if(clipRect != null) {
			this.__context.beginPath();
			this.__context.rect(clipRect.x,clipRect.y,clipRect.width,clipRect.height);
			this.__context.clip();
			this.__context.beginPath();
		}
		if(smoothing != null) flash_display_BitmapData.setSmoothing(this.__context,smoothing);
		source.drawToSurface(this.handle(),this.__context,matrix,colorTransform,blendMode,clipRect,null);
		this.__context.restore();
		if(colorTransform != null) colorTransform.alphaMultiplier = a;
		this.__sync |= 5;
	}
	,lock: function() {
		this.syncData();
	}
	,unlock: function() {
		this.syncCanvas();
	}
	,hitTestLocal: function(x,y) {
		if(x >= 0 && y >= 0 && x < this.component.width && y < this.component.height) try {
			return this.__context.getImageData(x,y,1,1).data[3] != 0;
		} catch( _ ) {
			haxe_CallStack.lastException = _;
			if (_ instanceof js__$Boot_HaxeError) _ = _.val;
			return true;
		}
		return false;
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return 0;
		if(!((this.__sync & 3) != 1)) {
			var d = this.__context.getImageData(x,y,1,1).data;
			return d[0] << 16 | d[1] << 8 | d[2];
		} else {
			var o = y * this.component.width + x << 2;
			return this.__imageData.data[o] << 16 | this.__imageData.data[o + 1] << 8 | this.__imageData.data[o + 2];
		}
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return 0;
		if(!((this.__sync & 3) != 1)) {
			var d = this.__context.getImageData(x,y,1,1).data;
			return (this.__transparent?d[3] << 24:-16777216) | d[0] << 16 | d[1] << 8 | d[2];
		} else {
			var o = y * this.component.width + x << 2;
			return (this.__transparent?this.__imageData.data[o + 3] << 24:-16777216) | this.__imageData.data[o] << 16 | this.__imageData.data[o + 1] << 8 | this.__imageData.data[o + 2];
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return;
		if(!((this.__sync & 3) != 1)) {
			this.__pixelData.data[0] = color >>> 16 & 255;
			this.__pixelData.data[1] = color >>> 8 & 255;
			this.__pixelData.data[2] = color & 255;
			this.__pixelData.data[3] = 255;
			this.__context.putImageData(this.__pixelData,x,y);
			this.__sync |= 5;
		} else {
			var o = y * this.component.width + x << 2;
			this.__imageData.data[o] = color >>> 16 & 255;
			this.__imageData.data[o + 1] = color >>> 8 & 255;
			this.__imageData.data[o + 2] = color & 255;
			this.__imageData.data[o + 3] = 255;
			this.__sync |= 6;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return;
		if(!((this.__sync & 3) != 1)) {
			this.__pixelData.data[0] = color >>> 16 & 255;
			this.__pixelData.data[1] = color >>> 8 & 255;
			this.__pixelData.data[2] = color & 255;
			this.__pixelData.data[3] = color >>> 24 & 255;
			this.__context.putImageData(this.__pixelData,x,y);
			this.__sync |= 5;
		} else {
			var o = y * this.component.width + x << 2;
			this.__imageData.data[o] = color >>> 16 & 255;
			this.__imageData.data[o + 1] = color >>> 8 & 255;
			this.__imageData.data[o + 2] = color & 255;
			this.__imageData.data[o + 3] = color >>> 24 & 255;
			this.__sync |= 6;
		}
	}
	,getPixels: function(q) {
		var d;
		var v;
		var r = new flash_utils_ByteArray();
		var u;
		var qx = q.x | 0;
		var qy = q.y | 0;
		var qw = q.width | 0;
		var qh = q.height | 0;
		var i = 0;
		var j;
		var l = qw * qh * 4;
		r.set_length(l);
		v = r.data;
		if(!((this.__sync & 3) != 1)) {
			d = this.__context.getImageData(qx,qy,qw,qh);
			u = d.data;
			while(i < l) r.writeUnsignedInt(u[i++] << 16 | u[i++] << 8 | u[i++] | u[i++] << 24);
		} else {
			u = this.__imageData.data;
			if(qx == 0 && qy == 0 && qw == this.component.width && qh == this.component.height) while(i < l) r.writeUnsignedInt(u[i++] << 16 | u[i++] << 8 | u[i++] | u[i++] << 24); else while(qh-- > 0) {
				i = (qx + qy++ * (j = qw)) * 4;
				while(j-- > 0) r.writeUnsignedInt(u[i++] << 16 | u[i++] << 8 | u[i++] | u[i++] << 24);
			}
		}
		return r;
	}
	,setPixels: function(q,r) {
		var qx = q.x | 0;
		var qy = q.y | 0;
		var qw = q.width | 0;
		var qh = q.height | 0;
		var i = 0;
		var j;
		var l = qw * qh * 4;
		var p;
		var w = this.component.width;
		var d;
		var u;
		if((this.__sync & 3) != 2) {
			d = this.__context.createImageData(qw,qh);
			u = d.data;
			while(i < l) {
				p = r.readUnsignedInt();
				u[i] = p >> 16 & 255;
				u[i + 1] = p >> 8 & 255;
				u[i + 2] = p & 255;
				u[i + 3] = p >>> 24 & 255;
				i += 4;
			}
			this.__context.putImageData(d,qx,qy);
		} else {
			u = this.__imageData.data;
			while(qh-- > 0) {
				i = (qx + qy++ * w) * 4;
				j = qw;
				while(j-- > 0) {
					p = r.readUnsignedInt();
					u[i] = p >> 16 & 255;
					u[i + 1] = p >> 8 & 255;
					u[i + 2] = p & 255;
					u[i + 3] = p >>> 24 & 255;
					i += 4;
				}
			}
		}
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		this.syncData();
		var data = this.__imageData.data;
		var minX = this.component.width;
		var minY = this.component.height;
		var maxX = 0;
		var maxY = 0;
		var len = data.length;
		var i;
		var px;
		var x;
		var y;
		i = 0;
		while(i < len) {
			px = (this.__transparent?data[i + 3] << 24:-16777216) | (data[i] & 255) << 16 | (data[i + 1] & 255) << 8 | data[i + 2] & 255;
			if(px == color == findColor) {
				x = Math.floor((i >> 2) % this.component.width);
				y = Math.floor((i >> 2) / this.component.width);
				if(x < minX) minX = x;
				if(x > maxX) maxX = x;
				if(y < minY) minY = y;
				if(y > maxY) maxY = y;
			}
			i += 4;
		}
		if(minX <= maxX && minY <= maxY) return new flash_geom_Rectangle(minX,minY,maxX - minX + 1,maxY - minY + 1);
		if(!findColor) return new flash_geom_Rectangle(0,0,this.component.width,this.component.height);
		return new flash_geom_Rectangle(0,0,0,0);
	}
	,floodFill: function(fx,fy,fc) {
		var wasCanvas = (this.__sync & 3) == 1;
		this.lock();
		var q = [fx | fy << 16];
		var c = 1;
		var d = this.__imageData.data;
		var zr;
		var zg;
		var zb;
		var za;
		var fr;
		var fg;
		var fb;
		var fa;
		var x;
		var y;
		var p;
		var o = [];
		var r;
		var w = this.component.width;
		var h = this.component.height;
		p = fy * this.component.width + fx << 4;
		zr = d[p];
		zg = d[p + 1];
		zb = d[p + 2];
		za = d[p + 3];
		fa = fc >>> 24;
		fr = fc >> 16 & 255;
		fg = fc >> 8 & 255;
		fb = fc & 255;
		y = -1;
		while(++y < h) {
			o.push(r = []);
			x = 0;
			while(x < w) {
				r.push(0);
				x += 32;
			}
		}
		while(c > 0) {
			p = q[--c];
			x = p & 65535;
			y = p >>> 16;
			if(x < 0 || y < 0 || x >= w || y >= h) continue;
			if((o[y][x >> 5] >> (x & 31) & 1) != 0) continue;
			o[y][x >> 5] |= 1 << (x & 31);
			p = y * this.component.width + x << 2;
			if(d[p] == zr && d[p + 1] == zg && d[p + 2] == zb && d[p + 3] == za) {
				d[p] = fr;
				d[p + 1] = fg;
				d[p + 2] = fb;
				d[p + 3] = fa;
				if((p = x + 1) < w && (o[y][p >> 5] >> (p & 31) & 1) == 0) q[c++] = y << 16 | p;
				if(x > 0 && (o[y][(p = x - 1) >> 5] >> (p & 31) & 1) == 0) q[c++] = y << 16 | p;
				if((p = y + 1) < h && (o[p][x >> 5] >> (x & 31) & 1) == 0) q[c++] = p << 16 | x;
				if(y > 0 && (o[p = y - 1][x >> 5] >> (x & 31) & 1) == 0) q[c++] = p << 16 | x;
			}
		}
		this.__sync |= 6;
		if(wasCanvas) this.unlock();
	}
	,colorTransform: function(q,o) {
		var x = ~(~q.x);
		var y = ~(~q.y);
		var w = ~(~q.width);
		var h = ~(~q.height);
		var tw = this.component.width;
		var th = this.component.height;
		var f = this.__context.globalCompositeOperation;
		var a = this.__context.globalAlpha;
		if(x < 0) {
			w += x;
			x = 0;
		}
		if(y < 0) {
			h += y;
			y = 0;
		}
		if(x + w > tw) w = tw - x;
		if(y + h > th) h = th - y;
		if(w <= 0 || h <= 0) return;
		if(o.isAlphaMultiplier()) {
			this.syncCanvas();
			this.__context.globalCompositeOperation = "copy";
			this.__context.globalAlpha *= o.alphaMultiplier;
			this.__context.drawImage(this.component,x,y,w,h,x,y,w,h);
			this.__sync |= 5;
		} else if(o.isColorSetter()) {
			var s = this.__context.fillStyle;
			if(o.alphaMultiplier != 0) {
				this.__context.globalCompositeOperation = "source-in";
				this.__context.fillStyle = "rgb(" + ~(~o.redOffset) + "," + ~(~o.greenOffset) + "," + ~(~o.blueOffset) + ")";
				this.__context.fillRect(x,y,w,h);
				this.__context.globalCompositeOperation = "copy";
				this.__context.globalAlpha = o.alphaMultiplier;
				this.__context.drawImage(this.component,x,y,w,h,x,y,w,h);
			} else {
				this.__context.globalCompositeOperation = "copy";
				this.__context.fillStyle = "rgba(" + ~(~o.redOffset) + "," + ~(~o.greenOffset) + "," + ~(~o.blueOffset) + "," + ~(~o.alphaOffset) + ")";
				this.__context.fillRect(x,y,w,h);
			}
			this.__context.fillStyle = s;
		} else {
			var wasCanvas = (this.__sync & 3) != 2;
			this.lock();
			var d = this.__imageData.data;
			var c = tw * th * 4;
			var i = c;
			var v;
			var rm = o.redMultiplier;
			var gm = o.greenMultiplier;
			var bm = o.blueMultiplier;
			var am = o.alphaMultiplier;
			var ro = o.redOffset;
			var go = o.greenOffset;
			var bo = o.blueOffset;
			var ao = o.alphaOffset;
			if(x == 0 && y == 0 && w == tw && h == th) while((i -= 4) >= 0) {
				if((v = d[i + 3]) > 0) if((v = v * am + ao) < 0) d[i + 3] = 0; else if(v > 255) d[i + 3] = 255; else d[i + 3] = ~(~v);
				if((v = d[i + 2] * bm + bo) < 0) d[i + 2] = 0; else if(v > 255) d[i + 2] = 255; else d[i + 2] = ~(~v);
				if((v = d[i + 1] * gm + go) < 0) d[i + 1] = 0; else if(v > 255) d[i + 1] = 255; else d[i + 1] = ~(~v);
				if((v = d[i] * rm + ro) < 0) d[i] = 0; else if(v > 255) d[i] = 255; else d[i] = ~(~v);
			} else {
				var px;
				var py = y - 1;
				var pb = y + h;
				var pr;
				while(++py < pb) {
					i = tw * py + x - 1 << 2;
					pr = i + w * 4;
					while((i += 4) < pr) {
						if((v = d[i + 3]) > 0) if((v = v * am + ao) < 0) d[i + 3] = 0; else if(v > 255) d[i + 3] = 255; else d[i + 3] = ~(~v);
						if((v = d[i + 2] * bm + bo) < 0) d[i + 2] = 0; else if(v > 255) d[i + 2] = 255; else d[i + 2] = ~(~v);
						if((v = d[i + 1] * gm + go) < 0) d[i + 1] = 0; else if(v > 255) d[i + 1] = 255; else d[i + 1] = ~(~v);
						if((v = d[i] * rm + ro) < 0) d[i] = 0; else if(v > 255) d[i] = 255; else d[i] = ~(~v);
					}
				}
			}
			this.__sync |= 6;
			if(wasCanvas) this.unlock();
		}
		this.__context.globalCompositeOperation = f;
		this.__context.globalAlpha = a;
	}
	,copyChannel: function(o,q,p,sourceChannel,destChannel) {
		var x = ~(~o.x);
		var px = ~(~p.x);
		var y = ~(~o.y);
		var py = ~(~p.y);
		var w = ~(~q.width);
		var h = ~(~q.height);
		var sw = o.component.width;
		var sh = o.component.height;
		var tw = this.component.width;
		var th = this.component.height;
		var i;
		var j;
		var u;
		var v;
		var c;
		var sc = sourceChannel;
		var dc = destChannel;
		if(px < 0) {
			w += px;
			px = 0;
		}
		if(py < 0) {
			h += py;
			py = 0;
		}
		if(x < 0) {
			w += x;
			x = 0;
		}
		if(y < 0) {
			h += y;
			y = 0;
		}
		if(x + w > sw) w = sw - x;
		if(y + h > sh) h = sh - y;
		if(px + w > tw) w = tw - px;
		if(py + h > th) h = th - py;
		if(w <= 0 || h <= 0) return;
		if(sc == 8 && dc == 8) {
			var f = this.__context.globalCompositeOperation;
			var s = this.__context.fillStyle;
			this.__context.globalCompositeOperation = "darker";
			i = 0;
			while(i++ < 8) this.__context.drawImage(this.component,px,py,w,h,px,py,w,h);
			this.__context.globalCompositeOperation = "destination-over";
			this.__context.fillStyle = "black";
			this.__context.fillRect(x,y,w,h);
			this.__context.globalCompositeOperation = "destination-atop";
			this.__context.drawImage(o.handle(),x,y,w,h,px,py,w,h);
			this.__context.globalCompositeOperation = f;
			this.__context.fillStyle = s;
		} else {
			var wasCanvas = (this.__sync & 3) != 2;
			var ds;
			var dd;
			this.lock();
			dd = this.__imageData.data;
			o.lock();
			ds = o.__imageData.data;
			if(sc == 8) sc = 3; else if(sc == 4) sc = 2; else if(sc == 2) sc = 1; else if(sc == 1) sc = 0; else sc = -1;
			if(dc == 8) dc = 3; else if(dc == 4) dc = 2; else if(dc == 2) dc = 1; else if(dc == 1) dc = 0; else dc = -1;
			if(sc < 0 || dc < 0) return;
			j = py + h;
			v = y + h;
			while(--v >= y) {
				--j;
				c = w;
				i = (px + tw * j) * 4 + sc;
				u = (x + sw * v) * 4 + dc;
				while(c-- > 0) {
					dd[u] = ds[i];
					i += 4;
					u += 4;
				}
			}
			this.__sync |= 6;
			if(wasCanvas) this.unlock();
		}
	}
	,noise: function(q,l,h,c,m) {
		if(m == null) m = false;
		if(c == null) c = 7;
		if(h == null) h = 255;
		if(l == null) l = 0;
		var wasCanvas = (this.__sync & 3) != 2;
		var i = 0;
		var n;
		var p;
		var d = h - l + 1;
		var z = q;
		var r = (c & 1) > 0;
		var g = (c & 2) > 0;
		var b = (c & 4) > 0;
		var a = (c & 8) > 0;
		this.lock();
		p = this.__imageData.data;
		n = p.length;
		while(i < n) {
			if(m) {
				p[i] = p[i + 1] = p[i + 2] = l + (z = z * 16807 % 2147483647) % d;
				i += 3;
			} else {
				if(r) p[i++] = l + (z = z * 16807 % 2147483647) % d; else p[i++] = 0;
				if(g) p[i++] = l + (z = z * 16807 % 2147483647) % d; else p[i++] = 0;
				if(b) p[i++] = l + (z = z * 16807 % 2147483647) % d; else p[i++] = 0;
			}
			if(a) p[i++] = l + (z = z * 16807 % 2147483647) % d; else p[i++] = 255;
		}
		this.__sync |= 6;
		if(wasCanvas) this.unlock();
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
	}
	,jeashOnLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.__rect = new flash_geom_Rectangle(0,0,width,height);
		if(data.inLoader != null) {
			var e1 = new flash_events_Event("complete");
			e1.set_target(data.inLoader);
			data.inLoader.dispatchEvent(e1);
		}
	}
	,nmeLoadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = window.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.component, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					f(a1,e);
				};
			})($bind(this,this.jeashOnLoad),data),false);
			image.addEventListener("error",function(e1) {
				if(!image.complete) _g.jeashOnLoad(data,e1);
			},false);
		}
		image.src = inFilename;
	}
	,syncCanvas: function() {
		if(!((this.__sync & 3) != 2)) {
			this.__context.putImageData(this.__imageData,0,0);
			this.__sync = this.__sync & -4;
		}
	}
	,syncData: function() {
		if(!((this.__sync & 3) != 1)) {
			this.__imageData = this.__context.getImageData(0,0,this.component.width,this.component.height);
			this.__sync = this.__sync & -4;
		}
	}
	,__loadFromBytes: function(c,a,h) {
		var _g = this;
		var t = null;
		var o = document.createElement("img");
		var n = this.component;
		var q;
		var f = null;
		var i;
		var l;
		var p;
		if(flash_display_BitmapData.__isPNG(c)) t = "png"; else if(flash_display_BitmapData.__isJPG(c)) t = "jpeg"; else throw new js__$Boot_HaxeError(new flash_errors_IOError("BitmapData can only load from ByteArrays with PNG/JPEG data."));
		f = function(_) {
			o.removeEventListener("load",f);
			_g.__rect.width = n.width = o.width;
			_g.__rect.height = n.height = o.height;
			q = _g.__context = n.getContext("2d");
			q.drawImage(o,0,0);
			if(a != null) {
				i = -1;
				l = a.length;
				p = q.getImageData(0,0,o.width,o.height);
				while(++i < l) p.data[(i << 2) + 3] = a.data.getUint8(a.position++);
				q.putImageData(p,0,0);
			}
			if(h != null) h(_g);
		};
		o.addEventListener("load",f);
		o.src = "data:image/" + t + ";base64," + c.toBase64();
	}
	,__class__: flash_display_BitmapData
	,__properties__: {get_rect:"get_rect"}
};
var flash_display_BitmapDataChannel = function() { };
$hxClasses["flash.display.BitmapDataChannel"] = flash_display_BitmapDataChannel;
flash_display_BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
var flash_display_IGraphics = function() { };
$hxClasses["flash.display.IGraphics"] = flash_display_IGraphics;
flash_display_IGraphics.__name__ = ["flash","display","IGraphics"];
flash_display_IGraphics.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_IGraphics.prototype = {
	component: null
	,context: null
	,invalidate: null
	,hitTestLocal: null
	,beginBitmapFill: null
	,beginFill: null
	,beginGradientFill: null
	,clear: null
	,curveTo: null
	,drawCircle: null
	,drawEllipse: null
	,drawRect: null
	,drawRoundRect: null
	,endFill: null
	,lineStyle: null
	,lineTo: null
	,moveTo: null
	,__class__: flash_display_IGraphics
};
var flash_display_Graphics = function() {
	this.rgPending = false;
	this.synced = true;
	this.component = flash_Lib.jsNode("canvas");
	this.context = this.component.getContext("2d",null);
	this.context.save();
	this.bounds = new flash_geom_Rectangle();
	this.resetBounds();
	this.irec = [];
	this.frec = [];
	this.arec = [];
	this.lineWidth = this.ilen = this.flen = this.alen = 0;
};
$hxClasses["flash.display.Graphics"] = flash_display_Graphics;
flash_display_Graphics.__name__ = ["flash","display","Graphics"];
flash_display_Graphics.__interfaces__ = [flash_display_IGraphics,flash_display_IBitmapDrawable];
flash_display_Graphics.prototype = {
	component: null
	,context: null
	,displayObject: null
	,bounds: null
	,lineWidth: null
	,irec: null
	,ilen: null
	,frec: null
	,flen: null
	,arec: null
	,alen: null
	,synced: null
	,rgPending: null
	,offsetX: null
	,offsetY: null
	,_drawMatrix: null
	,regenerate: function() {
		var o = this.component;
		var s = this.component.style;
		var q = this.context;
		var b = this.bounds;
		var bx = ~(~(b.x - 2));
		var by = ~(~(b.y - 2));
		var bw = Math.ceil(b.width + 4);
		var bh = Math.ceil(b.height + 4);
		this.synced = true;
		this.rgPending = false;
		if(b.width <= 0 || b.height <= 0) {
			o.width = o.height = 1;
			s.top = s.left = "0";
			return;
		}
		if(this.offsetX != bx || this.offsetY != by) {
			s.left = (this.offsetX = bx) + "px";
			s.top = (this.offsetY = by) + "px";
		}
		if(bw != o.width || bh != o.height) {
			o.width = bw;
			o.height = bh;
		} else q.clearRect(0,0,bw,bh);
		q.save();
		q.translate(-bx,-by);
		this.render(o,q);
		q.restore();
	}
	,regenerateTask: function() {
		if(this.rgPending) this.regenerate();
	}
	,requestRegeneration: function() {
		flash_Lib.schedule($bind(this,this.regenerateTask));
		this.rgPending = true;
	}
	,set_displayObject: function(v) {
		if(this.displayObject != v) {
			this.displayObject = v;
			if(!this.synced) this.requestRegeneration();
		}
		return v;
	}
	,resetBounds: function() {
		this.bounds.setVoid();
		this.invalidate();
	}
	,grab: function(x,y,r,b) {
		var i;
		if(x < (i = this.bounds.x)) {
			i = i - x;
			this.bounds.x -= i;
			this.bounds.width += i;
		}
		if(y < (i = this.bounds.y)) {
			i = i - y;
			this.bounds.y -= i;
			this.bounds.height += i;
		}
		if(r > (i = this.bounds.get_right())) this.bounds.width += r - i;
		if(b > (i = this.bounds.get_bottom())) this.bounds.height += b - i;
		this.invalidate();
	}
	,invalidate: function() {
		if(this.synced) {
			this.synced = false;
			if(!this.rgPending && this.displayObject != null && this.displayObject.get_stage() != null) this.requestRegeneration();
		}
	}
	,clear: function() {
		var i = 0;
		while(i < this.alen) this.arec[i++] = null;
		this.lineWidth = this.ilen = this.flen = this.alen = 0;
		this.resetBounds();
		this.invalidate();
	}
	,lineStyle: function(w,c,a,ph,sm,cs,js,ml) {
		this.irec[this.ilen++] = 1;
		var v;
		if(w > 0) v = this.lineWidth = w; else v = this.lineWidth = 0;
		this.frec[this.flen++] = v;
		if(w > 0) {
			var v1 = flash_Lib.rgbf(c != null?c:0,a != null?a:1);
			this.arec[this.alen++] = v1;
			if(cs == "none") this.irec[this.ilen++] = 2; else if(cs == "square") this.irec[this.ilen++] = 1; else this.irec[this.ilen++] = 0;
			if(js == "bevel") this.irec[this.ilen++] = 2; else if(js == "miter") this.irec[this.ilen++] = 1; else this.irec[this.ilen++] = 0;
		}
	}
	,beginFill: function(c,a) {
		this.irec[this.ilen++] = 2;
		var v = flash_Lib.rgbf(c != null?c:0,a != null?a:1);
		this.arec[this.alen++] = v;
	}
	,beginBitmapFill: function(bitmap,m,repeat,smooth) {
		this.irec[this.ilen++] = 3;
		this.arec[this.alen++] = bitmap;
		if(repeat != false) this.irec[this.ilen++] = 1; else this.irec[this.ilen++] = 0;
		var i;
		if(m != null) i = 1; else i = 0;
		this.irec[this.ilen++] = i;
		if(i) {
			var r = this.frec;
			var l = this.flen;
			r[l++] = m.a;
			r[l++] = m.b;
			r[l++] = m.c;
			r[l++] = m.d;
			r[l++] = m.tx;
			r[l++] = m.ty;
			this.flen = l;
		}
	}
	,beginGradientFill: function(type,colors,alphas,ratios,m,spreadMethod,interpolationMethod,fpr) {
		if(fpr == null) fpr = 0;
		var g;
		var i = -1;
		var n = colors.length;
		this.irec[this.ilen++] = 4;
		if(type == "LINEAR") g = this.context.createLinearGradient(-819.2 * m.a + m.tx,-819.2 * m.b + m.ty,819.2 * m.a + m.tx,819.2 * m.b + m.ty); else {
			fpr *= 819.2;
			g = this.context.createRadialGradient(fpr * m.a + m.tx,fpr * m.b + m.ty,0,819.2 * m.c + m.tx,fpr * m.b + m.ty,819.2 * m.d + m.ty);
		}
		while(++i < n) g.addColorStop(ratios[i] / 255,flash_Lib.rgbf(colors[i],alphas[i]));
		this.arec[this.alen++] = g;
	}
	,endFill: function() {
		this.irec[this.ilen++] = 9;
		this.invalidate();
	}
	,moveTo: function(x,y) {
		this.irec[this.ilen++] = 10;
		this.frec[this.flen++] = x;
		this.frec[this.flen++] = y;
		var r = this.lineWidth / 2;
		this.grab(x - r,y - r,x + r,y + r);
	}
	,lineTo: function(x,y) {
		this.irec[this.ilen++] = 11;
		this.frec[this.flen++] = x;
		this.frec[this.flen++] = y;
		var r = this.lineWidth / 2;
		this.grab(x - r,y - r,x + r,y + r);
	}
	,curveTo: function(u,v,x,y) {
		this.irec[this.ilen++] = 12;
		var r = this.frec;
		var l = this.flen;
		r[l++] = u;
		r[l++] = v;
		r[l++] = x;
		r[l++] = y;
		this.flen = l;
		var r1 = this.lineWidth / 2;
		this.grab(x - r1,y - r1,x + r1,y + r1);
	}
	,drawRect: function(x,y,w,h) {
		this.irec[this.ilen++] = 13;
		var r = this.frec;
		var l = this.flen;
		r[l++] = x;
		r[l++] = y;
		r[l++] = w;
		r[l++] = h;
		this.flen = l;
		var r1 = this.lineWidth / 2;
		this.grab(x - r1,y - r1,x + w + r1,y + h + r1);
	}
	,drawRoundRect: function(x,y,w,h,p,q) {
		this.irec[this.ilen++] = 15;
		var r = this.frec;
		var l = this.flen;
		r[l++] = x;
		r[l++] = y;
		r[l++] = w;
		r[l++] = h;
		r[l++] = p;
		r[l++] = q;
		this.flen = l;
		var r1 = this.lineWidth / 2;
		this.grab(x - r1,y - r1,x + w + r1,y + h + r1);
	}
	,drawCircle: function(x,y,q) {
		this.irec[this.ilen++] = 14;
		var r = this.frec;
		var l = this.flen;
		r[l++] = x;
		r[l++] = y;
		r[l++] = q;
		this.flen = l;
		var r1 = q;
		r1 += this.lineWidth / 2;
		this.grab(x - r1,y - r1,x + r1,y + r1);
	}
	,drawEllipse: function(x,y,w,h) {
		this.irec[this.ilen++] = 17;
		var r = this.frec;
		var l = this.flen;
		r[l++] = x;
		r[l++] = y;
		r[l++] = w;
		r[l++] = h;
		this.flen = l;
		this.grab(x,y,x + w,y + h);
	}
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		ctx.save();
		if(mtx != null) ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty);
		this.render(cnv,ctx);
		ctx.restore();
	}
	,hitTestLocal: function(x,y,p) {
		if(this.bounds.contains(x,y)) {
			if(p) {
				if(!this.synced) this.regenerate();
				try {
					return this.context.getImageData(x - this.offsetX,y - this.offsetY,1,1).data[3] != 0;
				} catch( _ ) {
					haxe_CallStack.lastException = _;
					if (_ instanceof js__$Boot_HaxeError) _ = _.val;
				}
			}
			return true;
		}
		return false;
	}
	,_closePath: function(cnv,ctx,f,m,texture) {
		if(f & 1) {
			ctx.closePath();
			if(f & 4) {
				ctx.save();
				ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
				ctx.fillStyle = ctx.createPattern(texture,f & 8?"repeat":"no-repeat");
				ctx.fill();
				ctx.restore();
			} else ctx.fill();
		}
		if(f & 2) ctx.stroke();
		ctx.beginPath();
		return f;
	}
	,render: function(cnv,ctx) {
		var f = 0;
		var p = -1;
		var m = this._drawMatrix;
		var v;
		var i;
		var d;
		var n = 0;
		var tex = null;
		var ir = this.irec;
		var ip = -1;
		var il = ir.length - 1;
		var ar = this.arec;
		var ap = -1;
		var nr = this.frec;
		var np = -1;
		if(m == null) this._drawMatrix = m = new flash_geom_Matrix();
		ctx.save();
		while(ip < il) {
			var _g = i = ir[++ip];
			switch(_g) {
			case 1:
				if(n > 0) f = this._closePath(cnv,ctx,f,m,tex);
				ctx.lineWidth = d = nr[++np];
				if(d > 0) {
					f |= 2;
					ctx.strokeStyle = ar[++ap];
					if((i = ir[++ip]) == 2) ctx.lineCap = "butt"; else if(i == 1) ctx.lineCap = "square"; else ctx.lineCap = "round";
					if((i = ir[++ip]) == 2) ctx.lineJoin = "bevel"; else if(i == 1) ctx.lineJoin = "miter"; else ctx.lineJoin = "round";
				} else {
					f &= -3;
					ctx.strokeStyle = null;
				}
				break;
			case 2:case 3:case 4:
				if(n > 0) f = this._closePath(cnv,ctx,f,m,tex);
				f |= 1;
				if(i == 3) {
					tex = ar[++ap].handle();
					i = ir[++ip];
					if(ir[++ip] != 0) {
						if(i != 0) f |= 8; else f &= -9;
						m.a = nr[++np];
						m.b = nr[++np];
						m.c = nr[++np];
						m.d = nr[++np];
						m.tx = nr[++np];
						m.ty = nr[++np];
						f |= 4;
					} else {
						ctx.fillStyle = ctx.createPattern(tex,i != 0?"repeat":"no-repeat");
						f &= -5;
					}
				} else {
					ctx.fillStyle = ar[++ap];
					f &= -5;
				}
				n = 0;
				break;
			case 9:
				if(n > 0) {
					f = this._closePath(cnv,ctx,f,m,tex);
					n = 0;
				}
				f &= -2;
				break;
			case 10:
				ctx.moveTo(nr[++np],nr[++np]);
				n++;
				break;
			case 11:
				ctx.lineTo(nr[++np],nr[++np]);
				n++;
				break;
			case 12:
				ctx.quadraticCurveTo(nr[++np],nr[++np],nr[++np],nr[++np]);
				n++;
				break;
			case 13:
				ctx.rect(nr[++np],nr[++np],nr[++np],nr[++np]);
				n++;
				break;
			case 14:
				var x = nr[++np];
				var y = nr[++np];
				var r = nr[++np];
				if(r < 0) r = -r;
				ctx.moveTo(x + r,y);
				if(r != 0) ctx.arc(x,y,r,0,Math.PI * 2,true);
				n++;
				break;
			case 17:
				var x1 = nr[++np];
				var y1 = nr[++np];
				var w = nr[++np];
				var h = nr[++np];
				var x11 = x1 + w / 2;
				var y11 = y1 + h / 2;
				var x2 = x1 + w;
				var y2 = y1 + h;
				var m1 = 0.275892;
				var xm = w * m1;
				var ym = h * m1;
				ctx.moveTo(x11,y1);
				ctx.bezierCurveTo(x11 + xm,y1,x2,y11 - ym,x2,y11);
				ctx.bezierCurveTo(x2,y11 + ym,x11 + xm,y2,x11,y2);
				ctx.bezierCurveTo(x11 - xm,y2,x1,y11 + ym,x1,y11);
				ctx.bezierCurveTo(x1,y11 - ym,x11 - xm,y1,x11,y1);
				n++;
				break;
			case 15:
				var x3 = nr[++np];
				var y3 = nr[++np];
				var w1 = nr[++np];
				var h1 = nr[++np];
				var u = nr[++np];
				var q = nr[++np];
				if(q == null) {
					ctx.moveTo(x3 + u,y3 + h1);
					ctx.arcTo(x3 + w1 - u,y3 + h1 - u,x3 + w1,y3 + h1 - u,u);
					ctx.arcTo(x3 + w1,y3 + u,x3 + w1 - u,y3,u);
					ctx.arcTo(x3 + u,y3,x3,y3 + u,u);
					ctx.arcTo(x3 + u,y3 + h1 - u,x3 + u,y3 + h1,u);
				} else {
					ctx.moveTo(x3 + u,y3 + h1);
					ctx.lineTo(x3 + w1 - u,y3 + h1);
					ctx.quadraticCurveTo(x3 + w1,y3 + h1,x3 + w1,y3 + h1 - q);
					ctx.lineTo(x3 + w1,y3 + q);
					ctx.quadraticCurveTo(x3 + w1,y3,x3 + w1 - u,y3);
					ctx.lineTo(x3 + u,y3);
					ctx.quadraticCurveTo(x3,y3,x3,y3 + q);
					ctx.lineTo(x3,y3 + h1 - q);
					ctx.quadraticCurveTo(x3,y3 + h1,x3 + u,y3 + h1);
				}
				n++;
				break;
			case 16:
				var tex1 = ar[++ap];
				var d1 = tex1.handle();
				var fx = ir[++ip];
				var fs = (fx & 1) != 0;
				var fr = (fx & 2) != 0;
				var fc = (fx & 4) != 0;
				var fa = (fx & 8) != 0;
				var fm = (fx & 16) != 0;
				var c = ir[++ip];
				var tx;
				var ty;
				var ox;
				var oy;
				var rx;
				var ry;
				var rw;
				var rh;
				ctx.save();
				if((fx & 65536) != 0) ctx.globalCompositeOperation = "lighter"; else ctx.globalCompositeOperation = "source-over";
				while(--c >= 0) {
					tx = nr[++np];
					ty = nr[++np];
					ox = nr[++np];
					oy = nr[++np];
					rx = nr[++np];
					ry = nr[++np];
					rw = nr[++np];
					rh = nr[++np];
					ctx.save();
					if(fm) ctx.transform(nr[++np],nr[++np],nr[++np],nr[++np],tx,ty); else {
						ctx.translate(tx,ty);
						if(fs) ctx.scale(v = nr[++np],v);
						if(fr) ctx.rotate(nr[++np]);
					}
					if(fc) p += 3;
					if(fa) ctx.globalAlpha = nr[++np];
					ctx.drawImage(d1,rx,ry,rw,rh,-ox,-oy,rw,rh);
					ctx.restore();
				}
				ctx.restore();
				break;
			default:
				throw new js__$Boot_HaxeError(4000 + i);
			}
		}
		if(n > 0) f = this._closePath(cnv,ctx,f,m,tex);
		ctx.restore();
	}
	,__class__: flash_display_Graphics
	,__properties__: {set_displayObject:"set_displayObject"}
};
var flash_display_ILoader = function() { };
$hxClasses["flash.display.ILoader"] = flash_display_ILoader;
flash_display_ILoader.__name__ = ["flash","display","ILoader"];
flash_display_ILoader.prototype = {
	content: null
	,contentLoaderInfo: null
	,load: null
	,loadBytes: null
	,__class__: flash_display_ILoader
};
var flash_display__$JointStyle_JointStyle_$Impl_$ = {};
$hxClasses["flash.display._JointStyle.JointStyle_Impl_"] = flash_display__$JointStyle_JointStyle_$Impl_$;
flash_display__$JointStyle_JointStyle_$Impl_$.__name__ = ["flash","display","_JointStyle","JointStyle_Impl_"];
flash_display__$JointStyle_JointStyle_$Impl_$._new = function(s) {
	return s;
};
flash_display__$JointStyle_JointStyle_$Impl_$.toString = function(this1) {
	return this1;
};
flash_display__$JointStyle_JointStyle_$Impl_$.fromString = function(s) {
	return s;
};
var flash_display_LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : ["flash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
flash_display_LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash_display_LineScaleMode.HORIZONTAL.toString = $estr;
flash_display_LineScaleMode.HORIZONTAL.__enum__ = flash_display_LineScaleMode;
flash_display_LineScaleMode.NONE = ["NONE",1];
flash_display_LineScaleMode.NONE.toString = $estr;
flash_display_LineScaleMode.NONE.__enum__ = flash_display_LineScaleMode;
flash_display_LineScaleMode.NORMAL = ["NORMAL",2];
flash_display_LineScaleMode.NORMAL.toString = $estr;
flash_display_LineScaleMode.NORMAL.__enum__ = flash_display_LineScaleMode;
flash_display_LineScaleMode.VERTICAL = ["VERTICAL",3];
flash_display_LineScaleMode.VERTICAL.toString = $estr;
flash_display_LineScaleMode.VERTICAL.__enum__ = flash_display_LineScaleMode;
var flash_display_Loader = function() {
	flash_display_Sprite.call(this);
	this.contentLoaderInfo = flash_display_LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash_display_Loader;
flash_display_Loader.__name__ = ["flash","display","Loader"];
flash_display_Loader.__interfaces__ = [flash_display_ILoader];
flash_display_Loader.__super__ = flash_display_Sprite;
flash_display_Loader.prototype = $extend(flash_display_Sprite.prototype,{
	content: null
	,contentLoaderInfo: null
	,mImage: null
	,mShape: null
	,load: function(request,context) {
		var extension = "";
		var i;
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var url = request.url;
		var p = url.lastIndexOf(".");
		if(p < 0) throw new js__$Boot_HaxeError("Extension must be specified, got \"" + url + "\"");
		var ct;
		var bt = true;
		var ext = url.substring(p + 1);
		switch(ext) {
		case "swf":
			ct = "application/x-shockwave-flash";
			break;
		case "png":
			ct = "image/png";
			break;
		case "gif":
			ct = "image/gif";
			break;
		case "jpg":case "jpeg":
			bt = false;
			ct = "image/jpeg";
			break;
		default:
			throw new js__$Boot_HaxeError("Unrecognized extension \"" + ext + "\" in \"" + url + "\"");
		}
		this.contentLoaderInfo.url = url;
		this.contentLoaderInfo.contentType = ct;
		this.mImage = new flash_display_BitmapData(0,0,bt);
		try {
			this.contentLoaderInfo.addEventListener("complete",$bind(this,this.handleLoad),false);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash_display_Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 62, className : "flash.display.Loader", methodName : "load"});
			var evt = new flash_events_IOErrorEvent("ioError");
			evt.set_currentTarget(this);
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash_display_Shape();
			this.addChild(this.mShape);
		}
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener("complete",$bind(this,this.handleLoad),false);
			flash_display_BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash_display_Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash_events_Event("complete");
				evt.set_currentTarget(_g);
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 98, className : "flash.display.Loader", methodName : "loadBytes"});
			var evt1 = new flash_events_IOErrorEvent("ioError");
			evt1.set_currentTarget(this);
			this.contentLoaderInfo.dispatchEvent(evt1);
		}
	}
	,handleLoad: function(e) {
		e.set_currentTarget(this);
		this.contentLoaderInfo.removeEventListener("complete",$bind(this,this.handleLoad));
	}
	,__class__: flash_display_Loader
});
var flash_display_LoaderInfo = function() {
	flash_events_EventDispatcher.call(this);
	this.bytesLoaded = this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash_display_LoaderInfo;
flash_display_LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash_display_LoaderInfo.create = function(o) {
	var r = new flash_display_LoaderInfo();
	if(o != null) r.loader = o; else r.url = "";
	return r;
};
flash_display_LoaderInfo.__super__ = flash_events_EventDispatcher;
flash_display_LoaderInfo.prototype = $extend(flash_events_EventDispatcher.prototype,{
	bytes: null
	,bytesLoaded: null
	,bytesTotal: null
	,childAllowsParent: null
	,content: null
	,contentType: null
	,frameRate: null
	,height: null
	,loader: null
	,loaderURL: null
	,parameters: null
	,parentAllowsChild: null
	,sameDomain: null
	,sharedEvents: null
	,url: null
	,width: null
	,__class__: flash_display_LoaderInfo
});
var flash_display_MovieClip = function() {
	flash_display_Sprite.call(this);
	this.enabled = true;
	this.qIndex = this.qTotal = 0;
	this.loaderInfo = flash_display_LoaderInfo.create();
};
$hxClasses["flash.display.MovieClip"] = flash_display_MovieClip;
flash_display_MovieClip.__name__ = ["flash","display","MovieClip"];
flash_display_MovieClip.__super__ = flash_display_Sprite;
flash_display_MovieClip.prototype = $extend(flash_display_Sprite.prototype,{
	enabled: null
	,currentFrame: null
	,framesLoaded: null
	,totalFrames: null
	,qIndex: null
	,qTotal: null
	,gotoAndPlay: function(v,o) {
	}
	,gotoAndStop: function(v,o) {
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,get_currentFrame: function() {
		return this.qIndex;
	}
	,get_framesLoaded: function() {
		return this.qTotal;
	}
	,get_totalFrames: function() {
		return this.qTotal;
	}
	,__class__: flash_display_MovieClip
	,__properties__: $extend(flash_display_Sprite.prototype.__properties__,{get_totalFrames:"get_totalFrames",get_framesLoaded:"get_framesLoaded",get_currentFrame:"get_currentFrame"})
});
var flash_display_Shape = function() {
	(this.graphics = new flash_display_Graphics()).set_displayObject(this);
	this.component = this.graphics.component;
	flash_display_DisplayObject.call(this);
};
$hxClasses["flash.display.Shape"] = flash_display_Shape;
flash_display_Shape.__name__ = ["flash","display","Shape"];
flash_display_Shape.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_Shape.__super__ = flash_display_DisplayObject;
flash_display_Shape.prototype = $extend(flash_display_DisplayObject.prototype,{
	graphics: null
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		this.graphics.drawToSurface(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing);
	}
	,set_stage: function(v) {
		var z = this.get_stage() == null && v != null;
		var r = flash_display_DisplayObject.prototype.set_stage.call(this,v);
		if(z) this.graphics.invalidate();
		return r;
	}
	,hitTestLocal: function(x,y,p,v) {
		return (!v || this.visible) && this.graphics.hitTestLocal(x,y,p);
	}
	,__class__: flash_display_Shape
});
var flash_errors_Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash_errors_Error;
flash_errors_Error.__name__ = ["flash","errors","Error"];
flash_errors_Error.prototype = {
	errorID: null
	,message: null
	,name: null
	,getStackTrace: function() {
		return haxe_CallStack.toString(haxe_CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: flash_errors_Error
};
var flash_errors_ArgumentError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash_errors_Error.call(this,inMessage);
};
$hxClasses["flash.errors.ArgumentError"] = flash_errors_ArgumentError;
flash_errors_ArgumentError.__name__ = ["flash","errors","ArgumentError"];
flash_errors_ArgumentError.__super__ = flash_errors_Error;
flash_errors_ArgumentError.prototype = $extend(flash_errors_Error.prototype,{
	__class__: flash_errors_ArgumentError
});
var flash_errors_IOError = function(message) {
	if(message == null) message = "";
	flash_errors_Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash_errors_IOError;
flash_errors_IOError.__name__ = ["flash","errors","IOError"];
flash_errors_IOError.__super__ = flash_errors_Error;
flash_errors_IOError.prototype = $extend(flash_errors_Error.prototype,{
	__class__: flash_errors_IOError
});
var flash_events_Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
};
$hxClasses["flash.events.Event"] = flash_events_Event;
flash_events_Event.__name__ = ["flash","events","Event"];
flash_events_Event.prototype = {
	_target: null
	,_current: null
	,__jsEvent: null
	,get_target: function() {
		return this._target || this.target;
	}
	,set_target: function(v) {
		return this._target = v;
	}
	,get_currentTarget: function() {
		return this._current || this.currentTarget;
	}
	,set_currentTarget: function(v) {
		return this._current = v;
	}
	,type: null
	,timeStamp: null
	,bubbles: null
	,cancelBubble: null
	,cancelable: null
	,defaultPrevented: null
	,preventDefault: function() {
		if(this.__jsEvent != null) this.__jsEvent.preventDefault();
		this.defaultPrevented = true;
	}
	,isDefaultPrevented: function() {
		return this.defaultPrevented;
	}
	,clone: function() {
		return new flash_events_Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash_events_Event
	,__properties__: {set_currentTarget:"set_currentTarget",get_currentTarget:"get_currentTarget",set_target:"set_target",get_target:"get_target"}
};
var flash_events_TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash_events_TextEvent;
flash_events_TextEvent.__name__ = ["flash","events","TextEvent"];
flash_events_TextEvent.__super__ = flash_events_Event;
flash_events_TextEvent.prototype = $extend(flash_events_Event.prototype,{
	text: null
	,__class__: flash_events_TextEvent
});
var flash_events_ErrorEvent = function(type,bubbles,cancelable,text) {
	flash_events_TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.ErrorEvent"] = flash_events_ErrorEvent;
flash_events_ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash_events_ErrorEvent.__super__ = flash_events_TextEvent;
flash_events_ErrorEvent.prototype = $extend(flash_events_TextEvent.prototype,{
	__class__: flash_events_ErrorEvent
});
var flash_events_FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == true;
	this.set_target(inObject);
};
$hxClasses["flash.events.FocusEvent"] = flash_events_FocusEvent;
flash_events_FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash_events_FocusEvent.__super__ = flash_events_Event;
flash_events_FocusEvent.prototype = $extend(flash_events_Event.prototype,{
	keyCode: null
	,relatedObject: null
	,shiftKey: null
	,__class__: flash_events_FocusEvent
});
var flash_events_HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash_events_Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash_events_HTTPStatusEvent;
flash_events_HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash_events_HTTPStatusEvent.__super__ = flash_events_Event;
flash_events_HTTPStatusEvent.prototype = $extend(flash_events_Event.prototype,{
	responseHeaders: null
	,responseURL: null
	,status: null
	,__class__: flash_events_HTTPStatusEvent
});
var flash_events_IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash_events_IOErrorEvent;
flash_events_IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash_events_IOErrorEvent.__super__ = flash_events_Event;
flash_events_IOErrorEvent.prototype = $extend(flash_events_Event.prototype,{
	text: null
	,__class__: flash_events_IOErrorEvent
});
var flash_events_KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue) {
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCodeValue;
	this.charCode = charCodeValue;
};
$hxClasses["flash.events.KeyboardEvent"] = flash_events_KeyboardEvent;
flash_events_KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash_events_KeyboardEvent.__super__ = flash_events_Event;
flash_events_KeyboardEvent.prototype = $extend(flash_events_Event.prototype,{
	altKey: null
	,ctrlKey: null
	,shiftKey: null
	,keyCode: null
	,charCode: null
	,__class__: flash_events_KeyboardEvent
});
var flash_events_UIEvent = function(type,bubbles,cancelable) {
	flash_events_Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.UIEvent"] = flash_events_UIEvent;
flash_events_UIEvent.__name__ = ["flash","events","UIEvent"];
flash_events_UIEvent.__super__ = flash_events_Event;
flash_events_UIEvent.prototype = $extend(flash_events_Event.prototype,{
	altKey: null
	,ctrlKey: null
	,shiftKey: null
	,localX: null
	,localY: null
	,stageX: null
	,stageY: null
	,relatedObject: null
	,__class__: flash_events_UIEvent
});
var flash_events_MouseEvent = function(type,bubbles,cancelable,lx,ly,obj,ctrlKey,altKey,shiftKey,bt,delta) {
	flash_events_UIEvent.call(this,type,bubbles != null?bubbles:true,cancelable != null?cancelable:false);
	this.ctrlKey = ctrlKey != null?ctrlKey:false;
	this.altKey = altKey != null?altKey:false;
	this.shiftKey = shiftKey != null?shiftKey:false;
	this.relatedObject = obj;
	this.buttonDown = bt != null?bt:false;
	this.delta = delta != null?delta:0;
};
$hxClasses["flash.events.MouseEvent"] = flash_events_MouseEvent;
flash_events_MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash_events_MouseEvent.__super__ = flash_events_UIEvent;
flash_events_MouseEvent.prototype = $extend(flash_events_UIEvent.prototype,{
	buttonDown: null
	,delta: null
	,updateAfterEvent: function() {
	}
	,__class__: flash_events_MouseEvent
});
var flash_events_ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash_events_ProgressEvent;
flash_events_ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash_events_ProgressEvent.__super__ = flash_events_Event;
flash_events_ProgressEvent.prototype = $extend(flash_events_Event.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,__class__: flash_events_ProgressEvent
});
var flash_events_SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash_events_SecurityErrorEvent;
flash_events_SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash_events_SecurityErrorEvent.__super__ = flash_events_ErrorEvent;
flash_events_SecurityErrorEvent.prototype = $extend(flash_events_ErrorEvent.prototype,{
	__class__: flash_events_SecurityErrorEvent
});
var flash_events_TouchEvent = function(type,bubbles,cancelable,id,primary,lx,ly,sx,sy,ps,obj,ctrl,alt,shift) {
	flash_events_UIEvent.call(this,type,bubbles,cancelable);
	this.altKey = alt;
	this.shiftKey = shift;
	this.ctrlKey = ctrl;
	this.touchPointID = id;
	this.sizeX = sx;
	this.sizeY = sy;
	this.pressure = ps;
};
$hxClasses["flash.events.TouchEvent"] = flash_events_TouchEvent;
flash_events_TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash_events_TouchEvent.__super__ = flash_events_UIEvent;
flash_events_TouchEvent.prototype = $extend(flash_events_UIEvent.prototype,{
	sizeX: null
	,sizeY: null
	,pressure: null
	,touchPointID: null
	,__class__: flash_events_TouchEvent
});
var flash_filters_BitmapFilter = function() {
};
$hxClasses["flash.filters.BitmapFilter"] = flash_filters_BitmapFilter;
flash_filters_BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash_filters_BitmapFilter.prototype = {
	clone: function() {
		return new flash_filters_BitmapFilter();
	}
	,__class__: flash_filters_BitmapFilter
};
var flash_geom_Rectangle = function(a,b,c,d) {
	if(d == null) d = 0;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 0;
	this.x = a;
	this.y = b;
	this.width = c;
	this.height = d;
};
$hxClasses["flash.geom.Rectangle"] = flash_geom_Rectangle;
flash_geom_Rectangle.__name__ = ["flash","geom","Rectangle"];
flash_geom_Rectangle.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,clone: function() {
		return new flash_geom_Rectangle(this.x,this.y,this.width,this.height);
	}
	,equals: function(o) {
		return this.x == o.x && this.y == o.y && this.width == o.width && this.height == o.height;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,copyFrom: function(o) {
		this.x = o.x;
		this.y = o.y;
		this.width = o.width;
		this.height = o.height;
	}
	,setTo: function(a,b,c,d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	}
	,setVoid: function() {
		this.width -= 2147483647 - this.x;
		this.x = 2147483647;
		this.width = -2147483648 - this.x;
		-2147483648;
		this.height -= 2147483647 - this.y;
		this.y = 2147483647;
		this.height = -2147483648 - this.y;
		-2147483648;
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(v) {
		this.width -= v - this.x;
		return this.x = v;
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(v) {
		this.height -= v - this.y;
		return this.y = v;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(v) {
		this.width = v - this.x;
		return v;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(v) {
		this.height = v - this.y;
		return v;
	}
	,get_size: function() {
		return new flash_geom_Point(this.width,this.height);
	}
	,set_size: function(v) {
		this.width = v.x;
		this.height = v.y;
		return v.clone();
	}
	,get_topLeft: function() {
		return new flash_geom_Point(this.x,this.y);
	}
	,set_topLeft: function(v) {
		this.width = v.x;
		this.height = v.y;
		return v.clone();
	}
	,get_bottomRight: function() {
		return new flash_geom_Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(v) {
		this.width = v.x - this.x;
		this.height = v.y - this.y;
		return v.clone();
	}
	,contains: function(u,v) {
		return (u -= this.x) >= 0 && (v -= this.y) >= 0 && u < this.width && v < this.height;
	}
	,containsPoint: function(o) {
		return this.contains(o.x,o.y);
	}
	,containsRect: function(o) {
		if(o.width <= 0 || o.height <= 0) return o.x > this.x && o.y > this.y && o.x + o.width < this.x + this.width && o.y + o.height < this.y + this.height; else return o.x >= this.x && o.y >= this.y && o.x + o.width <= this.x + this.width && o.y + o.height <= this.y + this.height;
	}
	,intersection: function(o) {
		var x0;
		var x1;
		var y0;
		var y1;
		var a;
		var b;
		if(((a = this.x) < (b = o.x)?x0 = b:x0 = a) <= ((a += this.width) > (b += o.width)?x1 = b:x1 = a) && ((a = this.y) < (b = o.y)?y0 = b:y0 = a) <= ((a += this.height) > (b += o.height)?y1 = b:y1 = a)) return new flash_geom_Rectangle(x0,y0,x1 - x0,y1 - y0); else return new flash_geom_Rectangle();
	}
	,intersects: function(o) {
		var x0;
		var x1;
		var y0;
		var y1;
		if((this.x < (x0 = o.x)?x0 = x0:x0 = this.x) <= (this.x + this.width > (x1 = o.x + o.width)?x1 = x1:x1 = this.x + this.width)) return false; else return (this.y < (y0 = o.y)?y0 = y0:y0 = this.y) <= (this.y + this.height > (y1 = o.y + o.height)?y1 = y1:y1 = this.y);
	}
	,join: function(o) {
		var v;
		if((v = o.x - this.x) < 0) {
			this.x += v;
			this.width -= v;
		}
		if((v = o.y - this.y) < 0) {
			this.y += v;
			this.height -= v;
		}
		if((v = o.x + o.width - (this.x + this.width)) > 0) this.width += v;
		if((v = o.y + o.height - (this.y + this.height)) > 0) this.height += v;
	}
	,union: function(o) {
		var a;
		var b;
		var c;
		var d;
		return new flash_geom_Rectangle((a = this.x) < (c = o.x)?a:c,(b = this.y) < (d = o.y)?b:d,(a += this.width) > (c += o.width)?a:c,(b += this.height) > (d += o.height)?b:d);
	}
	,inflate: function(u,v) {
		this.x -= u;
		this.y -= v;
		this.width += u * 2;
		this.height += v * 2;
	}
	,inflatePoint: function(v) {
		this.inflate(v.x,v.y);
	}
	,offset: function(u,v) {
		this.x += u;
		this.y += v;
	}
	,offsetPoint: function(o) {
		this.x += o.x;
		this.y += o.y;
	}
	,transform: function(m) {
		var v;
		var l;
		var t;
		var r;
		var b;
		r = l = m.a * this.x + m.c * this.y;
		b = t = m.b * this.x + m.d * this.y;
		v = m.a * (this.x + this.width) + m.c * this.y;
		if(v < l) l = v;
		if(v > r) r = v;
		v = m.b * (this.x + this.width) + m.d * this.y;
		if(v < t) t = v;
		if(v > b) b = v;
		v = m.a * this.x + m.c * (this.y + this.height);
		if(v < l) l = v;
		if(v > r) r = v;
		v = m.b * this.x + m.d * (this.y + this.height);
		if(v < t) t = v;
		if(v > b) b = v;
		v = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		if(v < l) l = v;
		if(v > r) r = v;
		v = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(v < t) t = v;
		if(v > b) b = v;
		this.x = l + m.tx;
		this.width = r - l;
		this.y = t + m.ty;
		this.height = b - t;
	}
	,toString: function() {
		return "Rectangle(" + this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")";
	}
	,__class__: flash_geom_Rectangle
	,__properties__: {set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_size:"set_size",get_size:"get_size",set_bottom:"set_bottom",get_bottom:"get_bottom",set_top:"set_top",get_top:"get_top",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left"}
};
var flash_media_Sound = function(stream,ctx) {
	flash_events_EventDispatcher.call(this);
	if(stream != null) this.load(stream,ctx);
};
$hxClasses["flash.media.Sound"] = flash_media_Sound;
flash_media_Sound.__name__ = ["flash","media","Sound"];
flash_media_Sound.canPlayType = function(o) {
	var f;
	var v;
	o = o.toLowerCase();
	if(flash_media_Sound.canPlayMap != null) {
		if(flash_media_Sound.canPlayMap.exists(o)) return flash_media_Sound.canPlayMap.get(o);
	} else flash_media_Sound.canPlayMap = new haxe_ds_StringMap();
	f = flash_media_Sound.getFormatType(o);
	v = new Audio().canPlayType(f) != "no";
	flash_media_Sound.canPlayMap.set(o,v);
	return v;
};
flash_media_Sound.getFormatType = function(o) {
	if(o == "mp3") return "audio/mpeg;"; else if(o == "ogg") return "audio/ogg; codecs=\"vorbis\""; else return null;
};
flash_media_Sound.__super__ = flash_events_EventDispatcher;
flash_media_Sound.prototype = $extend(flash_events_EventDispatcher.prototype,{
	id3: null
	,component: null
	,qCache: null
	,length: null
	,close: function() {
		if(this.component != null) this.component = null; else throw new js__$Boot_HaxeError(new flash_errors_IOError("Attempt to close unexisting stream."));
	}
	,load: function(stream,ctx) {
		var s = stream.url;
		var m = flash_media_Sound.library;
		if(m != null && (__map_reserved[s] != null?m.existsReserved(s):m.h.hasOwnProperty(s))) {
			this.component = __map_reserved[s] != null?m.getReserved(s):m.h[s];
			var value = this.component.cloneNode(true);
			flash_media_Sound.library.set(s,value);
		} else this.component = new Audio(s);
		this.qCache = [];
	}
	,play: function(ofs,loops,stf) {
		if(loops == null) loops = 0;
		if(ofs == null) ofs = 0;
		var o;
		var i;
		if(this.qCache.length == 0) {
			(o = new flash_media_SoundChannel()).init(this,this.component,loops);
			this.component = this.component.cloneNode(true);
		} else {
			o = this.qCache[0];
			var _g = 0;
			var _g1 = this.qCache;
			while(_g < _g1.length) {
				var v = _g1[_g];
				++_g;
				if(v.component.currentTime * 1000 == ofs) {
					o = v;
					break;
				}
			}
			HxOverrides.remove(this.qCache,o);
		}
		o.set_soundTransform(stf);
		try {
			o._loops = loops;
			o.play(ofs);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			null;
		}
		return o;
	}
	,get_length: function() {
		if(this.component != null) return this.component.duration * 1000; else return 0;
	}
	,__class__: flash_media_Sound
	,__properties__: {get_length:"get_length"}
});
var flash_media_SoundChannel = function() {
	this._loops = 1;
	this.active = false;
	this.rightPeak = 1;
	this.leftPeak = 1;
	flash_events_EventDispatcher.call(this);
};
$hxClasses["flash.media.SoundChannel"] = flash_media_SoundChannel;
flash_media_SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash_media_SoundChannel.__super__ = flash_events_EventDispatcher;
flash_media_SoundChannel.prototype = $extend(flash_events_EventDispatcher.prototype,{
	leftPeak: null
	,rightPeak: null
	,soundTransform: null
	,component: null
	,qSound: null
	,active: null
	,_position: null
	,_loops: null
	,init: function(q,v,loops) {
		if(loops == null) loops = 1;
		this.qSound = q;
		this.component = v;
		this._loops = loops;
		this.component.addEventListener("ended",$bind(this,this.onEnded));
	}
	,play: function(p) {
		var o = this.component;
		var l;
		if(!this.active) {
			l = this.get_duration();
			if(p == 0 || p / 1000 <= l) {
				this._position = this.set_position(p);
				o.load();
				o.play();
				this.active = true;
			} else {
				this.set_position(0);
				o.load();
				o.play();
				o.pause();
				this.qSound.qCache.push(this);
			}
		}
	}
	,stop: function() {
		if(this.active) {
			this.active = false;
			this.component.pause();
			this.qSound.qCache.push(this);
		}
	}
	,set_soundTransform: function(v) {
		this.soundTransform = v;
		if(v != null) this.component.volume = v.volume; else this.component.volume = 1;
		return v;
	}
	,get_duration: function() {
		var o = this.component;
		var f;
		try {
			if(o.buffered != null) f = o.buffered.end(0); else f = o.duration;
		} catch( _ ) {
			haxe_CallStack.lastException = _;
			if (_ instanceof js__$Boot_HaxeError) _ = _.val;
			f = o.duration;
			if(isNaN(f)) f = 0;
		}
		return f;
	}
	,get_position: function() {
		return this.component.currentTime * 1000;
	}
	,set_position: function(v) {
		if(this.component.currentTime != v / 1000) {
			var p = !this.component.paused;
			if(p) this.component.pause();
			this.component.currentTime = v / 1000;
			if(p) this.component.play();
		}
		return v;
	}
	,onEnded: function(e) {
		if(this.active) {
			if(--this._loops > 0) {
				this.set_position(this._position);
				if(this.component.paused) this.component.play();
			} else {
				this.stop();
				this.component.currentTime = 0;
				this.dispatchEvent(new flash_events_Event("soundComplete"));
			}
		}
	}
	,__class__: flash_media_SoundChannel
	,__properties__: {set_position:"set_position",get_position:"get_position",set_soundTransform:"set_soundTransform"}
});
var flash_media_SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash_media_SoundLoaderContext;
flash_media_SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash_media_SoundLoaderContext.prototype = {
	bufferTime: null
	,checkPolicyFile: null
	,__class__: flash_media_SoundLoaderContext
};
var flash_media_SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
};
$hxClasses["flash.media.SoundTransform"] = flash_media_SoundTransform;
flash_media_SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash_media_SoundTransform.prototype = {
	leftToLeft: null
	,leftToRight: null
	,pan: null
	,rightToLeft: null
	,rightToRight: null
	,volume: null
	,__class__: flash_media_SoundTransform
};
var flash_net_IURLLoader = function() { };
$hxClasses["flash.net.IURLLoader"] = flash_net_IURLLoader;
flash_net_IURLLoader.__name__ = ["flash","net","IURLLoader"];
flash_net_IURLLoader.__interfaces__ = [flash_events_IEventDispatcher];
flash_net_IURLLoader.prototype = {
	bytesLoaded: null
	,bytesTotal: null
	,data: null
	,dataFormat: null
	,close: null
	,load: null
	,__class__: flash_net_IURLLoader
};
var flash_net_SharedObject = function() {
	flash_events_EventDispatcher.call(this);
};
$hxClasses["flash.net.SharedObject"] = flash_net_SharedObject;
flash_net_SharedObject.__name__ = ["flash","net","SharedObject"];
flash_net_SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = window.location.href;
	var so = new flash_net_SharedObject();
	so.nmeKey = localPath + ":" + name;
	var rawData = null;
	try {
		rawData = flash_net_SharedObject.nmeGetLocalStorage().getItem(so.nmeKey);
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe_Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : flash_net_SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
};
flash_net_SharedObject.nmeGetLocalStorage = function() {
	var res = js_Browser.getLocalStorage();
	if(res == null) throw new js__$Boot_HaxeError(new flash_errors_Error("SharedObject not supported"));
	return res;
};
flash_net_SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(StringTools.replace(name,"jeash.","flash."),"browser.","flash."));
	return null;
};
flash_net_SharedObject.__super__ = flash_events_EventDispatcher;
flash_net_SharedObject.prototype = $extend(flash_events_EventDispatcher.prototype,{
	data: null
	,nmeKey: null
	,clear: function() {
		this.data = { };
		try {
			flash_net_SharedObject.nmeGetLocalStorage().removeItem(this.nmeKey);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
		}
		this.flush();
	}
	,flush: function() {
		var data = haxe_Serializer.run(this.data);
		try {
			flash_net_SharedObject.nmeGetLocalStorage().removeItem(this.nmeKey);
			flash_net_SharedObject.nmeGetLocalStorage().setItem(this.nmeKey,data);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return flash_net_SharedObjectFlushStatus.PENDING;
		}
		return flash_net_SharedObjectFlushStatus.FLUSHED;
	}
	,setProperty: function(propertyName,value) {
		if(this.data != null) this.data[propertyName] = value;
	}
	,get_size: function() {
		return haxe_io_Bytes.ofString(haxe_Serializer.run(this.data)).length;
	}
	,__class__: flash_net_SharedObject
	,__properties__: {get_size:"get_size"}
});
var flash_net_SharedObjectFlushStatus = $hxClasses["flash.net.SharedObjectFlushStatus"] = { __ename__ : ["flash","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] };
flash_net_SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
flash_net_SharedObjectFlushStatus.FLUSHED.toString = $estr;
flash_net_SharedObjectFlushStatus.FLUSHED.__enum__ = flash_net_SharedObjectFlushStatus;
flash_net_SharedObjectFlushStatus.PENDING = ["PENDING",1];
flash_net_SharedObjectFlushStatus.PENDING.toString = $estr;
flash_net_SharedObjectFlushStatus.PENDING.__enum__ = flash_net_SharedObjectFlushStatus;
var flash_net_URLLoader = function(request) {
	flash_events_EventDispatcher.call(this);
	this.bytesLoaded = this.bytesTotal = 0;
	this.set_dataFormat(1);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash_net_URLLoader;
flash_net_URLLoader.__name__ = ["flash","net","URLLoader"];
flash_net_URLLoader.__interfaces__ = [flash_net_IURLLoader];
flash_net_URLLoader.__super__ = flash_events_EventDispatcher;
flash_net_URLLoader.prototype = $extend(flash_events_EventDispatcher.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,data: null
	,dataFormat: null
	,set_dataFormat: function(v) {
		if(v == 0 && window.ArrayBuffer == null) this.dataFormat = 1; else this.dataFormat = v;
		return this.dataFormat;
	}
	,close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState == 4) {
				var s;
				try {
					s = subject.status;
				} catch( _ ) {
					haxe_CallStack.lastException = _;
					if (_ instanceof js__$Boot_HaxeError) _ = _.val;
					s = null;
				}
				if(s != null) self.onStatus(s);
				if(s == null) self.onError("Failed to connect or resolve host"); else if(s >= 200 && s < 400) self.onData(subject.response); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
					self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
					self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
				} else self.onError("Http Error #" + subject.status);
			}
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js_Boot.__instanceof(data,flash_utils_ByteArray)) {
			var data1 = data;
			if(this.dataFormat == 0) uri = data1.data.buffer; else uri = data1.readUTFBytes(data1.length);
		} else if(js_Boot.__instanceof(data,flash_net_URLVariables)) {
			var data2 = data;
			var _g = 0;
			var _g1 = Reflect.fields(data2);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.onError(e.toString());
			return;
		}
		if(this.dataFormat == 0) xmlHttpRequest.responseType = "arraybuffer";
		var _g2 = 0;
		while(_g2 < requestHeaders.length) {
			var header = requestHeaders[_g2];
			++_g2;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
	}
	,onData: function(_) {
		var v;
		if(_) v = _; else v = this.getData();
		var e;
		if(this.dataFormat == 0) this.data = flash_utils_ByteArray.nmeOfBuffer(v); else this.data = Std.string(v);
		e = new flash_events_Event("complete");
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,onError: function(msg) {
		var e = new flash_events_IOErrorEvent("ioError");
		e.text = msg;
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,onOpen: function() {
		var e = new flash_events_Event("open");
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,onProgress: function(event) {
		var e = new flash_events_ProgressEvent("progress");
		e.set_currentTarget(this);
		e.bytesLoaded = event.loaded;
		e.bytesTotal = event.total;
		this.dispatchEvent(e);
	}
	,onSecurityError: function(msg) {
		var evt = new flash_events_SecurityErrorEvent("securityError");
		evt.text = msg;
		evt.set_currentTarget(this);
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var e = new flash_events_HTTPStatusEvent("httpStatus",false,false,status);
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,__class__: flash_net_URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
var flash_net_URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash_net_URLRequest;
flash_net_URLRequest.__name__ = ["flash","net","URLRequest"];
flash_net_URLRequest.prototype = {
	contentType: null
	,data: null
	,method: null
	,requestHeaders: null
	,url: null
	,formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == "GET" || this.data == null) return res;
		if(typeof(this.data) == "string" || js_Boot.__instanceof(this.data,flash_utils_ByteArray)) (res = res.slice()).push(new flash_net_URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		return res;
	}
	,__class__: flash_net_URLRequest
};
var flash_net_URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash_net_URLRequestHeader;
flash_net_URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash_net_URLRequestHeader.prototype = {
	name: null
	,value: null
	,__class__: flash_net_URLRequestHeader
};
var flash_net_URLVariables = function(o) {
	if(o != null) this.decode(o);
};
$hxClasses["flash.net.URLVariables"] = flash_net_URLVariables;
flash_net_URLVariables.__name__ = ["flash","net","URLVariables"];
flash_net_URLVariables.prototype = {
	decode: function(s) {
		var o = 0;
		var i = -1;
		var l = s.length;
		var e = 0;
		var k;
		var v;
		var c;
		while(o < l) {
			i = s.indexOf("&",o);
			if(i < 0) i = l;
			e = s.indexOf("=",o);
			if(e == -1 || e > i) throw new js__$Boot_HaxeError(2101);
			k = s.substring(o,e);
			v = s.substring(e + 1,i);
			if(Object.prototype.hasOwnProperty.call(this,k)) {
				c = Reflect.field(this,k);
				if((c instanceof Array) && c.__enum__ == null) c.push(v); else c = [c,v];
			} else c = v;
			this[k] = c;
			o = i + 1;
		}
	}
	,toString: function() {
		var r = "";
		var o = Reflect.fields(this);
		var i = -1;
		var l = o.length;
		var k;
		var v;
		while(++i < l) {
			if(i > 0) r += "&";
			r += StringTools.urlEncode(k = o[i]) + "=";
			if((v = Reflect.field(this,k) instanceof Array) && (v = Reflect.field(this,k)).__enum__ == null) r += v.join("&" + k + "="); else r += Std.string(v);
		}
		return r;
	}
	,__class__: flash_net_URLVariables
};
var flash_text_AntiAliasType = $hxClasses["flash.text.AntiAliasType"] = { __ename__ : ["flash","text","AntiAliasType"], __constructs__ : ["ADVANCED","NORMAL"] };
flash_text_AntiAliasType.ADVANCED = ["ADVANCED",0];
flash_text_AntiAliasType.ADVANCED.toString = $estr;
flash_text_AntiAliasType.ADVANCED.__enum__ = flash_text_AntiAliasType;
flash_text_AntiAliasType.NORMAL = ["NORMAL",1];
flash_text_AntiAliasType.NORMAL.toString = $estr;
flash_text_AntiAliasType.NORMAL.__enum__ = flash_text_AntiAliasType;
var flash_text_Font = function() {
};
$hxClasses["flash.text.Font"] = flash_text_Font;
flash_text_Font.__name__ = ["flash","text","Font"];
flash_text_Font.enumerateFonts = function(z) {
	if(z == null) z = false;
	return [];
};
flash_text_Font.registerFont = function(v) {
};
flash_text_Font.prototype = {
	fontName: null
	,fontStyle: null
	,fontType: null
	,hasGlyphs: function(v) {
		return false;
	}
	,__class__: flash_text_Font
};
var flash_text_FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : ["flash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
flash_text_FontStyle.REGULAR = ["REGULAR",0];
flash_text_FontStyle.REGULAR.toString = $estr;
flash_text_FontStyle.REGULAR.__enum__ = flash_text_FontStyle;
flash_text_FontStyle.ITALIC = ["ITALIC",1];
flash_text_FontStyle.ITALIC.toString = $estr;
flash_text_FontStyle.ITALIC.__enum__ = flash_text_FontStyle;
flash_text_FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash_text_FontStyle.BOLD_ITALIC.toString = $estr;
flash_text_FontStyle.BOLD_ITALIC.__enum__ = flash_text_FontStyle;
flash_text_FontStyle.BOLD = ["BOLD",3];
flash_text_FontStyle.BOLD.toString = $estr;
flash_text_FontStyle.BOLD.__enum__ = flash_text_FontStyle;
var flash_text_FontType = $hxClasses["flash.text.FontType"] = { __ename__ : ["flash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] };
flash_text_FontType.EMBEDDED = ["EMBEDDED",0];
flash_text_FontType.EMBEDDED.toString = $estr;
flash_text_FontType.EMBEDDED.__enum__ = flash_text_FontType;
flash_text_FontType.DEVICE = ["DEVICE",1];
flash_text_FontType.DEVICE.toString = $estr;
flash_text_FontType.DEVICE.__enum__ = flash_text_FontType;
var flash_text_TextField = function() {
	this.__editable = false;
	this.__text = "";
	this.__autoSize = -1;
	this.wordWrap = false;
	this.type = "DYNAMIC";
	this.selectable = true;
	this.multiline = false;
	this.maxChars = 0;
	this.borderColor = 0;
	this.border = false;
	this.backgroundColor = 16777215;
	flash_display_InteractiveObject.call(this);
	var s = this.component.style;
	s.whiteSpace = "nowrap";
	s.overflow = "hidden";
	s.padding = 1.5 + "px";
	s.lineHeight = "1.25";
	this.__textFormat = new flash_text_TextFormat("Times New Roman",12,0,false,false,false,"","","LEFT",0,0,0,0);
	this.__width = 100;
	this.__height = 100;
	this.__applySize(3);
	this.__applyTextFormat();
};
$hxClasses["flash.text.TextField"] = flash_text_TextField;
flash_text_TextField.__name__ = ["flash","text","TextField"];
flash_text_TextField.__interfaces__ = [flash_display_IBitmapDrawable];
flash_text_TextField.__super__ = flash_display_InteractiveObject;
flash_text_TextField.prototype = $extend(flash_display_InteractiveObject.prototype,{
	autoSize: null
	,antiAliasType: null
	,background: null
	,backgroundColor: null
	,border: null
	,borderColor: null
	,caretIndex: null
	,displayAsPassword: null
	,embedFonts: null
	,htmlText: null
	,length: null
	,maxChars: null
	,multiline: null
	,scrollH: null
	,scrollV: null
	,maxScrollH: null
	,maxScrollV: null
	,numLines: null
	,selectable: null
	,selectedText: null
	,textHeight: null
	,textWidth: null
	,type: null
	,wordWrap: null
	,__autoSize: null
	,__text: null
	,__textFormat: null
	,__textFormatSync: null
	,__fontStyle: null
	,__editable: null
	,__field: null
	,set_background: function(v) {
		if(this.background != v) {
			var s = this.component.style;
			if(this.background = v) s.background = flash_Lib.rgbf(this.backgroundColor,1); else s.background = "";
		}
		return v;
	}
	,set_backgroundColor: function(c) {
		if(this.backgroundColor != c) {
			this.backgroundColor = c;
			if(this.background) this.component.style.background = flash_Lib.rgbf(c,1);
		}
		return c;
	}
	,set_border: function(v) {
		if(this.border != v) {
			var s = this.component.style;
			if(this.border = v) s.border = "1px solid " + flash_Lib.rgbf(this.borderColor,1); else s.border = "0";
			this.__applySize(3);
		}
		return v;
	}
	,set_borderColor: function(c) {
		if(this.borderColor != c) {
			this.borderColor = c;
			if(this.border) this.component.style.border = "1px solid " + flash_Lib.rgbf(c,1);
		}
		return c;
	}
	,get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	}
	,set_defaultTextFormat: function(f) {
		this.__textFormat.merge(f);
		this.__textFormatSync = false;
		return f;
	}
	,get_textColor: function() {
		return this.__textFormat.color;
	}
	,set_textColor: function(c) {
		this.__textFormat.color = c;
		this.__applyTextFormat();
		return c;
	}
	,setTextFormat: function(v,f,l) {
	}
	,__applyType: function(v) {
		var c = this.component;
		var s = this.get_text();
		if(this.__editable = v) {
			var e = flash_Lib.jsNode(this.multiline?"textarea":"input");
			e.value = s;
			if(this.maxChars > 0) e.maxLength = this.maxChars; else e.maxLength = 2147483647;
			var s1 = e.style;
			s1.border = "0";
			s1.padding = "0";
			s1.background = "transparent";
			c.appendChild(this.__field = e);
		} else {
			c.removeChild(this.__field);
			this.__field = null;
		}
	}
	,__applyTextFormat: function() {
		this.__textFormatSync = true;
		var f = this.__textFormat;
		var s;
		s = (this.__editable?this.__field:this.component).style;
		this.__fontStyle = s.font = f.get_fontStyle();
		s.textAlign = f.align;
		if(f.bold) s.fontWeight = "bold"; else s.fontWeight = "";
		if(f.italic) s.fontStyle = "italic"; else s.fontStyle = "";
		if(f.underline) s.textDecoration = "underline"; else s.textDecoration = "";
		s.color = flash_Lib.rgbf(f.color,1);
	}
	,__applyText: function(s) {
		this.__text = s;
		if(this.__editable) this.__field.value = s; else if(this.component.innerText == null) this.component.innerHTML = StringTools.replace(StringTools.htmlEscape(s),"\n","<br>"); else this.component.innerText = s;
		this.__applyAutoSize();
	}
	,__applySize: function(m) {
		var s = this.component.style;
		var e = this.__editable;
		var fs;
		if(e) fs = this.__field.style; else fs = null;
		var n = 1;
		while(n < 4) {
			if((m & n) != 0) {
				var f;
				if(n == 1) f = this.__width; else f = this.__height;
				if(this.border) f -= 1;
				f -= 3.0;
				if(n == 1) {
					s.width = f + "px";
					if(e) fs.width = f + "px";
				} else {
					s.height = f + "px";
					if(e) fs.height = f + "px";
				}
			}
			n <<= 1;
		}
	}
	,get_length: function() {
		return this.get_text().length;
	}
	,get_text: function() {
		if(this.__editable) return this.__field.value; else return this.__text;
	}
	,set_text: function(s) {
		if(this.get_text() != s) this.__applyText(s);
		if(!this.__textFormatSync) this.__applyTextFormat();
		return s;
	}
	,appendText: function(s) {
		var _g = this;
		_g.set_text(_g.get_text() + s);
	}
	,setSelection: function(v,o) {
		if(this.__editable) this.__field.setSelectionRange(v,o);
	}
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		ctx.save();
		ctx.fillStyle = this.component.style.color;
		ctx.font = this.__fontStyle;
		ctx.textBaseline = "top";
		ctx.textAlign = this.__textFormat.align;
		ctx.fillText(this.get_text(),0,0);
		ctx.restore();
	}
	,get_width: function() {
		if(this.__autoSize < 0) return this.__width; else return this.get_textWidth();
	}
	,get_height: function() {
		if(this.__autoSize < 0) return this.__height; else return this.get_textHeight();
	}
	,set_width: function(v) {
		if(this.__width != v) {
			this.__width = v;
			this.__applySize(1);
		}
		return v;
	}
	,set_height: function(v) {
		if(this.__height != v) {
			this.__height = v;
			this.__applySize(2);
		}
		return v;
	}
	,__measurePre: function() {
		var o = flash_Lib.jsHelper();
		o.setAttribute("style",this.component.getAttribute("style"));
		o.innerHTML = this.component.innerHTML;
		return o;
	}
	,__measurePost: function(o) {
		o.setAttribute("style","");
		o.innerHTML = "";
	}
	,get_textWidth: function() {
		if(this.get_stage() == null) {
			var o = this.__measurePre();
			var r = o.clientWidth;
			this.__measurePost(o);
			return r;
		}
		return this.component.clientWidth;
	}
	,get_textHeight: function() {
		if(this.get_stage() == null) {
			var o = this.__measurePre();
			var r = o.clientHeight;
			this.__measurePost(o);
			return r;
		}
		return this.component.clientHeight;
	}
	,get_numLines: function() {
		var r = 0;
		var p = 0;
		var d = this.get_text();
		var l = d.length;
		while(p < l) {
			r++;
			if((p = d.indexOf("\n",p) + 1) == 0) p = l;
		}
		return r;
	}
	,__applyAutoSize: function() {
		var f = this.__autoSize;
		var s = this.component.style;
		if(f >= 0 && !this.__editable) {
			if(f > 0) s.left = (this.__width - this.get_textWidth()) * f / 2 + "px"; else s.left = "";
			s.width = "";
			s.height = "";
		} else {
			s.left = "";
			this.__applySize(3);
		}
	}
	,set_autoSize: function(v) {
		if(this.autoSize != v) {
			var i;
			var _g = this.autoSize = v;
			switch(_g) {
			case "LEFT":
				i = 0;
				break;
			case "CENTER":
				i = 1;
				break;
			case "RIGHT":
				i = 2;
				break;
			default:
				i = -1;
			}
			this.__autoSize = i;
			this.__applyAutoSize();
		}
		return v;
	}
	,set_type: function(s) {
		var v = s == "INPUT";
		if(v != this.__editable) this.__applyType(v);
		return s;
	}
	,set_multiline: function(v) {
		if(this.multiline != v) {
			this.multiline = v;
			if(this.__editable) this.__applyType(true);
		}
		return v;
	}
	,set_maxChars: function(v) {
		if(this.maxChars != v) {
			this.maxChars = v;
			if(this.__editable) if(v > 0) this.__field.maxLength = v; else this.__field.maxLength = 2147483647;
		}
		return v;
	}
	,set_selectable: function(v) {
		if(this.selectable != v) {
			var s = this.component.style;
			var q;
			if(this.selectable = v) q = null; else q = "none";
			s.setProperty("-webkit-touch-callout",q,null);
			s.setProperty("cursor",v?"":"default",null);
			flash_Lib.setCSSProperties(s,"user-select",q,47);
		}
		return v;
	}
	,set_wordWrap: function(v) {
		if(this.wordWrap != v) {
			var s;
			if(this.wordWrap = v) s = "normal"; else s = "nowrap";
			this.component.style.whiteSpace = s;
			if(this.__editable) this.__field.style.whiteSpace = s;
		}
		return v;
	}
	,giveFocus: function() {
		(this.__editable?this.__field:this.component).focus();
	}
	,get_selectionBeginIndex: function() {
		if(this.__editable) return this.__field.selectionStart; else return 0;
	}
	,get_selectionEndIndex: function() {
		if(this.__editable) return this.__field.selectionEnd; else return 0;
	}
	,set_selectionBeginIndex: function(v) {
		if(this.__editable && this.__field.selectionStart != v) this.__field.selectionStart = v;
		return v;
	}
	,set_selectionEndIndex: function(v) {
		if(this.__editable && this.__field.selectionEnd != v) this.__field.selectionEnd = v;
		return v;
	}
	,get_selectedText: function() {
		if(this.__editable) {
			var a = this.__field.selectionStart;
			var b = this.__field.selectionEnd;
			var c;
			if(b < a) {
				c = a;
				a = b;
				b = c;
			}
			return this.__field.value.substring(a,b);
		}
		return null;
	}
	,hitTestLocal: function(x,y,p,v) {
		return (!v || this.visible) && x >= 0 && y >= 0 && x < this.get_width() && y < this.get_height();
	}
	,addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o = this.component;
		if(this.__editable) this.component = this.__field;
		flash_display_InteractiveObject.prototype.addEventListener.call(this,type,listener,useCapture,priority,weak);
		if(this.__editable) this.component = o;
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		var o = this.component;
		if(this.__editable) this.component = this.__field;
		flash_display_InteractiveObject.prototype.removeEventListener.call(this,type,listener,useCapture);
		if(this.__editable) this.component = o;
	}
	,__class__: flash_text_TextField
	,__properties__: $extend(flash_display_InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",set_type:"set_type",get_textWidth:"get_textWidth",get_textHeight:"get_textHeight",set_textColor:"set_textColor",get_textColor:"get_textColor",set_text:"set_text",get_text:"get_text",set_selectionEndIndex:"set_selectionEndIndex",get_selectionEndIndex:"get_selectionEndIndex",set_selectionBeginIndex:"set_selectionBeginIndex",get_selectionBeginIndex:"get_selectionBeginIndex",get_selectedText:"get_selectedText",set_selectable:"set_selectable",get_numLines:"get_numLines",set_multiline:"set_multiline",set_maxChars:"set_maxChars",get_length:"get_length",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_borderColor:"set_borderColor",set_border:"set_border",set_backgroundColor:"set_backgroundColor",set_background:"set_background",set_autoSize:"set_autoSize"})
});
var flash_text_TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
	this.tabStops = [];
};
$hxClasses["flash.text.TextFormat"] = flash_text_TextFormat;
flash_text_TextFormat.__name__ = ["flash","text","TextFormat"];
flash_text_TextFormat.translateFont = function(n) {
	switch(n) {
	case "_sans":
		return "sans-serif";
	case "_serif":
		return "serif";
	case "_typewriter":
		return "monospace";
	default:
		if(n == null) return "sans-serif";
		return n;
	}
};
flash_text_TextFormat.prototype = {
	align: null
	,blockIndent: null
	,bold: null
	,bullet: null
	,color: null
	,font: null
	,indent: null
	,italic: null
	,kerning: null
	,leading: null
	,leftMargin: null
	,letterSpacing: null
	,rightMargin: null
	,size: null
	,tabStops: null
	,target: null
	,underline: null
	,url: null
	,merge: function(f) {
		if(f.font != null) this.font = f.font;
		if(f.size != null) this.size = f.size;
		if(f.color != null) this.color = f.color;
		if(f.bold != null) this.bold = f.bold;
		if(f.italic != null) this.italic = f.italic;
		if(f.underline != null) this.underline = f.underline;
		if(f.url != null) this.url = f.url;
		if(f.target != null) this.target = f.target;
		if(f.align != null) this.align = f.align;
		if(f.leftMargin != null) this.leftMargin = f.leftMargin;
		if(f.rightMargin != null) this.rightMargin = f.rightMargin;
		if(f.indent != null) this.indent = f.indent;
		if(f.leading != null) this.leading = f.leading;
		if(f.blockIndent != null) this.blockIndent = f.blockIndent;
		if(f.bullet != null) this.bullet = f.bullet;
		if(f.kerning != null) this.kerning = f.kerning;
		if(f.letterSpacing != null) this.letterSpacing = f.letterSpacing;
		if(f.tabStops != null) this.tabStops = f.tabStops;
	}
	,clone: function() {
		var r = new flash_text_TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target,this.align,this.leftMargin,this.rightMargin,this.indent,this.leading);
		r.blockIndent = this.blockIndent;
		r.bullet = this.bullet;
		r.indent = this.indent;
		r.kerning = this.kerning;
		r.letterSpacing = this.letterSpacing;
		r.tabStops = this.tabStops.slice(0);
		return r;
	}
	,get_fontStyle: function() {
		return (this.bold?"bold ":"") + (this.italic?"italic ":"") + this.size + "px " + flash_text_TextFormat.translateFont(this.font);
	}
	,__class__: flash_text_TextFormat
};
var flash_ui_Mouse = function() { };
$hxClasses["flash.ui.Mouse"] = flash_ui_Mouse;
flash_ui_Mouse.__name__ = ["flash","ui","Mouse"];
flash_ui_Mouse.hide = function() {
	flash_Lib.get_stage().component.style.cursor = "none";
};
flash_ui_Mouse.show = function() {
	flash_Lib.get_stage().component.style.cursor = null;
};
var flash_ui_Multitouch = function() { };
$hxClasses["flash.ui.Multitouch"] = flash_ui_Multitouch;
flash_ui_Multitouch.__name__ = ["flash","ui","Multitouch"];
var flash_ui_MultitouchInputMode = $hxClasses["flash.ui.MultitouchInputMode"] = { __ename__ : ["flash","ui","MultitouchInputMode"], __constructs__ : ["GESTURE","NONE","TOUCH_POINT"] };
flash_ui_MultitouchInputMode.GESTURE = ["GESTURE",0];
flash_ui_MultitouchInputMode.GESTURE.toString = $estr;
flash_ui_MultitouchInputMode.GESTURE.__enum__ = flash_ui_MultitouchInputMode;
flash_ui_MultitouchInputMode.NONE = ["NONE",1];
flash_ui_MultitouchInputMode.NONE.toString = $estr;
flash_ui_MultitouchInputMode.NONE.__enum__ = flash_ui_MultitouchInputMode;
flash_ui_MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",2];
flash_ui_MultitouchInputMode.TOUCH_POINT.toString = $estr;
flash_ui_MultitouchInputMode.TOUCH_POINT.__enum__ = flash_ui_MultitouchInputMode;
var flash_utils_ByteArray = function() {
	this.littleEndian = false;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated = this.position = 0);
};
$hxClasses["flash.utils.ByteArray"] = flash_utils_ByteArray;
flash_utils_ByteArray.__name__ = ["flash","utils","ByteArray"];
flash_utils_ByteArray.fromBytes = function(inBytes) {
	var r = new flash_utils_ByteArray();
	r.byteView = new Uint8Array(inBytes.b.bufferValue);
	r.set_length(r.byteView.length);
	r.allocated = r.length;
	return r;
};
flash_utils_ByteArray.nmeOfBuffer = function(buffer) {
	var r = new flash_utils_ByteArray();
	r.set_length(r.allocated = buffer.byteLength);
	r.data = new DataView(buffer);
	r.byteView = new Uint8Array(buffer);
	return r;
};
flash_utils_ByteArray.prototype = {
	bytesAvailable: null
	,length: null
	,objectEncoding: null
	,position: null
	,allocated: null
	,byteView: null
	,data: null
	,littleEndian: null
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,_getUTFBytesCount: function(value) {
		var r = 0;
		var i = -1;
		var l = value.length;
		var c;
		var count = 0;
		while(++i < l) {
			c = value.charCodeAt(i);
			if(c <= 127) r += 1; else if(c <= 2047) r += 2; else if(c <= 65535) r += 3; else r += 4;
		}
		return r;
	}
	,_nmeResizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,clear: function() {
		this.set_length(this.position = 0);
	}
	,nmeFromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b.bufferValue);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,nmeGet: function(pos) {
		return this.data.getUint8(pos);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeSet: function(p,v) {
		this.data.setUint8(p,v);
	}
	,readBoolean: function() {
		return this.data.getUint8(this.position++) != 0;
	}
	,readByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		if(offset < 0 || length < 0) throw new js__$Boot_HaxeError(new flash_errors_IOError("Read error - Out of bounds"));
		var l = offset + length;
		if(bytes.length < l) bytes.set_length(l);
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var r = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return r;
	}
	,readFloat: function() {
		var r = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return r;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) this.set_length(len);
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var r = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return r;
	}
	,readShort: function() {
		var r = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return r;
	}
	,readUnsignedByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var r = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return r;
	}
	,readUTF: function() {
		return this.readUTFBytes(this.readUnsignedShort());
	}
	,readUTFBytes: function(len) {
		var r = "";
		var max = this.position + len;
		while(this.position < max) {
			var c = this.data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				r += String.fromCharCode(c);
			} else if(c < 224) r += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = this.data.getUint8(this.position++);
				r += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | this.data.getUint8(this.position++) & 127);
			} else {
				var c21 = this.data.getUint8(this.position++);
				var c3 = this.data.getUint8(this.position++);
				r += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | this.data.getUint8(this.position++) & 127);
			}
		}
		return r;
	}
	,toString: function() {
		var o = this.position;
		var r;
		this.position = 0;
		r = this.readUTFBytes(this.length);
		this.position = o;
		return r;
	}
	,toBase64: function() {
		var o = this;
		var q = o.position;
		var l = o.length;
		var p = -1;
		var v = o.data;
		var r = "";
		var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var a;
		var b;
		var c;
		while(++p < l) {
			a = v.getUint8(p);
			if(++p < l) b = v.getUint8(p); else b = 0;
			if(++p < l) c = v.getUint8(p); else c = 0;
			r += m.charAt(a >> 2) + m.charAt((a & 3) << 4 | b >> 4) + (p - 1 < l?m.charAt((b & 15) << 2 | c >> 6):"=") + (p < l?m.charAt(c & 63):"=");
		}
		return r;
	}
	,writeBoolean: function(v) {
		this.writeByte(v?1:0);
	}
	,writeByte: function(v) {
		var l = this.position + 1;
		if(this.length < l) this.set_length(l);
		var data = this.data;
		data.setInt8(this.position,v);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new js__$Boot_HaxeError(new flash_errors_IOError("Write error - Out of bounds"));
		var l = this.position + length;
		if(this.length < l) this.set_length(l);
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var l = this.position + 8;
		if(this.length < l) this.set_length(l);
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var l = this.position + 4;
		if(this.length < l) this.set_length(l);
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var l = this.position + 4;
		if(this.length < l) this.set_length(l);
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var l = this.position + 2;
		if(this.length < l) this.set_length(l);
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var l = this.position + 4;
		if(this.length < l) this.set_length(l);
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var l = this.position + 2;
		if(this.length < l) this.set_length(l);
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var i = -1;
		var l = value.length;
		var c;
		while(++i < l) {
			c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this._nmeResizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this._nmeResizeBuffer(this.allocated = value);
		return this.length = value;
	}
	,__class__: flash_utils_ByteArray
	,__properties__: {set_length:"set_length",set_endian:"set_endian",get_endian:"get_endian",get_bytesAvailable:"get_bytesAvailable"}
};
var flash_utils_Endian = function() { };
$hxClasses["flash.utils.Endian"] = flash_utils_Endian;
flash_utils_Endian.__name__ = ["flash","utils","Endian"];
var flixel_FlxCamera = function(X,Y,Width,Height,Zoom) {
	if(Zoom == null) Zoom = 0;
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._fxShakeDirection = 0;
	this._fxShakeComplete = null;
	this._fxShakeDuration = 0;
	this._fxShakeIntensity = 0;
	this._fxFadeAlpha = 0;
	this._fxFadeComplete = null;
	this._fxFadeIn = false;
	this._fxFadeDuration = 0;
	this._fxFadeColor = 0;
	this._fxFlashAlpha = 0;
	this._fxFlashComplete = null;
	this._fxFlashDuration = 0;
	this._fxFlashColor = 0;
	this.antialiasing = false;
	this.color = -1;
	this.angle = 0;
	this.alpha = 1;
	this.useBgAlphaBlending = false;
	this.regen = false;
	this.bounds = null;
	this.deadzone = null;
	this.followLerp = 0;
	this.target = null;
	flixel_FlxBasic.call(this);
	this._scrollTarget = flixel_util_FlxPoint.get(null,null);
	this.x = X;
	this.y = Y;
	this.set_width(Width <= 0?flixel_FlxG.width:Width);
	this.set_height(Height <= 0?flixel_FlxG.height:Height);
	this.scroll = flixel_util_FlxPoint.get(null,null);
	this.followLead = flixel_util_FlxPoint.get(null,null);
	this._point = flixel_util_FlxPoint.get(null,null);
	this._flashOffset = flixel_util_FlxPoint.get(null,null);
	this.screen = new flixel_FlxSprite();
	this.buffer = new flash_display_BitmapData(this.width,this.height,true,0);
	this.screen.set_pixels(this.buffer);
	this.screen.origin.set();
	this._flashBitmap = new flash_display_Bitmap(this.buffer);
	this._flashBitmap.set_x(-this.width * 0.5);
	this._flashBitmap.set_y(-this.height * 0.5);
	this.set_color(16777215);
	this.flashSprite = new flash_display_Sprite();
	this.set_zoom(Zoom);
	this._flashOffset.set(this.width * 0.5 * this.zoom,this.height * 0.5 * this.zoom);
	this.flashSprite.set_x(this.x + this._flashOffset.x);
	this.flashSprite.set_y(this.y + this._flashOffset.y);
	this.flashSprite.addChild(this._flashBitmap);
	this._flashRect = new flash_geom_Rectangle(0,0,this.width,this.height);
	this._flashPoint = new flash_geom_Point();
	this._fxShakeOffset = flixel_util_FlxPoint.get(null,null);
	this._fill = new flash_display_BitmapData(this.width,this.height,true,0);
	this.bgColor = flixel_FlxG.cameras.get_bgColor();
};
$hxClasses["flixel.FlxCamera"] = flixel_FlxCamera;
flixel_FlxCamera.__name__ = ["flixel","FlxCamera"];
flixel_FlxCamera.__super__ = flixel_FlxBasic;
flixel_FlxCamera.prototype = $extend(flixel_FlxBasic.prototype,{
	x: null
	,y: null
	,style: null
	,target: null
	,followLerp: null
	,deadzone: null
	,bounds: null
	,scroll: null
	,buffer: null
	,regen: null
	,bgColor: null
	,screen: null
	,useBgAlphaBlending: null
	,flashSprite: null
	,width: null
	,height: null
	,zoom: null
	,alpha: null
	,angle: null
	,color: null
	,antialiasing: null
	,followLead: null
	,_flashRect: null
	,_flashPoint: null
	,_flashOffset: null
	,_fxFlashColor: null
	,_fxFlashDuration: null
	,_fxFlashComplete: null
	,_fxFlashAlpha: null
	,_fxFadeColor: null
	,_lastTargetPosition: null
	,_scrollTarget: null
	,_fxFadeDuration: null
	,_fxFadeIn: null
	,_fxFadeComplete: null
	,_fxFadeAlpha: null
	,_fxShakeIntensity: null
	,_fxShakeDuration: null
	,_fxShakeComplete: null
	,_fxShakeOffset: null
	,_fxShakeDirection: null
	,_point: null
	,_fill: null
	,_flashBitmap: null
	,destroy: function() {
		this.screen = flixel_util_FlxDestroyUtil.destroy(this.screen);
		this.buffer = null;
		this._flashBitmap = null;
		this._fill = flixel_util_FlxDestroyUtil.dispose(this._fill);
		this.scroll = flixel_util_FlxDestroyUtil.put(this.scroll);
		this.deadzone = flixel_util_FlxDestroyUtil.put(this.deadzone);
		this.bounds = flixel_util_FlxDestroyUtil.put(this.bounds);
		this.target = null;
		this.flashSprite = null;
		this._flashRect = null;
		this._flashPoint = null;
		this._fxFlashComplete = null;
		this._fxFadeComplete = null;
		this._fxShakeComplete = null;
		this._fxShakeOffset = null;
		flixel_FlxBasic.prototype.destroy.call(this);
	}
	,update: function() {
		if(this.target != null) this.updateFollow();
		if(this.bounds != null) {
			this.scroll.set_x(flixel_util_FlxMath.bound(this.scroll.x,this.bounds.x,this.bounds.get_right() - this.width));
			this.scroll.set_y(flixel_util_FlxMath.bound(this.scroll.y,this.bounds.y,this.bounds.get_bottom() - this.height));
		}
		this.updateFlash();
		this.updateFade();
		this.updateShake();
	}
	,updateFollow: function() {
		if(this.deadzone == null) this.focusOn(this.target.getMidpoint(this._point)); else {
			var edge;
			var targetX = this.target.x;
			var targetY = this.target.y;
			if(this.style == 4) {
				if(targetX > this.scroll.x + this.width) {
					var _g = this._scrollTarget;
					_g.set_x(_g.x + this.width);
				} else if(targetX < this.scroll.x) {
					var _g1 = this._scrollTarget;
					_g1.set_x(_g1.x - this.width);
				}
				if(targetY > this.scroll.y + this.height) {
					var _g2 = this._scrollTarget;
					_g2.set_y(_g2.y + this.height);
				} else if(targetY < this.scroll.y) {
					var _g3 = this._scrollTarget;
					_g3.set_y(_g3.y - this.height);
				}
			} else {
				edge = targetX - this.deadzone.x;
				if(this._scrollTarget.x > edge) this._scrollTarget.set_x(edge);
				edge = targetX + this.target.get_width() - this.deadzone.x - this.deadzone.width;
				if(this._scrollTarget.x < edge) this._scrollTarget.set_x(edge);
				edge = targetY - this.deadzone.y;
				if(this._scrollTarget.y > edge) this._scrollTarget.set_y(edge);
				edge = targetY + this.target.get_height() - this.deadzone.y - this.deadzone.height;
				if(this._scrollTarget.y < edge) this._scrollTarget.set_y(edge);
			}
			if(js_Boot.__instanceof(this.target,flixel_FlxSprite)) {
				if(this._lastTargetPosition == null) this._lastTargetPosition = flixel_util_FlxPoint.get(this.target.x,this.target.y);
				var _g4 = this._scrollTarget;
				_g4.set_x(_g4.x + (this.target.x - this._lastTargetPosition.x) * this.followLead.x);
				var _g5 = this._scrollTarget;
				_g5.set_y(_g5.y + (this.target.y - this._lastTargetPosition.y) * this.followLead.y);
				this._lastTargetPosition.set_x(this.target.x);
				this._lastTargetPosition.set_y(this.target.y);
			}
			if(this.followLerp == 0) this.scroll.copyFrom(this._scrollTarget); else {
				var _g6 = this.scroll;
				_g6.set_x(_g6.x + (this._scrollTarget.x - this.scroll.x) * flixel_FlxG.elapsed / (flixel_FlxG.elapsed + this.followLerp * flixel_FlxG.elapsed));
				var _g7 = this.scroll;
				_g7.set_y(_g7.y + (this._scrollTarget.y - this.scroll.y) * flixel_FlxG.elapsed / (flixel_FlxG.elapsed + this.followLerp * flixel_FlxG.elapsed));
			}
		}
	}
	,updateFlash: function() {
		if(this._fxFlashAlpha > 0.0) {
			this._fxFlashAlpha -= flixel_FlxG.elapsed / this._fxFlashDuration;
			if(this._fxFlashAlpha <= 0 && this._fxFlashComplete != null) this._fxFlashComplete();
		}
	}
	,updateFade: function() {
		if(this._fxFadeAlpha > 0.0 && this._fxFadeAlpha < 1.0) {
			if(this._fxFadeIn) {
				this._fxFadeAlpha -= flixel_FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha <= 0.0) {
					this._fxFadeAlpha = 0.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			} else {
				this._fxFadeAlpha += flixel_FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha >= 1.0) {
					this._fxFadeAlpha = 1.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			}
		}
	}
	,updateShake: function() {
		if(this._fxShakeDuration > 0) {
			this._fxShakeDuration -= flixel_FlxG.elapsed;
			if(this._fxShakeDuration <= 0) {
				this._fxShakeOffset.set();
				if(this._fxShakeComplete != null) this._fxShakeComplete();
			} else {
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 1) this._fxShakeOffset.set_x(((flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * this._fxShakeIntensity * this.width * 2 - this._fxShakeIntensity * this.width) * this.zoom);
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 2) this._fxShakeOffset.set_y(((flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * this._fxShakeIntensity * this.height * 2 - this._fxShakeIntensity * this.height) * this.zoom);
			}
			if(this.target != null) {
				this.flashSprite.set_x(this.x + this._flashOffset.x);
				this.flashSprite.set_y(this.y + this._flashOffset.y);
			}
		}
	}
	,follow: function(Target,Style,Offset,Lerp) {
		if(Lerp == null) Lerp = 0;
		if(Style == null) Style = 0;
		this.style = Style;
		this.target = Target;
		this.followLerp = Lerp;
		var helper;
		var w = 0;
		var h = 0;
		this._lastTargetPosition = null;
		switch(Style) {
		case 1:
			var w1;
			w1 = this.width / 8 + (Offset != null?Offset.x:0);
			var h1;
			h1 = this.height / 3 + (Offset != null?Offset.y:0);
			this.deadzone = flixel_util_FlxRect.get((this.width - w1) / 2,(this.height - h1) / 2 - h1 * 0.25,w1,h1);
			break;
		case 2:
			helper = Math.max(this.width,this.height) / 4;
			this.deadzone = flixel_util_FlxRect.get((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 3:
			helper = Math.max(this.width,this.height) / 8;
			this.deadzone = flixel_util_FlxRect.get((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 0:
			if(this.target != null) {
				w = this.target.get_width() + (Offset != null?Offset.x:0);
				h = this.target.get_height() + (Offset != null?Offset.y:0);
			}
			this.deadzone = flixel_util_FlxRect.get((this.width - w) / 2,(this.height - h) / 2 - h * 0.25,w,h);
			break;
		case 4:
			this.deadzone = flixel_util_FlxRect.get(0,0,this.width,this.height);
			break;
		default:
			this.deadzone = null;
		}
	}
	,focusOn: function(point) {
		this.scroll.set(point.x - this.width * 0.5,point.y - this.height * 0.5);
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		if(!Force && this._fxFlashAlpha > 0.0) return;
		this._fxFlashColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFlashDuration = Duration;
		this._fxFlashComplete = OnComplete;
		this._fxFlashAlpha = 1.0;
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		if(!Force && this._fxFadeAlpha > 0.0) return;
		this._fxFadeColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFadeIn = FadeIn;
		this._fxFadeDuration = Duration;
		this._fxFadeComplete = OnComplete;
		if(this._fxFadeIn) this._fxFadeAlpha = 0.999999; else this._fxFadeAlpha = 0.0000000000000001;
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(!Force && (this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0)) return;
		this._fxShakeIntensity = Intensity;
		this._fxShakeDuration = Duration;
		this._fxShakeComplete = OnComplete;
		this._fxShakeDirection = Direction;
		this._fxShakeOffset.set();
	}
	,stopFX: function() {
		this._fxFlashAlpha = 0.0;
		this._fxFadeAlpha = 0.0;
		this._fxShakeDuration = 0;
		this.flashSprite.set_x(this.x + this._flashOffset.x);
		this.flashSprite.set_y(this.y + this._flashOffset.y);
	}
	,copyFrom: function(Camera) {
		if(Camera.bounds == null) this.bounds = null; else {
			if(this.bounds == null) this.bounds = flixel_util_FlxRect.get(null,null,null,null);
			this.bounds.copyFrom(Camera.bounds);
		}
		this.target = Camera.target;
		if(this.target != null) {
			if(Camera.deadzone == null) this.deadzone = null; else {
				if(this.deadzone == null) this.deadzone = flixel_util_FlxRect.get(null,null,null,null);
				this.deadzone.copyFrom(Camera.deadzone);
			}
		}
		return this;
	}
	,fill: function(Color,BlendAlpha,FxAlpha,graphics) {
		if(FxAlpha == null) FxAlpha = 1.0;
		if(BlendAlpha == null) BlendAlpha = true;
		if(BlendAlpha) {
			this._fill.fillRect(this._flashRect,Color);
			this.buffer.copyPixels(this._fill,this._flashRect,this._flashPoint,null,null,BlendAlpha);
		} else this.buffer.fillRect(this._flashRect,Color);
	}
	,drawFX: function() {
		var alphaComponent;
		if(this._fxFlashAlpha > 0.0) {
			alphaComponent = this._fxFlashColor >> 24 & 255;
			this.fill((((alphaComponent <= 0?255:alphaComponent) * this._fxFlashAlpha | 0) << 24) + (this._fxFlashColor & 16777215));
		}
		if(this._fxFadeAlpha > 0.0) {
			alphaComponent = this._fxFadeColor >> 24 & 255;
			this.fill((((alphaComponent <= 0?255:alphaComponent) * this._fxFadeAlpha | 0) << 24) + (this._fxFadeColor & 16777215));
		}
		if(this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0) {
			var _g = this.flashSprite;
			_g.set_x(_g.x + this._fxShakeOffset.x);
			var _g1 = this.flashSprite;
			_g1.set_y(_g1.y + this._fxShakeOffset.y);
		}
	}
	,checkResize: function() {
		if(this.regen) {
			if(this.width != this.buffer.component.width || this.height != this.buffer.component.height) {
				flixel_FlxG.bitmap.remove(this.screen.cachedGraphics.key);
				this.buffer = new flash_display_BitmapData(this.width,this.height,true,0);
				this.screen.set_pixels(this.buffer);
				this.screen.origin.set();
				this._flashBitmap.set_bitmapData(this.buffer);
				this._flashRect.width = this.width;
				this._flashRect.height = this.height;
				this._fill.dispose();
				this._fill = new flash_display_BitmapData(this.width,this.height,true,0);
			}
			this.regen = false;
		}
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
	}
	,setBounds: function(X,Y,Width,Height,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(this.bounds == null) this.bounds = flixel_util_FlxRect.get(null,null,null,null);
		this.bounds.set(X,Y,Width,Height);
		if(UpdateWorld) flixel_FlxG.worldBounds.copyFrom(this.bounds);
		this.update();
	}
	,setScale: function(X,Y) {
		this.flashSprite.set_scaleX(X);
		this.flashSprite.set_scaleY(Y);
		this._flashOffset.set_x(this.width * 0.5 * X);
		this._flashOffset.set_y(this.height * 0.5 * Y);
	}
	,getScale: function() {
		return this._point.set(this.flashSprite.scaleX,this.flashSprite.scaleY);
	}
	,set_width: function(Value) {
		if(Value > 0) {
			this.width = Value;
			if(this._flashBitmap != null) {
				this.regen = Value != this.buffer.component.width;
				this._flashOffset.set_x(this.width * 0.5 * this.zoom);
				this._flashBitmap.set_x(-this.width * 0.5);
			}
		}
		return Value;
	}
	,set_height: function(Value) {
		if(Value > 0) {
			this.height = Value;
			if(this._flashBitmap != null) {
				this.regen = Value != this.buffer.component.height;
				this._flashOffset.set_y(this.height * 0.5 * this.zoom);
				this._flashBitmap.set_y(-this.height * 0.5);
			}
		}
		return Value;
	}
	,set_zoom: function(Zoom) {
		if(Zoom == 0) this.zoom = flixel_FlxCamera.defaultZoom; else this.zoom = Zoom;
		this.setScale(this.zoom,this.zoom);
		return this.zoom;
	}
	,set_alpha: function(Alpha) {
		this.alpha = flixel_util_FlxMath.bound(Alpha,0,1);
		this._flashBitmap.set_alpha(Alpha);
		return Alpha;
	}
	,set_angle: function(Angle) {
		this.angle = Angle;
		this.flashSprite.set_rotation(Angle);
		return Angle;
	}
	,set_color: function(Color) {
		this.color = Color & 16777215;
		if(this._flashBitmap != null) {
			var colorTransform = this._flashBitmap.transform.colorTransform;
			colorTransform.redMultiplier = (this.color >> 16) / 255;
			colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
			colorTransform.blueMultiplier = (this.color & 255) / 255;
			this._flashBitmap.transform.set_colorTransform(colorTransform);
		}
		return Color;
	}
	,set_antialiasing: function(Antialiasing) {
		this.antialiasing = Antialiasing;
		this._flashBitmap.smoothing = Antialiasing;
		return Antialiasing;
	}
	,__class__: flixel_FlxCamera
	,__properties__: $extend(flixel_FlxBasic.prototype.__properties__,{set_antialiasing:"set_antialiasing",set_color:"set_color",set_angle:"set_angle",set_alpha:"set_alpha",set_zoom:"set_zoom",set_height:"set_height",set_width:"set_width"})
});
var flixel_system_FlxVersion = function(Major,Minor,Patch,PatchVersion) {
	if(PatchVersion == null) PatchVersion = "";
	this.major = Major;
	this.minor = Minor;
	this.patch = Patch;
	this.patchVersion = PatchVersion;
};
$hxClasses["flixel.system.FlxVersion"] = flixel_system_FlxVersion;
flixel_system_FlxVersion.__name__ = ["flixel","system","FlxVersion"];
flixel_system_FlxVersion.prototype = {
	major: null
	,minor: null
	,patch: null
	,patchVersion: null
	,toString: function() {
		var patchVer = "";
		if(this.patchVersion != null && this.patchVersion != "") patchVer = "-" + this.patchVersion;
		return "HaxeFlixel " + this.major + "." + this.minor + "." + this.patch + patchVer;
	}
	,__class__: flixel_system_FlxVersion
};
var flixel_util_FlxPool_$flixel_$util_$FlxPoint = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_util_FlxPoint"] = flixel_util_FlxPool_$flixel_$util_$FlxPoint;
flixel_util_FlxPool_$flixel_$util_$FlxPoint.__name__ = ["flixel","util","FlxPool_flixel_util_FlxPoint"];
flixel_util_FlxPool_$flixel_$util_$FlxPoint.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel_util_FlxPool_$flixel_$util_$FlxPoint
	,__properties__: {get_length:"get_length"}
};
var flixel_util_FlxPoint = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._inPool = false;
	this._weak = false;
	this.y = 0;
	this.x = 0;
	this.set(X,Y);
};
$hxClasses["flixel.util.FlxPoint"] = flixel_util_FlxPoint;
flixel_util_FlxPoint.__name__ = ["flixel","util","FlxPoint"];
flixel_util_FlxPoint.__interfaces__ = [flixel_interfaces_IFlxPooled];
flixel_util_FlxPoint.get = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	var point = flixel_util_FlxPoint._pool.get().set(X,Y);
	point._inPool = false;
	return point;
};
flixel_util_FlxPoint.weak = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	var point = flixel_util_FlxPoint._pool.get().set(X,Y);
	point._weak = true;
	return point;
};
flixel_util_FlxPoint.prototype = {
	x: null
	,y: null
	,_weak: null
	,_inPool: null
	,put: function() {
		if(!this._inPool) {
			this._inPool = true;
			flixel_util_FlxPoint._pool.putUnsafe(this);
		}
	}
	,putWeak: function() {
		if(this._weak) this.put();
	}
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
		return this;
	}
	,add: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var _g = this;
		_g.set_x(_g.x + X);
		var _g1 = this;
		_g1.set_y(_g1.y + Y);
		return this;
	}
	,addPoint: function(point) {
		var _g = this;
		_g.set_x(_g.x + point.x);
		var _g1 = this;
		_g1.set_y(_g1.y + point.y);
		if(point._weak) point.put();
		return this;
	}
	,subtract: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var _g = this;
		_g.set_x(_g.x - X);
		var _g1 = this;
		_g1.set_y(_g1.y - Y);
		return this;
	}
	,subtractPoint: function(point) {
		var _g = this;
		_g.set_x(_g.x - point.x);
		var _g1 = this;
		_g1.set_y(_g1.y - point.y);
		if(point._weak) point.put();
		return this;
	}
	,copyFrom: function(point) {
		this.set_x(point.x);
		this.set_y(point.y);
		return this;
	}
	,copyTo: function(point) {
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		point.set_x(this.x);
		point.set_y(this.y);
		return point;
	}
	,copyFromFlash: function(FlashPoint) {
		this.set_x(FlashPoint.x);
		this.set_y(FlashPoint.y);
		return this;
	}
	,copyToFlash: function(FlashPoint) {
		FlashPoint.x = this.x;
		FlashPoint.y = this.y;
		return FlashPoint;
	}
	,inCoords: function(RectX,RectY,RectWidth,RectHeight) {
		return flixel_util_FlxMath.pointInCoordinates(this.x,this.y,RectX,RectY,RectWidth,RectHeight);
	}
	,inFlxRect: function(Rect) {
		return flixel_util_FlxMath.pointInFlxRect(this.x,this.y,Rect);
	}
	,distanceTo: function(AnotherPoint) {
		return flixel_util_FlxMath.getDistance(this,AnotherPoint);
	}
	,floor: function() {
		this.set_x(Math.floor(this.x));
		this.set_y(Math.floor(this.y));
		return this;
	}
	,ceil: function() {
		this.set_x(Math.ceil(this.x));
		this.set_y(Math.ceil(this.y));
		return this;
	}
	,destroy: function() {
	}
	,toString: function() {
		return flixel_util_FlxStringUtil.getDebugString([flixel_util_LabelValuePair._pool.get().create("x",this.x),flixel_util_LabelValuePair._pool.get().create("y",this.y)]);
	}
	,set_x: function(Value) {
		return this.x = Value;
	}
	,set_y: function(Value) {
		return this.y = Value;
	}
	,__class__: flixel_util_FlxPoint
	,__properties__: {set_y:"set_y",set_x:"set_x"}
};
var flixel_system_scaleModes_BaseScaleMode = function() {
	this.deviceSize = flixel_util_FlxPoint.get(null,null);
	this.gameSize = flixel_util_FlxPoint.get(null,null);
	this.scale = flixel_util_FlxPoint.get(null,null);
	this.offset = flixel_util_FlxPoint.get(null,null);
};
$hxClasses["flixel.system.scaleModes.BaseScaleMode"] = flixel_system_scaleModes_BaseScaleMode;
flixel_system_scaleModes_BaseScaleMode.__name__ = ["flixel","system","scaleModes","BaseScaleMode"];
flixel_system_scaleModes_BaseScaleMode.prototype = {
	deviceSize: null
	,gameSize: null
	,scale: null
	,offset: null
	,onMeasure: function(Width,Height) {
		this.updateGameSize(Width,Height);
		this.updateDeviceSize(Width,Height);
		this.updateScaleOffset();
		this.updateGameScale();
		this.updateGamePosition();
	}
	,updateGameSize: function(Width,Height) {
		this.gameSize.set(Width,Height);
	}
	,updateDeviceSize: function(Width,Height) {
		this.deviceSize.set(Width,Height);
	}
	,updateScaleOffset: function() {
		this.scale.set_x(this.gameSize.x / flixel_FlxG.width);
		this.scale.set_y(this.gameSize.y / flixel_FlxG.height);
		flixel_system_scaleModes_BaseScaleMode.zoom.set(flixel_FlxCamera.defaultZoom,flixel_FlxCamera.defaultZoom);
		if(flixel_FlxG.camera != null) {
			flixel_system_scaleModes_BaseScaleMode.zoom.set_x(flixel_FlxG.camera.getScale().x);
			flixel_system_scaleModes_BaseScaleMode.zoom.set_y(flixel_FlxG.camera.getScale().y);
		}
		var _g = this.scale;
		_g.set_x(_g.x / flixel_system_scaleModes_BaseScaleMode.zoom.x);
		var _g1 = this.scale;
		_g1.set_y(_g1.y / flixel_system_scaleModes_BaseScaleMode.zoom.y);
		this.offset.set_x(Math.ceil((this.deviceSize.x - this.gameSize.x) * 0.5));
		this.offset.set_y(Math.ceil((this.deviceSize.y - this.gameSize.y) * 0.5));
	}
	,updateGameScale: function() {
	}
	,updateGamePosition: function() {
		flixel_FlxG.game.set_x(this.offset.x);
		flixel_FlxG.game.set_y(this.offset.y);
	}
	,__class__: flixel_system_scaleModes_BaseScaleMode
};
var flixel_system_scaleModes_RatioScaleMode = function() {
	flixel_system_scaleModes_BaseScaleMode.call(this);
};
$hxClasses["flixel.system.scaleModes.RatioScaleMode"] = flixel_system_scaleModes_RatioScaleMode;
flixel_system_scaleModes_RatioScaleMode.__name__ = ["flixel","system","scaleModes","RatioScaleMode"];
flixel_system_scaleModes_RatioScaleMode.__super__ = flixel_system_scaleModes_BaseScaleMode;
flixel_system_scaleModes_RatioScaleMode.prototype = $extend(flixel_system_scaleModes_BaseScaleMode.prototype,{
	updateGameSize: function(Width,Height) {
		var ratio = flixel_FlxG.width / flixel_FlxG.height;
		var realRatio = Width / Height;
		if(realRatio < ratio) {
			this.gameSize.set_x(Width);
			this.gameSize.set_y(Math.floor(this.gameSize.x / ratio));
		} else {
			this.gameSize.set_y(Height);
			this.gameSize.set_x(Math.floor(this.gameSize.y * ratio));
		}
	}
	,__class__: flixel_system_scaleModes_RatioScaleMode
});
var flixel_system_frontEnds_BitmapFrontEnd = function() {
	this.clearCache();
};
$hxClasses["flixel.system.frontEnds.BitmapFrontEnd"] = flixel_system_frontEnds_BitmapFrontEnd;
flixel_system_frontEnds_BitmapFrontEnd.__name__ = ["flixel","system","frontEnds","BitmapFrontEnd"];
flixel_system_frontEnds_BitmapFrontEnd.prototype = {
	_cache: null
	,dumpCache: function() {
	}
	,checkCache: function(Key) {
		return this._cache.exists(Key) && this._cache.get(Key) != null;
	}
	,create: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		var key = Key;
		if(key == null) {
			key = Width + "x" + Height + ":" + Color;
			if(Unique && (this._cache.exists(key) && this._cache.get(key) != null)) key = this.getUniqueKey(key);
		}
		if(!(this._cache.exists(key) && this._cache.get(key) != null)) {
			var value = new flixel_util_loaders_CachedGraphics(key,new flash_display_BitmapData(Width,Height,true,Color));
			this._cache.set(key,value);
		}
		return this._cache.get(key);
	}
	,add: function(Graphic,Unique,Key) {
		if(Unique == null) Unique = false;
		return this.addWithSpaces(Graphic,0,0,1,1,Unique,Key);
	}
	,addWithSpaces: function(Graphic,FrameWidth,FrameHeight,SpacingX,SpacingY,Unique,Key) {
		if(Unique == null) Unique = false;
		if(SpacingY == null) SpacingY = 1;
		if(SpacingX == null) SpacingX = 1;
		if(Graphic == null) return null;
		var region = null;
		var graphic = null;
		var isClass = false;
		var isBitmap = false;
		var isRegion = false;
		var isGraphics = false;
		if(js_Boot.__instanceof(Graphic,flixel_util_loaders_CachedGraphics)) {
			isGraphics = true;
			graphic = js_Boot.__cast(Graphic , flixel_util_loaders_CachedGraphics);
			if(!Unique && (FrameWidth <= 0 && FrameHeight <= 0)) return graphic;
		} else if(js_Boot.__instanceof(Graphic,Class)) isClass = true; else if(js_Boot.__instanceof(Graphic,flash_display_BitmapData)) isBitmap = true; else if(js_Boot.__instanceof(Graphic,flixel_util_loaders_TextureRegion)) {
			isRegion = true;
			region = js_Boot.__cast(Graphic , flixel_util_loaders_TextureRegion);
		} else if(typeof(Graphic) == "string") {
		} else return null;
		var additionalKey = "";
		if(FrameWidth > 0 || FrameHeight > 0) additionalKey = "FrameSize:" + FrameWidth + "_" + FrameHeight + "_Spacing:" + SpacingX + "_" + SpacingY;
		var key = Key;
		if(key == null) {
			if(isClass) key = Type.getClassName(js_Boot.__cast(Graphic , Class)); else if(isBitmap) {
				if(!Unique) {
					key = this.getCacheKeyFor(Graphic);
					if(key == null) key = this.getUniqueKey();
				}
			} else if(isRegion) key = region.data.key; else if(isGraphics) key = graphic.key; else key = Graphic;
			key += additionalKey;
			if(Unique) key = this.getUniqueKey(key == null?"pixels":key);
		}
		if(!(this._cache.exists(key) && this._cache.get(key) != null)) {
			var bd = null;
			if(isClass) bd = Type.createInstance(js_Boot.__cast(Graphic , Class),[0,0]); else if(isBitmap) bd = Graphic; else if(isRegion) bd = region.data.bitmap; else if(isGraphics) bd = graphic.bitmap; else bd = flixel_system_FlxAssets.getBitmapData(Graphic);
			if(FrameWidth > 0 || FrameHeight > 0) {
				var numHorizontalFrames;
				if(FrameWidth == 0) numHorizontalFrames = 1; else numHorizontalFrames = bd.component.width / FrameWidth | 0;
				var numVerticalFrames;
				if(FrameHeight == 0) numVerticalFrames = 1; else numVerticalFrames = bd.component.height / FrameHeight | 0;
				if(FrameWidth == 0) FrameWidth = bd.component.width; else FrameWidth = FrameWidth;
				if(FrameHeight == 0) FrameHeight = bd.component.height; else FrameHeight = FrameHeight;
				var tempBitmap = new flash_display_BitmapData(bd.component.width + numHorizontalFrames * SpacingX,bd.component.height + numVerticalFrames * SpacingY,true,0);
				tempBitmap.lock();
				var tempRect = new flash_geom_Rectangle(0,0,FrameWidth,FrameHeight);
				var tempPoint = new flash_geom_Point();
				var _g = 0;
				while(_g < numHorizontalFrames) {
					var i = _g++;
					tempPoint.x = i * (FrameWidth + SpacingX);
					tempRect.x = i * FrameWidth;
					var _g2 = 0;
					var _g1 = numVerticalFrames;
					while(_g2 < _g1) {
						var j = _g2++;
						tempPoint.y = j * (FrameHeight + SpacingY);
						tempRect.y = j * FrameHeight;
						tempBitmap.copyPixels(bd,tempRect,tempPoint);
					}
				}
				tempBitmap.unlock();
				bd = tempBitmap;
			}
			if(Unique) bd = bd.clone();
			var co = new flixel_util_loaders_CachedGraphics(key,bd);
			if(isClass && !Unique) co.assetsClass = Graphic; else if(!isClass && !isBitmap && !isRegion && !Unique) co.assetsKey = Graphic;
			this._cache.set(key,co);
		}
		return this._cache.get(key);
	}
	,get: function(key) {
		return this._cache.get(key);
	}
	,getCacheKeyFor: function(bmd) {
		var $it0 = this._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var data = this._cache.get(key).bitmap;
			if(data == bmd) return key;
		}
		return null;
	}
	,getUniqueKey: function(baseKey) {
		if(baseKey == null) baseKey = "pixels";
		if(this._cache.exists(baseKey) && this._cache.get(baseKey) != null) {
			var inc = 0;
			var ukey;
			do ukey = baseKey + inc++; while(this._cache.exists(ukey) && this._cache.get(ukey) != null);
			baseKey = ukey;
		}
		return baseKey;
	}
	,remove: function(key) {
		if(key != null && this._cache.exists(key)) {
			var obj = this._cache.get(key);
			this.removeFromOpenFLCache(key);
			this._cache.remove(key);
			obj.destroy();
		}
	}
	,removeFromOpenFLCache: function(key) {
		openfl_Assets.cache.removeBitmapData(key);
	}
	,clearCache: function() {
		var obj;
		if(this._cache == null) this._cache = new haxe_ds_StringMap();
		var $it0 = this._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			obj = this._cache.get(key);
			if(obj != null && !obj.persist) {
				this.removeFromOpenFLCache(key);
				this._cache.remove(key);
				obj.destroy();
				obj = null;
			}
		}
	}
	,clearUnused: function() {
		var obj;
		if(this._cache != null) {
			var $it0 = this._cache.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				obj = this._cache.get(key);
				if(obj != null && obj.useCount <= 0 && !obj.persist && obj.destroyOnNoUse) this.remove(obj.key);
			}
		}
	}
	,__class__: flixel_system_frontEnds_BitmapFrontEnd
};
var flixel_system_frontEnds_BitmapLogFrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.BitmapLogFrontEnd"] = flixel_system_frontEnds_BitmapLogFrontEnd;
flixel_system_frontEnds_BitmapLogFrontEnd.__name__ = ["flixel","system","frontEnds","BitmapLogFrontEnd"];
flixel_system_frontEnds_BitmapLogFrontEnd.prototype = {
	add: function(Data,Name) {
		if(Name == null) Name = "";
	}
	,clear: function() {
	}
	,clearAt: function(Index) {
		if(Index == null) Index = -1;
	}
	,viewCache: function() {
	}
	,__class__: flixel_system_frontEnds_BitmapLogFrontEnd
};
var flixel_system_frontEnds_CameraFrontEnd = function() {
	this.useBufferLocking = false;
	this._cameraRect = new flash_geom_Rectangle();
	this.list = [];
	flixel_FlxCamera.defaultCameras = this.list;
};
$hxClasses["flixel.system.frontEnds.CameraFrontEnd"] = flixel_system_frontEnds_CameraFrontEnd;
flixel_system_frontEnds_CameraFrontEnd.__name__ = ["flixel","system","frontEnds","CameraFrontEnd"];
flixel_system_frontEnds_CameraFrontEnd.prototype = {
	add_flixel_FlxCamera: function(NewCamera) {
		flixel_FlxG.cameras.list.push(NewCamera);
		NewCamera.ID = flixel_FlxG.cameras.list.length - 1;
		return NewCamera;
	}
	,list: null
	,useBufferLocking: null
	,_cameraRect: null
	,remove: function(Camera,Destroy) {
		if(Destroy == null) Destroy = true;
		var index = HxOverrides.indexOf(this.list,Camera,0);
		if(Camera != null && index != -1) this.list.splice(index,1); else null;
		if(Destroy) Camera.destroy();
	}
	,reset: function(NewCamera) {
		this.list.splice(0,this.list.length);
		if(NewCamera == null) NewCamera = new flixel_FlxCamera(0,0,flixel_FlxG.width,flixel_FlxG.height);
		flixel_FlxG.cameras.list.push(NewCamera);
		NewCamera.ID = flixel_FlxG.cameras.list.length - 1;
		flixel_FlxG.camera = NewCamera;
		NewCamera.ID = 0;
		flixel_FlxCamera.defaultCameras = this.list;
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.flash(Color,Duration,OnComplete,Force);
		}
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.fade(Color,Duration,FadeIn,OnComplete,Force);
		}
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.shake(Intensity,Duration,OnComplete,Force,Direction);
		}
	}
	,lock: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera == null || !camera.exists || !camera.visible) continue;
			camera.checkResize();
			if(this.useBufferLocking) camera.buffer.lock();
			camera.fill(camera.bgColor,camera.useBgAlphaBlending);
			camera.screen.dirty = true;
		}
	}
	,unlock: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera == null || !camera.exists || !camera.visible) continue;
			camera.drawFX();
			if(this.useBufferLocking) camera.buffer.unlock();
			camera.screen.dirty = true;
		}
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera != null && camera.exists) {
				if(camera.active) camera.update();
				camera.flashSprite.set_x(camera.x + camera._flashOffset.x);
				camera.flashSprite.set_y(camera.y + camera._flashOffset.y);
				camera.flashSprite.set_visible(camera.visible);
			}
		}
	}
	,get_bgColor: function() {
		if(flixel_FlxG.camera == null) return -16777216; else return flixel_FlxG.camera.bgColor;
	}
	,set_bgColor: function(Color) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.bgColor = Color;
		}
		return Color;
	}
	,__class__: flixel_system_frontEnds_CameraFrontEnd
	,__properties__: {set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"}
};
var flixel_system_frontEnds_ConsoleFrontEnd = function() {
	this.autoPause = true;
};
$hxClasses["flixel.system.frontEnds.ConsoleFrontEnd"] = flixel_system_frontEnds_ConsoleFrontEnd;
flixel_system_frontEnds_ConsoleFrontEnd.__name__ = ["flixel","system","frontEnds","ConsoleFrontEnd"];
flixel_system_frontEnds_ConsoleFrontEnd.prototype = {
	autoPause: null
	,registerFunction: function(FunctionAlias,Function) {
	}
	,registerObject: function(ObjectAlias,AnyObject) {
	}
	,addCommand: function(Aliases,ProcessFunction,Help,ParamHelp,NumParams,ParamCutoff) {
		if(ParamCutoff == null) ParamCutoff = -1;
		if(NumParams == null) NumParams = 0;
	}
	,__class__: flixel_system_frontEnds_ConsoleFrontEnd
};
var flixel_system_frontEnds_DebuggerFrontEnd = function() {
	this.visible = false;
	this.drawDebug = false;
	this.precision = 3;
	this.toggleKeys = ["GRAVEACCENT","BACKSLASH"];
	this.drawDebugChanged = new flixel_util__$FlxSignal_FlxSignal0();
};
$hxClasses["flixel.system.frontEnds.DebuggerFrontEnd"] = flixel_system_frontEnds_DebuggerFrontEnd;
flixel_system_frontEnds_DebuggerFrontEnd.__name__ = ["flixel","system","frontEnds","DebuggerFrontEnd"];
flixel_system_frontEnds_DebuggerFrontEnd.prototype = {
	precision: null
	,toggleKeys: null
	,drawDebug: null
	,drawDebugChanged: null
	,visible: null
	,setLayout: function(Layout) {
	}
	,resetLayout: function() {
	}
	,addButton: function(Alignment,Icon,UpHandler,ToggleMode,UpdateLayout) {
		if(UpdateLayout == null) UpdateLayout = true;
		if(ToggleMode == null) ToggleMode = false;
		return null;
	}
	,track: function(Object,WindowTitle) {
		return null;
	}
	,addTrackerProfile: function(Profile) {
	}
	,removeButton: function(Button,UpdateLayout) {
		if(UpdateLayout == null) UpdateLayout = true;
	}
	,set_drawDebug: function(Value) {
		return this.drawDebug = Value;
	}
	,set_visible: function(Value) {
		return this.visible = Value;
	}
	,__class__: flixel_system_frontEnds_DebuggerFrontEnd
	,__properties__: {set_visible:"set_visible",set_drawDebug:"set_drawDebug"}
};
var flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$ = {};
$hxClasses["flixel.util._FlxSignal.FlxTypedSignal_Impl_"] = flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$;
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.__name__ = ["flixel","util","_FlxSignal","FlxTypedSignal_Impl_"];
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.__properties__ = {get_dispatch:"get_dispatch"}
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.add = function(this1,listener) {
	this1.add(listener);
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.addOnce = function(this1,listener) {
	this1.addOnce(listener);
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.remove = function(this1,listener) {
	this1.remove(listener);
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.has = function(this1,listener) {
	return this1.has(listener);
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.removeAll = function(this1) {
	this1.removeAll();
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.get_dispatch = function(this1) {
	return this1.dispatch;
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.toSignal0 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal0();
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.toSignal1 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal1();
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.toSignal2 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal2();
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.toSignal3 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal3();
};
flixel_util__$FlxSignal_FlxTypedSignal_$Impl_$.toSignal4 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal4();
};
var flixel_system_frontEnds_HTML5FrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.HTML5FrontEnd"] = flixel_system_frontEnds_HTML5FrontEnd;
flixel_system_frontEnds_HTML5FrontEnd.__name__ = ["flixel","system","frontEnds","HTML5FrontEnd"];
flixel_system_frontEnds_HTML5FrontEnd.prototype = {
	browserPosition: null
	,get_browser: function() {
		if(window.navigator.userAgent.indexOf(" OPR/") > -1) return "Opera"; else if(window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1) return "Chrome"; else if(window.navigator.appName == "Netscape") return "Firefox"; else if(!(!document.documentMode)) return "Internet Explorer"; else if(Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0) return "Safari";
		return "Unknown";
	}
	,get_browserPosition: function() {
		if(this.browserPosition == null) this.browserPosition = flixel_util_FlxPoint.get(0,0);
		this.browserPosition.set(window.screenX,window.screenY);
		return this.browserPosition;
	}
	,get_browserWidth: function() {
		return window.innerWidth;
	}
	,get_browserHeight: function() {
		return window.innerHeight;
	}
	,__class__: flixel_system_frontEnds_HTML5FrontEnd
	,__properties__: {get_browserPosition:"get_browserPosition",get_browserHeight:"get_browserHeight",get_browserWidth:"get_browserWidth",get_browser:"get_browser"}
};
var flixel_system_frontEnds_InputFrontEnd = function() {
	this.list = [];
};
$hxClasses["flixel.system.frontEnds.InputFrontEnd"] = flixel_system_frontEnds_InputFrontEnd;
flixel_system_frontEnds_InputFrontEnd.__name__ = ["flixel","system","frontEnds","InputFrontEnd"];
flixel_system_frontEnds_InputFrontEnd.prototype = {
	replace_flixel_input_mouse_FlxMouse: function(Old,New) {
		var i = 0;
		var success = false;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(input == Old) {
				this.list[i] = New;
				success = true;
				break;
			}
			i++;
		}
		if(success) return New;
		return null;
	}
	,add_flixel_input_gamepad_FlxGamepadManager: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,add_flixel_input_touch_FlxTouchManager: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,add_flixel_input_mouse_FlxMouse: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,add_flixel_input_keyboard_FlxKeyboard: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,list: null
	,reset: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.reset();
		}
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.update();
		}
	}
	,onFocus: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.onFocus();
		}
	}
	,onFocusLost: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.onFocusLost();
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.destroy();
			input = null;
		}
	}
	,__class__: flixel_system_frontEnds_InputFrontEnd
};
var flixel_system_frontEnds_LogFrontEnd = function() {
	this.redirectTraces = false;
	this._standardTraceFunction = haxe_Log.trace;
};
$hxClasses["flixel.system.frontEnds.LogFrontEnd"] = flixel_system_frontEnds_LogFrontEnd;
flixel_system_frontEnds_LogFrontEnd.__name__ = ["flixel","system","frontEnds","LogFrontEnd"];
flixel_system_frontEnds_LogFrontEnd.prototype = {
	redirectTraces: null
	,_standardTraceFunction: null
	,add: function(Data) {
	}
	,warn: function(Data) {
	}
	,error: function(Data) {
	}
	,notice: function(Data) {
	}
	,advanced: function(Data,Style,FireOnce) {
		if(FireOnce == null) FireOnce = false;
	}
	,clear: function() {
	}
	,set_redirectTraces: function(Redirect) {
		if(Redirect) haxe_Log.trace = $bind(this,this.processTraceData); else haxe_Log.trace = this._standardTraceFunction;
		return this.redirectTraces = Redirect;
	}
	,processTraceData: function(Data,Info) {
		var paramArray = [Data];
		if(Info.customParams != null) {
			var _g = 0;
			var _g1 = Info.customParams;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				paramArray.push(i);
			}
		}
		this.advanced(paramArray,flixel_system_debug_LogStyle.NORMAL);
	}
	,__class__: flixel_system_frontEnds_LogFrontEnd
	,__properties__: {set_redirectTraces:"set_redirectTraces"}
};
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
};
js_Boot.isClass = function(o) {
	return o.__name__;
};
js_Boot.isEnum = function(e) {
	return e.__ename__;
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var flixel_system_frontEnds_PluginFrontEnd = function() {
	this.list = [];
	this.add_flixel_plugin_PathManager(flixel_util_FlxPath.manager = new flixel_plugin_PathManager());
	this.add_flixel_plugin_TimerManager(flixel_util_FlxTimer.manager = new flixel_plugin_TimerManager());
	this.add_flixel_plugin_TweenManager(flixel_tweens_FlxTween.manager = new flixel_plugin_TweenManager());
};
$hxClasses["flixel.system.frontEnds.PluginFrontEnd"] = flixel_system_frontEnds_PluginFrontEnd;
flixel_system_frontEnds_PluginFrontEnd.__name__ = ["flixel","system","frontEnds","PluginFrontEnd"];
flixel_system_frontEnds_PluginFrontEnd.prototype = {
	add_flixel_plugin_TweenManager: function(Plugin) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Plugin,plugin,null)) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,add_flixel_plugin_TimerManager: function(Plugin) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Plugin,plugin,null)) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,add_flixel_plugin_PathManager: function(Plugin) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(flixel_util_FlxStringUtil.sameClassName(Plugin,plugin,null)) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,list: null
	,get: function(ClassType) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(plugin,ClassType)) return plugin;
		}
		return null;
	}
	,remove: function(Plugin) {
		var i = this.list.length - 1;
		while(i >= 0) {
			if(this.list[i] == Plugin) {
				this.list.splice(i,1);
				return Plugin;
			}
			i--;
		}
		return Plugin;
	}
	,removeType: function(ClassType) {
		var results = false;
		var i = this.list.length - 1;
		while(i >= 0) {
			if(js_Boot.__instanceof(this.list[i],ClassType)) {
				this.list.splice(i,1);
				results = true;
			}
			i--;
		}
		return results;
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.active) plugin.update();
		}
	}
	,draw: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.visible) plugin.draw();
		}
	}
	,onStateSwitch: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists) plugin.onStateSwitch();
		}
	}
	,onResize: function(Width,Height) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists) plugin.onResize(Width,Height);
		}
	}
	,__class__: flixel_system_frontEnds_PluginFrontEnd
};
var flixel_util_FlxPath = function(Object,Nodes,Speed,Mode,AutoRotate) {
	if(AutoRotate == null) AutoRotate = false;
	if(Mode == null) Mode = 0;
	if(Speed == null) Speed = 100;
	this._inManager = false;
	this._autoRotate = false;
	this._inc = 1;
	this._nodeIndex = 0;
	this.finished = false;
	this.active = true;
	this.autoCenter = true;
	this.angle = 0;
	this.speed = 0;
	if(Object != null) this.start(Object,Nodes,Speed,Mode,AutoRotate);
};
$hxClasses["flixel.util.FlxPath"] = flixel_util_FlxPath;
flixel_util_FlxPath.__name__ = ["flixel","util","FlxPath"];
flixel_util_FlxPath.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util_FlxPath.prototype = {
	nodes: null
	,object: null
	,speed: null
	,angle: null
	,autoCenter: null
	,active: null
	,onComplete: null
	,finished: null
	,_nodeIndex: null
	,_mode: null
	,_inc: null
	,_autoRotate: null
	,_inManager: null
	,reset: function() {
		this.autoCenter = true;
		return this;
	}
	,start: function(Object,Nodes,Speed,Mode,AutoRotate) {
		if(AutoRotate == null) AutoRotate = false;
		if(Mode == null) Mode = 0;
		if(Speed == null) Speed = 100;
		this.object = Object;
		this.nodes = Nodes;
		this.speed = Math.abs(Speed);
		this._mode = Mode;
		this._autoRotate = AutoRotate;
		this.restart();
		return this;
	}
	,restart: function() {
		if(flixel_util_FlxPath.manager != null && !this._inManager) {
			flixel_util_FlxPath.manager.add(this);
			this._inManager = true;
		}
		this.finished = false;
		this.active = true;
		if(this.nodes.length <= 0) this.active = false;
		if(this._mode == 1 || this._mode == 256) {
			this._nodeIndex = this.nodes.length - 1;
			this._inc = -1;
		} else {
			this._nodeIndex = 0;
			this._inc = 1;
		}
		this.object.set_immovable(true);
		return this;
	}
	,setNode: function(NodeIndex) {
		if(NodeIndex < 0) NodeIndex = 0; else if(NodeIndex > this.nodes.length - 1) NodeIndex = this.nodes.length - 1;
		this._nodeIndex = NodeIndex;
		this.advancePath();
	}
	,update: function() {
		flixel_util_FlxPath._point.set_x(this.object.x);
		flixel_util_FlxPath._point.set_y(this.object.y);
		if(this.autoCenter) {
			var _g = flixel_util_FlxPath._point;
			_g.set_x(_g.x + this.object.get_width() * 0.5);
			var _g1 = flixel_util_FlxPath._point;
			_g1.set_y(_g1.y + this.object.get_height() * 0.5);
		}
		var node = this.nodes[this._nodeIndex];
		var deltaX = node.x - flixel_util_FlxPath._point.x;
		var deltaY = node.y - flixel_util_FlxPath._point.y;
		var horizontalOnly = (this._mode & 65536) > 0;
		var verticalOnly = (this._mode & 1048576) > 0;
		if(horizontalOnly) {
			if((deltaX > 0?deltaX:-deltaX) < this.speed * flixel_FlxG.elapsed) node = this.advancePath();
		} else if(verticalOnly) {
			if((deltaY > 0?deltaY:-deltaY) < this.speed * flixel_FlxG.elapsed) node = this.advancePath();
		} else if(Math.sqrt(deltaX * deltaX + deltaY * deltaY) < this.speed * flixel_FlxG.elapsed) node = this.advancePath();
		if(this.speed != 0) {
			flixel_util_FlxPath._point.set_x(this.object.x);
			flixel_util_FlxPath._point.set_y(this.object.y);
			if(this.autoCenter) {
				var _g2 = flixel_util_FlxPath._point;
				_g2.set_x(_g2.x + this.object.get_width() * 0.5);
				var _g3 = flixel_util_FlxPath._point;
				_g3.set_y(_g3.y + this.object.get_height() * 0.5);
			}
			if(horizontalOnly || flixel_util_FlxPath._point.y == node.y) {
				this.object.velocity.set_x(flixel_util_FlxPath._point.x < node.x?this.speed:-this.speed);
				if(this.object.velocity.x < 0) this.angle = -90; else this.angle = 90;
				if(!horizontalOnly) this.object.velocity.set_y(0);
			} else if(verticalOnly || flixel_util_FlxPath._point.x == node.x) {
				this.object.velocity.set_y(flixel_util_FlxPath._point.y < node.y?this.speed:-this.speed);
				if(this.object.velocity.y < 0) this.angle = 0; else this.angle = 180;
				if(!verticalOnly) this.object.velocity.set_x(0);
			} else {
				this.object.velocity.set_x(flixel_util_FlxPath._point.x < node.x?this.speed:-this.speed);
				this.object.velocity.set_y(flixel_util_FlxPath._point.y < node.y?this.speed:-this.speed);
				this.angle = flixel_util_FlxAngle.getAngle(flixel_util_FlxPath._point,node);
				flixel_util_FlxAngle.rotatePoint(0,this.speed,0,0,this.angle,this.object.velocity);
			}
			if(this._autoRotate) {
				this.object.angularVelocity = 0;
				this.object.angularAcceleration = 0;
				this.object.set_angle(this.angle);
			}
			if(this.finished) this.cancel();
		}
	}
	,advancePath: function(Snap) {
		if(Snap == null) Snap = true;
		if(Snap) {
			var oldNode = this.nodes[this._nodeIndex];
			if(oldNode != null) {
				if((this._mode & 1048576) == 0) {
					this.object.set_x(oldNode.x);
					if(this.autoCenter) {
						var _g = this.object;
						_g.set_x(_g.x - this.object.get_width() * 0.5);
					}
				}
				if((this._mode & 65536) == 0) {
					this.object.set_y(oldNode.y);
					if(this.autoCenter) {
						var _g1 = this.object;
						_g1.set_y(_g1.y - this.object.get_height() * 0.5);
					}
				}
			}
		}
		var callComplete = false;
		this._nodeIndex += this._inc;
		if((this._mode & 1) > 0) {
			if(this._nodeIndex < 0) {
				this._nodeIndex = 0;
				this.finished = callComplete = true;
			}
		} else if((this._mode & 16) > 0) {
			if(this._nodeIndex >= this.nodes.length) {
				callComplete = true;
				this._nodeIndex = 0;
			}
		} else if((this._mode & 256) > 0) {
			if(this._nodeIndex < 0) {
				this._nodeIndex = this.nodes.length - 1;
				callComplete = true;
				if(this._nodeIndex < 0) this._nodeIndex = 0;
			}
		} else if((this._mode & 4096) > 0) {
			if(this._inc > 0) {
				if(this._nodeIndex >= this.nodes.length) {
					this._nodeIndex = this.nodes.length - 2;
					callComplete = true;
					if(this._nodeIndex < 0) this._nodeIndex = 0;
					this._inc = -this._inc;
				}
			} else if(this._nodeIndex < 0) {
				this._nodeIndex = 1;
				callComplete = true;
				if(this._nodeIndex >= this.nodes.length) this._nodeIndex = this.nodes.length - 1;
				if(this._nodeIndex < 0) this._nodeIndex = 0;
				this._inc = -this._inc;
			}
		} else if(this._nodeIndex >= this.nodes.length) {
			this._nodeIndex = this.nodes.length - 1;
			this.finished = callComplete = true;
		}
		if(callComplete && this.onComplete != null) this.onComplete(this);
		return this.nodes[this._nodeIndex];
	}
	,cancel: function() {
		this.finished = true;
		if(this.object != null) this.object.velocity.set(0,0);
		if(flixel_util_FlxPath.manager != null && this._inManager) {
			flixel_util_FlxPath.manager.remove(this);
			this._inManager = false;
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.nodes;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			point = flixel_util_FlxDestroyUtil.put(point);
		}
		this.nodes = null;
		this.object = null;
		this.onComplete = null;
	}
	,add: function(X,Y) {
		this.nodes.push(flixel_util_FlxPoint.get(X,Y));
		return this;
	}
	,addAt: function(X,Y,Index) {
		if(Index < 0) return this;
		if(Index > this.nodes.length) Index = this.nodes.length;
		var x = flixel_util_FlxPoint.get(X,Y);
		this.nodes.splice(Index,0,x);
		return this;
	}
	,addPoint: function(Node,AsReference) {
		if(AsReference == null) AsReference = false;
		if(AsReference) this.nodes.push(Node); else this.nodes.push(flixel_util_FlxPoint.get(Node.x,Node.y));
		return this;
	}
	,addPointAt: function(Node,Index,AsReference) {
		if(AsReference == null) AsReference = false;
		if(Index < 0) return this;
		if(Index > this.nodes.length) Index = this.nodes.length;
		if(AsReference) this.nodes.splice(Index,0,Node); else {
			var x = flixel_util_FlxPoint.get(Node.x,Node.y);
			this.nodes.splice(Index,0,x);
		}
		return this;
	}
	,remove: function(Node) {
		var index = HxOverrides.indexOf(this.nodes,Node,0);
		if(index >= 0) return this.nodes.splice(index,1)[0]; else return null;
	}
	,removeAt: function(Index) {
		if(this.nodes.length <= 0) return null;
		if(Index >= this.nodes.length) Index = this.nodes.length - 1;
		return this.nodes.splice(Index,1)[0];
	}
	,head: function() {
		if(this.nodes.length > 0) return this.nodes[0];
		return null;
	}
	,tail: function() {
		if(this.nodes.length > 0) return this.nodes[this.nodes.length - 1];
		return null;
	}
	,__class__: flixel_util_FlxPath
};
var flixel_plugin_FlxPlugin = function() {
	flixel_FlxBasic.call(this);
};
$hxClasses["flixel.plugin.FlxPlugin"] = flixel_plugin_FlxPlugin;
flixel_plugin_FlxPlugin.__name__ = ["flixel","plugin","FlxPlugin"];
flixel_plugin_FlxPlugin.__super__ = flixel_FlxBasic;
flixel_plugin_FlxPlugin.prototype = $extend(flixel_FlxBasic.prototype,{
	onStateSwitch: function() {
	}
	,onResize: function(Width,Height) {
	}
	,__class__: flixel_plugin_FlxPlugin
});
var flixel_plugin_PathManager = function() {
	this._paths = [];
	flixel_plugin_FlxPlugin.call(this);
};
$hxClasses["flixel.plugin.PathManager"] = flixel_plugin_PathManager;
flixel_plugin_PathManager.__name__ = ["flixel","plugin","PathManager"];
flixel_plugin_PathManager.__super__ = flixel_plugin_FlxPlugin;
flixel_plugin_PathManager.prototype = $extend(flixel_plugin_FlxPlugin.prototype,{
	_paths: null
	,destroy: function() {
		flixel_util_FlxArrayUtil.clearArray(this._paths);
		this._paths = null;
		flixel_plugin_FlxPlugin.prototype.destroy.call(this);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._paths;
		while(_g < _g1.length) {
			var path = _g1[_g];
			++_g;
			if(path.active) path.update();
		}
	}
	,add: function(Path) {
		this._paths.push(Path);
	}
	,remove: function(Path,ReturnInPool) {
		if(ReturnInPool == null) ReturnInPool = true;
		flixel_util_FlxArrayUtil.fastSplice_flixel_util_FlxPath(this._paths,Path);
	}
	,clear: function() {
		flixel_util_FlxArrayUtil.clearArray(this._paths);
	}
	,onStateSwitch: function() {
		flixel_util_FlxArrayUtil.clearArray(this._paths);
	}
	,__class__: flixel_plugin_PathManager
});
var flixel_util_FlxTimer = function(Time,Callback,Loops) {
	if(Loops == null) Loops = 1;
	this._inManager = false;
	this._loopsCounter = 0;
	this._timeCounter = 0;
	this.finished = false;
	this.active = true;
	this.loops = 0;
	this.time = 0;
	if(Time != null) this.start(Time,Callback,Loops);
};
$hxClasses["flixel.util.FlxTimer"] = flixel_util_FlxTimer;
flixel_util_FlxTimer.__name__ = ["flixel","util","FlxTimer"];
flixel_util_FlxTimer.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util_FlxTimer.prototype = {
	time: null
	,loops: null
	,active: null
	,finished: null
	,complete: null
	,_timeCounter: null
	,_loopsCounter: null
	,_inManager: null
	,destroy: function() {
		this.complete = null;
	}
	,start: function(Time,Callback,Loops) {
		if(Loops == null) Loops = 1;
		if(Time == null) Time = 1;
		if(flixel_util_FlxTimer.manager != null && !this._inManager) {
			flixel_util_FlxTimer.manager.add(this);
			this._inManager = true;
		}
		this.active = true;
		this.finished = false;
		this.time = Math.abs(Time);
		if(Loops < 0) Loops *= -1;
		this.loops = Loops;
		this.complete = Callback;
		this._timeCounter = 0;
		this._loopsCounter = 0;
		return this;
	}
	,reset: function(NewTime) {
		if(NewTime == null) NewTime = -1;
		if(NewTime < 0) NewTime = this.time;
		this.start(NewTime,this.complete,this.loops);
		return this;
	}
	,cancel: function() {
		this.finished = true;
		if(flixel_util_FlxTimer.manager != null && this._inManager) {
			flixel_util_FlxTimer.manager.remove(this);
			this._inManager = false;
		}
	}
	,update: function() {
		this._timeCounter += flixel_FlxG.elapsed;
		while(this._timeCounter >= this.time && this.active && !this.finished) {
			this._timeCounter -= this.time;
			this._loopsCounter++;
			if(this.complete != null) this.complete(this);
			if(this.loops > 0 && this._loopsCounter >= this.loops) this.cancel();
		}
	}
	,get_timeLeft: function() {
		return this.time - this._timeCounter;
	}
	,get_elapsedTime: function() {
		return this._timeCounter;
	}
	,get_loopsLeft: function() {
		return this.loops - this._loopsCounter;
	}
	,get_elapsedLoops: function() {
		return this._loopsCounter;
	}
	,get_progress: function() {
		if(this.time > 0) return this._timeCounter / this.time; else return 0;
	}
	,__class__: flixel_util_FlxTimer
	,__properties__: {get_progress:"get_progress",get_elapsedLoops:"get_elapsedLoops",get_loopsLeft:"get_loopsLeft",get_elapsedTime:"get_elapsedTime",get_timeLeft:"get_timeLeft"}
};
var flixel_plugin_TimerManager = function() {
	flixel_plugin_FlxPlugin.call(this);
	this._timers = [];
	this.set_visible(false);
};
$hxClasses["flixel.plugin.TimerManager"] = flixel_plugin_TimerManager;
flixel_plugin_TimerManager.__name__ = ["flixel","plugin","TimerManager"];
flixel_plugin_TimerManager.__super__ = flixel_plugin_FlxPlugin;
flixel_plugin_TimerManager.prototype = $extend(flixel_plugin_FlxPlugin.prototype,{
	_timers: null
	,destroy: function() {
		flixel_util_FlxArrayUtil.clearArray(this._timers);
		this._timers = null;
		flixel_plugin_FlxPlugin.prototype.destroy.call(this);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._timers;
		while(_g < _g1.length) {
			var timer = _g1[_g];
			++_g;
			if(timer.active && !timer.finished && timer.time > 0) timer.update();
		}
	}
	,add: function(Timer) {
		this._timers.push(Timer);
	}
	,remove: function(Timer) {
		flixel_util_FlxArrayUtil.fastSplice_flixel_util_FlxTimer(this._timers,Timer);
	}
	,clear: function() {
		flixel_util_FlxArrayUtil.clearArray(this._timers);
	}
	,onStateSwitch: function() {
		flixel_util_FlxArrayUtil.clearArray(this._timers);
	}
	,__class__: flixel_plugin_TimerManager
});
var flixel_tweens_FlxTween = function(Options) {
	this._delayToUse = 0;
	this._secondsSinceStart = 0;
	this.loopDelay = 0;
	this.startDelay = 0;
	this.executions = 0;
	this.duration = 0;
	this.active = true;
	Options = this.resolveTweenOptions(Options);
	this.set_type(Options.type);
	this.complete = Options.complete;
	this.ease = Options.ease;
	this.setDelays(Options.startDelay,Options.loopDelay);
};
$hxClasses["flixel.tweens.FlxTween"] = flixel_tweens_FlxTween;
flixel_tweens_FlxTween.__name__ = ["flixel","tweens","FlxTween"];
flixel_tweens_FlxTween.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_tweens_FlxTween.tween = function(Object,Values,Duration,Options) {
	if(Duration == null) Duration = 1;
	var tween = new flixel_tweens_misc_VarTween(Options);
	tween.tween(Object,Values,Duration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_misc_VarTween(tween);
};
flixel_tweens_FlxTween.num = function(FromValue,ToValue,Duration,Options,TweenFunction) {
	if(Duration == null) Duration = 1;
	var tween = new flixel_tweens_misc_NumTween(Options);
	tween.tween(FromValue,ToValue,Duration,TweenFunction);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_misc_NumTween(tween);
};
flixel_tweens_FlxTween.angle = function(Sprite,FromAngle,ToAngle,Duration,Options) {
	if(Duration == null) Duration = 1;
	var tween = new flixel_tweens_misc_AngleTween(Options);
	tween.tween(FromAngle,ToAngle,Duration,Sprite);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_misc_AngleTween(tween);
};
flixel_tweens_FlxTween.color = function(Sprite,Duration,FromColor,ToColor,FromAlpha,ToAlpha,Options) {
	if(ToAlpha == null) ToAlpha = 1;
	if(FromAlpha == null) FromAlpha = 1;
	if(Duration == null) Duration = 1;
	var tween = new flixel_tweens_misc_ColorTween(Options);
	tween.tween(Duration,FromColor,ToColor,FromAlpha,ToAlpha,Sprite);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_misc_ColorTween(tween);
};
flixel_tweens_FlxTween.linearMotion = function(Object,FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel_tweens_motion_LinearMotion(Options);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_motion_LinearMotion(tween);
};
flixel_tweens_FlxTween.quadMotion = function(Object,FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel_tweens_motion_QuadMotion(Options);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_motion_QuadMotion(tween);
};
flixel_tweens_FlxTween.cubicMotion = function(Object,FromX,FromY,aX,aY,bX,bY,ToX,ToY,Duration,Options) {
	if(Duration == null) Duration = 1;
	var tween = new flixel_tweens_motion_CubicMotion(Options);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,aX,aY,bX,bY,ToX,ToY,Duration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_motion_CubicMotion(tween);
};
flixel_tweens_FlxTween.circularMotion = function(Object,CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel_tweens_motion_CircularMotion(Options);
	tween.setObject(Object);
	tween.setMotion(CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_motion_CircularMotion(tween);
};
flixel_tweens_FlxTween.linearPath = function(Object,Points,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel_tweens_motion_LinearPath(Options);
	if(Points != null) {
		var _g = 0;
		while(_g < Points.length) {
			var point = Points[_g];
			++_g;
			tween.addPoint(point.x,point.y);
		}
	}
	tween.setObject(Object);
	tween.setMotion(DurationOrSpeed,UseDuration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_motion_LinearPath(tween);
};
flixel_tweens_FlxTween.quadPath = function(Object,Points,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel_tweens_motion_QuadPath(Options);
	if(Points != null) {
		var _g = 0;
		while(_g < Points.length) {
			var point = Points[_g];
			++_g;
			tween.addPoint(point.x,point.y);
		}
	}
	tween.setObject(Object);
	tween.setMotion(DurationOrSpeed,UseDuration);
	return flixel_tweens_FlxTween.manager.add_flixel_tweens_motion_QuadPath(tween);
};
flixel_tweens_FlxTween.prototype = {
	active: null
	,duration: null
	,ease: null
	,complete: null
	,type: null
	,finished: null
	,scale: null
	,backward: null
	,executions: null
	,startDelay: null
	,loopDelay: null
	,_secondsSinceStart: null
	,_delayToUse: null
	,resolveTweenOptions: function(Options) {
		if(Options == null) Options = { type : 8};
		if(Options.type == null) Options.type = 8;
		return Options;
	}
	,destroy: function() {
		this.complete = null;
		this.ease = null;
	}
	,update: function() {
		this._secondsSinceStart += flixel_FlxG.elapsed;
		var delay;
		if(this.executions > 0) delay = this.loopDelay; else delay = this.startDelay;
		this.scale = Math.max(this._secondsSinceStart - delay,0) / this.duration;
		if(this.ease != null) this.scale = this.ease(this.scale);
		if(this.backward) this.scale = 1 - this.scale;
		if(this._secondsSinceStart >= this.duration + delay) {
			if(this.backward) this.scale = 0; else this.scale = 1;
			this.finished = true;
		}
	}
	,start: function() {
		this._secondsSinceStart = 0;
		if(this.executions > 0) this._delayToUse = this.loopDelay; else this._delayToUse = this.startDelay;
		if(this.duration == 0) {
			this.active = false;
			return this;
		}
		this.active = true;
		this.finished = false;
		return this;
	}
	,cancel: function() {
		this.active = false;
		this.finished = true;
		flixel_tweens_FlxTween.manager.remove(this);
	}
	,finish: function() {
		this.executions++;
		if(this.complete != null) this.complete(this);
		var _g = this.type & -17;
		switch(_g) {
		case 1:
			this._secondsSinceStart = this.duration + this.startDelay;
			this.active = false;
			this.finished = true;
			break;
		case 8:
			this.active = false;
			this.finished = true;
			this._secondsSinceStart = this.duration + this.startDelay;
			flixel_tweens_FlxTween.manager.remove(this);
			break;
		case 2:
			this._secondsSinceStart = (this._secondsSinceStart - this._delayToUse) % this.duration + this._delayToUse;
			this.scale = Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration;
			if(this.ease != null && this.scale > 0 && this.scale < 1) this.scale = this.ease(this.scale);
			this.start();
			break;
		case 4:
			this._secondsSinceStart = (this._secondsSinceStart - this._delayToUse) % this.duration + this._delayToUse;
			this.scale = Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration;
			if(this.ease != null && this.scale > 0 && this.scale < 1) this.scale = this.ease(this.scale);
			this.backward = !this.backward;
			if(this.backward) this.scale = 1 - this.scale;
			this.start();
			break;
		}
	}
	,setDelays: function(StartDelay,LoopDelay) {
		this.set_startDelay(StartDelay != null?StartDelay:0);
		this.set_loopDelay(LoopDelay != null?LoopDelay:0);
		return this;
	}
	,set_startDelay: function(value) {
		var dly = Math.abs(value);
		if(this.executions == 0) {
			this._secondsSinceStart = this.duration * (Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration) + Math.max(dly - this.startDelay,0);
			this._delayToUse = dly;
		}
		return this.startDelay = dly;
	}
	,set_loopDelay: function(value) {
		var dly = Math.abs(value);
		if(this.executions > 0) {
			this._secondsSinceStart = this.duration * (Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration) + Math.max(dly - this.loopDelay,0);
			this._delayToUse = dly;
		}
		return this.loopDelay = dly;
	}
	,get_percent: function() {
		return Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration;
	}
	,set_percent: function(value) {
		return this._secondsSinceStart = this.duration * value + this._delayToUse;
	}
	,set_type: function(value) {
		if(value == 0) value = 8; else if(value == 16) value = 17;
		this.backward = (value & 16) > 0;
		return this.type = value;
	}
	,__class__: flixel_tweens_FlxTween
	,__properties__: {set_loopDelay:"set_loopDelay",set_startDelay:"set_startDelay",set_percent:"set_percent",get_percent:"get_percent",set_type:"set_type"}
};
var flixel_plugin_TweenManager = function() {
	this._tweens = [];
	flixel_plugin_FlxPlugin.call(this);
	this.set_visible(false);
};
$hxClasses["flixel.plugin.TweenManager"] = flixel_plugin_TweenManager;
flixel_plugin_TweenManager.__name__ = ["flixel","plugin","TweenManager"];
flixel_plugin_TweenManager.__super__ = flixel_plugin_FlxPlugin;
flixel_plugin_TweenManager.prototype = $extend(flixel_plugin_FlxPlugin.prototype,{
	add_flixel_tweens_motion_QuadPath: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_LinearPath: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_CircularMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_CubicMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_QuadMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_LinearMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_ColorTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_AngleTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_NumTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_VarTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,_tweens: null
	,update: function() {
		var finishedTweens = null;
		var _g = 0;
		var _g1 = this._tweens;
		while(_g < _g1.length) {
			var tween = _g1[_g];
			++_g;
			if(tween.active) {
				tween.update();
				if(tween.finished) {
					if(finishedTweens == null) finishedTweens = [];
					finishedTweens.push(tween);
				}
			}
		}
		if(finishedTweens != null) while(finishedTweens.length > 0) finishedTweens.shift().finish();
	}
	,remove: function(Tween) {
		if(Tween == null) return null;
		Tween.active = false;
		Tween.destroy();
		flixel_util_FlxArrayUtil.fastSplice_flixel_tweens_FlxTween(this._tweens,Tween);
		return Tween;
	}
	,clear: function() {
		while(this._tweens.length > 0) this.remove(this._tweens[0]);
	}
	,onStateSwitch: function() {
		this.clear();
	}
	,__class__: flixel_plugin_TweenManager
});
var flixel_util_FlxSave = function() {
	this.destroy();
};
$hxClasses["flixel.util.FlxSave"] = flixel_util_FlxSave;
flixel_util_FlxSave.__name__ = ["flixel","util","FlxSave"];
flixel_util_FlxSave.prototype = {
	data: null
	,name: null
	,_sharedObject: null
	,_onComplete: null
	,_closeRequested: null
	,destroy: function() {
		this._sharedObject = null;
		this.name = null;
		this.data = null;
		this._onComplete = null;
		this._closeRequested = false;
	}
	,bind: function(Name) {
		this.destroy();
		this.name = Name;
		try {
			this._sharedObject = flash_net_SharedObject.getLocal(this.name);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,flash_errors_Error) ) {
				this.destroy();
				return false;
			} else throw(e);
		}
		this.data = this._sharedObject.data;
		return true;
	}
	,close: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		this._closeRequested = true;
		return this.flush(MinFileSize,OnComplete);
	}
	,flush: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		if(!this.checkBinding()) return false;
		this._onComplete = OnComplete;
		var result;
		try {
			result = this._sharedObject.flush();
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,flash_errors_Error) ) {
				return this.onDone(flixel_util_FlxSave.ERROR);
			} else throw(e);
		}
		if(result == flash_net_SharedObjectFlushStatus.PENDING) {
		}
		return this.onDone(result == flash_net_SharedObjectFlushStatus.FLUSHED?flixel_util_FlxSave.SUCCESS:flixel_util_FlxSave.PENDING);
	}
	,erase: function() {
		if(!this.checkBinding()) return false;
		this._sharedObject.clear();
		return true;
	}
	,onDone: function(Result) {
		switch(Result) {
		case 1:
			null;
			break;
		case 2:
			null;
			break;
		}
		if(this._onComplete != null) this._onComplete(Result == flixel_util_FlxSave.SUCCESS);
		if(this._closeRequested) this.destroy();
		return Result == flixel_util_FlxSave.SUCCESS;
	}
	,checkBinding: function() {
		if(this._sharedObject == null) return false;
		return true;
	}
	,__class__: flixel_util_FlxSave
};
var flixel_system_frontEnds_SignalFrontEnd = function() {
	this.stateSwitched = new flixel_util__$FlxSignal_FlxSignal0();
	this.gameResized = new flixel_util__$FlxSignal_FlxSignal2();
	this.gameReset = new flixel_util__$FlxSignal_FlxSignal0();
	this.gameStarted = new flixel_util__$FlxSignal_FlxSignal0();
	this.preUpdate = new flixel_util__$FlxSignal_FlxSignal0();
	this.postUpdate = new flixel_util__$FlxSignal_FlxSignal0();
	this.preDraw = new flixel_util__$FlxSignal_FlxSignal0();
	this.postDraw = new flixel_util__$FlxSignal_FlxSignal0();
	this.focusGained = new flixel_util__$FlxSignal_FlxSignal0();
	this.focusLost = new flixel_util__$FlxSignal_FlxSignal0();
};
$hxClasses["flixel.system.frontEnds.SignalFrontEnd"] = flixel_system_frontEnds_SignalFrontEnd;
flixel_system_frontEnds_SignalFrontEnd.__name__ = ["flixel","system","frontEnds","SignalFrontEnd"];
flixel_system_frontEnds_SignalFrontEnd.prototype = {
	stateSwitched: null
	,gameResized: null
	,gameReset: null
	,gameStarted: null
	,preUpdate: null
	,postUpdate: null
	,preDraw: null
	,postDraw: null
	,focusGained: null
	,focusLost: null
	,__class__: flixel_system_frontEnds_SignalFrontEnd
};
var flixel_system_frontEnds_SoundFrontEnd = function() {
	this.volume = 1;
	this.soundTrayEnabled = true;
	this.muted = false;
	this.volumeUpKeys = ["PLUS","NUMPADPLUS"];
	this.volumeDownKeys = ["MINUS","NUMPADMINUS"];
	this.muteKeys = ["ZERO","NUMPADZERO"];
	this.list = new flixel_group_FlxTypedGroup();
	this._soundCache = new haxe_ds_StringMap();
};
$hxClasses["flixel.system.frontEnds.SoundFrontEnd"] = flixel_system_frontEnds_SoundFrontEnd;
flixel_system_frontEnds_SoundFrontEnd.__name__ = ["flixel","system","frontEnds","SoundFrontEnd"];
flixel_system_frontEnds_SoundFrontEnd.prototype = {
	music: null
	,muted: null
	,volumeHandler: null
	,volumeUpKeys: null
	,volumeDownKeys: null
	,muteKeys: null
	,soundTrayEnabled: null
	,list: null
	,volume: null
	,_soundCache: null
	,playMusic: function(Music,Volume,Looped) {
		if(Looped == null) Looped = true;
		if(Volume == null) Volume = 1;
		if(this.music == null) this.music = new flixel_system_FlxSound(); else if(this.music.active) this.music.stop();
		this.music.loadEmbedded(Music,Looped);
		this.music.set_volume(Volume);
		this.music.persist = true;
		this.music.play();
	}
	,load: function(EmbeddedSound,Volume,Looped,AutoDestroy,AutoPlay,URL,OnComplete) {
		if(AutoPlay == null) AutoPlay = false;
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		if(EmbeddedSound == null && URL == null) return null;
		var sound = this.list.recycle(flixel_system_FlxSound);
		if(EmbeddedSound != null) sound.loadEmbedded(EmbeddedSound,Looped,AutoDestroy,OnComplete); else sound.loadStream(URL,Looped,AutoDestroy,OnComplete);
		sound.set_volume(Volume);
		if(AutoPlay) sound.play();
		return sound;
	}
	,cache: function(EmbeddedSound) {
		if(this._soundCache.exists(EmbeddedSound)) return this._soundCache.get(EmbeddedSound); else {
			var sound = openfl_Assets.getSound(EmbeddedSound);
			this._soundCache.set(EmbeddedSound,sound);
			return sound;
		}
	}
	,play: function(EmbeddedSound,Volume,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = true;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		var sound = null;
		if(this._soundCache.exists(EmbeddedSound)) sound = this._soundCache.get(EmbeddedSound); else {
			sound = openfl_Assets.getSound(EmbeddedSound);
			this._soundCache.set(EmbeddedSound,sound);
		}
		var flixelSound = this.list.recycle(flixel_system_FlxSound).loadEmbedded(sound,Looped,AutoDestroy,OnComplete);
		flixelSound.set_volume(Volume);
		return flixelSound.play();
	}
	,stream: function(URL,Volume,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = true;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		return this.load(null,Volume,Looped,AutoDestroy,true,URL,OnComplete);
	}
	,pause: function() {
		if(this.music != null && this.music.exists && this.music.active) this.music.pause();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && sound.exists && sound.active) sound.pause();
		}
	}
	,resume: function() {
		if(this.music != null && this.music.exists) this.music.resume();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && sound.exists) sound.resume();
		}
	}
	,destroy: function(ForceDestroy) {
		if(ForceDestroy == null) ForceDestroy = false;
		if(this.music != null && (ForceDestroy || !this.music.persist)) {
			this.music.destroy();
			this.music = null;
		}
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && (ForceDestroy || !sound.persist)) sound.destroy();
		}
	}
	,update: function() {
		if(this.music != null && this.music.active) this.music.update();
		if(this.list != null && this.list.active) this.list.update();
	}
	,onFocusLost: function() {
		if(this.music != null) this.music.onFocusLost();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null) sound.onFocusLost();
		}
	}
	,onFocus: function() {
		if(this.music != null) this.music.onFocus();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null) sound.onFocus();
		}
	}
	,loadSavedPrefs: function() {
		if(flixel_FlxG.save.data.volume != null) this.set_volume(flixel_FlxG.save.data.volume); else this.set_volume(0.5);
		if(flixel_FlxG.save.data.mute != null) this.muted = flixel_FlxG.save.data.mute; else this.muted = false;
	}
	,set_volume: function(Volume) {
		Volume = flixel_util_FlxMath.bound(Volume,0,1);
		if(this.volumeHandler != null) {
			var param;
			if(this.muted) param = 0; else param = Volume;
			this.volumeHandler(param);
		}
		return this.volume = Volume;
	}
	,__class__: flixel_system_frontEnds_SoundFrontEnd
	,__properties__: {set_volume:"set_volume"}
};
var flixel_system_frontEnds_VCRFrontEnd = function() {
	this.stepRequested = false;
	this.paused = false;
};
$hxClasses["flixel.system.frontEnds.VCRFrontEnd"] = flixel_system_frontEnds_VCRFrontEnd;
flixel_system_frontEnds_VCRFrontEnd.__name__ = ["flixel","system","frontEnds","VCRFrontEnd"];
flixel_system_frontEnds_VCRFrontEnd.prototype = {
	paused: null
	,stepRequested: null
	,pause: function() {
		if(!this.paused) {
			if(!flixel_FlxG.mouse.useSystemCursor) flash_ui_Mouse.show();
			this.paused = true;
		}
	}
	,resume: function() {
		if(this.paused) {
			if(!flixel_FlxG.mouse.useSystemCursor) flash_ui_Mouse.hide();
			this.paused = false;
		}
	}
	,__class__: flixel_system_frontEnds_VCRFrontEnd
};
var flixel_system_frontEnds_WatchFrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.WatchFrontEnd"] = flixel_system_frontEnds_WatchFrontEnd;
flixel_system_frontEnds_WatchFrontEnd.__name__ = ["flixel","system","frontEnds","WatchFrontEnd"];
flixel_system_frontEnds_WatchFrontEnd.prototype = {
	add: function(AnyObject,VariableName,DisplayName) {
	}
	,remove: function(AnyObject,VariableName) {
	}
	,addQuick: function(Name,NewValue) {
	}
	,removeQuick: function(Name) {
	}
	,addMouse: function() {
	}
	,removeMouse: function() {
	}
	,__class__: flixel_system_frontEnds_WatchFrontEnd
};
var flixel_FlxG = function() { };
$hxClasses["flixel.FlxG"] = flixel_FlxG;
flixel_FlxG.__name__ = ["flixel","FlxG"];
flixel_FlxG.__properties__ = {set_mouse:"set_mouse",set_fullscreen:"set_fullscreen",set_scaleMode:"set_scaleMode",set_drawFramerate:"set_drawFramerate",set_updateFramerate:"set_updateFramerate",get_updateFramerate:"get_updateFramerate",get_state:"get_state",get_stage:"get_stage"}
flixel_FlxG.resizeGame = function(Width,Height) {
	flixel_FlxG._scaleMode.onMeasure(Width,Height);
};
flixel_FlxG.resetGame = function() {
	flixel_FlxG.game._resetGame = true;
};
flixel_FlxG.switchState = function(State) {
	flixel_FlxG.game._requestedState = State;
};
flixel_FlxG.resetState = function() {
	flixel_FlxG.switchState(Type.createInstance(Type.getClass(flixel_FlxG.game._state),[]));
};
flixel_FlxG.overlap = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
	if(ObjectOrGroup1 == null) ObjectOrGroup1 = flixel_FlxG.game._state;
	if(ObjectOrGroup2 == ObjectOrGroup1) ObjectOrGroup2 = null;
	flixel_system_FlxQuadTree.divisions = flixel_FlxG.worldDivisions;
	var quadTree = flixel_system_FlxQuadTree.recycle(flixel_FlxG.worldBounds.x,flixel_FlxG.worldBounds.y,flixel_FlxG.worldBounds.width,flixel_FlxG.worldBounds.height);
	quadTree.load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback);
	var result = quadTree.execute();
	quadTree.destroy();
	return result;
};
flixel_FlxG.pixelPerfectOverlap = function(Sprite1,Sprite2,AlphaTolerance,Camera) {
	if(AlphaTolerance == null) AlphaTolerance = 255;
	return flixel_util_FlxCollision.pixelPerfectCheck(Sprite1,Sprite2,AlphaTolerance,Camera);
};
flixel_FlxG.collide = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback) {
	return flixel_FlxG.overlap(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,flixel_FlxObject.separate);
};
flixel_FlxG.openURL = function(URL,Target) {
	if(Target == null) Target = "_blank";
	var prefix = "";
	if(!new EReg("^https?://","").match(URL)) prefix = "http://";
	flash_Lib.getURL(new flash_net_URLRequest(prefix + URL),Target);
};
flixel_FlxG.init = function(Game,Width,Height,Zoom) {
	flixel_FlxG.game = Game;
	flixel_FlxG.width = Std["int"](Math.abs(Width));
	flixel_FlxG.height = Std["int"](Math.abs(Height));
	flixel_FlxCamera.defaultZoom = Zoom;
	flixel_FlxG.resizeGame(flash_Lib.get_current().get_stage().get_stageWidth(),flash_Lib.get_current().get_stage().get_stageHeight());
	flixel_FlxG.keys = flixel_FlxG.inputs.add_flixel_input_keyboard_FlxKeyboard(new flixel_input_keyboard_FlxKeyboard());
	flixel_FlxG.set_mouse(flixel_FlxG.inputs.add_flixel_input_mouse_FlxMouse(new flixel_input_mouse_FlxMouse(flixel_FlxG.game._inputContainer)));
	flixel_FlxG.touches = flixel_FlxG.inputs.add_flixel_input_touch_FlxTouchManager(new flixel_input_touch_FlxTouchManager());
	flixel_FlxG.gamepads = flixel_FlxG.inputs.add_flixel_input_gamepad_FlxGamepadManager(new flixel_input_gamepad_FlxGamepadManager());
	flixel_FlxG.save.bind("flixel");
	flixel_FlxG.sound.loadSavedPrefs();
	flixel_system_FlxAssets.init();
};
flixel_FlxG.reset = function() {
	flixel_text_pxText_PxBitmapFont.clearStorage();
	flixel_util_FlxRandom.set_globalSeed(Std["int"](Math.random() * 2147483647));
	flixel_FlxG.bitmap.clearCache();
	flixel_FlxG.inputs.reset();
	flixel_FlxG.sound.destroy(true);
	flixel_FlxG.autoPause = true;
	flixel_FlxG.fixedTimestep = true;
	flixel_FlxG.timeScale = 1.0;
	flixel_FlxG.elapsed = 0;
	flixel_FlxG.maxElapsed = 0.1;
	flixel_FlxG.worldBounds.set(-10,-10,flixel_FlxG.width + 20,flixel_FlxG.height + 20);
	flixel_FlxG.worldDivisions = 6;
};
flixel_FlxG.set_scaleMode = function(ScaleMode) {
	flixel_FlxG._scaleMode = ScaleMode;
	flixel_FlxG.game.onResize(null);
	return ScaleMode;
};
flixel_FlxG.set_mouse = function(NewMouse) {
	if(flixel_FlxG.mouse == null) {
		flixel_FlxG.mouse = flixel_FlxG.inputs.add_flixel_input_mouse_FlxMouse(NewMouse);
		return flixel_FlxG.mouse;
	}
	var oldMouse = flixel_FlxG.mouse;
	var result = flixel_FlxG.inputs.replace_flixel_input_mouse_FlxMouse(oldMouse,NewMouse);
	if(result != null) {
		flixel_FlxG.mouse = result;
		oldMouse.destroy();
		return NewMouse;
	}
	return oldMouse;
};
flixel_FlxG.get_updateFramerate = function() {
	return 1000 / flixel_FlxG.game._stepMS | 0;
};
flixel_FlxG.set_updateFramerate = function(Framerate) {
	if(Framerate < flixel_FlxG.drawFramerate) null;
	flixel_FlxG.game._stepMS = Std["int"](Math.abs(1000 / Framerate));
	flixel_FlxG.game._stepSeconds = flixel_FlxG.game._stepMS / 1000;
	if(flixel_FlxG.game._maxAccumulation < flixel_FlxG.game._stepMS) flixel_FlxG.game._maxAccumulation = flixel_FlxG.game._stepMS;
	return Framerate;
};
flixel_FlxG.set_drawFramerate = function(Framerate) {
	if(Framerate > (1000 / flixel_FlxG.game._stepMS | 0)) null;
	flixel_FlxG.drawFramerate = Std["int"](Math.abs(Framerate));
	if(flixel_FlxG.game.get_stage() != null) flixel_FlxG.game.get_stage().set_frameRate(flixel_FlxG.drawFramerate);
	flixel_FlxG.game._maxAccumulation = (2000 / flixel_FlxG.drawFramerate | 0) - 1;
	if(flixel_FlxG.game._maxAccumulation < flixel_FlxG.game._stepMS) flixel_FlxG.game._maxAccumulation = flixel_FlxG.game._stepMS;
	return Framerate;
};
flixel_FlxG.set_fullscreen = function(Value) {
	if(Value) flash_Lib.get_current().get_stage().displayState = "FULL_SCREEN"; else flash_Lib.get_current().get_stage().displayState = "NORMAL";
	return flixel_FlxG.fullscreen = Value;
};
flixel_FlxG.get_stage = function() {
	return flash_Lib.get_current().get_stage();
};
flixel_FlxG.get_state = function() {
	return flixel_FlxG.game._state;
};
var flixel_FlxGame = function(GameSizeX,GameSizeY,InitialState,Zoom,UpdateFramerate,DrawFramerate,SkipSplash,StartFullscreen) {
	if(StartFullscreen == null) StartFullscreen = false;
	if(SkipSplash == null) SkipSplash = false;
	if(DrawFramerate == null) DrawFramerate = 60;
	if(UpdateFramerate == null) UpdateFramerate = 60;
	if(Zoom == null) Zoom = 1;
	if(GameSizeY == null) GameSizeY = 480;
	if(GameSizeX == null) GameSizeX = 640;
	this._resetGame = false;
	this._skipSplash = false;
	this._customFocusLostScreen = flixel_system_ui_FlxFocusLostScreen;
	this._customSoundTray = flixel_system_ui_FlxSoundTray;
	this._lostFocus = false;
	this._total = 0;
	this._gameJustStarted = false;
	this.ticks = 0;
	this.focusLostFramerate = 10;
	flash_display_Sprite.call(this);
	this._inputContainer = new flash_display_Sprite();
	flixel_FlxG.init(this,GameSizeX,GameSizeY,Zoom);
	flixel_FlxG.set_updateFramerate(UpdateFramerate);
	flixel_FlxG.set_drawFramerate(DrawFramerate);
	this._accumulator = this._stepMS;
	this._skipSplash = SkipSplash;
	if(InitialState == null) this._initialState = flixel_FlxState; else this._initialState = InitialState;
	this.addEventListener("addedToStage",$bind(this,this.create));
};
$hxClasses["flixel.FlxGame"] = flixel_FlxGame;
flixel_FlxGame.__name__ = ["flixel","FlxGame"];
flixel_FlxGame.__super__ = flash_display_Sprite;
flixel_FlxGame.prototype = $extend(flash_display_Sprite.prototype,{
	focusLostFramerate: null
	,soundTray: null
	,ticks: null
	,_gameJustStarted: null
	,_initialState: null
	,_state: null
	,_total: null
	,_accumulator: null
	,_elapsedMS: null
	,_stepMS: null
	,_stepSeconds: null
	,_maxAccumulation: null
	,_lostFocus: null
	,_focusLostScreen: null
	,_inputContainer: null
	,_customSoundTray: null
	,_customFocusLostScreen: null
	,_skipSplash: null
	,_requestedState: null
	,_resetGame: null
	,_display: null
	,_displayMatrix: null
	,_displayColorTransform: null
	,create: function(_) {
		if(this.get_stage() == null) return;
		this.removeEventListener("addedToStage",$bind(this,this.create));
		this._total = flash_Lib.getTimer();
		this.get_stage().scaleMode = "NO_SCALE";
		this.get_stage().align = "TOP_LEFT";
		this.get_stage().set_frameRate(flixel_FlxG.drawFramerate);
		this._display = new flash_display_BitmapData(flash_Lib.get_current().get_stage().get_stageWidth(),flash_Lib.get_current().get_stage().get_stageHeight());
		this._displayMatrix = new flash_geom_Matrix();
		this._displayColorTransform = new flash_geom_ColorTransform();
		this.addChild(new flash_display_Bitmap(this._display));
		this.addChild(this._inputContainer);
		this.soundTray = Type.createInstance(this._customSoundTray,[]);
		this.addChild(this.soundTray);
		this._focusLostScreen = Type.createInstance(this._customFocusLostScreen,[]);
		this.addChild(this._focusLostScreen);
		this.get_stage().addEventListener("deactivate",$bind(this,this.onFocusLost));
		this.get_stage().addEventListener("activate",$bind(this,this.onFocus));
		flixel_FlxG.signals.gameReset.dispatch();
		if(this._skipSplash || flixel_system_FlxSplash.nextState != null) {
			this._requestedState = Type.createInstance(this._initialState,[]);
			if(flixel_system_FlxSplash.nextState == null) this._gameJustStarted = true;
		} else {
			flixel_system_FlxSplash.nextState = this._initialState;
			this._requestedState = new flixel_system_FlxSplash();
			this._skipSplash = true;
		}
		flixel_FlxG.reset();
		this.switchState();
		if((1000 / flixel_FlxG.game._stepMS | 0) < flixel_FlxG.drawFramerate) null;
		this.get_stage().addEventListener("enterFrame",$bind(this,this.onEnterFrame));
		this.get_stage().addEventListener("resize",$bind(this,this.onResize));
		this.resizeGame(flash_Lib.get_current().get_stage().get_stageWidth(),flash_Lib.get_current().get_stage().get_stageHeight());
	}
	,onFocus: function(_) {
		this._lostFocus = false;
		flixel_FlxG.signals.focusGained.dispatch();
		if(!flixel_FlxG.autoPause) {
			this._state.onFocus();
			return;
		}
		if(this._focusLostScreen != null) this._focusLostScreen.set_visible(false);
		this.get_stage().set_frameRate(flixel_FlxG.drawFramerate);
		flixel_FlxG.sound.onFocus();
		flixel_FlxG.inputs.onFocus();
	}
	,onFocusLost: function(_) {
		this._lostFocus = true;
		flixel_FlxG.signals.focusLost.dispatch();
		if(!flixel_FlxG.autoPause) {
			this._state.onFocusLost();
			return;
		}
		if(this._focusLostScreen != null) this._focusLostScreen.set_visible(true);
		this.get_stage().set_frameRate(this.focusLostFramerate);
		flixel_FlxG.sound.onFocusLost();
		flixel_FlxG.inputs.onFocusLost();
	}
	,onResize: function(_) {
		var width = flash_Lib.get_current().get_stage().get_stageWidth();
		var height = flash_Lib.get_current().get_stage().get_stageHeight();
		this._state.onResize(width,height);
		flixel_FlxG.plugins.onResize(width,height);
		flixel_FlxG.signals.gameResized.dispatch(width,height);
		this.resizeGame(width,height);
	}
	,resizeGame: function(width,height) {
		flixel_FlxG._scaleMode.onMeasure(width,height);
		if(this._focusLostScreen != null) this._focusLostScreen.draw();
		if(this.soundTray != null) this.soundTray.screenCenter();
		this._inputContainer.set_scaleX(1 / flixel_FlxG.game.scaleX);
		this._inputContainer.set_scaleY(1 / flixel_FlxG.game.scaleY);
	}
	,onEnterFrame: function(_) {
		this.ticks = flash_Lib.getTimer();
		this._elapsedMS = this.ticks - this._total;
		this._total = this.ticks;
		if(this.soundTray != null && this.soundTray.active) this.soundTray.update(this._elapsedMS);
		if(!this._lostFocus || !flixel_FlxG.autoPause) {
			if(flixel_FlxG.vcr.paused) {
				if(flixel_FlxG.vcr.stepRequested) flixel_FlxG.vcr.stepRequested = false; else if(this._state == this._requestedState) return;
			}
			if(flixel_FlxG.fixedTimestep) {
				this._accumulator += this._elapsedMS;
				if(this._accumulator > this._maxAccumulation) this._accumulator = this._maxAccumulation;
				while(this._accumulator > this._stepMS) {
					this.step();
					this._accumulator = this._accumulator - this._stepMS;
				}
			} else this.step();
			this.draw();
		}
	}
	,resetGame: function() {
		flixel_FlxG.signals.gameReset.dispatch();
		if(this._skipSplash || flixel_system_FlxSplash.nextState != null) {
			this._requestedState = Type.createInstance(this._initialState,[]);
			if(flixel_system_FlxSplash.nextState == null) this._gameJustStarted = true;
		} else {
			flixel_system_FlxSplash.nextState = this._initialState;
			this._requestedState = new flixel_system_FlxSplash();
			this._skipSplash = true;
		}
		flixel_FlxG.reset();
	}
	,switchState: function() {
		flixel_text_pxText_PxBitmapFont.clearStorage();
		flixel_FlxG.bitmap.clearCache();
		flixel_FlxG.cameras.reset();
		flixel_FlxG.inputs.reset();
		flixel_FlxG.sound.destroy();
		flixel_FlxG.plugins.onStateSwitch();
		flixel_FlxG.signals.stateSwitched.dispatch();
		if(this._state != null) this._state.destroy();
		this._state = this._requestedState;
		this._state.create();
		if(this._gameJustStarted) this.gameStart();
	}
	,gameStart: function() {
		flixel_FlxG.signals.gameStarted.dispatch();
		this._gameJustStarted = false;
	}
	,step: function() {
		if(this._resetGame) {
			flixel_FlxG.signals.gameReset.dispatch();
			if(this._skipSplash || flixel_system_FlxSplash.nextState != null) {
				this._requestedState = Type.createInstance(this._initialState,[]);
				if(flixel_system_FlxSplash.nextState == null) this._gameJustStarted = true;
			} else {
				flixel_system_FlxSplash.nextState = this._initialState;
				this._requestedState = new flixel_system_FlxSplash();
				this._skipSplash = true;
			}
			flixel_FlxG.reset();
			this._resetGame = false;
		}
		this.update();
	}
	,update: function() {
		if(!this._state.active || !this._state.exists) return;
		if(this._state != this._requestedState) this.switchState();
		flixel_FlxG.signals.preUpdate.dispatch();
		if(flixel_FlxG.fixedTimestep) flixel_FlxG.elapsed = flixel_FlxG.timeScale * this._stepSeconds; else {
			flixel_FlxG.elapsed = flixel_FlxG.timeScale * (this._elapsedMS / 1000);
			var max = flixel_FlxG.maxElapsed * flixel_FlxG.timeScale;
			if(flixel_FlxG.elapsed > max) flixel_FlxG.elapsed = max;
		}
		this.updateInput();
		flixel_FlxG.sound.update();
		flixel_FlxG.plugins.update();
		this._state.tryUpdate();
		flixel_FlxG.cameras.update();
		flixel_FlxG.signals.postUpdate.dispatch();
		var _g = 0;
		var _g1 = flixel_FlxG.swipes;
		while(_g < _g1.length) {
			var swipe = _g1[_g];
			++_g;
			swipe = null;
		}
		flixel_util_FlxArrayUtil.clearArray(flixel_FlxG.swipes);
	}
	,updateInput: function() {
		flixel_FlxG.inputs.update();
	}
	,draw: function() {
		if(!this._state.visible || !this._state.exists) return;
		flixel_FlxG.signals.preDraw.dispatch();
		flixel_FlxG.cameras.lock();
		flixel_FlxG.plugins.draw();
		this._state.draw();
		this._display.fillRect(this._display.__rect.clone(),0);
		var _g = 0;
		var _g1 = flixel_FlxG.cameras.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			this._displayMatrix.identity();
			this._displayMatrix.scale(camera.zoom * flixel_FlxG._scaleMode.scale.x,camera.zoom * flixel_FlxG._scaleMode.scale.y);
			this._displayMatrix.translate(camera.x * flixel_FlxG._scaleMode.scale.x,camera.y * flixel_FlxG._scaleMode.scale.y);
			if(camera.angle != 0) {
				this._displayMatrix.translate(-this._display.component.width >> 1,-this._display.component.height >> 1);
				this._displayMatrix.rotate(camera.angle * (Math.PI / 180));
				this._displayMatrix.translate(this._display.component.width >> 1,this._display.component.height >> 1);
			}
			this._displayColorTransform.alphaMultiplier = camera.alpha;
			this._display.draw(camera.buffer,this._displayMatrix,this._displayColorTransform,null,null,camera.antialiasing);
		}
		flixel_FlxG.cameras.unlock();
		flixel_FlxG.signals.postDraw.dispatch();
	}
	,__class__: flixel_FlxGame
});
var flixel_system_FlxPreloaderBase = function() {
	NMEPreloader.call(this);
};
$hxClasses["flixel.system.FlxPreloaderBase"] = flixel_system_FlxPreloaderBase;
flixel_system_FlxPreloaderBase.__name__ = ["flixel","system","FlxPreloaderBase"];
flixel_system_FlxPreloaderBase.__super__ = NMEPreloader;
flixel_system_FlxPreloaderBase.prototype = $extend(NMEPreloader.prototype,{
	__class__: flixel_system_FlxPreloaderBase
});
var flixel_system_FlxPreloader = function() {
	flixel_system_FlxPreloaderBase.call(this);
};
$hxClasses["flixel.system.FlxPreloader"] = flixel_system_FlxPreloader;
flixel_system_FlxPreloader.__name__ = ["flixel","system","FlxPreloader"];
flixel_system_FlxPreloader.__super__ = flixel_system_FlxPreloaderBase;
flixel_system_FlxPreloader.prototype = $extend(flixel_system_FlxPreloaderBase.prototype,{
	__class__: flixel_system_FlxPreloader
});
var haxe_Resource = function() { };
$hxClasses["haxe.Resource"] = haxe_Resource;
haxe_Resource.__name__ = ["haxe","Resource"];
haxe_Resource.listNames = function() {
	var _g = [];
	var _g1 = 0;
	var _g2 = haxe_Resource.content;
	while(_g1 < _g2.length) {
		var x = _g2[_g1];
		++_g1;
		_g.push(x.name);
	}
	return _g;
};
var flixel__$FlxSprite_GraphicDefault = function(width,height,transparent,color) {
	var o = flixel__$FlxSprite_GraphicDefault.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel._FlxSprite.GraphicDefault"] = flixel__$FlxSprite_GraphicDefault;
flixel__$FlxSprite_GraphicDefault.__name__ = ["flixel","_FlxSprite","GraphicDefault"];
flixel__$FlxSprite_GraphicDefault.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel__$FlxSprite_GraphicDefault.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAB20lEQVQ4T33TvU8TYQDH8eflAIlJg7Ha9KhKr0JbioAlphrEhMhM4uKgMUagJcXJQUcTc4YBYpgciA64YIw2vgRbrVEPRtDFDtU49x8gqQoMP57nynPt5WqHX276fp57yRFzWq/kTANqj26H0O1vAyHEtUOUY7YrjOfd55zd98cqRIZYT7q2XRjCfEbHUZ+GNkpx3XcCJeMyqtFJ1yTWFFDg1tsBPJwc8YQKagn8sobRUzyN9nwEK9cuNUVs4Om9U55H+CnikIjJR8OeVohg+eaYB1nVBdAb6kC1OOwgP6whBIsRJ1YI/2Dg8a2LLiR7JCxfNMF8WreBkogDTWKFMIEszdSQsjGBTvFlbMB3mOPNiziOtYgbkYXZUaS7etRnJmCsA31XXoG/G/Tcugobr+xrBlpqvA4EgtMYHQfO3NgEX0u0RKiVhfatCv7kCwhlIPL0kfO/bUAuMbUB9r6/KUKtOWjf/4rtCWQXNDkGEghOObFC+tOfBBJzIbX4Ty0+GDefgcQGch5AQvFMESxfQ6h1p35yI7D48v+ARKLZNbDPd0X8z3WycwetgGSqDP/xq6DRs+BLr6Ft7XgQLoGTYbMiH6NxAT0Nytrrv7P4I+ngBTBzBTJSY3MPKvteBiSdU5EAWwAAAABJRU5ErkJggg==";
};
flixel__$FlxSprite_GraphicDefault.__super__ = flash_display_BitmapData;
flixel__$FlxSprite_GraphicDefault.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel__$FlxSprite_GraphicDefault
});
var flixel_FlxSubState = function(BGColor) {
	if(BGColor == null) BGColor = 0;
	this._created = false;
	flixel_FlxState.call(this);
	this.closeCallback = null;
	this.set_bgColor(BGColor);
};
$hxClasses["flixel.FlxSubState"] = flixel_FlxSubState;
flixel_FlxSubState.__name__ = ["flixel","FlxSubState"];
flixel_FlxSubState.__super__ = flixel_FlxState;
flixel_FlxSubState.prototype = $extend(flixel_FlxState.prototype,{
	closeCallback: null
	,_parentState: null
	,_bgColor: null
	,_created: null
	,draw: function() {
		var _g = 0;
		var _g1 = flixel_FlxG.cameras.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.fill(this._bgColor);
		}
		flixel_FlxState.prototype.draw.call(this);
	}
	,destroy: function() {
		flixel_FlxState.prototype.destroy.call(this);
		this.closeCallback = null;
		this._parentState = null;
	}
	,close: function() {
		if(this._parentState != null && this._parentState.subState == this) this._parentState._requestSubStateReset = true;
	}
	,get_bgColor: function() {
		return this._bgColor;
	}
	,set_bgColor: function(Value) {
		return this._bgColor = Value;
	}
	,__class__: flixel_FlxSubState
});
var flixel_animation_FlxBaseAnimation = function(Parent,Name) {
	this.curIndex = 0;
	this.parent = Parent;
	this.name = Name;
};
$hxClasses["flixel.animation.FlxBaseAnimation"] = flixel_animation_FlxBaseAnimation;
flixel_animation_FlxBaseAnimation.__name__ = ["flixel","animation","FlxBaseAnimation"];
flixel_animation_FlxBaseAnimation.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_animation_FlxBaseAnimation.prototype = {
	parent: null
	,name: null
	,curIndex: null
	,set_curIndex: function(Value) {
		this.curIndex = Value;
		if(this.parent != null && this.parent._curAnim == this) this.parent.set_frameIndex(Value);
		return Value;
	}
	,destroy: function() {
		this.parent = null;
		this.name = null;
	}
	,update: function() {
	}
	,clone: function(Parent) {
		return null;
	}
	,__class__: flixel_animation_FlxBaseAnimation
	,__properties__: {set_curIndex:"set_curIndex"}
};
var flixel_animation_FlxAnimation = function(Parent,Name,Frames,FrameRate,Looped) {
	if(Looped == null) Looped = true;
	if(FrameRate == null) FrameRate = 0;
	this._frameTimer = 0;
	this.looped = true;
	this.paused = true;
	this.finished = true;
	this.delay = 0;
	this.curFrame = 0;
	flixel_animation_FlxBaseAnimation.call(this,Parent,Name);
	this.set_frameRate(FrameRate);
	this._frames = Frames;
	this.looped = Looped;
};
$hxClasses["flixel.animation.FlxAnimation"] = flixel_animation_FlxAnimation;
flixel_animation_FlxAnimation.__name__ = ["flixel","animation","FlxAnimation"];
flixel_animation_FlxAnimation.__super__ = flixel_animation_FlxBaseAnimation;
flixel_animation_FlxAnimation.prototype = $extend(flixel_animation_FlxBaseAnimation.prototype,{
	frameRate: null
	,curFrame: null
	,numFrames: null
	,delay: null
	,finished: null
	,paused: null
	,looped: null
	,_frames: null
	,_frameTimer: null
	,destroy: function() {
		this._frames = null;
		this.name = null;
		flixel_animation_FlxBaseAnimation.prototype.destroy.call(this);
	}
	,play: function(Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(!Force && (this.looped || !this.finished)) {
			this.paused = false;
			this.finished = false;
			this.set_curFrame(this.curFrame);
			return;
		}
		this.paused = false;
		this._frameTimer = 0;
		if(this.delay <= 0 || Frame == this._frames.length - 1) this.finished = true; else this.finished = false;
		if(Frame < 0) this.set_curFrame(flixel_util_FlxRandom.intRanged(0,this._frames.length - 1)); else if(this._frames.length > Frame) this.set_curFrame(Frame); else this.set_curFrame(0);
	}
	,restart: function() {
		this.play(true);
	}
	,stop: function() {
		this.finished = true;
		this.paused = true;
	}
	,update: function() {
		if(this.delay > 0 && (this.looped || !this.finished) && !this.paused) {
			this._frameTimer += flixel_FlxG.elapsed;
			while(this._frameTimer > this.delay) {
				this._frameTimer = this._frameTimer - this.delay;
				if(this.looped && this.curFrame == this._frames.length - 1) this.set_curFrame(0); else {
					var _g = this;
					var _g1 = _g.curFrame;
					_g.set_curFrame(_g1 + 1);
					_g1;
				}
			}
		}
	}
	,clone: function(Parent) {
		return new flixel_animation_FlxAnimation(Parent,this.name,this._frames,this.frameRate,this.looped);
	}
	,set_frameRate: function(value) {
		this.delay = 0;
		this.frameRate = value;
		if(value > 0) this.delay = 1.0 / value;
		return value;
	}
	,set_curFrame: function(Frame) {
		if(Frame >= 0) {
			if(!this.looped && Frame >= this._frames.length) {
				this.finished = true;
				this.curFrame = this._frames.length - 1;
			} else this.curFrame = Frame;
		} else this.curFrame = flixel_util_FlxRandom.intRanged(0,this._frames.length - 1);
		this.set_curIndex(this._frames[this.curFrame]);
		return Frame;
	}
	,get_numFrames: function() {
		return this._frames.length;
	}
	,__class__: flixel_animation_FlxAnimation
	,__properties__: $extend(flixel_animation_FlxBaseAnimation.prototype.__properties__,{get_numFrames:"get_numFrames",set_curFrame:"set_curFrame",set_frameRate:"set_frameRate"})
});
var flixel_animation_FlxAnimationController = function(Sprite) {
	this.frameIndex = -1;
	this._sprite = Sprite;
	this._animations = new haxe_ds_StringMap();
};
$hxClasses["flixel.animation.FlxAnimationController"] = flixel_animation_FlxAnimationController;
flixel_animation_FlxAnimationController.__name__ = ["flixel","animation","FlxAnimationController"];
flixel_animation_FlxAnimationController.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_animation_FlxAnimationController.frameSortFunction = function(frame1,frame2) {
	var name1 = frame1.name;
	var name2 = frame2.name;
	var num1 = Std.parseInt(name1.substring(flixel_animation_FlxAnimationController.prefixLength,name1.length - flixel_animation_FlxAnimationController.postfixLength));
	var num2 = Std.parseInt(name2.substring(flixel_animation_FlxAnimationController.prefixLength,name2.length - flixel_animation_FlxAnimationController.postfixLength));
	if(num1 > num2) return 1; else if(num2 > num1) return -1;
	return 0;
};
flixel_animation_FlxAnimationController.prototype = {
	frameIndex: null
	,frames: null
	,callback: null
	,_sprite: null
	,_curAnim: null
	,_animations: null
	,_prerotated: null
	,update: function() {
		if(this._curAnim != null) this._curAnim.update(); else if(this._prerotated != null) this._prerotated.set_angle(this._sprite.angle);
	}
	,copyFrom: function(controller) {
		this.destroyAnimations();
		var $it0 = controller._animations.iterator();
		while( $it0.hasNext() ) {
			var anim = $it0.next();
			this.add(anim.name,anim._frames,anim.frameRate,anim.looped);
		}
		if(controller._prerotated != null) this.createPrerotated();
		if(controller.get_name() != null) this.set_name(controller.get_name());
		this.set_frameIndex(controller.frameIndex);
		return this;
	}
	,createPrerotated: function(Controller) {
		this.destroyAnimations();
		if(Controller != null) Controller = Controller; else Controller = this;
		this._prerotated = new flixel_animation_FlxPrerotatedAnimation(Controller,Controller._sprite.bakedRotationAngle);
	}
	,destroyAnimations: function() {
		this.clearAnimations();
		this.clearPrerotated();
	}
	,destroy: function() {
		this.destroyAnimations();
		this._animations = null;
		this.callback = null;
		this._sprite = null;
	}
	,clearPrerotated: function() {
		if(this._prerotated != null) this._prerotated.destroy();
		this._prerotated = null;
	}
	,clearAnimations: function() {
		if(this._animations != null) {
			var anim;
			var $it0 = this._animations.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				anim = this._animations.get(key);
				if(anim != null) anim.destroy();
				this._animations.remove(key);
			}
		}
		this._curAnim = null;
	}
	,get: function(Name) {
		return this._animations.get(Name);
	}
	,add: function(Name,Frames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		var numFrames = Frames.length - 1;
		var i = numFrames;
		while(i >= 0) {
			if(Frames[i] >= this._sprite.frames) Frames.splice(i,1);
			i--;
		}
		if(Frames.length > 0) {
			var anim = new flixel_animation_FlxAnimation(this,Name,Frames,FrameRate,Looped);
			this._animations.set(Name,anim);
		}
	}
	,append: function(Name,Frames) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		var numFrames = Frames.length - 1;
		var i = numFrames;
		while(i >= 0) {
			if(Frames[numFrames - i] < this._sprite.frames) anim._frames.push(Frames[numFrames - i]);
			i--;
		}
	}
	,addByNames: function(Name,FrameNames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var indices = [];
			this.byNamesHelper(indices,FrameNames);
			if(indices.length > 0) {
				var anim = new flixel_animation_FlxAnimation(this,Name,indices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,appendByNames: function(Name,FrameNames) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) this.byNamesHelper(anim._frames,FrameNames);
	}
	,addByStringIndices: function(Name,Prefix,Indices,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var frameIndices = [];
			this.byStringIndicesHelper(frameIndices,Prefix,Indices,Postfix);
			if(frameIndices.length > 0) {
				var anim = new flixel_animation_FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,appendByStringIndices: function(Name,Prefix,Indices,Postfix) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) this.byStringIndicesHelper(anim._frames,Prefix,Indices,Postfix);
	}
	,addByIndices: function(Name,Prefix,Indices,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var frameIndices = [];
			this.byIndicesHelper(frameIndices,Prefix,Indices,Postfix);
			if(frameIndices.length > 0) {
				var anim = new flixel_animation_FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,appendByIndices: function(Name,Prefix,Indices,Postfix) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) this.byIndicesHelper(anim._frames,Prefix,Indices,Postfix);
	}
	,findSpriteFrame: function(Prefix,Index,Postfix) {
		var numFrames = this._sprite.frames;
		var flxFrames = this._sprite.framesData.frames;
		var _g = 0;
		while(_g < numFrames) {
			var i = _g++;
			var name = flxFrames[i].name;
			if(StringTools.startsWith(name,Prefix) && StringTools.endsWith(name,Postfix)) {
				var index = Std.parseInt(name.substring(Prefix.length,name.length - Postfix.length));
				if(index != null && index == Index) return i;
			}
		}
		return -1;
	}
	,addByPrefix: function(Name,Prefix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var animFrames = [];
			this.findByPrefix(animFrames,Prefix);
			if(animFrames.length > 0) {
				var frameIndices = [];
				this.byPrefixHelper(frameIndices,animFrames,Prefix);
				if(frameIndices.length > 0) {
					var anim = new flixel_animation_FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
					this._animations.set(Name,anim);
				}
			}
		}
	}
	,appendByPrefix: function(Name,Prefix) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var animFrames = [];
			this.findByPrefix(animFrames,Prefix);
			if(animFrames.length > 0) this.byPrefixHelper(anim._frames,animFrames,Prefix);
		}
	}
	,play: function(AnimName,Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(AnimName == null) {
			if(this._curAnim != null) this._curAnim.stop();
			this._curAnim = null;
		}
		if(AnimName == null || this._animations.get(AnimName) == null) return;
		if(this._curAnim != null && AnimName != this._curAnim.name) this._curAnim.stop();
		this._curAnim = this._animations.get(AnimName);
		this._curAnim.play(Force,Frame);
	}
	,pause: function() {
		if(this._curAnim != null) this._curAnim.paused = true;
	}
	,resume: function() {
		if(this._curAnim != null) this._curAnim.paused = false;
	}
	,getByName: function(Name) {
		return this._animations.get(Name);
	}
	,randomFrame: function() {
		if(this._curAnim != null) {
			this._curAnim.stop();
			this._curAnim = null;
		}
		this.set_frameIndex(flixel_util_FlxRandom.intRanged(0,this._sprite.frames - 1));
	}
	,fireCallback: function() {
		if(this.callback != null) {
			var name;
			if(this._curAnim != null) name = this._curAnim.name; else name = null;
			var number;
			if(this._curAnim != null) number = this._curAnim.curFrame; else number = this.frameIndex;
			this.callback(name,number,this.frameIndex);
		}
	}
	,byNamesHelper: function(AddTo,FrameNames) {
		var l = FrameNames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var name = FrameNames[i];
			if(this._sprite.framesData.framesHash.exists(name)) {
				var frameToAdd = this._sprite.framesData.framesHash.get(name);
				AddTo.push(HxOverrides.indexOf(this._sprite.framesData.frames,frameToAdd,0));
			}
		}
	}
	,byStringIndicesHelper: function(AddTo,Prefix,Indices,Postfix) {
		var l = Indices.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var name = Prefix + Indices[i] + Postfix;
			if(this._sprite.framesData.framesHash.exists(name)) {
				var frameToAdd = this._sprite.framesData.framesHash.get(name);
				AddTo.push(HxOverrides.indexOf(this._sprite.framesData.frames,frameToAdd,0));
			}
		}
	}
	,byIndicesHelper: function(AddTo,Prefix,Indices,Postfix) {
		var l = Indices.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var indexToAdd = this.findSpriteFrame(Prefix,Indices[i],Postfix);
			if(indexToAdd != -1) AddTo.push(indexToAdd);
		}
	}
	,byPrefixHelper: function(AddTo,AnimFrames,Prefix) {
		var name = AnimFrames[0].name;
		var postIndex = name.indexOf(".",Prefix.length);
		var postFix = name.substring(postIndex == -1?name.length:postIndex,name.length);
		flixel_animation_FlxAnimationController.prefixLength = Prefix.length;
		flixel_animation_FlxAnimationController.postfixLength = postFix.length;
		AnimFrames.sort(flixel_animation_FlxAnimationController.frameSortFunction);
		var l = AnimFrames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			AddTo.push(HxOverrides.indexOf(this._sprite.framesData.frames,AnimFrames[i],0));
		}
	}
	,findByPrefix: function(AnimFrames,Prefix) {
		var l = this._sprite.framesData.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			if(StringTools.startsWith(this._sprite.framesData.frames[i].name,Prefix)) AnimFrames.push(this._sprite.framesData.frames[i]);
		}
	}
	,set_frameIndex: function(Frame) {
		if(this._sprite.framesData != null) {
			Frame = Frame % this._sprite.frames;
			if(Frame != this.frameIndex) {
				this._sprite.set_frame(this._sprite.framesData.frames[Frame]);
				this.fireCallback();
			}
		}
		return this.frameIndex = Frame;
	}
	,get_frameName: function() {
		return this._sprite.frame.name;
	}
	,set_frameName: function(Value) {
		if(this._sprite.framesData != null && this._sprite.framesData.framesHash.exists(Value)) {
			if(this._curAnim != null) {
				this._curAnim.stop();
				this._curAnim = null;
			}
			var frame = this._sprite.framesData.framesHash.get(Value);
			if(frame != null) this.set_frameIndex(HxOverrides.indexOf(this._sprite.framesData.frames,frame,0));
		}
		return Value;
	}
	,get_name: function() {
		var animName = null;
		if(this._curAnim != null) animName = this._curAnim.name;
		return animName;
	}
	,set_name: function(AnimName) {
		this.play(AnimName);
		return AnimName;
	}
	,get_curAnim: function() {
		var anim = null;
		if(this._curAnim != null && this._curAnim.delay > 0 && (this._curAnim.looped || !this._curAnim.finished)) anim = this._curAnim;
		return anim;
	}
	,set_curAnim: function(Anim) {
		if(Anim != null && Anim != this._curAnim) {
			if(this._curAnim != null) this._curAnim.stop();
			Anim.play();
		}
		return this._curAnim = Anim;
	}
	,get_paused: function() {
		var paused = false;
		if(this._curAnim != null) paused = this._curAnim.paused;
		return paused;
	}
	,set_paused: function(Value) {
		if(this._curAnim != null) this._curAnim.paused = Value;
		return Value;
	}
	,get_finished: function() {
		var finished = true;
		if(this._curAnim != null) finished = this._curAnim.finished;
		return finished;
	}
	,set_finished: function(Value) {
		if(Value == true && this._curAnim != null) {
			this._curAnim.finished = true;
			this.set_frameIndex(this._curAnim._frames.length - 1);
		}
		return Value;
	}
	,get_frames: function() {
		return this._sprite.frames;
	}
	,getFrameIndex: function(Frame) {
		return HxOverrides.indexOf(this._sprite.framesData.frames,Frame,0);
	}
	,__class__: flixel_animation_FlxAnimationController
	,__properties__: {get_frames:"get_frames",set_finished:"set_finished",get_finished:"get_finished",set_paused:"set_paused",get_paused:"get_paused",set_name:"set_name",get_name:"get_name",set_frameName:"set_frameName",get_frameName:"get_frameName",set_frameIndex:"set_frameIndex",set_curAnim:"set_curAnim",get_curAnim:"get_curAnim"}
};
var flixel_animation_FlxPrerotatedAnimation = function(Parent,Baked) {
	this.angle = 0;
	flixel_animation_FlxBaseAnimation.call(this,Parent,"prerotated_animation");
	this.baked = Baked;
	this.rotations = Math.round(360 / Baked);
};
$hxClasses["flixel.animation.FlxPrerotatedAnimation"] = flixel_animation_FlxPrerotatedAnimation;
flixel_animation_FlxPrerotatedAnimation.__name__ = ["flixel","animation","FlxPrerotatedAnimation"];
flixel_animation_FlxPrerotatedAnimation.__super__ = flixel_animation_FlxBaseAnimation;
flixel_animation_FlxPrerotatedAnimation.prototype = $extend(flixel_animation_FlxBaseAnimation.prototype,{
	rotations: null
	,baked: null
	,angle: null
	,set_angle: function(Value) {
		var oldIndex = this.curIndex;
		var angleHelper = Math.floor(Value % 360);
		while(angleHelper < 0) angleHelper += 360;
		var newIndex = Math.floor(angleHelper / this.baked + 0.5);
		newIndex = newIndex % this.rotations | 0;
		if(oldIndex != newIndex) this.set_curIndex(newIndex);
		return this.angle = Value;
	}
	,set_curIndex: function(Value) {
		this.curIndex = Value;
		if(this.parent != null) this.parent.set_frameIndex(Value);
		return Value;
	}
	,clone: function(Parent) {
		return new flixel_animation_FlxPrerotatedAnimation(Parent,this.baked);
	}
	,__class__: flixel_animation_FlxPrerotatedAnimation
	,__properties__: $extend(flixel_animation_FlxBaseAnimation.prototype.__properties__,{set_angle:"set_angle"})
});
var flixel_util_FlxPool_$flixel_$effects_$FlxFlicker = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_effects_FlxFlicker"] = flixel_util_FlxPool_$flixel_$effects_$FlxFlicker;
flixel_util_FlxPool_$flixel_$effects_$FlxFlicker.__name__ = ["flixel","util","FlxPool_flixel_effects_FlxFlicker"];
flixel_util_FlxPool_$flixel_$effects_$FlxFlicker.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel_util_FlxPool_$flixel_$effects_$FlxFlicker
	,__properties__: {get_length:"get_length"}
};
var flixel_effects_FlxFlicker = function() {
};
$hxClasses["flixel.effects.FlxFlicker"] = flixel_effects_FlxFlicker;
flixel_effects_FlxFlicker.__name__ = ["flixel","effects","FlxFlicker"];
flixel_effects_FlxFlicker.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_effects_FlxFlicker.flicker = function(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback) {
	if(ForceRestart == null) ForceRestart = true;
	if(EndVisibility == null) EndVisibility = true;
	if(Interval == null) Interval = 0.04;
	if(Duration == null) Duration = 1;
	if(flixel_effects_FlxFlicker.isFlickering(Object)) {
		if(ForceRestart) flixel_effects_FlxFlicker.stopFlickering(Object); else return;
	}
	if(Interval <= 0) Interval = flixel_FlxG.elapsed;
	var flicker = flixel_effects_FlxFlicker._pool.get();
	flicker.start(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback);
	{
		flixel_effects_FlxFlicker._boundObjects.set(Object,flicker);
		flicker;
	}
};
flixel_effects_FlxFlicker.isFlickering = function(Object) {
	return flixel_effects_FlxFlicker._boundObjects.h.__keys__[Object.__id__] != null;
};
flixel_effects_FlxFlicker.stopFlickering = function(Object) {
	var boundFlicker = flixel_effects_FlxFlicker._boundObjects.h[Object.__id__];
	if(boundFlicker != null) boundFlicker.stop();
};
flixel_effects_FlxFlicker.prototype = {
	object: null
	,endVisibility: null
	,timer: null
	,completionCallback: null
	,progressCallback: null
	,duration: null
	,interval: null
	,destroy: function() {
		this.object = null;
		this.timer = null;
		this.completionCallback = null;
		this.progressCallback = null;
	}
	,start: function(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback) {
		this.object = Object;
		this.duration = Duration;
		this.interval = Interval;
		this.completionCallback = CompletionCallback;
		this.progressCallback = ProgressCallback;
		this.endVisibility = EndVisibility;
		this.timer = new flixel_util_FlxTimer(this.interval,$bind(this,this.flickerProgress),this.duration / this.interval | 0);
	}
	,stop: function() {
		this.timer.cancel();
		this.object.set_visible(true);
		this.release();
	}
	,release: function() {
		flixel_effects_FlxFlicker._boundObjects.remove(this.object);
		flixel_effects_FlxFlicker._pool.put(this);
	}
	,flickerProgress: function(Timer) {
		this.object.set_visible(!this.object.visible);
		if(this.progressCallback != null) this.progressCallback(this);
		if(Timer.loops > 0 && Timer.loops - Timer._loopsCounter == 0) {
			this.object.set_visible(this.endVisibility);
			if(this.completionCallback != null) this.completionCallback(this);
			this.release();
		}
	}
	,__class__: flixel_effects_FlxFlicker
};
var flixel_effects_particles_FlxTypedEmitter = function(X,Y,Size) {
	if(Size == null) Size = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._waitForKill = false;
	this._counter = 0;
	this._timer = 0;
	this._explode = true;
	this._quantity = 0;
	this.bounce = 0;
	this.frequency = 0.1;
	this.on = false;
	flixel_group_FlxTypedGroup.call(this,Size);
	this.xPosition = new flixel_effects_particles_Bounds(X,0);
	this.yPosition = new flixel_effects_particles_Bounds(Y,0);
	this.xVelocity = new flixel_effects_particles_Bounds(-100,100);
	this.yVelocity = new flixel_effects_particles_Bounds(-100,100);
	this.rotation = new flixel_effects_particles_Bounds(-360,360);
	this.startScale = new flixel_effects_particles_Bounds(1,1);
	this.endScale = new flixel_effects_particles_Bounds(1,1);
	this.startAlpha = new flixel_effects_particles_Bounds(1.0,1.0);
	this.endAlpha = new flixel_effects_particles_Bounds(1.0,1.0);
	this.startRed = new flixel_effects_particles_Bounds(1.0,1.0);
	this.startGreen = new flixel_effects_particles_Bounds(1.0,1.0);
	this.startBlue = new flixel_effects_particles_Bounds(1.0,1.0);
	this.endRed = new flixel_effects_particles_Bounds(1.0,1.0);
	this.endGreen = new flixel_effects_particles_Bounds(1.0,1.0);
	this.endBlue = new flixel_effects_particles_Bounds(1.0,1.0);
	this.acceleration = flixel_util_FlxPoint.get(0,0);
	this._particleClass = flixel_effects_particles_FlxParticle;
	this.particleDrag = flixel_util_FlxPoint.get(null,null);
	this.life = new flixel_effects_particles_Bounds(3,3);
	this.set_exists(false);
	this._point = flixel_util_FlxPoint.get(null,null);
};
$hxClasses["flixel.effects.particles.FlxTypedEmitter"] = flixel_effects_particles_FlxTypedEmitter;
flixel_effects_particles_FlxTypedEmitter.__name__ = ["flixel","effects","particles","FlxTypedEmitter"];
flixel_effects_particles_FlxTypedEmitter.__super__ = flixel_group_FlxTypedGroup;
flixel_effects_particles_FlxTypedEmitter.prototype = $extend(flixel_group_FlxTypedGroup.prototype,{
	xPosition: null
	,yPosition: null
	,xVelocity: null
	,yVelocity: null
	,particleDrag: null
	,rotation: null
	,acceleration: null
	,on: null
	,frequency: null
	,life: null
	,startScale: null
	,endScale: null
	,startAlpha: null
	,endAlpha: null
	,startRed: null
	,startGreen: null
	,startBlue: null
	,endRed: null
	,endGreen: null
	,endBlue: null
	,blend: null
	,bounce: null
	,_particleClass: null
	,_quantity: null
	,_explode: null
	,_timer: null
	,_counter: null
	,_point: null
	,_waitForKill: null
	,destroy: function() {
		this._point = flixel_util_FlxDestroyUtil.put(this._point);
		this.acceleration = flixel_util_FlxDestroyUtil.put(this.acceleration);
		this.particleDrag = flixel_util_FlxDestroyUtil.put(this.particleDrag);
		this.xPosition = null;
		this.yPosition = null;
		this.xVelocity = null;
		this.yVelocity = null;
		this.rotation = null;
		this.startScale = null;
		this.endScale = null;
		this.startAlpha = null;
		this.endAlpha = null;
		this.startRed = null;
		this.startGreen = null;
		this.startBlue = null;
		this.endRed = null;
		this.endGreen = null;
		this.endBlue = null;
		this.blend = null;
		this._point = null;
		flixel_group_FlxTypedGroup.prototype.destroy.call(this);
	}
	,makeParticles: function(Graphics,Quantity,bakedRotationAngles,Multiple,Collide,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(Collide == null) Collide = 0.8;
		if(Multiple == null) Multiple = false;
		if(bakedRotationAngles == null) bakedRotationAngles = 16;
		if(Quantity == null) Quantity = 50;
		this.set_maxSize(Quantity);
		var totalFrames = 1;
		if(Multiple) {
			var sprite = new flixel_FlxSprite();
			sprite.loadGraphic(Graphics,true);
			totalFrames = sprite.frames;
			sprite.destroy();
		}
		var randomFrame;
		var particle;
		var pClass = this._particleClass;
		var i = 0;
		while(i < Quantity) {
			particle = Type.createInstance(pClass,[]);
			if(Multiple) {
				randomFrame = flixel_util_FlxRandom.intRanged(0,totalFrames - 1);
				if(bakedRotationAngles > 0) particle.loadRotatedGraphic(Graphics,bakedRotationAngles,randomFrame,false,AutoBuffer); else particle.loadGraphic(Graphics,true);
				particle.animation.set_frameIndex(randomFrame);
			} else if(bakedRotationAngles > 0) particle.loadRotatedGraphic(Graphics,bakedRotationAngles,-1,false,AutoBuffer); else particle.loadGraphic(Graphics);
			if(Collide > 0) {
				var _g = particle;
				_g.set_width(_g.get_width() * Collide);
				var _g1 = particle;
				_g1.set_height(_g1.get_height() * Collide);
				particle.centerOffsets();
			} else particle.allowCollisions = 0;
			particle.set_exists(false);
			this.add(particle);
			i++;
		}
		return this;
	}
	,update: function() {
		if(this.on) {
			if(this._explode) {
				this.on = false;
				this._waitForKill = true;
				var i = 0;
				var l = this._quantity;
				if(l <= 0 || l > this.length) l = this.length;
				while(i < l) {
					this.emitParticle();
					i++;
				}
				this._quantity = 0;
			} else if(this.frequency <= 0) {
				this.emitParticle();
				if(this._quantity > 0 && ++this._counter >= this._quantity) {
					this.on = false;
					this._waitForKill = true;
					this._quantity = 0;
				}
			} else {
				this._timer += flixel_FlxG.elapsed;
				while(this._timer > this.frequency) {
					this._timer -= this.frequency;
					this.emitParticle();
					if(this._quantity > 0 && ++this._counter >= this._quantity) {
						this.on = false;
						this._waitForKill = true;
						this._quantity = 0;
					}
				}
			}
		} else if(this._waitForKill) {
			this._timer += flixel_FlxG.elapsed;
			if(this.life.max > 0 && this._timer > this.life.max) {
				this.kill();
				return;
			}
		}
		flixel_group_FlxTypedGroup.prototype.update.call(this);
	}
	,kill: function() {
		this.on = false;
		this._waitForKill = false;
		flixel_group_FlxTypedGroup.prototype.kill.call(this);
	}
	,start: function(Explode,Lifespan,Frequency,Quantity,LifespanRange) {
		if(LifespanRange == null) LifespanRange = 0;
		if(Quantity == null) Quantity = 0;
		if(Frequency == null) Frequency = 0.1;
		if(Lifespan == null) Lifespan = 0;
		if(Explode == null) Explode = true;
		this.revive();
		this.set_visible(true);
		this.on = true;
		this._explode = Explode;
		this.life.min = Lifespan;
		this.life.max = Lifespan + Math.abs(LifespanRange);
		this.frequency = Frequency;
		this._quantity += Quantity;
		this._counter = 0;
		this._timer = 0;
		this._waitForKill = false;
	}
	,emitParticle: function() {
		var particle = this.recycle(this._particleClass);
		particle.elasticity = this.bounce;
		particle.reset(this.get_x() - (Std["int"](particle.get_width()) >> 1) + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * this.get_width(),this.get_y() - (Std["int"](particle.get_height()) >> 1) + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * this.get_height());
		particle.set_visible(true);
		if(this.life.min != this.life.max) particle.lifespan = particle.maxLifespan = this.life.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.life.max - this.life.min); else particle.lifespan = particle.maxLifespan = this.life.min;
		if(this.startAlpha.min != this.startAlpha.max) particle.startAlpha = this.startAlpha.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.startAlpha.max - this.startAlpha.min); else particle.startAlpha = this.startAlpha.min;
		particle.set_alpha(particle.startAlpha);
		var particleEndAlpha = this.endAlpha.min;
		if(this.endAlpha.min != this.endAlpha.max) particleEndAlpha = this.endAlpha.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.endAlpha.max - this.endAlpha.min);
		if(particleEndAlpha != particle.startAlpha) {
			particle.useFading = true;
			particle.rangeAlpha = particleEndAlpha - particle.startAlpha;
		} else {
			particle.useFading = false;
			particle.rangeAlpha = 0;
		}
		var startRedComp = particle.startRed = this.startRed.min;
		var startGreenComp = particle.startGreen = this.startGreen.min;
		var startBlueComp = particle.startBlue = this.startBlue.min;
		var endRedComp = this.endRed.min;
		var endGreenComp = this.endGreen.min;
		var endBlueComp = this.endBlue.min;
		if(this.startRed.min != this.startRed.max) particle.startRed = startRedComp = this.startRed.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.startRed.max - this.startRed.min);
		if(this.startGreen.min != this.startGreen.max) particle.startGreen = startGreenComp = this.startGreen.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.startGreen.max - this.startGreen.min);
		if(this.startBlue.min != this.startBlue.max) particle.startBlue = startBlueComp = this.startBlue.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.startBlue.max - this.startBlue.min);
		if(this.endRed.min != this.endRed.max) endRedComp = this.endRed.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.endRed.max - this.endRed.min);
		if(this.endGreen.min != this.endGreen.max) endGreenComp = this.endGreen.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.endGreen.max - this.endGreen.min);
		if(this.endBlue.min != this.endBlue.max) endBlueComp = this.endBlue.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.endBlue.max - this.endBlue.min);
		particle.rangeRed = endRedComp - startRedComp;
		particle.rangeGreen = endGreenComp - startGreenComp;
		particle.rangeBlue = endBlueComp - startBlueComp;
		particle.useColoring = false;
		if(particle.rangeRed != 0 || particle.rangeGreen != 0 || particle.rangeBlue != 0) particle.useColoring = true;
		if(this.startScale.min != this.startScale.max) particle.startScale = this.startScale.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.startScale.max - this.startScale.min); else particle.startScale = this.startScale.min;
		particle.scale.set_x(particle.scale.set_y(particle.startScale));
		var particleEndScale = this.endScale.min;
		if(this.endScale.min != this.endScale.max) particleEndScale = this.endScale.min + flixel_util_FlxRandom.intRanged(0,this.endScale.max - this.endScale.min | 0);
		if(particleEndScale != particle.startScale) {
			particle.useScaling = true;
			particle.rangeScale = particleEndScale - particle.startScale;
		} else {
			particle.useScaling = false;
			particle.rangeScale = 0;
		}
		particle.set_blend(this.blend);
		if(this.xVelocity.min != this.xVelocity.max) particle.velocity.set_x(this.xVelocity.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.xVelocity.max - this.xVelocity.min)); else particle.velocity.set_x(this.xVelocity.min);
		if(this.yVelocity.min != this.yVelocity.max) particle.velocity.set_y(this.yVelocity.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.yVelocity.max - this.yVelocity.min)); else particle.velocity.set_y(this.yVelocity.min);
		particle.acceleration.set(this.acceleration.x,this.acceleration.y);
		if(this.rotation.min != this.rotation.max) particle.angularVelocity = this.rotation.min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (this.rotation.max - this.rotation.min); else particle.angularVelocity = this.rotation.min;
		if(particle.angularVelocity != 0) particle.set_angle((flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * 360 - 180);
		particle.drag.set(this.particleDrag.x,this.particleDrag.y);
		particle.onEmit();
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,setXSpeed: function(Min,Max) {
		if(Max == null) Max = 0;
		if(Min == null) Min = 0;
		if(Max < Min) Max = Min;
		this.xVelocity.min = Min;
		this.xVelocity.max = Max;
	}
	,setYSpeed: function(Min,Max) {
		if(Max == null) Max = 0;
		if(Min == null) Min = 0;
		if(Max < Min) Max = Min;
		this.yVelocity.min = Min;
		this.yVelocity.max = Max;
	}
	,setRotation: function(Min,Max) {
		if(Max == null) Max = 0;
		if(Min == null) Min = 0;
		if(Max < Min) Max = Min;
		this.rotation.min = Min;
		this.rotation.max = Max;
	}
	,setScale: function(StartMin,StartMax,EndMin,EndMax) {
		if(EndMax == null) EndMax = 1;
		if(EndMin == null) EndMin = 1;
		if(StartMax == null) StartMax = 1;
		if(StartMin == null) StartMin = 1;
		if(StartMax < StartMin) StartMax = StartMin;
		if(EndMax < EndMin) EndMax = EndMin;
		this.startScale.min = StartMin;
		this.startScale.max = StartMax;
		this.endScale.min = EndMin;
		this.endScale.max = EndMax;
	}
	,setAlpha: function(StartMin,StartMax,EndMin,EndMax) {
		if(EndMax == null) EndMax = 1;
		if(EndMin == null) EndMin = 1;
		if(StartMax == null) StartMax = 1;
		if(StartMin == null) StartMin = 1;
		if(StartMin < 0) StartMin = 0;
		if(StartMax < StartMin) StartMax = StartMin;
		if(EndMin < 0) EndMin = 0;
		if(EndMax < EndMin) EndMax = EndMin;
		this.startAlpha.min = StartMin;
		this.startAlpha.max = StartMax;
		this.endAlpha.min = EndMin;
		this.endAlpha.max = EndMax;
	}
	,setColor: function(Start,End) {
		if(End == null) End = 16777215;
		if(Start == null) Start = 16777215;
		Start &= 16777215;
		End &= 16777215;
		var startRedComp = (Start >> 16 & 255) / 255;
		var startGreenComp = (Start >> 8 & 255) / 255;
		var startBlueComp = (Start & 255) / 255;
		var endRedComp = (End >> 16 & 255) / 255;
		var endGreenComp = (End >> 8 & 255) / 255;
		var endBlueComp = (End & 255) / 255;
		this.startRed.min = this.startRed.max = startRedComp;
		this.startGreen.min = this.startGreen.max = startGreenComp;
		this.startBlue.min = this.startBlue.max = startBlueComp;
		this.endRed.min = this.endRed.max = endRedComp;
		this.endGreen.min = this.endGreen.max = endGreenComp;
		this.endBlue.min = this.endBlue.max = endBlueComp;
	}
	,at: function(Object) {
		Object.getMidpoint(this._point);
		this.set_x(this._point.x - (Std["int"](this.get_width()) >> 1));
		this.set_y(this._point.y - (Std["int"](this.get_height()) >> 1));
	}
	,get_particleClass: function() {
		return this._particleClass;
	}
	,set_particleClass: function(Value) {
		return this._particleClass = Value;
	}
	,get_width: function() {
		return this.xPosition.max;
	}
	,set_width: function(Value) {
		return this.xPosition.max = Value;
	}
	,get_height: function() {
		return this.yPosition.max;
	}
	,set_height: function(Value) {
		return this.yPosition.max = Value;
	}
	,get_x: function() {
		return this.xPosition.min;
	}
	,set_x: function(Value) {
		return this.xPosition.min = Value;
	}
	,get_y: function() {
		return this.yPosition.min;
	}
	,set_y: function(Value) {
		return this.yPosition.min = Value;
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
	}
	,get_gravity: function() {
		return this.acceleration.y;
	}
	,set_gravity: function(Value) {
		return this.acceleration.set_y(Value);
	}
	,get_minRotation: function() {
		return this.rotation.min;
	}
	,set_minRotation: function(Value) {
		return this.rotation.min = Value;
	}
	,get_maxRotation: function() {
		return this.rotation.max;
	}
	,set_maxRotation: function(Value) {
		return this.rotation.max = Value;
	}
	,get_lifespan: function() {
		return this.life.min;
	}
	,set_lifespan: function(Value) {
		var dl = this.life.max - this.life.min;
		this.life.min = Value;
		this.life.max = Value + dl;
		return Value;
	}
	,__class__: flixel_effects_particles_FlxTypedEmitter
	,__properties__: $extend(flixel_group_FlxTypedGroup.prototype.__properties__,{set_lifespan:"set_lifespan",get_lifespan:"get_lifespan",set_maxRotation:"set_maxRotation",get_maxRotation:"get_maxRotation",set_minRotation:"set_minRotation",get_minRotation:"get_minRotation",set_gravity:"set_gravity",get_gravity:"get_gravity",set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width",set_particleClass:"set_particleClass",get_particleClass:"get_particleClass"})
});
var flixel_effects_particles_FlxEmitter = function(X,Y,Size) {
	if(Size == null) Size = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel_effects_particles_FlxTypedEmitter.call(this,X,Y,Size);
};
$hxClasses["flixel.effects.particles.FlxEmitter"] = flixel_effects_particles_FlxEmitter;
flixel_effects_particles_FlxEmitter.__name__ = ["flixel","effects","particles","FlxEmitter"];
flixel_effects_particles_FlxEmitter.__super__ = flixel_effects_particles_FlxTypedEmitter;
flixel_effects_particles_FlxEmitter.prototype = $extend(flixel_effects_particles_FlxTypedEmitter.prototype,{
	__class__: flixel_effects_particles_FlxEmitter
});
var flixel_interfaces_IFlxBasic = function() { };
$hxClasses["flixel.interfaces.IFlxBasic"] = flixel_interfaces_IFlxBasic;
flixel_interfaces_IFlxBasic.__name__ = ["flixel","interfaces","IFlxBasic"];
flixel_interfaces_IFlxBasic.prototype = {
	set_active: null
	,set_visible: null
	,set_alive: null
	,set_exists: null
	,ID: null
	,active: null
	,visible: null
	,alive: null
	,exists: null
	,draw: null
	,update: null
	,destroy: null
	,kill: null
	,revive: null
	,toString: null
	,__class__: flixel_interfaces_IFlxBasic
	,__properties__: {set_exists:"set_exists",set_alive:"set_alive",set_visible:"set_visible",set_active:"set_active"}
};
var flixel_interfaces_IFlxSprite = function() { };
$hxClasses["flixel.interfaces.IFlxSprite"] = flixel_interfaces_IFlxSprite;
flixel_interfaces_IFlxSprite.__name__ = ["flixel","interfaces","IFlxSprite"];
flixel_interfaces_IFlxSprite.__interfaces__ = [flixel_interfaces_IFlxBasic];
flixel_interfaces_IFlxSprite.prototype = {
	set_x: null
	,set_y: null
	,set_alpha: null
	,set_angle: null
	,set_facing: null
	,set_moves: null
	,set_immovable: null
	,x: null
	,y: null
	,alpha: null
	,angle: null
	,facing: null
	,moves: null
	,immovable: null
	,offset: null
	,origin: null
	,scale: null
	,velocity: null
	,maxVelocity: null
	,acceleration: null
	,drag: null
	,scrollFactor: null
	,reset: null
	,setPosition: null
	,__class__: flixel_interfaces_IFlxSprite
	,__properties__: {set_immovable:"set_immovable",set_moves:"set_moves",set_facing:"set_facing",set_angle:"set_angle",set_alpha:"set_alpha",set_y:"set_y",set_x:"set_x"}
};
var flixel_interfaces_IFlxParticle = function() { };
$hxClasses["flixel.interfaces.IFlxParticle"] = flixel_interfaces_IFlxParticle;
flixel_interfaces_IFlxParticle.__name__ = ["flixel","interfaces","IFlxParticle"];
flixel_interfaces_IFlxParticle.__interfaces__ = [flixel_interfaces_IFlxSprite];
flixel_interfaces_IFlxParticle.prototype = {
	lifespan: null
	,friction: null
	,useFading: null
	,useScaling: null
	,useColoring: null
	,maxLifespan: null
	,startAlpha: null
	,rangeAlpha: null
	,startScale: null
	,rangeScale: null
	,startRed: null
	,startGreen: null
	,startBlue: null
	,rangeRed: null
	,rangeGreen: null
	,rangeBlue: null
	,onEmit: null
	,__class__: flixel_interfaces_IFlxParticle
};
var flixel_effects_particles_FlxParticle = function() {
	this.useColoring = false;
	this.useScaling = false;
	this.useFading = false;
	this.friction = 500;
	this.lifespan = 0;
	flixel_FlxSprite.call(this);
	this.set_exists(false);
};
$hxClasses["flixel.effects.particles.FlxParticle"] = flixel_effects_particles_FlxParticle;
flixel_effects_particles_FlxParticle.__name__ = ["flixel","effects","particles","FlxParticle"];
flixel_effects_particles_FlxParticle.__interfaces__ = [flixel_interfaces_IFlxParticle];
flixel_effects_particles_FlxParticle.__super__ = flixel_FlxSprite;
flixel_effects_particles_FlxParticle.prototype = $extend(flixel_FlxSprite.prototype,{
	lifespan: null
	,friction: null
	,useFading: null
	,useScaling: null
	,useColoring: null
	,maxLifespan: null
	,startAlpha: null
	,rangeAlpha: null
	,startScale: null
	,rangeScale: null
	,startRed: null
	,startGreen: null
	,startBlue: null
	,rangeRed: null
	,rangeGreen: null
	,rangeBlue: null
	,update: function() {
		if(this.lifespan > 0) {
			this.lifespan -= flixel_FlxG.elapsed;
			if(this.lifespan <= 0) this.kill();
			var lifespanRatio = 1 - this.lifespan / this.maxLifespan;
			if(this.useFading) this.set_alpha(this.startAlpha + lifespanRatio * this.rangeAlpha);
			if(this.useScaling) this.scale.set_x(this.scale.set_y(this.startScale + lifespanRatio * this.rangeScale));
			if(this.useColoring) {
				var redComp = this.startRed + lifespanRatio * this.rangeRed;
				var greenComp = this.startGreen + lifespanRatio * this.rangeGreen;
				var blueComp = this.startBlue + lifespanRatio * this.rangeBlue;
				this.set_color((255 * redComp | 0) << 16 | (255 * greenComp | 0) << 8 | (255 * blueComp | 0));
			}
			if(this.touching != 0) {
				if(this.angularVelocity != 0) this.angularVelocity = -this.angularVelocity;
			}
			if(this.acceleration.y > 0) {
				if((this.touching & 4096) != 0) {
					this.drag.set_x(this.friction);
					if((this.wasTouching & 4096) == 0) {
						if(this.velocity.y < -this.elasticity * 10) {
							if(this.angularVelocity != 0) this.angularVelocity *= -this.elasticity;
						} else {
							this.velocity.set_y(0);
							this.angularVelocity = 0;
						}
					}
				} else this.drag.set_x(0);
			}
		}
		if(this.exists && this.alive) flixel_FlxSprite.prototype.update.call(this);
	}
	,reset: function(X,Y) {
		flixel_FlxSprite.prototype.reset.call(this,X,Y);
		this.set_alpha(1.0);
		this.scale.set_x(this.scale.set_y(1.0));
		this.set_color(16777215);
	}
	,onEmit: function() {
	}
	,__class__: flixel_effects_particles_FlxParticle
});
var flixel_effects_particles_Bounds = function(min,max) {
	this.set(min,max);
};
$hxClasses["flixel.effects.particles.Bounds"] = flixel_effects_particles_Bounds;
flixel_effects_particles_Bounds.__name__ = ["flixel","effects","particles","Bounds"];
flixel_effects_particles_Bounds.prototype = {
	min: null
	,max: null
	,set: function(min,max) {
		this.min = min;
		if(max == null) this.max = min; else this.max = max;
		return this;
	}
	,__class__: flixel_effects_particles_Bounds
};
var flixel_group_FlxTypedSpriteGroup = function(X,Y,MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._skipTransformChildren = false;
	flixel_FlxSprite.call(this,X,Y);
	this.group = new flixel_group_FlxTypedGroup(MaxSize);
	this._sprites = this.group.members;
};
$hxClasses["flixel.group.FlxTypedSpriteGroup"] = flixel_group_FlxTypedSpriteGroup;
flixel_group_FlxTypedSpriteGroup.__name__ = ["flixel","group","FlxTypedSpriteGroup"];
flixel_group_FlxTypedSpriteGroup.__super__ = flixel_FlxSprite;
flixel_group_FlxTypedSpriteGroup.prototype = $extend(flixel_FlxSprite.prototype,{
	transformChildren_flash_display_BlendMode: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Int: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Float: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Bool: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Array_flixel_FlxCamera: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,multiTransformChildren_Float: function(FunctionArray,ValueArray) {
		if(this.group == null) return;
		var numProps = FunctionArray.length;
		if(numProps > ValueArray.length) return;
		var lambda;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) {
				var _g2 = 0;
				while(_g2 < numProps) {
					var i = _g2++;
					lambda = FunctionArray[i];
					lambda(sprite,ValueArray[i]);
				}
			}
		}
	}
	,transformChildren_flixel_util_FlxPoint: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,group: null
	,members: null
	,length: null
	,_skipTransformChildren: null
	,_sprites: null
	,initVars: function() {
		this.collisionType = 4;
		this.offset = new flixel_util_FlxCallbackPoint($bind(this,this.offsetCallback));
		this.origin = new flixel_util_FlxCallbackPoint($bind(this,this.originCallback));
		this.scale = new flixel_util_FlxCallbackPoint($bind(this,this.scaleCallback));
		this.scrollFactor = new flixel_util_FlxCallbackPoint($bind(this,this.scrollFactorCallback));
		this.scale.set(1,1);
		this.scrollFactor.set(1,1);
		this.velocity = flixel_util_FlxPoint.get(null,null);
		this.acceleration = flixel_util_FlxPoint.get(null,null);
		this.drag = flixel_util_FlxPoint.get(null,null);
		this.maxVelocity = flixel_util_FlxPoint.get(10000,10000);
	}
	,destroy: function() {
		this.offset = flixel_util_FlxDestroyUtil.destroy(this.offset);
		this.origin = flixel_util_FlxDestroyUtil.destroy(this.origin);
		this.scale = flixel_util_FlxDestroyUtil.destroy(this.scale);
		this.scrollFactor = flixel_util_FlxDestroyUtil.destroy(this.scrollFactor);
		this.group = flixel_util_FlxDestroyUtil.destroy(this.group);
		this._sprites = null;
		flixel_FlxSprite.prototype.destroy.call(this);
	}
	,clone: function(NewSprite) {
		if(NewSprite == null || !js_Boot.__instanceof(NewSprite,flixel_group_FlxTypedSpriteGroup)) NewSprite = new flixel_group_FlxTypedSpriteGroup(0,0,this.group.maxSize);
		var cloned = NewSprite;
		cloned.group.set_maxSize(this.group.maxSize);
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) cloned.add(sprite.clone());
		}
		return cloned;
	}
	,isOnScreen: function(Camera) {
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.isOnScreen(Camera);
		}
		return result;
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.overlapsPoint(point,InScreenSpace,Camera);
		}
		return result;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.pixelsOverlapPoint(point,Mask,Camera);
		}
		return result;
	}
	,update: function() {
		this.group.update();
		if(this.moves) this.updateMotion();
	}
	,draw: function() {
		this.group.draw();
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = [];
		var spritePositions;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				spritePositions = sprite.replaceColor(Color,NewColor,FetchPositions);
				if(FetchPositions) positions = positions.concat(spritePositions);
			}
		}
		return positions;
	}
	,add: function(Sprite) {
		var sprite = Sprite;
		var _g = sprite;
		_g.set_x(_g.x + this.x);
		var _g1 = sprite;
		_g1.set_y(_g1.y + this.y);
		var _g2 = sprite;
		_g2.set_alpha(_g2.alpha * this.alpha);
		sprite.scrollFactor.copyFrom(this.scrollFactor);
		sprite.set_cameras(this._cameras);
		return this.group.add(Sprite);
	}
	,recycle: function(ObjectClass,ContructorArgs,Force) {
		if(Force == null) Force = false;
		return this.group.recycle(ObjectClass,ContructorArgs,Force);
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		return this.group.remove(Object,Splice);
	}
	,replace: function(OldObject,NewObject) {
		return this.group.replace(OldObject,NewObject);
	}
	,sort: function(Function,Order) {
		if(Order == null) Order = -1;
		this.group.sort(Function,Order);
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		this.group.setAll(VariableName,Value,Recurse);
	}
	,callAll: function(FunctionName,Args,Recurse) {
		if(Recurse == null) Recurse = true;
		this.group.callAll(FunctionName,Args,Recurse);
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) Force = false;
		return this.group.getFirstAvailable(ObjectClass,Force);
	}
	,getFirstNull: function() {
		return this.group.getFirstNull();
	}
	,getFirstExisting: function() {
		return this.group.getFirstExisting();
	}
	,getFirstAlive: function() {
		return this.group.getFirstAlive();
	}
	,getFirstDead: function() {
		return this.group.getFirstDead();
	}
	,countLiving: function() {
		return this.group.countLiving();
	}
	,countDead: function() {
		return this.group.countDead();
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		return this.group.getRandom(StartIndex,Length);
	}
	,forEach: function(Function) {
		this.group.forEach(Function);
	}
	,forEachAlive: function(Function) {
		this.group.forEachAlive(Function);
	}
	,forEachDead: function(Function) {
		this.group.forEachDead(Function);
	}
	,forEachExists: function(Function) {
		this.group.forEachExists(Function);
	}
	,forEachOfType: function(ObjectClass,Function) {
		this.group.forEachOfType(ObjectClass,Function);
	}
	,clear: function() {
		this.group.clear();
	}
	,kill: function() {
		flixel_FlxSprite.prototype.kill.call(this);
		this.group.kill();
	}
	,revive: function() {
		flixel_FlxSprite.prototype.revive.call(this);
		this.group.revive();
	}
	,reset: function(X,Y) {
		this.revive();
		this.setPosition(X,Y);
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) sprite.reset(X,Y);
		}
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var dx = X - this.x;
		var dy = Y - this.y;
		this.multiTransformChildren_Float([$bind(this,this.xTransform),$bind(this,this.yTransform)],[dx,dy]);
		this._skipTransformChildren = true;
		this.set_x(X);
		this.set_y(Y);
		this._skipTransformChildren = false;
	}
	,set_cameras: function(Value) {
		if(this.get_cameras() != Value) this.transformChildren_Array_flixel_FlxCamera($bind(this,this.camerasTransform),Value);
		return flixel_FlxSprite.prototype.set_cameras.call(this,Value);
	}
	,set_exists: function(Value) {
		if(this.exists != Value) this.transformChildren_Bool($bind(this,this.existsTransform),Value);
		return flixel_FlxSprite.prototype.set_exists.call(this,Value);
	}
	,set_visible: function(Value) {
		if(this.exists && this.visible != Value) this.transformChildren_Bool($bind(this,this.visibleTransform),Value);
		return flixel_FlxSprite.prototype.set_visible.call(this,Value);
	}
	,set_active: function(Value) {
		if(this.exists && this.active != Value) this.transformChildren_Bool($bind(this,this.activeTransform),Value);
		return flixel_FlxSprite.prototype.set_active.call(this,Value);
	}
	,set_alive: function(Value) {
		if(this.exists && this.alive != Value) this.transformChildren_Bool($bind(this,this.aliveTransform),Value);
		return flixel_FlxSprite.prototype.set_alive.call(this,Value);
	}
	,set_x: function(Value) {
		if(!this._skipTransformChildren && this.exists && this.x != Value) {
			var offset = Value - this.x;
			this.transformChildren_Float($bind(this,this.xTransform),offset);
		}
		return this.x = Value;
	}
	,set_y: function(Value) {
		if(!this._skipTransformChildren && this.exists && this.y != Value) {
			var offset = Value - this.y;
			this.transformChildren_Float($bind(this,this.yTransform),offset);
		}
		return this.y = Value;
	}
	,set_angle: function(Value) {
		if(this.exists && this.angle != Value) {
			var offset = Value - this.angle;
			this.transformChildren_Float($bind(this,this.angleTransform),offset);
		}
		return this.angle = Value;
	}
	,set_alpha: function(Value) {
		if(Value > 1) Value = 1; else if(Value < 0) Value = 0;
		if(this.exists && this.alpha != Value) {
			var factor;
			if(this.alpha > 0) factor = Value / this.alpha; else factor = 0;
			this.transformChildren_Float($bind(this,this.alphaTransform),factor);
		}
		return this.alpha = Value;
	}
	,set_facing: function(Value) {
		if(this.exists && this.facing != Value) this.transformChildren_Int($bind(this,this.facingTransform),Value);
		return this.facing = Value;
	}
	,set_flipX: function(Value) {
		if(this.exists && this.flipX != Value) this.transformChildren_Bool($bind(this,this.flipXTransform),Value);
		return this.flipX = Value;
	}
	,set_flipY: function(Value) {
		if(this.exists && this.flipY != Value) this.transformChildren_Bool($bind(this,this.flipYTransform),Value);
		return this.flipY = Value;
	}
	,set_moves: function(Value) {
		if(this.exists && this.moves != Value) this.transformChildren_Bool($bind(this,this.movesTransform),Value);
		return this.moves = Value;
	}
	,set_immovable: function(Value) {
		if(this.exists && this.immovable != Value) this.transformChildren_Bool($bind(this,this.immovableTransform),Value);
		return this.immovable = Value;
	}
	,set_solid: function(Value) {
		if(this.exists && (this.allowCollisions & 4369) > 0 != Value) this.transformChildren_Bool($bind(this,this.solidTransform),Value);
		return flixel_FlxSprite.prototype.set_solid.call(this,Value);
	}
	,set_color: function(Value) {
		if(this.exists && this.color != Value) this.transformChildren_Int($bind(this,this.gColorTransform),Value);
		return this.color = Value;
	}
	,set_blend: function(Value) {
		if(this.exists && this.blend != Value) this.transformChildren_flash_display_BlendMode($bind(this,this.blendTransform),Value);
		return this.blend = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		if(this.exists && this.pixelPerfectRender != Value) this.transformChildren_Bool($bind(this,this.pixelPerfectTransform),Value);
		return flixel_FlxSprite.prototype.set_pixelPerfectRender.call(this,Value);
	}
	,set_width: function(Value) {
		return Value;
	}
	,get_width: function() {
		if(this.group.length == 0) return 0;
		var minX = Infinity;
		var maxX = -Infinity;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var member = _g1[_g];
			++_g;
			var minMemberX = member.x;
			var maxMemberX = minMemberX + member.get_width();
			if(maxMemberX > maxX) maxX = maxMemberX;
			if(minMemberX < minX) minX = minMemberX;
		}
		return maxX - minX;
	}
	,set_height: function(Value) {
		return Value;
	}
	,get_height: function() {
		if(this.group.length == 0) return 0;
		var minY = Infinity;
		var maxY = -Infinity;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var member = _g1[_g];
			++_g;
			var minMemberY = member.y;
			var maxMemberY = minMemberY + member.get_height();
			if(maxMemberY > maxY) maxY = maxMemberY;
			if(minMemberY < minY) minY = minMemberY;
		}
		return maxY - minY;
	}
	,get_length: function() {
		return this.group.length;
	}
	,get_maxSize: function() {
		return this.group.maxSize;
	}
	,set_maxSize: function(Size) {
		return this.group.set_maxSize(Size);
	}
	,get_members: function() {
		return this.group.members;
	}
	,xTransform: function(Sprite,X) {
		var _g = Sprite;
		_g.set_x(_g.x + X);
	}
	,yTransform: function(Sprite,Y) {
		var _g = Sprite;
		_g.set_y(_g.y + Y);
	}
	,angleTransform: function(Sprite,Angle) {
		var _g = Sprite;
		_g.set_angle(_g.angle + Angle);
	}
	,alphaTransform: function(Sprite,Alpha) {
		var _g = Sprite;
		_g.set_alpha(_g.alpha * Alpha);
	}
	,facingTransform: function(Sprite,Facing) {
		Sprite.set_facing(Facing);
	}
	,flipXTransform: function(Sprite,FlipX) {
		Sprite.set_flipX(FlipX);
	}
	,flipYTransform: function(Sprite,FlipY) {
		Sprite.set_flipY(FlipY);
	}
	,movesTransform: function(Sprite,Moves) {
		Sprite.set_moves(Moves);
	}
	,pixelPerfectTransform: function(Sprite,PixelPerfect) {
		Sprite.set_pixelPerfectRender(PixelPerfect);
	}
	,gColorTransform: function(Sprite,Color) {
		Sprite.set_color(Color);
	}
	,blendTransform: function(Sprite,Blend) {
		Sprite.set_blend(Blend);
	}
	,immovableTransform: function(Sprite,Immovable) {
		Sprite.set_immovable(Immovable);
	}
	,visibleTransform: function(Sprite,Visible) {
		Sprite.set_visible(Visible);
	}
	,activeTransform: function(Sprite,Active) {
		Sprite.set_active(Active);
	}
	,solidTransform: function(Sprite,Solid) {
		Sprite.set_solid(Solid);
	}
	,aliveTransform: function(Sprite,Alive) {
		Sprite.set_alive(Alive);
	}
	,existsTransform: function(Sprite,Exists) {
		Sprite.set_exists(Exists);
	}
	,camerasTransform: function(Sprite,Cameras) {
		Sprite.set_cameras(Cameras);
	}
	,offsetTransform: function(Sprite,Offset) {
		Sprite.offset.copyFrom(Offset);
	}
	,originTransform: function(Sprite,Origin) {
		Sprite.origin.copyFrom(Origin);
	}
	,scaleTransform: function(Sprite,Scale) {
		Sprite.scale.copyFrom(Scale);
	}
	,scrollFactorTransform: function(Sprite,ScrollFactor) {
		Sprite.scrollFactor.copyFrom(ScrollFactor);
	}
	,offsetCallback: function(Offset) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.offsetTransform),Offset);
	}
	,originCallback: function(Origin) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.originTransform),Origin);
	}
	,scaleCallback: function(Scale) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.scaleTransform),Scale);
	}
	,scrollFactorCallback: function(ScrollFactor) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.scrollFactorTransform),ScrollFactor);
	}
	,loadGraphicFromSprite: function(Sprite) {
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Animated == null) Animated = false;
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		return this;
	}
	,loadGraphicFromTexture: function(Data,Unique,FrameName) {
		if(Unique == null) Unique = false;
		return this;
	}
	,loadRotatedGraphicFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		return this;
	}
	,set_pixels: function(Value) {
		return Value;
	}
	,set_frame: function(Value) {
		return Value;
	}
	,get_pixels: function() {
		return null;
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) RunOnCpp = false;
	}
	,resetHelpers: function() {
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
	}
	,updateColorTransform: function() {
	}
	,updateFrameData: function() {
	}
	,__class__: flixel_group_FlxTypedSpriteGroup
	,__properties__: $extend(flixel_FlxSprite.prototype.__properties__,{set_maxSize:"set_maxSize",get_maxSize:"get_maxSize",get_length:"get_length",get_members:"get_members"})
});
var flixel_group_FlxSpriteGroup = function(X,Y,MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel_group_FlxTypedSpriteGroup.call(this,X,Y);
	this.group.set_maxSize(MaxSize);
};
$hxClasses["flixel.group.FlxSpriteGroup"] = flixel_group_FlxSpriteGroup;
flixel_group_FlxSpriteGroup.__name__ = ["flixel","group","FlxSpriteGroup"];
flixel_group_FlxSpriteGroup.__super__ = flixel_group_FlxTypedSpriteGroup;
flixel_group_FlxSpriteGroup.prototype = $extend(flixel_group_FlxTypedSpriteGroup.prototype,{
	__class__: flixel_group_FlxSpriteGroup
});
var flixel_group_FlxTypedGroupIterator = function(GroupMembers,filter) {
	this._groupMembers = GroupMembers;
	this._filter = filter;
	this._cursor = 0;
	this._length = this._groupMembers.length;
};
$hxClasses["flixel.group.FlxTypedGroupIterator"] = flixel_group_FlxTypedGroupIterator;
flixel_group_FlxTypedGroupIterator.__name__ = ["flixel","group","FlxTypedGroupIterator"];
flixel_group_FlxTypedGroupIterator.prototype = {
	_groupMembers: null
	,_filter: null
	,_cursor: null
	,_length: null
	,next: function() {
		if(this.hasNext()) return this._groupMembers[this._cursor++]; else return null;
	}
	,hasNext: function() {
		while(this._cursor < this._length && (this._groupMembers[this._cursor] == null || this._filter != null && !this._filter(this._groupMembers[this._cursor]))) this._cursor++;
		return this._cursor < this._length;
	}
	,__class__: flixel_group_FlxTypedGroupIterator
};
var flixel_input_FlxSwipe = function(ID,StartPosition,EndPosition,StartTimeInTicks) {
	this.ID = ID;
	this.startPosition = StartPosition;
	this.endPosition = EndPosition;
	this._startTimeInTicks = StartTimeInTicks;
	this._endTimeInTicks = flixel_FlxG.game.ticks;
};
$hxClasses["flixel.input.FlxSwipe"] = flixel_input_FlxSwipe;
flixel_input_FlxSwipe.__name__ = ["flixel","input","FlxSwipe"];
flixel_input_FlxSwipe.prototype = {
	ID: null
	,startPosition: null
	,endPosition: null
	,_startTimeInTicks: null
	,_endTimeInTicks: null
	,toString: function() {
		return flixel_util_FlxStringUtil.getDebugString([flixel_util_LabelValuePair._pool.get().create("ID",this.ID),flixel_util_LabelValuePair._pool.get().create("start",this.startPosition),flixel_util_LabelValuePair._pool.get().create("end",this.endPosition),flixel_util_LabelValuePair.weak("distance",flixel_util_FlxMath.vectorLength(this.startPosition.x - this.endPosition.x,this.startPosition.y - this.endPosition.y)),flixel_util_LabelValuePair.weak("angle",flixel_util_FlxAngle.getAngle(this.startPosition,this.endPosition)),flixel_util_LabelValuePair._pool.get().create("duration",(this._endTimeInTicks - this._startTimeInTicks) / 1000)]);
	}
	,get_distance: function() {
		return flixel_util_FlxMath.vectorLength(this.startPosition.x - this.endPosition.x,this.startPosition.y - this.endPosition.y);
	}
	,get_angle: function() {
		return flixel_util_FlxAngle.getAngle(this.startPosition,this.endPosition);
	}
	,get_duration: function() {
		return this._endTimeInTicks - this._startTimeInTicks;
	}
	,__class__: flixel_input_FlxSwipe
	,__properties__: {get_duration:"get_duration",get_angle:"get_angle",get_distance:"get_distance"}
};
var flixel_input_gamepad_FlxGamepad = function(ID,GlobalDeadZone) {
	if(GlobalDeadZone == null) GlobalDeadZone = 0;
	this.dpadRight = false;
	this.dpadLeft = false;
	this.dpadDown = false;
	this.dpadUp = false;
	this.deadZone = 0.15;
	this.buttons = [];
	var _g = [];
	var _g1 = 0;
	while(_g1 < 6) {
		var i = _g1++;
		_g.push(0);
	}
	this.axis = _g;
	this.id = ID;
	if(GlobalDeadZone != 0) this.deadZone = GlobalDeadZone;
	this.ball = flixel_util_FlxPoint.get(null,null);
	this.hat = flixel_util_FlxPoint.get(null,null);
};
$hxClasses["flixel.input.gamepad.FlxGamepad"] = flixel_input_gamepad_FlxGamepad;
flixel_input_gamepad_FlxGamepad.__name__ = ["flixel","input","gamepad","FlxGamepad"];
flixel_input_gamepad_FlxGamepad.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_input_gamepad_FlxGamepad.prototype = {
	id: null
	,buttons: null
	,deadZone: null
	,hat: null
	,ball: null
	,dpadUp: null
	,dpadDown: null
	,dpadLeft: null
	,dpadRight: null
	,axis: null
	,getButton: function(ButtonID) {
		var gamepadButton = this.buttons[ButtonID];
		if(gamepadButton == null) {
			gamepadButton = new flixel_input_gamepad_FlxGamepadButton(ButtonID);
			this.buttons[ButtonID] = gamepadButton;
		}
		return gamepadButton;
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button == null) continue;
			if(button.last == -1 && button.current == -1) button.current = 0; else if(button.last == 2 && button.current == 2) button.current = 1;
			button.last = button.current;
		}
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null) {
				button.current = 0;
				button.last = 0;
			}
		}
		var numAxis = this.axis.length;
		var _g2 = 0;
		while(_g2 < numAxis) {
			var i = _g2++;
			this.axis[i] = 0;
		}
		this.hat.set();
		this.ball.set();
	}
	,destroy: function() {
		this.buttons = null;
		this.axis = null;
		this.hat = flixel_util_FlxDestroyUtil.put(this.hat);
		this.ball = flixel_util_FlxDestroyUtil.put(this.ball);
		this.hat = null;
		this.ball = null;
	}
	,checkStatus: function(ButtonID,Status) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current == Status;
		return false;
	}
	,anyPressed: function(ButtonIDArray) {
		var _g = 0;
		while(_g < ButtonIDArray.length) {
			var b = ButtonIDArray[_g];
			++_g;
			if(this.buttons[b] != null) {
				if(this.buttons[b].current > 0) return true;
			}
		}
		return false;
	}
	,anyJustPressed: function(ButtonIDArray) {
		var _g = 0;
		while(_g < ButtonIDArray.length) {
			var b = ButtonIDArray[_g];
			++_g;
			if(this.buttons[b] != null) {
				if(this.buttons[b].current == 2) return true;
			}
		}
		return false;
	}
	,anyJustReleased: function(ButtonIDArray) {
		var _g = 0;
		while(_g < ButtonIDArray.length) {
			var b = ButtonIDArray[_g];
			++_g;
			if(this.buttons[b] != null) {
				if(this.buttons[b].current == -1) return true;
			}
		}
		return false;
	}
	,pressed: function(ButtonID) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current > 0;
		return false;
	}
	,justPressed: function(ButtonID) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current == 2;
		return false;
	}
	,justReleased: function(ButtonID) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current == -1;
		return false;
	}
	,firstPressedButtonID: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current > 0) return button.id;
		}
		return -1;
	}
	,firstJustPressedButtonID: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current == 2) return button.id;
		}
		return -1;
	}
	,firstJustReleasedButtonID: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current == -1) return button.id;
		}
		return -1;
	}
	,getAxis: function(AxisID) {
		return this.getAxisValue(AxisID);
	}
	,getXAxis: function(AxisID) {
		return this.getAxisValue(AxisID);
	}
	,getYAxis: function(AxisID) {
		var axisValue = this.getAxisValue(AxisID);
		return axisValue;
	}
	,anyButton: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current > 0) return true;
		}
		return false;
	}
	,anyInput: function() {
		if(this.anyButton()) return true;
		var numAxis = this.axis.length;
		var _g = 0;
		while(_g < numAxis) {
			var i = _g++;
			if(this.axis[0] != 0) return true;
		}
		if(this.ball.x != 0 || this.ball.y != 0) return true;
		if(this.hat.x != 0 || this.hat.y != 0) return true;
		return false;
	}
	,getAxisValue: function(AxisID) {
		if(AxisID < 0 || AxisID >= this.axis.length) return 0;
		var axisValue = 0;
		axisValue = this.axis[AxisID];
		if(Math.abs(axisValue) > this.deadZone) return axisValue;
		return 0;
	}
	,get_dpadUp: function() {
		return this.hat.y < 0;
	}
	,get_dpadDown: function() {
		return this.hat.y > 0;
	}
	,get_dpadLeft: function() {
		return this.hat.x < 0;
	}
	,get_dpadRight: function() {
		return this.hat.x > 0;
	}
	,__class__: flixel_input_gamepad_FlxGamepad
	,__properties__: {get_dpadRight:"get_dpadRight",get_dpadLeft:"get_dpadLeft",get_dpadDown:"get_dpadDown",get_dpadUp:"get_dpadUp"}
};
var flixel_input_gamepad_FlxGamepadButton = function(ID,Current,Last) {
	if(Last == null) Last = 0;
	if(Current == null) Current = 0;
	this.id = ID;
	this.current = Current;
	this.last = Last;
};
$hxClasses["flixel.input.gamepad.FlxGamepadButton"] = flixel_input_gamepad_FlxGamepadButton;
flixel_input_gamepad_FlxGamepadButton.__name__ = ["flixel","input","gamepad","FlxGamepadButton"];
flixel_input_gamepad_FlxGamepadButton.prototype = {
	id: null
	,current: null
	,last: null
	,reset: function() {
		this.current = 0;
		this.last = 0;
	}
	,release: function() {
		this.last = this.current;
		if(this.current > 0) this.current = -1; else this.current = 0;
	}
	,press: function() {
		this.last = this.current;
		if(this.current > 0) this.current = 1; else this.current = 2;
	}
	,__class__: flixel_input_gamepad_FlxGamepadButton
};
var flixel_interfaces_IFlxInput = function() { };
$hxClasses["flixel.interfaces.IFlxInput"] = flixel_interfaces_IFlxInput;
flixel_interfaces_IFlxInput.__name__ = ["flixel","interfaces","IFlxInput"];
flixel_interfaces_IFlxInput.prototype = {
	reset: null
	,update: null
	,onFocus: null
	,onFocusLost: null
	,destroy: null
	,__class__: flixel_interfaces_IFlxInput
};
var flixel_input_gamepad_FlxGamepadManager = function() {
	this.globalDeadZone = 0;
	this._gamepads = [];
};
$hxClasses["flixel.input.gamepad.FlxGamepadManager"] = flixel_input_gamepad_FlxGamepadManager;
flixel_input_gamepad_FlxGamepadManager.__name__ = ["flixel","input","gamepad","FlxGamepadManager"];
flixel_input_gamepad_FlxGamepadManager.__interfaces__ = [flixel_interfaces_IFlxInput];
flixel_input_gamepad_FlxGamepadManager.prototype = {
	firstActive: null
	,lastActive: null
	,numActiveGamepads: null
	,globalDeadZone: null
	,_gamepads: null
	,getByID: function(GamepadID) {
		var gamepad = this._gamepads[GamepadID];
		if(gamepad == null) {
			gamepad = new flixel_input_gamepad_FlxGamepad(GamepadID,this.globalDeadZone);
			this._gamepads[GamepadID] = gamepad;
			this.lastActive = gamepad;
			if(this.firstActive == null) this.firstActive = gamepad;
		}
		return gamepad;
	}
	,getActiveGamepadIDs: function(IDsArray) {
		if(IDsArray == null) IDsArray = [];
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) IDsArray.push(gamepad.id);
		}
		return IDsArray;
	}
	,getActiveGamepads: function(GamepadArray) {
		if(GamepadArray == null) GamepadArray = [];
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) GamepadArray.push(gamepad);
		}
		return GamepadArray;
	}
	,getFirstActiveGamepadID: function() {
		var firstActive = this.getFirstActiveGamepad();
		if(firstActive == null) return -1; else return firstActive.id;
	}
	,getFirstActiveGamepad: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) return gamepad;
		}
		return null;
	}
	,anyButton: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyButton()) return true;
		}
		return false;
	}
	,anyInput: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) return true;
		}
		return false;
	}
	,anyPressed: function(ButtonID) {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.pressed(ButtonID)) return true;
		}
		return false;
	}
	,anyJustPressed: function(ButtonID) {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.justPressed(ButtonID)) return true;
		}
		return false;
	}
	,anyJustReleased: function(ButtonID) {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.justReleased(ButtonID)) return true;
		}
		return false;
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			gamepad = flixel_util_FlxDestroyUtil.destroy(gamepad);
		}
		this.firstActive = null;
		this.lastActive = null;
		this._gamepads = null;
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) gamepad.reset();
		}
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) gamepad.update();
		}
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
		this.reset();
	}
	,get_numActiveGamepads: function() {
		var count = 0;
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) count++;
		}
		return count;
	}
	,set_globalDeadZone: function(DeadZone) {
		this.globalDeadZone = DeadZone;
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) gamepad.deadZone = DeadZone;
		}
		return this.globalDeadZone;
	}
	,__class__: flixel_input_gamepad_FlxGamepadManager
	,__properties__: {set_globalDeadZone:"set_globalDeadZone",get_numActiveGamepads:"get_numActiveGamepads"}
};
var flixel_input_keyboard_FlxKey = function(Name) {
	this.last = 0;
	this.current = 0;
	this.name = Name;
};
$hxClasses["flixel.input.keyboard.FlxKey"] = flixel_input_keyboard_FlxKey;
flixel_input_keyboard_FlxKey.__name__ = ["flixel","input","keyboard","FlxKey"];
flixel_input_keyboard_FlxKey.prototype = {
	name: null
	,current: null
	,last: null
	,__class__: flixel_input_keyboard_FlxKey
};
var flixel_input_keyboard_FlxKeyList = function(CheckStatus) {
	this.checkStatus = CheckStatus;
};
$hxClasses["flixel.input.keyboard.FlxKeyList"] = flixel_input_keyboard_FlxKeyList;
flixel_input_keyboard_FlxKeyList.__name__ = ["flixel","input","keyboard","FlxKeyList"];
flixel_input_keyboard_FlxKeyList.prototype = {
	checkStatus: null
	,get_A: function() {
		return flixel_FlxG.keys.checkStatus(65,this.checkStatus);
	}
	,get_B: function() {
		return flixel_FlxG.keys.checkStatus(66,this.checkStatus);
	}
	,get_C: function() {
		return flixel_FlxG.keys.checkStatus(67,this.checkStatus);
	}
	,get_D: function() {
		return flixel_FlxG.keys.checkStatus(68,this.checkStatus);
	}
	,get_E: function() {
		return flixel_FlxG.keys.checkStatus(69,this.checkStatus);
	}
	,get_F: function() {
		return flixel_FlxG.keys.checkStatus(70,this.checkStatus);
	}
	,get_G: function() {
		return flixel_FlxG.keys.checkStatus(71,this.checkStatus);
	}
	,get_H: function() {
		return flixel_FlxG.keys.checkStatus(72,this.checkStatus);
	}
	,get_I: function() {
		return flixel_FlxG.keys.checkStatus(73,this.checkStatus);
	}
	,get_J: function() {
		return flixel_FlxG.keys.checkStatus(74,this.checkStatus);
	}
	,get_K: function() {
		return flixel_FlxG.keys.checkStatus(75,this.checkStatus);
	}
	,get_L: function() {
		return flixel_FlxG.keys.checkStatus(76,this.checkStatus);
	}
	,get_M: function() {
		return flixel_FlxG.keys.checkStatus(77,this.checkStatus);
	}
	,get_N: function() {
		return flixel_FlxG.keys.checkStatus(78,this.checkStatus);
	}
	,get_O: function() {
		return flixel_FlxG.keys.checkStatus(79,this.checkStatus);
	}
	,get_P: function() {
		return flixel_FlxG.keys.checkStatus(80,this.checkStatus);
	}
	,get_Q: function() {
		return flixel_FlxG.keys.checkStatus(81,this.checkStatus);
	}
	,get_R: function() {
		return flixel_FlxG.keys.checkStatus(82,this.checkStatus);
	}
	,get_S: function() {
		return flixel_FlxG.keys.checkStatus(83,this.checkStatus);
	}
	,get_T: function() {
		return flixel_FlxG.keys.checkStatus(84,this.checkStatus);
	}
	,get_U: function() {
		return flixel_FlxG.keys.checkStatus(85,this.checkStatus);
	}
	,get_V: function() {
		return flixel_FlxG.keys.checkStatus(86,this.checkStatus);
	}
	,get_W: function() {
		return flixel_FlxG.keys.checkStatus(87,this.checkStatus);
	}
	,get_X: function() {
		return flixel_FlxG.keys.checkStatus(88,this.checkStatus);
	}
	,get_Y: function() {
		return flixel_FlxG.keys.checkStatus(89,this.checkStatus);
	}
	,get_Z: function() {
		return flixel_FlxG.keys.checkStatus(90,this.checkStatus);
	}
	,get_ZERO: function() {
		return flixel_FlxG.keys.checkStatus(48,this.checkStatus);
	}
	,get_ONE: function() {
		return flixel_FlxG.keys.checkStatus(49,this.checkStatus);
	}
	,get_TWO: function() {
		return flixel_FlxG.keys.checkStatus(50,this.checkStatus);
	}
	,get_THREE: function() {
		return flixel_FlxG.keys.checkStatus(51,this.checkStatus);
	}
	,get_FOUR: function() {
		return flixel_FlxG.keys.checkStatus(52,this.checkStatus);
	}
	,get_FIVE: function() {
		return flixel_FlxG.keys.checkStatus(53,this.checkStatus);
	}
	,get_SIX: function() {
		return flixel_FlxG.keys.checkStatus(54,this.checkStatus);
	}
	,get_SEVEN: function() {
		return flixel_FlxG.keys.checkStatus(55,this.checkStatus);
	}
	,get_EIGHT: function() {
		return flixel_FlxG.keys.checkStatus(56,this.checkStatus);
	}
	,get_NINE: function() {
		return flixel_FlxG.keys.checkStatus(57,this.checkStatus);
	}
	,get_PAGEUP: function() {
		return flixel_FlxG.keys.checkStatus(33,this.checkStatus);
	}
	,get_PAGEDOWN: function() {
		return flixel_FlxG.keys.checkStatus(34,this.checkStatus);
	}
	,get_HOME: function() {
		return flixel_FlxG.keys.checkStatus(36,this.checkStatus);
	}
	,get_END: function() {
		return flixel_FlxG.keys.checkStatus(35,this.checkStatus);
	}
	,get_INSERT: function() {
		return flixel_FlxG.keys.checkStatus(45,this.checkStatus);
	}
	,get_ESCAPE: function() {
		return flixel_FlxG.keys.checkStatus(27,this.checkStatus);
	}
	,get_MINUS: function() {
		return flixel_FlxG.keys.checkStatus(189,this.checkStatus);
	}
	,get_PLUS: function() {
		return flixel_FlxG.keys.checkStatus(187,this.checkStatus);
	}
	,get_DELETE: function() {
		return flixel_FlxG.keys.checkStatus(46,this.checkStatus);
	}
	,get_BACKSPACE: function() {
		return flixel_FlxG.keys.checkStatus(8,this.checkStatus);
	}
	,get_LBRACKET: function() {
		return flixel_FlxG.keys.checkStatus(219,this.checkStatus);
	}
	,get_RBRACKET: function() {
		return flixel_FlxG.keys.checkStatus(221,this.checkStatus);
	}
	,get_BACKSLASH: function() {
		return flixel_FlxG.keys.checkStatus(220,this.checkStatus);
	}
	,get_CAPSLOCK: function() {
		return flixel_FlxG.keys.checkStatus(20,this.checkStatus);
	}
	,get_SEMICOLON: function() {
		return flixel_FlxG.keys.checkStatus(186,this.checkStatus);
	}
	,get_QUOTE: function() {
		return flixel_FlxG.keys.checkStatus(222,this.checkStatus);
	}
	,get_ENTER: function() {
		return flixel_FlxG.keys.checkStatus(13,this.checkStatus);
	}
	,get_SHIFT: function() {
		return flixel_FlxG.keys.checkStatus(16,this.checkStatus);
	}
	,get_COMMA: function() {
		return flixel_FlxG.keys.checkStatus(188,this.checkStatus);
	}
	,get_PERIOD: function() {
		return flixel_FlxG.keys.checkStatus(190,this.checkStatus);
	}
	,get_SLASH: function() {
		return flixel_FlxG.keys.checkStatus(191,this.checkStatus);
	}
	,get_NUMPADSLASH: function() {
		return flixel_FlxG.keys.checkStatus(191,this.checkStatus);
	}
	,get_GRAVEACCENT: function() {
		return flixel_FlxG.keys.checkStatus(192,this.checkStatus);
	}
	,get_CONTROL: function() {
		return flixel_FlxG.keys.checkStatus(17,this.checkStatus);
	}
	,get_ALT: function() {
		return flixel_FlxG.keys.checkStatus(18,this.checkStatus);
	}
	,get_SPACE: function() {
		return flixel_FlxG.keys.checkStatus(32,this.checkStatus);
	}
	,get_UP: function() {
		return flixel_FlxG.keys.checkStatus(38,this.checkStatus);
	}
	,get_DOWN: function() {
		return flixel_FlxG.keys.checkStatus(40,this.checkStatus);
	}
	,get_LEFT: function() {
		return flixel_FlxG.keys.checkStatus(37,this.checkStatus);
	}
	,get_RIGHT: function() {
		return flixel_FlxG.keys.checkStatus(39,this.checkStatus);
	}
	,get_TAB: function() {
		return flixel_FlxG.keys.checkStatus(9,this.checkStatus);
	}
	,get_PRINTSCREEN: function() {
		return flixel_FlxG.keys.checkStatus(301,this.checkStatus);
	}
	,get_F1: function() {
		return flixel_FlxG.keys.checkStatus(112,this.checkStatus);
	}
	,get_F2: function() {
		return flixel_FlxG.keys.checkStatus(113,this.checkStatus);
	}
	,get_F3: function() {
		return flixel_FlxG.keys.checkStatus(114,this.checkStatus);
	}
	,get_F4: function() {
		return flixel_FlxG.keys.checkStatus(115,this.checkStatus);
	}
	,get_F5: function() {
		return flixel_FlxG.keys.checkStatus(116,this.checkStatus);
	}
	,get_F6: function() {
		return flixel_FlxG.keys.checkStatus(117,this.checkStatus);
	}
	,get_F7: function() {
		return flixel_FlxG.keys.checkStatus(118,this.checkStatus);
	}
	,get_F8: function() {
		return flixel_FlxG.keys.checkStatus(119,this.checkStatus);
	}
	,get_F9: function() {
		return flixel_FlxG.keys.checkStatus(120,this.checkStatus);
	}
	,get_F10: function() {
		return flixel_FlxG.keys.checkStatus(121,this.checkStatus);
	}
	,get_F11: function() {
		return flixel_FlxG.keys.checkStatus(122,this.checkStatus);
	}
	,get_F12: function() {
		return flixel_FlxG.keys.checkStatus(123,this.checkStatus);
	}
	,get_NUMPADONE: function() {
		return flixel_FlxG.keys.checkStatus(97,this.checkStatus);
	}
	,get_NUMPADTWO: function() {
		return flixel_FlxG.keys.checkStatus(98,this.checkStatus);
	}
	,get_NUMPADTHREE: function() {
		return flixel_FlxG.keys.checkStatus(99,this.checkStatus);
	}
	,get_NUMPADFOUR: function() {
		return flixel_FlxG.keys.checkStatus(100,this.checkStatus);
	}
	,get_NUMPADFIVE: function() {
		return flixel_FlxG.keys.checkStatus(101,this.checkStatus);
	}
	,get_NUMPADSIX: function() {
		return flixel_FlxG.keys.checkStatus(102,this.checkStatus);
	}
	,get_NUMPADSEVEN: function() {
		return flixel_FlxG.keys.checkStatus(103,this.checkStatus);
	}
	,get_NUMPADEIGHT: function() {
		return flixel_FlxG.keys.checkStatus(104,this.checkStatus);
	}
	,get_NUMPADNINE: function() {
		return flixel_FlxG.keys.checkStatus(105,this.checkStatus);
	}
	,get_NUMPADZERO: function() {
		return flixel_FlxG.keys.checkStatus(96,this.checkStatus);
	}
	,get_NUMPADMINUS: function() {
		return flixel_FlxG.keys.checkStatus(109,this.checkStatus);
	}
	,get_NUMPADPLUS: function() {
		return flixel_FlxG.keys.checkStatus(107,this.checkStatus);
	}
	,get_NUMPADPERIOD: function() {
		return flixel_FlxG.keys.checkStatus(110,this.checkStatus);
	}
	,get_NUMPADMULTIPLY: function() {
		return flixel_FlxG.keys.checkStatus(106,this.checkStatus);
	}
	,get_ANY: function() {
		var key = null;
		var keyCode = 256;
		while(keyCode-- >= 0) {
			key = flixel_FlxG.keys._keyList[keyCode];
			if(key != null) {
				if(flixel_FlxG.keys.checkStatus(keyCode,this.checkStatus)) return true;
			}
		}
		return false;
	}
	,check: function(keyCode) {
		return flixel_FlxG.keys.checkStatus(keyCode,this.checkStatus);
	}
	,__class__: flixel_input_keyboard_FlxKeyList
	,__properties__: {get_ANY:"get_ANY",get_NUMPADMULTIPLY:"get_NUMPADMULTIPLY",get_NUMPADPERIOD:"get_NUMPADPERIOD",get_NUMPADPLUS:"get_NUMPADPLUS",get_NUMPADMINUS:"get_NUMPADMINUS",get_NUMPADZERO:"get_NUMPADZERO",get_NUMPADNINE:"get_NUMPADNINE",get_NUMPADEIGHT:"get_NUMPADEIGHT",get_NUMPADSEVEN:"get_NUMPADSEVEN",get_NUMPADSIX:"get_NUMPADSIX",get_NUMPADFIVE:"get_NUMPADFIVE",get_NUMPADFOUR:"get_NUMPADFOUR",get_NUMPADTHREE:"get_NUMPADTHREE",get_NUMPADTWO:"get_NUMPADTWO",get_NUMPADONE:"get_NUMPADONE",get_F12:"get_F12",get_F11:"get_F11",get_F10:"get_F10",get_F9:"get_F9",get_F8:"get_F8",get_F7:"get_F7",get_F6:"get_F6",get_F5:"get_F5",get_F4:"get_F4",get_F3:"get_F3",get_F2:"get_F2",get_F1:"get_F1",get_PRINTSCREEN:"get_PRINTSCREEN",get_TAB:"get_TAB",get_RIGHT:"get_RIGHT",get_LEFT:"get_LEFT",get_DOWN:"get_DOWN",get_UP:"get_UP",get_SPACE:"get_SPACE",get_ALT:"get_ALT",get_CONTROL:"get_CONTROL",get_GRAVEACCENT:"get_GRAVEACCENT",get_NUMPADSLASH:"get_NUMPADSLASH",get_SLASH:"get_SLASH",get_PERIOD:"get_PERIOD",get_COMMA:"get_COMMA",get_SHIFT:"get_SHIFT",get_ENTER:"get_ENTER",get_QUOTE:"get_QUOTE",get_SEMICOLON:"get_SEMICOLON",get_CAPSLOCK:"get_CAPSLOCK",get_BACKSLASH:"get_BACKSLASH",get_RBRACKET:"get_RBRACKET",get_LBRACKET:"get_LBRACKET",get_BACKSPACE:"get_BACKSPACE",get_DELETE:"get_DELETE",get_PLUS:"get_PLUS",get_MINUS:"get_MINUS",get_ESCAPE:"get_ESCAPE",get_INSERT:"get_INSERT",get_END:"get_END",get_HOME:"get_HOME",get_PAGEDOWN:"get_PAGEDOWN",get_PAGEUP:"get_PAGEUP",get_NINE:"get_NINE",get_EIGHT:"get_EIGHT",get_SEVEN:"get_SEVEN",get_SIX:"get_SIX",get_FIVE:"get_FIVE",get_FOUR:"get_FOUR",get_THREE:"get_THREE",get_TWO:"get_TWO",get_ONE:"get_ONE",get_ZERO:"get_ZERO",get_Z:"get_Z",get_Y:"get_Y",get_X:"get_X",get_W:"get_W",get_V:"get_V",get_U:"get_U",get_T:"get_T",get_S:"get_S",get_R:"get_R",get_Q:"get_Q",get_P:"get_P",get_O:"get_O",get_N:"get_N",get_M:"get_M",get_L:"get_L",get_K:"get_K",get_J:"get_J",get_I:"get_I",get_H:"get_H",get_G:"get_G",get_F:"get_F",get_E:"get_E",get_D:"get_D",get_C:"get_C",get_B:"get_B",get_A:"get_A"}
};
var flixel_input_keyboard_FlxKeyboard = function() {
	this.enabled = true;
	this._keyLookup = new haxe_ds_StringMap();
	this._keyList = [];
	flixel_util_FlxArrayUtil.setLength_flixel_input_keyboard_FlxKey(this._keyList,256);
	var i;
	i = 65;
	while(i <= 90) {
		this.addKey(String.fromCharCode(i),i);
		i++;
	}
	i = 48;
	this.addKey("ZERO",i++);
	this.addKey("ONE",i++);
	this.addKey("TWO",i++);
	this.addKey("THREE",i++);
	this.addKey("FOUR",i++);
	this.addKey("FIVE",i++);
	this.addKey("SIX",i++);
	this.addKey("SEVEN",i++);
	this.addKey("EIGHT",i++);
	this.addKey("NINE",i++);
	i = 96;
	this.addKey("NUMPADZERO",i++);
	this.addKey("NUMPADONE",i++);
	this.addKey("NUMPADTWO",i++);
	this.addKey("NUMPADTHREE",i++);
	this.addKey("NUMPADFOUR",i++);
	this.addKey("NUMPADFIVE",i++);
	this.addKey("NUMPADSIX",i++);
	this.addKey("NUMPADSEVEN",i++);
	this.addKey("NUMPADEIGHT",i++);
	this.addKey("NUMPADNINE",i++);
	this.addKey("PAGEUP",33);
	this.addKey("PAGEDOWN",34);
	this.addKey("HOME",36);
	this.addKey("END",35);
	this.addKey("INSERT",45);
	i = 1;
	while(i <= 12) {
		this.addKey("F" + i,111 + i);
		i++;
	}
	this.addKey("ESCAPE",27);
	this.addKey("MINUS",189);
	this.addKey("PLUS",187);
	this.addKey("DELETE",46);
	this.addKey("BACKSPACE",8);
	this.addKey("LBRACKET",219);
	this.addKey("RBRACKET",221);
	this.addKey("BACKSLASH",220);
	this.addKey("CAPSLOCK",20);
	this.addKey("SEMICOLON",186);
	this.addKey("QUOTE",222);
	this.addKey("ENTER",13);
	this.addKey("SHIFT",16);
	this.addKey("COMMA",188);
	this.addKey("PERIOD",190);
	this.addKey("SLASH",191);
	this.addKey("NUMPADSLASH",191);
	this.addKey("GRAVEACCENT",192);
	this.addKey("CONTROL",17);
	this.addKey("ALT",18);
	this.addKey("SPACE",32);
	this.addKey("UP",38);
	this.addKey("DOWN",40);
	this.addKey("LEFT",37);
	this.addKey("RIGHT",39);
	this.addKey("TAB",9);
	this.addKey("PRINTSCREEN",301);
	this.addKey("NUMPADMULTIPLY",106);
	this.addKey("NUMPADMINUS",109);
	this.addKey("NUMPADPLUS",107);
	this.addKey("NUMPADPERIOD",110);
	flash_Lib.get_current().get_stage().addEventListener("keydown",$bind(this,this.onKeyDown));
	flash_Lib.get_current().get_stage().addEventListener("keyup",$bind(this,this.onKeyUp));
	this.pressed = new flixel_input_keyboard_FlxKeyList(1);
	this.justPressed = new flixel_input_keyboard_FlxKeyList(2);
	this.justReleased = new flixel_input_keyboard_FlxKeyList(-1);
};
$hxClasses["flixel.input.keyboard.FlxKeyboard"] = flixel_input_keyboard_FlxKeyboard;
flixel_input_keyboard_FlxKeyboard.__name__ = ["flixel","input","keyboard","FlxKeyboard"];
flixel_input_keyboard_FlxKeyboard.__interfaces__ = [flixel_interfaces_IFlxInput];
flixel_input_keyboard_FlxKeyboard.prototype = {
	enabled: null
	,pressed: null
	,justPressed: null
	,justReleased: null
	,_keyList: null
	,_keyLookup: null
	,anyPressed: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,1);
	}
	,anyJustPressed: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,2);
	}
	,anyJustReleased: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,-1);
	}
	,firstPressed: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current == 1) return key.name;
		}
		return "";
	}
	,firstJustPressed: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current == 2) return key.name;
		}
		return "";
	}
	,firstJustReleased: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current == -1) return key.name;
		}
		return "";
	}
	,checkStatus: function(KeyCode,Status) {
		var k = this._keyList[KeyCode];
		if(k != null) {
			if(k.current == Status) return true; else if(Status == 1 && k.current == 2) return true; else if(Status == 0 && k.current == -1) return true;
		}
		return false;
	}
	,getKeyCode: function(KeyName) {
		return this._keyLookup.get(KeyName);
	}
	,getIsDown: function() {
		var keysDown = [];
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current > 0) keysDown.push(key);
		}
		return keysDown;
	}
	,destroy: function() {
		this._keyList = null;
		this._keyLookup = null;
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null) {
				key.current = 0;
				key.last = 0;
			}
		}
	}
	,addKey: function(KeyName,KeyCode) {
		this._keyLookup.set(KeyName,KeyCode);
		this._keyList[KeyCode] = new flixel_input_keyboard_FlxKey(KeyName);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key == null) continue;
			if(key.last == -1 && key.current == -1) key.current = 0; else if(key.last == 2 && key.current == 2) key.current = 1;
			key.last = key.current;
		}
	}
	,checkKeyStatus: function(KeyArray,Status) {
		if(KeyArray == null) return false;
		var _g = 0;
		while(_g < KeyArray.length) {
			var code = KeyArray[_g];
			++_g;
			var key;
			code = code.toUpperCase();
			key = this._keyList[this._keyLookup.get(code)];
			if(key != null) {
				if(key.current == Status) return true; else if(Status == 1 && key.current == 2) return true; else if(Status == 0 && key.current == -1) return true;
			}
		}
		return false;
	}
	,onKeyUp: function(FlashEvent) {
		var c = FlashEvent.keyCode;
		if(!this.enabled) return;
		if(this.inKeyArray(flixel_FlxG.sound.muteKeys,c)) {
			flixel_FlxG.sound.muted = !flixel_FlxG.sound.muted;
			if(flixel_FlxG.sound.volumeHandler != null) flixel_FlxG.sound.volumeHandler(flixel_FlxG.sound.muted?0:flixel_FlxG.sound.volume);
			if(flixel_FlxG.game.soundTray != null && flixel_FlxG.sound.soundTrayEnabled) flixel_FlxG.game.soundTray.show();
		} else if(this.inKeyArray(flixel_FlxG.sound.volumeDownKeys,c)) {
			flixel_FlxG.sound.muted = false;
			var _g = flixel_FlxG.sound;
			_g.set_volume(_g.volume - 0.1);
			if(flixel_FlxG.game.soundTray != null && flixel_FlxG.sound.soundTrayEnabled) flixel_FlxG.game.soundTray.show();
		} else if(this.inKeyArray(flixel_FlxG.sound.volumeUpKeys,c)) {
			flixel_FlxG.sound.muted = false;
			var _g1 = flixel_FlxG.sound;
			_g1.set_volume(_g1.volume + 0.1);
			if(flixel_FlxG.game.soundTray != null && flixel_FlxG.sound.soundTrayEnabled) flixel_FlxG.game.soundTray.show();
		}
		this.updateKeyStates(c,false);
	}
	,onKeyDown: function(FlashEvent) {
		var c = FlashEvent.keyCode;
		if(this.enabled) this.updateKeyStates(c,true);
	}
	,inKeyArray: function(KeyArray,KeyCode) {
		if(KeyArray == null) return false; else {
			var _g = 0;
			while(_g < KeyArray.length) {
				var keyString = KeyArray[_g];
				++_g;
				if(keyString == "ANY" || this._keyLookup.get(keyString) == KeyCode) return true;
			}
		}
		return false;
	}
	,resolveKeyCode: function(e) {
		return e.keyCode;
	}
	,updateKeyStates: function(KeyCode,Down) {
		var obj = this._keyList[KeyCode];
		if(obj != null) {
			if(obj.current > 0) {
				if(Down) obj.current = 1; else obj.current = -1;
			} else if(Down) obj.current = 2; else obj.current = 0;
		}
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
		this.reset();
	}
	,record: function() {
		var data = null;
		var i = 0;
		while(i < 256) {
			var key = this._keyList[i++];
			if(key == null || key.current == 0) continue;
			if(data == null) data = [];
			data.push(new flixel_system_replay_CodeValuePair(i - 1,key.current));
		}
		return data;
	}
	,playback: function(Record) {
		var i = 0;
		var l = Record.length;
		var o;
		var o2;
		while(i < l) {
			o = Record[i++];
			o2 = this._keyList[o.code];
			o2.current = o.value;
		}
	}
	,__class__: flixel_input_keyboard_FlxKeyboard
};
var flixel_input_mouse__$FlxMouse_GraphicCursor = function(width,height,transparent,color) {
	var o = flixel_input_mouse__$FlxMouse_GraphicCursor.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.input.mouse._FlxMouse.GraphicCursor"] = flixel_input_mouse__$FlxMouse_GraphicCursor;
flixel_input_mouse__$FlxMouse_GraphicCursor.__name__ = ["flixel","input","mouse","_FlxMouse","GraphicCursor"];
flixel_input_mouse__$FlxMouse_GraphicCursor.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_input_mouse__$FlxMouse_GraphicCursor.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmRJREFUeNq0ls9rE0EUx7872YSgJlTSSiWpVvrDIqhFUIKg+CeIIgqeFE/iTRC8pLQXjyL04g9ComXTJIW0OVUEMTdBRIk5W6WtkKJSbGnDpsn6Zk2W3TQbs+nkwduZnVm+n30zw3sjBULBCIApdMlc+/z+d9Rq5LluAORaO8kfDyenW0byaOKeYwDjD03TdAgJRERHINEeaJVKFYxJkCSJj03YRXL/9mVbod6BkH0EumlSvSc0EgNw5ep1jA6PCIcYgAM+P548nsaxwUGhEGZ+2ShVMJ9K4+jAEWEQC2C7pEJjHiyk0wgFg0IgrHFgabmoi2dmkzjc379nyC7An80t/F7f0PeCQw719RkQOoqRPQO4fV0p6u3w0BAyySQCgUDHkKaA4s91bG6V9P7xkVE9koM9PR1BmN3EUi0KbifGxjCnKPD7fI4htoDV4i+o5R3j/fTJUwRJOIbYAnh++r66Zhk7Mz4OJR6H1+ttG8JaTX77sYZKtWoZC589h9SrmbYhLQGquqMvVaOdD4cxE43C43bDVE8ijgGNm222SxcuIv78xX8hcivxWSWGfP4Tbex+Emr+KV8qtVw2Q2Cu8baAVOIlFubT/z6SXWAu1u7Rt0CaArIknMkkwQucLMuQmOQ0QxiQXYDXi1kkaGkYY5DdLj70lvxBh8nUYwHkcm8Qiz41L8kiL3ZUo7c7rckG4OOH9ygU8nATs1b8s+TXSFwVUnC+FD7TXxs3izkR4kYELusJ4eI3m4nbLYOTVKGQ3xDx55aLV60fI7/D85zIm109gmfkt0SL12/XvdTe7db1/a8AAwCZUMQMzQodywAAAABJRU5ErkJggg==";
};
flixel_input_mouse__$FlxMouse_GraphicCursor.__super__ = flash_display_BitmapData;
flixel_input_mouse__$FlxMouse_GraphicCursor.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_input_mouse__$FlxMouse_GraphicCursor
});
var flixel_input_mouse_FlxMouse = function(CursorContainer) {
	this._lastWheel = 0;
	this._lastY = 0;
	this._lastX = 0;
	this._visibleWhenFocusLost = true;
	this._wheelUsed = false;
	this._cursor = null;
	this.useSystemCursor = false;
	this.visible = true;
	this.screenY = 0;
	this.screenX = 0;
	this.wheel = 0;
	flixel_util_FlxPoint.call(this);
	this.cursorContainer = CursorContainer;
	this.cursorContainer.mouseChildren = false;
	this.cursorContainer.mouseEnabled = false;
	this._point = flixel_util_FlxPoint.get(null,null);
	this._globalScreenPosition = flixel_util_FlxPoint.get(null,null);
	this._leftButton = new flixel_input_mouse_FlxMouseButton(-1);
	this._stage = flash_Lib.get_current().get_stage();
	this._stage.addEventListener("mouseDown",($_=this._leftButton,$bind($_,$_.onDown)));
	this._stage.addEventListener("mouseUp",($_=this._leftButton,$bind($_,$_.onUp)));
	this._middleButton = new flixel_input_mouse_FlxMouseButton(-2);
	this._rightButton = new flixel_input_mouse_FlxMouseButton(-3);
	this._stage.addEventListener("middleMouseDown",($_=this._middleButton,$bind($_,$_.onDown)));
	this._stage.addEventListener("middleMouseUp",($_=this._middleButton,$bind($_,$_.onUp)));
	this._stage.addEventListener("rightMouseDown",($_=this._rightButton,$bind($_,$_.onDown)));
	this._stage.addEventListener("rightMouseUp",($_=this._rightButton,$bind($_,$_.onUp)));
	this._stage.addEventListener("mouseLeave",$bind(this,this.onMouseLeave));
	this._stage.addEventListener("mouseWheel",$bind(this,this.onMouseWheel));
	flixel_FlxG.signals.gameStarted.add($bind(this,this.onGameStart));
	flash_ui_Mouse.hide();
};
$hxClasses["flixel.input.mouse.FlxMouse"] = flixel_input_mouse_FlxMouse;
flixel_input_mouse_FlxMouse.__name__ = ["flixel","input","mouse","FlxMouse"];
flixel_input_mouse_FlxMouse.__interfaces__ = [flixel_interfaces_IFlxInput];
flixel_input_mouse_FlxMouse.__super__ = flixel_util_FlxPoint;
flixel_input_mouse_FlxMouse.prototype = $extend(flixel_util_FlxPoint.prototype,{
	wheel: null
	,screenX: null
	,screenY: null
	,cursorContainer: null
	,visible: null
	,useSystemCursor: null
	,_leftButton: null
	,_middleButton: null
	,_rightButton: null
	,_cursor: null
	,_cursorBitmapData: null
	,_wheelUsed: null
	,_visibleWhenFocusLost: null
	,_lastX: null
	,_lastY: null
	,_lastWheel: null
	,_point: null
	,_globalScreenPosition: null
	,_stage: null
	,load: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		if(this._cursor != null) this.cursorContainer.removeChild(this._cursor);
		if(Graphic == null) Graphic = new flixel_input_mouse__$FlxMouse_GraphicCursor(0,0);
		if(js_Boot.__instanceof(Graphic,Class)) this._cursor = Type.createInstance(Graphic,[]); else if(js_Boot.__instanceof(Graphic,flash_display_BitmapData)) this._cursor = new flash_display_Bitmap(js_Boot.__cast(Graphic , flash_display_BitmapData)); else if(typeof(Graphic) == "string") this._cursor = new flash_display_Bitmap(flixel_system_FlxAssets.getBitmapData(Graphic)); else this._cursor = new flash_display_Bitmap(new flixel_input_mouse__$FlxMouse_GraphicCursor(0,0));
		this._cursor.set_x(XOffset);
		this._cursor.set_y(YOffset);
		this._cursor.set_scaleX(Scale);
		this._cursor.set_scaleY(Scale);
		this.cursorContainer.addChild(this._cursor);
	}
	,unload: function() {
		if(this._cursor != null) {
			if(this.cursorContainer.visible) this.load(); else {
				this.cursorContainer.removeChild(this._cursor);
				this._cursor = null;
			}
		}
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel_FlxG.camera;
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		this.getScreenPosition(Camera,this._point);
		point.set(this._point.x + Camera.scroll.x,this._point.y + Camera.scroll.y);
		return point;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel_FlxG.camera;
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		point.set_x((this._globalScreenPosition.x - Camera.x) / Camera.zoom);
		point.set_y((this._globalScreenPosition.y - Camera.y) / Camera.zoom);
		return point;
	}
	,destroy: function() {
		if(this._stage != null) {
			this._stage.removeEventListener("mouseDown",($_=this._leftButton,$bind($_,$_.onDown)));
			this._stage.removeEventListener("mouseUp",($_=this._leftButton,$bind($_,$_.onUp)));
			this._stage.removeEventListener("middleMouseDown",($_=this._middleButton,$bind($_,$_.onDown)));
			this._stage.removeEventListener("middleMouseUp",($_=this._middleButton,$bind($_,$_.onUp)));
			this._stage.removeEventListener("rightMouseDown",($_=this._rightButton,$bind($_,$_.onDown)));
			this._stage.removeEventListener("rightMouseUp",($_=this._rightButton,$bind($_,$_.onUp)));
			this._stage.removeEventListener("mouseLeave",$bind(this,this.onMouseLeave));
			this._stage.removeEventListener("mouseWheel",$bind(this,this.onMouseWheel));
		}
		this._point = flixel_util_FlxDestroyUtil.put(this._point);
		this._globalScreenPosition = flixel_util_FlxDestroyUtil.put(this._globalScreenPosition);
		this.cursorContainer = null;
		this._cursor = null;
		this._leftButton = flixel_util_FlxDestroyUtil.destroy(this._leftButton);
		this._middleButton = flixel_util_FlxDestroyUtil.destroy(this._middleButton);
		this._rightButton = flixel_util_FlxDestroyUtil.destroy(this._rightButton);
		this._cursorBitmapData = flixel_util_FlxDestroyUtil.dispose(this._cursorBitmapData);
		flixel_FlxG.signals.gameStarted.remove($bind(this,this.onGameStart));
		flixel_util_FlxPoint.prototype.destroy.call(this);
	}
	,setGlobalScreenPositionUnsafe: function(X,Y) {
		this._globalScreenPosition.set(X,Y);
	}
	,reset: function() {
		this._leftButton.reset();
		this._middleButton.reset();
		this._rightButton.reset();
	}
	,update: function() {
		this._globalScreenPosition.set_x(Math.floor(flixel_FlxG.game.get_mouseX()));
		this._globalScreenPosition.set_y(Math.floor(flixel_FlxG.game.get_mouseY()));
		if(this.visible) {
			this.cursorContainer.set_x(this._globalScreenPosition.x);
			this.cursorContainer.set_y(this._globalScreenPosition.y);
		}
		var scaleMultiplier = flixel_FlxG._scaleMode.scale.x;
		var _g = this._globalScreenPosition;
		_g.set_x(_g.x / scaleMultiplier);
		var _g1 = this._globalScreenPosition;
		_g1.set_y(_g1.y / scaleMultiplier);
		this.updateCursor();
		this._leftButton.update();
		this._middleButton.update();
		this._rightButton.update();
		if(!this._wheelUsed) this.wheel = 0;
		this._wheelUsed = false;
	}
	,onFocus: function() {
		this.reset();
		this.set_useSystemCursor(this.useSystemCursor);
		this.set_visible(this._visibleWhenFocusLost);
	}
	,onFocusLost: function() {
		this._visibleWhenFocusLost = this.visible;
		if(this.visible) this.set_visible(false);
		flash_ui_Mouse.show();
	}
	,onGameStart: function() {
		this.set_visible(this.visible);
	}
	,updateCursor: function() {
		this.getScreenPosition(null,this._point);
		this.screenX = this._point.x | 0;
		this.screenY = this._point.y | 0;
		this.getWorldPosition(null,this);
	}
	,onMouseWheel: function(FlashEvent) {
		this._wheelUsed = true;
		this.wheel = FlashEvent.delta;
	}
	,onMouseLeave: function(E) {
		this._rightButton.onUp();
		this._middleButton.onUp();
	}
	,get_pressed: function() {
		return this._leftButton.current > 0;
	}
	,get_justPressed: function() {
		return this._leftButton.justPressed();
	}
	,get_justReleased: function() {
		return this._leftButton.justReleased();
	}
	,get_pressedRight: function() {
		return this._rightButton.current > 0;
	}
	,get_justPressedRight: function() {
		return this._rightButton.justPressed();
	}
	,get_justReleasedRight: function() {
		return this._rightButton.justReleased();
	}
	,get_pressedMiddle: function() {
		return this._middleButton.current > 0;
	}
	,get_justPressedMiddle: function() {
		return this._middleButton.justPressed();
	}
	,get_justReleasedMiddle: function() {
		return this._middleButton.justReleased();
	}
	,showSystemCursor: function() {
		flash_ui_Mouse.show();
		this.cursorContainer.set_visible(false);
	}
	,hideSystemCursor: function() {
		flash_ui_Mouse.hide();
		if(this.visible) this.cursorContainer.set_visible(true);
	}
	,set_useSystemCursor: function(Value) {
		if(Value) this.showSystemCursor(); else this.hideSystemCursor();
		return this.useSystemCursor = Value;
	}
	,set_visible: function(Value) {
		if(Value) {
			if(this.useSystemCursor) flash_ui_Mouse.show(); else {
				if(this._cursor == null) this.load();
				this.cursorContainer.set_visible(true);
				flash_ui_Mouse.hide();
			}
		} else {
			this.cursorContainer.set_visible(false);
			flash_ui_Mouse.hide();
		}
		return this.visible = Value;
	}
	,record: function() {
		if(this._lastX == this._globalScreenPosition.x && this._lastY == this._globalScreenPosition.y && this._leftButton.current == 0 && this._lastWheel == this.wheel) return null;
		this._lastX = Math.floor(this._globalScreenPosition.x);
		this._lastY = Math.floor(this._globalScreenPosition.y);
		this._lastWheel = this.wheel;
		return new flixel_system_replay_MouseRecord(this._lastX,this._lastY,this._leftButton.current,this._lastWheel);
	}
	,playback: function(Record) {
		this._leftButton.current = Record.button;
		this.wheel = Record.wheel;
		this._globalScreenPosition.copyFrom(Record);
		this.updateCursor();
	}
	,__class__: flixel_input_mouse_FlxMouse
	,__properties__: $extend(flixel_util_FlxPoint.prototype.__properties__,{get_justReleasedMiddle:"get_justReleasedMiddle",get_justPressedMiddle:"get_justPressedMiddle",get_pressedMiddle:"get_pressedMiddle",get_justReleasedRight:"get_justReleasedRight",get_justPressedRight:"get_justPressedRight",get_pressedRight:"get_pressedRight",get_justReleased:"get_justReleased",get_justPressed:"get_justPressed",get_pressed:"get_pressed",set_useSystemCursor:"set_useSystemCursor",set_visible:"set_visible"})
});
var flixel_input_mouse_FlxMouseButton = function(ID) {
	this.last = 0;
	this.current = 0;
	this._ID = ID;
	this._justPressedPosition = flixel_util_FlxPoint.get(null,null);
};
$hxClasses["flixel.input.mouse.FlxMouseButton"] = flixel_input_mouse_FlxMouseButton;
flixel_input_mouse_FlxMouseButton.__name__ = ["flixel","input","mouse","FlxMouseButton"];
flixel_input_mouse_FlxMouseButton.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_input_mouse_FlxMouseButton.prototype = {
	current: null
	,last: null
	,_ID: null
	,_justPressedPosition: null
	,_justPressedTimeInTicks: null
	,update: function() {
		if(this.last == -1 && this.current == -1) this.current = 0; else if(this.last == 2 && this.current == 2) this.current = 1; else if(this.last == -2 && this.current == -2) this.current = 0;
		this.last = this.current;
		if(this.current == 2 || this.current == -2) {
			this._justPressedPosition.set(flixel_FlxG.mouse.screenX,flixel_FlxG.mouse.screenY);
			this._justPressedTimeInTicks = flixel_FlxG.game.ticks;
		} else if(this.current == -1 || this.current == -2) flixel_FlxG.swipes.push(new flixel_input_FlxSwipe(this._ID,this._justPressedPosition,flixel_FlxG.mouse.getScreenPosition(),this._justPressedTimeInTicks));
	}
	,destroy: function() {
		this._justPressedPosition = flixel_util_FlxDestroyUtil.put(this._justPressedPosition);
	}
	,onDown: function(FlashEvent) {
		if(this.current > 0) this.current = 1; else this.current = 2;
	}
	,onUp: function(FlashEvent) {
		if(this.current == 2) this.current = -2; else if(this.current > 0) this.current = -1; else this.current = 0;
	}
	,reset: function() {
		this.current = 0;
		this.last = 0;
	}
	,pressed: function() {
		return this.current > 0;
	}
	,justPressed: function() {
		return this.current == 2 || this.current == -2;
	}
	,justReleased: function() {
		return this.current == -1 || this.current == -2;
	}
	,__class__: flixel_input_mouse_FlxMouseButton
};
var flixel_input_touch_FlxTouch = function(X,Y,PointID) {
	if(PointID == null) PointID = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._last = 0;
	this._current = 0;
	this.screenY = 0;
	this.screenX = 0;
	flixel_util_FlxPoint.call(this);
	this._point = flixel_util_FlxPoint.get(null,null);
	this._globalScreenPosition = flixel_util_FlxPoint.get(null,null);
	this._justPressedPosition = flixel_util_FlxPoint.get(null,null);
	this._flashPoint = new flash_geom_Point();
	this.updatePosition(X,Y);
	this.touchPointID = PointID;
};
$hxClasses["flixel.input.touch.FlxTouch"] = flixel_input_touch_FlxTouch;
flixel_input_touch_FlxTouch.__name__ = ["flixel","input","touch","FlxTouch"];
flixel_input_touch_FlxTouch.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_input_touch_FlxTouch.__super__ = flixel_util_FlxPoint;
flixel_input_touch_FlxTouch.prototype = $extend(flixel_util_FlxPoint.prototype,{
	screenX: null
	,screenY: null
	,touchPointID: null
	,_current: null
	,_last: null
	,_point: null
	,_globalScreenPosition: null
	,_flashPoint: null
	,_justPressedPosition: null
	,_justPressedTimeInTicks: null
	,destroy: function() {
		this._point = flixel_util_FlxDestroyUtil.put(this._point);
		this._globalScreenPosition = flixel_util_FlxDestroyUtil.put(this._globalScreenPosition);
		this._justPressedPosition = flixel_util_FlxDestroyUtil.put(this._justPressedPosition);
		this._point = null;
		this._globalScreenPosition = null;
		this._flashPoint = null;
		this._justPressedPosition = null;
		flixel_util_FlxPoint.prototype.destroy.call(this);
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel_FlxG.camera;
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		this.getScreenPosition(Camera,this._point);
		point.set_x(this._point.x + Camera.scroll.x);
		point.set_y(this._point.y + Camera.scroll.y);
		return point;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel_FlxG.camera;
		if(point == null) point = flixel_util_FlxPoint.get(null,null);
		point.set_x((this._globalScreenPosition.x - Camera.x) / Camera.zoom);
		point.set_y((this._globalScreenPosition.y - Camera.y) / Camera.zoom);
		return point;
	}
	,overlaps: function(ObjectOrGroup,Camera) {
		if(js_Boot.__instanceof(ObjectOrGroup,flixel_group_FlxTypedGroup)) {
			var i = 0;
			var results = false;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		return (js_Boot.__cast(ObjectOrGroup , flixel_FlxObject)).overlapsPoint(this,true,Camera);
	}
	,reset: function(X,Y,PointID) {
		this.updatePosition(X,Y);
		this.touchPointID = PointID;
		this._current = 0;
		this._last = 0;
	}
	,deactivate: function() {
		this._current = 0;
		this._last = 0;
	}
	,update: function() {
		if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1;
		this._last = this._current;
		if(this._current == 2) {
			this._justPressedPosition.set(this.screenX,this.screenY);
			this._justPressedTimeInTicks = flixel_FlxG.game.ticks;
		} else if(this._current == -1) flixel_FlxG.swipes.push(new flixel_input_FlxSwipe(this.touchPointID,this._justPressedPosition,this.getScreenPosition(),this._justPressedTimeInTicks));
	}
	,updateCursor: function() {
		var camera = flixel_FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.set_x(this.screenX + camera.scroll.x);
		this.set_y(this.screenY + camera.scroll.y);
	}
	,updatePosition: function(X,Y) {
		this._flashPoint.x = X;
		this._flashPoint.y = Y;
		this._flashPoint = flixel_FlxG.game.globalToLocal(this._flashPoint);
		this._globalScreenPosition.set_x(this._flashPoint.x);
		this._globalScreenPosition.set_y(this._flashPoint.y);
		this.updateCursor();
	}
	,get_pressed: function() {
		return this._current > 0;
	}
	,get_justPressed: function() {
		return this._current == 2;
	}
	,get_justReleased: function() {
		return this._current == -1;
	}
	,get_isActive: function() {
		return this._current != 0;
	}
	,__class__: flixel_input_touch_FlxTouch
	,__properties__: $extend(flixel_util_FlxPoint.prototype.__properties__,{get_isActive:"get_isActive",get_justReleased:"get_justReleased",get_justPressed:"get_justPressed",get_pressed:"get_pressed"})
});
var flixel_input_touch_FlxTouchManager = function() {
	this.list = [];
	this._inactiveTouches = [];
	this._touchesCache = new haxe_ds_IntMap();
	flixel_input_touch_FlxTouchManager.maxTouchPoints = flash_ui_Multitouch.maxTouchPoints;
	flash_ui_Multitouch.inputMode = flash_ui_MultitouchInputMode.TOUCH_POINT;
	flash_Lib.get_current().get_stage().addEventListener("touchBegin",$bind(this,this.handleTouchBegin));
	flash_Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.handleTouchEnd));
	flash_Lib.get_current().get_stage().addEventListener("touchMove",$bind(this,this.handleTouchMove));
};
$hxClasses["flixel.input.touch.FlxTouchManager"] = flixel_input_touch_FlxTouchManager;
flixel_input_touch_FlxTouchManager.__name__ = ["flixel","input","touch","FlxTouchManager"];
flixel_input_touch_FlxTouchManager.__interfaces__ = [flixel_interfaces_IFlxInput];
flixel_input_touch_FlxTouchManager.prototype = {
	list: null
	,_inactiveTouches: null
	,_touchesCache: null
	,getByID: function(TouchPointID) {
		return this._touchesCache.h[TouchPointID];
	}
	,getFirst: function() {
		if(this.list[0] != null) return this.list[0]; else return null;
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this.list = null;
		var _g2 = 0;
		var _g11 = this._inactiveTouches;
		while(_g2 < _g11.length) {
			var touch1 = _g11[_g2];
			++_g2;
			touch1.destroy();
		}
		this._inactiveTouches = null;
		this._touchesCache = null;
	}
	,justStarted: function(TouchArray) {
		if(TouchArray == null) TouchArray = [];
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == 2) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,justReleased: function(TouchArray) {
		if(TouchArray == null) TouchArray = [];
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == -1) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,reset: function() {
		var $it0 = this._touchesCache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this._touchesCache.remove(key);
		}
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.deactivate();
			this._inactiveTouches.push(touch);
		}
		this.list.splice(0,this.list.length);
	}
	,handleTouchBegin: function(FlashEvent) {
		var touch = this._touchesCache.h[FlashEvent.touchPointID];
		if(touch != null) {
			touch.updatePosition(FlashEvent.stageX,FlashEvent.stageY);
			if(touch._current > 0) touch._current = 1; else touch._current = 2;
		} else {
			touch = this.recycle(FlashEvent.stageX,FlashEvent.stageY,FlashEvent.touchPointID);
			touch._current = 2;
		}
	}
	,handleTouchEnd: function(FlashEvent) {
		var touch = this._touchesCache.h[FlashEvent.touchPointID];
		if(touch != null) {
			if(touch._current > 0) touch._current = -1; else touch._current = 0;
		}
	}
	,handleTouchMove: function(FlashEvent) {
		var touch = this._touchesCache.h[FlashEvent.touchPointID];
		if(touch != null) touch.updatePosition(FlashEvent.stageX,FlashEvent.stageY);
	}
	,add: function(Touch) {
		this.list.push(Touch);
		this._touchesCache.h[Touch.touchPointID] = Touch;
		return Touch;
	}
	,recycle: function(X,Y,PointID) {
		if(this._inactiveTouches.length > 0) {
			var touch = this._inactiveTouches.pop();
			touch.reset(X,Y,PointID);
			return this.add(touch);
		}
		return this.add(new flixel_input_touch_FlxTouch(X,Y,PointID));
	}
	,update: function() {
		var i = this.list.length - 1;
		var touch;
		while(i >= 0) {
			touch = this.list[i];
			if(touch._current == 0) {
				touch.deactivate();
				this._touchesCache.remove(touch.touchPointID);
				this.list.splice(i,1);
				this._inactiveTouches.push(touch);
			} else touch.update();
			i--;
		}
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
		this.reset();
	}
	,__class__: flixel_input_touch_FlxTouchManager
};
var flixel_interfaces_IFlxSignal = function() { };
$hxClasses["flixel.interfaces.IFlxSignal"] = flixel_interfaces_IFlxSignal;
flixel_interfaces_IFlxSignal.__name__ = ["flixel","interfaces","IFlxSignal"];
flixel_interfaces_IFlxSignal.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_interfaces_IFlxSignal.prototype = {
	dispatch: null
	,add: null
	,addOnce: null
	,remove: null
	,removeAll: null
	,has: null
	,__class__: flixel_interfaces_IFlxSignal
};
var flixel_system__$FlxAssets_FontDefault = function() {
	flash_text_Font.call(this);
};
$hxClasses["flixel.system._FlxAssets.FontDefault"] = flixel_system__$FlxAssets_FontDefault;
flixel_system__$FlxAssets_FontDefault.__name__ = ["flixel","system","_FlxAssets","FontDefault"];
flixel_system__$FlxAssets_FontDefault.__super__ = flash_text_Font;
flixel_system__$FlxAssets_FontDefault.prototype = $extend(flash_text_Font.prototype,{
	__class__: flixel_system__$FlxAssets_FontDefault
});
var flixel_system_GraphicLogo = function(width,height,transparent,color) {
	var o = flixel_system_GraphicLogo.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.system.GraphicLogo"] = flixel_system_GraphicLogo;
flixel_system_GraphicLogo.__name__ = ["flixel","system","GraphicLogo"];
flixel_system_GraphicLogo.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_system_GraphicLogo.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABM1JREFUeNrs28+LG2UYwPHXZm6CuXk0dE0TsT+SmT1od5Fk+wvpmtGbiEhOXlVQL14Cnkv3XEQDHoRCYempbKmdpMtSwUz21PMcRPBSgpBlYUd4PGyzmU02u/Mm74/nmfd94fkH8uGbN+/kHQZdD5RMx2vDjltgRBcs3cjvlRrtvbIPMocpA+l6AB13AF2vBb3lPC0IvzUs+QPZGOpBCMGohtALcgym2sSGMSz5zb2yH6mEwAEyhokwwOiEwAWShHnm1lRD7Bcbtb2Sv6sTAifIGCZQAbNfbNSG5UaAAQI3SBJm262I/2r6qIINggaI4DPM/vnbBRVnieyDLAhDAYImCOcZRtdZwiyQFDAUIeiDzDhcDkt+kyJEdkBezR/Blahz62ZEFSJTILtBBfJbb0N+swjPr920IBgw2NYSsK0l8igsSxhZQGFZw6COwrKIkZx7X3xgQWTO5tPLqTEoopACaT+9xAVBEYWZgEEJhZmCQQWFmYRBAYWZhoEdhZmIgRmFmYqBFYVBxw1MxRjND9+8jwjkmVszGWM0n//o4QBhjDHoeG2TMTChHIL0lvOv/hI1FgMJSjT+H7pb/VoHxsbvF9Fg6EYZlvzj12kP79iqw2g+eQcdhkaUaPrajMINHjOGDpSpOsaVeJsWQzlKNPty2Y5bkLnBU8JQhTKzjvEG77UsxjTK39V1tXUcgRz+DI4sxvG5/PO7wlHOrGO8wVc/thiSUUr+Lt+LjwKec2UJQzTKfrHB91ISbLsViyEHZVhuBPO9Htz1NiyGeBTuOiY2+IHFEIcydx2J51xNiyEOZe46Jjb43dMgBh0XKo8vGIfBi7JwHWmec5mOwYMipI7Ec662xTh93vqtPPOSt7A6Zm3wFoPv5r3QOiafc1kMPhThdSTXy041shh8KFLqGK1LzedB7mHFfugpUR6tX5dXx9U1qK2uAVQ+fQEWJcU8uQ25P/+RB7Jah2B1DcCipMV4CU4Yg9OPa9LqSI5FSYERxuD04kBqHckpfvXAApyGMRqRlZxUh0XhwBBdyaw6LEpKDJGVnFWHRUmJIaqSNHUYjZIWQ0QlPHUYicKLsWglvHWYhPJa8CU/xiKVzFtHcs5//0s2MTrfzgexSCWL1JGcN+98ZzEWrUREHVlEEYYRxpDrxZvK68gSikiM0bA+FJTXkQUUGRhOGEMuPGhrqYMyiiyMVJXIrIMiimyMMyuRXQclFBUYp1aiqo7kvPHTZ8ZjzKxEZR2jee/Df+H1X9eNxjixEh11YETRhTFViY46sKHoxDiqRHcdWFAwYByB6K5DNwoWDCeMAU0dulAwYThhDKjqUI2CDeMQBCHGaJY/+UvanS+MGOhBZF3Ew4pBAkQ0yrntu2gxyICIQjm3cx81BimQRVEoYJADmReFCgZJEF4UShhkQdKiUMMgDXLWRTyKGORBZqFQxcgEyCQKZYzMgIxQqGNkBmSlDu2Va1BgfSjkwoO2BdE1dQiursH0/dg+VJxeHFgQ3RATy+nHNWowjNhXU7RahybvLX5KMCzLEJMr1/uvmQsPIgsy/1fTYKUOLdHv22OGYZghlm9AnklcGGEYQowN2RDHVg/yThi3cmE8sCAnnSV0LSQwDMNPWK0QyGAY9rOEtqXp1P//ANwors8V8MhWAAAAAElFTkSuQmCC";
};
flixel_system_GraphicLogo.__super__ = flash_display_BitmapData;
flixel_system_GraphicLogo.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_system_GraphicLogo
});
var flixel_system_FlxAssets = function() { };
$hxClasses["flixel.system.FlxAssets"] = flixel_system_FlxAssets;
flixel_system_FlxAssets.__name__ = ["flixel","system","FlxAssets"];
flixel_system_FlxAssets.init = function() {
	flash_text_Font.registerFont(flixel_system__$FlxAssets_FontDefault);
};
flixel_system_FlxAssets.drawLogo = function(graph) {
	graph.beginFill(47394);
	graph.moveTo(50,13);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(87,51);
	graph.lineTo(51,87);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(13,50);
	graph.lineTo(50,13);
	graph.endFill();
	graph.beginFill(16761138);
	graph.moveTo(0,0);
	graph.lineTo(25,0);
	graph.lineTo(50,13);
	graph.lineTo(13,50);
	graph.lineTo(0,25);
	graph.lineTo(0,0);
	graph.endFill();
	graph.beginFill(16066382);
	graph.moveTo(100,0);
	graph.lineTo(75,0);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(100,25);
	graph.lineTo(100,0);
	graph.endFill();
	graph.beginFill(3555839);
	graph.moveTo(0,100);
	graph.lineTo(25,100);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(0,75);
	graph.lineTo(0,100);
	graph.endFill();
	graph.beginFill(314875);
	graph.moveTo(100,100);
	graph.lineTo(75,100);
	graph.lineTo(51,87);
	graph.lineTo(87,51);
	graph.lineTo(100,75);
	graph.lineTo(100,100);
	graph.endFill();
};
flixel_system_FlxAssets.getBitmapData = function(id) {
	return openfl_Assets.getBitmapData(id,false);
};
flixel_system_FlxAssets.getSound = function(id) {
	var extension = "";
	extension = ".ogg";
	return openfl_Assets.getSound(id + extension);
};
flixel_system_FlxAssets.cacheSounds = function() {
	var _g = 0;
	var _g1 = openfl_Assets.list(openfl_AssetType.SOUND);
	while(_g < _g1.length) {
		var id = _g1[_g];
		++_g;
		flixel_FlxG.sound.cache(id);
	}
};
var flixel_system_FlxList = function() {
	this.exists = true;
};
$hxClasses["flixel.system.FlxList"] = flixel_system_FlxList;
flixel_system_FlxList.__name__ = ["flixel","system","FlxList"];
flixel_system_FlxList.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_system_FlxList.recycle = function() {
	if(flixel_system_FlxList._cachedListsHead != null) {
		var cachedList = flixel_system_FlxList._cachedListsHead;
		flixel_system_FlxList._cachedListsHead = flixel_system_FlxList._cachedListsHead.next;
		flixel_system_FlxList._NUM_CACHED_FLX_LIST--;
		cachedList.exists = true;
		cachedList.next = null;
		return cachedList;
	} else return new flixel_system_FlxList();
};
flixel_system_FlxList.clearCache = function() {
	while(flixel_system_FlxList._cachedListsHead != null) {
		var node = flixel_system_FlxList._cachedListsHead;
		flixel_system_FlxList._cachedListsHead = flixel_system_FlxList._cachedListsHead.next;
		node.object = null;
		node.next = null;
	}
	flixel_system_FlxList._NUM_CACHED_FLX_LIST = 0;
};
flixel_system_FlxList.prototype = {
	object: null
	,next: null
	,exists: null
	,destroy: function() {
		if(!this.exists) return;
		this.object = null;
		if(this.next != null) this.next.destroy();
		this.exists = false;
		this.next = flixel_system_FlxList._cachedListsHead;
		flixel_system_FlxList._cachedListsHead = this;
		flixel_system_FlxList._NUM_CACHED_FLX_LIST++;
	}
	,__class__: flixel_system_FlxList
};
var flixel_system_PreloaderFont = function() {
	flash_text_Font.call(this);
};
$hxClasses["flixel.system.PreloaderFont"] = flixel_system_PreloaderFont;
flixel_system_PreloaderFont.__name__ = ["flixel","system","PreloaderFont"];
flixel_system_PreloaderFont.__super__ = flash_text_Font;
flixel_system_PreloaderFont.prototype = $extend(flash_text_Font.prototype,{
	__class__: flixel_system_PreloaderFont
});
var flixel_system__$FlxPreloader_GraphicLogoLight = function(width,height,transparent,color) {
	var o = flixel_system__$FlxPreloader_GraphicLogoLight.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.system._FlxPreloader.GraphicLogoLight"] = flixel_system__$FlxPreloader_GraphicLogoLight;
flixel_system__$FlxPreloader_GraphicLogoLight.__name__ = ["flixel","system","_FlxPreloader","GraphicLogoLight"];
flixel_system__$FlxPreloader_GraphicLogoLight.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_system__$FlxPreloader_GraphicLogoLight.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABq5JREFUeNrUW4tu4zYQ5NKUc3fpt/af+pM525K4RQCx2JvbF/1I2wCEZEd2NMPZt0Llz7/KC3/oSd/Dr7rB9sWg6U7A9Coy2hcApwe+i4Pv4/8CARS8R3eAlNewuA4/Q4+S0L4IOD1gCpS4D/5qAixAlHwvIoOTpPCEmp5GAE0CJ+O6jBNkB9RTTKI9CNwCGL0X7TwLgKyAZYeIKTU86gQ1IsZ7VQE/S4A8744KXuoDMvKOVnWUgICsRQcJFJAxRUx7EHyFcwRcA2I88ANkF69JUQY7DjQ0h5YAb5FADuAqFsF5hoAOwPvx+Q4q6Ab4tB+4xwlq4DXgJ+W1Zg7sEDDWLsCiCXj+IcwVWnL3SZE+ApZAcVVFFaR4dj7AsgC+H5/ZwQ8g0G4owQ2R7Q6vX5XdHyAbAG8KGfgd2u4P4Js4x9fjfnbxnX02SrSJ3dd2/iSOTRy1dYLr0Qd0AD8Ay4XkaUR4ofI3MloixdXiO0oewS6wmqIGVIAkQIJejzX+3mYkRWgKlvR/ed0mKjhN/icD9Fkcz+L349oKzpCFo0PgDfyI5eFZ2e3yiA/wkhq08wUAv8H5IoiQSkBPLnf+JpZGgBVCi+IUzajQkpVeDaQvwX87QI/1TfxOmoSmAAR/FYRR4DhL0DtIOUFybJ+UUIe7P0B/P4DL9SZIkGbAQIAEv4jdL4piMGmqAjwZ/QTVCVIiH7DMoAEBA/AnCT+O43dBzhnsehAg7f4T/E8gCsHvSsJUIW0mo7/IURgkJwyi/WsEfAJ+PwgYS5rG4hDwCf4CSilGlrgbZKASrEYrZ4ohLd3F0HdWCPhxkPCuKGERJEoHuB7gh0pIAa8lRieRMVYlWzTrg0wxpBEhfcEiSJAEIAnvgoAzRAJp/2dl52V+sEKIbMf7J5EM4bIcIbVE1WelvloOgI4QCZCmgApYhdev4sYt8GNp9YZHwi9KiDLB4hRAJ8MRnsERDn/wBxCwgNNaQfoMwGVkWJT0GjeqZ7rHTQkRNWhjRZngGZSAJjHMoIECbsIkBvgB/A1yCSu1ro4D54wPoCAZikpgLSq8KeFxgKnCB8ioIMFfIL1uiVLba72FYTATFShwjM1RxjCRRez4Jmr9M6TNC+QNluy9BqxpBjO1gBUeyVADkqERU+HGRiRozk6Tk6nS7CyyJYYTsx3iAm1xCtpoxekYRU3Vu0AXuMmZ2R87FRg7/T2r1V2UfoD3Wa99nhmr3a0A7Y977WxMT3dY60EwJkIbtL2snP9e8GYYJKeNZO1wT7SxMGm5ir/JIgzuUP/fxGc2cdwUQlA93szADIPRGJqV3l0P2liyrJWlLYnPVMgDrsq6AQGaStgwyRJ1hVpCMl7fHncegV9E/EbwC+QBsgz+OI6XYw0yVkUNFhHeINXNA6y+Gkptd3b+CmVthfR2hYKnQyn8ASRcwTRQAZaPiKKamgqT4gOscZUl+cXo5lgVX4fM7wOWR8SmAI8c5T8KacaOF4MEdqQvnVwzqroVCCAgYBWyl+CRgBWUgIooGQcYmYAX4jqEtHbcmByWkNLxvYFPkArAjtBFUYEkwlIAnnMmChRnyoo9tk3J6G7KEFTurnRy6BTxGulAf8LSFIAOkZ2Q+FtVOBMGNTVskPdXAzzuPjZFO5jBTey0jAYXJU/YjdzAcoRuFGCndu4wkxvnY2x1VVSzO7tfwQR2UAHmBRdxtJxgD54ycU3A66GjKexKr6DAzrMCCncfByNaPnFTvP+qhMM9CIN3OUErBSaR1GyJMfdNNEKt2WA3SJDHq2P7md3H9D5VDGlPcfSg5Yxgmmh5zUyHV6WmsMB3pyZIK8CdpRvANyNblASclK5OEU7Qez5gD2oBb/enM0EvH7CeycGEaQBpx81lmpdejWE9KTJTKvMjiVBJPJOzwZgLnWAN+nj4jJBGRE/m/zzTFGmJ3fcaDd3IFao47krLqzgE4PCTjeZIlPWFu5/tCmu5AQ4gGEZZVQwpvafDNCfbneJLA5wpg+9uiVHwXleIQH9gNTiLE2VYqe6ifiFPNHenGiLkhEQCU8Dqr0LOED02nyGiOKGOZxujWRMoSni0wiQpT2iQ04kmBzw7tQgHNp8iYmYy5D10qD2pTcbMgBNkl4CEjJN7yf8LcKKDrO28NYLnwAy8lry30081gdnJkUWINXTlhBIy700PRe4lwEqOLAdp3SAlAHByWHMX+GcogBxiIjIyiuI7rvkyAiI1zN4kTyjjKeCfQUBW2sWpKSIn+BLgzyYgUsWjN/6/+u/x6Kbp3wBq/fwtwACDedDMJk9rEgAAAABJRU5ErkJggg==";
};
flixel_system__$FlxPreloader_GraphicLogoLight.__super__ = flash_display_BitmapData;
flixel_system__$FlxPreloader_GraphicLogoLight.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_system__$FlxPreloader_GraphicLogoLight
});
var flixel_system__$FlxPreloader_GraphicLogoCorners = function(width,height,transparent,color) {
	var o = flixel_system__$FlxPreloader_GraphicLogoCorners.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.system._FlxPreloader.GraphicLogoCorners"] = flixel_system__$FlxPreloader_GraphicLogoCorners;
flixel_system__$FlxPreloader_GraphicLogoCorners.__name__ = ["flixel","system","_FlxPreloader","GraphicLogoCorners"];
flixel_system__$FlxPreloader_GraphicLogoCorners.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_system__$FlxPreloader_GraphicLogoCorners.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABY1JREFUeNrkWwuymzgQlGT8wX5JNve/TQ60tXkv/mFAC64Z0m5LApz1OhCqprDBxu6enhkJRtYY862xdWP7xn409h3sHzn20dixsZNY0dilsbKxCqwG82D83sCeX7ebhX1rDvZqWWML2S8bWwmOTWNvYl8a+9rYX7L/LMfbz2wbO2dycCkACrmgASBFwC6yR/AeSIgBZwIYOJOARCjwReD6+PkM/lsNx9YCeif7NyVgLxd9B6+39rfsv4sKWgWcyfs1eT4FOuT9PgIQWEgJC1BBIY68iOm1USUZXHehBJzkwEGAKhHvQsC7kHQSAi4AuooAr8nLKeBDVGADRDgi4gJKZs/n4vVc3q/UkUqAF5AfYkjCh5Cj3i8HSN30AB9CgE0oAUmwQkBJuUiPryDmc3m9FCI6Airx/g8gQMGr/Avw/pD47gOc8vxQEpSICvalXJsV8CbxnwMpVSbeLYEABL6X8yeK+0dBDwX+KBE1OAgJUGxbIsBnUNa0DB7k9RFK3xkkhjE+xLshwH4keD+ACE3EWsW0VB4Am1YALZc2g9p+IPAHqvlVJNbNSE8/ogD+bowIvLYTxx0B114I2IgtMgCqHzxCyVPZl1Tqngmy71qWlGZhb6j8FYRtT8kwywToiYAXEfD1L4J8lBg7kHQvwGv475cAxoOQ0BGA4M80zOWh7bM9PlQFsXM15IQSBkYhElYZgMahbqzWvwJ832/agAo8OK6CoTuTUCMBONBh778a8JjE6Gl0WoEKCsB60jKIE5wLlbsxY/ffgQhWA+auMkCCyQLSLwfGvfnNyWAVlKSEQscBRUT6fiKeTymhplzAJFwJKBP1fqoK4LCtYaKEJDhH4KsZSD80NqgDJFwtwzckmamHgQ8kw4pIWDjy/tQVECMiRkLlIjc1p+j1PgJ8ICFWLnFn18/M+1XgHuaNAuoBNzumFv+9YeACSW/olHeqOeDGhipg6uOAKBEuUfbmsDEJFZPgTPqhxlxICD2m6wgY+8hqTvnAu5l6PTYzvFOD+wOkH5oXdOdcYvw85dGgHxoOzox7bj+XHNAdc2b+m09Mk42baeIbslklwP4pYEPvXeQDqS/PalMFhGyOKrjrO3IzB80Kvnus7hLenzIpscfnd6p3iTCYi+djJDgkwM28IoRa7bocMGcVhMBja53rXgSImEMJDLXcIuYFdlsuIiTMDfxNl6kLgHdmXomQQ0BbZzsCtIdWD059YGQDBHBvsbbQZY7AY3xMORnanvi/UUBGKphTSWTpY3d5i3nZnljpm558YCeY+EKLLBTrCglYw4mMwsBMZGgcGvm5lPeNtMld28aFiBUR4GDKXJthDYuvnuvHFIDAOwUgAWsKB+4Ptibcmhq7DWVMuNF57O2sMfcl+laV4Nqiq7UHNwJ0AyfO8gVsj0/dX7OJP2v/Y+8Omeoy+CU4dw1qv4ZALn8+F+NG6RAB/hc9+8x5PnudPa9rBXINASVgK+Bzc7s2CIHGWme5WzsWLj4SFqwePwI039pDr7PkN2BrVEC7tYsJeF0grr7gLjJnwk9fXlXueKi7BNCq7q352S6/VQVs5YsKHtvla2AY1wnePWIy/8+TJJuY6NhAtkfQOyKga5fPhTX0Pi48xDsoqWbKZyuhDzyO8VX2CnwXIcEpAUvyPJZAjCtdWfqKniLb43kudRsBrMtoPxEJLW6LZXBn7tcLeCIgIxXEwiFFQmwM0VfzY0tpOeur93PB9ElMlaDybz/TLSszJt4yb+BHlkRQTAkpEvzI0hkb4rLs2ftbIOANbAtV4LpeYGd+Ljr0gdKHiaVvPdEz8kHolraL1Hv2vkq/XUXeriD/TGqocPH0ydyvuubYqsz9im1VgnugMgyp+TYyzI1NcHBmi3MZXR1/xKT+rwADAAJBaiAmm5xwAAAAAElFTkSuQmCC";
};
flixel_system__$FlxPreloader_GraphicLogoCorners.__super__ = flash_display_BitmapData;
flixel_system__$FlxPreloader_GraphicLogoCorners.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_system__$FlxPreloader_GraphicLogoCorners
});
var flixel_system_FlxQuadTree = function(X,Y,Width,Height,Parent) {
	flixel_util_FlxRect.call(this);
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this;
	this.reset(X,Y,Width,Height,Parent);
};
$hxClasses["flixel.system.FlxQuadTree"] = flixel_system_FlxQuadTree;
flixel_system_FlxQuadTree.__name__ = ["flixel","system","FlxQuadTree"];
flixel_system_FlxQuadTree.recycle = function(X,Y,Width,Height,Parent) {
	if(flixel_system_FlxQuadTree._cachedTreesHead != null) {
		var cachedTree = flixel_system_FlxQuadTree._cachedTreesHead;
		flixel_system_FlxQuadTree._cachedTreesHead = flixel_system_FlxQuadTree._cachedTreesHead.next;
		flixel_system_FlxQuadTree._NUM_CACHED_QUAD_TREES--;
		cachedTree.reset(X,Y,Width,Height,Parent);
		return cachedTree;
	} else return new flixel_system_FlxQuadTree(X,Y,Width,Height,Parent);
};
flixel_system_FlxQuadTree.clearCache = function() {
	while(flixel_system_FlxQuadTree._cachedTreesHead != null) {
		var node = flixel_system_FlxQuadTree._cachedTreesHead;
		flixel_system_FlxQuadTree._cachedTreesHead = flixel_system_FlxQuadTree._cachedTreesHead.next;
		node.next = null;
	}
	flixel_system_FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
};
flixel_system_FlxQuadTree.__super__ = flixel_util_FlxRect;
flixel_system_FlxQuadTree.prototype = $extend(flixel_util_FlxRect.prototype,{
	exists: null
	,_canSubdivide: null
	,_headA: null
	,_tailA: null
	,_headB: null
	,_tailB: null
	,_northWestTree: null
	,_northEastTree: null
	,_southEastTree: null
	,_southWestTree: null
	,_leftEdge: null
	,_rightEdge: null
	,_topEdge: null
	,_bottomEdge: null
	,_halfWidth: null
	,_halfHeight: null
	,_midpointX: null
	,_midpointY: null
	,next: null
	,reset: function(X,Y,Width,Height,Parent) {
		this.exists = true;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		this;
		this._headA = this._tailA = flixel_system_FlxList.recycle();
		this._headB = this._tailB = flixel_system_FlxList.recycle();
		if(Parent != null) {
			var iterator;
			var ot;
			if(Parent._headA.object != null) {
				iterator = Parent._headA;
				while(iterator != null) {
					if(this._tailA.object != null) {
						ot = this._tailA;
						this._tailA = flixel_system_FlxList.recycle();
						ot.next = this._tailA;
					}
					this._tailA.object = iterator.object;
					iterator = iterator.next;
				}
			}
			if(Parent._headB.object != null) {
				iterator = Parent._headB;
				while(iterator != null) {
					if(this._tailB.object != null) {
						ot = this._tailB;
						this._tailB = flixel_system_FlxList.recycle();
						ot.next = this._tailB;
					}
					this._tailB.object = iterator.object;
					iterator = iterator.next;
				}
			}
		} else flixel_system_FlxQuadTree._min = Math.floor((this.width + this.height) / (2 * flixel_system_FlxQuadTree.divisions));
		this._canSubdivide = this.width > flixel_system_FlxQuadTree._min || this.height > flixel_system_FlxQuadTree._min;
		this._northWestTree = null;
		this._northEastTree = null;
		this._southEastTree = null;
		this._southWestTree = null;
		this._leftEdge = this.x;
		this._rightEdge = this.x + this.width;
		this._halfWidth = this.width / 2;
		this._midpointX = this._leftEdge + this._halfWidth;
		this._topEdge = this.y;
		this._bottomEdge = this.y + this.height;
		this._halfHeight = this.height / 2;
		this._midpointY = this._topEdge + this._halfHeight;
	}
	,destroy: function() {
		this._headA = flixel_util_FlxDestroyUtil.destroy(this._headA);
		this._headB = flixel_util_FlxDestroyUtil.destroy(this._headB);
		this._tailA = flixel_util_FlxDestroyUtil.destroy(this._tailA);
		this._tailB = flixel_util_FlxDestroyUtil.destroy(this._tailB);
		this._northWestTree = flixel_util_FlxDestroyUtil.destroy(this._northWestTree);
		this._northEastTree = flixel_util_FlxDestroyUtil.destroy(this._northEastTree);
		this._southWestTree = flixel_util_FlxDestroyUtil.destroy(this._southWestTree);
		this._southEastTree = flixel_util_FlxDestroyUtil.destroy(this._southEastTree);
		flixel_system_FlxQuadTree._object = null;
		flixel_system_FlxQuadTree._processingCallback = null;
		flixel_system_FlxQuadTree._notifyCallback = null;
		this.exists = false;
		this.next = flixel_system_FlxQuadTree._cachedTreesHead;
		flixel_system_FlxQuadTree._cachedTreesHead = this;
		flixel_system_FlxQuadTree._NUM_CACHED_QUAD_TREES++;
		flixel_util_FlxRect.prototype.destroy.call(this);
	}
	,load: function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
		this.add(ObjectOrGroup1,0);
		if(ObjectOrGroup2 != null) {
			this.add(ObjectOrGroup2,1);
			flixel_system_FlxQuadTree._useBothLists = true;
		} else flixel_system_FlxQuadTree._useBothLists = false;
		flixel_system_FlxQuadTree._notifyCallback = NotifyCallback;
		flixel_system_FlxQuadTree._processingCallback = ProcessCallback;
	}
	,add: function(ObjectOrGroup,list) {
		flixel_system_FlxQuadTree._list = list;
		var group = flixel_group_FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) {
			var i = 0;
			var basic;
			var members = group.members;
			var l = group.length;
			while(i < l) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					group = flixel_group_FlxGroup.resolveGroup(basic);
					if(group != null) this.add(group,list); else {
						flixel_system_FlxQuadTree._object = js_Boot.__cast(basic , flixel_FlxObject);
						if(flixel_system_FlxQuadTree._object.exists && flixel_system_FlxQuadTree._object.allowCollisions != 0) {
							flixel_system_FlxQuadTree._objectLeftEdge = flixel_system_FlxQuadTree._object.x;
							flixel_system_FlxQuadTree._objectTopEdge = flixel_system_FlxQuadTree._object.y;
							flixel_system_FlxQuadTree._objectRightEdge = flixel_system_FlxQuadTree._object.x + flixel_system_FlxQuadTree._object.get_width();
							flixel_system_FlxQuadTree._objectBottomEdge = flixel_system_FlxQuadTree._object.y + flixel_system_FlxQuadTree._object.get_height();
							this.addObject();
						}
					}
				}
			}
		} else {
			flixel_system_FlxQuadTree._object = js_Boot.__cast(ObjectOrGroup , flixel_FlxObject);
			if(flixel_system_FlxQuadTree._object.exists && flixel_system_FlxQuadTree._object.allowCollisions != 0) {
				flixel_system_FlxQuadTree._objectLeftEdge = flixel_system_FlxQuadTree._object.x;
				flixel_system_FlxQuadTree._objectTopEdge = flixel_system_FlxQuadTree._object.y;
				flixel_system_FlxQuadTree._objectRightEdge = flixel_system_FlxQuadTree._object.x + flixel_system_FlxQuadTree._object.get_width();
				flixel_system_FlxQuadTree._objectBottomEdge = flixel_system_FlxQuadTree._object.y + flixel_system_FlxQuadTree._object.get_height();
				this.addObject();
			}
		}
	}
	,addObject: function() {
		if(!this._canSubdivide || this._leftEdge >= flixel_system_FlxQuadTree._objectLeftEdge && this._rightEdge <= flixel_system_FlxQuadTree._objectRightEdge && this._topEdge >= flixel_system_FlxQuadTree._objectTopEdge && this._bottomEdge <= flixel_system_FlxQuadTree._objectBottomEdge) {
			this.addToList();
			return;
		}
		if(flixel_system_FlxQuadTree._objectLeftEdge > this._leftEdge && flixel_system_FlxQuadTree._objectRightEdge < this._midpointX) {
			if(flixel_system_FlxQuadTree._objectTopEdge > this._topEdge && flixel_system_FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northWestTree == null) this._northWestTree = flixel_system_FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northWestTree.addObject();
				return;
			}
			if(flixel_system_FlxQuadTree._objectTopEdge > this._midpointY && flixel_system_FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southWestTree == null) this._southWestTree = flixel_system_FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southWestTree.addObject();
				return;
			}
		}
		if(flixel_system_FlxQuadTree._objectLeftEdge > this._midpointX && flixel_system_FlxQuadTree._objectRightEdge < this._rightEdge) {
			if(flixel_system_FlxQuadTree._objectTopEdge > this._topEdge && flixel_system_FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northEastTree == null) this._northEastTree = flixel_system_FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northEastTree.addObject();
				return;
			}
			if(flixel_system_FlxQuadTree._objectTopEdge > this._midpointY && flixel_system_FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southEastTree == null) this._southEastTree = flixel_system_FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southEastTree.addObject();
				return;
			}
		}
		if(flixel_system_FlxQuadTree._objectRightEdge > this._leftEdge && flixel_system_FlxQuadTree._objectLeftEdge < this._midpointX && flixel_system_FlxQuadTree._objectBottomEdge > this._topEdge && flixel_system_FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northWestTree == null) this._northWestTree = flixel_system_FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northWestTree.addObject();
		}
		if(flixel_system_FlxQuadTree._objectRightEdge > this._midpointX && flixel_system_FlxQuadTree._objectLeftEdge < this._rightEdge && flixel_system_FlxQuadTree._objectBottomEdge > this._topEdge && flixel_system_FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northEastTree == null) this._northEastTree = flixel_system_FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northEastTree.addObject();
		}
		if(flixel_system_FlxQuadTree._objectRightEdge > this._midpointX && flixel_system_FlxQuadTree._objectLeftEdge < this._rightEdge && flixel_system_FlxQuadTree._objectBottomEdge > this._midpointY && flixel_system_FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southEastTree == null) this._southEastTree = flixel_system_FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southEastTree.addObject();
		}
		if(flixel_system_FlxQuadTree._objectRightEdge > this._leftEdge && flixel_system_FlxQuadTree._objectLeftEdge < this._midpointX && flixel_system_FlxQuadTree._objectBottomEdge > this._midpointY && flixel_system_FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southWestTree == null) this._southWestTree = flixel_system_FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southWestTree.addObject();
		}
	}
	,addToList: function() {
		var ot;
		if(flixel_system_FlxQuadTree._list == 0) {
			if(this._tailA.object != null) {
				ot = this._tailA;
				this._tailA = flixel_system_FlxList.recycle();
				ot.next = this._tailA;
			}
			this._tailA.object = flixel_system_FlxQuadTree._object;
		} else {
			if(this._tailB.object != null) {
				ot = this._tailB;
				this._tailB = flixel_system_FlxList.recycle();
				ot.next = this._tailB;
			}
			this._tailB.object = flixel_system_FlxQuadTree._object;
		}
		if(!this._canSubdivide) return;
		if(this._northWestTree != null) this._northWestTree.addToList();
		if(this._northEastTree != null) this._northEastTree.addToList();
		if(this._southEastTree != null) this._southEastTree.addToList();
		if(this._southWestTree != null) this._southWestTree.addToList();
	}
	,execute: function() {
		var overlapProcessed = false;
		var iterator;
		if(this._headA.object != null) {
			iterator = this._headA;
			while(iterator != null) {
				flixel_system_FlxQuadTree._object = iterator.object;
				if(flixel_system_FlxQuadTree._useBothLists) flixel_system_FlxQuadTree._iterator = this._headB; else flixel_system_FlxQuadTree._iterator = iterator.next;
				if(flixel_system_FlxQuadTree._object != null && flixel_system_FlxQuadTree._object.exists && flixel_system_FlxQuadTree._object.allowCollisions > 0 && flixel_system_FlxQuadTree._iterator != null && flixel_system_FlxQuadTree._iterator.object != null && this.overlapNode()) overlapProcessed = true;
				iterator = iterator.next;
			}
		}
		if(this._northWestTree != null && this._northWestTree.execute()) overlapProcessed = true;
		if(this._northEastTree != null && this._northEastTree.execute()) overlapProcessed = true;
		if(this._southEastTree != null && this._southEastTree.execute()) overlapProcessed = true;
		if(this._southWestTree != null && this._southWestTree.execute()) overlapProcessed = true;
		return overlapProcessed;
	}
	,overlapNode: function() {
		if(flixel_system_FlxQuadTree._object.x < flixel_system_FlxQuadTree._object.last.x) flixel_system_FlxQuadTree._objectHullX = flixel_system_FlxQuadTree._object.x; else flixel_system_FlxQuadTree._objectHullX = flixel_system_FlxQuadTree._object.last.x;
		if(flixel_system_FlxQuadTree._object.y < flixel_system_FlxQuadTree._object.last.y) flixel_system_FlxQuadTree._objectHullY = flixel_system_FlxQuadTree._object.y; else flixel_system_FlxQuadTree._objectHullY = flixel_system_FlxQuadTree._object.last.y;
		flixel_system_FlxQuadTree._objectHullWidth = flixel_system_FlxQuadTree._object.x - flixel_system_FlxQuadTree._object.last.x;
		flixel_system_FlxQuadTree._objectHullWidth = flixel_system_FlxQuadTree._object.get_width() + (flixel_system_FlxQuadTree._objectHullWidth > 0?flixel_system_FlxQuadTree._objectHullWidth:-flixel_system_FlxQuadTree._objectHullWidth);
		flixel_system_FlxQuadTree._objectHullHeight = flixel_system_FlxQuadTree._object.y - flixel_system_FlxQuadTree._object.last.y;
		flixel_system_FlxQuadTree._objectHullHeight = flixel_system_FlxQuadTree._object.get_height() + (flixel_system_FlxQuadTree._objectHullHeight > 0?flixel_system_FlxQuadTree._objectHullHeight:-flixel_system_FlxQuadTree._objectHullHeight);
		var overlapProcessed = false;
		var checkObject;
		while(flixel_system_FlxQuadTree._iterator != null) {
			checkObject = flixel_system_FlxQuadTree._iterator.object;
			if(flixel_system_FlxQuadTree._object == checkObject || !checkObject.exists || checkObject.allowCollisions <= 0) {
				flixel_system_FlxQuadTree._iterator = flixel_system_FlxQuadTree._iterator.next;
				continue;
			}
			if(checkObject.x < checkObject.last.x) flixel_system_FlxQuadTree._checkObjectHullX = checkObject.x; else flixel_system_FlxQuadTree._checkObjectHullX = checkObject.last.x;
			if(checkObject.y < checkObject.last.y) flixel_system_FlxQuadTree._checkObjectHullY = checkObject.y; else flixel_system_FlxQuadTree._checkObjectHullY = checkObject.last.y;
			flixel_system_FlxQuadTree._checkObjectHullWidth = checkObject.x - checkObject.last.x;
			flixel_system_FlxQuadTree._checkObjectHullWidth = checkObject.get_width() + (flixel_system_FlxQuadTree._checkObjectHullWidth > 0?flixel_system_FlxQuadTree._checkObjectHullWidth:-flixel_system_FlxQuadTree._checkObjectHullWidth);
			flixel_system_FlxQuadTree._checkObjectHullHeight = checkObject.y - checkObject.last.y;
			flixel_system_FlxQuadTree._checkObjectHullHeight = checkObject.get_height() + (flixel_system_FlxQuadTree._checkObjectHullHeight > 0?flixel_system_FlxQuadTree._checkObjectHullHeight:-flixel_system_FlxQuadTree._checkObjectHullHeight);
			if(flixel_system_FlxQuadTree._objectHullX + flixel_system_FlxQuadTree._objectHullWidth > flixel_system_FlxQuadTree._checkObjectHullX && flixel_system_FlxQuadTree._objectHullX < flixel_system_FlxQuadTree._checkObjectHullX + flixel_system_FlxQuadTree._checkObjectHullWidth && flixel_system_FlxQuadTree._objectHullY + flixel_system_FlxQuadTree._objectHullHeight > flixel_system_FlxQuadTree._checkObjectHullY && flixel_system_FlxQuadTree._objectHullY < flixel_system_FlxQuadTree._checkObjectHullY + flixel_system_FlxQuadTree._checkObjectHullHeight) {
				if(flixel_system_FlxQuadTree._processingCallback == null || flixel_system_FlxQuadTree._processingCallback(flixel_system_FlxQuadTree._object,checkObject)) {
					overlapProcessed = true;
					if(flixel_system_FlxQuadTree._notifyCallback != null) flixel_system_FlxQuadTree._notifyCallback(flixel_system_FlxQuadTree._object,checkObject);
				}
			}
			if(flixel_system_FlxQuadTree._iterator != null) flixel_system_FlxQuadTree._iterator = flixel_system_FlxQuadTree._iterator.next;
		}
		return overlapProcessed;
	}
	,__class__: flixel_system_FlxQuadTree
});
var flixel_system_FlxSound = function() {
	this._alreadyPaused = false;
	this._volumeAdjust = 1.0;
	flixel_FlxBasic.call(this);
	this.reset();
};
$hxClasses["flixel.system.FlxSound"] = flixel_system_FlxSound;
flixel_system_FlxSound.__name__ = ["flixel","system","FlxSound"];
flixel_system_FlxSound.__super__ = flixel_FlxBasic;
flixel_system_FlxSound.prototype = $extend(flixel_FlxBasic.prototype,{
	x: null
	,y: null
	,persist: null
	,name: null
	,artist: null
	,amplitude: null
	,amplitudeLeft: null
	,amplitudeRight: null
	,autoDestroy: null
	,onComplete: null
	,playing: null
	,time: null
	,_sound: null
	,_channel: null
	,_transform: null
	,_paused: null
	,_volume: null
	,_volumeAdjust: null
	,_looped: null
	,_target: null
	,_radius: null
	,_proximityPan: null
	,_alreadyPaused: null
	,reset: function() {
		this.destroy();
		this.x = 0;
		this.y = 0;
		this.time = 0;
		this._paused = false;
		this._volume = 1.0;
		this._volumeAdjust = 1.0;
		this._looped = false;
		this._target = null;
		this._radius = 0;
		this._proximityPan = false;
		this.set_visible(false);
		this.amplitude = 0;
		this.amplitudeLeft = 0;
		this.amplitudeRight = 0;
		this.autoDestroy = false;
		if(this._transform == null) this._transform = new flash_media_SoundTransform();
		this._transform.pan = 0;
	}
	,destroy: function() {
		this._transform = null;
		this.set_exists(false);
		this.set_active(false);
		this._target = null;
		this.name = null;
		this.artist = null;
		if(this._channel != null) {
			this._channel.removeEventListener("soundComplete",$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		if(this._sound != null) {
			this._sound.removeEventListener("id3",$bind(this,this.gotID3));
			this._sound = null;
		}
		this.onComplete = null;
		flixel_FlxBasic.prototype.destroy.call(this);
	}
	,update: function() {
		if(!(this._channel != null)) return;
		this.time = this._channel.component.currentTime * 1000;
		var radialMultiplier = 1.0;
		var fadeMultiplier = 1.0;
		if(this._target != null) {
			radialMultiplier = flixel_util_FlxMath.getDistance(flixel_util_FlxPoint.get(this._target.x,this._target.y),flixel_util_FlxPoint.get(this.x,this.y)) / this._radius;
			if(radialMultiplier < 0) radialMultiplier = 0;
			if(radialMultiplier > 1) radialMultiplier = 1;
			radialMultiplier = 1 - radialMultiplier;
			if(this._proximityPan) {
				var d = (this.x - this._target.x) / this._radius;
				if(d < -1) d = -1; else if(d > 1) d = 1;
				this._transform.pan = d;
			}
		}
		this._volumeAdjust = radialMultiplier * fadeMultiplier;
		this.updateTransform();
		if(this._transform.volume > 0) {
			this.amplitudeLeft = this._channel.leftPeak / this._transform.volume;
			this.amplitudeRight = this._channel.rightPeak / this._transform.volume;
			this.amplitude = (this.amplitudeLeft + this.amplitudeRight) * 0.5;
		} else {
			this.amplitudeLeft = 0;
			this.amplitudeRight = 0;
			this.amplitude = 0;
		}
	}
	,kill: function() {
		flixel_FlxBasic.prototype.kill.call(this);
		this.cleanup(false);
	}
	,loadEmbedded: function(EmbeddedSound,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		if(js_Boot.__instanceof(EmbeddedSound,flash_media_Sound)) this._sound = EmbeddedSound; else if(js_Boot.__instanceof(EmbeddedSound,Class)) this._sound = Type.createInstance(EmbeddedSound,[]); else if(typeof(EmbeddedSound) == "string") this._sound = openfl_Assets.getSound(EmbeddedSound);
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.set_exists(true);
		this.onComplete = OnComplete;
		return this;
	}
	,loadStream: function(SoundURL,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this._sound = new flash_media_Sound();
		this._sound.addEventListener("id3",$bind(this,this.gotID3));
		this._sound.load(new flash_net_URLRequest(SoundURL));
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.set_exists(true);
		this.onComplete = OnComplete;
		return this;
	}
	,loadByteArray: function(Bytes,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this.onComplete();
		return this;
	}
	,proximity: function(X,Y,TargetObject,Radius,Pan) {
		if(Pan == null) Pan = true;
		this.x = X;
		this.y = Y;
		this._target = TargetObject;
		this._radius = Radius;
		this._proximityPan = Pan;
		return this;
	}
	,play: function(ForceRestart) {
		if(ForceRestart == null) ForceRestart = false;
		if(!this.exists) return this;
		if(ForceRestart) this.cleanup(false,true,true); else if(this._channel != null) return this;
		if(this._paused) this.resume(); else this.startSound(0);
		return this;
	}
	,resume: function() {
		if(this._paused) this.startSound(this.time);
		return this;
	}
	,pause: function() {
		if(!(this._channel != null)) return this;
		this.time = this._channel.component.currentTime * 1000;
		this._paused = true;
		this.cleanup(false,false,false);
		return this;
	}
	,stop: function() {
		this.cleanup(this.autoDestroy,true,true);
		return this;
	}
	,fadeOut: function(Duration,To) {
		if(To == null) To = 0;
		if(Duration == null) Duration = 1;
		flixel_tweens_FlxTween.num(this._volume,To,Duration,null,$bind(this,this.volumeTween));
		return this;
	}
	,fadeIn: function(Duration,From,To) {
		if(To == null) To = 1;
		if(From == null) From = 0;
		if(Duration == null) Duration = 1;
		flixel_tweens_FlxTween.num(From,To,Duration,null,$bind(this,this.volumeTween));
		return this;
	}
	,volumeTween: function(f) {
		this.set_volume(f);
	}
	,getActualVolume: function() {
		return this._volume * this._volumeAdjust;
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
	}
	,updateTransform: function() {
		this._transform.volume = (flixel_FlxG.sound.muted?0:1) * flixel_FlxG.sound.volume * this._volume * this._volumeAdjust;
		if(this._channel != null) this._channel.set_soundTransform(this._transform);
	}
	,startSound: function(Position) {
		var numLoops;
		if(this._looped && Position == 0) numLoops = 9999; else numLoops = 0;
		this.time = Position;
		this._paused = false;
		this._channel = this._sound.play(this.time,numLoops,this._transform);
		if(this._channel != null) {
			this._channel.addEventListener("soundComplete",$bind(this,this.stopped));
			this.set_active(true);
		} else {
			this.set_exists(false);
			this.set_active(false);
		}
	}
	,stopped: function(event) {
		if(this.onComplete != null) this.onComplete();
		if(this._looped) {
			this.cleanup(false);
			this.play();
		} else this.cleanup(this.autoDestroy);
	}
	,cleanup: function(destroySound,resetPosition,resetFading) {
		if(resetFading == null) resetFading = true;
		if(resetPosition == null) resetPosition = true;
		if(destroySound) {
			this.reset();
			return;
		}
		if(this._channel != null) {
			this._channel.removeEventListener("soundComplete",$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		this.set_active(false);
		if(resetPosition) {
			this.time = 0;
			this._paused = false;
		}
	}
	,gotID3: function(event) {
		this.name = this._sound.id3.songName;
		this.artist = this._sound.id3.artist;
		this._sound.removeEventListener("id3",$bind(this,this.gotID3));
	}
	,onFocus: function() {
		if(!this._alreadyPaused) this.resume();
	}
	,onFocusLost: function() {
		this._alreadyPaused = this._paused;
		this.pause();
	}
	,get_playing: function() {
		return this._channel != null;
	}
	,get_volume: function() {
		return this._volume;
	}
	,set_volume: function(Volume) {
		this._volume = Volume;
		if(this._volume < 0) this._volume = 0; else if(this._volume > 1) this._volume = 1;
		this.updateTransform();
		return Volume;
	}
	,get_pan: function() {
		return this._transform.pan;
	}
	,set_pan: function(pan) {
		return this._transform.pan = pan;
	}
	,__class__: flixel_system_FlxSound
	,__properties__: $extend(flixel_FlxBasic.prototype.__properties__,{set_volume:"set_volume",get_volume:"get_volume",get_playing:"get_playing",set_pan:"set_pan",get_pan:"get_pan"})
});
var flixel_system_FlxSplash = function(MaxSize) {
	this._curPart = 0;
	flixel_FlxState.call(this,MaxSize);
};
$hxClasses["flixel.system.FlxSplash"] = flixel_system_FlxSplash;
flixel_system_FlxSplash.__name__ = ["flixel","system","FlxSplash"];
flixel_system_FlxSplash.__super__ = flixel_FlxState;
flixel_system_FlxSplash.prototype = $extend(flixel_FlxState.prototype,{
	_sprite: null
	,_gfx: null
	,_text: null
	,_times: null
	,_colors: null
	,_functions: null
	,_curPart: null
	,_cachedBgColor: null
	,_cachedTimestep: null
	,_cachedAutoPause: null
	,create: function() {
		this._cachedBgColor = flixel_FlxG.cameras.get_bgColor();
		flixel_FlxG.cameras.set_bgColor(-16777216);
		this._cachedTimestep = flixel_FlxG.fixedTimestep;
		flixel_FlxG.fixedTimestep = false;
		this._cachedAutoPause = flixel_FlxG.autoPause;
		flixel_FlxG.autoPause = false;
		flixel_FlxG.keys.enabled = false;
		this._times = [0.041,0.184,0.334,0.495,0.636];
		this._colors = [47394,16761138,16066382,3555839,314875];
		this._functions = [$bind(this,this.drawGreen),$bind(this,this.drawYellow),$bind(this,this.drawRed),$bind(this,this.drawBlue),$bind(this,this.drawLightBlue)];
		var _g = 0;
		var _g1 = this._times;
		while(_g < _g1.length) {
			var time = _g1[_g];
			++_g;
			new flixel_util_FlxTimer(time,$bind(this,this.timerCallback));
		}
		var stageWidth = flash_Lib.get_current().get_stage().get_stageWidth();
		var stageHeight = flash_Lib.get_current().get_stage().get_stageHeight();
		this._sprite = new flash_display_Sprite();
		flash_Lib.get_current().get_stage().addChild(this._sprite);
		this._gfx = this._sprite.get_graphics();
		this._text = new flash_text_TextField();
		this._text.set_selectable(false);
		this._text.embedFonts = true;
		var dtf = new flash_text_TextFormat(flixel_system_FlxAssets.FONT_DEFAULT,16,16777215);
		dtf.align = "CENTER";
		this._text.set_defaultTextFormat(dtf);
		this._text.set_text("HaxeFlixel");
		flash_Lib.get_current().get_stage().addChild(this._text);
		this.onResize(stageWidth,stageHeight);
		flixel_FlxG.sound.load(flixel_system_FlxAssets.getSound("assets/sounds/flixel")).play();
	}
	,destroy: function() {
		this._sprite = null;
		this._gfx = null;
		this._text = null;
		this._times = null;
		this._colors = null;
		this._functions = null;
		flixel_FlxState.prototype.destroy.call(this);
	}
	,onResize: function(Width,Height) {
		flixel_FlxState.prototype.onResize.call(this,Width,Height);
		this._sprite.set_x(Width / 2);
		this._sprite.set_y(Height / 2 - 20 * flixel_FlxG.game.scaleY);
		this._text.set_width(Width / flixel_FlxG.game.scaleX);
		this._text.set_x(0);
		this._text.set_y(this._sprite.y + 80 * flixel_FlxG.game.scaleY);
		this._sprite.set_scaleX(this._text.set_scaleX(flixel_FlxG.game.scaleX));
		this._sprite.set_scaleY(this._text.set_scaleY(flixel_FlxG.game.scaleY));
	}
	,timerCallback: function(Timer) {
		this._functions[this._curPart]();
		this._text.set_textColor(this._colors[this._curPart]);
		this._text.set_text("HaxeFlixel");
		this._curPart++;
		if(this._curPart == 5) {
			flixel_tweens_FlxTween.tween(this._sprite,{ alpha : 0},3.0,{ ease : flixel_tweens_FlxEase.quadOut, complete : $bind(this,this.onComplete)});
			flixel_tweens_FlxTween.tween(this._text,{ alpha : 0},3.0,{ ease : flixel_tweens_FlxEase.quadOut});
		}
	}
	,drawGreen: function() {
		this._gfx.beginFill(47394);
		this._gfx.moveTo(0,-37);
		this._gfx.lineTo(1,-37);
		this._gfx.lineTo(37,0);
		this._gfx.lineTo(37,1);
		this._gfx.lineTo(1,37);
		this._gfx.lineTo(0,37);
		this._gfx.lineTo(-37,1);
		this._gfx.lineTo(-37,0);
		this._gfx.lineTo(0,-37);
		this._gfx.endFill();
	}
	,drawYellow: function() {
		this._gfx.beginFill(16761138);
		this._gfx.moveTo(-50,-50);
		this._gfx.lineTo(-25,-50);
		this._gfx.lineTo(0,-37);
		this._gfx.lineTo(-37,0);
		this._gfx.lineTo(-50,-25);
		this._gfx.lineTo(-50,-50);
		this._gfx.endFill();
	}
	,drawRed: function() {
		this._gfx.beginFill(16066382);
		this._gfx.moveTo(50,-50);
		this._gfx.lineTo(25,-50);
		this._gfx.lineTo(1,-37);
		this._gfx.lineTo(37,0);
		this._gfx.lineTo(50,-25);
		this._gfx.lineTo(50,-50);
		this._gfx.endFill();
	}
	,drawBlue: function() {
		this._gfx.beginFill(3555839);
		this._gfx.moveTo(-50,50);
		this._gfx.lineTo(-25,50);
		this._gfx.lineTo(0,37);
		this._gfx.lineTo(-37,1);
		this._gfx.lineTo(-50,25);
		this._gfx.lineTo(-50,50);
		this._gfx.endFill();
	}
	,drawLightBlue: function() {
		this._gfx.beginFill(314875);
		this._gfx.moveTo(50,50);
		this._gfx.lineTo(25,50);
		this._gfx.lineTo(1,37);
		this._gfx.lineTo(37,1);
		this._gfx.lineTo(50,25);
		this._gfx.lineTo(50,50);
		this._gfx.endFill();
	}
	,onComplete: function(Tween) {
		flixel_FlxG.cameras.set_bgColor(this._cachedBgColor);
		flixel_FlxG.fixedTimestep = this._cachedTimestep;
		flixel_FlxG.autoPause = this._cachedAutoPause;
		flixel_FlxG.keys.enabled = true;
		flash_Lib.get_current().get_stage().removeChild(this._sprite);
		flash_Lib.get_current().get_stage().removeChild(this._text);
		flixel_FlxG.switchState(Type.createInstance(flixel_system_FlxSplash.nextState,[]));
		flixel_FlxG.game._gameJustStarted = true;
	}
	,__class__: flixel_system_FlxSplash
});
var flixel_system_debug_ConsoleUtil = function() { };
$hxClasses["flixel.system.debug.ConsoleUtil"] = flixel_system_debug_ConsoleUtil;
flixel_system_debug_ConsoleUtil.__name__ = ["flixel","system","debug","ConsoleUtil"];
flixel_system_debug_ConsoleUtil.callFunction = function(Function,Args) {
	try {
		Reflect.callMethod(null,Function,Args);
		return true;
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		if( js_Boot.__instanceof(e,flash_errors_ArgumentError) ) {
			if(e.errorID == 1063) {
				var expected = Std.parseInt(flixel_util_FlxStringUtil.filterDigits(e.message).charAt(4));
				if(expected < Args.length) {
					var shortenedArgs = Args.slice(0,expected);
					Reflect.callMethod(null,Function,shortenedArgs);
				} else return false;
				return true;
			}
			return false;
		} else throw(e);
	}
};
flixel_system_debug_ConsoleUtil.findCommand = function(Alias,Commands) {
	var _g1 = 0;
	var _g = Commands.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(HxOverrides.indexOf(Commands[i].aliases,Alias,0) != -1) return Commands[i];
	}
	return null;
};
flixel_system_debug_ConsoleUtil.resolveObjectAndVariable = function(ObjectAndVariable,Object) {
	var searchArr = ObjectAndVariable.split(".");
	if(searchArr.length == 1) return { object : Object, variableName : ObjectAndVariable};
	var variableName = searchArr.join(".");
	if(!Reflect.isObject(Object)) {
		flixel_FlxG.log.error("'" + (function($this) {
			var $r;
			var cl;
			if(js_Boot.__instanceof(Object,Class)) cl = Object; else cl = Type.getClass(Object);
			var s = Type.getClassName(cl);
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				var pos = s.lastIndexOf(".") + 1;
				s = HxOverrides.substr(s,pos,null);
			}
			$r = s;
			return $r;
		}(this)) + "' is not a valid Object");
		return null;
	}
	var l = searchArr.length;
	var tempObj = Object;
	var tempVarName = "";
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		tempVarName = searchArr[i];
		try {
			if(i < l - 1) tempObj = Reflect.getProperty(tempObj,tempVarName);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			flixel_FlxG.log.error("'" + (function($this) {
				var $r;
				var cl1;
				if(js_Boot.__instanceof(tempObj,Class)) cl1 = tempObj; else cl1 = Type.getClass(tempObj);
				var s1 = Type.getClassName(cl1);
				if(s1 != null) {
					s1 = StringTools.replace(s1,"::",".");
					var pos1 = s1.lastIndexOf(".") + 1;
					s1 = HxOverrides.substr(s1,pos1,null);
				}
				$r = s1;
				return $r;
			}(this)) + "' does not have a field '" + tempVarName + "'");
			return null;
		}
	}
	return { object : tempObj, variableName : tempVarName};
};
flixel_system_debug_ConsoleUtil.resolveObjectAndVariableFromMap = function(ObjectAndVariable,ObjectMap) {
	var splitString = ObjectAndVariable.split(".");
	var object = ObjectMap.get(splitString[0]);
	splitString.shift();
	ObjectAndVariable = splitString.join(".");
	return flixel_system_debug_ConsoleUtil.resolveObjectAndVariable(ObjectAndVariable,object);
};
flixel_system_debug_ConsoleUtil.getInstanceFieldsAdvanced = function(cl,numSuperClassesToInclude) {
	if(numSuperClassesToInclude == null) numSuperClassesToInclude = 0;
	var fields = Type.getInstanceFields(cl);
	if(numSuperClassesToInclude >= 0) {
		var curClass = Type.getSuperClass(cl);
		var superClasses = [];
		while(curClass != null) {
			superClasses.push(curClass);
			curClass = Type.getSuperClass(curClass);
		}
		superClasses.reverse();
		if(numSuperClassesToInclude > superClasses.length) numSuperClassesToInclude = superClasses.length;
		var _g1 = 0;
		var _g = superClasses.length - numSuperClassesToInclude;
		while(_g1 < _g) {
			var i = _g1++;
			var superFields = Type.getInstanceFields(superClasses[i]);
			var _g2 = 0;
			while(_g2 < superFields.length) {
				var superField = superFields[_g2];
				++_g2;
				if(HxOverrides.indexOf(fields,superField,0) != -1) HxOverrides.remove(fields,superField);
			}
		}
	}
	return fields;
};
flixel_system_debug_ConsoleUtil.parseBool = function(s) {
	if(s == "true") return true; else if(s == "false") return false; else return null;
};
flixel_system_debug_ConsoleUtil.log = function(Text) {
	flixel_FlxG.log.advanced([Text],flixel_system_debug_LogStyle.CONSOLE);
};
var flixel_system_debug_ButtonAlignment = $hxClasses["flixel.system.debug.ButtonAlignment"] = { __ename__ : ["flixel","system","debug","ButtonAlignment"], __constructs__ : ["LEFT","MIDDLE","RIGHT"] };
flixel_system_debug_ButtonAlignment.LEFT = ["LEFT",0];
flixel_system_debug_ButtonAlignment.LEFT.toString = $estr;
flixel_system_debug_ButtonAlignment.LEFT.__enum__ = flixel_system_debug_ButtonAlignment;
flixel_system_debug_ButtonAlignment.MIDDLE = ["MIDDLE",1];
flixel_system_debug_ButtonAlignment.MIDDLE.toString = $estr;
flixel_system_debug_ButtonAlignment.MIDDLE.__enum__ = flixel_system_debug_ButtonAlignment;
flixel_system_debug_ButtonAlignment.RIGHT = ["RIGHT",2];
flixel_system_debug_ButtonAlignment.RIGHT.toString = $estr;
flixel_system_debug_ButtonAlignment.RIGHT.__enum__ = flixel_system_debug_ButtonAlignment;
var flixel_system_debug_DebuggerLayout = $hxClasses["flixel.system.debug.DebuggerLayout"] = { __ename__ : ["flixel","system","debug","DebuggerLayout"], __constructs__ : ["STANDARD","MICRO","BIG","TOP","LEFT","RIGHT"] };
flixel_system_debug_DebuggerLayout.STANDARD = ["STANDARD",0];
flixel_system_debug_DebuggerLayout.STANDARD.toString = $estr;
flixel_system_debug_DebuggerLayout.STANDARD.__enum__ = flixel_system_debug_DebuggerLayout;
flixel_system_debug_DebuggerLayout.MICRO = ["MICRO",1];
flixel_system_debug_DebuggerLayout.MICRO.toString = $estr;
flixel_system_debug_DebuggerLayout.MICRO.__enum__ = flixel_system_debug_DebuggerLayout;
flixel_system_debug_DebuggerLayout.BIG = ["BIG",2];
flixel_system_debug_DebuggerLayout.BIG.toString = $estr;
flixel_system_debug_DebuggerLayout.BIG.__enum__ = flixel_system_debug_DebuggerLayout;
flixel_system_debug_DebuggerLayout.TOP = ["TOP",3];
flixel_system_debug_DebuggerLayout.TOP.toString = $estr;
flixel_system_debug_DebuggerLayout.TOP.__enum__ = flixel_system_debug_DebuggerLayout;
flixel_system_debug_DebuggerLayout.LEFT = ["LEFT",4];
flixel_system_debug_DebuggerLayout.LEFT.toString = $estr;
flixel_system_debug_DebuggerLayout.LEFT.__enum__ = flixel_system_debug_DebuggerLayout;
flixel_system_debug_DebuggerLayout.RIGHT = ["RIGHT",5];
flixel_system_debug_DebuggerLayout.RIGHT.toString = $estr;
flixel_system_debug_DebuggerLayout.RIGHT.__enum__ = flixel_system_debug_DebuggerLayout;
var flixel_system_debug_LogStyle = function(Prefix,Color,Size,Bold,Italic,Underlined,ErrorSound,OpenConsole,CallbackFunction) {
	if(OpenConsole == null) OpenConsole = false;
	if(Underlined == null) Underlined = false;
	if(Italic == null) Italic = false;
	if(Bold == null) Bold = false;
	if(Size == null) Size = 12;
	if(Color == null) Color = "FFFFFF";
	if(Prefix == null) Prefix = "";
	this.prefix = Prefix;
	this.color = Color;
	this.size = Size;
	this.bold = Bold;
	this.italic = Italic;
	this.underlined = Underlined;
	this.errorSound = ErrorSound;
	this.openConsole = OpenConsole;
	this.callbackFunction = CallbackFunction;
};
$hxClasses["flixel.system.debug.LogStyle"] = flixel_system_debug_LogStyle;
flixel_system_debug_LogStyle.__name__ = ["flixel","system","debug","LogStyle"];
flixel_system_debug_LogStyle.prototype = {
	prefix: null
	,color: null
	,size: null
	,bold: null
	,italic: null
	,underlined: null
	,errorSound: null
	,openConsole: null
	,callbackFunction: null
	,__class__: flixel_system_debug_LogStyle
};
var flixel_system_debug_Window = function(Title,Icon,Width,Height,Resizable,Bounds,Closable) {
	if(Closable == null) Closable = false;
	if(Resizable == null) Resizable = true;
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	flash_display_Sprite.call(this);
	this.minSize = new flash_geom_Point(50,30);
	this._width = Std["int"](Math.abs(Width));
	this._height = Std["int"](Math.abs(Height));
	this.updateBounds(Bounds);
	this._drag = new flash_geom_Point();
	this._resizable = Resizable;
	this._shadow = new flash_display_Bitmap(new flash_display_BitmapData(1,2,true,-16777216));
	this._background = new flash_display_Bitmap(new flash_display_BitmapData(1,1,true,-580952225));
	this._header = new flash_display_Bitmap(new flash_display_BitmapData(1,15,true,-1157627904));
	this._background.set_y(this._header.get_height());
	this._title = new flash_text_TextField();
	this._title.set_x(2);
	this._title.set_y(-1);
	this._title.set_alpha(0.8);
	this._title.set_height(20);
	this._title.set_selectable(false);
	this._title.set_multiline(false);
	this._title.embedFonts = true;
	this._title.set_defaultTextFormat(new flash_text_TextFormat(flixel_system_FlxAssets.FONT_DEBUGGER,12,16777215));
	this._title.set_text(Title);
	this.addChild(this._shadow);
	this.addChild(this._background);
	this.addChild(this._header);
	this.addChild(this._title);
	if(Icon != null) {
		var _icon = new flash_display_Bitmap(Icon);
		_icon.set_x(5);
		_icon.set_y(2);
		_icon.set_alpha(0.8);
		this._title.set_x(_icon.x + _icon.get_width() + 2);
		this.addChild(_icon);
	}
	if(this._resizable) {
		this._handle = new flash_display_Bitmap(new flixel_system_debug__$Window_GraphicWindowHandle(0,0));
		this.addChild(this._handle);
	}
	if(Closable) {
		this._closeButton = new flixel_system_ui_FlxSystemButton(new flixel_system_debug__$Window_GraphicCloseButton(0,0),$bind(this,this.close));
		this._closeButton.set_alpha(0.8);
		this.addChild(this._closeButton);
	} else {
		this._id = flixel_system_debug_Window.WINDOW_AMOUNT;
		this.loadSaveData();
		flixel_system_debug_Window.WINDOW_AMOUNT++;
	}
	if(this._width != 0 || this._height != 0) this.updateSize();
	this.bound();
	this.addEventListener("enterFrame",$bind(this,this.init));
};
$hxClasses["flixel.system.debug.Window"] = flixel_system_debug_Window;
flixel_system_debug_Window.__name__ = ["flixel","system","debug","Window"];
flixel_system_debug_Window.__super__ = flash_display_Sprite;
flixel_system_debug_Window.prototype = $extend(flash_display_Sprite.prototype,{
	minSize: null
	,maxSize: null
	,toggleButton: null
	,_width: null
	,_height: null
	,_bounds: null
	,_background: null
	,_header: null
	,_shadow: null
	,_title: null
	,_handle: null
	,_closeButton: null
	,_overHeader: null
	,_overHandle: null
	,_drag: null
	,_dragging: null
	,_resizing: null
	,_resizable: null
	,_id: null
	,destroy: function() {
		this.minSize = null;
		this.maxSize = null;
		this._bounds = null;
		if(this._shadow != null) this.removeChild(this._shadow);
		this._shadow = null;
		if(this._background != null) this.removeChild(this._background);
		this._background = null;
		if(this._header != null) this.removeChild(this._header);
		this._header = null;
		if(this._title != null) this.removeChild(this._title);
		this._title = null;
		if(this._handle != null) this.removeChild(this._handle);
		this._handle = null;
		this._drag = null;
		this._closeButton = flixel_util_FlxDestroyUtil.destroy(this._closeButton);
		var stage = flash_Lib.get_current().get_stage();
		if(stage.hasEventListener("mouseMove")) stage.removeEventListener("mouseMove",$bind(this,this.onMouseMove));
		if(this.hasEventListener("mouseDown")) this.removeEventListener("mouseDown",$bind(this,this.onMouseDown));
		if(stage.hasEventListener("mouseUp")) stage.removeEventListener("mouseUp",$bind(this,this.onMouseUp));
	}
	,resize: function(Width,Height) {
		this._width = Std["int"](Math.abs(Width));
		this._height = Std["int"](Math.abs(Height));
		this.updateSize();
	}
	,reposition: function(X,Y) {
		this.set_x(X);
		this.set_y(Y);
		this.bound();
	}
	,updateBounds: function(Bounds) {
		this._bounds = Bounds;
		if(this._bounds != null) this.maxSize = new flash_geom_Point(this._bounds.width,this._bounds.height); else this.maxSize = new flash_geom_Point(1.79e+308,1.79e+308);
	}
	,setVisible: function(Value) {
		this.set_visible(Value);
		flixel_FlxG.save.data.windowSettings[this._id] = this.visible;
		flixel_FlxG.save.flush();
		if(this.toggleButton != null) this.toggleButton.set_toggled(!this.visible);
		if(this.visible) this.parent.addChild(this);
	}
	,toggleVisible: function() {
		this.setVisible(!this.visible);
	}
	,putOnTop: function() {
		this.parent.addChild(this);
	}
	,loadSaveData: function() {
		if(flixel_FlxG.save.data.windowSettings != null) this.set_visible(flixel_FlxG.save.data.windowSettings[this._id]); else {
			this.initSaveData();
			this.loadSaveData();
		}
	}
	,initSaveData: function() {
		var settings = [];
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			settings[i] = true;
		}
		flixel_FlxG.save.data.windowSettings = settings;
		flixel_FlxG.save.flush();
	}
	,update: function() {
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener("enterFrame",$bind(this,this.init));
		this.get_stage().addEventListener("mouseMove",$bind(this,this.onMouseMove));
		this.get_stage().addEventListener("mouseUp",$bind(this,this.onMouseUp));
		this.addEventListener("mouseDown",$bind(this,this.onMouseDown));
	}
	,onMouseMove: function(E) {
		var mouseX;
		if(this.get_mouseX() < 0) mouseX = 0; else mouseX = this.get_mouseX();
		var mouseY;
		if(this.get_mouseY() < 0) mouseY = 0; else mouseY = this.get_mouseY();
		if(!this.parent.visible) {
			this._overHandle = this._overHeader = false;
			return;
		}
		if(this._dragging) {
			this._overHeader = true;
			this.reposition(this.parent.get_mouseX() - this._drag.x,this.parent.get_mouseY() - this._drag.y);
		} else if(this._resizing) {
			this._overHandle = true;
			this.resize(mouseX - this._drag.x,mouseY - this._drag.y);
		} else if(mouseX >= 0 && mouseX <= this._width && mouseY >= 0 && mouseY <= this._height) {
			this._overHeader = mouseX <= this._header.get_width() && mouseY <= this._header.get_height();
			if(this._resizable) this._overHandle = mouseX >= this._width - this._handle.get_width() && mouseY >= this._height - this._handle.get_height();
		} else this._overHandle = this._overHeader = false;
	}
	,onMouseDown: function(E) {
		if(this._overHeader) {
			this.parent.addChild(this);
			this._dragging = true;
			this._drag.x = this.get_mouseX();
			this._drag.y = this.get_mouseY();
		} else if(this._overHandle) {
			this.parent.addChild(this);
			this._resizing = true;
			this._drag.x = this._width - this.get_mouseX();
			this._drag.y = this._height - this.get_mouseY();
		}
	}
	,onMouseUp: function(E) {
		this._dragging = false;
		this._resizing = false;
	}
	,bound: function() {
		if(this._bounds != null) {
			this.set_x(flixel_util_FlxMath.bound(this.x,this._bounds.x,this._bounds.get_right() - this._width));
			this.set_y(flixel_util_FlxMath.bound(this.y,this._bounds.y,this._bounds.get_bottom() - this._height));
		}
	}
	,updateSize: function() {
		this._width = Std["int"](flixel_util_FlxMath.bound(this._width,this.minSize.x,this.maxSize.x));
		this._height = Std["int"](flixel_util_FlxMath.bound(this._height,this.minSize.y,this.maxSize.y));
		this._header.set_scaleX(this._width);
		this._background.set_scaleX(this._width);
		this._background.set_scaleY(this._height - this._header.get_height());
		this._shadow.set_scaleX(this._width);
		this._shadow.set_y(this._height);
		this._title.set_width(this._width - 4);
		if(this._resizable) {
			this._handle.set_x(this._width - this._handle.get_width());
			this._handle.set_y(this._height - this._handle.get_height());
		}
		if(this._closeButton != null) {
			this._closeButton.set_x(this._width - this._closeButton.get_width() - 3);
			this._closeButton.set_y(3);
		}
	}
	,close: function() {
		this.destroy();
	}
	,__class__: flixel_system_debug_Window
});
var flixel_system_debug_Watch = function(Title,Icon,Width,Height,Resizable,Bounds,Closable) {
	flixel_system_debug_Window.call(this,Title,Icon,Width,Height,Resizable,Bounds,Closable);
};
$hxClasses["flixel.system.debug.Watch"] = flixel_system_debug_Watch;
flixel_system_debug_Watch.__name__ = ["flixel","system","debug","Watch"];
flixel_system_debug_Watch.__super__ = flixel_system_debug_Window;
flixel_system_debug_Watch.prototype = $extend(flixel_system_debug_Window.prototype,{
	__class__: flixel_system_debug_Watch
});
var flixel_system_debug_Tracker = function(Title,Icon,Width,Height,Resizable,Bounds,Closable) {
	flixel_system_debug_Watch.call(this,Title,Icon,Width,Height,Resizable,Bounds,Closable);
};
$hxClasses["flixel.system.debug.Tracker"] = flixel_system_debug_Tracker;
flixel_system_debug_Tracker.__name__ = ["flixel","system","debug","Tracker"];
flixel_system_debug_Tracker.__super__ = flixel_system_debug_Watch;
flixel_system_debug_Tracker.prototype = $extend(flixel_system_debug_Watch.prototype,{
	__class__: flixel_system_debug_Tracker
});
var flixel_system_debug_TrackerProfile = function(ObjectClass,Variables,Extensions) {
	this.objectClass = ObjectClass;
	this.variables = Variables;
	this.extensions = Extensions;
};
$hxClasses["flixel.system.debug.TrackerProfile"] = flixel_system_debug_TrackerProfile;
flixel_system_debug_TrackerProfile.__name__ = ["flixel","system","debug","TrackerProfile"];
flixel_system_debug_TrackerProfile.prototype = {
	objectClass: null
	,variables: null
	,extensions: null
	,toString: function() {
		return flixel_util_FlxStringUtil.getDebugString([flixel_util_LabelValuePair._pool.get().create("variables",this.variables),flixel_util_LabelValuePair._pool.get().create("extensions",this.extensions)]);
	}
	,__class__: flixel_system_debug_TrackerProfile
};
var flixel_system_debug__$Window_GraphicWindowHandle = function(width,height,transparent,color) {
	var o = flixel_system_debug__$Window_GraphicWindowHandle.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.system.debug._Window.GraphicWindowHandle"] = flixel_system_debug__$Window_GraphicWindowHandle;
flixel_system_debug__$Window_GraphicWindowHandle.__name__ = ["flixel","system","debug","_Window","GraphicWindowHandle"];
flixel_system_debug__$Window_GraphicWindowHandle.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_system_debug__$Window_GraphicWindowHandle.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFBJREFUeNqMjwEKACAIAxX2yh7oNy2jQkypQbT0dESqSnYeEvhXNsDMYnXezVG4wA0NNVRZHjKPH2h6/5l1W0Oix3NTEl1CJ7qKC/4Lki7AAD5YfrvYLfRPAAAAAElFTkSuQmCC";
};
flixel_system_debug__$Window_GraphicWindowHandle.__super__ = flash_display_BitmapData;
flixel_system_debug__$Window_GraphicWindowHandle.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_system_debug__$Window_GraphicWindowHandle
});
var flixel_system_debug__$Window_GraphicCloseButton = function(width,height,transparent,color) {
	var o = flixel_system_debug__$Window_GraphicCloseButton.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.system.debug._Window.GraphicCloseButton"] = flixel_system_debug__$Window_GraphicCloseButton;
flixel_system_debug__$Window_GraphicCloseButton.__name__ = ["flixel","system","debug","_Window","GraphicCloseButton"];
flixel_system_debug__$Window_GraphicCloseButton.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_system_debug__$Window_GraphicCloseButton.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB/SURBVBiVTY0xCsJQEAXHbySewMulTWdva6OllWJpCCK2ik1OY+ctQsYiq/kDC8vs7lvUSu3UpUpWO7VC3TjSqWUMD+Gev+1tiJd6yvoyj9w78VAXKomRGbBiogcGANSkNnF5V4/R39SE2oa4qvN4dw53KYA30AD1PxbWQAF8vpaYrNWAaNV0AAAAAElFTkSuQmCC";
};
flixel_system_debug__$Window_GraphicCloseButton.__super__ = flash_display_BitmapData;
flixel_system_debug__$Window_GraphicCloseButton.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_system_debug__$Window_GraphicCloseButton
});
var flixel_system_layer_DrawStackItem = function() {
	this.antialiasing = false;
	this.initialized = false;
	this.blending = 0;
	this.colored = false;
	this.position = 0;
	this.drawData = [];
};
$hxClasses["flixel.system.layer.DrawStackItem"] = flixel_system_layer_DrawStackItem;
flixel_system_layer_DrawStackItem.__name__ = ["flixel","system","layer","DrawStackItem"];
flixel_system_layer_DrawStackItem.prototype = {
	graphics: null
	,drawData: null
	,position: null
	,next: null
	,colored: null
	,blending: null
	,initialized: null
	,antialiasing: null
	,reset: function() {
		this.graphics = null;
		this.initialized = false;
		this.antialiasing = false;
		this.position = 0;
	}
	,dispose: function() {
		this.graphics = null;
		this.drawData = null;
		this.next = null;
	}
	,__class__: flixel_system_layer_DrawStackItem
};
var flixel_system_layer_Region = function(startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(spacingY == null) spacingY = 0;
	if(spacingX == null) spacingX = 0;
	if(tileHeight == null) tileHeight = 0;
	if(tileWidth == null) tileWidth = 0;
	if(startY == null) startY = 0;
	if(startX == null) startX = 0;
	this.startX = startX;
	this.startY = startY;
	this.tileWidth = tileWidth;
	this.tileHeight = tileHeight;
	this.spacingX = spacingX;
	this.spacingY = spacingY;
	this.width = width;
	this.height = height;
};
$hxClasses["flixel.system.layer.Region"] = flixel_system_layer_Region;
flixel_system_layer_Region.__name__ = ["flixel","system","layer","Region"];
flixel_system_layer_Region.prototype = {
	startX: null
	,startY: null
	,width: null
	,height: null
	,tileWidth: null
	,tileHeight: null
	,spacingX: null
	,spacingY: null
	,numTiles: null
	,get_numTiles: function() {
		return this.get_numRows() * this.get_numCols();
	}
	,numRows: null
	,get_numRows: function() {
		var num = 1;
		if(this.tileHeight != 0) num = (this.height + this.spacingY) / (this.tileHeight + this.spacingY) | 0;
		return num;
	}
	,numCols: null
	,get_numCols: function() {
		var num = 1;
		if(this.tileWidth != 0) num = (this.width + this.spacingX) / (this.tileWidth + this.spacingX) | 0;
		return num;
	}
	,clone: function() {
		return new flixel_system_layer_Region(this.startX,this.startY,this.tileWidth,this.tileHeight,this.spacingX,this.spacingY,this.width,this.height);
	}
	,__class__: flixel_system_layer_Region
	,__properties__: {get_numCols:"get_numCols",get_numRows:"get_numRows",get_numTiles:"get_numTiles"}
};
var flixel_system_layer_TileSheetData = function(Bitmap) {
	this.bitmap = Bitmap;
	this.flxSpriteFrames = new haxe_ds_StringMap();
	this.flxFrames = new haxe_ds_StringMap();
	this.frameNames = [];
	this.framesArr = [];
};
$hxClasses["flixel.system.layer.TileSheetData"] = flixel_system_layer_TileSheetData;
flixel_system_layer_TileSheetData.__name__ = ["flixel","system","layer","TileSheetData"];
flixel_system_layer_TileSheetData.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_system_layer_TileSheetData.prototype = {
	flxSpriteFrames: null
	,flxFrames: null
	,frameNames: null
	,framesArr: null
	,bitmap: null
	,getFrame: function(name) {
		return this.flxFrames.get(name);
	}
	,getSpriteSheetFrames: function(region,origin) {
		var bitmapWidth = region.width;
		var bitmapHeight = region.height;
		var startX = region.startX;
		var startY = region.startY;
		var endX = startX + bitmapWidth;
		var endY = startY + bitmapHeight;
		var xSpacing = region.spacingX;
		var ySpacing = region.spacingY;
		var width;
		if(region.tileWidth == 0) width = bitmapWidth; else width = region.tileWidth;
		var height;
		if(region.tileHeight == 0) height = bitmapHeight; else height = region.tileHeight;
		var pointX = 0.5 * width;
		var pointY = 0.5 * height;
		if(origin != null) {
			pointX = origin.x;
			pointY = origin.y;
		}
		var key = width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
		if(this.flxSpriteFrames.exists(key)) return this.flxSpriteFrames.get(key);
		var numRows = region.get_numRows();
		var numCols = region.get_numCols();
		var tempPoint = origin;
		if(origin == null) tempPoint = new flash_geom_Point(pointX,pointY);
		var spriteData = new flixel_system_layer_frames_FlxSpriteFrames(key);
		var frame;
		var tempRect;
		var spacedWidth = width + xSpacing;
		var spacedHeight = height + ySpacing;
		var _g1 = 0;
		var _g = numRows;
		while(_g1 < _g) {
			var j = _g1++;
			var _g3 = 0;
			var _g2 = numCols;
			while(_g3 < _g2) {
				var i = _g3++;
				tempRect = new flash_geom_Rectangle(startX + i * spacedWidth,startY + j * spacedHeight,width,height);
				frame = this.addSpriteSheetFrame(tempRect,tempPoint);
				spriteData.addFrame(frame);
			}
		}
		this.flxSpriteFrames.set(key,spriteData);
		return spriteData;
	}
	,getSpriteSheetFrameKey: function(rect,point) {
		return rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_" + point.x + "_" + point.y;
	}
	,getKeyForSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		return width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
	}
	,containsSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		var key = width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
		return this.flxSpriteFrames.exists(key);
	}
	,addSpriteSheetFrame: function(rect,point) {
		var key = rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_" + point.x + "_" + point.y;
		if(this.flxFrames.exists(key)) return this.flxFrames.get(key);
		var frame = new flixel_system_layer_frames_FlxFrame(this);
		frame.name = key;
		frame.frame = rect;
		frame.trimmed = false;
		frame.sourceSize.set(rect.width,rect.height);
		frame.offset.set(0,0);
		frame.center.set(0.5 * rect.width,0.5 * rect.height);
		this.flxFrames.set(key,frame);
		this.frameNames.push(key);
		this.framesArr.push(frame);
		return frame;
	}
	,containsFrame: function(key) {
		return this.flxFrames.exists(key);
	}
	,destroy: function() {
		this.bitmap = null;
		var $it0 = this.flxSpriteFrames.iterator();
		while( $it0.hasNext() ) {
			var frames = $it0.next();
			frames.destroy();
		}
		this.flxSpriteFrames = null;
		var _g = 0;
		var _g1 = this.framesArr;
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			frame.destroy();
		}
		this.flxFrames = null;
		this.frameNames = null;
		this.framesArr = null;
	}
	,getTexturePackerFrames: function(data,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		if(this.flxSpriteFrames.exists(data.assetName)) return this.flxSpriteFrames.get(data.assetName);
		data.parseData();
		var frame;
		var packerFrames = new flixel_system_layer_frames_FlxSpriteFrames(data.assetName);
		var l = data.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			frame = this.addTexturePackerFrame(data.frames[i],startX,startY);
			packerFrames.addFrame(frame);
		}
		this.flxSpriteFrames.set(data.assetName,packerFrames);
		return packerFrames;
	}
	,addTexturePackerFrame: function(frameData,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		var key = frameData.name;
		if(this.flxFrames.exists(key)) return this.flxFrames.get(key);
		var texFrame = null;
		if(frameData.rotated) texFrame = new flixel_system_layer_frames_FlxRotatedFrame(this); else texFrame = new flixel_system_layer_frames_FlxFrame(this);
		texFrame.trimmed = frameData.trimmed;
		texFrame.name = key;
		texFrame.sourceSize.copyFrom(frameData.sourceSize);
		texFrame.offset.copyFrom(frameData.offset);
		texFrame.center.set(0,0);
		texFrame.frame = frameData.frame.clone();
		if(frameData.rotated) texFrame.center.set(texFrame.frame.height * 0.5 + texFrame.offset.x,texFrame.frame.width * 0.5 + texFrame.offset.y); else texFrame.center.set(texFrame.frame.width * 0.5 + texFrame.offset.x,texFrame.frame.height * 0.5 + texFrame.offset.y);
		texFrame.additionalAngle = frameData.additionalAngle;
		this.flxFrames.set(key,texFrame);
		this.frameNames.push(key);
		this.framesArr.push(texFrame);
		return texFrame;
	}
	,destroyFrameBitmapDatas: function() {
		var numFrames = this.frameNames.length;
		var _g = 0;
		var _g1 = this.framesArr;
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			frame.destroyBitmapDatas();
		}
	}
	,__class__: flixel_system_layer_TileSheetData
};
var openfl_display_Tilesheet = function(image) {
	this.nmeBitmap = image;
	this.qOffsets = [];
	this.qRects = [];
	this.bounds = new flash_geom_Rectangle();
	this.tile = new flash_geom_Rectangle();
	this.matrix = new flash_geom_Matrix();
};
$hxClasses["openfl.display.Tilesheet"] = openfl_display_Tilesheet;
openfl_display_Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl_display_Tilesheet.prototype = {
	nmeBitmap: null
	,qOffsets: null
	,qRects: null
	,bounds: null
	,tile: null
	,matrix: null
	,addTileRect: function(r,p) {
		if(p == null) p = new flash_geom_Point();
		this.qRects.push(r);
		this.qOffsets.push(p);
		return this.qRects.length - 1;
	}
	,getTileCenter: function(i) {
		return this.qOffsets[i];
	}
	,getTileRect: function(i) {
		return this.qRects[i];
	}
	,drawTiles: function(g,d,smooth,f) {
		if(f == null) f = 0;
		if(smooth == null) smooth = false;
		var lenOfs;
		var tc = 0;
		var nr = g.frec;
		var np = g.flen;
		var i = 0;
		var c = d.length;
		var j;
		var z = 0;
		var t;
		var o;
		var q;
		var v;
		var b = this.bounds;
		var u = this.tile;
		var m = this.matrix;
		var tx;
		var ty;
		var ox;
		var oy;
		var qx;
		var qy;
		var qw;
		var qh;
		var fs = (f & 1) != 0;
		var fr = (f & 2) != 0;
		var fm = (f & 16) != 0;
		var ft = fs || fr || fm;
		var rl = 2147483647;
		var rt = 2147483647;
		var rr = -2147483648;
		var rb = -2147483648;
		g.irec[g.ilen++] = 16;
		g.arec[g.alen++] = this.nmeBitmap;
		g.irec[g.ilen++] = f;
		if((f & 4) != 0) z += 3;
		if((f & 8) != 0) z++;
		b.setVoid();
		while(i < c) {
			var v1 = tx = d[i++];
			nr[np++] = v1;
			var v2 = ty = d[i++];
			nr[np++] = v2;
			t = d[i++];
			q = this.qRects[t];
			o = this.qOffsets[t];
			var v3 = ox = o.x;
			nr[np++] = v3;
			var v4 = oy = o.y;
			nr[np++] = v4;
			var v5 = qx = q.x;
			nr[np++] = v5;
			var v6 = qy = q.y;
			nr[np++] = v6;
			var v7 = qw = q.width;
			nr[np++] = v7;
			var v8 = qh = q.height;
			nr[np++] = v8;
			u.x = -o.x;
			u.width = q.width;
			u.y = -o.y;
			u.height = q.height;
			if(ft) {
				m.identity();
				if(fm) {
					var v9 = m.a = d[i++];
					nr[np++] = v9;
					var v10 = m.b = d[i++];
					nr[np++] = v10;
					var v11 = m.c = d[i++];
					nr[np++] = v11;
					var v12 = m.d = d[i++];
					nr[np++] = v12;
				} else {
					if(fs) m.scale((function($this) {
						var $r;
						var v13 = v = d[i++];
						$r = nr[np++] = v13;
						return $r;
					}(this)),v);
					if(fr) m.rotate((function($this) {
						var $r;
						var v14 = d[i++];
						$r = nr[np++] = v14;
						return $r;
					}(this)));
				}
				m.translate(q.x,q.y);
				u.transform(m);
			}
			u.x += tx;
			u.y += ty;
			b.join(u);
			j = 0;
			while(j++ < z) {
				var v15 = d[i++];
				nr[np++] = v15;
			}
			tc++;
		}
		g.irec[g.ilen++] = tc;
		g.flen = np;
		g.grab(b.x,b.y,b.x + b.width,b.y + b.height);
	}
	,__class__: openfl_display_Tilesheet
};
var flixel_system_layer_TileSheetExt = function(bitmap) {
	this.numTiles = 0;
	openfl_display_Tilesheet.call(this,bitmap);
	this.tileIDs = new haxe_ds_StringMap();
	this.tileOrder = [];
};
$hxClasses["flixel.system.layer.TileSheetExt"] = flixel_system_layer_TileSheetExt;
flixel_system_layer_TileSheetExt.__name__ = ["flixel","system","layer","TileSheetExt"];
flixel_system_layer_TileSheetExt.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_system_layer_TileSheetExt.__super__ = openfl_display_Tilesheet;
flixel_system_layer_TileSheetExt.prototype = $extend(openfl_display_Tilesheet.prototype,{
	numTiles: null
	,tileIDs: null
	,tileOrder: null
	,rebuildFromOld: function(old) {
		var _g1 = 0;
		var _g = old.tileOrder.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tileName = old.tileOrder[i];
			var tileObj = old.tileIDs.get(tileName);
			this.addTileRect(tileObj.rect,tileObj.point);
		}
		this.tileIDs = old.tileIDs;
		this.tileOrder = old.tileOrder;
		this.numTiles = old.numTiles;
		old.tileIDs = null;
		old.tileOrder = null;
		flixel_util_FlxDestroyUtil.destroy(old);
	}
	,getKey: function(rect,point) {
		var key = rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_";
		if(point != null) key = key + point.x + "_" + point.y;
		return key;
	}
	,addTileRectID: function(rect,point) {
		var key = this.getKey(rect,point);
		if(this.tileIDs.exists(key)) return this.tileIDs.get(key).id;
		this.addTileRect(rect,point);
		var tileID = this.numTiles;
		this.numTiles++;
		this.tileOrder[tileID] = key;
		var value = new flixel_system_layer__$TileSheetExt_RectPointTileID(tileID,rect,point);
		this.tileIDs.set(key,value);
		return tileID;
	}
	,destroy: function() {
		this.tileOrder = null;
		if(this.tileIDs != null) {
			var $it0 = this.tileIDs.iterator();
			while( $it0.hasNext() ) {
				var tileObj = $it0.next();
				flixel_util_FlxDestroyUtil.destroy(tileObj);
			}
		}
		this.tileIDs = null;
	}
	,__class__: flixel_system_layer_TileSheetExt
});
var flixel_system_layer__$TileSheetExt_RectPointTileID = function(id,rect,point) {
	this.id = id;
	this.rect = rect;
	this.point = point;
};
$hxClasses["flixel.system.layer._TileSheetExt.RectPointTileID"] = flixel_system_layer__$TileSheetExt_RectPointTileID;
flixel_system_layer__$TileSheetExt_RectPointTileID.__name__ = ["flixel","system","layer","_TileSheetExt","RectPointTileID"];
flixel_system_layer__$TileSheetExt_RectPointTileID.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_system_layer__$TileSheetExt_RectPointTileID.prototype = {
	rect: null
	,point: null
	,id: null
	,destroy: function() {
		this.rect = null;
		this.point = null;
	}
	,__class__: flixel_system_layer__$TileSheetExt_RectPointTileID
};
var flixel_system_layer_frames_FlxFrame = function(tileSheet) {
	this.additionalAngle = 0;
	this.tileID = -1;
	this.trimmed = false;
	this._tileSheet = tileSheet;
	this.additionalAngle = 0;
	this.sourceSize = flixel_util_FlxPoint.get(null,null);
	this.offset = flixel_util_FlxPoint.get(null,null);
	this.center = flixel_util_FlxPoint.get(null,null);
	this.type = flixel_system_layer_frames_FrameType.REGULAR;
};
$hxClasses["flixel.system.layer.frames.FlxFrame"] = flixel_system_layer_frames_FlxFrame;
flixel_system_layer_frames_FlxFrame.__name__ = ["flixel","system","layer","frames","FlxFrame"];
flixel_system_layer_frames_FlxFrame.prototype = {
	name: null
	,frame: null
	,trimmed: null
	,tileID: null
	,additionalAngle: null
	,sourceSize: null
	,offset: null
	,center: null
	,type: null
	,_bitmapData: null
	,_hReversedBitmapData: null
	,_vReversedBitmapData: null
	,_hvReversedBitmapData: null
	,_tileSheet: null
	,paintOnBitmap: function(bmd) {
		var result = null;
		if(bmd != null && (bmd.component.width == this.sourceSize.x && bmd.component.height == this.sourceSize.y)) {
			result = bmd;
			var w = bmd.component.width;
			var h = bmd.component.height;
			if(w > this.frame.width || h > this.frame.height) {
				flixel_system_layer_frames_FlxFrame.RECT.x = flixel_system_layer_frames_FlxFrame.RECT.y = 0;
				flixel_system_layer_frames_FlxFrame.RECT.width = w;
				flixel_system_layer_frames_FlxFrame.RECT.height = h;
				bmd.fillRect(flixel_system_layer_frames_FlxFrame.RECT,0);
			}
		} else if(bmd != null) bmd.dispose();
		if(result == null) result = new flash_display_BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		flixel_system_layer_frames_FlxFrame.POINT.x = this.offset.x;
		flixel_system_layer_frames_FlxFrame.POINT.y = this.offset.y;
		result.copyPixels(this._tileSheet.bitmap,this.frame,flixel_system_layer_frames_FlxFrame.POINT);
		return result;
	}
	,getBitmap: function() {
		if(this._bitmapData != null) return this._bitmapData;
		this._bitmapData = this.paintOnBitmap();
		return this._bitmapData;
	}
	,getHReversedBitmap: function() {
		if(this._hReversedBitmapData != null) return this._hReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel_system_layer_frames_FlxFrame.MATRIX.identity();
		flixel_system_layer_frames_FlxFrame.MATRIX.scale(-1,1);
		flixel_system_layer_frames_FlxFrame.MATRIX.translate(this.sourceSize.x | 0,0);
		this._hReversedBitmapData = new flash_display_BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._hReversedBitmapData.draw(normalFrame,flixel_system_layer_frames_FlxFrame.MATRIX);
		return this._hReversedBitmapData;
	}
	,getVReversedBitmap: function() {
		if(this._vReversedBitmapData != null) return this._vReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel_system_layer_frames_FlxFrame.MATRIX.identity();
		flixel_system_layer_frames_FlxFrame.MATRIX.scale(1,-1);
		flixel_system_layer_frames_FlxFrame.MATRIX.translate(0,this.sourceSize.y | 0);
		this._vReversedBitmapData = new flash_display_BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._vReversedBitmapData.draw(normalFrame,flixel_system_layer_frames_FlxFrame.MATRIX);
		return this._vReversedBitmapData;
	}
	,getHVReversedBitmap: function() {
		if(this._hvReversedBitmapData != null) return this._hvReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel_system_layer_frames_FlxFrame.MATRIX.identity();
		flixel_system_layer_frames_FlxFrame.MATRIX.scale(-1,-1);
		flixel_system_layer_frames_FlxFrame.MATRIX.translate(this.sourceSize.x | 0,this.sourceSize.y | 0);
		this._hvReversedBitmapData = new flash_display_BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._hvReversedBitmapData.draw(normalFrame,flixel_system_layer_frames_FlxFrame.MATRIX);
		return this._hvReversedBitmapData;
	}
	,destroy: function() {
		this.name = null;
		this.frame = null;
		this._tileSheet = null;
		this.sourceSize = flixel_util_FlxDestroyUtil.put(this.sourceSize);
		this.offset = flixel_util_FlxDestroyUtil.put(this.offset);
		this.center = flixel_util_FlxDestroyUtil.put(this.center);
		this.destroyBitmapDatas();
	}
	,destroyBitmapDatas: function() {
		this._bitmapData = flixel_util_FlxDestroyUtil.dispose(this._bitmapData);
		this._hReversedBitmapData = flixel_util_FlxDestroyUtil.dispose(this._hReversedBitmapData);
		this._vReversedBitmapData = flixel_util_FlxDestroyUtil.dispose(this._vReversedBitmapData);
		this._hvReversedBitmapData = flixel_util_FlxDestroyUtil.dispose(this._hvReversedBitmapData);
	}
	,__class__: flixel_system_layer_frames_FlxFrame
};
var flixel_system_layer_frames_FlxRotatedFrame = function(tileSheet) {
	flixel_system_layer_frames_FlxFrame.call(this,tileSheet);
	this.type = flixel_system_layer_frames_FrameType.ROTATED;
};
$hxClasses["flixel.system.layer.frames.FlxRotatedFrame"] = flixel_system_layer_frames_FlxRotatedFrame;
flixel_system_layer_frames_FlxRotatedFrame.__name__ = ["flixel","system","layer","frames","FlxRotatedFrame"];
flixel_system_layer_frames_FlxRotatedFrame.__super__ = flixel_system_layer_frames_FlxFrame;
flixel_system_layer_frames_FlxRotatedFrame.prototype = $extend(flixel_system_layer_frames_FlxFrame.prototype,{
	paintOnBitmap: function(bmd) {
		var result = null;
		if(bmd != null && (bmd.component.width == this.sourceSize.x && bmd.component.height == this.sourceSize.y)) result = bmd; else if(bmd != null) bmd.dispose();
		if(result == null) result = new flash_display_BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		var temp = new flash_display_BitmapData(this.frame.width | 0,this.frame.height | 0,true,0);
		flixel_system_layer_frames_FlxFrame.POINT.x = flixel_system_layer_frames_FlxFrame.POINT.y = 0;
		temp.copyPixels(this._tileSheet.bitmap,this.frame,flixel_system_layer_frames_FlxFrame.POINT);
		flixel_system_layer_frames_FlxFrame.MATRIX.identity();
		flixel_system_layer_frames_FlxFrame.MATRIX.translate(-0.5 * this.frame.width,-0.5 * this.frame.height);
		flixel_system_layer_frames_FlxFrame.MATRIX.rotate(-90. * (Math.PI / 180));
		flixel_system_layer_frames_FlxFrame.MATRIX.translate(this.offset.x + 0.5 * this.frame.height,this.offset.y + 0.5 * this.frame.width);
		result = new flash_display_BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		result.draw(temp,flixel_system_layer_frames_FlxFrame.MATRIX);
		temp.dispose();
		return result;
	}
	,__class__: flixel_system_layer_frames_FlxRotatedFrame
});
var flixel_system_layer_frames_FlxSpriteFrames = function(name) {
	this.name = name;
	this.frames = [];
	this.framesHash = new haxe_ds_StringMap();
};
$hxClasses["flixel.system.layer.frames.FlxSpriteFrames"] = flixel_system_layer_frames_FlxSpriteFrames;
flixel_system_layer_frames_FlxSpriteFrames.__name__ = ["flixel","system","layer","frames","FlxSpriteFrames"];
flixel_system_layer_frames_FlxSpriteFrames.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_system_layer_frames_FlxSpriteFrames.prototype = {
	frames: null
	,framesHash: null
	,name: null
	,addFrame: function(frame) {
		this.frames.push(frame);
		this.framesHash.set(frame.name,frame);
	}
	,destroy: function() {
		this.frames = null;
		this.framesHash = null;
		this.name = null;
	}
	,__class__: flixel_system_layer_frames_FlxSpriteFrames
};
var flixel_system_layer_frames_FrameType = $hxClasses["flixel.system.layer.frames.FrameType"] = { __ename__ : ["flixel","system","layer","frames","FrameType"], __constructs__ : ["REGULAR","ROTATED"] };
flixel_system_layer_frames_FrameType.REGULAR = ["REGULAR",0];
flixel_system_layer_frames_FrameType.REGULAR.toString = $estr;
flixel_system_layer_frames_FrameType.REGULAR.__enum__ = flixel_system_layer_frames_FrameType;
flixel_system_layer_frames_FrameType.ROTATED = ["ROTATED",1];
flixel_system_layer_frames_FrameType.ROTATED.toString = $estr;
flixel_system_layer_frames_FrameType.ROTATED.__enum__ = flixel_system_layer_frames_FrameType;
var flixel_system_replay_CodeValuePair = function(Code,Value) {
	if(Value == null) Value = 0;
	if(Code == null) Code = 0;
	this.code = Code;
	this.value = Value;
};
$hxClasses["flixel.system.replay.CodeValuePair"] = flixel_system_replay_CodeValuePair;
flixel_system_replay_CodeValuePair.__name__ = ["flixel","system","replay","CodeValuePair"];
flixel_system_replay_CodeValuePair.prototype = {
	code: null
	,value: null
	,__class__: flixel_system_replay_CodeValuePair
};
var flixel_system_replay_FlxReplay = function() {
	this.seed = 0;
	this.frame = 0;
	this.frameCount = 0;
	this.finished = false;
	this._frames = null;
	this._capacity = 0;
	this._marker = 0;
};
$hxClasses["flixel.system.replay.FlxReplay"] = flixel_system_replay_FlxReplay;
flixel_system_replay_FlxReplay.__name__ = ["flixel","system","replay","FlxReplay"];
flixel_system_replay_FlxReplay.prototype = {
	seed: null
	,frame: null
	,frameCount: null
	,finished: null
	,_frames: null
	,_capacity: null
	,_marker: null
	,destroy: function() {
		if(this._frames == null) return;
		var i = this.frameCount - 1;
		while(i >= 0) this._frames[i--].destroy();
		this._frames = null;
	}
	,create: function(Seed) {
		this.destroy();
		this.init();
		this.seed = Seed;
		this.rewind();
	}
	,load: function(FileContents) {
		this.init();
		var lines = FileContents.split("\n");
		this.seed = Std.parseInt(lines[0]);
		var line;
		var i = 1;
		var l = lines.length;
		while(i < l) {
			line = lines[i++];
			if(line.length > 3) {
				this._frames[this.frameCount++] = new flixel_system_replay_FrameRecord().load(line);
				if(this.frameCount >= this._capacity) {
					this._capacity *= 2;
					flixel_util_FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
				}
			}
		}
		this.rewind();
	}
	,save: function() {
		if(this.frameCount <= 0) return null;
		var output = this.seed + "\n";
		var i = 0;
		while(i < this.frameCount) output += this._frames[i++].save() + "\n";
		return output;
	}
	,recordFrame: function() {
		var continueFrame = true;
		var keysRecord = flixel_FlxG.keys.record();
		if(keysRecord == null) continueFrame = false;
		var mouseRecord = flixel_FlxG.mouse.record();
		if(mouseRecord == null) continueFrame = false;
		if(continueFrame) {
			this.frame++;
			return;
		}
		var frameRecorded = new flixel_system_replay_FrameRecord().create(this.frame++);
		frameRecorded.mouse = mouseRecord;
		frameRecorded.keys = keysRecord;
		this._frames[this.frameCount++] = frameRecorded;
		if(this.frameCount >= this._capacity) {
			this._capacity *= 2;
			flixel_util_FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
		}
	}
	,playNextFrame: function() {
		flixel_FlxG.inputs.reset();
		if(this._marker >= this.frameCount) {
			this.finished = true;
			return;
		}
		if(this._frames[this._marker].frame != this.frame++) return;
		var fr = this._frames[this._marker++];
		if(fr.keys != null) flixel_FlxG.keys.playback(fr.keys);
		if(fr.mouse != null) flixel_FlxG.mouse.playback(fr.mouse);
	}
	,rewind: function() {
		this._marker = 0;
		this.frame = 0;
		this.finished = false;
	}
	,init: function() {
		this._capacity = 100;
		this._frames = [];
		flixel_util_FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
		this.frameCount = 0;
	}
	,__class__: flixel_system_replay_FlxReplay
};
var flixel_system_replay_FrameRecord = function() {
	this.frame = 0;
	this.keys = null;
	this.mouse = null;
};
$hxClasses["flixel.system.replay.FrameRecord"] = flixel_system_replay_FrameRecord;
flixel_system_replay_FrameRecord.__name__ = ["flixel","system","replay","FrameRecord"];
flixel_system_replay_FrameRecord.prototype = {
	frame: null
	,keys: null
	,mouse: null
	,create: function(Frame,Keys,Mouse) {
		this.frame = Math.floor(Frame);
		this.keys = Keys;
		this.mouse = Mouse;
		return this;
	}
	,destroy: function() {
		this.keys = null;
		this.mouse = null;
	}
	,save: function() {
		var output = this.frame + "k";
		if(this.keys != null) {
			var object;
			var i = 0;
			var l = this.keys.length;
			while(i < l) {
				if(i > 0) output += ",";
				object = this.keys[i++];
				output += object.code + ":" + object.value;
			}
		}
		output += "m";
		if(this.mouse != null) output += this.mouse.x + "," + this.mouse.y + "," + this.mouse.button + "," + this.mouse.wheel;
		return output;
	}
	,load: function(Data) {
		var i;
		var l;
		var array = Data.split("k");
		this.frame = Std.parseInt(array[0]);
		array = array[1].split("m");
		var keyData = array[0];
		var mouseData = array[1];
		if(keyData.length > 0) {
			array = keyData.split(",");
			var keyPair;
			i = 0;
			l = array.length;
			while(i < l) {
				keyPair = array[i++].split(":");
				if(keyPair.length == 2) {
					if(this.keys == null) this.keys = [];
					this.keys.push(new flixel_system_replay_CodeValuePair(Std.parseInt(keyPair[0]),Std.parseInt(keyPair[1])));
				}
			}
		}
		if(mouseData.length > 0) {
			array = mouseData.split(",");
			if(array.length >= 4) this.mouse = new flixel_system_replay_MouseRecord(Std.parseInt(array[0]),Std.parseInt(array[1]),Std.parseInt(array[2]),Std.parseInt(array[3]));
		}
		return this;
	}
	,__class__: flixel_system_replay_FrameRecord
};
var flixel_system_replay_MouseRecord = function(X,Y,Button,Wheel) {
	flixel_util_FlxPoint.call(this);
	this.set(X,Y);
	this.button = Button;
	this.wheel = Wheel;
};
$hxClasses["flixel.system.replay.MouseRecord"] = flixel_system_replay_MouseRecord;
flixel_system_replay_MouseRecord.__name__ = ["flixel","system","replay","MouseRecord"];
flixel_system_replay_MouseRecord.__super__ = flixel_util_FlxPoint;
flixel_system_replay_MouseRecord.prototype = $extend(flixel_util_FlxPoint.prototype,{
	button: null
	,wheel: null
	,__class__: flixel_system_replay_MouseRecord
});
var flixel_system_ui_FlxFocusLostScreen = function() {
	flash_display_Sprite.call(this);
	this.draw();
	var logo = new flash_display_Sprite();
	flixel_system_FlxAssets.drawLogo(logo.get_graphics());
	logo.set_scaleX(logo.set_scaleY(0.2));
	logo.set_x(logo.set_y(5));
	logo.set_alpha(0.35);
	this.addChild(logo);
	this.set_visible(false);
};
$hxClasses["flixel.system.ui.FlxFocusLostScreen"] = flixel_system_ui_FlxFocusLostScreen;
flixel_system_ui_FlxFocusLostScreen.__name__ = ["flixel","system","ui","FlxFocusLostScreen"];
flixel_system_ui_FlxFocusLostScreen.__super__ = flash_display_Sprite;
flixel_system_ui_FlxFocusLostScreen.prototype = $extend(flash_display_Sprite.prototype,{
	draw: function() {
		var gfx = this.get_graphics();
		var screenWidth = flixel_FlxCamera.defaultZoom * flixel_FlxG.width * flixel_FlxG.game.scaleX | 0;
		var screenHeight = flixel_FlxCamera.defaultZoom * flixel_FlxG.height * flixel_FlxG.game.scaleY | 0;
		gfx.clear();
		gfx.moveTo(0,0);
		gfx.beginFill(0,0.5);
		gfx.drawRect(0,0,screenWidth,screenHeight);
		gfx.endFill();
		var halfWidth = screenWidth / 2 | 0;
		var halfHeight = screenHeight / 2 | 0;
		var helper = Std["int"](Math.min(halfWidth,halfHeight) / 3);
		gfx.moveTo(halfWidth - helper,halfHeight - helper);
		gfx.beginFill(16777215,0.65);
		gfx.lineTo(halfWidth + helper,halfHeight);
		gfx.lineTo(halfWidth - helper,halfHeight + helper);
		gfx.lineTo(halfWidth - helper,halfHeight - helper);
		gfx.endFill();
		this.set_scaleX(1 / flixel_FlxG.game.scaleX);
		this.set_scaleY(1 / flixel_FlxG.game.scaleY);
	}
	,__class__: flixel_system_ui_FlxFocusLostScreen
});
var flixel_system_ui_FlxSoundTray = function() {
	this._defaultScale = 2.0;
	this._width = 80;
	flash_display_Sprite.call(this);
	this.set_visible(false);
	this.set_scaleX(this._defaultScale);
	this.set_scaleY(this._defaultScale);
	var tmp = new flash_display_Bitmap(new flash_display_BitmapData(this._width,30,true,2130706432));
	this.screenCenter();
	this.addChild(tmp);
	var text = new flash_text_TextField();
	text.set_width(tmp.get_width());
	text.set_height(tmp.get_height());
	text.set_multiline(true);
	text.set_wordWrap(true);
	text.set_selectable(false);
	var dtf = new flash_text_TextFormat(flixel_system_FlxAssets.FONT_DEFAULT,8,16777215);
	dtf.align = "CENTER";
	text.set_defaultTextFormat(dtf);
	this.addChild(text);
	text.set_text("VOLUME");
	text.set_y(16);
	var bx = 10;
	var by = 14;
	this._bars = [];
	var _g = 0;
	while(_g < 10) {
		var i = _g++;
		tmp = new flash_display_Bitmap(new flash_display_BitmapData(4,i + 1,false,-1));
		tmp.set_x(bx);
		tmp.set_y(by);
		this.addChild(tmp);
		this._bars.push(tmp);
		bx += 6;
		by--;
	}
	this.set_y(-this.get_height());
	this.set_visible(false);
};
$hxClasses["flixel.system.ui.FlxSoundTray"] = flixel_system_ui_FlxSoundTray;
flixel_system_ui_FlxSoundTray.__name__ = ["flixel","system","ui","FlxSoundTray"];
flixel_system_ui_FlxSoundTray.__super__ = flash_display_Sprite;
flixel_system_ui_FlxSoundTray.prototype = $extend(flash_display_Sprite.prototype,{
	active: null
	,_timer: null
	,_bars: null
	,_width: null
	,_defaultScale: null
	,update: function(MS) {
		if(this._timer > 0) this._timer -= MS / 1000; else if(this.y > -this.get_height()) {
			var _g = this;
			_g.set_y(_g.y - MS / 1000 * flixel_FlxG.height * 2);
			if(this.y <= -this.get_height()) {
				this.set_visible(false);
				this.active = false;
				flixel_FlxG.save.data.mute = flixel_FlxG.sound.muted;
				flixel_FlxG.save.data.volume = flixel_FlxG.sound.volume;
				flixel_FlxG.save.flush();
			}
		}
	}
	,show: function(Silent) {
		if(Silent == null) Silent = false;
		if(!Silent) flixel_FlxG.sound.load(flixel_system_FlxAssets.getSound("assets/sounds/beep")).play();
		this._timer = 1;
		this.set_y(0);
		this.set_visible(true);
		this.active = true;
		var globalVolume = Math.round(flixel_FlxG.sound.volume * 10);
		if(flixel_FlxG.sound.muted) globalVolume = 0;
		var _g1 = 0;
		var _g = this._bars.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i < globalVolume) this._bars[i].set_alpha(1); else this._bars[i].set_alpha(0.5);
		}
	}
	,screenCenter: function() {
		this.set_scaleX(this._defaultScale / flixel_FlxG.game.scaleX);
		this.set_scaleY(this._defaultScale / flixel_FlxG.game.scaleY);
		this.set_x((0.5 * (flash_Lib.get_current().get_stage().get_stageWidth() - this._width * this._defaultScale) - flixel_FlxG.game.x) / flixel_FlxG.game.scaleX);
	}
	,__class__: flixel_system_ui_FlxSoundTray
});
var flixel_system_ui_FlxSystemButton = function(Icon,UpHandler,ToggleMode) {
	if(ToggleMode == null) ToggleMode = false;
	this._mouseDown = false;
	this.toggled = false;
	this.toggleMode = false;
	this.enabled = true;
	flash_display_Sprite.call(this);
	if(Icon != null) {
		this._icon = new flash_display_Bitmap(Icon);
		this.addChild(this._icon);
	}
	this.upHandler = UpHandler;
	this.toggleMode = ToggleMode;
	this.addEventListener("mouseUp",$bind(this,this.onMouseUp));
	this.addEventListener("mouseDown",$bind(this,this.onMouseDown));
	this.addEventListener("mouseOut",$bind(this,this.onMouseOut));
	this.addEventListener("mouseOver",$bind(this,this.onMouseOver));
};
$hxClasses["flixel.system.ui.FlxSystemButton"] = flixel_system_ui_FlxSystemButton;
flixel_system_ui_FlxSystemButton.__name__ = ["flixel","system","ui","FlxSystemButton"];
flixel_system_ui_FlxSystemButton.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_system_ui_FlxSystemButton.__super__ = flash_display_Sprite;
flixel_system_ui_FlxSystemButton.prototype = $extend(flash_display_Sprite.prototype,{
	upHandler: null
	,enabled: null
	,toggleMode: null
	,toggled: null
	,_icon: null
	,_mouseDown: null
	,changeIcon: function(Icon) {
		if(this._icon != null) this.removeChild(this._icon);
		this._icon = new flash_display_Bitmap(Icon);
		this.addChild(this._icon);
	}
	,destroy: function() {
		this.removeEventListener("mouseUp",$bind(this,this.onMouseUp));
		this.removeEventListener("mouseDown",$bind(this,this.onMouseDown));
		this.removeEventListener("mouseOut",$bind(this,this.onMouseOut));
		this.removeEventListener("mouseOver",$bind(this,this.onMouseOver));
		this._icon = null;
		this.upHandler = null;
	}
	,onMouseUp: function(E) {
		if(this.enabled && this._mouseDown) {
			this.set_toggled(!this.toggled);
			this._mouseDown = false;
			if(this.upHandler != null) this.upHandler();
		}
	}
	,onMouseDown: function(E) {
		this._mouseDown = true;
	}
	,onMouseOver: function(E) {
		var _g = this;
		_g.set_alpha(_g.alpha - 0.2);
	}
	,onMouseOut: function(E) {
		var _g = this;
		_g.set_alpha(_g.alpha + 0.2);
	}
	,set_toggled: function(Value) {
		if(this.toggleMode) this.set_alpha(Value?0.3:1);
		return this.toggled = Value;
	}
	,__class__: flixel_system_ui_FlxSystemButton
	,__properties__: $extend(flash_display_Sprite.prototype.__properties__,{set_toggled:"set_toggled"})
});
var flixel_text_FlxText = function(X,Y,FieldWidth,Text,Size,EmbeddedFont) {
	if(EmbeddedFont == null) EmbeddedFont = true;
	if(Size == null) Size = 8;
	if(FieldWidth == null) FieldWidth = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._heightInc = 0;
	this._widthInc = 0;
	this.borderQuality = 1;
	this.borderSize = 1;
	this.borderColor = 0;
	this.borderStyle = 0;
	flixel_FlxSprite.call(this,X,Y);
	this._filters = [];
	var setTextEmpty = false;
	if(Text == null || Text == "") {
		Text = "";
		setTextEmpty = true;
	}
	this._textField = new flash_text_TextField();
	this._textField.set_selectable(false);
	this._textField.set_multiline(true);
	this._textField.set_wordWrap(true);
	this._defaultFormat = new flash_text_TextFormat(flixel_system_FlxAssets.FONT_DEFAULT,Size,16777215);
	this._formatAdjusted = new flash_text_TextFormat();
	this._textField.set_defaultTextFormat(this._defaultFormat);
	this._textField.set_text(Text);
	this.set_fieldWidth(FieldWidth);
	this._textField.embedFonts = EmbeddedFont;
	this._formats = [];
	this._textField.set_height(Text.length <= 0?1:10);
	this.allowCollisions = 0;
	this.set_moves(false);
	var key = flixel_FlxG.bitmap.getUniqueKey("text");
	var graphicWidth;
	if(FieldWidth <= 0) graphicWidth = 1; else graphicWidth = FieldWidth | 0;
	this.makeGraphic(graphicWidth,1,0,false,key);
	this.calcFrame();
	if(setTextEmpty) this.set_text("");
	this.shadowOffset = flixel_util_FlxPoint.get(1,1);
};
$hxClasses["flixel.text.FlxText"] = flixel_text_FlxText;
flixel_text_FlxText.__name__ = ["flixel","text","FlxText"];
flixel_text_FlxText.__super__ = flixel_FlxSprite;
flixel_text_FlxText.prototype = $extend(flixel_FlxSprite.prototype,{
	borderStyle: null
	,borderColor: null
	,borderSize: null
	,borderQuality: null
	,shadowOffset: null
	,_textField: null
	,_defaultFormat: null
	,_formatAdjusted: null
	,_formats: null
	,_filters: null
	,_widthInc: null
	,_heightInc: null
	,destroy: function() {
		this._textField = null;
		this._defaultFormat = null;
		this._formatAdjusted = null;
		this._filters = null;
		if(this._formats != null) {
			var _g = 0;
			var _g1 = this._formats;
			while(_g < _g1.length) {
				var format = _g1[_g];
				++_g;
				if(format != null) {
					format.destroy();
					format = null;
				}
			}
		}
		this._formats = null;
		this.shadowOffset = flixel_util_FlxDestroyUtil.put(this.shadowOffset);
		flixel_FlxSprite.prototype.destroy.call(this);
	}
	,addFormat: function(Format,Start,End) {
		if(End == null) End = -1;
		if(Start == null) Start = -1;
		if(Start > -1) Format.start = Start; else Format.start = Format.start;
		if(End > -1) Format.end = End; else Format.end = Format.end;
		this._formats.push(Format);
		this._formats.sort(function(left,right) {
			if(left.start < right.start) return -1; else return 1;
		});
		this.dirty = true;
	}
	,removeFormat: function(Format) {
		flixel_util_FlxArrayUtil.fastSplice_flixel_text_FlxTextFormat(this._formats,Format);
		this.dirty = true;
	}
	,clearFormats: function() {
		var _g = 0;
		var _g1 = this._formats;
		while(_g < _g1.length) {
			var format = _g1[_g];
			++_g;
			format.destroy();
			format = null;
		}
		this._formats = [];
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
	}
	,setFormat: function(Font,Size,Color,Alignment,BorderStyle,BorderColor,Embedded) {
		if(Embedded == null) Embedded = true;
		if(BorderColor == null) BorderColor = 0;
		if(BorderStyle == null) BorderStyle = 0;
		if(Color == null) Color = 16777215;
		if(Size == null) Size = 8;
		if(Embedded) {
			if(Font == null) this._defaultFormat.font = flixel_system_FlxAssets.FONT_DEFAULT; else this._defaultFormat.font = openfl_Assets.getFont(Font).fontName;
		} else if(Font != null) this._defaultFormat.font = Font;
		this._textField.embedFonts = Embedded;
		this._defaultFormat.size = Size;
		Color &= 16777215;
		this._defaultFormat.color = Color;
		this._defaultFormat.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this.set_borderStyle(BorderStyle);
		this.set_borderColor(BorderColor);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return this;
	}
	,setBorderStyle: function(Style,Color,Size,Quality) {
		if(Quality == null) Quality = 1;
		if(Size == null) Size = 1;
		if(Color == null) Color = 0;
		this.set_borderStyle(Style);
		this.set_borderColor(Color);
		this.set_borderSize(Size);
		this.set_borderQuality(Quality);
	}
	,addFilter: function(filter,widthInc,heightInc) {
		if(heightInc == null) heightInc = 0;
		if(widthInc == null) widthInc = 0;
		this._filters.push(filter);
		this._widthInc = widthInc;
		this._heightInc = heightInc;
		this.dirty = true;
	}
	,removeFilter: function(filter) {
		var removed = HxOverrides.remove(this._filters,filter);
		if(removed) this.dirty = true;
	}
	,clearFilters: function() {
		if(this._filters.length > 0) this.dirty = true;
		this._filters = [];
	}
	,updateFrameData: function() {
		if(this.cachedGraphics != null) {
			this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region);
			this.set_frame(this.framesData.frames[0]);
			this.frames = 1;
		}
	}
	,applyFormats: function(FormatAdjusted,UseBorderColor) {
		if(UseBorderColor == null) UseBorderColor = false;
		if(UseBorderColor) FormatAdjusted.color = this.borderColor; else FormatAdjusted.color = this._defaultFormat.color;
		this._textField.setTextFormat(FormatAdjusted,0,this._textField.get_text().length);
		var _g = 0;
		var _g1 = this._formats;
		while(_g < _g1.length) {
			var format = _g1[_g];
			++_g;
			if(this._textField.get_text().length - 1 < format.start) break; else {
				FormatAdjusted.font = format.format.font;
				FormatAdjusted.bold = format.format.bold;
				FormatAdjusted.italic = format.format.italic;
				FormatAdjusted.size = format.format.size;
				if(UseBorderColor) FormatAdjusted.color = format.borderColor; else FormatAdjusted.color = format.format.color;
			}
			this._textField.setTextFormat(FormatAdjusted,format.start,Std["int"](Math.min(format.end,this._textField.get_text().length)));
		}
	}
	,set_fieldWidth: function(value) {
		if(this._textField != null) {
			if(value <= 0) {
				this.set_wordWrap(false);
				this.set_autoSize(true);
			} else this._textField.set_width(value);
			this.dirty = true;
		}
		return value;
	}
	,get_fieldWidth: function() {
		if(this._textField != null) return this._textField.get_width(); else return 0;
	}
	,set_autoSize: function(value) {
		if(this._textField != null) {
			if(value) this._textField.set_autoSize("LEFT"); else this._textField.set_autoSize("NONE");
			this.dirty = true;
		}
		return value;
	}
	,get_autoSize: function() {
		if(this._textField != null) return this._textField.autoSize != "NONE"; else return false;
	}
	,get_text: function() {
		return this._textField.get_text();
	}
	,set_text: function(Text) {
		var ot = this._textField.get_text();
		this._textField.set_text(Text);
		if(this._textField.get_text() != ot) this.dirty = true;
		return this._textField.get_text();
	}
	,get_size: function() {
		return this._defaultFormat.size;
	}
	,set_size: function(Size) {
		this._defaultFormat.size = Size;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Size;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this._defaultFormat.color == Color) return Color;
		this._defaultFormat.color = Color;
		this.color = Color;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Color;
	}
	,get_font: function() {
		return this._defaultFormat.font;
	}
	,set_font: function(Font) {
		this._textField.embedFonts = true;
		this._defaultFormat.font = openfl_Assets.getFont(Font).fontName;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Font;
	}
	,get_embedded: function() {
		return this._textField.embedFonts = true;
	}
	,get_systemFont: function() {
		return this._defaultFormat.font;
	}
	,set_systemFont: function(Font) {
		this._textField.embedFonts = false;
		this._defaultFormat.font = Font;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Font;
	}
	,get_bold: function() {
		return this._defaultFormat.bold;
	}
	,set_bold: function(value) {
		if(this._defaultFormat.bold != value) {
			this._defaultFormat.bold = value;
			this._textField.set_defaultTextFormat(this._defaultFormat);
			this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
			this.dirty = true;
		}
		return value;
	}
	,get_italic: function() {
		return this._defaultFormat.italic;
	}
	,set_italic: function(value) {
		if(this._defaultFormat.italic != value) {
			this._defaultFormat.italic = value;
			this._textField.set_defaultTextFormat(this._defaultFormat);
			this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
			this.dirty = true;
		}
		return value;
	}
	,get_wordWrap: function() {
		return this._textField.wordWrap;
	}
	,set_wordWrap: function(value) {
		if(this._textField.wordWrap != value) {
			this._textField.set_wordWrap(value);
			this.dirty = true;
		}
		return value;
	}
	,get_alignment: function() {
		return js_Boot.__cast(this._defaultFormat.align , String);
	}
	,set_alignment: function(Alignment) {
		this._defaultFormat.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Alignment;
	}
	,set_borderStyle: function(style) {
		if(style != this.borderStyle) {
			this.borderStyle = style;
			this.dirty = true;
		}
		return this.borderStyle;
	}
	,set_borderColor: function(Color) {
		Color &= 16777215;
		if(this.borderColor != Color && this.borderStyle != 0) this.dirty = true;
		this.borderColor = Color;
		return Color;
	}
	,set_borderSize: function(Value) {
		if(Value != this.borderSize && this.borderStyle != 0) this.dirty = true;
		this.borderSize = Value;
		return Value;
	}
	,set_borderQuality: function(Value) {
		if(Value < 0) Value = 0; else if(Value > 1) Value = 1;
		if(Value != this.borderQuality && this.borderStyle != 0) this.dirty = true;
		this.borderQuality = Value;
		return Value;
	}
	,get_textField: function() {
		return this._textField;
	}
	,set_cachedGraphics: function(Value) {
		var cached = flixel_FlxSprite.prototype.set_cachedGraphics.call(this,Value);
		if(Value != null) Value.set_destroyOnNoUse(true);
		return cached;
	}
	,updateColorTransform: function() {
		if(this.alpha != 1) {
			if(this.colorTransform == null) this.colorTransform = new flash_geom_ColorTransform(1,1,1,this.alpha); else this.colorTransform.alphaMultiplier = this.alpha;
			this.useColorTransform = true;
		} else {
			if(this.colorTransform != null) this.colorTransform.alphaMultiplier = 1;
			this.useColorTransform = false;
		}
		this.dirty = true;
	}
	,regenGraphics: function() {
		var oldWidth = this.cachedGraphics.bitmap.component.width;
		var oldHeight = this.cachedGraphics.bitmap.component.height;
		var newWidth = this._textField.get_width() + this._widthInc;
		var newHeight = this._textField.get_textHeight() + this._heightInc + 4;
		if(this._textField.get_textHeight() == 0) newHeight = oldHeight;
		if(oldWidth != newWidth || oldHeight != newHeight) {
			this.set_height(newHeight - this._heightInc);
			var key = this.cachedGraphics.key;
			flixel_FlxG.bitmap.remove(key);
			this.makeGraphic(newWidth | 0,newHeight | 0,0,false,key);
			this.frameHeight = Std["int"](this.get_height());
			this._textField.set_height(this.get_height() * 1.2);
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = newWidth;
			this._flashRect.height = newHeight;
		} else this.cachedGraphics.bitmap.fillRect(this._flashRect,0);
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) RunOnCpp = false;
		if(this._textField == null) return;
		if(this._filters != null) this._textField.set_filters(this._filters);
		this.regenGraphics();
		if(this._textField != null && this._textField.get_text() != null && this._textField.get_text().length > 0) {
			this._formatAdjusted.font = this._defaultFormat.font;
			this._formatAdjusted.size = this._defaultFormat.size;
			this._formatAdjusted.bold = this._defaultFormat.bold;
			this._formatAdjusted.italic = this._defaultFormat.italic;
			this._formatAdjusted.color = this._defaultFormat.color;
			this._formatAdjusted.align = this._defaultFormat.align;
			this._matrix.identity();
			this._matrix.translate(0.5 * this._widthInc | 0,0.5 * this._heightInc | 0);
			if(this._defaultFormat.align == "CENTER" && this._textField.get_numLines() == 1) {
				this._formatAdjusted.align = "LEFT";
				this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
				this._matrix.translate(Math.floor((this.get_width() - this._textField.get_textWidth()) / 2),0);
			}
			if(this.borderStyle != 0) {
				var iterations = this.borderSize * this.borderQuality | 0;
				if(iterations <= 0) iterations = 1;
				var delta = this.borderSize / iterations;
				if(this.borderStyle == 1) {
					this.applyFormats(this._formatAdjusted,true);
					var _g = 0;
					while(_g < iterations) {
						var iter = _g++;
						this._matrix.translate(delta,delta);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
					}
					this._matrix.translate(-this.shadowOffset.x * this.borderSize,-this.shadowOffset.y * this.borderSize);
					this.applyFormats(this._formatAdjusted,false);
				} else if(this.borderStyle == 2) {
					this.applyFormats(this._formatAdjusted,true);
					var itd = delta;
					var _g1 = 0;
					while(_g1 < iterations) {
						var iter1 = _g1++;
						this._matrix.translate(-itd,-itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(-itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(-itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,-itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd,0);
						itd += delta;
					}
					this.applyFormats(this._formatAdjusted,false);
				} else if(this.borderStyle == 3) {
					this.applyFormats(this._formatAdjusted,true);
					var itd1 = delta;
					var _g2 = 0;
					while(_g2 < iterations) {
						var iter2 = _g2++;
						this._matrix.translate(-itd1,-itd1);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd1 * 2,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,itd1 * 2);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(-itd1 * 2,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd1,-itd1);
						itd1 += delta;
					}
					this.applyFormats(this._formatAdjusted,false);
				}
			} else this.applyFormats(this._formatAdjusted,false);
			this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
		}
		this.dirty = false;
		if(this.framePixels == null || this.framePixels.component.width != this.cachedGraphics.bitmap.component.width || this.framePixels.component.height != this.cachedGraphics.bitmap.component.height) {
			this.framePixels = flixel_util_FlxDestroyUtil.dispose(this.framePixels);
			this.framePixels = new flash_display_BitmapData(this.cachedGraphics.bitmap.component.width,this.cachedGraphics.bitmap.component.height,true,0);
		}
		this.framePixels.copyPixels(this.cachedGraphics.bitmap,this._flashRect,this._flashPointZero);
		if(this.useColorTransform) this.framePixels.colorTransform(this._flashRect,this.colorTransform);
	}
	,dtfCopy: function() {
		var defaultTextFormat = this._textField.get_defaultTextFormat();
		return new flash_text_TextFormat(defaultTextFormat.font,defaultTextFormat.size,defaultTextFormat.color,defaultTextFormat.bold,defaultTextFormat.italic,defaultTextFormat.underline,defaultTextFormat.url,defaultTextFormat.target,defaultTextFormat.align);
	}
	,convertTextAlignmentFromString: function(StrAlign) {
		if(StrAlign == "right") return "RIGHT"; else if(StrAlign == "center") return "CENTER"; else if(StrAlign == "justify") return "JUSTIFY"; else return "LEFT";
	}
	,updateFormat: function(Format) {
		this._textField.setTextFormat(Format,0,this._textField.get_text().length);
	}
	,__class__: flixel_text_FlxText
	,__properties__: $extend(flixel_FlxSprite.prototype.__properties__,{set_autoSize:"set_autoSize",get_autoSize:"get_autoSize",set_fieldWidth:"set_fieldWidth",get_fieldWidth:"get_fieldWidth",get_textField:"get_textField",set_borderQuality:"set_borderQuality",set_borderSize:"set_borderSize",set_borderColor:"set_borderColor",set_borderStyle:"set_borderStyle",set_alignment:"set_alignment",get_alignment:"get_alignment",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_italic:"set_italic",get_italic:"get_italic",set_bold:"set_bold",get_bold:"get_bold",set_systemFont:"set_systemFont",get_systemFont:"get_systemFont",get_embedded:"get_embedded",set_font:"set_font",get_font:"get_font",set_size:"set_size",get_size:"get_size",set_text:"set_text",get_text:"get_text"})
});
var flixel_text_FlxTextFormat = function(FontColor,Bold,Italic,BorderColor,Start,End) {
	if(End == null) End = -1;
	if(Start == null) Start = -1;
	this.end = -1;
	this.start = -1;
	if(FontColor != null) FontColor &= 16777215;
	if(BorderColor != null) BorderColor &= 16777215;
	this.format = new flash_text_TextFormat(null,null,FontColor,Bold,Italic);
	if(Start > -1) this.start = Start;
	if(End > -1) this.end = End;
	if(BorderColor == null) this.borderColor = 0; else this.borderColor = BorderColor;
};
$hxClasses["flixel.text.FlxTextFormat"] = flixel_text_FlxTextFormat;
flixel_text_FlxTextFormat.__name__ = ["flixel","text","FlxTextFormat"];
flixel_text_FlxTextFormat.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_text_FlxTextFormat.prototype = {
	borderColor: null
	,start: null
	,end: null
	,format: null
	,destroy: function() {
		this.format = null;
	}
	,__class__: flixel_text_FlxTextFormat
};
var flixel_text_pxText_PxBitmapFont = function() {
	this._maxHeight = 0;
	this._point = new flash_geom_Point();
	this._matrix = new flash_geom_Matrix();
	this._colorTransform = new flash_geom_ColorTransform();
	this._glyphs = [];
};
$hxClasses["flixel.text.pxText.PxBitmapFont"] = flixel_text_pxText_PxBitmapFont;
flixel_text_pxText_PxBitmapFont.__name__ = ["flixel","text","pxText","PxBitmapFont"];
flixel_text_pxText_PxBitmapFont.store = function(PxHandle,PxFont) {
	flixel_text_pxText_PxBitmapFont._storedFonts.set(PxHandle,PxFont);
};
flixel_text_pxText_PxBitmapFont.fetch = function(PxHandle) {
	var f = flixel_text_pxText_PxBitmapFont._storedFonts.get(PxHandle);
	return f;
};
flixel_text_pxText_PxBitmapFont.clearStorage = function() {
	var $it0 = flixel_text_pxText_PxBitmapFont._storedFonts.iterator();
	while( $it0.hasNext() ) {
		var font = $it0.next();
		font.dispose();
	}
	flixel_text_pxText_PxBitmapFont._storedFonts = new haxe_ds_StringMap();
};
flixel_text_pxText_PxBitmapFont.prototype = {
	_glyphs: null
	,_glyphString: null
	,_maxHeight: null
	,_matrix: null
	,_colorTransform: null
	,_point: null
	,_tileRects: null
	,_symbols: null
	,_region: null
	,cachedGraphics: null
	,loadPixelizer: function(PxBitmapData,PxLetters) {
		this.reset();
		this._glyphString = PxLetters;
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			this._glyphs.push(null);
		}
		if(PxBitmapData != null) {
			this._tileRects = [];
			var result = this.preparePixelizerBitmapData(PxBitmapData,this._tileRects);
			var key = flixel_FlxG.bitmap.getUniqueKey("font");
			this.setCachedGraphics(flixel_FlxG.bitmap.addWithSpaces(result,0,0,1,1,false,key));
			this._region = new flixel_system_layer_Region();
			this._region.width = this.cachedGraphics.bitmap.component.width;
			this._region.height = this.cachedGraphics.bitmap.component.height;
			var currRect;
			this.updateGlyphData();
		}
		return this;
	}
	,loadAngelCode: function(pBitmapData,pXMLData) {
		this.reset();
		if(pBitmapData != null && pXMLData != null) {
			this._symbols = [];
			var result = this.prepareAngelCodeBitmapData(pBitmapData,pXMLData,this._symbols);
			var key = flixel_FlxG.bitmap.getUniqueKey("font");
			this.setCachedGraphics(flixel_FlxG.bitmap.addWithSpaces(result,0,0,1,1,false,key));
			this.updateGlyphData();
		}
		return this;
	}
	,updateGlyphData: function(Tiles) {
		var rect;
		if(this._symbols != null) {
			this._glyphString = "";
			var point = new flash_geom_Point();
			var bd;
			var charString;
			var _g = 0;
			var _g1 = this._symbols;
			while(_g < _g1.length) {
				var symbol = _g1[_g];
				++_g;
				rect = new flash_geom_Rectangle();
				rect.x = symbol.x;
				rect.y = symbol.y;
				rect.width = symbol.width;
				rect.height = symbol.height;
				point.x = symbol.xoffset;
				point.y = symbol.yoffset;
				charString = String.fromCharCode(symbol.charCode);
				this._glyphString += charString;
				var xadvance = symbol.xadvance;
				var charWidth = xadvance;
				if(rect.width > xadvance) {
					charWidth = symbol.width;
					point.x = 0;
				}
				bd = null;
				if(charString != " " && charString != "") bd = new flash_display_BitmapData(charWidth,symbol.height + symbol.yoffset,true,0); else bd = new flash_display_BitmapData(charWidth,1,true,0);
				bd.copyPixels(this.cachedGraphics.bitmap,rect,point,null,null,true);
				this.setGlyph(symbol.charCode,bd);
			}
		} else if(this._tileRects != null) {
			var _g11 = 0;
			var _g2 = this._tileRects.length;
			while(_g11 < _g2) {
				var letterID = _g11++;
				rect = this._tileRects[letterID];
				var bd1 = new flash_display_BitmapData(rect.width | 0,rect.height | 0,true,0);
				bd1.copyPixels(this.cachedGraphics.bitmap,rect,flixel_text_pxText_PxBitmapFont.ZERO_POINT,null,null,true);
				this.setGlyph(HxOverrides.cca(this._glyphString,letterID),bd1);
			}
		}
	}
	,reset: function() {
		this.dispose();
		this._maxHeight = 0;
		this._glyphs = [];
		this._symbols = null;
		this._tileRects = null;
		this._glyphString = "";
	}
	,preparePixelizerBitmapData: function(PxBitmapData,PxRects) {
		var bgColor = PxBitmapData.getPixel(0,0);
		var cy = 0;
		var cx;
		while(cy < PxBitmapData.component.height) {
			var rowHeight = 0;
			cx = 0;
			while(cx < PxBitmapData.component.width) {
				if(Std["int"](PxBitmapData.getPixel(cx,cy)) != bgColor) {
					var gx = cx;
					var gy = cy;
					while(Std["int"](PxBitmapData.getPixel(gx,cy)) != bgColor) gx++;
					while(Std["int"](PxBitmapData.getPixel(cx,gy)) != bgColor) gy++;
					var gw = gx - cx;
					var gh = gy - cy;
					PxRects.push(new flash_geom_Rectangle(cx,cy,gw,gh));
					if(gh > rowHeight) rowHeight = gh;
					if(gh > this._maxHeight) this._maxHeight = gh;
					cx += gw;
				}
				cx++;
			}
			cy += rowHeight + 1;
		}
		PxBitmapData.floodFill(0,0,0);
		return PxBitmapData;
	}
	,prepareAngelCodeBitmapData: function(PxBitmapData,PxXMLData,PxSymbols) {
		var chars = null;
		var $it0 = PxXMLData.elements();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if((function($this) {
				var $r;
				if(node.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + node.nodeType);
				$r = node.nodeName;
				return $r;
			}(this)) == "font") {
				var $it1 = node.elements();
				while( $it1.hasNext() ) {
					var nodeChild = $it1.next();
					if((function($this) {
						var $r;
						if(nodeChild.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + nodeChild.nodeType);
						$r = nodeChild.nodeName;
						return $r;
					}(this)) == "chars") {
						chars = nodeChild;
						break;
					}
				}
			}
		}
		var symbol;
		var maxX = 0;
		var maxY = 0;
		if(chars != null) {
			var $it2 = chars.elements();
			while( $it2.hasNext() ) {
				var node1 = $it2.next();
				if((function($this) {
					var $r;
					if(node1.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + node1.nodeType);
					$r = node1.nodeName;
					return $r;
				}(this)) == "char") {
					symbol = new flixel_text_pxText__$PxBitmapFont_HelperSymbol();
					symbol.x = Std.parseInt(node1.get("x"));
					symbol.y = Std.parseInt(node1.get("y"));
					symbol.width = Std.parseInt(node1.get("width"));
					symbol.height = Std.parseInt(node1.get("height"));
					symbol.xoffset = Std.parseInt(node1.get("xoffset"));
					symbol.yoffset = Std.parseInt(node1.get("yoffset"));
					symbol.xadvance = Std.parseInt(node1.get("xadvance"));
					symbol.charCode = Std.parseInt(node1.get("id"));
					PxSymbols.push(symbol);
					maxX = symbol.x + symbol.width;
					maxY = symbol.y + symbol.height;
				}
			}
		}
		return PxBitmapData;
	}
	,getPreparedGlyphs: function(PxScale,PxColor,PxUseColorTransform) {
		if(PxUseColorTransform == null) PxUseColorTransform = true;
		var result = [];
		this._matrix.identity();
		this._matrix.scale(PxScale,PxScale);
		var colorMultiplier = 0.00392156862745098;
		this._colorTransform.redOffset = 0;
		this._colorTransform.greenOffset = 0;
		this._colorTransform.blueOffset = 0;
		this._colorTransform.redMultiplier = (PxColor >> 16) * colorMultiplier;
		this._colorTransform.greenMultiplier = (PxColor >> 8 & 255) * colorMultiplier;
		this._colorTransform.blueMultiplier = (PxColor & 255) * colorMultiplier;
		var glyph;
		var preparedGlyph;
		var _g1 = 0;
		var _g = this._glyphs.length;
		while(_g1 < _g) {
			var i = _g1++;
			glyph = this._glyphs[i];
			var bdWidth;
			var bdHeight;
			if(glyph != null) {
				if(PxScale > 0) {
					bdWidth = Math.ceil(glyph.component.width * PxScale);
					bdHeight = Math.ceil(glyph.component.height * PxScale);
				} else {
					bdWidth = 1;
					bdHeight = 1;
				}
				preparedGlyph = new flash_display_BitmapData(bdWidth,bdHeight,true,0);
				if(PxUseColorTransform) preparedGlyph.draw(glyph,this._matrix,this._colorTransform); else preparedGlyph.draw(glyph,this._matrix);
				result[i] = preparedGlyph;
			}
		}
		return result;
	}
	,dispose: function() {
		var bd;
		var _g1 = 0;
		var _g = this._glyphs.length;
		while(_g1 < _g) {
			var i = _g1++;
			bd = this._glyphs[i];
			if(bd != null) this._glyphs[i].dispose();
		}
		this._symbols = null;
		this._tileRects = null;
		this.setCachedGraphics(null);
		this._region = null;
		this._glyphs = null;
	}
	,getFontData: function() {
		var output = "";
		var _g1 = 0;
		var _g = this._glyphString.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(this._glyphString,i);
			var glyph = this._glyphs[charCode];
			output += HxOverrides.substr(this._glyphString,i,1);
			output += glyph.component.width;
			output += glyph.component.height;
			var _g3 = 0;
			var _g2 = glyph.component.height;
			while(_g3 < _g2) {
				var py = _g3++;
				var _g5 = 0;
				var _g4 = glyph.component.width;
				while(_g5 < _g4) {
					var px = _g5++;
					if(glyph.getPixel32(px,py) != 0) output += "1"; else output += "0";
				}
			}
		}
		return output;
	}
	,setGlyph: function(PxCharID,PxBitmapData) {
		if(this._glyphs[PxCharID] != null) this._glyphs[PxCharID].dispose();
		this._glyphs[PxCharID] = PxBitmapData;
		if(PxBitmapData.component.height > this._maxHeight) this._maxHeight = PxBitmapData.component.height;
	}
	,render: function(PxBitmapData,PxFontData,PxText,PxColor,PxOffsetX,PxOffsetY,PxLetterSpacing) {
		this._point.x = PxOffsetX;
		this._point.y = PxOffsetY;
		var glyph;
		var _g1 = 0;
		var _g = PxText.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(PxText,i);
			glyph = PxFontData[charCode];
			if(glyph != null) {
				PxBitmapData.copyPixels(glyph,glyph.__rect.clone(),this._point,null,null,true);
				this._point.x += glyph.component.width + PxLetterSpacing;
			}
		}
	}
	,getTextWidth: function(PxText,PxLetterSpacing,PxFontScale) {
		if(PxFontScale == null) PxFontScale = 1;
		if(PxLetterSpacing == null) PxLetterSpacing = 0;
		var w = 0;
		var textLength = PxText.length;
		var _g1 = 0;
		var _g = textLength;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(PxText,i);
			var glyph = this._glyphs[charCode];
			if(glyph != null) w += glyph.component.width;
		}
		w = Math.round(w * PxFontScale);
		if(textLength > 1) w += (textLength - 1) * PxLetterSpacing;
		return w;
	}
	,getFontHeight: function() {
		return this._maxHeight;
	}
	,get_numLetters: function() {
		return this._glyphs.length;
	}
	,setCachedGraphics: function(value) {
		if(this.cachedGraphics != null && this.cachedGraphics != value) {
			var _g = this.cachedGraphics;
			var _g1 = _g.useCount;
			_g.set_useCount(_g1 - 1);
			_g1;
		}
		if(this.cachedGraphics != value && value != null) {
			var _g2 = value;
			var _g11 = _g2.useCount;
			_g2.set_useCount(_g11 + 1);
			_g11;
			value.persist = true;
		}
		this.cachedGraphics = value;
	}
	,__class__: flixel_text_pxText_PxBitmapFont
	,__properties__: {get_numLetters:"get_numLetters"}
};
var flixel_text_pxText__$PxBitmapFont_HelperSymbol = function() {
};
$hxClasses["flixel.text.pxText._PxBitmapFont.HelperSymbol"] = flixel_text_pxText__$PxBitmapFont_HelperSymbol;
flixel_text_pxText__$PxBitmapFont_HelperSymbol.__name__ = ["flixel","text","pxText","_PxBitmapFont","HelperSymbol"];
flixel_text_pxText__$PxBitmapFont_HelperSymbol.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,xoffset: null
	,yoffset: null
	,xadvance: null
	,charCode: null
	,__class__: flixel_text_pxText__$PxBitmapFont_HelperSymbol
};
var flixel_tile_FlxTile = function(Tilemap,Index,Width,Height,Visible,AllowCollisions) {
	this.mapIndex = 0;
	this.callbackFunction = null;
	flixel_FlxObject.call(this,0,0,Width,Height);
	this.set_immovable(true);
	this.set_moves(false);
	this.filter = null;
	this.tilemap = Tilemap;
	this.index = Index;
	this.set_visible(Visible);
	this.allowCollisions = AllowCollisions;
};
$hxClasses["flixel.tile.FlxTile"] = flixel_tile_FlxTile;
flixel_tile_FlxTile.__name__ = ["flixel","tile","FlxTile"];
flixel_tile_FlxTile.__super__ = flixel_FlxObject;
flixel_tile_FlxTile.prototype = $extend(flixel_FlxObject.prototype,{
	callbackFunction: null
	,filter: null
	,tilemap: null
	,index: null
	,mapIndex: null
	,destroy: function() {
		this.callbackFunction = null;
		this.tilemap = null;
		flixel_FlxObject.prototype.destroy.call(this);
	}
	,__class__: flixel_tile_FlxTile
});
var flixel_tile_FlxTileblock = function(X,Y,Width,Height) {
	flixel_FlxSprite.call(this,X,Y);
	this.makeGraphic(Width,Height,0,true);
	this.set_active(false);
	this.set_immovable(true);
	this.set_moves(false);
};
$hxClasses["flixel.tile.FlxTileblock"] = flixel_tile_FlxTileblock;
flixel_tile_FlxTileblock.__name__ = ["flixel","tile","FlxTileblock"];
flixel_tile_FlxTileblock.__super__ = flixel_FlxSprite;
flixel_tile_FlxTileblock.prototype = $extend(flixel_FlxSprite.prototype,{
	loadTiles: function(TileGraphic,TileWidth,TileHeight,Empties) {
		if(Empties == null) Empties = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		if(TileGraphic == null) return this;
		var sprite = new flixel_FlxSprite().loadGraphic(TileGraphic,true,TileWidth,TileHeight);
		var spriteWidth = Std["int"](sprite.get_width());
		var spriteHeight = Std["int"](sprite.get_height());
		var total = sprite.frames + Empties;
		var regen = false;
		if(this.get_width() % sprite.get_width() != 0) {
			this.set_width(Std["int"](this.get_width() / spriteWidth + 1) * spriteWidth);
			regen = true;
		}
		if(this.get_height() % sprite.get_height() != 0) {
			this.set_height(Std["int"](this.get_height() / spriteHeight + 1) * spriteHeight);
			regen = true;
		}
		if(regen) this.makeGraphic(Std["int"](this.get_width()),Std["int"](this.get_height()),0,true); else flixel_util_FlxSpriteUtil.fill(this,0);
		var row = 0;
		var column;
		var destinationX;
		var destinationY = 0;
		var widthInTiles = Std["int"](this.get_width() / spriteWidth);
		var heightInTiles = Std["int"](this.get_height() / spriteHeight);
		while(row < heightInTiles) {
			destinationX = 0;
			column = 0;
			while(column < widthInTiles) {
				if((flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * total > Empties) {
					sprite.animation.randomFrame();
					if(sprite.dirty) {
						sprite.dirty = true;
						sprite.calcFrame();
					}
					this.stamp(sprite,destinationX,destinationY);
				}
				destinationX += spriteWidth;
				column++;
			}
			destinationY += spriteHeight;
			row++;
		}
		sprite.destroy();
		this.dirty = true;
		return this;
	}
	,__class__: flixel_tile_FlxTileblock
});
var flixel_tile_GraphicAuto = function(width,height,transparent,color) {
	var o = flixel_tile_GraphicAuto.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.tile.GraphicAuto"] = flixel_tile_GraphicAuto;
flixel_tile_GraphicAuto.__name__ = ["flixel","tile","GraphicAuto"];
flixel_tile_GraphicAuto.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_tile_GraphicAuto.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAICAMAAAAGAwdMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRFAAAAXl5eAAAAAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////QkqfIwAAAAN0Uk5T//8A18oNQQAAAG1JREFUeNrsk7ESwCAIQ1/8/492UDyBVty61CUXEgU5oAFAQwBicgaHSsfZfPBOlyQJSzC5lrfQjVoC+UCpbw/vSMCDns1PvzzofwHfF2BD5lB+2N4LSPZwygJszQKGdas6QLp224EOAAD//wMA9PcA8aOpcyUAAAAASUVORK5CYII=";
};
flixel_tile_GraphicAuto.__super__ = flash_display_BitmapData;
flixel_tile_GraphicAuto.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_tile_GraphicAuto
});
var flixel_tile_GraphicAutoAlt = function(width,height,transparent,color) {
	var o = flixel_tile_GraphicAutoAlt.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.tile.GraphicAutoAlt"] = flixel_tile_GraphicAutoAlt;
flixel_tile_GraphicAutoAlt.__name__ = ["flixel","tile","GraphicAutoAlt"];
flixel_tile_GraphicAutoAlt.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_tile_GraphicAutoAlt.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAICAMAAAAGAwdMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRFAAAAXl5eAAAAAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////QkqfIwAAAAN0Uk5T//8A18oNQQAAAHZJREFUeNrsU0kSwCAISxj//2TpQRhbNdpbL/UCYQkOCwwAgBAAOMgEbNKw8m+NN/7ZX2qz1QMFPZSIh4tKme9PXJW/NLWXXRO70PeRHWt+w8fv/0DJ+XCaDl9MfF5dHnZCtcDGTFvWoD7TbUcpb+wCAAD//wMAyyASK2Aa6EwAAAAASUVORK5CYII=";
};
flixel_tile_GraphicAutoAlt.__super__ = flash_display_BitmapData;
flixel_tile_GraphicAutoAlt.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_tile_GraphicAutoAlt
});
var flixel_tile_FlxTilemapBuffer = function(TileWidth,TileHeight,WidthInTiles,HeightInTiles,Camera,ScaleX,ScaleY) {
	if(ScaleY == null) ScaleY = 1.0;
	if(ScaleX == null) ScaleX = 1.0;
	this.pixelPerfectRender = true;
	this.columns = 0;
	this.rows = 0;
	this.dirty = false;
	this.height = 0;
	this.width = 0;
	this.y = 0;
	this.x = 0;
	this.updateColumns(TileWidth,WidthInTiles,ScaleX,Camera);
	this.updateRows(TileHeight,HeightInTiles,ScaleY,Camera);
	this.pixels = new flash_display_BitmapData(this.columns * TileWidth | 0,this.rows * TileHeight | 0,true,0);
	this._flashRect = new flash_geom_Rectangle(0,0,this.pixels.component.width,this.pixels.component.height);
	this._matrix = new flash_geom_Matrix();
	this.dirty = true;
};
$hxClasses["flixel.tile.FlxTilemapBuffer"] = flixel_tile_FlxTilemapBuffer;
flixel_tile_FlxTilemapBuffer.__name__ = ["flixel","tile","FlxTilemapBuffer"];
flixel_tile_FlxTilemapBuffer.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,dirty: null
	,rows: null
	,columns: null
	,pixelPerfectRender: null
	,pixels: null
	,_flashRect: null
	,_matrix: null
	,destroy: function() {
		this.pixels = null;
		this._matrix = null;
	}
	,fill: function(Color) {
		if(Color == null) Color = 0;
		this.pixels.fillRect(this._flashRect,Color);
	}
	,draw: function(Camera,FlashPoint,ScaleX,ScaleY) {
		if(ScaleY == null) ScaleY = 1.0;
		if(ScaleX == null) ScaleX = 1.0;
		if(this.pixelPerfectRender) {
			FlashPoint.x = Math.floor(FlashPoint.x);
			FlashPoint.y = Math.floor(FlashPoint.y);
		}
		if(this.pixelPerfectRender && (ScaleX == 1.0 && ScaleY == 1.0)) Camera.buffer.copyPixels(this.pixels,this._flashRect,FlashPoint,null,null,true); else {
			this._matrix.identity();
			this._matrix.scale(ScaleX,ScaleY);
			this._matrix.translate(FlashPoint.x,FlashPoint.y);
			Camera.buffer.draw(this.pixels,this._matrix);
		}
	}
	,updateColumns: function(TileWidth,WidthInTiles,ScaleX,Camera) {
		if(ScaleX == null) ScaleX = 1.0;
		if(WidthInTiles < 0) WidthInTiles = 0;
		if(Camera == null) Camera = flixel_FlxG.camera;
		this.columns = Math.ceil(Camera.width / (TileWidth * ScaleX)) + 1;
		if(this.columns > WidthInTiles) this.columns = WidthInTiles;
		this.width = this.columns * TileWidth * ScaleX | 0;
	}
	,updateRows: function(TileHeight,HeightInTiles,ScaleY,Camera) {
		if(ScaleY == null) ScaleY = 1.0;
		if(HeightInTiles < 0) HeightInTiles = 0;
		if(Camera == null) Camera = flixel_FlxG.camera;
		this.rows = Math.ceil(Camera.height / (TileHeight * ScaleY)) + 1;
		if(this.rows > HeightInTiles) this.rows = HeightInTiles;
		this.height = this.rows * TileHeight * ScaleY | 0;
	}
	,__class__: flixel_tile_FlxTilemapBuffer
};
var flixel_tile_FlxTilemap = function() {
	this._startingIndex = 0;
	this._scaledTileHeight = 0;
	this._scaledTileWidth = 0;
	this._tileHeight = 0;
	this._tileWidth = 0;
	this.tileScaleHack = 1.01;
	this.totalTiles = 0;
	this.heightInTiles = 0;
	this.widthInTiles = 0;
	this.auto = 0;
	flixel_FlxObject.call(this);
	this.collisionType = 3;
	this._buffers = [];
	this._flashPoint = new flash_geom_Point();
	this.set_immovable(true);
	this.set_moves(false);
	this.scale = new flixel_util_FlxCallbackPoint($bind(this,this.setScaleXCallback),$bind(this,this.setScaleYCallback),$bind(this,this.setScaleXYCallback));
	this.scale.set(1,1);
	flixel_FlxG.signals.gameResized.add($bind(this,this.onGameResize));
};
$hxClasses["flixel.tile.FlxTilemap"] = flixel_tile_FlxTilemap;
flixel_tile_FlxTilemap.__name__ = ["flixel","tile","FlxTilemap"];
flixel_tile_FlxTilemap.__super__ = flixel_FlxObject;
flixel_tile_FlxTilemap.prototype = $extend(flixel_FlxObject.prototype,{
	auto: null
	,widthInTiles: null
	,heightInTiles: null
	,totalTiles: null
	,tileScaleHack: null
	,customTileRemap: null
	,scale: null
	,region: null
	,framesData: null
	,cachedGraphics: null
	,_randomIndices: null
	,_randomChoices: null
	,_randomLambda: null
	,_flashPoint: null
	,_flashRect: null
	,_buffers: null
	,_data: null
	,_rects: null
	,_tileWidth: null
	,_tileHeight: null
	,_scaledTileWidth: null
	,_scaledTileHeight: null
	,_tileObjects: null
	,_startingIndex: null
	,destroy: function() {
		this._flashPoint = null;
		this._flashRect = null;
		var i = 0;
		var l;
		if(this._tileObjects != null) {
			l = this._tileObjects.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._tileObjects[i1].destroy();
			}
			this._tileObjects = null;
		}
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g1 = 0;
			while(_g1 < l) {
				var i2 = _g1++;
				this._buffers[i2].destroy();
			}
			this._buffers = null;
		}
		this._data = null;
		this._rects = null;
		this.framesData = null;
		this.set_cachedGraphics(null);
		this.region = null;
		this.scale = flixel_util_FlxDestroyUtil.destroy(this.scale);
		flixel_FlxG.signals.gameResized.remove($bind(this,this.onGameResize));
		flixel_FlxObject.prototype.destroy.call(this);
	}
	,loadMap: function(MapData,TileGraphic,TileWidth,TileHeight,AutoTile,StartingIndex,DrawIndex,CollideIndex) {
		if(CollideIndex == null) CollideIndex = 1;
		if(DrawIndex == null) DrawIndex = 1;
		if(StartingIndex == null) StartingIndex = 0;
		if(AutoTile == null) AutoTile = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		this.auto = AutoTile;
		if(StartingIndex <= 0) this._startingIndex = 0; else this._startingIndex = StartingIndex;
		if(typeof(MapData) == "string") {
			this._data = [];
			var columns;
			var rows = MapData.split("\n");
			this.heightInTiles = rows.length;
			this.widthInTiles = 0;
			var row = 0;
			var column;
			while(row < this.heightInTiles) {
				columns = rows[row++].split(",");
				if(columns.length < 1) {
					this.heightInTiles = this.heightInTiles - 1;
					continue;
				}
				if(this.widthInTiles == 0) this.widthInTiles = columns.length;
				column = 0;
				while(column < this.widthInTiles) {
					var curTile = Std.parseInt(columns[column]);
					this._data.push(curTile);
					column++;
				}
			}
		} else if((MapData instanceof Array) && MapData.__enum__ == null) {
			this._data = MapData;
			this._data = this._data.slice();
		} else throw new js__$Boot_HaxeError("Unexpected MapData format '" + Std.string(Type["typeof"](MapData)) + "' passed into loadMap. Map data must be CSV string or Array<Int>.");
		var i;
		this.totalTiles = this._data.length;
		if(this.auto > 0) {
			this._startingIndex = 1;
			DrawIndex = 1;
			CollideIndex = 1;
			i = 0;
			while(i < this.totalTiles) this.autoTile(i++);
		}
		if(this.customTileRemap != null) {
			i = 0;
			while(i < this.totalTiles) {
				var old_index = this._data[i];
				var new_index = old_index;
				if(old_index < this.customTileRemap.length) new_index = this.customTileRemap[old_index];
				this._data[i] = new_index;
				i++;
			}
		}
		if(this._randomIndices != null) {
			var randLambda;
			if(this._randomLambda != null) randLambda = this._randomLambda; else randLambda = flixel_util_FlxRandom["float"];
			i = 0;
			while(i < this.totalTiles) {
				var old_index1 = this._data[i];
				var j = 0;
				var new_index1 = old_index1;
				var _g = 0;
				var _g1 = this._randomIndices;
				while(_g < _g1.length) {
					var rand = _g1[_g];
					++_g;
					if(old_index1 == rand) {
						var k = Std["int"](randLambda() * this._randomChoices[j].length);
						new_index1 = this._randomChoices[j][k];
					}
					j++;
				}
				this._data[i] = new_index1;
				i++;
			}
		}
		this.set_cachedGraphics(flixel_FlxG.bitmap.addWithSpaces(TileGraphic,0,0,1,1,false,null));
		this._tileWidth = TileWidth;
		if(this._tileWidth <= 0) this._tileWidth = this.cachedGraphics.bitmap.component.height;
		this._tileHeight = TileHeight;
		if(this._tileHeight <= 0) this._tileHeight = this._tileWidth;
		if(!js_Boot.__instanceof(TileGraphic,flixel_util_loaders_TextureRegion)) {
			this.region = new flixel_system_layer_Region(0,0,this._tileWidth,this._tileHeight);
			this.region.width = (this.cachedGraphics.bitmap.component.width / this._tileWidth | 0) * this._tileWidth;
			this.region.height = (this.cachedGraphics.bitmap.component.height / this._tileHeight | 0) * this._tileHeight;
		} else {
			var spriteRegion = TileGraphic;
			this.region = spriteRegion.region.clone();
			if(this.region.tileWidth > 0) this._tileWidth = this.region.tileWidth; else this.region.tileWidth = this._tileWidth;
			if(this.region.tileHeight > 0) this._tileHeight = this.region.tileWidth; else this.region.tileHeight = this._tileHeight;
		}
		this._tileObjects = [];
		var length = this.region.get_numTiles();
		length += this._startingIndex;
		var _g2 = 0;
		while(_g2 < length) {
			var i1 = _g2++;
			this._tileObjects[i1] = new flixel_tile_FlxTile(this,i1,this._tileWidth,this._tileHeight,i1 >= DrawIndex,i1 >= CollideIndex?this.allowCollisions:0);
		}
		this._scaledTileWidth = this._tileWidth * this.scale.x;
		this._scaledTileHeight = this._tileHeight * this.scale.y;
		this.set_width(this.widthInTiles * this._scaledTileWidth);
		this.set_height(this.heightInTiles * this._scaledTileHeight);
		this._rects = [];
		flixel_util_FlxArrayUtil.setLength_flash_geom_Rectangle(this._rects,this.totalTiles);
		i = 0;
		while(i < this.totalTiles) this.updateTile(i++);
		return this;
	}
	,setCustomTileMappings: function(mappings,randomIndices,randomChoices,randomLambda) {
		this.customTileRemap = mappings;
		this._randomIndices = randomIndices;
		this._randomChoices = randomChoices;
		this._randomLambda = randomLambda;
		if(this._randomIndices != null && (this._randomChoices == null || this._randomChoices.length == 0)) throw new js__$Boot_HaxeError("You must provide valid 'randomChoices' if you wish to randomize tilemap indicies, please read documentation of 'setCustomTileMappings' function.");
	}
	,draw: function() {
		var cameras = this.get_cameras();
		var camera;
		var buffer;
		var i = 0;
		var l = cameras.length;
		while(i < l) {
			camera = cameras[i];
			if(!camera.visible || !camera.exists) continue;
			if(this._buffers[i] == null) this._buffers[i] = this.createBuffer(camera);
			buffer = this._buffers[i++];
			buffer.dirty = true;
			if(!buffer.dirty) {
				this._point.set_x(this.x - camera.scroll.x * this.scrollFactor.x + buffer.x);
				this._point.set_y(this.y - camera.scroll.y * this.scrollFactor.y + buffer.y);
				buffer.dirty = this._point.x > 0 || this._point.y > 0 || this._point.x + buffer.width < camera.width || this._point.y + buffer.height < camera.height;
			}
			if(buffer.dirty) {
				this.drawTilemap(buffer,camera);
				buffer.dirty = false;
			}
			this._flashPoint.x = this.x - camera.scroll.x * this.scrollFactor.x + buffer.x;
			this._flashPoint.y = this.y - camera.scroll.y * this.scrollFactor.y + buffer.y;
			buffer.draw(camera,this._flashPoint,this.scale.x,this.scale.y);
		}
	}
	,getData: function(Simple) {
		if(Simple == null) Simple = false;
		if(!Simple) return this._data;
		var i = 0;
		var l = this._data.length;
		var data = [];
		flixel_util_FlxArrayUtil.setLength_Int(data,l);
		while(i < l) {
			if(this._tileObjects[this._data[i]].allowCollisions > 0) data[i] = 1; else data[i] = 0;
			i++;
		}
		return data;
	}
	,setDirty: function(Dirty) {
		if(Dirty == null) Dirty = true;
		var _g = 0;
		var _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer = _g1[_g];
			++_g;
			buffer.dirty = true;
		}
	}
	,findPath: function(Start,End,Simplify,RaySimplify,WideDiagonal) {
		if(WideDiagonal == null) WideDiagonal = true;
		if(RaySimplify == null) RaySimplify = false;
		if(Simplify == null) Simplify = true;
		var startIndex = ((Start.y - this.y) / this._scaledTileHeight | 0) * this.widthInTiles + ((Start.x - this.x) / this._scaledTileWidth | 0);
		var endIndex = ((End.y - this.y) / this._scaledTileHeight | 0) * this.widthInTiles + ((End.x - this.x) / this._scaledTileWidth | 0);
		if(this._tileObjects[this._data[startIndex]].allowCollisions > 0 || this._tileObjects[this._data[endIndex]].allowCollisions > 0) return null;
		var distances = this.computePathDistance(startIndex,endIndex,WideDiagonal);
		if(distances == null) return null;
		var points = [];
		this.walkPath(distances,endIndex,points);
		var node;
		node = points[points.length - 1];
		node.set_x(Start.x);
		node.set_y(Start.y);
		node = points[0];
		node.set_x(End.x);
		node.set_y(End.y);
		if(Simplify) this.simplifyPath(points);
		if(RaySimplify) this.raySimplifyPath(points);
		var path = [];
		var i = points.length - 1;
		while(i >= 0) {
			node = points[i--];
			if(node != null) path.push(node);
		}
		return path;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel_group_FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel_group_FlxGroup.overlaps($bind(this,this.tilemapOverlapsCallback),group,0,0,InScreenSpace,Camera); else if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3?this.overlapsWithCallback(js_Boot.__cast(ObjectOrGroup , flixel_FlxObject)):this.overlaps(ObjectOrGroup,false,null)) return true;
		return false;
	}
	,tilemapOverlapsCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3) return this.overlapsWithCallback(js_Boot.__cast(ObjectOrGroup , flixel_FlxObject)); else return this.overlaps(ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel_group_FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel_group_FlxGroup.overlaps($bind(this,this.tilemapOverlapsAtCallback),group,X,Y,InScreenSpace,Camera); else if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3?this.overlapsWithCallback(js_Boot.__cast(ObjectOrGroup , flixel_FlxObject),null,false,this._point.set(X,Y)):this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera)) return true;
		return false;
	}
	,tilemapOverlapsAtCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3) return this.overlapsWithCallback(js_Boot.__cast(ObjectOrGroup , flixel_FlxObject),null,false,this._point.set(X,Y)); else return this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsWithCallback: function(Object,Callback,FlipCallbackParams,Position) {
		if(FlipCallbackParams == null) FlipCallbackParams = false;
		var results = false;
		var X = this.x;
		var Y = this.y;
		if(Position != null) {
			X = Position.x;
			Y = Position.y;
		}
		var selectionX = Math.floor((Object.x - X) / this._scaledTileWidth);
		var selectionY = Math.floor((Object.y - Y) / this._scaledTileHeight);
		var selectionWidth = selectionX + Math.ceil(Object.get_width() / this._scaledTileWidth) + 1;
		var selectionHeight = selectionY + Math.ceil(Object.get_height() / this._scaledTileHeight) + 1;
		selectionWidth = Std["int"](flixel_util_FlxMath.bound(selectionWidth,0,this.widthInTiles));
		selectionHeight = Std["int"](flixel_util_FlxMath.bound(selectionHeight,0,this.heightInTiles));
		var rowStart = selectionY * this.widthInTiles;
		var row = selectionY;
		var column;
		var tile;
		var overlapFound;
		var deltaX = X - this.last.x;
		var deltaY = Y - this.last.y;
		while(row < selectionHeight) {
			column = selectionX;
			while(column < selectionWidth) {
				var index = rowStart + column;
				if(index < 0 || index > this._data.length - 1) {
					column++;
					continue;
				}
				var dataIndex = this._data[index];
				if(dataIndex < 0) {
					column++;
					continue;
				}
				tile = this._tileObjects[dataIndex];
				tile.set_width(this._scaledTileWidth);
				tile.set_height(this._scaledTileHeight);
				tile.set_x(X + column * tile.get_width());
				tile.set_y(Y + row * tile.get_height());
				tile.last.set_x(tile.x - deltaX);
				tile.last.set_y(tile.y - deltaY);
				overlapFound = Object.x + Object.get_width() > tile.x && Object.x < tile.x + tile.get_width() && Object.y + Object.get_height() > tile.y && Object.y < tile.y + tile.get_height();
				if(tile.allowCollisions != 0) {
					if(Callback != null) {
						if(FlipCallbackParams) overlapFound = Callback(Object,tile); else overlapFound = Callback(tile,Object);
					}
				}
				if(overlapFound) {
					if(tile.callbackFunction != null && (tile.filter == null || js_Boot.__instanceof(Object,tile.filter))) {
						tile.mapIndex = rowStart + column;
						tile.callbackFunction(tile,Object);
					}
					if(tile.allowCollisions != 0) results = true;
				}
				column++;
			}
			rowStart += this.widthInTiles;
			row++;
		}
		return results;
	}
	,overlapsPoint: function(WorldPoint,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return this._tileObjects[this._data[Math.floor(Math.floor((WorldPoint.y - this.y) / this._scaledTileHeight) * this.widthInTiles + (WorldPoint.x - this.x) / this._scaledTileWidth)]].allowCollisions > 0;
		if(Camera == null) Camera = flixel_FlxG.camera;
		WorldPoint.set_x(WorldPoint.x - Camera.scroll.x);
		WorldPoint.set_y(WorldPoint.y - Camera.scroll.y);
		this.getScreenXY(this._point,Camera);
		var result = this._tileObjects[this._data[((WorldPoint.y - WorldPoint.y) / this._scaledTileHeight | 0) * this.widthInTiles + (WorldPoint.x - WorldPoint.x) / this._scaledTileWidth | 0]].allowCollisions > 0;
		if(WorldPoint._weak) WorldPoint.put();
		return result;
	}
	,getTile: function(X,Y) {
		return this._data[Y * this.widthInTiles + X];
	}
	,getTileByIndex: function(Index) {
		return this._data[Index];
	}
	,getTileCollisions: function(Index) {
		return this._tileObjects[Index].allowCollisions;
	}
	,getTileInstances: function(Index) {
		var array = null;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				if(array == null) array = [];
				array.push(i);
			}
			i++;
		}
		return array;
	}
	,getTileCoords: function(Index,Midpoint) {
		if(Midpoint == null) Midpoint = true;
		var array = null;
		var point;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				point = flixel_util_FlxPoint.get(this.x + (i % this.widthInTiles | 0) * this._scaledTileWidth,this.y + (i / this.widthInTiles | 0) * this._scaledTileHeight);
				if(Midpoint) {
					var _g = point;
					_g.set_x(_g.x + this._scaledTileWidth * 0.5);
					var _g1 = point;
					_g1.set_y(_g1.y + this._scaledTileHeight * 0.5);
				}
				if(array == null) array = [];
				array.push(point);
			}
			i++;
		}
		return array;
	}
	,setTile: function(X,Y,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(X >= this.widthInTiles || Y >= this.heightInTiles) return false;
		return this.setTileByIndex(Y * this.widthInTiles + X,Tile,UpdateGraphics);
	}
	,setTileByIndex: function(Index,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(Index >= this._data.length) return false;
		var ok = true;
		this._data[Index] = Tile;
		if(!UpdateGraphics) return ok;
		this.setDirty();
		if(this.auto == 0) {
			this.updateTile(Index);
			return ok;
		}
		var i;
		var row = (Index / this.widthInTiles | 0) - 1;
		var rowLength = row + 3;
		var column = Index % this.widthInTiles - 1;
		var columnHeight = column + 3;
		while(row < rowLength) {
			column = columnHeight - 3;
			while(column < columnHeight) {
				if(row >= 0 && row < this.heightInTiles && column >= 0 && column < this.widthInTiles) {
					i = row * this.widthInTiles + column;
					this.autoTile(i);
					this.updateTile(i);
				}
				column++;
			}
			row++;
		}
		return ok;
	}
	,setTileProperties: function(Tile,AllowCollisions,Callback,CallbackFilter,Range) {
		if(Range == null) Range = 1;
		if(AllowCollisions == null) AllowCollisions = 4369;
		if(Range <= 0) Range = 1;
		var tile;
		var i = Tile;
		var l = Tile + Range;
		while(i < l) {
			tile = this._tileObjects[i++];
			tile.allowCollisions = AllowCollisions;
			tile.callbackFunction = Callback;
			tile.filter = CallbackFilter;
		}
	}
	,follow: function(Camera,Border,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = true;
		if(Border == null) Border = 0;
		if(Camera == null) Camera = flixel_FlxG.camera;
		Camera.setBounds(this.x + Border * this._scaledTileWidth,this.y + Border * this._scaledTileHeight,this.get_width() - Border * this._scaledTileWidth * 2,this.get_height() - Border * this._scaledTileHeight * 2,UpdateWorld);
	}
	,getBounds: function(Bounds) {
		if(Bounds == null) Bounds = flixel_util_FlxRect.get(null,null,null,null);
		return Bounds.set(this.x,this.y,this.get_width(),this.get_height());
	}
	,ray: function(Start,End,Result,Resolution) {
		if(Resolution == null) Resolution = 1;
		var step = this._scaledTileWidth;
		if(this._scaledTileHeight < this._scaledTileWidth) step = this._scaledTileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		if(Start._weak) Start.put();
		if(End._weak) End.put();
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.get_width() || curY < 0 || curY > this.get_height()) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._scaledTileWidth);
			tileY = Math.floor(curY / this._scaledTileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._scaledTileWidth | 0;
				tileY *= this._scaledTileHeight | 0;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._scaledTileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._scaledTileHeight) {
					if(Result == null) Result = flixel_util_FlxPoint.get(null,null);
					Result.set_x(rx);
					Result.set_y(ry);
					return false;
				}
				q = tileY;
				if(deltaY < 0) q += this._scaledTileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._scaledTileWidth) {
					if(Result == null) Result = flixel_util_FlxPoint.get(null,null);
					Result.set_x(rx);
					Result.set_y(ry);
					return false;
				}
				return true;
			}
			i++;
		}
		return true;
	}
	,updateFrameData: function() {
		if(this.cachedGraphics != null && this._tileWidth >= 1 && this._tileHeight >= 1) {
			this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region,new flash_geom_Point(0,0));
			var i = 0;
			while(i < this.totalTiles) this.updateTile(i++);
		}
	}
	,tileToFlxSprite: function(X,Y,NewTile) {
		if(NewTile == null) NewTile = 0;
		var rowIndex = X + Y * this.widthInTiles;
		var rect = null;
		rect = this._rects[rowIndex];
		var pt = new flash_geom_Point(0,0);
		var tileSprite = new flixel_FlxSprite();
		tileSprite.makeGraphic(this._tileWidth,this._tileHeight,0,true);
		tileSprite.set_x(X * this._tileWidth + this.x);
		tileSprite.set_y(Y * this._tileHeight + this.y);
		tileSprite.scale.set_x(this.scale.x);
		tileSprite.scale.set_y(this.scale.y);
		if(rect != null) tileSprite.get_pixels().copyPixels(this.cachedGraphics.bitmap,rect,pt);
		tileSprite.dirty = true;
		tileSprite.updateFrameData();
		if(NewTile >= 0) this.setTile(X,Y,NewTile);
		return tileSprite;
	}
	,updateBuffers: function() {
		var i = 0;
		var l;
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._buffers = [];
	}
	,drawTilemap: function(Buffer,Camera) {
		Buffer.fill();
		this._point.set_x(Camera.scroll.x * this.scrollFactor.x - this.x);
		this._point.set_y(Camera.scroll.y * this.scrollFactor.y - this.y);
		var screenXInTiles = Math.floor(this._point.x / this._scaledTileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._scaledTileHeight);
		var screenRows = Buffer.rows;
		var screenColumns = Buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				this._flashRect = this._rects[columnIndex];
				if(this._flashRect != null) Buffer.pixels.copyPixels(this.cachedGraphics.bitmap,this._flashRect,this._flashPoint,null,null,true);
				this._flashPoint.x += this._tileWidth;
				column++;
				columnIndex++;
			}
			this._flashPoint.y += this._tileHeight;
			rowIndex += this.widthInTiles;
			row++;
		}
		Buffer.x = screenXInTiles * this._scaledTileWidth;
		Buffer.y = screenYInTiles * this._scaledTileHeight;
	}
	,simplifyPath: function(Points) {
		var deltaPrevious;
		var deltaNext;
		var last = Points[0];
		var node;
		var i = 1;
		var l = Points.length - 1;
		while(i < l) {
			node = Points[i];
			deltaPrevious = (node.x - last.x) / (node.y - last.y);
			deltaNext = (node.x - Points[i + 1].x) / (node.y - Points[i + 1].y);
			if(last.x == Points[i + 1].x || last.y == Points[i + 1].y || deltaPrevious == deltaNext) Points[i] = null; else last = node;
			i++;
		}
	}
	,raySimplifyPath: function(Points) {
		var source = Points[0];
		var lastIndex = -1;
		var node;
		var i = 1;
		var l = Points.length;
		while(i < l) {
			node = Points[i++];
			if(node == null) continue;
			if(this.ray(source,node,this._point)) {
				if(lastIndex >= 0) Points[lastIndex] = null;
			} else source = Points[lastIndex];
			lastIndex = i - 1;
		}
	}
	,computePathDistance: function(StartIndex,EndIndex,WideDiagonal,StopOnEnd) {
		if(StopOnEnd == null) StopOnEnd = true;
		var mapSize = this.widthInTiles * this.heightInTiles;
		var distances = [];
		flixel_util_FlxArrayUtil.setLength_Int(distances,mapSize);
		var i = 0;
		while(i < mapSize) {
			if(this._tileObjects[this._data[i]].allowCollisions != 0) distances[i] = -2; else distances[i] = -1;
			i++;
		}
		distances[StartIndex] = 0;
		var distance = 1;
		var neighbors = [StartIndex];
		var current;
		var currentIndex;
		var left;
		var right;
		var up;
		var down;
		var currentLength;
		var foundEnd = false;
		while(neighbors.length > 0) {
			current = neighbors;
			neighbors = [];
			i = 0;
			currentLength = current.length;
			while(i < currentLength) {
				currentIndex = current[i++];
				if(currentIndex == (EndIndex | 0)) {
					foundEnd = true;
					if(StopOnEnd) {
						neighbors = [];
						break;
					}
				}
				left = currentIndex % this.widthInTiles > 0;
				right = currentIndex % this.widthInTiles < this.widthInTiles - 1;
				up = currentIndex / this.widthInTiles > 0;
				down = currentIndex / this.widthInTiles < this.heightInTiles - 1;
				var index;
				if(up) {
					index = currentIndex - this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right) {
					index = currentIndex + 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(down) {
					index = currentIndex + this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left) {
					index = currentIndex - 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && right) {
					index = currentIndex - this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right && down) {
					index = currentIndex + this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left && down) {
					index = currentIndex + this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && left) {
					index = currentIndex - this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
			}
			distance++;
		}
		if(!foundEnd) distances = null;
		return distances;
	}
	,walkPath: function(Data,Start,Points) {
		Points.push(flixel_util_FlxPoint.get(this.x + Math.floor(Start % this.widthInTiles) * this._scaledTileWidth + this._scaledTileWidth * 0.5,this.y + Math.floor(Start / this.widthInTiles) * this._scaledTileHeight + this._scaledTileHeight * 0.5));
		if(Data[Start] == 0) return;
		var left = Start % this.widthInTiles > 0;
		var right = Start % this.widthInTiles < this.widthInTiles - 1;
		var up = Start / this.widthInTiles > 0;
		var down = Start / this.widthInTiles < this.heightInTiles - 1;
		var current = Data[Start];
		var i;
		if(up) {
			i = Start - this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right) {
			i = Start + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(down) {
			i = Start + this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left) {
			i = Start - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && right) {
			i = Start - this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right && down) {
			i = Start + this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left && down) {
			i = Start + this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && left) {
			i = Start - this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		return;
	}
	,updateTile: function(Index) {
		var tile = this._tileObjects[this._data[Index]];
		if(tile == null || !tile.visible) {
			this._rects[Index] = null;
			return;
		}
		var rx = (this._data[Index] - this._startingIndex) * (this._tileWidth + this.region.spacingX);
		var ry = 0;
		if(rx >= this.region.width) {
			ry = (rx / this.region.width | 0) * (this._tileHeight + this.region.spacingY);
			rx %= this.region.width;
		}
		this._rects[Index] = new flash_geom_Rectangle(rx + this.region.startX,ry + this.region.startY,this._tileWidth,this._tileHeight);
	}
	,autoTile: function(Index) {
		if(this._data[Index] == 0) return;
		this._data[Index] = 0;
		if(Index - this.widthInTiles < 0 || this._data[Index - this.widthInTiles] > 0) this._data[Index] += 1;
		if(Index % this.widthInTiles >= this.widthInTiles - 1 || this._data[Index + 1] > 0) this._data[Index] += 2;
		if((Index + this.widthInTiles | 0) >= this.totalTiles || this._data[Index + this.widthInTiles] > 0) this._data[Index] += 4;
		if(Index % this.widthInTiles <= 0 || this._data[Index - 1] > 0) this._data[Index] += 8;
		if(this.auto == 2 && this._data[Index] == 15) {
			if(Index % this.widthInTiles > 0 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles - 1] <= 0) this._data[Index] = 1;
			if(Index % this.widthInTiles > 0 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles - 1] <= 0) this._data[Index] = 2;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles + 1] <= 0) this._data[Index] = 4;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles + 1] <= 0) this._data[Index] = 8;
		}
		this._data[Index] += 1;
	}
	,createBuffer: function(camera) {
		var buffer = new flixel_tile_FlxTilemapBuffer(this._tileWidth,this._tileHeight,this.widthInTiles,this.heightInTiles,camera,this.scale.x,this.scale.y);
		buffer.pixelPerfectRender = this.pixelPerfectRender;
		return buffer;
	}
	,onGameResize: function(_,_1) {
		var _g1 = 0;
		var _g = this.get_cameras().length;
		while(_g1 < _g) {
			var i = _g1++;
			var camera = this.get_cameras()[i];
			var buffer = this._buffers[i];
			flixel_tile_FlxTilemap._helperBuffer.updateColumns(this._tileWidth,this.widthInTiles,this.scale.x,camera);
			flixel_tile_FlxTilemap._helperBuffer.updateRows(this._tileHeight,this.heightInTiles,this.scale.y,camera);
			if(buffer == null || flixel_tile_FlxTilemap._helperBuffer.columns != buffer.columns || flixel_tile_FlxTilemap._helperBuffer.rows != buffer.rows) {
				if(buffer != null) buffer.destroy();
				this._buffers[i] = this.createBuffer(camera);
			}
		}
	}
	,set_cachedGraphics: function(Value) {
		var oldCached = this.cachedGraphics;
		if(this.cachedGraphics != Value && Value != null) {
			var _g = Value;
			var _g1 = _g.useCount;
			_g.set_useCount(_g1 + 1);
			_g1;
		}
		if(oldCached != null && oldCached != Value) {
			var _g2 = oldCached;
			var _g11 = _g2.useCount;
			_g2.set_useCount(_g11 - 1);
			_g11;
		}
		return this.cachedGraphics = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		if(this._buffers != null) {
			var _g = 0;
			var _g1 = this._buffers;
			while(_g < _g1.length) {
				var buffer = _g1[_g];
				++_g;
				buffer.pixelPerfectRender = Value;
			}
		}
		return this.pixelPerfectRender = Value;
	}
	,setScaleXYCallback: function(Scale) {
		this.setScaleXCallback(Scale);
		this.setScaleYCallback(Scale);
	}
	,setScaleXCallback: function(Scale) {
		this._scaledTileWidth = this._tileWidth * this.scale.x;
		this.set_width(this.widthInTiles * this._scaledTileWidth);
		if(this.get_cameras() != null) {
			var _g1 = 0;
			var _g = this.get_cameras().length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._buffers[i] != null) this._buffers[i].updateColumns(this._tileWidth,this.widthInTiles,this.scale.x,this.get_cameras()[i]);
			}
		}
	}
	,setScaleYCallback: function(Scale) {
		this._scaledTileHeight = this._tileHeight * this.scale.y;
		this.set_height(this.heightInTiles * this._scaledTileHeight);
		if(this.get_cameras() != null) {
			var _g1 = 0;
			var _g = this.get_cameras().length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._buffers[i] != null) this._buffers[i].updateRows(this._tileHeight,this.heightInTiles,this.scale.y,this.get_cameras()[i]);
			}
		}
	}
	,__class__: flixel_tile_FlxTilemap
	,__properties__: $extend(flixel_FlxObject.prototype.__properties__,{set_cachedGraphics:"set_cachedGraphics"})
});
var flixel_tweens_FlxEase = function() { };
$hxClasses["flixel.tweens.FlxEase"] = flixel_tweens_FlxEase;
flixel_tweens_FlxEase.__name__ = ["flixel","tweens","FlxEase"];
flixel_tweens_FlxEase.quadIn = function(t) {
	return t * t;
};
flixel_tweens_FlxEase.quadOut = function(t) {
	return -t * (t - 2);
};
flixel_tweens_FlxEase.quadInOut = function(t) {
	if(t <= .5) return t * t * 2; else return 1 - --t * t * 2;
};
flixel_tweens_FlxEase.cubeIn = function(t) {
	return t * t * t;
};
flixel_tweens_FlxEase.cubeOut = function(t) {
	return 1 + --t * t * t;
};
flixel_tweens_FlxEase.cubeInOut = function(t) {
	if(t <= .5) return t * t * t * 4; else return 1 + --t * t * t * 4;
};
flixel_tweens_FlxEase.quartIn = function(t) {
	return t * t * t * t;
};
flixel_tweens_FlxEase.quartOut = function(t) {
	return 1 - (t -= 1) * t * t * t;
};
flixel_tweens_FlxEase.quartInOut = function(t) {
	if(t <= .5) return t * t * t * t * 8; else return (1 - (t = t * 2 - 2) * t * t * t) / 2 + .5;
};
flixel_tweens_FlxEase.quintIn = function(t) {
	return t * t * t * t * t;
};
flixel_tweens_FlxEase.quintOut = function(t) {
	return (t = t - 1) * t * t * t * t + 1;
};
flixel_tweens_FlxEase.quintInOut = function(t) {
	if((t *= 2) < 1) return t * t * t * t * t / 2; else return ((t -= 2) * t * t * t * t + 2) / 2;
};
flixel_tweens_FlxEase.sineIn = function(t) {
	return -Math.cos(flixel_tweens_FlxEase.PI2 * t) + 1;
};
flixel_tweens_FlxEase.sineOut = function(t) {
	return Math.sin(flixel_tweens_FlxEase.PI2 * t);
};
flixel_tweens_FlxEase.sineInOut = function(t) {
	return -Math.cos(Math.PI * t) / 2 + .5;
};
flixel_tweens_FlxEase.bounceIn = function(t) {
	t = 1 - t;
	if(t < flixel_tweens_FlxEase.B1) return 1 - 7.5625 * t * t;
	if(t < flixel_tweens_FlxEase.B2) return 1 - (7.5625 * (t - flixel_tweens_FlxEase.B3) * (t - flixel_tweens_FlxEase.B3) + .75);
	if(t < flixel_tweens_FlxEase.B4) return 1 - (7.5625 * (t - flixel_tweens_FlxEase.B5) * (t - flixel_tweens_FlxEase.B5) + .9375);
	return 1 - (7.5625 * (t - flixel_tweens_FlxEase.B6) * (t - flixel_tweens_FlxEase.B6) + .984375);
};
flixel_tweens_FlxEase.bounceOut = function(t) {
	if(t < flixel_tweens_FlxEase.B1) return 7.5625 * t * t;
	if(t < flixel_tweens_FlxEase.B2) return 7.5625 * (t - flixel_tweens_FlxEase.B3) * (t - flixel_tweens_FlxEase.B3) + .75;
	if(t < flixel_tweens_FlxEase.B4) return 7.5625 * (t - flixel_tweens_FlxEase.B5) * (t - flixel_tweens_FlxEase.B5) + .9375;
	return 7.5625 * (t - flixel_tweens_FlxEase.B6) * (t - flixel_tweens_FlxEase.B6) + .984375;
};
flixel_tweens_FlxEase.bounceInOut = function(t) {
	if(t < .5) {
		t = 1 - t * 2;
		if(t < flixel_tweens_FlxEase.B1) return (1 - 7.5625 * t * t) / 2;
		if(t < flixel_tweens_FlxEase.B2) return (1 - (7.5625 * (t - flixel_tweens_FlxEase.B3) * (t - flixel_tweens_FlxEase.B3) + .75)) / 2;
		if(t < flixel_tweens_FlxEase.B4) return (1 - (7.5625 * (t - flixel_tweens_FlxEase.B5) * (t - flixel_tweens_FlxEase.B5) + .9375)) / 2;
		return (1 - (7.5625 * (t - flixel_tweens_FlxEase.B6) * (t - flixel_tweens_FlxEase.B6) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if(t < flixel_tweens_FlxEase.B1) return 7.5625 * t * t / 2 + .5;
	if(t < flixel_tweens_FlxEase.B2) return (7.5625 * (t - flixel_tweens_FlxEase.B3) * (t - flixel_tweens_FlxEase.B3) + .75) / 2 + .5;
	if(t < flixel_tweens_FlxEase.B4) return (7.5625 * (t - flixel_tweens_FlxEase.B5) * (t - flixel_tweens_FlxEase.B5) + .9375) / 2 + .5;
	return (7.5625 * (t - flixel_tweens_FlxEase.B6) * (t - flixel_tweens_FlxEase.B6) + .984375) / 2 + .5;
};
flixel_tweens_FlxEase.circIn = function(t) {
	return -(Math.sqrt(1 - t * t) - 1);
};
flixel_tweens_FlxEase.circOut = function(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1));
};
flixel_tweens_FlxEase.circInOut = function(t) {
	if(t <= .5) return (Math.sqrt(1 - t * t * 4) - 1) / -2; else return (Math.sqrt(1 - (t * 2 - 2) * (t * 2 - 2)) + 1) / 2;
};
flixel_tweens_FlxEase.expoIn = function(t) {
	return Math.pow(2,10 * (t - 1));
};
flixel_tweens_FlxEase.expoOut = function(t) {
	return -Math.pow(2,-10 * t) + 1;
};
flixel_tweens_FlxEase.expoInOut = function(t) {
	if(t < .5) return Math.pow(2,10 * (t * 2 - 1)) / 2; else return (-Math.pow(2,-10 * (t * 2 - 1)) + 2) / 2;
};
flixel_tweens_FlxEase.backIn = function(t) {
	return t * t * (2.70158 * t - 1.70158);
};
flixel_tweens_FlxEase.backOut = function(t) {
	return 1 - --t * t * (-2.70158 * t - 1.70158);
};
flixel_tweens_FlxEase.backInOut = function(t) {
	t *= 2;
	if(t < 1) return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5;
};
flixel_tweens_FlxEase.elasticIn = function(t) {
	return -(flixel_tweens_FlxEase.ELASTIC_AMPLITUDE * Math.pow(2,10 * (t -= 1)) * Math.sin((t - flixel_tweens_FlxEase.ELASTIC_PERIOD / (2 * Math.PI) * Math.asin(1 / flixel_tweens_FlxEase.ELASTIC_AMPLITUDE)) * (2 * Math.PI) / flixel_tweens_FlxEase.ELASTIC_PERIOD));
};
flixel_tweens_FlxEase.elasticOut = function(t) {
	return flixel_tweens_FlxEase.ELASTIC_AMPLITUDE * Math.pow(2,-10 * t) * Math.sin((t - flixel_tweens_FlxEase.ELASTIC_PERIOD / (2 * Math.PI) * Math.asin(1 / flixel_tweens_FlxEase.ELASTIC_AMPLITUDE)) * (2 * Math.PI) / flixel_tweens_FlxEase.ELASTIC_PERIOD) + 1;
};
flixel_tweens_FlxEase.elasticInOut = function(t) {
	if(t < 0.5) return -0.5 * (Math.pow(2,10 * (t -= 0.5)) * Math.sin((t - flixel_tweens_FlxEase.ELASTIC_PERIOD / 4) * (2 * Math.PI) / flixel_tweens_FlxEase.ELASTIC_PERIOD));
	return Math.pow(2,-10 * (t -= 0.5)) * Math.sin((t - flixel_tweens_FlxEase.ELASTIC_PERIOD / 4) * (2 * Math.PI) / flixel_tweens_FlxEase.ELASTIC_PERIOD) * 0.5 + 1;
};
var flixel_tweens_misc_AngleTween = function(Options) {
	flixel_tweens_FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.misc.AngleTween"] = flixel_tweens_misc_AngleTween;
flixel_tweens_misc_AngleTween.__name__ = ["flixel","tweens","misc","AngleTween"];
flixel_tweens_misc_AngleTween.__super__ = flixel_tweens_FlxTween;
flixel_tweens_misc_AngleTween.prototype = $extend(flixel_tweens_FlxTween.prototype,{
	angle: null
	,sprite: null
	,_start: null
	,_range: null
	,destroy: function() {
		flixel_tweens_FlxTween.prototype.destroy.call(this);
		this.sprite = null;
	}
	,tween: function(FromAngle,ToAngle,Duration,Sprite) {
		this._start = this.angle = FromAngle;
		var d = ToAngle - this.angle;
		var a = Math.abs(d);
		if(a > 181) this._range = (360 - a) * (d > 0?-1:1); else if(a < 179) this._range = d; else this._range = flixel_util_FlxRandom.floatRanged(180,-180);
		this.duration = Duration;
		this.sprite = Sprite;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_FlxTween.prototype.update.call(this);
		this.angle = (this._start + this._range * this.scale) % 360;
		if(this.angle < 0) this.angle += 360;
		if(this.sprite != null) this.sprite.set_angle(this.angle);
	}
	,__class__: flixel_tweens_misc_AngleTween
});
var flixel_tweens_misc_ColorTween = function(Options) {
	this.alpha = 1;
	flixel_tweens_FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.misc.ColorTween"] = flixel_tweens_misc_ColorTween;
flixel_tweens_misc_ColorTween.__name__ = ["flixel","tweens","misc","ColorTween"];
flixel_tweens_misc_ColorTween.__super__ = flixel_tweens_FlxTween;
flixel_tweens_misc_ColorTween.prototype = $extend(flixel_tweens_FlxTween.prototype,{
	color: null
	,alpha: null
	,sprite: null
	,red: null
	,green: null
	,blue: null
	,_startA: null
	,_startR: null
	,_startG: null
	,_startB: null
	,_rangeA: null
	,_rangeR: null
	,_rangeG: null
	,_rangeB: null
	,destroy: function() {
		flixel_tweens_FlxTween.prototype.destroy.call(this);
		this.sprite = null;
	}
	,tween: function(Duration,FromColor,ToColor,FromAlpha,ToAlpha,Sprite) {
		if(ToAlpha == null) ToAlpha = 1;
		if(FromAlpha == null) FromAlpha = 1;
		FromColor &= 16777215;
		ToColor &= 16777215;
		this.color = FromColor;
		this.red = FromColor >> 16 & 255;
		this.green = FromColor >> 8 & 255;
		this.blue = FromColor & 255;
		this._startR = this.red / 255;
		this._startG = this.green / 255;
		this._startB = this.blue / 255;
		this._rangeR = (ToColor >> 16 & 255) / 255 - this._startR;
		this._rangeG = (ToColor >> 8 & 255) / 255 - this._startG;
		this._rangeB = (ToColor & 255) / 255 - this._startB;
		this._startA = this.alpha = FromAlpha;
		this._rangeA = ToAlpha - this.alpha;
		this.duration = Duration;
		this.sprite = Sprite;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_FlxTween.prototype.update.call(this);
		this.alpha = this._startA + this._rangeA * this.scale;
		this.red = (this._startR + this._rangeR * this.scale) * 255 | 0;
		this.green = (this._startG + this._rangeG * this.scale) * 255 | 0;
		this.blue = (this._startB + this._rangeB * this.scale) * 255 | 0;
		this.color = this.red << 16 | this.green << 8 | this.blue;
		if(this.sprite != null) {
			this.sprite.set_color(this.color);
			this.sprite.set_alpha(this.alpha);
		}
	}
	,__class__: flixel_tweens_misc_ColorTween
});
var flixel_tweens_misc_NumTween = function(Options) {
	flixel_tweens_FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.misc.NumTween"] = flixel_tweens_misc_NumTween;
flixel_tweens_misc_NumTween.__name__ = ["flixel","tweens","misc","NumTween"];
flixel_tweens_misc_NumTween.__super__ = flixel_tweens_FlxTween;
flixel_tweens_misc_NumTween.prototype = $extend(flixel_tweens_FlxTween.prototype,{
	value: null
	,_tweenFunction: null
	,_start: null
	,_range: null
	,destroy: function() {
		flixel_tweens_FlxTween.prototype.destroy.call(this);
		this._tweenFunction = null;
	}
	,tween: function(fromValue,toValue,duration,tweenFunction) {
		this._tweenFunction = tweenFunction;
		this._start = this.value = fromValue;
		this._range = toValue - this.value;
		this.duration = duration;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_FlxTween.prototype.update.call(this);
		this.value = this._start + this._range * this.scale;
		if(this._tweenFunction != null) this._tweenFunction(this.value);
	}
	,__class__: flixel_tweens_misc_NumTween
});
var flixel_tweens_misc_VarTween = function(Options) {
	flixel_tweens_FlxTween.call(this,Options);
	this._vars = [];
	this._startValues = [];
	this._range = [];
};
$hxClasses["flixel.tweens.misc.VarTween"] = flixel_tweens_misc_VarTween;
flixel_tweens_misc_VarTween.__name__ = ["flixel","tweens","misc","VarTween"];
flixel_tweens_misc_VarTween.__super__ = flixel_tweens_FlxTween;
flixel_tweens_misc_VarTween.prototype = $extend(flixel_tweens_FlxTween.prototype,{
	_object: null
	,_properties: null
	,_vars: null
	,_startValues: null
	,_range: null
	,destroy: function() {
		flixel_tweens_FlxTween.prototype.destroy.call(this);
		this._object = null;
		this._properties = null;
	}
	,tween: function(object,properties,duration) {
		this._object = object;
		this._properties = properties;
		this.duration = duration;
		this.start();
		return this;
	}
	,update: function() {
		var delay;
		if(this.executions > 0) delay = this.loopDelay; else delay = this.startDelay;
		if(this._secondsSinceStart < delay) flixel_tweens_FlxTween.prototype.update.call(this); else {
			if(this._vars.length < 1) this.initializeVars();
			flixel_tweens_FlxTween.prototype.update.call(this);
			var i = this._vars.length;
			while(i-- > 0) Reflect.setProperty(this._object,this._vars[i],this._startValues[i] + this._range[i] * this.scale);
		}
	}
	,initializeVars: function() {
		var p;
		var fields;
		if(Reflect.isObject(this._properties)) fields = Reflect.fields(this._properties); else throw new js__$Boot_HaxeError("Unsupported properties container - use an object containing key/value pairs.");
		var _g = 0;
		while(_g < fields.length) {
			var p1 = fields[_g];
			++_g;
			if(Reflect.getProperty(this._object,p1) == null) throw new js__$Boot_HaxeError("The Object does not have the property \"" + p1 + "\", or it is not accessible.");
			var a = Reflect.getProperty(this._object,p1);
			if((function($this) {
				var $r;
				var f = a;
				$r = isNaN(f);
				return $r;
			}(this))) throw new js__$Boot_HaxeError("The property \"" + p1 + "\" is not numeric.");
			this._vars.push(p1);
			this._startValues.push(a);
			this._range.push(Reflect.getProperty(this._properties,p1) - a);
		}
	}
	,__class__: flixel_tweens_misc_VarTween
});
var flixel_tweens_motion_Motion = function(Options) {
	this.y = 0;
	this.x = 0;
	flixel_tweens_FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.motion.Motion"] = flixel_tweens_motion_Motion;
flixel_tweens_motion_Motion.__name__ = ["flixel","tweens","motion","Motion"];
flixel_tweens_motion_Motion.__super__ = flixel_tweens_FlxTween;
flixel_tweens_motion_Motion.prototype = $extend(flixel_tweens_FlxTween.prototype,{
	x: null
	,y: null
	,_object: null
	,destroy: function() {
		flixel_tweens_FlxTween.prototype.destroy.call(this);
		this._object = null;
	}
	,setObject: function(object) {
		this._object = object;
		this._object.set_immovable(true);
		return this;
	}
	,update: function() {
		flixel_tweens_FlxTween.prototype.update.call(this);
		this.postUpdate();
	}
	,postUpdate: function() {
		if(this._object != null) this._object.setPosition(this.x,this.y);
	}
	,__class__: flixel_tweens_motion_Motion
});
var flixel_tweens_motion_CircularMotion = function(Options) {
	this._angleFinish = 0;
	this._angleStart = 0;
	this._radius = 0;
	this._centerY = 0;
	this._centerX = 0;
	this.angle = 0;
	flixel_tweens_motion_Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.CircularMotion"] = flixel_tweens_motion_CircularMotion;
flixel_tweens_motion_CircularMotion.__name__ = ["flixel","tweens","motion","CircularMotion"];
flixel_tweens_motion_CircularMotion.__super__ = flixel_tweens_motion_Motion;
flixel_tweens_motion_CircularMotion.prototype = $extend(flixel_tweens_motion_Motion.prototype,{
	angle: null
	,_centerX: null
	,_centerY: null
	,_radius: null
	,_angleStart: null
	,_angleFinish: null
	,setMotion: function(CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this._centerX = CenterX;
		this._centerY = CenterY;
		this._radius = Radius;
		this.angle = this._angleStart = Angle * Math.PI / -180;
		this._angleFinish = Math.PI * 2 * (Clockwise?1:-1);
		if(UseDuration) this.duration = DurationOrSpeed; else this.duration = this._radius * (Math.PI * 2) / DurationOrSpeed;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_motion_Motion.prototype.update.call(this);
		this.angle = this._angleStart + this._angleFinish * this.scale;
		this.x = this._centerX + Math.cos(this.angle) * this._radius;
		this.y = this._centerY + Math.sin(this.angle) * this._radius;
		if(this.finished) this.postUpdate();
	}
	,get_circumference: function() {
		return this._radius * (Math.PI * 2);
	}
	,__class__: flixel_tweens_motion_CircularMotion
	,__properties__: $extend(flixel_tweens_motion_Motion.prototype.__properties__,{get_circumference:"get_circumference"})
});
var flixel_tweens_motion_CubicMotion = function(Options) {
	this._tt = 0;
	this._ttt = 0;
	this._bY = 0;
	this._bX = 0;
	this._aY = 0;
	this._aX = 0;
	this._toY = 0;
	this._toX = 0;
	this._fromY = 0;
	this._fromX = 0;
	flixel_tweens_motion_Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.CubicMotion"] = flixel_tweens_motion_CubicMotion;
flixel_tweens_motion_CubicMotion.__name__ = ["flixel","tweens","motion","CubicMotion"];
flixel_tweens_motion_CubicMotion.__super__ = flixel_tweens_motion_Motion;
flixel_tweens_motion_CubicMotion.prototype = $extend(flixel_tweens_motion_Motion.prototype,{
	_fromX: null
	,_fromY: null
	,_toX: null
	,_toY: null
	,_aX: null
	,_aY: null
	,_bX: null
	,_bY: null
	,_ttt: null
	,_tt: null
	,setMotion: function(fromX,fromY,aX,aY,bX,bY,toX,toY,duration) {
		this.x = this._fromX = fromX;
		this.y = this._fromY = fromY;
		this._aX = aX;
		this._aY = aY;
		this._bX = bX;
		this._bY = bY;
		this._toX = toX;
		this._toY = toY;
		this.duration = duration;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_motion_Motion.prototype.update.call(this);
		this.x = this.scale * this.scale * this.scale * (this._toX + 3 * (this._aX - this._bX) - this._fromX) + 3 * this.scale * this.scale * (this._fromX - 2 * this._aX + this._bX) + 3 * this.scale * (this._aX - this._fromX) + this._fromX;
		this.y = this.scale * this.scale * this.scale * (this._toY + 3 * (this._aY - this._bY) - this._fromY) + 3 * this.scale * this.scale * (this._fromY - 2 * this._aY + this._bY) + 3 * this.scale * (this._aY - this._fromY) + this._fromY;
		if(this.finished) this.postUpdate();
	}
	,__class__: flixel_tweens_motion_CubicMotion
});
var flixel_tweens_motion_LinearMotion = function(Options) {
	this._distance = -1;
	this._moveY = 0;
	this._moveX = 0;
	this._fromY = 0;
	this._fromX = 0;
	flixel_tweens_motion_Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.LinearMotion"] = flixel_tweens_motion_LinearMotion;
flixel_tweens_motion_LinearMotion.__name__ = ["flixel","tweens","motion","LinearMotion"];
flixel_tweens_motion_LinearMotion.__super__ = flixel_tweens_motion_Motion;
flixel_tweens_motion_LinearMotion.prototype = $extend(flixel_tweens_motion_Motion.prototype,{
	_fromX: null
	,_fromY: null
	,_moveX: null
	,_moveY: null
	,_distance: null
	,setMotion: function(FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this._distance = -1;
		this.x = this._fromX = FromX;
		this.y = this._fromY = FromY;
		this._moveX = ToX - FromX;
		this._moveY = ToY - FromY;
		if(UseDuration) this.duration = DurationOrSpeed; else this.duration = this.get_distance() / DurationOrSpeed;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_motion_Motion.prototype.update.call(this);
		this.x = this._fromX + this._moveX * this.scale;
		this.y = this._fromY + this._moveY * this.scale;
		if(this.x == this._fromX + this._moveX && this.y == this._fromY + this._moveY && this.active && this._secondsSinceStart >= this.duration) this.finished = true;
		if(this.finished) this.postUpdate();
	}
	,get_distance: function() {
		if(this._distance >= 0) return this._distance;
		return this._distance = Math.sqrt(this._moveX * this._moveX + this._moveY * this._moveY);
	}
	,__class__: flixel_tweens_motion_LinearMotion
	,__properties__: $extend(flixel_tweens_motion_Motion.prototype.__properties__,{get_distance:"get_distance"})
});
var flixel_tweens_motion_LinearPath = function(Options) {
	this._index = 0;
	this._speed = 0;
	this.distance = 0;
	flixel_tweens_motion_Motion.call(this,Options);
	this.points = [];
	this._pointD = [0];
	this._pointT = [0];
};
$hxClasses["flixel.tweens.motion.LinearPath"] = flixel_tweens_motion_LinearPath;
flixel_tweens_motion_LinearPath.__name__ = ["flixel","tweens","motion","LinearPath"];
flixel_tweens_motion_LinearPath.__super__ = flixel_tweens_motion_Motion;
flixel_tweens_motion_LinearPath.prototype = $extend(flixel_tweens_motion_Motion.prototype,{
	distance: null
	,points: null
	,_pointD: null
	,_pointT: null
	,_speed: null
	,_index: null
	,_last: null
	,_prevPoint: null
	,_nextPoint: null
	,destroy: function() {
		flixel_tweens_motion_Motion.prototype.destroy.call(this);
		var _g = 0;
		var _g1 = this.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			point = flixel_util_FlxDestroyUtil.put(point);
		}
		this._last = flixel_util_FlxDestroyUtil.put(this._last);
		this._prevPoint = flixel_util_FlxDestroyUtil.put(this._prevPoint);
		this._nextPoint = flixel_util_FlxDestroyUtil.put(this._nextPoint);
	}
	,setMotion: function(DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this.updatePath();
		if(UseDuration) {
			this.duration = DurationOrSpeed;
			this._speed = this.distance / DurationOrSpeed;
		} else {
			this.duration = this.distance / DurationOrSpeed;
			this._speed = DurationOrSpeed;
		}
		this.start();
		return this;
	}
	,addPoint: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		if(this._last != null) {
			this.distance += Math.sqrt((x - this._last.x) * (x - this._last.x) + (y - this._last.y) * (y - this._last.y));
			this._pointD[this.points.length] = this.distance;
		}
		this.points[this.points.length] = this._last = flixel_util_FlxPoint.get(x,y);
		return this;
	}
	,getPoint: function(index) {
		if(index == null) index = 0;
		if(this.points.length == 0) throw new js__$Boot_HaxeError("No points have been added to the path yet.");
		return this.points[index % this.points.length];
	}
	,start: function() {
		if(this.backward) this._index = this.points.length - 1; else this._index = 0;
		flixel_tweens_motion_Motion.prototype.start.call(this);
		return this;
	}
	,update: function() {
		flixel_tweens_motion_Motion.prototype.update.call(this);
		var td;
		var tt;
		if(this.points == null) return;
		if(!this.backward) {
			if(this._index < this.points.length - 1) while(this.scale > this._pointT[this._index + 1]) {
				this._index++;
				if(this._index == this.points.length - 1) {
					this._index -= 1;
					break;
				}
			}
			td = this._pointT[this._index];
			tt = this._pointT[this._index + 1] - td;
			td = (this.scale - td) / tt;
			this._prevPoint = this.points[this._index];
			this._nextPoint = this.points[this._index + 1];
			this.x = this._prevPoint.x + (this._nextPoint.x - this._prevPoint.x) * td;
			this.y = this._prevPoint.y + (this._nextPoint.y - this._prevPoint.y) * td;
		} else {
			if(this._index > 0) while(this.scale < this._pointT[this._index - 1]) {
				this._index -= 1;
				if(this._index == 0) {
					this._index += 1;
					break;
				}
			}
			td = this._pointT[this._index];
			tt = this._pointT[this._index - 1] - td;
			td = (this.scale - td) / tt;
			this._prevPoint = this.points[this._index];
			this._nextPoint = this.points[this._index - 1];
			this.x = this._prevPoint.x + (this._nextPoint.x - this._prevPoint.x) * td;
			this.y = this._prevPoint.y + (this._nextPoint.y - this._prevPoint.y) * td;
		}
		flixel_tweens_motion_Motion.prototype.postUpdate.call(this);
	}
	,updatePath: function() {
		if(this.points.length < 2) throw new js__$Boot_HaxeError("A LinearPath must have at least 2 points to operate.");
		if(this._pointD.length == this._pointT.length) return;
		var i = 0;
		while(i < this.points.length) this._pointT[i] = this._pointD[i++] / this.distance;
	}
	,__class__: flixel_tweens_motion_LinearPath
});
var flixel_tweens_motion_QuadMotion = function(Options) {
	this._controlY = 0;
	this._controlX = 0;
	this._toY = 0;
	this._toX = 0;
	this._fromY = 0;
	this._fromX = 0;
	this._distance = -1;
	flixel_tweens_motion_Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.QuadMotion"] = flixel_tweens_motion_QuadMotion;
flixel_tweens_motion_QuadMotion.__name__ = ["flixel","tweens","motion","QuadMotion"];
flixel_tweens_motion_QuadMotion.__super__ = flixel_tweens_motion_Motion;
flixel_tweens_motion_QuadMotion.prototype = $extend(flixel_tweens_motion_Motion.prototype,{
	_distance: null
	,_fromX: null
	,_fromY: null
	,_toX: null
	,_toY: null
	,_controlX: null
	,_controlY: null
	,setMotion: function(FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this._distance = -1;
		this.x = this._fromX = FromX;
		this.y = this._fromY = FromY;
		this._controlX = ControlX;
		this._controlY = ControlY;
		this._toX = ToX;
		this._toY = ToY;
		if(UseDuration) this.duration = DurationOrSpeed; else this.duration = this.get_distance() / DurationOrSpeed;
		this.start();
		return this;
	}
	,update: function() {
		flixel_tweens_motion_Motion.prototype.update.call(this);
		this.x = this._fromX * (1 - this.scale) * (1 - this.scale) + this._controlX * 2 * (1 - this.scale) * this.scale + this._toX * this.scale * this.scale;
		this.y = this._fromY * (1 - this.scale) * (1 - this.scale) + this._controlY * 2 * (1 - this.scale) * this.scale + this._toY * this.scale * this.scale;
		if(this.finished) this.postUpdate();
	}
	,get_distance: function() {
		if(this._distance >= 0) return this._distance;
		var a = flixel_util_FlxPoint.get(null,null);
		var b = flixel_util_FlxPoint.get(null,null);
		a.set_x(this.x - 2 * this._controlX + this._toX);
		a.set_y(this.y - 2 * this._controlY + this._toY);
		b.set_x(2 * this._controlX - 2 * this.x);
		b.set_y(2 * this._controlY - 2 * this.y);
		var A = 4 * (a.x * a.x + a.y * a.y);
		var B = 4 * (a.x * b.x + a.y * b.y);
		var C = b.x * b.x + b.y * b.y;
		var ABC = 2 * Math.sqrt(A + B + C);
		var A2 = Math.sqrt(A);
		var A32 = 2 * A * A2;
		var C2 = 2 * Math.sqrt(C);
		var BA = B / A2;
		a.put();
		b.put();
		return (A32 * ABC + A2 * B * (ABC - C2) + (4 * C * A - B * B) * Math.log((2 * A2 + BA + ABC) / (BA + C2))) / (4 * A32);
	}
	,__class__: flixel_tweens_motion_QuadMotion
	,__properties__: $extend(flixel_tweens_motion_Motion.prototype.__properties__,{get_distance:"get_distance"})
});
var flixel_tweens_motion_QuadPath = function(Options) {
	this._updateCurve = true;
	this._numSegs = 0;
	this._index = 0;
	this._speed = 0;
	this._distance = 0;
	flixel_tweens_motion_Motion.call(this,Options);
	this._points = [];
	this._curveT = [];
	this._curveD = [];
};
$hxClasses["flixel.tweens.motion.QuadPath"] = flixel_tweens_motion_QuadPath;
flixel_tweens_motion_QuadPath.__name__ = ["flixel","tweens","motion","QuadPath"];
flixel_tweens_motion_QuadPath.__super__ = flixel_tweens_motion_Motion;
flixel_tweens_motion_QuadPath.prototype = $extend(flixel_tweens_motion_Motion.prototype,{
	_points: null
	,_distance: null
	,_speed: null
	,_index: null
	,_numSegs: null
	,_updateCurve: null
	,_curveT: null
	,_curveD: null
	,_a: null
	,_b: null
	,_c: null
	,destroy: function() {
		flixel_tweens_motion_Motion.prototype.destroy.call(this);
		var _g = 0;
		var _g1 = this._points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			point = flixel_util_FlxDestroyUtil.put(point);
		}
		this._a = flixel_util_FlxDestroyUtil.put(this._a);
		this._b = flixel_util_FlxDestroyUtil.put(this._b);
		this._c = flixel_util_FlxDestroyUtil.put(this._c);
	}
	,setMotion: function(DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this.updatePath();
		if(UseDuration) {
			this.duration = DurationOrSpeed;
			this._speed = this._distance / DurationOrSpeed;
		} else {
			this.duration = this._distance / DurationOrSpeed;
			this._speed = DurationOrSpeed;
		}
		this.start();
		return this;
	}
	,addPoint: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		this._updateCurve = true;
		this._points.push(flixel_util_FlxPoint.get(x,y));
		return this;
	}
	,getPoint: function(index) {
		if(index == null) index = 0;
		if(this._points.length == 0) throw new js__$Boot_HaxeError("No points have been added to the path yet.");
		return this._points[index % this._points.length];
	}
	,start: function() {
		if(this.backward) this._index = this._numSegs - 1; else this._index = 0;
		flixel_tweens_motion_Motion.prototype.start.call(this);
		return this;
	}
	,update: function() {
		flixel_tweens_motion_Motion.prototype.update.call(this);
		var td;
		var tt;
		if(!this.backward && this._points != null) {
			if(this._index < this._numSegs - 1) while(this.scale > this._curveT[this._index + 1]) {
				this._index++;
				if(this._index == this._numSegs - 1) break;
			}
			td = this._curveT[this._index];
			tt = this._curveT[this._index + 1] - td;
			td = (this.scale - td) / tt;
			this._a = this._points[this._index * 2];
			this._b = this._points[this._index * 2 + 1];
			this._c = this._points[this._index * 2 + 2];
			this.x = this._a.x * (1 - td) * (1 - td) + this._b.x * 2 * (1 - td) * td + this._c.x * td * td;
			this.y = this._a.y * (1 - td) * (1 - td) + this._b.y * 2 * (1 - td) * td + this._c.y * td * td;
		} else if(this._points != null) {
			if(this._index > 0) while(this.scale < this._curveT[this._index]) {
				this._index--;
				if(this._index == 0) break;
			}
			td = this._curveT[this._index + 1];
			tt = this._curveT[this._index] - td;
			td = (this.scale - td) / tt;
			this._a = this._points[this._index * 2 + 2];
			this._b = this._points[this._index * 2 + 1];
			this._c = this._points[this._index * 2];
			this.x = this._a.x * (1 - td) * (1 - td) + this._b.x * 2 * (1 - td) * td + this._c.x * td * td;
			this.y = this._a.y * (1 - td) * (1 - td) + this._b.y * 2 * (1 - td) * td + this._c.y * td * td;
		}
		flixel_tweens_motion_Motion.prototype.postUpdate.call(this);
	}
	,updatePath: function() {
		if((this._points.length - 1) % 2 != 0 || this._points.length < 3) throw new js__$Boot_HaxeError("A QuadPath must have at least 3 points to operate and number of points must be a odd.");
		if(!this._updateCurve) return;
		this._updateCurve = false;
		var i = 0;
		var j = 0;
		this._distance = 0;
		this._numSegs = (this._points.length - 1) / 2 | 0;
		while(i < this._numSegs) {
			j = i * 2;
			this._curveD[i] = this.getCurveLength(this._points[j],this._points[j + 1],this._points[j + 2]);
			this._distance += this._curveD[i++];
		}
		i = 0;
		var d = 0;
		while(i < this._numSegs) {
			d += this._curveD[i];
			this._curveT[i++] = d / this._distance;
		}
		this._curveT[this._numSegs - 1] = 1;
		this._curveT.unshift(0);
	}
	,getCurveLength: function(start,control,finish) {
		var a = flixel_util_FlxPoint.get(null,null);
		var b = flixel_util_FlxPoint.get(null,null);
		a.set_x(start.x - 2 * control.x + finish.x);
		a.set_y(start.y - 2 * control.y + finish.y);
		b.set_x(2 * control.x - 2 * start.x);
		b.set_y(2 * control.y - 2 * start.y);
		var A = 4 * (a.x * a.x + a.y * a.y);
		var B = 4 * (a.x * b.x + a.y * b.y);
		var C = b.x * b.x + b.y * b.y;
		var ABC = 2 * Math.sqrt(A + B + C);
		var A2 = Math.sqrt(A);
		var A32 = 2 * A * A2;
		var C2 = 2 * Math.sqrt(C);
		var BA = B / A2;
		a.put();
		b.put();
		return (A32 * ABC + A2 * B * (ABC - C2) + (4 * C * A - B * B) * Math.log((2 * A2 + BA + ABC) / (BA + C2))) / (4 * A32);
	}
	,__class__: flixel_tweens_motion_QuadPath
});
var flixel_ui_FlxTypedButton = function(X,Y,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._pressedMouse = false;
	this.allowHighlightOnMobile = false;
	this.allowSwiping = true;
	flixel_FlxSprite.call(this,X,Y);
	this.loadGraphic(flixel_ui__$FlxTypedButton_GraphicButton,true,80,20);
	this.onUp = new flixel_ui__$FlxTypedButton_FlxButtonEvent(OnClick);
	this.onDown = new flixel_ui__$FlxTypedButton_FlxButtonEvent();
	this.onOver = new flixel_ui__$FlxTypedButton_FlxButtonEvent();
	this.onOut = new flixel_ui__$FlxTypedButton_FlxButtonEvent();
	this.labelAlphas = [0.8,1.0,0.5];
	this.labelOffsets = [flixel_util_FlxPoint.get(null,null),flixel_util_FlxPoint.get(null,null),flixel_util_FlxPoint.get(0,1)];
	this.set_status(0);
	this.scrollFactor.set();
	flash_Lib.get_current().get_stage().addEventListener("mouseUp",$bind(this,this.onUpEventListener));
};
$hxClasses["flixel.ui.FlxTypedButton"] = flixel_ui_FlxTypedButton;
flixel_ui_FlxTypedButton.__name__ = ["flixel","ui","FlxTypedButton"];
flixel_ui_FlxTypedButton.__super__ = flixel_FlxSprite;
flixel_ui_FlxTypedButton.prototype = $extend(flixel_FlxSprite.prototype,{
	label: null
	,labelOffsets: null
	,labelAlphas: null
	,allowSwiping: null
	,allowHighlightOnMobile: null
	,status: null
	,onUp: null
	,onDown: null
	,onOver: null
	,onOut: null
	,_pressedTouch: null
	,_pressedMouse: null
	,destroy: function() {
		this.set_label(flixel_util_FlxDestroyUtil.destroy(this.label));
		this.onUp = flixel_util_FlxDestroyUtil.destroy(this.onUp);
		this.onDown = flixel_util_FlxDestroyUtil.destroy(this.onDown);
		this.onOver = flixel_util_FlxDestroyUtil.destroy(this.onOver);
		this.onOut = flixel_util_FlxDestroyUtil.destroy(this.onOut);
		this.labelOffsets = flixel_util_FlxDestroyUtil.putArray(this.labelOffsets);
		this.labelAlphas = null;
		this._pressedTouch = null;
		flash_Lib.get_current().get_stage().removeEventListener("mouseUp",$bind(this,this.onUpEventListener));
		flixel_FlxSprite.prototype.destroy.call(this);
	}
	,update: function() {
		flixel_FlxSprite.prototype.update.call(this);
		if(!this.visible) return;
		this.updateButton();
		var nextFrame = this.status;
		this.animation.set_frameIndex(nextFrame);
	}
	,draw: function() {
		flixel_FlxSprite.prototype.draw.call(this);
		if(this.label != null && this.label.visible) {
			this.label.set_cameras(this.get_cameras());
			this.label.draw();
		}
	}
	,updateButton: function() {
		var overlapFound = false;
		var _g = 0;
		var _g1 = this.get_cameras();
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			flixel_FlxG.mouse.getWorldPosition(camera,this._point);
			if(this.overlapsPoint(this._point,true,camera)) {
				overlapFound = true;
				this.updateStatus(true,flixel_FlxG.mouse._leftButton.justPressed(),flixel_FlxG.mouse._leftButton.current > 0);
				break;
			}
			var _g2 = 0;
			var _g3 = flixel_FlxG.touches.list;
			while(_g2 < _g3.length) {
				var touch = _g3[_g2];
				++_g2;
				touch.getWorldPosition(camera,this._point);
				if(this.overlapsPoint(this._point,true,camera)) {
					overlapFound = true;
					this.updateStatus(true,touch._current == 2,touch._current > 0,touch);
					break;
				}
			}
		}
		if(!overlapFound) this.updateStatus(false,false,false);
	}
	,updateStatus: function(Overlap,JustPressed,Pressed,Touch) {
		if(Overlap) {
			if(JustPressed) {
				this._pressedTouch = Touch;
				if(Touch == null) this._pressedMouse = true;
				this.onDownHandler();
			} else if(this.status == 0) {
				if(this.allowSwiping && Pressed) this.onDownHandler(); else this.onOverHandler();
			}
		} else if(this.status != 0) this.onOutHandler();
		if(this._pressedTouch != null && this._pressedTouch._current == -1) this.onUpHandler();
	}
	,onUpEventListener: function(E) {
		if(this.visible && this.exists && this.active && this.status == 2) this.onUpHandler();
	}
	,onUpHandler: function() {
		this.set_status(0);
		this._pressedMouse = false;
		this._pressedTouch = null;
		this.onUp.fire();
	}
	,onDownHandler: function() {
		this.set_status(2);
		this.onDown.fire();
	}
	,onOverHandler: function() {
		this.set_status(1);
		this.onOver.fire();
	}
	,onOutHandler: function() {
		this.set_status(0);
		this.onOut.fire();
	}
	,set_label: function(Value) {
		if(Value != null) {
			Value.scrollFactor.put();
			Value.scrollFactor = this.scrollFactor;
		}
		return this.label = Value;
	}
	,set_status: function(Value) {
		if(this.labelAlphas.length > Value && this.label != null) this.label.set_alpha(this.alpha * this.labelAlphas[Value]);
		return this.status = Value;
	}
	,set_x: function(Value) {
		flixel_FlxSprite.prototype.set_x.call(this,Value);
		if(this.label != null) this.label.set_x(this.x + this.labelOffsets[this.status].x);
		return this.x;
	}
	,set_y: function(Value) {
		flixel_FlxSprite.prototype.set_y.call(this,Value);
		if(this.label != null) this.label.set_y(this.y + this.labelOffsets[this.status].y);
		return this.y;
	}
	,__class__: flixel_ui_FlxTypedButton
	,__properties__: $extend(flixel_FlxSprite.prototype.__properties__,{set_status:"set_status",set_label:"set_label"})
});
var flixel_ui_FlxButton = function(X,Y,Text,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel_ui_FlxTypedButton.call(this,X,Y,OnClick);
	var _g = 0;
	var _g1 = this.labelOffsets;
	while(_g < _g1.length) {
		var point = _g1[_g];
		++_g;
		point.set(point.x - 1,point.y + 3);
	}
	this.set_label(new flixel_text_FlxText(this.x + this.labelOffsets[0].x,this.y + this.labelOffsets[0].y,80,Text));
	this.label.setFormat(null,8,3355443,"center");
	this.label.set_alpha(this.labelAlphas[this.status]);
};
$hxClasses["flixel.ui.FlxButton"] = flixel_ui_FlxButton;
flixel_ui_FlxButton.__name__ = ["flixel","ui","FlxButton"];
flixel_ui_FlxButton.__super__ = flixel_ui_FlxTypedButton;
flixel_ui_FlxButton.prototype = $extend(flixel_ui_FlxTypedButton.prototype,{
	resetHelpers: function() {
		flixel_ui_FlxTypedButton.prototype.resetHelpers.call(this);
		if(this.label != null) {
			this.label.set_fieldWidth(this.label.frameWidth = Std["int"](this.get_width()));
			this.label.set_size(this.label.get_size());
		}
	}
	,initLabel: function(Text) {
		this.set_label(new flixel_text_FlxText(this.x + this.labelOffsets[0].x,this.y + this.labelOffsets[0].y,80,Text));
		this.label.setFormat(null,8,3355443,"center");
		this.label.set_alpha(this.labelAlphas[this.status]);
	}
	,get_text: function() {
		return this.label.get_text();
	}
	,set_text: function(Text) {
		return this.label.set_text(Text);
	}
	,__class__: flixel_ui_FlxButton
	,__properties__: $extend(flixel_ui_FlxTypedButton.prototype.__properties__,{set_text:"set_text",get_text:"get_text"})
});
var flixel_ui__$FlxTypedButton_GraphicButton = function(width,height,transparent,color) {
	var o = flixel_ui__$FlxTypedButton_GraphicButton.image;
	flash_display_BitmapData.call(this,o.width,o.height,true,0);
	this.__context.drawImage(o,0,0);
};
$hxClasses["flixel.ui._FlxTypedButton.GraphicButton"] = flixel_ui__$FlxTypedButton_GraphicButton;
flixel_ui__$FlxTypedButton_GraphicButton.__name__ = ["flixel","ui","_FlxTypedButton","GraphicButton"];
flixel_ui__$FlxTypedButton_GraphicButton.preload = function() {
	var o = document.createElement("img");
	ApplicationMain.loadEmbed(flixel_ui__$FlxTypedButton_GraphicButton.image = o);
	o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAXZJREFUeF7tm0EKg0AMRedeXss7eA4F7+EJ3HgTty7SpkihMmNmSAcceEIK7cLF4/84zTdBRML70g+qkMHJLsi6rjJNE1XAQJmdogvS9710XYcCMxWorJTZD0D9ote+79QNA2WkrKIAl2URymYAQKdQAAhA22Y1WxEKRIEosOmnPRbGwlgYC9c8Jjz93vTAWj1wGAahbAZRBTLOyh8oR8dZ+iOVz+A7zmKkn6+8a+zxYQdAJ0ClSiZSngeRiWTmH7G08jYTOY5DqDSD20xk2zahbAbJfyLAs+EpIwA6nQZAAOZZrVZLQoEoEAU2fVzCwlgYC2PhWkeEFu6b7IHzPAtlMyATcYyyFB6ZyB/yHzIRpwrPd8rJRDz7MeyJFOyFXPdoyEQcFk5mItoYKZtB8hw4jqNQNgMAOoUCQADaNqvZilAgCkSBTT/tsTAWxsJYuOYx4en3pgfSAx/YA9kTyX/ZPDrOYoxlj7GujD7TbNYc8pUX2xN5AQkGeBPq5+BjAAAAAElFTkSuQmCC";
};
flixel_ui__$FlxTypedButton_GraphicButton.__super__ = flash_display_BitmapData;
flixel_ui__$FlxTypedButton_GraphicButton.prototype = $extend(flash_display_BitmapData.prototype,{
	__class__: flixel_ui__$FlxTypedButton_GraphicButton
});
var flixel_ui__$FlxTypedButton_FlxButtonEvent = function(Callback,sound) {
	this.callback = Callback;
	this.sound = sound;
};
$hxClasses["flixel.ui._FlxTypedButton.FlxButtonEvent"] = flixel_ui__$FlxTypedButton_FlxButtonEvent;
flixel_ui__$FlxTypedButton_FlxButtonEvent.__name__ = ["flixel","ui","_FlxTypedButton","FlxButtonEvent"];
flixel_ui__$FlxTypedButton_FlxButtonEvent.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_ui__$FlxTypedButton_FlxButtonEvent.prototype = {
	callback: null
	,sound: null
	,destroy: function() {
		this.callback = null;
		this.sound = flixel_util_FlxDestroyUtil.destroy(this.sound);
	}
	,fire: function() {
		if(this.callback != null) this.callback();
		if(this.sound != null) this.sound.play(true);
	}
	,__class__: flixel_ui__$FlxTypedButton_FlxButtonEvent
};
var flixel_util_FlxAngle = function() { };
$hxClasses["flixel.util.FlxAngle"] = flixel_util_FlxAngle;
flixel_util_FlxAngle.__name__ = ["flixel","util","FlxAngle"];
flixel_util_FlxAngle.__properties__ = {get_TO_RAD:"get_TO_RAD",get_TO_DEG:"get_TO_DEG"}
flixel_util_FlxAngle.rotatePoint = function(X,Y,PivotX,PivotY,Angle,point) {
	var sin = 0;
	var cos = 0;
	var radians = Angle * -(Math.PI / 180);
	while(radians < -Math.PI) radians += Math.PI * 2;
	while(radians > Math.PI) radians = radians - Math.PI * 2;
	if(radians < 0) {
		sin = 1.27323954 * radians + .405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	} else {
		sin = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	}
	radians += Math.PI / 2;
	if(radians > Math.PI) radians = radians - Math.PI * 2;
	if(radians < 0) {
		cos = 1.27323954 * radians + 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	} else {
		cos = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	}
	var dx = X - PivotX;
	var dy = Y - PivotY;
	if(point == null) point = flixel_util_FlxPoint.get(null,null);
	point.set_x(PivotX + cos * dx - sin * dy);
	point.set_y(PivotY - sin * dx - cos * dy);
	return point;
};
flixel_util_FlxAngle.getAngle = function(Point1,Point2) {
	var x = Point2.x - Point1.x;
	var y = Point2.y - Point1.y;
	var angle = 0;
	if(x != 0 || y != 0) {
		var c1 = Math.PI * 0.25;
		var c2 = 3 * c1;
		var ay;
		if(y < 0) ay = -y; else ay = y;
		if(x >= 0) angle = c1 - c1 * ((x - ay) / (x + ay)); else angle = c2 - c1 * ((x + ay) / (ay - x));
		angle = (y < 0?-angle:angle) * (180 / Math.PI);
		if(angle > 90) angle = angle - 270; else angle += 90;
	}
	if(Point1._weak) Point1.put();
	if(Point2._weak) Point2.put();
	return angle;
};
flixel_util_FlxAngle.sinCosGenerator = function(length,sinAmplitude,cosAmplitude,frequency) {
	if(frequency == null) frequency = 1.0;
	if(cosAmplitude == null) cosAmplitude = 1.0;
	if(sinAmplitude == null) sinAmplitude = 1.0;
	var sin = sinAmplitude;
	var cos = cosAmplitude;
	var frq = frequency * Math.PI / length;
	flixel_util_FlxAngle.cosTable = [];
	flixel_util_FlxAngle.sinTable = [];
	var _g = 0;
	while(_g < length) {
		var c = _g++;
		cos -= sin * frq;
		sin += cos * frq;
		flixel_util_FlxAngle.cosTable[c] = cos;
		flixel_util_FlxAngle.sinTable[c] = sin;
	}
};
flixel_util_FlxAngle.wrapAngle = function(angle) {
	if(angle > 180) angle = -180; else if(angle < -180) angle = 180;
	return angle;
};
flixel_util_FlxAngle.angleLimit = function(angle,min,max) {
	if(angle > max) angle = max; else if(angle < min) angle = min;
	return angle;
};
flixel_util_FlxAngle.asDegrees = function(radians) {
	return radians * (180 / Math.PI);
};
flixel_util_FlxAngle.asRadians = function(degrees) {
	return degrees * (Math.PI / 180);
};
flixel_util_FlxAngle.angleBetween = function(SpriteA,SpriteB,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = SpriteB.x + SpriteB.origin.x - (SpriteA.x + SpriteA.origin.x);
	var dy = SpriteB.y + SpriteB.origin.y - (SpriteA.y + SpriteA.origin.y);
	if(AsDegrees) return flixel_util_FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel_util_FlxAngle.angleBetweenPoint = function(Sprite,Target,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = Target.x - (Sprite.x + Sprite.origin.x);
	var dy = Target.y - (Sprite.y + Sprite.origin.y);
	if(AsDegrees) return flixel_util_FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel_util_FlxAngle.angleBetweenMouse = function(Object,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	if(Object == null) return 0;
	var p = Object.getScreenXY();
	var dx = flixel_FlxG.mouse.screenX - p.x;
	var dy = flixel_FlxG.mouse.screenY - p.y;
	if(AsDegrees) return flixel_util_FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel_util_FlxAngle.angleBetweenTouch = function(Object,Touch,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var p = Object.getScreenXY();
	var dx = Touch.screenX - p.x;
	var dy = Touch.screenY - p.y;
	if(AsDegrees) return flixel_util_FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel_util_FlxAngle.getCartesianCoords = function(Radius,Angle,point) {
	var p = point;
	if(p == null) p = flixel_util_FlxPoint.get(null,null);
	p.set_x(Radius * Math.cos(Angle * (Math.PI / 180)));
	p.set_y(Radius * Math.sin(Angle * (Math.PI / 180)));
	return p;
};
flixel_util_FlxAngle.getPolarCoords = function(X,Y,point) {
	var p = point;
	if(p == null) p = flixel_util_FlxPoint.get(null,null);
	p.set_x(Math.sqrt(X * X + Y * Y));
	p.set_y(Math.atan2(Y,X) * (180 / Math.PI));
	return p;
};
flixel_util_FlxAngle.get_TO_DEG = function() {
	return 180 / Math.PI;
};
flixel_util_FlxAngle.get_TO_RAD = function() {
	return Math.PI / 180;
};
var flixel_util_FlxArrayUtil = function() { };
$hxClasses["flixel.util.FlxArrayUtil"] = flixel_util_FlxArrayUtil;
flixel_util_FlxArrayUtil.__name__ = ["flixel","util","FlxArrayUtil"];
flixel_util_FlxArrayUtil.setLength_flixel_system_replay_FrameRecord = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel_util_FlxArrayUtil.getRandom_flixel_group_FlxTypedGroup_T = function(Objects,StartIndex,EndIndex) {
	if(EndIndex == null) EndIndex = 0;
	if(StartIndex == null) StartIndex = 0;
	return flixel_util_FlxRandom.getObject_getRandom_T(Objects,StartIndex,EndIndex);
};
flixel_util_FlxArrayUtil.setLength_Int = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel_util_FlxArrayUtil.fastSplice_flixel_tweens_FlxTween = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel_util_FlxArrayUtil.fastSplice_flixel_util_FlxPath = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel_util_FlxArrayUtil.setLength_flash_geom_Rectangle = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel_util_FlxArrayUtil.fastSplice_flixel_util_FlxTimer = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel_util_FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel_util_FlxArrayUtil.fastSplice_flixel_text_FlxTextFormat = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel_util_FlxArrayUtil.setLength_flixel_input_keyboard_FlxKey = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel_util_FlxArrayUtil.swapAndPop_fastSplice_T = function(array,index) {
	array[index] = array[array.length - 1];
	array.pop();
	return array;
};
flixel_util_FlxArrayUtil.clearArray = function(array,recursive) {
	if(recursive == null) recursive = false;
	if(array != null) {
		if(!recursive) while(array.length > 0) array.pop(); else while(array.length > 0) {
			var thing = array.pop();
			if((thing instanceof Array) && thing.__enum__ == null) flixel_util_FlxArrayUtil.clearArray(array,recursive);
		}
	}
};
var flixel_util_FlxBitmapDataPool = function() { };
$hxClasses["flixel.util.FlxBitmapDataPool"] = flixel_util_FlxBitmapDataPool;
flixel_util_FlxBitmapDataPool.__name__ = ["flixel","util","FlxBitmapDataPool"];
flixel_util_FlxBitmapDataPool.__properties__ = {set_maxLength:"set_maxLength"}
flixel_util_FlxBitmapDataPool.get = function(w,h,transparent,fillColor,exactSize) {
	if(exactSize == null) exactSize = false;
	if(transparent == null) transparent = true;
	var res = null;
	var node = flixel_util_FlxBitmapDataPool._head;
	while(node != null) {
		var bmd = node.bmd;
		if(bmd.__transparent == transparent && bmd.component.width >= w && bmd.component.height >= h && (!exactSize || exactSize && bmd.component.width == w && bmd.component.height == h)) {
			res = bmd;
			if(node.prev != null) node.prev.next = node.next;
			if(node.next != null) node.next.prev = node.prev;
			if(node == flixel_util_FlxBitmapDataPool._head) flixel_util_FlxBitmapDataPool._head = node.next;
			if(node == flixel_util_FlxBitmapDataPool._tail) flixel_util_FlxBitmapDataPool._tail = node.prev;
			node = null;
			flixel_util_FlxBitmapDataPool.$length--;
			break;
		}
		node = node.next;
	}
	if(res != null) {
		if(fillColor != null) {
			flixel_util_FlxBitmapDataPool._rect.x = 0;
			flixel_util_FlxBitmapDataPool._rect.y = 0;
			flixel_util_FlxBitmapDataPool._rect.width = w;
			flixel_util_FlxBitmapDataPool._rect.height = h;
			res.fillRect(flixel_util_FlxBitmapDataPool._rect,fillColor);
		}
	} else res = new flash_display_BitmapData(w,h,transparent,fillColor != null?fillColor:-1);
	return res;
};
flixel_util_FlxBitmapDataPool.put = function(bmd) {
	if(flixel_util_FlxBitmapDataPool.$length >= flixel_util_FlxBitmapDataPool.maxLength) {
		var last = flixel_util_FlxBitmapDataPool._tail;
		last.bmd.dispose();
		if(last.prev != null) {
			last.prev.next = null;
			flixel_util_FlxBitmapDataPool._tail = last.prev;
		}
		last = null;
		flixel_util_FlxBitmapDataPool.$length--;
	}
	var node = new flixel_util__$FlxBitmapDataPool_FlxBitmapDataPoolNode(bmd);
	node.next = flixel_util_FlxBitmapDataPool._head;
	if(flixel_util_FlxBitmapDataPool._head == null) flixel_util_FlxBitmapDataPool._head = flixel_util_FlxBitmapDataPool._tail = node; else {
		flixel_util_FlxBitmapDataPool._head = node;
		node.next.prev = node;
	}
	flixel_util_FlxBitmapDataPool.$length++;
};
flixel_util_FlxBitmapDataPool.clear = function() {
	var node = flixel_util_FlxBitmapDataPool._head;
	while(node != null) {
		var bmd = node.bmd;
		bmd.dispose();
		bmd = null;
		node = node.next;
	}
	flixel_util_FlxBitmapDataPool.$length = 0;
	flixel_util_FlxBitmapDataPool._head = flixel_util_FlxBitmapDataPool._tail = null;
};
flixel_util_FlxBitmapDataPool.set_maxLength = function(value) {
	if(flixel_util_FlxBitmapDataPool.maxLength != value) {
		var node = flixel_util_FlxBitmapDataPool._tail;
		while(node != null && flixel_util_FlxBitmapDataPool.$length > value) {
			var bmd = node.bmd;
			bmd.dispose();
			bmd = null;
			node = node.prev;
			flixel_util_FlxBitmapDataPool.$length--;
		}
	}
	return flixel_util_FlxBitmapDataPool.maxLength = value;
};
var flixel_util__$FlxBitmapDataPool_FlxBitmapDataPoolNode = function(bmd,prev,next) {
	this.bmd = bmd;
	this.prev = prev;
	this.next = next;
};
$hxClasses["flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode"] = flixel_util__$FlxBitmapDataPool_FlxBitmapDataPoolNode;
flixel_util__$FlxBitmapDataPool_FlxBitmapDataPoolNode.__name__ = ["flixel","util","_FlxBitmapDataPool","FlxBitmapDataPoolNode"];
flixel_util__$FlxBitmapDataPool_FlxBitmapDataPoolNode.prototype = {
	bmd: null
	,prev: null
	,next: null
	,__class__: flixel_util__$FlxBitmapDataPool_FlxBitmapDataPoolNode
};
var flixel_util_FlxCollision = function() { };
$hxClasses["flixel.util.FlxCollision"] = flixel_util_FlxCollision;
flixel_util_FlxCollision.__name__ = ["flixel","util","FlxCollision"];
flixel_util_FlxCollision.pixelPerfectCheck = function(Contact,Target,AlphaTolerance,Camera) {
	if(AlphaTolerance == null) AlphaTolerance = 1;
	var considerRotation = Contact.angle != 0 || Target.angle != 0;
	if(Camera != null) Camera = Camera; else Camera = flixel_FlxG.camera;
	flixel_util_FlxCollision.pointA.x = Contact.x - (Camera.scroll.x * Contact.scrollFactor.x | 0) - Contact.offset.x;
	flixel_util_FlxCollision.pointA.y = Contact.y - (Camera.scroll.y * Contact.scrollFactor.y | 0) - Contact.offset.y;
	flixel_util_FlxCollision.pointB.x = Target.x - (Camera.scroll.x * Target.scrollFactor.x | 0) - Target.offset.x;
	flixel_util_FlxCollision.pointB.y = Target.y - (Camera.scroll.y * Target.scrollFactor.y | 0) - Target.offset.y;
	if(considerRotation) {
		flixel_util_FlxCollision.centerA.setTo(Contact.origin.x,Contact.origin.y);
		flixel_util_FlxCollision.centerB.setTo(Target.origin.x,Target.origin.y);
		flixel_util_FlxCollision.boundsA.x = flixel_util_FlxCollision.pointA.x + flixel_util_FlxCollision.centerA.x - flixel_util_FlxCollision.centerA.get_length();
		flixel_util_FlxCollision.boundsA.y = flixel_util_FlxCollision.pointA.y + flixel_util_FlxCollision.centerA.y - flixel_util_FlxCollision.centerA.get_length();
		flixel_util_FlxCollision.boundsA.width = flixel_util_FlxCollision.centerA.get_length() * 2;
		flixel_util_FlxCollision.boundsA.height = flixel_util_FlxCollision.boundsA.width;
		flixel_util_FlxCollision.boundsB.x = flixel_util_FlxCollision.pointB.x + flixel_util_FlxCollision.centerB.x - flixel_util_FlxCollision.centerB.get_length();
		flixel_util_FlxCollision.boundsB.y = flixel_util_FlxCollision.pointB.y + flixel_util_FlxCollision.centerB.y - flixel_util_FlxCollision.centerB.get_length();
		flixel_util_FlxCollision.boundsB.width = flixel_util_FlxCollision.centerB.get_length() * 2;
		flixel_util_FlxCollision.boundsB.height = flixel_util_FlxCollision.boundsB.width;
	} else {
		flixel_util_FlxCollision.boundsA.x = flixel_util_FlxCollision.pointA.x;
		flixel_util_FlxCollision.boundsA.y = flixel_util_FlxCollision.pointA.y;
		flixel_util_FlxCollision.boundsA.width = Contact.frameWidth;
		flixel_util_FlxCollision.boundsA.height = Contact.frameHeight;
		flixel_util_FlxCollision.boundsB.x = flixel_util_FlxCollision.pointB.x;
		flixel_util_FlxCollision.boundsB.y = flixel_util_FlxCollision.pointB.y;
		flixel_util_FlxCollision.boundsB.width = Target.frameWidth;
		flixel_util_FlxCollision.boundsB.height = Target.frameHeight;
	}
	var intersect = flixel_util_FlxCollision.boundsA.intersection(flixel_util_FlxCollision.boundsB);
	if(intersect.isEmpty() || intersect.width < 1 || intersect.height < 1) return false;
	flixel_util_FlxCollision.matrixA.identity();
	flixel_util_FlxCollision.matrixA.translate(-(intersect.x - flixel_util_FlxCollision.boundsA.x),-(intersect.y - flixel_util_FlxCollision.boundsA.y));
	flixel_util_FlxCollision.matrixB.identity();
	flixel_util_FlxCollision.matrixB.translate(-(intersect.x - flixel_util_FlxCollision.boundsB.x),-(intersect.y - flixel_util_FlxCollision.boundsB.y));
	var testA = Contact.framePixels;
	var testB = Target.framePixels;
	var overlapWidth = intersect.width | 0;
	var overlapHeight = intersect.height | 0;
	if(considerRotation) {
		flixel_util_FlxCollision.testMatrix.identity();
		flixel_util_FlxCollision.testMatrix.translate(-Contact.origin.x,-Contact.origin.y);
		flixel_util_FlxCollision.testMatrix.rotate(Contact.angle * (Math.PI / 180));
		flixel_util_FlxCollision.testMatrix.translate(flixel_util_FlxCollision.boundsA.width / 2,flixel_util_FlxCollision.boundsA.height / 2);
		var testA2 = flixel_util_FlxBitmapDataPool.get(Math.floor(flixel_util_FlxCollision.boundsA.width),Math.floor(flixel_util_FlxCollision.boundsA.height),true,0,false);
		testA2.draw(testA,flixel_util_FlxCollision.testMatrix,null,null,null,false);
		testA = testA2;
		flixel_util_FlxCollision.testMatrix.identity();
		flixel_util_FlxCollision.testMatrix.translate(-Target.origin.x,-Target.origin.y);
		flixel_util_FlxCollision.testMatrix.rotate(Target.angle * (Math.PI / 180));
		flixel_util_FlxCollision.testMatrix.translate(flixel_util_FlxCollision.boundsB.width / 2,flixel_util_FlxCollision.boundsB.height / 2);
		var testB2 = flixel_util_FlxBitmapDataPool.get(Math.floor(flixel_util_FlxCollision.boundsB.width),Math.floor(flixel_util_FlxCollision.boundsB.height),true,0,false);
		testB2.draw(testB,flixel_util_FlxCollision.testMatrix,null,null,null,false);
		testB = testB2;
	}
	flixel_util_FlxCollision.boundsA.x = -flixel_util_FlxCollision.matrixA.tx | 0;
	flixel_util_FlxCollision.boundsA.y = -flixel_util_FlxCollision.matrixA.ty | 0;
	flixel_util_FlxCollision.boundsA.width = overlapWidth;
	flixel_util_FlxCollision.boundsA.height = overlapHeight;
	flixel_util_FlxCollision.boundsB.x = -flixel_util_FlxCollision.matrixB.tx | 0;
	flixel_util_FlxCollision.boundsB.y = -flixel_util_FlxCollision.matrixB.ty | 0;
	flixel_util_FlxCollision.boundsB.width = overlapWidth;
	flixel_util_FlxCollision.boundsB.height = overlapHeight;
	var pixelsA = testA.getPixels(flixel_util_FlxCollision.boundsA);
	var pixelsB = testB.getPixels(flixel_util_FlxCollision.boundsB);
	var hit = false;
	var alphaA = 0;
	var alphaB = 0;
	var overlapPixels = overlapWidth * overlapHeight;
	var alphaIdx = 0;
	var _g1 = 0;
	var _g = Math.ceil(overlapPixels / 2);
	while(_g1 < _g) {
		var i = _g1++;
		alphaIdx = i << 3;
		pixelsA.position = pixelsB.position = alphaIdx;
		alphaA = pixelsA.data.getUint8(pixelsA.position++);
		alphaB = pixelsB.data.getUint8(pixelsB.position++);
		if(alphaA >= AlphaTolerance && alphaB >= AlphaTolerance) {
			hit = true;
			break;
		}
	}
	if(!hit) {
		var _g11 = 0;
		var _g2 = overlapPixels >> 1;
		while(_g11 < _g2) {
			var i1 = _g11++;
			alphaIdx = (i1 << 3) + 4;
			pixelsA.position = pixelsB.position = alphaIdx;
			alphaA = pixelsA.data.getUint8(pixelsA.position++);
			alphaB = pixelsB.data.getUint8(pixelsB.position++);
			if(alphaA >= AlphaTolerance && alphaB >= AlphaTolerance) {
				hit = true;
				break;
			}
		}
	}
	if(considerRotation) {
		flixel_util_FlxBitmapDataPool.put(testA);
		flixel_util_FlxBitmapDataPool.put(testB);
	}
	return hit;
};
flixel_util_FlxCollision.pixelPerfectPointCheck = function(PointX,PointY,Target,AlphaTolerance) {
	if(AlphaTolerance == null) AlphaTolerance = 1;
	if(flixel_util_FlxMath.pointInCoordinates(PointX,PointY,Math.floor(Target.x),Math.floor(Target.y),Std["int"](Target.get_width()),Std["int"](Target.get_height())) == false) return false;
	var test = Target.framePixels;
	var pixelAlpha = 0;
	pixelAlpha = flixel_util_FlxColorUtil.getAlpha(test.getPixel32(Math.floor(PointX - Target.x),Math.floor(PointY - Target.y)));
	if(pixelAlpha >= AlphaTolerance) return true; else return false;
};
flixel_util_FlxCollision.createCameraWall = function(Camera,Placement,Thickness,AdjustWorldBounds) {
	if(AdjustWorldBounds == null) AdjustWorldBounds = false;
	var left = null;
	var right = null;
	var top = null;
	var bottom = null;
	switch(Placement) {
	case 0:
		left = new flixel_tile_FlxTileblock(Math.floor(Camera.x - Thickness),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		right = new flixel_tile_FlxTileblock(Math.floor(Camera.x + Camera.width),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		top = new flixel_tile_FlxTileblock(Math.floor(Camera.x - Thickness),Math.floor(Camera.y - Thickness),Camera.width + Thickness * 2,Thickness);
		bottom = new flixel_tile_FlxTileblock(Math.floor(Camera.x - Thickness),Camera.height,Camera.width + Thickness * 2,Thickness);
		if(AdjustWorldBounds) flixel_FlxG.worldBounds.set(Camera.x - Thickness,Camera.y - Thickness,Camera.width + Thickness * 2,Camera.height + Thickness * 2);
		break;
	case 1:
		left = new flixel_tile_FlxTileblock(Math.floor(Camera.x),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		right = new flixel_tile_FlxTileblock(Math.floor(Camera.x + Camera.width - Thickness),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		top = new flixel_tile_FlxTileblock(Math.floor(Camera.x),Math.floor(Camera.y),Camera.width,Thickness);
		bottom = new flixel_tile_FlxTileblock(Math.floor(Camera.x),Camera.height - Thickness,Camera.width,Thickness);
		if(AdjustWorldBounds) flixel_FlxG.worldBounds.set(Camera.x,Camera.y,Camera.width,Camera.height);
		break;
	}
	var result = new flixel_group_FlxGroup(4);
	result.add(left);
	result.add(right);
	result.add(top);
	result.add(bottom);
	return result;
};
var flixel_util_FlxColor = function() { };
$hxClasses["flixel.util.FlxColor"] = flixel_util_FlxColor;
flixel_util_FlxColor.__name__ = ["flixel","util","FlxColor"];
var flixel_util_FlxColorUtil = function() { };
$hxClasses["flixel.util.FlxColorUtil"] = flixel_util_FlxColorUtil;
flixel_util_FlxColorUtil.__name__ = ["flixel","util","FlxColorUtil"];
flixel_util_FlxColorUtil.makeFromARGB = function(Alpha,Red,Green,Blue) {
	if(Alpha == null) Alpha = 1.0;
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (Red & 255) << 16 | (Green & 255) << 8 | Blue & 255;
};
flixel_util_FlxColorUtil.makeFromHSBA = function(Hue,Saturation,Brightness,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	var red;
	var green;
	var blue;
	if(Saturation == 0.0) {
		red = Brightness;
		green = Brightness;
		blue = Brightness;
	} else {
		if(Hue == 360) Hue = 0;
		var slice = Hue / 60 | 0;
		var hf = Hue / 60 - slice;
		var aa = Brightness * (1 - Saturation);
		var bb = Brightness * (1 - Saturation * hf);
		var cc = Brightness * (1 - Saturation * (1.0 - hf));
		switch(slice) {
		case 0:
			red = Brightness;
			green = cc;
			blue = aa;
			break;
		case 1:
			red = bb;
			green = Brightness;
			blue = aa;
			break;
		case 2:
			red = aa;
			green = Brightness;
			blue = cc;
			break;
		case 3:
			red = aa;
			green = bb;
			blue = Brightness;
			break;
		case 4:
			red = cc;
			green = aa;
			blue = Brightness;
			break;
		case 5:
			red = Brightness;
			green = aa;
			blue = bb;
			break;
		default:
			red = 0;
			green = 0;
			blue = 0;
		}
	}
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (red * 255 | 0) << 16 | (green * 255 | 0) << 8 | (blue * 255 | 0);
};
flixel_util_FlxColorUtil.getARGB = function(Color,Results) {
	var red = Color >> 16 & 255;
	var green = Color >> 8 & 255;
	var blue = Color & 255;
	var alpha = flixel_util_FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { red : red, green : green, blue : blue, alpha : alpha};
	return { red : red, green : green, blue : blue, alpha : alpha};
};
flixel_util_FlxColorUtil.getHSBA = function(Color,Results) {
	var hue;
	var saturation;
	var brightness;
	var alpha;
	var red = (Color >> 16 & 255) / 255;
	var green = (Color >> 8 & 255) / 255;
	var blue = (Color & 255) / 255;
	var m;
	if(red > green) m = red; else m = green;
	var dmax;
	if(m > blue) dmax = m; else dmax = blue;
	if(red > green) m = green; else m = red;
	var dmin;
	if(m > blue) dmin = blue; else dmin = m;
	var range = dmax - dmin;
	brightness = flixel_util_FlxMath.roundDecimal(dmax,4);
	saturation = 0;
	hue = 0;
	if(dmax != 0) saturation = flixel_util_FlxMath.roundDecimal(range / dmax,4);
	if(saturation != 0) {
		if(red == dmax) hue = (green - blue) / range; else if(green == dmax) hue = 2 + (blue - red) / range; else if(blue == dmax) hue = 4 + (red - green) / range;
		hue *= 60;
		if(hue < 0) hue += 360;
	}
	alpha = flixel_util_FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
	return { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
};
flixel_util_FlxColorUtil.getAlpha = function(Color) {
	return Color >> 24 & 255;
};
flixel_util_FlxColorUtil.getAlphaFloat = function(Color) {
	var f = Color >> 24 & 255;
	return f / 255;
};
flixel_util_FlxColorUtil.getRed = function(Color) {
	return Color >> 16 & 255;
};
flixel_util_FlxColorUtil.getGreen = function(Color) {
	return Color >> 8 & 255;
};
flixel_util_FlxColorUtil.getBlue = function(Color) {
	return Color & 255;
};
flixel_util_FlxColorUtil.getRandomColor = function(Min,Max,Alpha) {
	if(Alpha == null) Alpha = 255;
	if(Max == null) Max = 255;
	if(Min == null) Min = 0;
	return flixel_util_FlxRandom.color(Min,Max,Alpha);
};
flixel_util_FlxColorUtil.getColor32 = function(Alpha,Red,Green,Blue) {
	return Alpha << 24 | Red << 16 | Green << 8 | Blue;
};
flixel_util_FlxColorUtil.getColor24 = function(Red,Green,Blue) {
	return Red << 16 | Green << 8 | Blue;
};
flixel_util_FlxColorUtil.getHSVColorWheel = function(Alpha) {
	if(Alpha == null) Alpha = 255;
	var colors = [];
	var _g = 0;
	while(_g < 360) {
		var c = _g++;
		colors[c] = flixel_util_FlxColorUtil.HSVtoARGB(c,1.0,1.0,Alpha);
	}
	return colors;
};
flixel_util_FlxColorUtil.getComplementHarmony = function(Color) {
	var hsv = flixel_util_FlxColorUtil.RGBtoHSV(Color);
	var opposite = flixel_util_FlxMath.wrapValue(hsv.hue | 0,180,359);
	return flixel_util_FlxColorUtil.HSVtoARGB(opposite,1.0,1.0);
};
flixel_util_FlxColorUtil.getAnalogousHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = flixel_util_FlxColorUtil.RGBtoHSV(Color);
	if(Threshold > 359 || Threshold < 0) null;
	var warmer = flixel_util_FlxMath.wrapValue(hsv.hue | 0,359 - Threshold,359);
	var colder = flixel_util_FlxMath.wrapValue(hsv.hue | 0,Threshold,359);
	return { color1 : Color, color2 : flixel_util_FlxColorUtil.HSVtoARGB(warmer,1.0,1.0), color3 : flixel_util_FlxColorUtil.HSVtoARGB(colder,1.0,1.0), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
};
flixel_util_FlxColorUtil.getSplitComplementHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = flixel_util_FlxColorUtil.RGBtoHSV(Color);
	if(Threshold >= 359 || Threshold <= 0) null;
	var opposite = flixel_util_FlxMath.wrapValue(hsv.hue | 0,180,359);
	var warmer = flixel_util_FlxMath.wrapValue(hsv.hue | 0,opposite - Threshold,359);
	var colder = flixel_util_FlxMath.wrapValue(hsv.hue | 0,opposite + Threshold,359);
	return { color1 : Color, color2 : flixel_util_FlxColorUtil.HSVtoARGB(warmer,hsv.saturation,hsv.value), color3 : flixel_util_FlxColorUtil.HSVtoARGB(colder,hsv.saturation,hsv.value), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
};
flixel_util_FlxColorUtil.getTriadicHarmony = function(Color) {
	var hsv = flixel_util_FlxColorUtil.RGBtoHSV(Color);
	var triadic1 = flixel_util_FlxMath.wrapValue(hsv.hue | 0,120,359);
	var triadic2 = flixel_util_FlxMath.wrapValue(triadic1,120,359);
	return { color1 : Color, color2 : flixel_util_FlxColorUtil.HSVtoARGB(triadic1,1.0,1.0), color3 : flixel_util_FlxColorUtil.HSVtoARGB(triadic2,1.0,1.0)};
};
flixel_util_FlxColorUtil.getColorInfo = function(Color) {
	var argb = flixel_util_FlxColorUtil.getARGB(Color,null);
	var hsl = flixel_util_FlxColorUtil.RGBtoHSV(Color);
	var result = flixel_util_FlxColorUtil.ARGBtoHexString(Color) + "\n";
	result += "Alpha: " + argb.alpha + " Red: " + argb.red + " Green: " + argb.green + " Blue: " + argb.blue + "\n";
	result += "Hue: " + hsl.hue + " Saturation: " + hsl.saturation + " Lightnes: " + hsl.lightness;
	return result;
};
flixel_util_FlxColorUtil.ARGBtoHexString = function(Color) {
	var argb = flixel_util_FlxColorUtil.getARGB(Color,null);
	return "0x" + flixel_util_FlxColorUtil.colorToHexString(argb.alpha | 0) + flixel_util_FlxColorUtil.colorToHexString(argb.red) + flixel_util_FlxColorUtil.colorToHexString(argb.green) + flixel_util_FlxColorUtil.colorToHexString(argb.blue);
};
flixel_util_FlxColorUtil.ARGBtoWebString = function(Color) {
	var argb = flixel_util_FlxColorUtil.getARGB(Color,null);
	return "#" + flixel_util_FlxColorUtil.colorToHexString(argb.red) + flixel_util_FlxColorUtil.colorToHexString(argb.green) + flixel_util_FlxColorUtil.colorToHexString(argb.blue);
};
flixel_util_FlxColorUtil.colorToHexString = function(Color) {
	var digits = "0123456789ABCDEF";
	var lsd = Color % 16;
	var msd = (Color - lsd) / 16;
	return digits.charAt(msd | 0) + digits.charAt(lsd | 0);
};
flixel_util_FlxColorUtil.HSVtoARGB = function(H,S,V,Alpha) {
	if(Alpha == null) Alpha = 255;
	var result = 0;
	if(S == 0.0) result = Alpha << 24 | (V * 255 | 0) << 16 | (V * 255 | 0) << 8 | (V * 255 | 0); else {
		H = H / 60.0;
		var f = H - (H | 0);
		var p = V * (1.0 - S);
		var q = V * (1.0 - S * f);
		var t = V * (1.0 - S * (1.0 - f));
		var _g = H | 0;
		switch(_g) {
		case 0:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (t * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 1:
			result = Alpha << 24 | (q * 255 | 0) << 16 | (V * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 2:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (V * 255 | 0) << 8 | (t * 255 | 0);
			break;
		case 3:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (q * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 4:
			result = Alpha << 24 | (t * 255 | 0) << 16 | (p * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 5:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (p * 255 | 0) << 8 | (q * 255 | 0);
			break;
		default:
			null;
		}
	}
	return result;
};
flixel_util_FlxColorUtil.RGBtoHSV = function(Color) {
	var rgb = flixel_util_FlxColorUtil.getARGB(Color,null);
	var red = rgb.red / 255;
	var green = rgb.green / 255;
	var blue = rgb.blue / 255;
	var min = Math.min(red,Math.min(green,blue));
	var max = Math.max(red,Math.max(green,blue));
	var delta = max - min;
	var lightness = (max + min) / 2;
	var hue = 0;
	var saturation;
	if(delta == 0) {
		hue = 0;
		saturation = 0;
	} else {
		if(lightness < 0.5) saturation = delta / (max + min); else saturation = delta / (2 - max - min);
		var delta_r = ((max - red) / 6 + delta / 2) / delta;
		var delta_g = ((max - green) / 6 + delta / 2) / delta;
		var delta_b = ((max - blue) / 6 + delta / 2) / delta;
		if(red == max) hue = delta_b - delta_g; else if(green == max) hue = 0.33333333333333331 + delta_r - delta_b; else if(blue == max) hue = 0.66666666666666663 + delta_g - delta_r;
		if(hue < 0) hue += 1;
		if(hue > 1) hue -= 1;
	}
	hue *= 360;
	hue = Math.round(hue);
	return { hue : hue, saturation : saturation, lightness : lightness, value : lightness};
};
flixel_util_FlxColorUtil.ARGBtoRGB = function(Color) {
	return (Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255;
};
flixel_util_FlxColorUtil.interpolateColor = function(Color1,Color2,Steps,CurrentStep,Alpha) {
	if(Alpha == null) Alpha = 255;
	var src1 = flixel_util_FlxColorUtil.getARGB(Color1,null);
	var src2 = flixel_util_FlxColorUtil.getARGB(Color2,null);
	var r = (src2.red - src1.red) * CurrentStep / Steps + src1.red | 0;
	var g = (src2.green - src1.green) * CurrentStep / Steps + src1.green | 0;
	var b = (src2.blue - src1.blue) * CurrentStep / Steps + src1.blue | 0;
	return Alpha << 24 | r << 16 | g << 8 | b;
};
flixel_util_FlxColorUtil.interpolateColorWithRGB = function(Color,R2,G2,B2,Steps,CurrentStep) {
	var src = flixel_util_FlxColorUtil.getARGB(Color,null);
	var r = (R2 - src.red) * CurrentStep / Steps + src.red | 0;
	var g = (G2 - src.green) * CurrentStep / Steps + src.green | 0;
	var b = (B2 - src.blue) * CurrentStep / Steps + src.blue | 0;
	return r << 16 | g << 8 | b;
};
flixel_util_FlxColorUtil.interpolateRGB = function(R1,G1,B1,R2,G2,B2,Steps,CurrentStep) {
	var r = (R2 - R1) * CurrentStep / Steps + R1 | 0;
	var g = (G2 - G1) * CurrentStep / Steps + G1 | 0;
	var b = (B2 - B1) * CurrentStep / Steps + B1 | 0;
	return r << 16 | g << 8 | b;
};
flixel_util_FlxColorUtil.darken = function(Color,Factor) {
	if(Factor == null) Factor = 0.2;
	flixel_util_FlxMath.bound(Factor,0,1);
	var r = Color >> 16 & 255;
	var g = Color >> 8 & 255;
	var b = Color & 255;
	var a = flixel_util_FlxColorUtil.getAlphaFloat(Color);
	Factor = 1 - Factor;
	r = r * Factor | 0;
	g = g * Factor | 0;
	b = b * Factor | 0;
	return (((a > 1?a:a * 255) | 0) & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
};
flixel_util_FlxColorUtil.brighten = function(Color,Factor) {
	if(Factor == null) Factor = 0.2;
	flixel_util_FlxMath.bound(Factor,0,1);
	var r = Color >> 16 & 255;
	var g = Color >> 8 & 255;
	var b = Color & 255;
	var a = flixel_util_FlxColorUtil.getAlphaFloat(Color);
	r += (255 - r) * Factor | 0;
	g += (255 - g) * Factor | 0;
	b += (255 - b) * Factor | 0;
	return (((a > 1?a:a * 255) | 0) & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
};
var flixel_util_FlxDestroyUtil = function() { };
$hxClasses["flixel.util.FlxDestroyUtil"] = flixel_util_FlxDestroyUtil;
flixel_util_FlxDestroyUtil.__name__ = ["flixel","util","FlxDestroyUtil"];
flixel_util_FlxDestroyUtil.destroy = function(object) {
	if(object != null) object.destroy();
	return null;
};
flixel_util_FlxDestroyUtil.destroyArray = function(array) {
	if(array != null) while(array.length > 0) flixel_util_FlxDestroyUtil.destroy(array.pop());
	return null;
};
flixel_util_FlxDestroyUtil.put = function(object) {
	if(object != null) object.put();
	return null;
};
flixel_util_FlxDestroyUtil.putArray = function(array) {
	if(array != null) while(array.length > 0) flixel_util_FlxDestroyUtil.put(array.pop());
	return null;
};
flixel_util_FlxDestroyUtil.dispose = function(Bitmap) {
	if(Bitmap != null) Bitmap.dispose();
	return null;
};
var flixel_util_FlxMath = function() { };
$hxClasses["flixel.util.FlxMath"] = flixel_util_FlxMath;
flixel_util_FlxMath.__name__ = ["flixel","util","FlxMath"];
flixel_util_FlxMath.roundDecimal = function(Value,Precision) {
	var mult = 1;
	var _g = 0;
	while(_g < Precision) {
		var i = _g++;
		mult *= 10;
	}
	return Math.round(Value * mult) / mult;
};
flixel_util_FlxMath.bound = function(Value,Min,Max) {
	var lowerBound;
	if(Value < Min) lowerBound = Min; else lowerBound = Value;
	if(lowerBound > Max) return Max; else return lowerBound;
};
flixel_util_FlxMath.lerp = function(Min,Max,Ratio) {
	return Min + Ratio * (Max - Min);
};
flixel_util_FlxMath.inBounds = function(Value,Min,Max) {
	return Value > Min && Value < Max;
};
flixel_util_FlxMath.isOdd = function(n) {
	if(((n | 0) & 1) != 0) return true; else return false;
};
flixel_util_FlxMath.isEven = function(n) {
	if(((n | 0) & 1) != 0) return false; else return true;
};
flixel_util_FlxMath.numericComparison = function(num1,num2) {
	if(num2 > num1) return -1; else if(num1 > num2) return 1;
	return 0;
};
flixel_util_FlxMath.pointInCoordinates = function(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
	if(pointX >= rectX && pointX <= rectX + rectWidth) {
		if(pointY >= rectY && pointY <= rectY + rectHeight) return true;
	}
	return false;
};
flixel_util_FlxMath.pointInFlxRect = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height) return true;
	return false;
};
flixel_util_FlxMath.mouseInFlxRect = function(useWorldCoords,rect) {
	if(rect == null) return true;
	if(useWorldCoords) return flixel_util_FlxMath.pointInFlxRect(Math.floor(flixel_FlxG.mouse.x),Math.floor(flixel_FlxG.mouse.y),rect); else return flixel_util_FlxMath.pointInFlxRect(flixel_FlxG.mouse.screenX,flixel_FlxG.mouse.screenY,rect);
};
flixel_util_FlxMath.pointInRectangle = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height) return true;
	return false;
};
flixel_util_FlxMath.maxAdd = function(value,amount,max,min) {
	if(min == null) min = 0;
	value += amount;
	if(value > max) value = max; else if(value <= min) value = min;
	return value;
};
flixel_util_FlxMath.wrapValue = function(value,amount,max) {
	var diff;
	value = Std["int"](Math.abs(value));
	amount = Std["int"](Math.abs(amount));
	max = Std["int"](Math.abs(max));
	diff = (value + amount) % max;
	return diff;
};
flixel_util_FlxMath.dotProduct = function(ax,ay,bx,by) {
	return ax * bx + ay * by;
};
flixel_util_FlxMath.vectorLength = function(dx,dy) {
	return Math.sqrt(dx * dx + dy * dy);
};
flixel_util_FlxMath.getDistance = function(Point1,Point2) {
	var dx = Point1.x - Point2.x;
	var dy = Point1.y - Point2.y;
	if(Point1._weak) Point1.put();
	if(Point2._weak) Point2.put();
	return Math.sqrt(dx * dx + dy * dy);
};
flixel_util_FlxMath.distanceBetween = function(SpriteA,SpriteB) {
	var dx = SpriteA.x + SpriteA.origin.x - (SpriteB.x + SpriteB.origin.x);
	var dy = SpriteA.y + SpriteA.origin.y - (SpriteB.y + SpriteB.origin.y);
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel_util_FlxMath.isDistanceWithin = function(SpriteA,SpriteB,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = SpriteA.x + SpriteA.origin.x - (SpriteB.x + SpriteB.origin.x);
	var dy = SpriteA.y + SpriteA.origin.y - (SpriteB.y + SpriteB.origin.y);
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel_util_FlxMath.distanceToPoint = function(Sprite,Target) {
	var dx = Sprite.x + Sprite.origin.x - Target.x;
	var dy = Sprite.y + Sprite.origin.y - Target.y;
	if(Target._weak) Target.put();
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel_util_FlxMath.isDistanceToPointWithin = function(Sprite,Target,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = Sprite.x + Sprite.origin.x - Target.x;
	var dy = Sprite.y + Sprite.origin.y - Target.y;
	if(Target._weak) Target.put();
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel_util_FlxMath.distanceToMouse = function(Sprite) {
	var dx = Sprite.x + Sprite.origin.x - flixel_FlxG.mouse.screenX;
	var dy = Sprite.y + Sprite.origin.y - flixel_FlxG.mouse.screenY;
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel_util_FlxMath.isDistanceToMouseWithin = function(Sprite,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = Sprite.x + Sprite.origin.x - flixel_FlxG.mouse.screenX;
	var dy = Sprite.y + Sprite.origin.y - flixel_FlxG.mouse.screenY;
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel_util_FlxMath.distanceToTouch = function(Sprite,Touch) {
	var dx = Sprite.x + Sprite.origin.x - Touch.screenX;
	var dy = Sprite.y + Sprite.origin.y - Touch.screenY;
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel_util_FlxMath.isDistanceToTouchWithin = function(Sprite,Touch,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = Sprite.x + Sprite.origin.x - Touch.screenX;
	var dy = Sprite.y + Sprite.origin.y - Touch.screenY;
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel_util_FlxMath.getDecimals = function(Number) {
	var helperArray = (Number == null?"null":"" + Number).split(".");
	var decimals = 0;
	if(helperArray.length > 1) decimals = helperArray[1].length;
	return decimals;
};
flixel_util_FlxMath.equal = function(aValueA,aValueB,aDiff) {
	if(aDiff == null) aDiff = 0.00001;
	return Math.abs(aValueA - aValueB) <= aDiff;
};
flixel_util_FlxMath.signOf = function(f) {
	if(f < 0) return -1; else return 1;
};
flixel_util_FlxMath.sameSign = function(f1,f2) {
	return (f1 < 0?-1:1) == (f2 < 0?-1:1);
};
var flixel_util_FlxCallbackPoint = function(setXCallback,setYCallback,setXYCallback) {
	flixel_util_FlxPoint.call(this);
	this._setXCallback = setXCallback;
	this._setYCallback = setXYCallback;
	this._setXYCallback = setXYCallback;
	if(this._setXCallback != null) {
		if(this._setYCallback == null) this._setYCallback = setXCallback;
		if(this._setXYCallback == null) this._setXYCallback = setXCallback;
	}
};
$hxClasses["flixel.util.FlxCallbackPoint"] = flixel_util_FlxCallbackPoint;
flixel_util_FlxCallbackPoint.__name__ = ["flixel","util","FlxCallbackPoint"];
flixel_util_FlxCallbackPoint.__super__ = flixel_util_FlxPoint;
flixel_util_FlxCallbackPoint.prototype = $extend(flixel_util_FlxPoint.prototype,{
	_setXCallback: null
	,_setYCallback: null
	,_setXYCallback: null
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		flixel_util_FlxPoint.prototype.set.call(this,X,Y);
		if(this._setXYCallback != null) this._setXYCallback(this);
		return this;
	}
	,set_x: function(Value) {
		flixel_util_FlxPoint.prototype.set_x.call(this,Value);
		if(this._setXCallback != null) this._setXCallback(this);
		return Value;
	}
	,set_y: function(Value) {
		flixel_util_FlxPoint.prototype.set_y.call(this,Value);
		if(this._setYCallback != null) this._setYCallback(this);
		return Value;
	}
	,destroy: function() {
		flixel_util_FlxPoint.prototype.destroy.call(this);
		this._setXCallback = null;
		this._setYCallback = null;
		this._setXYCallback = null;
	}
	,put: function() {
	}
	,__class__: flixel_util_FlxCallbackPoint
});
var flixel_util_FlxPool = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool"] = flixel_util_FlxPool;
flixel_util_FlxPool.__name__ = ["flixel","util","FlxPool"];
flixel_util_FlxPool.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel_util_FlxPool
	,__properties__: {get_length:"get_length"}
};
var flixel_util_FlxPool_$flixel_$util_$LabelValuePair = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_util_LabelValuePair"] = flixel_util_FlxPool_$flixel_$util_$LabelValuePair;
flixel_util_FlxPool_$flixel_$util_$LabelValuePair.__name__ = ["flixel","util","FlxPool_flixel_util_LabelValuePair"];
flixel_util_FlxPool_$flixel_$util_$LabelValuePair.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel_util_FlxPool_$flixel_$util_$LabelValuePair
	,__properties__: {get_length:"get_length"}
};
var flixel_util_FlxRandom = function() { };
$hxClasses["flixel.util.FlxRandom"] = flixel_util_FlxRandom;
flixel_util_FlxRandom.__name__ = ["flixel","util","FlxRandom"];
flixel_util_FlxRandom.__properties__ = {set_globalSeed:"set_globalSeed"}
flixel_util_FlxRandom.getObject_getRandom_T = function(Objects,StartIndex,EndIndex) {
	if(EndIndex == null) EndIndex = 0;
	if(StartIndex == null) StartIndex = 0;
	var selected = null;
	if(Objects.length != 0) {
		if(StartIndex < 0) StartIndex = 0;
		if(EndIndex < StartIndex) {
			StartIndex = StartIndex + EndIndex;
			EndIndex = StartIndex - EndIndex;
			StartIndex = StartIndex - EndIndex;
		}
		if(EndIndex <= 0 || EndIndex > Objects.length - 1) EndIndex = Objects.length - 1;
		selected = Objects[flixel_util_FlxRandom.intRanged(StartIndex,EndIndex)];
	}
	return selected;
};
flixel_util_FlxRandom.shuffleArray_shuffle_T = function(Objects,HowManyTimes) {
	HowManyTimes = Std["int"](Math.max(HowManyTimes,0));
	var tempObject = null;
	var _g = 0;
	while(_g < HowManyTimes) {
		var i = _g++;
		flixel_util_FlxRandom._intHelper2 = flixel_util_FlxRandom.intRanged(0,Objects.length - 1);
		flixel_util_FlxRandom._intHelper3 = flixel_util_FlxRandom.intRanged(0,Objects.length - 1);
		tempObject = Objects[flixel_util_FlxRandom._intHelper2];
		Objects[flixel_util_FlxRandom._intHelper2] = Objects[flixel_util_FlxRandom._intHelper3];
		Objects[flixel_util_FlxRandom._intHelper3] = tempObject;
	}
	return Objects;
};
flixel_util_FlxRandom.set_globalSeed = function(NewSeed) {
	if(NewSeed < 1) NewSeed = 1;
	if(NewSeed > 2147483647) NewSeed = 2147483647;
	flixel_util_FlxRandom._internalSeed = NewSeed;
	flixel_util_FlxRandom.globalSeed = NewSeed;
	return flixel_util_FlxRandom.globalSeed;
};
flixel_util_FlxRandom.resetGlobalSeed = function() {
	return flixel_util_FlxRandom.set_globalSeed(Std["int"](Math.random() * 2147483647));
};
flixel_util_FlxRandom["int"] = function() {
	return flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647;
};
flixel_util_FlxRandom["float"] = function() {
	return (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647;
};
flixel_util_FlxRandom.intRanged = function(Min,Max,Excludes) {
	if(Max == null) Max = 2147483647;
	if(Min == null) Min = 0;
	if(Min == Max) flixel_util_FlxRandom._intHelper = Min; else {
		if(Min > Max) {
			Min = Min + Max;
			Max = Min - Max;
			Min = Min - Max;
		}
		if(Excludes == null) flixel_util_FlxRandom._intHelper = Math.floor(Min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min + 1)); else do flixel_util_FlxRandom._intHelper = Math.floor(Min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min + 1)); while(HxOverrides.indexOf(Excludes,flixel_util_FlxRandom._intHelper,0) >= 0);
	}
	return flixel_util_FlxRandom._intHelper;
};
flixel_util_FlxRandom.floatRanged = function(Min,Max,Excludes) {
	if(Max == null) Max = 1;
	if(Min == null) Min = 0;
	if(Min == Max) flixel_util_FlxRandom._floatHelper = Min; else {
		if(Min > Max) {
			Min = Min + Max;
			Max = Min - Max;
			Min = Min - Max;
		}
		if(Excludes == null) flixel_util_FlxRandom._floatHelper = Min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min); else do flixel_util_FlxRandom._floatHelper = Min + (flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min); while(HxOverrides.indexOf(Excludes,flixel_util_FlxRandom._floatHelper,0) >= 0);
	}
	return flixel_util_FlxRandom._floatHelper;
};
flixel_util_FlxRandom.chanceRoll = function(Chance) {
	if(Chance == null) Chance = 50;
	return flixel_util_FlxRandom.floatRanged(0,100) < Chance;
};
flixel_util_FlxRandom.sign = function(Chance) {
	if(Chance == null) Chance = 50;
	if(flixel_util_FlxRandom.floatRanged(0,100) < Chance) return 1; else return -1;
};
flixel_util_FlxRandom.weightedPick = function(WeightsArray) {
	flixel_util_FlxRandom._floatHelper = 0;
	var _g = 0;
	while(_g < WeightsArray.length) {
		var i = WeightsArray[_g];
		++_g;
		flixel_util_FlxRandom._floatHelper += i;
	}
	flixel_util_FlxRandom._floatHelper = flixel_util_FlxRandom.floatRanged(0,flixel_util_FlxRandom._floatHelper);
	var _g1 = 0;
	var _g2 = WeightsArray.length;
	while(_g1 < _g2) {
		var i1 = _g1++;
		if(flixel_util_FlxRandom._floatHelper < WeightsArray[i1]) {
			flixel_util_FlxRandom._intHelper = i1;
			break;
		}
		flixel_util_FlxRandom._floatHelper -= WeightsArray[i1];
	}
	return flixel_util_FlxRandom._intHelper;
};
flixel_util_FlxRandom.color = function(Min,Max,Alpha,GreyScale) {
	if(GreyScale == null) GreyScale = false;
	if(Alpha == null) Alpha = 255;
	if(Max == null) Max = 255;
	if(Min == null) Min = 0;
	if(Min < 0) Min = 0;
	if(Min > 255) Min = 255;
	if(Max < 0) Max = 0;
	if(Max > 255) Max = 255;
	if(Alpha < 0) Alpha = 0;
	if(Alpha > 255) Alpha = 255;
	if(Max < Min) {
		Min = Min + Max;
		Max = Min - Max;
		Min = Min - Max;
	}
	flixel_util_FlxRandom._red = flixel_util_FlxRandom.intRanged(Min,Max);
	if(GreyScale) flixel_util_FlxRandom._green = flixel_util_FlxRandom._red; else flixel_util_FlxRandom._green = flixel_util_FlxRandom.intRanged(Min,Max);
	if(GreyScale) flixel_util_FlxRandom._blue = flixel_util_FlxRandom._red; else flixel_util_FlxRandom._blue = flixel_util_FlxRandom.intRanged(Min,Max);
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (flixel_util_FlxRandom._red & 255) << 16 | (flixel_util_FlxRandom._green & 255) << 8 | flixel_util_FlxRandom._blue & 255;
};
flixel_util_FlxRandom.colorExt = function(RedMinimum,RedMaximum,GreenMinimum,GreenMaximum,BlueMinimum,BlueMaximum,AlphaMinimum,AlphaMaximum) {
	if(AlphaMaximum == null) AlphaMaximum = -1;
	if(AlphaMinimum == null) AlphaMinimum = -1;
	if(BlueMaximum == null) BlueMaximum = 255;
	if(BlueMinimum == null) BlueMinimum = 0;
	if(GreenMaximum == null) GreenMaximum = 255;
	if(GreenMinimum == null) GreenMinimum = 0;
	if(RedMaximum == null) RedMaximum = 255;
	if(RedMinimum == null) RedMinimum = 0;
	if(RedMinimum < 0) RedMinimum = 0;
	if(RedMinimum > 255) RedMinimum = 255;
	if(RedMaximum < 0) RedMaximum = 0;
	if(RedMaximum > 255) RedMaximum = 255;
	if(GreenMinimum < 0) GreenMinimum = 0;
	if(GreenMinimum > 255) GreenMinimum = 255;
	if(GreenMaximum < 0) GreenMaximum = 0;
	if(GreenMaximum > 255) GreenMaximum = 255;
	if(BlueMinimum < 0) BlueMinimum = 0;
	if(BlueMinimum > 255) BlueMinimum = 255;
	if(BlueMaximum < 0) BlueMaximum = 0;
	if(BlueMaximum > 255) BlueMaximum = 255;
	if(AlphaMinimum == -1) AlphaMinimum = 255;
	if(AlphaMaximum == -1) AlphaMaximum = 255;
	if(AlphaMinimum < 0) AlphaMinimum = 0;
	if(AlphaMinimum > 255) AlphaMinimum = 255;
	if(AlphaMaximum < 0) AlphaMaximum = 0;
	if(AlphaMaximum > 255) AlphaMaximum = 255;
	flixel_util_FlxRandom._red = flixel_util_FlxRandom.intRanged(RedMinimum,RedMaximum);
	flixel_util_FlxRandom._green = flixel_util_FlxRandom.intRanged(GreenMinimum,GreenMaximum);
	flixel_util_FlxRandom._blue = flixel_util_FlxRandom.intRanged(BlueMinimum,BlueMaximum);
	flixel_util_FlxRandom._alpha = flixel_util_FlxRandom.intRanged(AlphaMinimum,AlphaMaximum);
	return flixel_util_FlxColorUtil.makeFromARGB(flixel_util_FlxRandom._alpha,flixel_util_FlxRandom._red,flixel_util_FlxRandom._green,flixel_util_FlxRandom._blue);
};
flixel_util_FlxRandom.generate = function() {
	return flixel_util_FlxRandom._internalSeed = flixel_util_FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647;
};
var flixel_util__$FlxSignal_FlxSignalHandler = function(listener,dispatchOnce) {
	this.dispatchOnce = false;
	this.listener = listener;
	this.dispatchOnce = dispatchOnce;
};
$hxClasses["flixel.util._FlxSignal.FlxSignalHandler"] = flixel_util__$FlxSignal_FlxSignalHandler;
flixel_util__$FlxSignal_FlxSignalHandler.__name__ = ["flixel","util","_FlxSignal","FlxSignalHandler"];
flixel_util__$FlxSignal_FlxSignalHandler.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util__$FlxSignal_FlxSignalHandler.prototype = {
	listener: null
	,dispatchOnce: null
	,destroy: function() {
		this.listener = null;
	}
	,__class__: flixel_util__$FlxSignal_FlxSignalHandler
};
var flixel_util__$FlxSignal_FlxSignalBase = function() {
	this._handlers = [];
};
$hxClasses["flixel.util._FlxSignal.FlxSignalBase"] = flixel_util__$FlxSignal_FlxSignalBase;
flixel_util__$FlxSignal_FlxSignalBase.__name__ = ["flixel","util","_FlxSignal","FlxSignalBase"];
flixel_util__$FlxSignal_FlxSignalBase.__interfaces__ = [flixel_interfaces_IFlxSignal];
flixel_util__$FlxSignal_FlxSignalBase.prototype = {
	dispatch: null
	,_handlers: null
	,add: function(listener) {
		if(listener != null) this.registerListener(listener,false);
	}
	,addOnce: function(listener) {
		if(listener != null) this.registerListener(listener,true);
	}
	,remove: function(listener) {
		if(listener != null) {
			var handler = this.getHandler(listener);
			if(handler != null) {
				HxOverrides.remove(this._handlers,handler);
				handler.destroy();
				handler = null;
			}
		}
	}
	,has: function(listener) {
		if(listener == null) return false;
		return this.getHandler(listener) != null;
	}
	,removeAll: function() {
		while(this._handlers.length > 0) {
			var handler = this._handlers.pop();
			handler.destroy();
			handler = null;
		}
	}
	,destroy: function() {
		this.removeAll();
		this._handlers = null;
	}
	,registerListener: function(listener,dispatchOnce) {
		var handler = this.getHandler(listener);
		if(handler == null) {
			handler = new flixel_util__$FlxSignal_FlxSignalHandler(listener,dispatchOnce);
			this._handlers.push(handler);
			return handler;
		} else if(handler.dispatchOnce != dispatchOnce) throw new js__$Boot_HaxeError("You cannot addOnce() then add() the same listener without removing the relationship first."); else return handler;
	}
	,getHandler: function(listener) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			if(handler.listener == listener) return handler;
		}
		return null;
	}
	,__class__: flixel_util__$FlxSignal_FlxSignalBase
};
var flixel_util__$FlxSignal_FlxSignal0 = function() {
	flixel_util__$FlxSignal_FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch0);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal0"] = flixel_util__$FlxSignal_FlxSignal0;
flixel_util__$FlxSignal_FlxSignal0.__name__ = ["flixel","util","_FlxSignal","FlxSignal0"];
flixel_util__$FlxSignal_FlxSignal0.__super__ = flixel_util__$FlxSignal_FlxSignalBase;
flixel_util__$FlxSignal_FlxSignal0.prototype = $extend(flixel_util__$FlxSignal_FlxSignalBase.prototype,{
	dispatch0: function() {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener();
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel_util__$FlxSignal_FlxSignal0
});
var flixel_util__$FlxSignal_FlxSignal1 = function() {
	flixel_util__$FlxSignal_FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch1);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal1"] = flixel_util__$FlxSignal_FlxSignal1;
flixel_util__$FlxSignal_FlxSignal1.__name__ = ["flixel","util","_FlxSignal","FlxSignal1"];
flixel_util__$FlxSignal_FlxSignal1.__super__ = flixel_util__$FlxSignal_FlxSignalBase;
flixel_util__$FlxSignal_FlxSignal1.prototype = $extend(flixel_util__$FlxSignal_FlxSignalBase.prototype,{
	dispatch1: function(value1) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel_util__$FlxSignal_FlxSignal1
});
var flixel_util__$FlxSignal_FlxSignal2 = function() {
	flixel_util__$FlxSignal_FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch2);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal2"] = flixel_util__$FlxSignal_FlxSignal2;
flixel_util__$FlxSignal_FlxSignal2.__name__ = ["flixel","util","_FlxSignal","FlxSignal2"];
flixel_util__$FlxSignal_FlxSignal2.__super__ = flixel_util__$FlxSignal_FlxSignalBase;
flixel_util__$FlxSignal_FlxSignal2.prototype = $extend(flixel_util__$FlxSignal_FlxSignalBase.prototype,{
	dispatch2: function(value1,value2) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1,value2);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel_util__$FlxSignal_FlxSignal2
});
var flixel_util__$FlxSignal_FlxSignal3 = function() {
	flixel_util__$FlxSignal_FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch3);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal3"] = flixel_util__$FlxSignal_FlxSignal3;
flixel_util__$FlxSignal_FlxSignal3.__name__ = ["flixel","util","_FlxSignal","FlxSignal3"];
flixel_util__$FlxSignal_FlxSignal3.__super__ = flixel_util__$FlxSignal_FlxSignalBase;
flixel_util__$FlxSignal_FlxSignal3.prototype = $extend(flixel_util__$FlxSignal_FlxSignalBase.prototype,{
	dispatch3: function(value1,value2,value3) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1,value2,value3);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel_util__$FlxSignal_FlxSignal3
});
var flixel_util__$FlxSignal_FlxSignal4 = function() {
	flixel_util__$FlxSignal_FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch4);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal4"] = flixel_util__$FlxSignal_FlxSignal4;
flixel_util__$FlxSignal_FlxSignal4.__name__ = ["flixel","util","_FlxSignal","FlxSignal4"];
flixel_util__$FlxSignal_FlxSignal4.__super__ = flixel_util__$FlxSignal_FlxSignalBase;
flixel_util__$FlxSignal_FlxSignal4.prototype = $extend(flixel_util__$FlxSignal_FlxSignalBase.prototype,{
	dispatch4: function(value1,value2,value3,value4) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1,value2,value3,value4);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel_util__$FlxSignal_FlxSignal4
});
var flixel_util_FlxSort = function() { };
$hxClasses["flixel.util.FlxSort"] = flixel_util_FlxSort;
flixel_util_FlxSort.__name__ = ["flixel","util","FlxSort"];
flixel_util_FlxSort.byY = function(Order,Obj1,Obj2) {
	return flixel_util_FlxSort.byValues(Order,Obj1.y,Obj2.y);
};
flixel_util_FlxSort.byValues = function(Order,Value1,Value2) {
	var result = 0;
	if(Value1 < Value2) result = Order; else if(Value1 > Value2) result = -Order;
	return result;
};
var flixel_util_FlxSpriteUtil = function() { };
$hxClasses["flixel.util.FlxSpriteUtil"] = flixel_util_FlxSpriteUtil;
flixel_util_FlxSpriteUtil.__name__ = ["flixel","util","FlxSpriteUtil"];
flixel_util_FlxSpriteUtil.alphaMask = function(output,source,mask) {
	var data = null;
	if(typeof(source) == "string") data = flixel_system_FlxAssets.getBitmapData(source); else if(js_Boot.__instanceof(source,Class)) data = Type.createInstance(source,[]).bitmapData; else if(js_Boot.__instanceof(source,flash_display_BitmapData)) data = (js_Boot.__cast(source , flash_display_BitmapData)).clone(); else return null;
	var maskData = null;
	if(typeof(mask) == "string") maskData = flixel_system_FlxAssets.getBitmapData(mask); else if(js_Boot.__instanceof(mask,Class)) maskData = Type.createInstance(mask,[]).bitmapData; else if(js_Boot.__instanceof(mask,flash_display_BitmapData)) maskData = mask; else return null;
	data.copyChannel(maskData,new flash_geom_Rectangle(0,0,data.component.width,data.component.height),new flash_geom_Point(),8,8);
	output.set_pixels(data);
	return output;
};
flixel_util_FlxSpriteUtil.alphaMaskFlxSprite = function(sprite,mask,output) {
	if(sprite.dirty) {
		sprite.dirty = true;
		sprite.calcFrame();
	}
	var data = sprite.get_pixels().clone();
	data.copyChannel(mask.get_pixels(),new flash_geom_Rectangle(0,0,sprite.get_width(),sprite.get_height()),new flash_geom_Point(),8,8);
	output.set_pixels(data);
	return output;
};
flixel_util_FlxSpriteUtil.screenWrap = function(sprite,Left,Right,Top,Bottom) {
	if(Bottom == null) Bottom = true;
	if(Top == null) Top = true;
	if(Right == null) Right = true;
	if(Left == null) Left = true;
	if(Left && sprite.x + sprite.frameWidth <= 0) sprite.set_x(flixel_FlxG.width); else if(Right && sprite.x >= flixel_FlxG.width) sprite.set_x(0);
	if(Top && sprite.y + sprite.frameHeight <= 0) sprite.set_y(flixel_FlxG.height); else if(Bottom && sprite.y >= flixel_FlxG.height) sprite.set_y(0);
	return sprite;
};
flixel_util_FlxSpriteUtil.bound = function(sprite,MinX,MaxX,MinY,MaxY) {
	if(MaxY == null) MaxY = 0;
	if(MinY == null) MinY = 0;
	if(MaxX == null) MaxX = 0;
	if(MinX == null) MinX = 0;
	if(MaxX <= 0) MaxX = flixel_FlxG.width;
	if(MaxY <= 0) MaxY = flixel_FlxG.height;
	MaxX -= sprite.frameWidth;
	MaxY -= sprite.frameHeight;
	sprite.set_x(flixel_util_FlxMath.bound(sprite.x,MinX,MaxX));
	sprite.set_y(flixel_util_FlxMath.bound(sprite.y,MinY,MaxY));
	return sprite;
};
flixel_util_FlxSpriteUtil.space = function(objects,startX,startY,horizontalSpacing,verticalSpacing,spaceFromBounds) {
	if(spaceFromBounds == null) spaceFromBounds = false;
	if(verticalSpacing == null) verticalSpacing = 0;
	if(horizontalSpacing == null) horizontalSpacing = 0;
	var prevWidth = 0;
	var prevHeight = 0;
	var _g1 = 0;
	var _g = objects.length;
	while(_g1 < _g) {
		var i = _g1++;
		var object = objects[i];
		if(spaceFromBounds) {
			object.set_x(startX + prevWidth + i * horizontalSpacing);
			object.set_y(startY + prevHeight + i * verticalSpacing);
		} else {
			object.set_x(startX + i * horizontalSpacing);
			object.set_y(startY + i * verticalSpacing);
		}
	}
};
flixel_util_FlxSpriteUtil.screenCenter = function(object,xAxis,yAxis) {
	if(yAxis == null) yAxis = true;
	if(xAxis == null) xAxis = true;
	if(xAxis) object.set_x(flixel_FlxG.width / 2 - object.get_width() / 2);
	if(yAxis) object.set_y(flixel_FlxG.height / 2 - object.get_height() / 2);
	return object;
};
flixel_util_FlxSpriteUtil.drawLine = function(sprite,StartX,StartY,EndX,EndY,lineStyle,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	flixel_util_FlxSpriteUtil.flashGfx.beginFill(0,flixel_util_FlxColorUtil.getAlphaFloat(0));
	flixel_util_FlxSpriteUtil.flashGfx.moveTo(StartX,StartY);
	flixel_util_FlxSpriteUtil.flashGfx.lineTo(EndX,EndY);
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.drawRect = function(sprite,X,Y,Width,Height,Color,lineStyle,fillStyle,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
	flixel_util_FlxSpriteUtil.flashGfx.drawRect(X,Y,Width,Height);
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.drawRoundRect = function(sprite,X,Y,Width,Height,EllipseWidth,EllipseHeight,Color,lineStyle,fillStyle,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
	flixel_util_FlxSpriteUtil.flashGfx.drawRoundRect(X,Y,Width,Height,EllipseWidth,EllipseHeight);
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.drawCircle = function(sprite,X,Y,Radius,Color,lineStyle,fillStyle,drawStyle) {
	if(Color == null) Color = -1;
	if(Radius == null) Radius = -1;
	if(Y == null) Y = -1;
	if(X == null) X = -1;
	if(X == -1 || Y == -1) {
		var midPoint = sprite.getGraphicMidpoint();
		if(X == -1) X = midPoint.x;
		if(Y == -1) Y = midPoint.y;
	}
	if(Radius < 1) {
		var minVal = Math.min(sprite.frameWidth,sprite.frameHeight);
		Radius = minVal / 2;
	}
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
	flixel_util_FlxSpriteUtil.flashGfx.drawCircle(X,Y,Radius);
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.drawEllipse = function(sprite,X,Y,Width,Height,Color,lineStyle,fillStyle,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
	flixel_util_FlxSpriteUtil.flashGfx.drawEllipse(X,Y,Width,Height);
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.drawTriangle = function(sprite,X,Y,Height,Color,lineStyle,fillStyle,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
	flixel_util_FlxSpriteUtil.flashGfx.moveTo(X + Height / 2,Y);
	flixel_util_FlxSpriteUtil.flashGfx.lineTo(X + Height,Height + Y);
	flixel_util_FlxSpriteUtil.flashGfx.lineTo(X,Height + Y);
	flixel_util_FlxSpriteUtil.flashGfx.lineTo(X + Height / 2,Y);
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.drawPolygon = function(sprite,Vertices,Color,lineStyle,fillStyle,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
	var p = Vertices.shift();
	flixel_util_FlxSpriteUtil.flashGfx.moveTo(p.x,p.y);
	var _g = 0;
	while(_g < Vertices.length) {
		var p1 = Vertices[_g];
		++_g;
		flixel_util_FlxSpriteUtil.flashGfx.lineTo(p1.x,p1.y);
	}
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel_util_FlxSpriteUtil.beginDraw = function(Color,lineStyle,fillStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.clear();
	flixel_util_FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel_util_FlxSpriteUtil.flashGfx.beginFill(flixel_util_FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel_util_FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel_util_FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel_util_FlxColorUtil.getAlphaFloat(Color));
};
flixel_util_FlxSpriteUtil.endDraw = function(sprite,drawStyle) {
	flixel_util_FlxSpriteUtil.flashGfx.endFill();
	flixel_util_FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	return sprite;
};
flixel_util_FlxSpriteUtil.updateSpriteGraphic = function(sprite,drawStyle) {
	if(drawStyle == null) drawStyle = { smoothing : false}; else if(drawStyle.smoothing == null) drawStyle.smoothing = false;
	sprite.get_pixels().draw(flixel_util_FlxSpriteUtil.flashGfxSprite,drawStyle.matrix,drawStyle.colorTransform,drawStyle.blendMode,drawStyle.clipRect,drawStyle.smoothing);
	sprite.dirty = true;
	sprite.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	return sprite;
};
flixel_util_FlxSpriteUtil.setLineStyle = function(lineStyle) {
	if(lineStyle != null) {
		var color;
		var alpha;
		if(lineStyle.color == null) {
			color = 0;
			alpha = 1;
		} else {
			color = flixel_util_FlxColorUtil.ARGBtoRGB(lineStyle.color);
			alpha = flixel_util_FlxColorUtil.getAlphaFloat(lineStyle.color);
		}
		if(lineStyle.pixelHinting == null) lineStyle.pixelHinting = false;
		if(lineStyle.miterLimit == null) lineStyle.miterLimit = 3;
		flixel_util_FlxSpriteUtil.flashGfx.lineStyle(lineStyle.thickness,color,alpha,lineStyle.pixelHinting,lineStyle.scaleMode,lineStyle.capsStyle,lineStyle.jointStyle,lineStyle.miterLimit);
	}
};
flixel_util_FlxSpriteUtil.fill = function(sprite,Color) {
	sprite.get_pixels().fillRect(sprite.get_pixels().get_rect(),Color);
	if(sprite.get_pixels() != sprite.framePixels) sprite.dirty = true;
	sprite.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	return sprite;
};
flixel_util_FlxSpriteUtil.flicker = function(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback) {
	if(ForceRestart == null) ForceRestart = true;
	if(EndVisibility == null) EndVisibility = true;
	if(Interval == null) Interval = 0.04;
	if(Duration == null) Duration = 1;
	flixel_effects_FlxFlicker.flicker(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback);
	return Object;
};
flixel_util_FlxSpriteUtil.isFlickering = function(Object) {
	return flixel_effects_FlxFlicker.isFlickering(Object);
};
flixel_util_FlxSpriteUtil.stopFlickering = function(Object) {
	flixel_effects_FlxFlicker.stopFlickering(Object);
	return Object;
};
flixel_util_FlxSpriteUtil.fadeIn = function(sprite,Duration,ResetAlpha,OnComplete) {
	if(Duration == null) Duration = 1;
	if(ResetAlpha) sprite.set_alpha(0);
	flixel_tweens_FlxTween.color(sprite,Duration,sprite.color,sprite.color,sprite.alpha,1,OnComplete != null?{ complete : OnComplete}:null);
	return sprite;
};
flixel_util_FlxSpriteUtil.fadeOut = function(sprite,Duration,FadeToBlack,OnComplete) {
	if(Duration == null) Duration = 1;
	flixel_tweens_FlxTween.color(sprite,Duration,sprite.color,FadeToBlack?-16777216:sprite.color,sprite.alpha,0,OnComplete != null?{ complete : OnComplete}:null);
	return sprite;
};
var flixel_util_FlxStringUtil = function() { };
$hxClasses["flixel.util.FlxStringUtil"] = flixel_util_FlxStringUtil;
flixel_util_FlxStringUtil.__name__ = ["flixel","util","FlxStringUtil"];
flixel_util_FlxStringUtil.formatTicks = function(StartTicks,EndTicks) {
	return Math.abs(EndTicks - StartTicks) / 1000 + "s";
};
flixel_util_FlxStringUtil.formatTime = function(Seconds,ShowMS) {
	if(ShowMS == null) ShowMS = false;
	var timeString = (Seconds / 60 | 0) + ":";
	var timeStringHelper = (Seconds | 0) % 60;
	if(timeStringHelper < 10) timeString += "0";
	timeString += timeStringHelper;
	if(ShowMS) {
		timeString += ".";
		timeStringHelper = (Seconds - (Seconds | 0)) * 100 | 0;
		if(timeStringHelper < 10) timeString += "0";
		timeString += timeStringHelper;
	}
	return timeString;
};
flixel_util_FlxStringUtil.formatArray = function(AnyArray) {
	var string = "";
	if(AnyArray != null && AnyArray.length > 0) {
		string = Std.string(AnyArray[0]);
		var i = 1;
		var l = AnyArray.length;
		while(i < l) string += ", " + Std.string(AnyArray[i++]);
	}
	return string;
};
flixel_util_FlxStringUtil.formatStringMap = function(AnyMap) {
	var string = "";
	var $it0 = AnyMap.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(key == null) string += "null"; else string += "" + key;
		string += ", ";
	}
	return string.substring(0,string.length - 2);
};
flixel_util_FlxStringUtil.formatMoney = function(Amount,ShowDecimal,EnglishStyle) {
	if(EnglishStyle == null) EnglishStyle = true;
	if(ShowDecimal == null) ShowDecimal = true;
	var helper;
	var amount = Math.floor(Amount);
	var string = "";
	var comma = "";
	var zeroes = "";
	while(amount > 0) {
		if(string.length > 0 && comma.length <= 0) {
			if(EnglishStyle) comma = ","; else comma = ".";
		}
		zeroes = "";
		helper = amount - Math.floor(amount / 1000) * 1000;
		amount = Math.floor(amount / 1000);
		if(amount > 0) {
			if(helper < 100) zeroes += "0";
			if(helper < 10) zeroes += "0";
		}
		string = zeroes + helper + comma + string;
	}
	if(ShowDecimal) {
		amount = (Amount * 100 | 0) - (Amount | 0) * 100;
		string += (EnglishStyle?".":",") + amount;
		if(amount < 10) string += "0";
	}
	return string;
};
flixel_util_FlxStringUtil.formatBytes = function(Bytes,Precision) {
	if(Precision == null) Precision = 2;
	var units = ["Bytes","kB","MB","GB","TB","PB"];
	var curUnit = 0;
	while(Bytes >= 1024 && curUnit < units.length - 1) {
		Bytes /= 1024;
		curUnit++;
	}
	return flixel_util_FlxMath.roundDecimal(Bytes,Precision) + units[curUnit];
};
flixel_util_FlxStringUtil.filterDigits = function(Input) {
	var output_b = "";
	var _g1 = 0;
	var _g = Input.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = HxOverrides.cca(Input,i);
		if(c >= 48 && c <= 57) output_b += String.fromCharCode(c);
	}
	return output_b;
};
flixel_util_FlxStringUtil.htmlFormat = function(Text,Size,Color,Bold,Italic,Underlined) {
	if(Underlined == null) Underlined = false;
	if(Italic == null) Italic = false;
	if(Bold == null) Bold = false;
	if(Color == null) Color = "FFFFFF";
	if(Size == null) Size = 12;
	var prefix = "<font size='" + Size + "' color='#" + Color + "'>";
	var suffix = "</font>";
	if(Bold) {
		prefix = "<b>" + prefix;
		suffix = suffix + "</b>";
	}
	if(Italic) {
		prefix = "<i>" + prefix;
		suffix = suffix + "</i>";
	}
	if(Underlined) {
		prefix = "<u>" + prefix;
		suffix = suffix + "</u>";
	}
	return prefix + Text + suffix;
};
flixel_util_FlxStringUtil.getDomain = function(url) {
	var urlStart = url.indexOf("://") + 3;
	var urlEnd = url.indexOf("/",urlStart);
	var home = url.substring(urlStart,urlEnd);
	var LastDot = home.lastIndexOf(".") - 1;
	var domEnd = home.lastIndexOf(".",LastDot) + 1;
	home = home.substring(domEnd,home.length);
	home = home.split(":")[0];
	if(home == "") return "local"; else return home;
};
flixel_util_FlxStringUtil.sameClassName = function(Obj1,Obj2,Simple) {
	if(Simple == null) Simple = true;
	return (function($this) {
		var $r;
		var cl;
		if(js_Boot.__instanceof(Obj1,Class)) cl = Obj1; else cl = Type.getClass(Obj1);
		var s = Type.getClassName(cl);
		if(s != null) {
			s = StringTools.replace(s,"::",".");
			if(Simple) {
				var pos = s.lastIndexOf(".") + 1;
				s = HxOverrides.substr(s,pos,null);
			}
		}
		$r = s;
		return $r;
	}(this)) == (function($this) {
		var $r;
		var cl1;
		if(js_Boot.__instanceof(Obj2,Class)) cl1 = Obj2; else cl1 = Type.getClass(Obj2);
		var s1 = Type.getClassName(cl1);
		if(s1 != null) {
			s1 = StringTools.replace(s1,"::",".");
			if(Simple) {
				var pos1 = s1.lastIndexOf(".") + 1;
				s1 = HxOverrides.substr(s1,pos1,null);
			}
		}
		$r = s1;
		return $r;
	}(this));
};
flixel_util_FlxStringUtil.toIntArray = function(Data) {
	if(Data != null && Data != "") {
		var strArray = Data.split(",");
		var iArray = [];
		var _g = 0;
		while(_g < strArray.length) {
			var str = strArray[_g];
			++_g;
			iArray.push(Std.parseInt(str));
		}
		return iArray;
	}
	return null;
};
flixel_util_FlxStringUtil.toFloatArray = function(Data) {
	if(Data != null && Data != "") {
		var strArray = Data.split(",");
		var fArray = [];
		var _g = 0;
		while(_g < strArray.length) {
			var str = strArray[_g];
			++_g;
			fArray.push(parseFloat(str));
		}
		return fArray;
	}
	return null;
};
flixel_util_FlxStringUtil.arrayToCSV = function(Data,Width,Invert) {
	if(Invert == null) Invert = false;
	var row = 0;
	var column;
	var csv = "";
	var Height = Data.length / Width | 0;
	var index;
	var offset = 0;
	while(row < Height) {
		column = 0;
		while(column < Width) {
			index = Data[offset];
			if(Invert) {
				if(index == 0) index = 1; else if(index == 1) index = 0;
			}
			if(column == 0) {
				if(row == 0) csv += index; else csv += "\n" + index;
			} else csv += ", " + index;
			column++;
			offset++;
		}
		row++;
	}
	return csv;
};
flixel_util_FlxStringUtil.bitmapToCSV = function(Bitmap,Invert,Scale,ColorMap) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	if(Scale < 1) Scale = 1;
	if(Scale > 1) {
		var bd = Bitmap;
		Bitmap = new flash_display_BitmapData(Bitmap.component.width * Scale,Bitmap.component.height * Scale);
		var bdW = bd.component.width;
		var bdH = bd.component.height;
		var pCol = 0;
		var _g = 0;
		while(_g < bdW) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < bdH) {
				var j = _g1++;
				pCol = bd.getPixel(i,j);
				var _g2 = 0;
				while(_g2 < Scale) {
					var k = _g2++;
					var _g3 = 0;
					while(_g3 < Scale) {
						var m = _g3++;
						Bitmap.setPixel(i * Scale + k,j * Scale + m,pCol);
					}
				}
			}
		}
	}
	var row = 0;
	var column;
	var pixel;
	var csv = "";
	var bitmapWidth = Bitmap.component.width;
	var bitmapHeight = Bitmap.component.height;
	while(row < bitmapHeight) {
		column = 0;
		while(column < bitmapWidth) {
			pixel = Bitmap.getPixel(column,row);
			if(ColorMap != null) pixel = HxOverrides.indexOf(ColorMap,pixel,0); else if(Invert && pixel > 0 || !Invert && pixel == 0) pixel = 1; else pixel = 0;
			if(column == 0) {
				if(row == 0) csv += pixel; else csv += "\n" + pixel;
			} else csv += ", " + pixel;
			column++;
		}
		row++;
	}
	return csv;
};
flixel_util_FlxStringUtil.imageToCSV = function(ImageFile,Invert,Scale) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	var tempBitmapData;
	if(typeof(ImageFile) == "string") tempBitmapData = flixel_system_FlxAssets.getBitmapData(ImageFile); else tempBitmapData = Type.createInstance(ImageFile,[]).bitmapData;
	return flixel_util_FlxStringUtil.bitmapToCSV(tempBitmapData,Invert,Scale);
};
flixel_util_FlxStringUtil.getDebugString = function(LabelValuePairs) {
	var output = "(";
	var _g = 0;
	while(_g < LabelValuePairs.length) {
		var pair = LabelValuePairs[_g];
		++_g;
		output += pair.label + ": ";
		var value = pair.value;
		if(typeof(value) == "number") value = flixel_util_FlxMath.roundDecimal(value,flixel_FlxG["debugger"].precision);
		output += Std.string(value) + " | ";
		flixel_util_LabelValuePair._pool.put(pair);
	}
	output = StringTools.trim(HxOverrides.substr(output,0,output.length - 2));
	return output + ")";
};
var flixel_util_LabelValuePair = function() {
};
$hxClasses["flixel.util.LabelValuePair"] = flixel_util_LabelValuePair;
flixel_util_LabelValuePair.__name__ = ["flixel","util","LabelValuePair"];
flixel_util_LabelValuePair.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util_LabelValuePair.weak = function(label,value) {
	return flixel_util_LabelValuePair._pool.get().create(label,value);
};
flixel_util_LabelValuePair.prototype = {
	label: null
	,value: null
	,create: function(label,value) {
		this.label = label;
		this.value = value;
		return this;
	}
	,put: function() {
		flixel_util_LabelValuePair._pool.put(this);
	}
	,destroy: function() {
		this.label = null;
		this.value = null;
	}
	,__class__: flixel_util_LabelValuePair
};
var flixel_util_FlxVelocity = function() { };
$hxClasses["flixel.util.FlxVelocity"] = flixel_util_FlxVelocity;
flixel_util_FlxVelocity.__name__ = ["flixel","util","FlxVelocity"];
flixel_util_FlxVelocity.moveTowardsObject = function(Source,Dest,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel_util_FlxAngle.angleBetween(Source,Dest,null);
	if(MaxTime > 0) {
		var d = flixel_util_FlxMath.distanceBetween(Source,Dest);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
};
flixel_util_FlxVelocity.accelerateTowardsObject = function(Source,Dest,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel_util_FlxAngle.angleBetween(Source,Dest,null);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
};
flixel_util_FlxVelocity.moveTowardsMouse = function(Source,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel_util_FlxAngle.angleBetweenMouse(Source);
	if(MaxTime > 0) {
		var d = flixel_util_FlxMath.distanceToMouse(Source);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
};
flixel_util_FlxVelocity.moveTowardsTouch = function(Source,Touch,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel_util_FlxAngle.angleBetweenTouch(Source,Touch,null);
	if(MaxTime > 0) {
		var d = flixel_util_FlxMath.distanceToTouch(Source,Touch);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
};
flixel_util_FlxVelocity.accelerateTowardsMouse = function(Source,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel_util_FlxAngle.angleBetweenMouse(Source);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
};
flixel_util_FlxVelocity.accelerateTowardsTouch = function(Source,Touch,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel_util_FlxAngle.angleBetweenTouch(Source,Touch,null);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
};
flixel_util_FlxVelocity.moveTowardsPoint = function(Source,Target,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel_util_FlxAngle.angleBetweenPoint(Source,Target);
	if(MaxTime > 0) {
		var d = flixel_util_FlxMath.distanceToPoint(Source,Target);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
	if(Target._weak) Target.put();
};
flixel_util_FlxVelocity.accelerateTowardsPoint = function(Source,Target,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel_util_FlxAngle.angleBetweenPoint(Source,Target);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
	if(Target._weak) Target.put();
};
flixel_util_FlxVelocity.velocityFromAngle = function(Angle,Speed) {
	var a = Angle * (Math.PI / 180);
	var result = flixel_util_FlxPoint.get(null,null);
	result.set_x(Math.cos(a) * Speed);
	result.set_y(Math.sin(a) * Speed);
	return result;
};
flixel_util_FlxVelocity.velocityFromFacing = function(Parent,Speed) {
	var a = 0;
	if(Parent.facing == 1) a = 180 * (Math.PI / 180); else if(Parent.facing == 16) a = 0 * (Math.PI / 180); else if(Parent.facing == 256) a = -90 * (Math.PI / 180); else if(Parent.facing == 4096) a = 90 * (Math.PI / 180);
	var result = flixel_util_FlxPoint.get(null,null);
	result.set_x(Math.cos(a) * Speed);
	result.set_y(Math.sin(a) * Speed);
	return result;
};
flixel_util_FlxVelocity.computeVelocity = function(Velocity,Acceleration,Drag,Max) {
	if(Acceleration != 0) Velocity += Acceleration * flixel_FlxG.elapsed; else if(Drag != 0) {
		var drag = Drag * flixel_FlxG.elapsed;
		if(Velocity - drag > 0) Velocity = Velocity - drag; else if(Velocity + drag < 0) Velocity += drag; else Velocity = 0;
	}
	if(Velocity != 0 && Max != 0) {
		if(Velocity > Max) Velocity = Max; else if(Velocity < -Max) Velocity = -Max;
	}
	return Velocity;
};
var flixel_util_loaders_CachedGraphics = function(Key,Bitmap,Persist) {
	if(Persist == null) Persist = false;
	this.useCount = 0;
	this.isDumped = false;
	this.destroyOnNoUse = true;
	this.persist = false;
	this.key = Key;
	this.bitmap = Bitmap;
	this.persist = Persist;
};
$hxClasses["flixel.util.loaders.CachedGraphics"] = flixel_util_loaders_CachedGraphics;
flixel_util_loaders_CachedGraphics.__name__ = ["flixel","util","loaders","CachedGraphics"];
flixel_util_loaders_CachedGraphics.prototype = {
	key: null
	,bitmap: null
	,assetsKey: null
	,assetsClass: null
	,data: null
	,persist: null
	,destroyOnNoUse: null
	,isDumped: null
	,tilesheet: null
	,useCount: null
	,_tilesheet: null
	,dump: function() {
	}
	,undump: function() {
	}
	,onContext: function() {
		if(this.isDumped) {
			this.undump();
			this.dump();
		}
	}
	,getRegionForFrame: function(FrameName) {
		var region = new flixel_util_loaders_TextureRegion(this);
		var frame = this.get_tilesheet().getFrame(FrameName);
		if(frame != null) {
			region.region.startX = frame.frame.x | 0;
			region.region.startY = frame.frame.y | 0;
			region.region.width = frame.frame.width | 0;
			region.region.height = frame.frame.height | 0;
		}
		return region;
	}
	,destroy: function() {
		this.bitmap = flixel_util_FlxDestroyUtil.dispose(this.bitmap);
		this.data = flixel_util_FlxDestroyUtil.destroy(this.data);
		this._tilesheet = flixel_util_FlxDestroyUtil.destroy(this._tilesheet);
		this.key = null;
		this.assetsKey = null;
		this.assetsClass = null;
	}
	,get_tilesheet: function() {
		if(this._tilesheet == null) {
			if(this.isDumped) this.onContext();
			this._tilesheet = new flixel_system_layer_TileSheetData(this.bitmap);
		}
		return this._tilesheet;
	}
	,getBitmapFromSystem: function() {
		var newBitmap = null;
		if(this.assetsClass != null) newBitmap = Type.createInstance(js_Boot.__cast(this.assetsClass , Class),[]); else if(this.assetsKey != null) newBitmap = openfl_Assets.getBitmapData(this.assetsKey,false);
		return newBitmap;
	}
	,get_canBeDumped: function() {
		return this.assetsClass != null || this.assetsKey != null;
	}
	,set_useCount: function(Value) {
		if(Value <= 0 && this.destroyOnNoUse && !this.persist) flixel_FlxG.bitmap.remove(this.key);
		return this.useCount = Value;
	}
	,set_destroyOnNoUse: function(Value) {
		if(Value && this.useCount == 0 && this.key != null && !this.persist) flixel_FlxG.bitmap.remove(this.key);
		return this.destroyOnNoUse = Value;
	}
	,__class__: flixel_util_loaders_CachedGraphics
	,__properties__: {set_useCount:"set_useCount",get_tilesheet:"get_tilesheet",get_canBeDumped:"get_canBeDumped",set_destroyOnNoUse:"set_destroyOnNoUse"}
};
var flixel_util_loaders_TextureAtlasFrame = function() {
	this.additionalAngle = 0;
	this.offset = null;
	this.sourceSize = null;
	this.trimmed = false;
	this.rotated = false;
	this.frame = null;
	this.name = null;
};
$hxClasses["flixel.util.loaders.TextureAtlasFrame"] = flixel_util_loaders_TextureAtlasFrame;
flixel_util_loaders_TextureAtlasFrame.__name__ = ["flixel","util","loaders","TextureAtlasFrame"];
flixel_util_loaders_TextureAtlasFrame.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util_loaders_TextureAtlasFrame.prototype = {
	name: null
	,frame: null
	,rotated: null
	,trimmed: null
	,sourceSize: null
	,offset: null
	,additionalAngle: null
	,destroy: function() {
		this.name = null;
		this.frame = null;
		this.sourceSize = null;
		this.offset = null;
	}
	,__class__: flixel_util_loaders_TextureAtlasFrame
};
var flixel_util_loaders_TexturePackerData = function(Description,AssetName) {
	this.assetName = AssetName;
	this.description = Description;
	this.frames = [];
	this.parseData();
};
$hxClasses["flixel.util.loaders.TexturePackerData"] = flixel_util_loaders_TexturePackerData;
flixel_util_loaders_TexturePackerData.__name__ = ["flixel","util","loaders","TexturePackerData"];
flixel_util_loaders_TexturePackerData.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util_loaders_TexturePackerData.prototype = {
	frames: null
	,assetName: null
	,description: null
	,asset: null
	,parseData: function() {
		if(this.frames.length != 0) return;
		if(this.assetName == null || this.description == null) return;
		this.asset = flixel_FlxG.bitmap.addWithSpaces(this.assetName,0,0,1,1,false,null).bitmap;
		var data = JSON.parse(openfl_Assets.getText(this.description));
		var _g = 0;
		var _g1 = Lambda.array(data.frames);
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			var texFrame = new flixel_util_loaders_TextureAtlasFrame();
			texFrame.trimmed = frame.trimmed;
			texFrame.rotated = frame.rotated;
			texFrame.name = frame.filename;
			texFrame.sourceSize = flixel_util_FlxPoint.get(frame.sourceSize.w,frame.sourceSize.h);
			texFrame.offset = flixel_util_FlxPoint.get(0,0);
			texFrame.offset.set(frame.spriteSourceSize.x,frame.spriteSourceSize.y);
			if(frame.rotated) {
				texFrame.frame = new flash_geom_Rectangle(frame.frame.x,frame.frame.y,frame.frame.h,frame.frame.w);
				texFrame.additionalAngle = -90;
			} else {
				texFrame.frame = new flash_geom_Rectangle(frame.frame.x,frame.frame.y,frame.frame.w,frame.frame.h);
				texFrame.additionalAngle = 0;
			}
			this.frames.push(texFrame);
		}
	}
	,destroy: function() {
		this.frames = flixel_util_FlxDestroyUtil.destroyArray(this.frames);
		this.assetName = null;
		this.description = null;
		this.asset = null;
	}
	,__class__: flixel_util_loaders_TexturePackerData
};
var flixel_util_loaders_TextureRegion = function(data,startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(spacingY == null) spacingY = 0;
	if(spacingX == null) spacingX = 0;
	if(tileHeight == null) tileHeight = 0;
	if(tileWidth == null) tileWidth = 0;
	if(startY == null) startY = 0;
	if(startX == null) startX = 0;
	this.data = data;
	if(width <= 0) width = data.bitmap.component.width;
	if(height <= 0) height = data.bitmap.component.height;
	this.region = new flixel_system_layer_Region(startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height);
};
$hxClasses["flixel.util.loaders.TextureRegion"] = flixel_util_loaders_TextureRegion;
flixel_util_loaders_TextureRegion.__name__ = ["flixel","util","loaders","TextureRegion"];
flixel_util_loaders_TextureRegion.__interfaces__ = [flixel_interfaces_IFlxDestroyable];
flixel_util_loaders_TextureRegion.prototype = {
	data: null
	,region: null
	,clone: function() {
		return new flixel_util_loaders_TextureRegion(this.data,this.region.startX,this.region.startY,this.region.tileWidth,this.region.tileHeight,this.region.spacingX,this.region.spacingY,this.region.width,this.region.height);
	}
	,destroy: function() {
		this.data = null;
		this.region = null;
	}
	,__class__: flixel_util_loaders_TextureRegion
};
var haxe_StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe_StackItem.CFunction = ["CFunction",0];
haxe_StackItem.CFunction.toString = $estr;
haxe_StackItem.CFunction.__enum__ = haxe_StackItem;
haxe_StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
var haxe_CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe_CallStack;
haxe_CallStack.__name__ = ["haxe","CallStack"];
haxe_CallStack.getStack = function(e) {
	if(e == null) return [];
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			if(haxe_CallStack.wrapCallSite != null) site = haxe_CallStack.wrapCallSite(site);
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe_StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe_StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe_CallStack.makeStack(e.stack);
	Error.prepareStackTrace = oldValue;
	return a;
};
haxe_CallStack.callStack = function() {
	try {
		throw new Error();
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		var a = haxe_CallStack.getStack(e);
		a.shift();
		return a;
	}
};
haxe_CallStack.exceptionStack = function() {
	return haxe_CallStack.getStack(haxe_CallStack.lastException);
};
haxe_CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe_CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe_CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe_CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe_CallStack.makeStack = function(s) {
	if(s == null) return []; else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") stack.shift();
		var m = [];
		var rie10 = new EReg("^   at ([A-Za-z0-9_. ]+) \\(([^)]+):([0-9]+):([0-9]+)\\)$","");
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			if(rie10.match(line)) {
				var path = rie10.matched(1).split(".");
				var meth = path.pop();
				var file = rie10.matched(2);
				var line1 = Std.parseInt(rie10.matched(3));
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function"?haxe_StackItem.LocalFunction():meth == "Global code"?null:haxe_StackItem.Method(path.join("."),meth),file,line1));
			} else m.push(haxe_StackItem.Module(StringTools.trim(line)));
		}
		return m;
	} else return s;
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	high: null
	,low: null
	,__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = [];
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.run = function(v) {
	var s = new haxe_Serializer();
	s.serialize(v);
	return s.toString();
};
haxe_Serializer.prototype = {
	buf: null
	,cache: null
	,shash: null
	,scount: null
	,useCache: null
	,useEnumIndex: null
	,toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(isNaN(v2)) this.buf.b += "k"; else if(!isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var _g1_head = v3.h;
					var _g1_val = null;
					while(_g1_head != null) {
						var i1;
						_g1_val = _g1_head[0];
						_g1_head = _g1_head[1];
						i1 = _g1_val;
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(d.getTime());
					break;
				case haxe_ds_StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it0 = v4.keys();
					while( $it0.hasNext() ) {
						var k = $it0.next();
						this.serializeString(k);
						this.serialize(__map_reserved[k] != null?v4.getReserved(k):v4.h[k]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it1 = v5.keys();
					while( $it1.hasNext() ) {
						var k1 = $it1.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.h[k1]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it2 = v6.keys();
					while( $it2.hasNext() ) {
						var k2 = $it2.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe_io_Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe_Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(js_Boot.__instanceof(v,Class)) {
					var className = Type.getClassName(v);
					this.buf.b += "A";
					this.serializeString(className);
				} else if(js_Boot.__instanceof(v,Enum)) {
					this.buf.b += "B";
					this.serializeString(Type.getEnumName(v));
				} else {
					if(this.useCache && this.serializeRef(v)) return;
					this.buf.b += "o";
					this.serializeFields(v);
				}
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw new js__$Boot_HaxeError("Cannot serialize function");
				break;
			default:
				throw new js__$Boot_HaxeError("Cannot serialize " + Std.string(v));
			}
		}
	}
	,__class__: haxe_Serializer
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.measure = function(f,pos) {
	var t0 = haxe_Timer.stamp();
	var r = f();
	haxe_Log.trace(haxe_Timer.stamp() - t0 + "s",pos);
	return r;
};
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe_Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = ["haxe","Unserializer"];
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g1 = 0;
	var _g = haxe_Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.prototype = {
	buf: null
	,pos: null
	,length: null
	,cache: null
	,scache: null
	,resolver: null
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw new js__$Boot_HaxeError("Invalid object");
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw new js__$Boot_HaxeError("Invalid object key");
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw new js__$Boot_HaxeError("Invalid enum format");
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			return this.readFloat();
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw new js__$Boot_HaxeError("Invalid string length");
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return NaN;
		case 109:
			return -Infinity;
		case 112:
			return Infinity;
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw new js__$Boot_HaxeError("Invalid reference");
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw new js__$Boot_HaxeError("Invalid string reference");
			return this.scache[n2];
		case 120:
			throw new js__$Boot_HaxeError(this.unserialize());
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw new js__$Boot_HaxeError("Class not found " + name);
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw new js__$Boot_HaxeError("Enum not found " + name1);
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw new js__$Boot_HaxeError("Enum not found " + name2);
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw new js__$Boot_HaxeError("Unknown enum index " + name2 + "@" + index);
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe_ds_IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c1 = this.get(this.pos++);
			while(c1 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c1 = this.get(this.pos++);
			}
			if(c1 != 104) throw new js__$Boot_HaxeError("Invalid IntMap format");
			return h1;
		case 77:
			var h2 = new haxe_ds_ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				var s3 = HxOverrides.substr(this.buf,this.pos,19);
				d = HxOverrides.strDate(s3);
				this.pos += 19;
			} else {
				var t = this.readFloat();
				var d1 = new Date();
				d1.setTime(t);
				d = d1;
			}
			this.cache.push(d);
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw new js__$Boot_HaxeError("Invalid bytes length");
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe_io_Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c2 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c2 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c2 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c21 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c21 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw new js__$Boot_HaxeError("Class not found " + name3);
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw new js__$Boot_HaxeError("Invalid custom data");
			return o2;
		case 65:
			var name4 = this.unserialize();
			var cl2 = this.resolver.resolveClass(name4);
			if(cl2 == null) throw new js__$Boot_HaxeError("Class not found " + name4);
			return cl2;
		case 66:
			var name5 = this.unserialize();
			var e2 = this.resolver.resolveEnum(name5);
			if(e2 == null) throw new js__$Boot_HaxeError("Enum not found " + name5);
			return e2;
		default:
		}
		this.pos--;
		throw new js__$Boot_HaxeError("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,__class__: haxe_io_Bytes
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	map: null
	,keys: null
	,index: null
	,count: null
	,hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,rh: null
	,set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Object.prototype.hasOwnProperty.call(val,"name")) this.name = Reflect.field(val,"name"); else this.name = "Error";
	if(Object.prototype.hasOwnProperty.call(val,"message")) this.message = Reflect.field(val,"message"); else this.message = Std.string(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	val: null
	,__class__: js__$Boot_HaxeError
});
var js_Browser = function() { };
$hxClasses["js.Browser"] = js_Browser;
js_Browser.__name__ = ["js","Browser"];
js_Browser.getLocalStorage = function() {
	try {
		var s = window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	byteLength: null
	,a: null
	,slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
$hxClasses["js.html.compat.DataView"] = js_html_compat_DataView;
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	buf: null
	,offset: null
	,length: null
	,getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var openfl_AssetCache = function() {
	this.__enabled = true;
	this.bitmapData = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.sound = new haxe_ds_StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl_AssetCache;
openfl_AssetCache.__name__ = ["openfl","AssetCache"];
openfl_AssetCache.prototype = {
	bitmapData: null
	,font: null
	,sound: null
	,get_enabled: function() {
		return this.__enabled;
	}
	,set_enabled: function(v) {
		return this.__enabled = v;
	}
	,__enabled: null
	,clear: function(prefix) {
		if(prefix == null) {
			this.bitmapData = new haxe_ds_StringMap();
			this.font = new haxe_ds_StringMap();
			this.sound = new haxe_ds_StringMap();
		} else {
			var $it0 = this.bitmapData.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				if(StringTools.startsWith(key,prefix)) this.bitmapData.remove(key);
			}
			var $it1 = this.font.keys();
			while( $it1.hasNext() ) {
				var key1 = $it1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var $it2 = this.sound.keys();
			while( $it2.hasNext() ) {
				var key2 = $it2.next();
				if(StringTools.startsWith(key2,prefix)) this.sound.remove(key2);
			}
		}
	}
	,getBitmapData: function(id) {
		return this.bitmapData.get(id);
	}
	,getFont: function(id) {
		return this.font.get(id);
	}
	,getSound: function(id) {
		return this.sound.get(id);
	}
	,hasBitmapData: function(id) {
		return this.bitmapData.exists(id);
	}
	,hasFont: function(id) {
		return this.font.exists(id);
	}
	,hasSound: function(id) {
		return this.sound.exists(id);
	}
	,removeBitmapData: function(id) {
		return this.bitmapData.remove(id);
	}
	,removeFont: function(id) {
		return this.font.remove(id);
	}
	,removeSound: function(id) {
		return this.sound.remove(id);
	}
	,setBitmapData: function(id,v) {
		this.bitmapData.set(id,v);
	}
	,setFont: function(id,v) {
		this.font.set(id,v);
	}
	,setSound: function(id,v) {
		this.sound.set(id,v);
	}
	,__class__: openfl_AssetCache
	,__properties__: {set_enabled:"set_enabled",get_enabled:"get_enabled"}
};
var openfl_Assets = function() { };
$hxClasses["openfl.Assets"] = openfl_Assets;
openfl_Assets.__name__ = ["openfl","Assets"];
openfl_Assets.exists = function(id,type) {
	openfl_Assets.initialize();
	var r = false;
	if(type == null) type = openfl_AssetType.BINARY;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) r = lr != null && lr.exists(sn,type); else null;
	return r;
};
openfl_Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	var r = null;
	var c;
	var b;
	if(useCache && (c = openfl_Assets.cache).get_enabled() && c.bitmapData.exists(id) && openfl_Assets.isValidBitmapData(b = openfl_Assets.cache.bitmapData.get(id))) return b;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.IMAGE)) {
			r = lr.getBitmapData(sn);
			if(useCache) {
				if(c.get_enabled()) c.bitmapData.set(id,r);
			} else r = r.clone();
		} else null;
	} else null;
	return r;
};
openfl_Assets.getBytes = function(id) {
	openfl_Assets.initialize();
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.BINARY)) {
			if(lr.isLocal(sn,openfl_AssetType.BINARY)) r = lr.getBytes(sn); else null;
		} else null;
	} else null;
	return r;
};
openfl_Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	var r = null;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.font.exists(id)) return openfl_Assets.cache.font.get(id);
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.FONT)) {
			if(lr.isLocal(sn,openfl_AssetType.FONT)) {
				r = lr.getFont(sn);
				if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.font.set(id,r);
			} else null;
		} else null;
	} else null;
	return r;
};
openfl_Assets.getLibrary = function(name) {
	return openfl_Assets.libraries.get(name == null || name == ""?"default":name);
};
openfl_Assets.getMovieClip = function(id) {
	openfl_Assets.initialize();
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.MOVIE_CLIP)) {
			if(lr.isLocal(sn,openfl_AssetType.MOVIE_CLIP)) r = lr.getMovieClip(sn); else null;
		} else null;
	} else null;
	return r;
};
openfl_Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	var r = null;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.sound.exists(id)) {
		var s = openfl_Assets.cache.sound.get(id);
		return s;
	}
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.MUSIC)) {
			if(lr.isLocal(sn,openfl_AssetType.MUSIC)) {
				r = lr.getMusic(sn);
				if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.sound.set(id,r);
			} else null;
		} else null;
	} else null;
	return r;
};
openfl_Assets.getPath = function(id) {
	openfl_Assets.initialize();
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,null)) r = lr.getPath(sn); else null;
	} else null;
	return r;
};
openfl_Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	var r = null;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.sound.exists(id)) {
		var s = openfl_Assets.cache.sound.get(id);
		return s;
	}
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.SOUND)) {
			if(lr.isLocal(sn,openfl_AssetType.SOUND)) {
				r = lr.getMusic(sn);
				if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.sound.set(id,r);
			} else null;
		} else null;
	} else null;
	return r;
};
openfl_Assets.getText = function(id) {
	openfl_Assets.initialize();
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(lr.exists(sn,openfl_AssetType.TEXT)) {
			if(lr.isLocal(sn,openfl_AssetType.TEXT)) r = lr.getText(sn); else null;
		} else null;
	} else null;
	return r;
};
openfl_Assets.initialize = function() {
	if(!openfl_Assets.initialized) {
		openfl_Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl_Assets.initialized = true;
	}
};
openfl_Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	var r = false;
	if(useCache && openfl_Assets.cache.get_enabled()) {
		if(type == openfl_AssetType.IMAGE || type == null) {
			if(openfl_Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl_AssetType.FONT || type == null) {
			if(openfl_Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl_AssetType.SOUND || type == openfl_AssetType.MUSIC || type == null) {
			if(openfl_Assets.cache.sound.exists(id)) return true;
		}
	}
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) r = lr.isLocal(sn,type); else null;
	return r;
};
openfl_Assets.isValidBitmapData = function(bitmapData) {
	return true;
};
openfl_Assets.isValidSound = function(sound) {
	return true;
};
openfl_Assets.list = function(type) {
	openfl_Assets.initialize();
	var r = [];
	var $it0 = openfl_Assets.libraries.iterator();
	while( $it0.hasNext() ) {
		var o = $it0.next();
		var m = o.list(type);
		if(m != null) r = r.concat(m);
	}
	return r;
};
openfl_Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.bitmapData.exists(id)) {
		var b = openfl_Assets.cache.bitmapData.get(id);
		handler(b);
		return;
	}
	var r = null;
	var sn2 = null;
	var lr2 = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.IMAGE)) {
			sn2 = sn;
			lr2 = lr;
		}
	} else null;
	if(r != null) {
		if(r) {
			if(useCache && openfl_Assets.cache.get_enabled()) lr2.loadBitmapData(sn2,function(b1) {
				openfl_Assets.cache.bitmapData.set(id,b1);
				handler(b1);
			}); else lr2.loadBitmapData(sn2,handler);
			return;
		} else null;
	}
	handler(null);
};
openfl_Assets.loadBytes = function(id,handler) {
	openfl_Assets.initialize();
	var r = false;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.BINARY)) lr.loadBytes(sn,handler); else null;
	} else null;
	if(r) return;
	handler(null);
};
openfl_Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.font.exists(id)) {
		handler(openfl_Assets.cache.font.get(id));
		return;
	}
	var lr2 = null;
	var sn2 = null;
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.FONT)) {
			lr2 = lr;
			sn2 = sn;
		}
	} else null;
	if(r != null) {
		if(r) {
			if(useCache && openfl_Assets.cache.get_enabled()) lr2.loadFont(sn2,function(o) {
				openfl_Assets.cache.font.set(id,o);
				handler(o);
			}); else lr2.loadFont(sn2,handler);
			return;
		} else null;
	}
	handler(null);
};
openfl_Assets.loadLibrary = function(name,handler) {
	openfl_Assets.initialize();
	var data = openfl_Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe_Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl_Assets.resolveEnum, resolveClass : openfl_Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl_Assets.libraries.set(name,library);
		library.load(handler);
	} else null;
};
openfl_Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.sound.exists(id)) {
		var sound = openfl_Assets.cache.sound.get(id);
		handler(sound);
		return;
	}
	var lr2 = null;
	var sn2 = null;
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.MUSIC)) {
			lr2 = lr;
			sn2 = sn;
		}
	} else null;
	if(r != null) {
		if(r) {
			if(useCache && openfl_Assets.cache.get_enabled()) lr2.loadMusic(sn2,function(s) {
				openfl_Assets.cache.sound.set(id,s);
				handler(s);
			}); else lr2.loadMusic(sn2,handler);
			return;
		} else null;
	}
	handler(null);
};
openfl_Assets.loadMovieClip = function(id,handler) {
	openfl_Assets.initialize();
	var r = false;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.MOVIE_CLIP)) lr.loadMovieClip(sn,handler); else null;
	} else null;
	if(r) return;
	handler(null);
};
openfl_Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.sound.exists(id)) {
		var sound = openfl_Assets.cache.sound.get(id);
		handler(sound);
		return;
	}
	var lr2 = null;
	var sn2 = null;
	var r = null;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.SOUND)) {
			lr2 = lr;
			sn2 = sn;
		}
	} else null;
	if(r != null) {
		if(r) {
			if(useCache && openfl_Assets.cache.get_enabled()) lr2.loadSound(sn2,function(s) {
				openfl_Assets.cache.sound.set(id,s);
				handler(s);
			}); else lr2.loadSound(sn2,handler);
			return;
		} else null;
	}
	handler(null);
};
openfl_Assets.loadText = function(id,handler) {
	openfl_Assets.initialize();
	var r = false;
	var i = id.indexOf(":");
	var ln = id.substring(0,i);
	var sn = id.substring(i + 1);
	var lr = openfl_Assets.getLibrary(ln);
	if(lr != null) {
		if(r = lr.exists(sn,openfl_AssetType.TEXT)) lr.loadText(sn,handler); else null;
	} else null;
	if(r) return;
	handler(null);
};
openfl_Assets.registerLibrary = function(name,library) {
	if(openfl_Assets.libraries.exists(name)) openfl_Assets.unloadLibrary(name);
	openfl_Assets.libraries.set(name,library);
};
openfl_Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl_Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl_Assets.unloadLibrary = function(name) {
	openfl_Assets.initialize();
	var $it0 = openfl_Assets.cache.bitmapData.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(key.substring(0,key.indexOf(":")) == name) openfl_Assets.cache.bitmapData.remove(key);
	}
	openfl_Assets.libraries.remove(name);
};
var openfl_AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl_AssetData;
openfl_AssetData.__name__ = ["openfl","AssetData"];
openfl_AssetData.prototype = {
	id: null
	,path: null
	,type: null
	,__class__: openfl_AssetData
};
var openfl_AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl_AssetType.BINARY = ["BINARY",0];
openfl_AssetType.BINARY.toString = $estr;
openfl_AssetType.BINARY.__enum__ = openfl_AssetType;
openfl_AssetType.FONT = ["FONT",1];
openfl_AssetType.FONT.toString = $estr;
openfl_AssetType.FONT.__enum__ = openfl_AssetType;
openfl_AssetType.IMAGE = ["IMAGE",2];
openfl_AssetType.IMAGE.toString = $estr;
openfl_AssetType.IMAGE.__enum__ = openfl_AssetType;
openfl_AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl_AssetType.MOVIE_CLIP.toString = $estr;
openfl_AssetType.MOVIE_CLIP.__enum__ = openfl_AssetType;
openfl_AssetType.MUSIC = ["MUSIC",4];
openfl_AssetType.MUSIC.toString = $estr;
openfl_AssetType.MUSIC.__enum__ = openfl_AssetType;
openfl_AssetType.SOUND = ["SOUND",5];
openfl_AssetType.SOUND.toString = $estr;
openfl_AssetType.SOUND.__enum__ = openfl_AssetType;
openfl_AssetType.TEMPLATE = ["TEMPLATE",6];
openfl_AssetType.TEMPLATE.toString = $estr;
openfl_AssetType.TEMPLATE.__enum__ = openfl_AssetType;
openfl_AssetType.TEXT = ["TEXT",7];
openfl_AssetType.TEXT.toString = $estr;
openfl_AssetType.TEXT.__enum__ = openfl_AssetType;
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
flash_display_DisplayObject.__init();
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
flash_Lib.__init();
(function() {
	var a = Event.prototype;
	var b = flash_events_Event.prototype;
	a.clone = b.clone;
	a.isDefaultPrevented = b.isDefaultPrevented;
	a.get_target = b.get_target;
	a.set_target = b.set_target;
	a.get_currentTarget = b.get_currentTarget;
	a.set_currentTarget = b.set_currentTarget;
})();
haxe_Resource.content = [];
flixel__$FlxSprite_GraphicDefault.preload();
flixel_input_mouse__$FlxMouse_GraphicCursor.preload();
flixel_system_GraphicLogo.preload();
flixel_system__$FlxPreloader_GraphicLogoLight.preload();
flixel_system__$FlxPreloader_GraphicLogoCorners.preload();
flixel_system_debug__$Window_GraphicWindowHandle.preload();
flixel_system_debug__$Window_GraphicCloseButton.preload();
flixel_tile_GraphicAuto.preload();
flixel_tile_GraphicAutoAlt.preload();
flixel_ui__$FlxTypedButton_GraphicButton.preload();
var __map_reserved = {}
var ArrayBuffer = (Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null"))() || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = (Function("return typeof DataView != 'undefined' ? DataView : null"))() || js_html_compat_DataView;
var Uint8Array = (Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null"))() || js_html_compat_Uint8Array._new;
ApplicationMain.config = { antialiasing : 0, background : 0, borderless : false, depthBuffer : false, fps : 60, fullscreen : false, height : 480, orientation : "portrait", resizable : true, stencilBuffer : true, title : "FlxProject", vsync : true, width : 640};
flixel_util_FlxRect._pool = new flixel_util_FlxPool_$flixel_$util_$FlxRect(flixel_util_FlxRect);
flixel_FlxObject.SEPARATE_BIAS = 4;
flixel_FlxObject.LEFT = 1;
flixel_FlxObject.RIGHT = 16;
flixel_FlxObject.UP = 256;
flixel_FlxObject.DOWN = 4096;
flixel_FlxObject.NONE = 0;
flixel_FlxObject.CEILING = 256;
flixel_FlxObject.FLOOR = 4096;
flixel_FlxObject.WALL = 17;
flixel_FlxObject.ANY = 4369;
flixel_FlxObject._firstSeparateFlxRect = flixel_util_FlxRect.get(null,null,null,null);
flixel_FlxObject._secondSeparateFlxRect = flixel_util_FlxRect.get(null,null,null,null);
PlayState.TILE_SIZE = 8;
PlayState.MAP_WIDTH_IN_TILES = 20;
PlayState.MAP_HEIGHT_IN_TILES = 20;
Player.SHOOT_RATE = 0.1;
Reg.BULLET = "images/bullet.png";
Reg.SPAWNER_GIBS = "images/spawner_gibs.png";
Reg.SPAWNER = "images/spawner.png";
Reg.SPACEMAN = "images/spaceman.png";
Reg.BOT = "images/bot.png";
Reg.JET = "images/jet.png";
Reg.BOT_BULLET = "images/bot_bullet.png";
Reg.TECH_TILES = "images/tech_tiles.png";
Reg.IMG_TILES = "images/img_tiles.png";
Reg.DIRT_TOP = "images/dirt_top.png";
Reg.DIRT = "images/dirt.png";
Reg.GIBS = "images/gibs.png";
Reg.MINI_FRAME = "images/miniframe.png";
Reg.CURSOR = "images/cursor.png";
Reg.levels = [];
Reg.level = 0;
Reg.scores = [];
Reg.score = 0;
Reg.saves = [];
Xml.Element = 0;
Xml.Document = 6;
flash_geom_Transform.DEG_TO_RAD = Math.PI / 180.0;
flash_geom_Matrix.pool = [];
haxe_ds_ObjectMap.count = 0;
flash_Lib.qTimeStamp = Date.now() + 0;
flash_Lib.mouseX = 0;
flash_Lib.mouseY = 0;
flash_media_Sound.library = new haxe_ds_StringMap();
flash_text_TextField.padding = 1.5;
flash_text_TextField.padding2 = 3.0;
flash_ui_Multitouch.supportsTouchEvents = false;
flash_ui_Multitouch.maxTouchPoints = 0;
flixel_FlxCamera.STYLE_LOCKON = 0;
flixel_FlxCamera.STYLE_PLATFORMER = 1;
flixel_FlxCamera.STYLE_TOPDOWN = 2;
flixel_FlxCamera.STYLE_TOPDOWN_TIGHT = 3;
flixel_FlxCamera.STYLE_SCREEN_BY_SCREEN = 4;
flixel_FlxCamera.STYLE_NO_DEAD_ZONE = 5;
flixel_FlxCamera.SHAKE_BOTH_AXES = 0;
flixel_FlxCamera.SHAKE_HORIZONTAL_ONLY = 1;
flixel_FlxCamera.SHAKE_VERTICAL_ONLY = 2;
flixel_util_FlxPoint._pool = new flixel_util_FlxPool_$flixel_$util_$FlxPoint(flixel_util_FlxPoint);
flixel_system_scaleModes_BaseScaleMode.zoom = flixel_util_FlxPoint.get(null,null);
flixel_system_frontEnds_HTML5FrontEnd.INTERNET_EXPLORER = "Internet Explorer";
flixel_system_frontEnds_HTML5FrontEnd.CHROME = "Chrome";
flixel_system_frontEnds_HTML5FrontEnd.FIREFOX = "Firefox";
flixel_system_frontEnds_HTML5FrontEnd.SAFARI = "Safari";
flixel_system_frontEnds_HTML5FrontEnd.OPERA = "Opera";
js_Boot.__toStr = {}.toString;
flixel_util_FlxPath.FORWARD = 0;
flixel_util_FlxPath.BACKWARD = 1;
flixel_util_FlxPath.LOOP_FORWARD = 16;
flixel_util_FlxPath.LOOP_BACKWARD = 256;
flixel_util_FlxPath.YOYO = 4096;
flixel_util_FlxPath.HORIZONTAL_ONLY = 65536;
flixel_util_FlxPath.VERTICAL_ONLY = 1048576;
flixel_util_FlxPath._point = flixel_util_FlxPoint.get(null,null);
flixel_tweens_FlxTween.PERSIST = 1;
flixel_tweens_FlxTween.LOOPING = 2;
flixel_tweens_FlxTween.PINGPONG = 4;
flixel_tweens_FlxTween.ONESHOT = 8;
flixel_tweens_FlxTween.BACKWARD = 16;
flixel_util_FlxSave.SUCCESS = 0;
flixel_util_FlxSave.PENDING = 1;
flixel_util_FlxSave.ERROR = 2;
flixel_FlxG.autoPause = true;
flixel_FlxG.fixedTimestep = true;
flixel_FlxG.timeScale = 1;
flixel_FlxG.worldDivisions = 6;
flixel_FlxG.VERSION = new flixel_system_FlxVersion(3,3,8);
flixel_FlxG.elapsed = 0;
flixel_FlxG.maxElapsed = 0.1;
flixel_FlxG.fullscreen = false;
flixel_FlxG.worldBounds = flixel_util_FlxRect.get(null,null,null,null);
flixel_FlxG.save = new flixel_util_FlxSave();
flixel_FlxG.swipes = [];
flixel_FlxG.html5 = new flixel_system_frontEnds_HTML5FrontEnd();
flixel_FlxG.inputs = new flixel_system_frontEnds_InputFrontEnd();
flixel_FlxG.console = new flixel_system_frontEnds_ConsoleFrontEnd();
flixel_FlxG.log = new flixel_system_frontEnds_LogFrontEnd();
flixel_FlxG.bitmapLog = new flixel_system_frontEnds_BitmapLogFrontEnd();
flixel_FlxG.watch = new flixel_system_frontEnds_WatchFrontEnd();
flixel_FlxG["debugger"] = new flixel_system_frontEnds_DebuggerFrontEnd();
flixel_FlxG.vcr = new flixel_system_frontEnds_VCRFrontEnd();
flixel_FlxG.bitmap = new flixel_system_frontEnds_BitmapFrontEnd();
flixel_FlxG.cameras = new flixel_system_frontEnds_CameraFrontEnd();
flixel_FlxG.plugins = new flixel_system_frontEnds_PluginFrontEnd();
flixel_FlxG.sound = new flixel_system_frontEnds_SoundFrontEnd();
flixel_FlxG.signals = new flixel_system_frontEnds_SignalFrontEnd();
flixel_FlxG._scaleMode = new flixel_system_scaleModes_RatioScaleMode();
flixel_animation_FlxAnimationController.prefixLength = 0;
flixel_animation_FlxAnimationController.postfixLength = 0;
flixel_animation_FlxPrerotatedAnimation.PREROTATED = "prerotated_animation";
flixel_effects_FlxFlicker._pool = new flixel_util_FlxPool_$flixel_$effects_$FlxFlicker(flixel_effects_FlxFlicker);
flixel_effects_FlxFlicker._boundObjects = new haxe_ds_ObjectMap();
flixel_input_gamepad_FlxGamepad.JUST_RELEASED = -1;
flixel_input_gamepad_FlxGamepad.RELEASED = 0;
flixel_input_gamepad_FlxGamepad.PRESSED = 1;
flixel_input_gamepad_FlxGamepad.JUST_PRESSED = 2;
flixel_input_keyboard_FlxKey.JUST_RELEASED = -1;
flixel_input_keyboard_FlxKey.RELEASED = 0;
flixel_input_keyboard_FlxKey.PRESSED = 1;
flixel_input_keyboard_FlxKey.JUST_PRESSED = 2;
flixel_input_keyboard_FlxKey.A = 65;
flixel_input_keyboard_FlxKey.B = 66;
flixel_input_keyboard_FlxKey.C = 67;
flixel_input_keyboard_FlxKey.D = 68;
flixel_input_keyboard_FlxKey.E = 69;
flixel_input_keyboard_FlxKey.F = 70;
flixel_input_keyboard_FlxKey.G = 71;
flixel_input_keyboard_FlxKey.H = 72;
flixel_input_keyboard_FlxKey.I = 73;
flixel_input_keyboard_FlxKey.J = 74;
flixel_input_keyboard_FlxKey.K = 75;
flixel_input_keyboard_FlxKey.L = 76;
flixel_input_keyboard_FlxKey.M = 77;
flixel_input_keyboard_FlxKey.N = 78;
flixel_input_keyboard_FlxKey.O = 79;
flixel_input_keyboard_FlxKey.P = 80;
flixel_input_keyboard_FlxKey.Q = 81;
flixel_input_keyboard_FlxKey.R = 82;
flixel_input_keyboard_FlxKey.S = 83;
flixel_input_keyboard_FlxKey.T = 84;
flixel_input_keyboard_FlxKey.U = 85;
flixel_input_keyboard_FlxKey.V = 86;
flixel_input_keyboard_FlxKey.W = 87;
flixel_input_keyboard_FlxKey.X = 88;
flixel_input_keyboard_FlxKey.Y = 89;
flixel_input_keyboard_FlxKey.Z = 90;
flixel_input_keyboard_FlxKey.ZERO = 48;
flixel_input_keyboard_FlxKey.ONE = 49;
flixel_input_keyboard_FlxKey.TWO = 50;
flixel_input_keyboard_FlxKey.THREE = 51;
flixel_input_keyboard_FlxKey.FOUR = 52;
flixel_input_keyboard_FlxKey.FIVE = 53;
flixel_input_keyboard_FlxKey.SIX = 54;
flixel_input_keyboard_FlxKey.SEVEN = 55;
flixel_input_keyboard_FlxKey.EIGHT = 56;
flixel_input_keyboard_FlxKey.NINE = 57;
flixel_input_keyboard_FlxKey.PAGEUP = 33;
flixel_input_keyboard_FlxKey.PAGEDOWN = 34;
flixel_input_keyboard_FlxKey.HOME = 36;
flixel_input_keyboard_FlxKey.END = 35;
flixel_input_keyboard_FlxKey.INSERT = 45;
flixel_input_keyboard_FlxKey.ESCAPE = 27;
flixel_input_keyboard_FlxKey.MINUS = 189;
flixel_input_keyboard_FlxKey.PLUS = 187;
flixel_input_keyboard_FlxKey.DELETE = 46;
flixel_input_keyboard_FlxKey.BACKSPACE = 8;
flixel_input_keyboard_FlxKey.LBRACKET = 219;
flixel_input_keyboard_FlxKey.RBRACKET = 221;
flixel_input_keyboard_FlxKey.BACKSLASH = 220;
flixel_input_keyboard_FlxKey.CAPSLOCK = 20;
flixel_input_keyboard_FlxKey.SEMICOLON = 186;
flixel_input_keyboard_FlxKey.QUOTE = 222;
flixel_input_keyboard_FlxKey.ENTER = 13;
flixel_input_keyboard_FlxKey.SHIFT = 16;
flixel_input_keyboard_FlxKey.COMMA = 188;
flixel_input_keyboard_FlxKey.PERIOD = 190;
flixel_input_keyboard_FlxKey.SLASH = 191;
flixel_input_keyboard_FlxKey.NUMPADSLASH = 191;
flixel_input_keyboard_FlxKey.GRAVEACCENT = 192;
flixel_input_keyboard_FlxKey.CONTROL = 17;
flixel_input_keyboard_FlxKey.ALT = 18;
flixel_input_keyboard_FlxKey.SPACE = 32;
flixel_input_keyboard_FlxKey.UP = 38;
flixel_input_keyboard_FlxKey.DOWN = 40;
flixel_input_keyboard_FlxKey.LEFT = 37;
flixel_input_keyboard_FlxKey.RIGHT = 39;
flixel_input_keyboard_FlxKey.TAB = 9;
flixel_input_keyboard_FlxKey.PRINTSCREEN = 301;
flixel_input_keyboard_FlxKey.F1 = 112;
flixel_input_keyboard_FlxKey.F2 = 113;
flixel_input_keyboard_FlxKey.F3 = 114;
flixel_input_keyboard_FlxKey.F4 = 115;
flixel_input_keyboard_FlxKey.F5 = 116;
flixel_input_keyboard_FlxKey.F6 = 117;
flixel_input_keyboard_FlxKey.F7 = 118;
flixel_input_keyboard_FlxKey.F8 = 119;
flixel_input_keyboard_FlxKey.F9 = 120;
flixel_input_keyboard_FlxKey.F10 = 121;
flixel_input_keyboard_FlxKey.F11 = 122;
flixel_input_keyboard_FlxKey.F12 = 123;
flixel_input_keyboard_FlxKey.NUMPADZERO = 96;
flixel_input_keyboard_FlxKey.NUMPADONE = 97;
flixel_input_keyboard_FlxKey.NUMPADTWO = 98;
flixel_input_keyboard_FlxKey.NUMPADTHREE = 99;
flixel_input_keyboard_FlxKey.NUMPADFOUR = 100;
flixel_input_keyboard_FlxKey.NUMPADFIVE = 101;
flixel_input_keyboard_FlxKey.NUMPADSIX = 102;
flixel_input_keyboard_FlxKey.NUMPADSEVEN = 103;
flixel_input_keyboard_FlxKey.NUMPADEIGHT = 104;
flixel_input_keyboard_FlxKey.NUMPADNINE = 105;
flixel_input_keyboard_FlxKey.NUMPADMINUS = 109;
flixel_input_keyboard_FlxKey.NUMPADPLUS = 107;
flixel_input_keyboard_FlxKey.NUMPADPERIOD = 110;
flixel_input_keyboard_FlxKey.NUMPADMULTIPLY = 106;
flixel_input_keyboard_FlxKeyboard.TOTAL = 256;
flixel_input_mouse_FlxMouseButton.LEFT = -1;
flixel_input_mouse_FlxMouseButton.MIDDLE = -2;
flixel_input_mouse_FlxMouseButton.RIGHT = -3;
flixel_input_mouse_FlxMouseButton.FAST_PRESS_RELEASE = -2;
flixel_input_mouse_FlxMouseButton.JUST_RELEASED = -1;
flixel_input_mouse_FlxMouseButton.RELEASED = 0;
flixel_input_mouse_FlxMouseButton.PRESSED = 1;
flixel_input_mouse_FlxMouseButton.JUST_PRESSED = 2;
flixel_input_touch_FlxTouchManager.maxTouchPoints = 0;
flixel_system_FlxAssets.FONT_DEFAULT = "Nokia Cellphone FC Small";
flixel_system_FlxAssets.FONT_DEBUGGER = "Arial";
flixel_system_FlxList._NUM_CACHED_FLX_LIST = 0;
flixel_system_FlxQuadTree.A_LIST = 0;
flixel_system_FlxQuadTree.B_LIST = 1;
flixel_system_FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
flixel_system_debug_LogStyle.NORMAL = new flixel_system_debug_LogStyle();
flixel_system_debug_LogStyle.WARNING = new flixel_system_debug_LogStyle("[WARNING] ","FFFF00",12,true,false,false,"assets/sounds/beep",true);
flixel_system_debug_LogStyle.ERROR = new flixel_system_debug_LogStyle("[ERROR] ","FF0000",12,true,false,false,"assets/sounds/beep",true);
flixel_system_debug_LogStyle.NOTICE = new flixel_system_debug_LogStyle("[NOTICE] ","008000",12,true);
flixel_system_debug_LogStyle.CONSOLE = new flixel_system_debug_LogStyle("&#62; ","0000ff",12,true);
flixel_system_debug_Window.BG_COLOR = -580952225;
flixel_system_debug_Window.HEADER_COLOR = -1157627904;
flixel_system_debug_Window.HEADER_ALPHA = 0.8;
flixel_system_debug_Window.HEADER_HEIGHT = 15;
flixel_system_debug_Window.WINDOW_AMOUNT = 0;
flixel_system_layer_TileSheetExt._DRAWCALLS = 0;
flixel_system_layer_frames_FlxFrame.POINT = new flash_geom_Point();
flixel_system_layer_frames_FlxFrame.MATRIX = new flash_geom_Matrix();
flixel_system_layer_frames_FlxFrame.RECT = new flash_geom_Rectangle();
flixel_text_FlxText.BORDER_NONE = 0;
flixel_text_FlxText.BORDER_SHADOW = 1;
flixel_text_FlxText.BORDER_OUTLINE = 2;
flixel_text_FlxText.BORDER_OUTLINE_FAST = 3;
flixel_text_pxText_PxBitmapFont._storedFonts = new haxe_ds_StringMap();
flixel_text_pxText_PxBitmapFont.ZERO_POINT = new flash_geom_Point();
flixel_tile_FlxTilemap.OFF = 0;
flixel_tile_FlxTilemap.AUTO = 1;
flixel_tile_FlxTilemap.ALT = 2;
flixel_tile_FlxTilemap._helperBuffer = Type.createEmptyInstance(flixel_tile_FlxTilemapBuffer);
flixel_tweens_FlxEase.PI2 = Math.PI / 2;
flixel_tweens_FlxEase.EL = 2 * Math.PI / .45;
flixel_tweens_FlxEase.B1 = 0.36363636363636365;
flixel_tweens_FlxEase.B2 = 0.72727272727272729;
flixel_tweens_FlxEase.B3 = 0.54545454545454541;
flixel_tweens_FlxEase.B4 = 0.90909090909090906;
flixel_tweens_FlxEase.B5 = 0.81818181818181823;
flixel_tweens_FlxEase.B6 = 0.95454545454545459;
flixel_tweens_FlxEase.ELASTIC_AMPLITUDE = 1;
flixel_tweens_FlxEase.ELASTIC_PERIOD = 0.4;
flixel_ui_FlxButton.NORMAL = 0;
flixel_ui_FlxButton.HIGHLIGHT = 1;
flixel_ui_FlxButton.PRESSED = 2;
flixel_util_FlxAngle.cosTable = [];
flixel_util_FlxAngle.sinTable = [];
flixel_util_FlxBitmapDataPool.maxLength = 8;
flixel_util_FlxBitmapDataPool.$length = 0;
flixel_util_FlxBitmapDataPool._rect = new flash_geom_Rectangle();
flixel_util_FlxCollision.CAMERA_WALL_OUTSIDE = 0;
flixel_util_FlxCollision.CAMERA_WALL_INSIDE = 1;
flixel_util_FlxCollision.pointA = new flash_geom_Point();
flixel_util_FlxCollision.pointB = new flash_geom_Point();
flixel_util_FlxCollision.centerA = new flash_geom_Point();
flixel_util_FlxCollision.centerB = new flash_geom_Point();
flixel_util_FlxCollision.matrixA = new flash_geom_Matrix();
flixel_util_FlxCollision.matrixB = new flash_geom_Matrix();
flixel_util_FlxCollision.testMatrix = new flash_geom_Matrix();
flixel_util_FlxCollision.boundsA = new flash_geom_Rectangle();
flixel_util_FlxCollision.boundsB = new flash_geom_Rectangle();
flixel_util_FlxColor.RED = -65536;
flixel_util_FlxColor.YELLOW = -256;
flixel_util_FlxColor.GREEN = -16744448;
flixel_util_FlxColor.BLUE = -16776961;
flixel_util_FlxColor.PINK = -16181;
flixel_util_FlxColor.PURPLE = -8388480;
flixel_util_FlxColor.WHITE = -1;
flixel_util_FlxColor.BLACK = -16777216;
flixel_util_FlxColor.GRAY = -8355712;
flixel_util_FlxColor.BROWN = -6927616;
flixel_util_FlxColor.TRANSPARENT = 0;
flixel_util_FlxColor.IVORY = -16;
flixel_util_FlxColor.BEIGE = -657956;
flixel_util_FlxColor.WHEAT = -663885;
flixel_util_FlxColor.TAN = -2968436;
flixel_util_FlxColor.KHAKI = -3952495;
flixel_util_FlxColor.SILVER = -4144960;
flixel_util_FlxColor.CHARCOAL = -12171706;
flixel_util_FlxColor.NAVY_BLUE = -16777088;
flixel_util_FlxColor.ROYAL_BLUE = -16233314;
flixel_util_FlxColor.MEDIUM_BLUE = -16777011;
flixel_util_FlxColor.AZURE = -16744449;
flixel_util_FlxColor.CYAN = -16711681;
flixel_util_FlxColor.MAGENTA = -65281;
flixel_util_FlxColor.AQUAMARINE = -8388652;
flixel_util_FlxColor.TEAL = -16744320;
flixel_util_FlxColor.FOREST_GREEN = -14513374;
flixel_util_FlxColor.OLIVE = -8355840;
flixel_util_FlxColor.CHARTREUSE = -8388864;
flixel_util_FlxColor.LIME = -4194560;
flixel_util_FlxColor.GOLDEN = -10496;
flixel_util_FlxColor.GOLDENROD = -2448096;
flixel_util_FlxColor.CORAL = -32944;
flixel_util_FlxColor.SALMON = -360334;
flixel_util_FlxColor.HOT_PINK = -258112;
flixel_util_FlxColor.FUCHSIA = -34817;
flixel_util_FlxColor.PUCE = -3372903;
flixel_util_FlxColor.MAUVE = -2051841;
flixel_util_FlxColor.LAVENDER = -4882724;
flixel_util_FlxColor.PLUM = -8113799;
flixel_util_FlxColor.INDIGO = -11861886;
flixel_util_FlxColor.MAROON = -8388608;
flixel_util_FlxColor.CRIMSON = -2354116;
flixel_util_FlxMath.MIN_VALUE = 0.0000000000000001;
flixel_util_FlxMath.MAX_VALUE = 1.79e+308;
flixel_util_FlxMath.SQUARE_ROOT_OF_TWO = 1.41421356237;
flixel_util_FlxRandom.globalSeed = 1;
flixel_util_FlxRandom._internalSeed = 1;
flixel_util_FlxRandom.MULTIPLIER = 48271;
flixel_util_FlxRandom.MODULUS = 2147483647;
flixel_util_FlxRandom._intHelper = 0;
flixel_util_FlxRandom._intHelper2 = 0;
flixel_util_FlxRandom._intHelper3 = 0;
flixel_util_FlxRandom._floatHelper = 0;
flixel_util_FlxRandom._red = 0;
flixel_util_FlxRandom._green = 0;
flixel_util_FlxRandom._blue = 0;
flixel_util_FlxRandom._alpha = 0;
flixel_util_FlxSort.ASCENDING = -1;
flixel_util_FlxSort.DESCENDING = 1;
flixel_util_FlxSpriteUtil.flashGfxSprite = new flash_display_Sprite();
flixel_util_FlxSpriteUtil.flashGfx = flixel_util_FlxSpriteUtil.flashGfxSprite.get_graphics();
flixel_util_LabelValuePair._pool = new flixel_util_FlxPool_$flixel_$util_$LabelValuePair(flixel_util_LabelValuePair);
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = Type;
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
openfl_Assets.cache = new openfl_AssetCache();
openfl_Assets.libraries = new haxe_ds_StringMap();
openfl_Assets.initialized = false;
ApplicationMain.main();
})(typeof console != "undefined" ? console : {log:function(){}});
