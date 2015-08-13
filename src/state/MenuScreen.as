package state 
{
	//import com.greensock.easing.Linear;
	import com.greensock.easing.Linear;
	import data.Registry;
	import obj.FlxGroupXY;
	import org.flixel.FlxButton;
	import org.flixel.FlxG;
	import org.flixel.FlxGroup;
	import org.flixel.FlxSprite;
	import org.flixel.FlxState;
	import org.flixel.FlxText;
	import com.greensock.TweenMax;
	import org.flixel.plugin.photonstorm.FlxButtonPlus;
	
	/**
	 * ...
	 * @author ...
	 */
	public class MenuScreen extends FlxState 
	{
		private const MENUSTATE:int = 0;
		private const CREDITSTATE:int = 1;
		private const MEDALSTATE:int = 2;
		private var currentState:int;

		/*
		 * Credit
		 * */
		private var creditScreen:FlxGroupXY;
		private var opScrBg:FlxSprite;
		private var sfxIcon:FlxSprite;
		private var musicIcon:FlxSprite;
		private var crdtBackBtn:FlxButtonPlus;
		
		
		/*
		 * Medals
		 * */
		private var medalsScreen:FlxGroupXY;
		private var medalsScreenBg:FlxSprite;
		private var medalsPanel:FlxSprite;
		private var medalsIcon:FlxSprite;
		private var medalsScreenBackBtn:FlxButtonPlus;
		
		private var eraseDataBtn:FlxButtonPlus;
		
		
		override public function create():void
		{
			creditScreen = new FlxGroupXY();
			opScrBg = new FlxSprite(0, 0, Registry.IMAGEBACKGROUND);
			sfxIcon = new FlxSprite(50, 90, Registry.TROPHY);
			musicIcon = new FlxSprite(50, 150, Registry.TROPHY);
			
			crdtBackBtn= new FlxButtonPlus(FlxG.width - 90, FlxG.height - 20, ShowMenuFromCredit,null,"",100,20);
			crdtBackBtn.loadGraphic(musicIcon, sfxIcon);
			
			creditScreen.add(opScrBg);
			creditScreen.add(sfxIcon);
			creditScreen.add(musicIcon);
			creditScreen.add(crdtBackBtn);
			
			
			var title:FlxText;
			title = new FlxText(0, 16, FlxG.width, "Game Title");
			title.setFormat(null, 16, 0xFFFFFFF, "center");
			add(title);

			var playBtn:FlxButton;
			playBtn = new FlxButton(FlxG.width / 5, FlxG.height - 120, "Play", PlayGame);
			
			add(playBtn);
			
			var moreGamesBtn:FlxButton;
			moreGamesBtn = new FlxButton(FlxG.width/5 + 120, FlxG.height - 120, "More Games", PlayGame);
			add(moreGamesBtn);
			
			var AchievementBtn:FlxButton;
			AchievementBtn = new FlxButton(FlxG.width/5, FlxG.height - 60, "Medals", ShowMedalScreen);
			add(AchievementBtn );
			
			var CreditsBtn:FlxButton;
			CreditsBtn = new FlxButton(FlxG.width/5 + 120, FlxG.height - 60, "Credits",ShowCredit);
			add(CreditsBtn);
			
			eraseDataBtn = new FlxButtonPlus(FlxG.width - 90, FlxG.height - 20,PlayGame,null,"",100,20);
			eraseDataBtn.loadGraphic(musicIcon,sfxIcon);
			
			
			/*MEDALS*/
			medalsScreen = new FlxGroupXY();
			medalsScreenBg= new FlxSprite(0, 0, Registry.IMAGEBACKGROUND);
			medalsIcon = new FlxSprite(50, 90, Registry.TROPHY);
			medalsPanel = new FlxSprite(50, 150, Registry.zeldaLifePanelPNG);
			
			medalsScreenBackBtn = new FlxButtonPlus(FlxG.width - 90, FlxG.height - 20, ShowMenuFromMedals,null,"",100,20);
			medalsScreenBackBtn.loadGraphic(musicIcon, musicIcon);
			
			medalsScreen.add(medalsScreenBg);
			medalsScreen.add(medalsPanel);
			medalsScreen.add(medalsScreenBackBtn);
			var baris:int = 1;
			var kolom:int = 20;
			for (var i:int = 1; i <= 20 ; i++ ) {
				var medalBtn:FlxButtonPlus = new FlxButtonPlus( kolom , baris * 20 , ShowMedals , new Array(1) , "", 25, 20);
				medalBtn.loadGraphic(musicIcon, medalsIcon);
				medalsScreen.add(medalBtn);
				kolom += 30;
				if ( i == 10 ) {
					kolom = 20;
					baris++;
				}
			}
			
			add(eraseDataBtn);
			add(creditScreen);
			add(medalsScreen);
			creditScreen.y = -FlxG.height;
			medalsScreen.y = -FlxG.height;
			
		}
		
		private function ShowMedals():void 
		{
			
		}
		
		private function ShowMenuFromMedals():void 
		{
			if (currentState == MEDALSTATE) {
				TweenMax.to(medalsScreen, 1, { ease:Linear.easeInOut, y:-FlxG.height} );
				currentState = MENUSTATE;
			}
		}
		
		private function ShowMedalScreen():void 
		{
			if (currentState == MENUSTATE){
				TweenMax.to(medalsScreen, 1, { ease:Linear.easeInOut, y:0 } );
				currentState = MEDALSTATE;
			}	
		}
		
		public function PlayGame():void
		{
			if (currentState == MENUSTATE)
				FlxG.switchState(new GameScreen());
		}
		
		public function ShowCredit():void 
		{
			if (currentState == MENUSTATE){
				TweenMax.to(creditScreen, 1, { ease:Linear.easeInOut, y:0 } );
				currentState = CREDITSTATE;
			}	
		}
		
		public function ShowMenuFromCredit() :void{
			if (currentState == CREDITSTATE) {
				TweenMax.to(creditScreen, 1, { ease:Linear.easeInOut, y:-FlxG.height} );
				currentState = MENUSTATE;
			}
		}
		
		override public function update():void
		{
			super.update(); // calls update on everything you added to the game loop
 
			if (FlxG.keys.justPressed("SPACE"))
			{
				FlxG.switchState(new GameScreen());
			}
 
		} // end function update
		
		public function MenuScreen() 
		{
			
		}
		
	}

}