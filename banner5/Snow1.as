
package {
	import flash.display.MovieClip;
	import flash.events.Event;
	
	
	
	public class Snow1 extends MovieClip {
		private var speed:Number;
		
		public function Snow1 () {
			speed = Math.random() * 4;
			this.addEventListener(Event.ENTER_FRAME, onEnter);
		}
		
		public function onEnter (e:Event) :void {
			this.y += 2;
			
			if (this.y > 400)
				this.y = 0;
		}
    }
}