package state 
{
	import com.greensock.easing.Linear;
	import com.greensock.TweenMax;
	import data.Registry;
	import flash.display.InteractiveObject;
	import flash.utils.getTimer;
	import mx.core.FlexSprite;
	import obj.Enemies;
	import obj.Enemy;
	import obj.FlxGroupXY;
	import org.flixel.FlxButton;
	import org.flixel.FlxGroup;
	import org.flixel.FlxText;
	//import obj.Weapon;
	import org.flixel.FlxCamera;
	import org.flixel.FlxG;
	import org.flixel.FlxObject;
	import org.flixel.FlxPoint;
	import org.flixel.FlxRect;
	import org.flixel.FlxSprite;
	import org.flixel.FlxState;
	import org.flixel.FlxU;
	import org.flixel.plugin.photonstorm.*;

	
	/**
	 * ...
	 * @author Al
	 */
	public class GameScreen extends FlxState 
	{
		private var debug:FlxSprite;
		private var time:Boolean = false;
		private var timer:Number = 60;
		private var hud:FlxGroup;
		
		private var healthBar:FlxBar;
		private var bar1:FlxBar;
		
		/**
		 * Option
		 * 
		 * */
		private var optionScreen:FlxGroupXY;
		private var opScrBg:FlxSprite;
		private var sfxIcon:FlxSprite;
		private var musicIcon:FlxSprite;
		private var optMainMenuBtn:FlxSprite;
		private var optBackBtn:FlxSprite;
		
		/*
		 * HOW TO PLAY
		 * */
		private var howtoplayScreen:FlxGroupXY;
		private var howtoplayBg:FlxSprite;
		private var howtoplayBackBtnSprite:FlxSprite;
		private var howtoplayBackBtn:FlxButton;
		
		/*
		 * Pause
		 * */
		private var pauseScreen:FlxGroupXY;
		private var pauseBg:FlxSprite;
		private var resumeBtn:FlxButton;
		
		/*
		 * 
		 * */
		
	    private var bg:FlxSprite;
		private var scoreText:FlxText;
		private var score:Number;
		private var lastResume:int;
		private var resumeCountdownRate:int = 1000;
		private var countdown:Boolean = false;
		private var cdText:FlxText;
		private var resumeTime:int;
		
		public function GameScreen() 
		{
			
		}
		
		override public function create():void 
		{
			Registry.init();
			hud = new FlxGroup();
			score = 0;
			resumeTime = 3;
			
			/*OPTION*/
			optionScreen = new FlxGroupXY();
			opScrBg = new FlxSprite(0, 0, Registry.IMAGEBACKGROUND);
			sfxIcon = new FlxSprite(50, 90, Registry.TROPHY);
			musicIcon = new FlxSprite(50, 150, Registry.TROPHY);
			optionScreen.add(opScrBg);
			optionScreen.add(sfxIcon);
			optionScreen.add(musicIcon);
			optionScreen.y = -FlxG.height;
			
			/*HOWTOPLAY*/
			howtoplayScreen = new FlxGroupXY();
			howtoplayBg = new FlxSprite(50, 50);
			howtoplayBg.makeGraphic(220, 150);
			howtoplayBackBtn =  new FlxButton(160, 150, "Tekan ini Al", ConfirmHowToPlay);
			howtoplayScreen.add(howtoplayBg);
			howtoplayScreen.add(howtoplayBackBtn);
			//howtoplayBackBtn.loadGraphic(Registry.zeldaLifeHeartsPNG);
			
			/*PAUSE*/
			pauseScreen = new FlxGroupXY();
			pauseBg = new FlxSprite(0, 0);
			pauseBg.makeGraphic(320, 240);
			pauseBg.alpha = 0.7;
			resumeBtn = new FlxButton(160, 120, "Resume", ResumeGame);
			pauseScreen.add(pauseBg);
			pauseScreen.add(resumeBtn);
			pauseScreen.y = -FlxG.height;
			add(pauseScreen);
			/*HealthBar*/
			healthBar = new FlxBar(0,0, FlxBar.FILL_LEFT_TO_RIGHT, 100, 5);
			healthBar.createImageBar(null, Registry.zeldaLifeHeartsPNG, 0x0);
			healthBar.setRange(0, 10);
			healthBar.currentValue = Registry.PLAYER.health;
			
			/*BOSS BAR*/
			bar1 = new FlxBar(215, 5, FlxBar.FILL_LEFT_TO_RIGHT,100);
			bar1.createImageBar(null, Registry.healthBarPNG, 0x88000000);

			/*SCore Bar*/
			scoreText:FlxText;
			scoreText = new FlxText(0, 0, FlxG.width,"Score: 0");
			scoreText.setFormat(null, 10, 0xFFFFFFF, "center");
			
			/*Countdown*/
			cdText = new FlxText(150, 75, 30, "");
			cdText.setFormat(null, 24, 0xFFFFFFFFF, "center");
			
			add(optionScreen);
			add(howtoplayScreen);
			hud.add(healthBar);
			hud.add(bar1);
			hud.add(scoreText);
			add(hud);
			
			hud.setAll("scrollFactor", new FlxPoint(0, 0));
			
			add(Registry.PLAYER);
			add(Registry.WEAPON.group);
			add(Registry.ENEMIES);
			add(cdText);
			
			init();
		}
		
		private function init():void {
			Registry.WEAPON.setFiringPosition(Registry.PLAYER.getMidpoint().x, Registry.PLAYER.getMidpoint().y);
			debug = new FlxSprite(0, 0).makeGraphic(640, 640, 0x0);
			add(debug);
			
			FlxG.camera.setBounds(0, 0, 640, 480, true);
			FlxG.camera.follow(Registry.PLAYER, FlxCamera.STYLE_TOPDOWN);
			
		}
		
		override public function update():void 
		{
			super.update();
			if ( !Registry.isPaused ){
				bar1.currentValue++;
				var enemy:FlxPoint = new FlxPoint();
				enemy =	findNearestYummyHuman();
				//if ( enemy.x != 0 && enemy.y != 0 )
				Registry.WEAPON.fireAtPosition(enemy.x, enemy.y);	
				debug.fill(0x0);
				debug.drawLine(Registry.PLAYER.getMidpoint().x, Registry.PLAYER.getMidpoint().y, FlxG.mouse.x, FlxG.mouse.y, 0xffFFFFFF,1);
				FlxG.overlap(Registry.WEAPON.group, Registry.ENEMIES, BulletHitEnemy); 
				FlxG.overlap(Registry.ENEMIES, Registry.PLAYER, EnemiesHurtPlayer); 
			}
			else {
				if ( countdown ) {
					if (getTimer() > lastResume + resumeCountdownRate)
					{
						lastResume = getTimer();
						cdText.text = resumeTime.toString();
						resumeTime--;
						trace("resume time" + resumeTime);
						if ( resumeTime == 0 ){
							Registry.isPaused = false;
							cdText.text = "";
						}
					}
				}
			}
		}
		
		private function ResumeGame():void 
		{
			Registry.isPaused = false;
		}
		
		private function ConfirmHowToPlay():void 
		{
			TweenMax.to(howtoplayScreen, 1, { ease:Linear.easeInOut, y: -FlxG.height,onComplete:Unpause } );
		}
		
	
		private function Unpause():void 
		{
			countdown = true;
		}
		
		private function EnemiesHurtPlayer(Sprite1:FlxSprite,Sprite2:FlxSprite):void 
		{
			Sprite1.kill();
			Sprite2.hurt(1);
			healthBar.currentValue = Registry.PLAYER.health;
		}
		
		protected function BulletHitEnemy(Sprite1:FlxSprite,Sprite2:FlxSprite):void
		{
			Sprite1.kill();
			var e:Enemy = Sprite2 as Enemy;
			var isdead = e.hit(Math.random() * 10 + 20);
			if ( isdead ) {
				score += 10;
				scoreText.text = "Score: " + score;
			}
		}
		
		public function findNearestYummyHuman():FlxPoint
		{
			var enemyList:Array = new Array;
			
			for ( var i:int = 0 ; i < Registry.ENEMIES.length ; i++) 
			{
				var objek:Enemy = Registry.ENEMIES.members[i];
				var dist:Number = FlxU.getDistance (new FlxPoint (Registry.PLAYER.x, Registry.PLAYER.y), new FlxPoint (objek.x, objek.y)) ;
				if (objek.alive && objek.exists && dist < 100)
					enemyList.push (objek) ;
			}
			enemyList.sort (compareDistanceToUsFlxObject) ;
			
			// Loop through survivors, checking to see if we have a LOS to any of them			
			for each (var enemy:Enemy in enemyList)
			{
				if ( enemy.exists )
					return (enemy.getMidpoint());
			}
			return new FlxPoint();
		}

		private function compareDistanceToUsFlxObject (a:FlxObject, b:FlxObject):Number
		{
			var us:FlxPoint = new FlxPoint (Registry.PLAYER.x, Registry.PLAYER.y) ;
			var distA:Number = FlxU.getDistance (new FlxPoint (a.x, a.y), us) ;
			var distB:Number = FlxU.getDistance (new FlxPoint (b.x, b.y), us) ;
			
			if (distA > distB)
				return 1 ;
			else if (distA < distB)
				return -1 ;
			else
				return 0 ;
		}
	}
}