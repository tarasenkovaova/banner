(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,184);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66B3CC").s().p("AgoAqQgSgSAAgYQAAgXASgSQARgQAXAAQAYAAARAQQASASAAAXQAAAYgSASQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(0,1.9,0.332,0.332);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,3.9,3.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAeQgNgNAAgRQAAgQANgNQAMgMAQABQASgBALAMQANANAAAQQAAARgNANQgLAMgSgBQgQABgMgMg");
	this.shape.setTransform(0,2.3,0.561,0.561);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,0,4.7,4.7);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLCDQgfggAAgtQAAgrAfgfIAIgHIAAhaQAAgSAMgMQANgNASgBIAxAAQARABAOANQAMALAAATIAABaIAIAHQAfAfAAArQAAAsgfAhQgfAegtAAQgrAAgggegAAkgtIAAhIQgBgEgDgEQgDgCgEAAIgxAAQgEAAgDACQgDADAAAFIAABIQAQgHASAAQATAAARAHg");
	this.shape.setTransform(-0.2,-9.7,0.909,0.909);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC456A").s().p("AAAAvQgcAAgXAPIAAhhQAAgKAIgJQAIgHALgBIAxAAQALABAIAHQAIAJAAAKIAABhQgYgPgcAAg");
	this.shape_1.setTransform(-0.2,-17.2,0.909,0.909);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0187B").s().p("AhrBsQgtgtAAg/QAAgfAMgcQAMgaAVgWQAtgsA+AAQBAAAArAsQAVAWAMAaQAMAcAAAfQABA/guAtQgsAtg/AAQg9AAgugtg");
	this.shape_2.setTransform(-0.2,-4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB70A0").s().p("AhYDSQgpgRgfggQgggfgSgpQgRgrgBguQABgtARgrQASgpAgggQAfgfApgRQArgSAtAAQAvAAAqASQApARAgAfQAfAgASApQARAqABAuQgBAvgRAqQgSApgfAfQggAggpARQgqASgvAAQgtAAgrgSg");
	this.shape_3.setTransform(-0.2,-4.8,0.909,0.909);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F3F54").s().p("AhwEKQg0gWgngoQgpgogVgzQgXg2AAg7QAAg6AXg2QAVgzApgoQAngoA0gWQA3gXA5AAQA7AAA1AXQA0AWAoAoQApAnAVA0QAXA2AAA6QAAA7gXA2QgVA0gpAnQgoAog0AWQg1AXg7AAQg5AAg3gXg");
	this.shape_4.setTransform(-0.2,-4.8,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-31,52.5,52.6);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXA6QgEgHAAgKIAAgdIgIAAIgiAtQgEAFgDABQgEADgFAAQgHAAgFgFQgFgFAAgEQAAgIAGgHIAYgbQgdgGAAgeQAAgnA2AAIAkAAQANAAAFAGQADAEAAAPIAABRQAAAZgSAAQgKAAgFgIgAgQgaQgBAPAVAAIAPAAIAAgdIgPAAQgVAAABAOg");
	this.shape.setTransform(187.5,18.1,0.89,0.89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+BAIAAh+QAAgcATAAQAMAAAGAMQAMgNATAAQAaAAAQAVQAPATAAAbQAAAUgJAPQgLATgQAHQgLAGgLAAQgQAAgMgLIgCAAIAAAgQABAcgTAAQgTAAAAgcgAgRgxQgIAHAAAUQAAANAGAIQAIAJALAAQALAAAIgKQAFgJABgNQAAgMgHgJQgGgLgMAAQgKAAgHAHg");
	this.shape_1.setTransform(175.5,20.3,0.89,0.89);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBKQgPgTAAgeIAAgTQAAhHAjgKQAKgDAeAAQANAAACgCQACgCAAgCQAAgEAGgDQAEgBAEAAQANAAAAATQAAAIgIAGQgGAFgIABIglACQgNgBgGAKQgFAHAAALIABAAQAMgJARAAQAcgBAOATQANAPAAAcQAAAegQASQgQARgdAAQgdAAgQgTgAgSAGQgGAJAAAMQAAAhAYAAQAJAAAIgHQAGgHAAgTQAAgegXAAQgLAAgHAJg");
	this.shape_2.setTransform(162.8,15.8,0.89,0.89);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvAuQgPgUAAgaQAAgZAQgUQARgVAaAAQASAAALAOQAIgMAKAAQATAAAAAbIAABLQAAAcgTAAQgMAAgGgNQgMAOgSAAQgaAAgRgVgAgRgUQgFAJAAALQgBANAGAIQAHAKALAAQAMAAAGgKQAGgIAAgNQAAgLgGgJQgHgKgLAAQgKAAgIAKg");
	this.shape_3.setTransform(149.9,18,0.89,0.89);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA2IgfgrIgGAEIAAAXQAAAcgTAAQgTAAAAgcIAAhLQAAgcATAAQAPAAADAQQABAGAAAVIAfghQALgKAJAAQAGAAAFAEQAFAEAAAHQAAAKgKAIIgZAYIAjAoQAIAJAAAKQAAAGgGAEQgGAFgGAAQgLAAgJgMg");
	this.shape_4.setTransform(138.9,18.1,0.89,0.89);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrAwQgTgTAAgdQAAgaASgVQASgTAbAAQAPAAAKAFQAQAHALAPQAKAPAAARQAAAJgHAEQgGAFgJAAIhAAAQACALAHAGQAIAFALAAQAJAAAOgGQAOgGADAAQAPAAAAAPQAAAFgEAGQgIALgQAFQgOAEgPAAQgbAAgTgTgAgPgdQgGAFgCALIAxAAQgBgJgHgHQgIgHgJAAQgIAAgIAHg");
	this.shape_5.setTransform(126.7,18,0.89,0.89);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBEQgBgEAAgOIhVAAIgBATQgCALgKAAQgRAAAAgTIAAgYQAAgMAFgCIAKgCQAGgDAAgMIAAguQAAgWALgJQAKgIAWAAIAuAAQALAAAFAIQADAGAAAMIAABLQAQAAAAAQIAAAXQAAATgRAAQgKAAgCgMgAgQgoIAAAuQAAAHgEAJIAoAAIAAhHIgcAAQgIAAAAAJg");
	this.shape_6.setTransform(114,19.3,0.89,0.89);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBWQgSABAAgTQAAgSASAAIAVAAIAAhjIgSgBQgKgDAAgKQAAgGAGgFQAOgLAegBIAJABQAFABACAMIABB6IAUAAQARAAAAASQAAATgRgBg");
	this.shape_7.setTransform(94.2,16,0.89,0.89);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBOQgTgNAAgWQAAgHAFgGQAFgFAHAAQAHAAAGAHIALAPQAIAIAKAAQAIgBAGgGQAGgHAAgJQAAgKgIgFQgEgCgMgDQgQgCAAgOQAAgIAEgEQADgDAJgDQARgDAAgOQAAgOgNAAQgJgBgIAGIgKALQgGAFgFAAQgHAAgFgFQgEgEAAgIQAAgGAEgIQAHgMAPgHQAOgIAOABQAUgBAQANQAPAOAAAVQAAAVgTAOQAcANAAAdQAAAZgSAPQgSAPgYABQgWAAgSgNg");
	this.shape_8.setTransform(81.2,16.1,0.89,0.89);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAwQgRgTAAgdQAAgcASgTQASgUAbAAQAdAAASAUQARAUAAAbQAAAdgRATQgSAUgdAAQgbAAgTgUgAgSgVQgGAJAAAMQAAANAGAJQAGALAMAAQAMAAAIgLQAFgJAAgNQAAgLgGgKQgGgLgNAAQgLAAgHALg");
	this.shape_9.setTransform(61.5,18,0.89,0.89);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUAmIAAhGIgnAAIAABGQAAAcgUAAQgSAAAAgcIAAhNQAAgMADgGQAFgIAKAAIBOAAQALAAAFAIQADAGAAAMIAABNQAAAcgTAAQgSAAgBgcg");
	this.shape_10.setTransform(49,18.1,0.89,0.89);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBYQgXAAAAgSQAAgHAIgKIA2g+QAMgQAAgJQgBgHgEgFQgDgFgHAAQgGABgFAFIgHAOIgHANQgFAFgGAAQgJAAgGgGQgFgFAAgKQAAgGADgIQAGgTAPgKQAQgKARAAQAXAAAQAOQAPAOAAAXQAAAVgUAaQgMAQgZAZIAjAAQAbAAAAASQAAASgbAAg");
	this.shape_11.setTransform(29.1,15.9,0.89,0.89);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBWQgSABAAgTQAAgSASAAIAVAAIAAhjIgTgBQgJgDAAgKQAAgGAGgFQAOgLAegBIAJABQAGABABAMIAAB6IAVAAQARAAAAASQAAATgRgBg");
	this.shape_12.setTransform(16.4,16,0.89,0.89);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAwQgRgUAAgcQAAgcASgTQATgTAcAAQAPAAALAEQAQAHAAANQAAAHgFAFQgDAEgIAAQgEAAgHgDQgIgDgHAAQgMAAgHAKQgHAJAAANQAAANAHAJQAHAJANAAQAHAAAIgCQAHgDAEAAQAGAAAFAFQAEAFAAAGQAAALgQAJQgMAFgRAAQgbAAgSgTg");
	this.shape_13.setTransform(-2.4,18,0.89,0.89);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#62A4DA").s().p("AAXA6QgEgHAAgKIAAgdIgIAAIgiAtQgEAFgDABQgEADgFAAQgHAAgFgFQgFgFAAgEQAAgIAGgHIAYgbQgdgGAAgeQAAgnA2AAIAkAAQANAAAFAGQADAEAAAPIAABRQAAAZgSAAQgKAAgFgIgAgQgaQgBAPAVAAIAPAAIAAgdIgPAAQgVAAABAOg");
	this.shape_14.setTransform(188.3,18.1,0.89,0.89);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#62A4DA").s().p("Ag+BAIAAh+QAAgcATAAQAMAAAGAMQAMgNATAAQAaAAAQAVQAPATAAAbQAAAUgJAPQgLATgQAHQgLAGgLAAQgQAAgMgLIgCAAIAAAgQABAcgTAAQgTAAAAgcgAgRgxQgIAHAAAUQAAANAGAIQAIAJALAAQALAAAIgKQAFgJABgNQAAgMgHgJQgGgLgMAAQgKAAgHAHg");
	this.shape_15.setTransform(176.4,20.3,0.89,0.89);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#62A4DA").s().p("AgtBKQgPgTAAgeIAAgTQAAhHAjgKQAKgDAeAAQANAAACgCQACgCAAgCQAAgEAGgDQAEgBAEAAQANAAAAATQAAAIgIAGQgGAFgIABIglACQgNgBgGAKQgFAHAAALIABAAQAMgJARAAQAcgBAOATQANAPAAAcQAAAegQASQgQARgdAAQgdAAgQgTgAgSAGQgGAJAAAMQAAAhAYAAQAJAAAIgHQAGgHAAgTQAAgegXAAQgLAAgHAJg");
	this.shape_16.setTransform(163.6,15.8,0.89,0.89);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#62A4DA").s().p("AgvAuQgPgUAAgaQAAgZAQgUQARgVAaAAQASAAALAOQAIgMAKAAQATAAAAAbIAABLQAAAcgTAAQgMAAgGgNQgMAOgSAAQgaAAgRgVgAgRgUQgFAJAAALQgBANAGAIQAHAKALAAQAMAAAGgKQAGgIAAgNQAAgLgGgJQgHgKgLAAQgKAAgIAKg");
	this.shape_17.setTransform(150.7,18,0.89,0.89);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#62A4DA").s().p("AATA2IgfgrIgGAEIAAAXQAAAcgTAAQgTAAAAgcIAAhLQAAgcATAAQAPAAADAQQABAGAAAVIAfghQALgKAJAAQAGAAAFAEQAFAEAAAHQAAAKgKAIIgZAYIAjAoQAIAJAAAKQAAAGgGAEQgGAFgGAAQgLAAgJgMg");
	this.shape_18.setTransform(139.7,18.1,0.89,0.89);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#62A4DA").s().p("AgrAwQgTgTAAgdQAAgaASgVQASgTAbAAQAPAAAKAFQAQAHALAPQAKAPAAARQAAAJgHAEQgGAFgJAAIhAAAQACALAHAGQAIAFALAAQAJAAAOgGQAOgGADAAQAPAAAAAPQAAAFgEAGQgIALgQAFQgOAEgPAAQgbAAgTgTgAgPgdQgGAFgCALIAxAAQgBgJgHgHQgIgHgJAAQgIAAgIAHg");
	this.shape_19.setTransform(127.6,18,0.89,0.89);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#62A4DA").s().p("AAsBEQgBgEAAgOIhVAAIgBATQgCALgKAAQgRAAAAgTIAAgYQAAgMAFgCIAKgCQAGgDAAgMIAAguQAAgWALgJQAKgIAWAAIAuAAQALAAAFAIQADAGAAAMIAABLQAQAAAAAQIAAAXQAAATgRAAQgKAAgCgMgAgQgoIAAAuQAAAHgEAJIAoAAIAAhHIgcAAQgIAAAAAJg");
	this.shape_20.setTransform(114.8,19.3,0.89,0.89);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#62A4DA").s().p("AgnBWQgSABAAgTQAAgSASAAIAVAAIAAhjIgSgBQgKgDAAgKQAAgGAGgFQAOgLAegBIAJABQAFABACAMIABB6IAUAAQARAAAAASQAAATgRgBg");
	this.shape_21.setTransform(95,16,0.89,0.89);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#62A4DA").s().p("AgoBOQgTgNAAgWQAAgHAFgGQAFgFAHAAQAHAAAGAHIALAPQAIAIAKAAQAIgBAGgGQAGgHAAgJQAAgKgIgFQgEgCgMgDQgQgCAAgOQAAgIAEgEQADgDAJgDQARgDAAgOQAAgOgNAAQgJgBgIAGIgKALQgGAFgFAAQgHAAgFgFQgEgEAAgIQAAgGAEgIQAHgMAPgHQAOgIAOABQAUgBAQANQAPAOAAAVQAAAVgTAOQAcANAAAdQAAAZgSAPQgSAPgYABQgWAAgSgNg");
	this.shape_22.setTransform(82.1,16.1,0.89,0.89);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#62A4DA").s().p("AguAwQgRgTAAgdQAAgcASgTQASgUAbAAQAdAAASAUQARAUAAAbQAAAdgRATQgSAUgdAAQgbAAgTgUgAgSgVQgGAJAAAMQAAANAGAJQAGALAMAAQAMAAAIgLQAFgJAAgNQAAgLgGgKQgGgLgNAAQgLAAgHALg");
	this.shape_23.setTransform(62.4,18,0.89,0.89);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#62A4DA").s().p("AAUAmIAAhGIgnAAIAABGQAAAcgUAAQgSAAAAgcIAAhNQAAgMADgGQAFgIAKAAIBOAAQALAAAFAIQADAGAAAMIAABNQAAAcgTAAQgSAAgBgcg");
	this.shape_24.setTransform(49.8,18.1,0.89,0.89);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#62A4DA").s().p("AgkBYQgXAAAAgSQAAgHAIgKIA2g+QAMgQAAgJQgBgHgEgFQgDgFgHAAQgGABgFAFIgHAOIgHANQgFAFgGAAQgJAAgGgGQgFgFAAgKQAAgGADgIQAGgTAPgKQAQgKARAAQAXAAAQAOQAPAOAAAXQAAAVgUAaQgMAQgZAZIAjAAQAbAAAAASQAAASgbAAg");
	this.shape_25.setTransform(30,15.9,0.89,0.89);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#62A4DA").s().p("AgnBWQgSABAAgTQAAgSASAAIAVAAIAAhjIgTgBQgJgDAAgKQAAgGAGgFQAOgLAegBIAJABQAGABABAMIAAB6IAVAAQARAAAAASQAAATgRgBg");
	this.shape_26.setTransform(17.3,16,0.89,0.89);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#62A4DA").s().p("AgkAwQgRgUAAgcQAAgcASgTQATgTAcAAQAPAAALAEQAQAHAAANQAAAHgFAFQgDAEgIAAQgEAAgHgDQgIgDgHAAQgMAAgHAKQgHAJAAANQAAANAHAJQAHAJANAAQAHAAAIgCQAHgDAEAAQAGAAAFAFQAEAFAAAGQAAALgQAJQgMAFgRAAQgbAAgSgTg");
	this.shape_27.setTransform(-1.6,18,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,7.5,200.6,21);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBRQgDgGAAgNIAAgnIgtA3QgKAMgIAAQgTAAAAgcIAAhLQAAgNADgGQAEgJAMAAQAMAAADAJQADAGAAANIAAApIAtg5QAJgMAJAAQAMAAAEAJQADAGAAANIAABLQAAANgDAGQgDAJgMAAQgMAAgEgJgAgZg8QgKgHAAgKQAAgMALAAQAGAAAGAHQAEAHAIAAQAKAAAEgHQAEgHAGAAQAMAAAAAMQAAAMgNAHQgKAGgNAAQgOAAgLgIg");
	this.shape.setTransform(141.3,14.1,0.97,0.969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAwQgSgTAAgdQAAgbARgUQASgTAbAAQAOAAALAFQAQAHAKAPQAKAOAAASQABAJgHAEQgGAFgKAAIg/AAQABALAJAGQAGAFALAAQALAAANgGQANgGADAAQAQAAgBAPQAAAGgDAFQgJALgQAFQgNAEgPAAQgbAAgTgTgAgOgdQgHAGgCAKIAwAAQAAgJgHgHQgIgHgJAAQgIAAgHAHg");
	this.shape_1.setTransform(127.7,16.4,0.97,0.969);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfA5QgDgGAAgNIAAhGIgcAAQgIAAAAAIIAAA7QAAAPgIAIQgIAIgOAAQgMAAgGgCQgIgDAAgKQAAgKAGgDQAEgDALAAIAAg7QAAgXALgJQAJgJAXAAIAuAAQAMAAAEAIQADAGAAAMIAABNQAAAcgTAAQgLAAgEgJg");
	this.shape_2.setTransform(113.5,16.4,0.97,0.969);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBKQgPgSAAgfIAAgTQAAhHAigKQALgDAdAAQANAAADgCQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEAFgDIAJgBQAMAAAAATQAAAIgHAGQgHAFgHABIglACQgNgBgGAKQgFAHAAALIABAAQAMgJARAAQAbgBAPATQANAQAAAbQAAAdgQATQgQARgdAAQgdAAgQgTgAgSAGQgGAIAAANQAAAhAYAAQAJAAAHgHQAHgHAAgTQAAgegXAAQgMAAgGAJg");
	this.shape_3.setTransform(100.8,13.9,0.97,0.969);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBXQgFgFAAgIQAAgGADgHIAQgiIgnhYQgCgGAAgFQAAgIAGgFQAFgGAHAAQAJAAAFAGQABACAFAKIAVA6IAWg9QAHgPAKAAQATAAAAASQAAAGgDAIIg5CHQgHAPgJABQgJgBgFgEg");
	this.shape_4.setTransform(88.5,18.9,0.97,0.969);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BAIAAh+QAAgcATAAQALAAAHAMQAMgNATAAQAZAAARAVQAPATAAAbQAAAUgJAPQgKASgRAIQgLAGgLAAQgPAAgOgLIgBAAIAAAgQAAAcgSAAQgTAAAAgcgAgRgxQgIAHAAAUQAAANAGAIQAHAJAMAAQAMAAAGgKQAGgJABgNQgBgMgGgJQgGgLgMAAQgKAAgHAHg");
	this.shape_5.setTransform(76.1,18.9,0.97,0.969);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#62A4DA").s().p("AAaBRQgDgGAAgNIAAgnIgtA3QgKAMgIAAQgTAAAAgcIAAhLQAAgNADgGQAEgJAMAAQAMAAADAJQADAGAAANIAAApIAtg5QAJgMAJAAQAMAAAEAJQADAGAAANIAABLQAAANgDAGQgDAJgMAAQgMAAgEgJgAgZg8QgKgHAAgKQAAgMALAAQAGAAAGAHQAEAHAIAAQAKAAAEgHQAEgHAGAAQAMAAAAAMQAAAMgNAHQgKAGgNAAQgOAAgLgIg");
	this.shape_6.setTransform(143.2,14.3,0.97,0.969);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#62A4DA").s().p("AgrAwQgSgTAAgdQAAgbARgUQASgTAbAAQAOAAALAFQAQAHAKAPQAKAOAAASQABAJgHAEQgGAFgKAAIg/AAQABALAJAGQAGAFALAAQALAAANgGQANgGADAAQAQAAgBAPQAAAGgDAFQgJALgQAFQgNAEgPAAQgbAAgTgTgAgOgdQgHAGgCAKIAwAAQAAgJgHgHQgIgHgJAAQgIAAgHAHg");
	this.shape_7.setTransform(129.6,16.5,0.97,0.969);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#62A4DA").s().p("AAfA5QgDgGAAgNIAAhGIgcAAQgIAAAAAIIAAA7QAAAPgIAIQgIAIgOAAQgMAAgGgCQgIgDAAgKQAAgKAGgDQAEgDALAAIAAg7QAAgXALgJQAJgJAXAAIAuAAQAMAAAEAIQADAGAAAMIAABNQAAAcgTAAQgLAAgEgJg");
	this.shape_8.setTransform(115.3,16.6,0.97,0.969);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#62A4DA").s().p("AgtBKQgPgSAAgfIAAgTQAAhHAigKQALgDAdAAQANAAADgCQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEAFgDIAJgBQAMAAAAATQAAAIgHAGQgHAFgHABIglACQgNgBgGAKQgFAHAAALIABAAQAMgJARAAQAbgBAPATQANAQAAAbQAAAdgQATQgQARgdAAQgdAAgQgTgAgSAGQgGAIAAANQAAAhAYAAQAJAAAHgHQAHgHAAgTQAAgegXAAQgMAAgGAJg");
	this.shape_9.setTransform(102.6,14.1,0.97,0.969);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#62A4DA").s().p("AgfBXQgFgFAAgIQAAgGADgHIAQgiIgnhYQgCgGAAgFQAAgIAGgFQAFgGAHAAQAJAAAFAGQABACAFAKIAVA6IAWg9QAHgPAKAAQATAAAAASQAAAGgDAIIg5CHQgHAPgJABQgJgBgFgEg");
	this.shape_10.setTransform(90.4,19.1,0.97,0.969);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#62A4DA").s().p("Ag+BAIAAh+QAAgcATAAQALAAAHAMQAMgNATAAQAZAAARAVQAPATAAAbQAAAUgJAPQgKASgRAIQgLAGgLAAQgPAAgOgLIgBAAIAAAgQAAAcgSAAQgTAAAAgcgAgRgxQgIAHAAAUQAAANAGAIQAHAJAMAAQAMAAAGgKQAGgJABgNQgBgMgGgJQgGgLgMAAQgKAAgHAHg");
	this.shape_11.setTransform(78,19,0.97,0.969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,5,79,23);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA7QgGgFgFgIQgKgQAAgZIAAgFQgBgaALgTQAOgWAZAAQAaAAAOAWQAKARAAAcIAAAFQAAAZgKAQQgFAIgGAFQgMAJgRAAQgQAAgMgJgAgRgZQgDAKgBAPIAAAFQABANADAIQAFAPAMAAQANAAAFgPQADgJABgMIAAgFQAAgogWAAQgMAAgFAPg");
	this.shape.setTransform(131.7,15.6,1.265,1.257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAuQgLgRABgdQAAgbAKgSQAOgWAZAAQAbAAANAWQALASgBAbQABAdgLARQgNAWgbAAQgaAAgNgWgAgRgZQgDAKgBAPQABAQADAKQAFAPAMAAQANAAAFgPQADgKABgQQAAgogWAAQgMAAgFAPg");
	this.shape_1.setTransform(118,15.6,1.265,1.257);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0A+QgOgYAAgmQAAglAOgXQASgdAiAAQAkAAARAdQAOAWAAAmQAAAmgOAYQgRAdgkAAQgjAAgRgdgAgXgiQgFAQAAASQAAASAFARQAIATAPABQAQgBAIgTQAFgRAAgSQAAg2gdABQgPgBgIAUg");
	this.shape_2.setTransform(104.3,15.1,0.947,0.943);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA5QgPgVAAgkQAAgjAOgWIADgFQARgXAdAAQAeAAARAXIADAFQANAWAAAjQAAAkgNAVQgQAcgiAAQghAAgPgcgAgVggQgEAOgBASQABAUAEANQAGATAPAAQARAAAGgTQAEgNAAgUQAAgygbgBQgPAAgGATg");
	this.shape_3.setTransform(85.2,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBVQgOgEgIgHQgMgJAAgLQAAgHAFgGQAEgEAIAAQAFgBAMAIQAMAHAIAAQAKAAAHgIQAHgHAAgLQAAgKgGgHQgFgHgKAAQgFAAgJADQgJADgGAAQgPAAAAgPIAHg7QACgMAGgEQAFgEANAAIAuAAQAZAAAAASQAAASgYAAIgnAAIgCAUQAHgBAIAAQAYgBAOASQAOAPAAAXQAAAcgTASQgRATgcAAQgLAAgKgDg");
	this.shape_4.setTransform(72.1,15.3,0.947,0.943);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkQgNgOAAgWQAAgVANgOQAOgPAUAAQAWAAANAPQANAOAAAVQAAAVgNAPQgOAPgVAAQgUAAgOgPgAgOgQQgEAIAAAIQAAAJAEAHQAGAJAIAAQAJAAAFgJQAFgHAAgJQAAgIgFgIQgFgHgJgBQgIABgGAHg");
	this.shape_5.setTransform(48.4,17.5,1.265,1.257);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhAzIAAgOIhAAAIgBAPQgBAIgIAAQgNAAAAgOIAAgSQAAgJAEgCIAIgBQAEgCAAgJIAAgjQAAgQAJgHQAHgGARAAIAiAAQAIAAADAGQADAEAAAJIAAA4QAMAAAAAMIAAASQAAAOgNAAQgIAAgBgJgAgMgdIAAAiQAAAFgDAGIAeAAIAAg0IgUAAQgHAAAAAHg");
	this.shape_6.setTransform(34.8,19,1.265,1.257);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#62A4DA").s().p("AgcA7QgGgFgFgIQgKgQAAgZIAAgFQgBgaALgTQAOgWAZAAQAaAAAOAWQAKARAAAcIAAAFQAAAZgKAQQgFAIgGAFQgMAJgRAAQgQAAgMgJgAgRgZQgDAKgBAPIAAAFQABANADAIQAFAPAMAAQANAAAFgPQADgJABgMIAAgFQAAgogWAAQgMAAgFAPg");
	this.shape_7.setTransform(133.6,15.6,1.265,1.257);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#62A4DA").s().p("AgnAuQgLgRABgdQAAgbAKgSQAOgWAZAAQAbAAANAWQALASgBAbQABAdgLARQgNAWgbAAQgaAAgNgWgAgRgZQgDAKgBAPQABAQADAKQAFAPAMAAQANAAAFgPQADgKABgQQAAgogWAAQgMAAgFAPg");
	this.shape_8.setTransform(119.9,15.6,1.265,1.257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#62A4DA").s().p("AgyA6QgMgWAAgkQAAgjAMgWQARgbAhAAQAiAAAQAbQAOAWAAAjQAAAkgOAWQgQAbgiAAQghAAgRgbgAgWgfQgFAPABAQQgBASAFAPQAHASAPAAQAQAAAGgSQAGgPAAgSQgBgygbAAQgPAAgHATg");
	this.shape_9.setTransform(105.9,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#62A4DA").s().p("AgxA5QgOgVAAgkQAAgjAOgWIADgFQARgXAdAAQAeAAARAXIADAFQAOAWAAAjQAAAkgOAVQgQAcgiAAQggAAgRgcgAgWggQgDAOAAASQAAAUADANQAHATAPAAQARAAAFgTQAFgNABgUQAAgygcgBQgPAAgHATg");
	this.shape_10.setTransform(86.9,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#62A4DA").s().p("AgZBVQgOgEgIgHQgMgJAAgLQAAgHAFgGQAEgEAIAAQAFgBAMAIQAMAHAIAAQAKAAAHgIQAHgHAAgLQAAgKgGgHQgFgHgKAAQgFAAgJADQgJADgGAAQgPAAAAgPIAHg7QACgMAGgEQAFgEANAAIAuAAQAZAAAAASQAAASgYAAIgnAAIgCAUQAHgBAIAAQAYgBAOASQAOAPAAAXQAAAcgTASQgRATgcAAQgLAAgKgDg");
	this.shape_11.setTransform(74.2,15.3,0.947,0.943);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#62A4DA").s().p("AgiAkQgNgOAAgWQAAgUANgPQAOgPAUAAQAWAAANAPQANAPAAAUQAAAVgNAPQgOAPgVAAQgUAAgOgPgAgOgPQgEAHAAAIQAAAJAEAIQAGAIAIAAQAJAAAFgIQAFgIAAgJQAAgIgFgHQgFgJgJAAQgIAAgGAJg");
	this.shape_12.setTransform(50.4,17.6,1.265,1.257);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#62A4DA").s().p("AAhAzIAAgOIhAAAIgBAPQgBAIgIAAQgNAAAAgOIAAgSQAAgJAEgCIAIgBQAEgCAAgJIAAgjQAAgQAJgHQAHgGARAAIAiAAQAIAAADAGQADAEAAAJIAAA4QAMAAAAAMIAAASQAAAOgNAAQgIAAgBgJgAgMgdIAAAiQAAAFgDAGIAeAAIAAg0IgUAAQgHAAAAAHg");
	this.shape_13.setTransform(36.7,19,1.265,1.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.9,6.6,112.2,20);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFCtQgNgUABgfIAAhWIgaAAIhlCGQgLAPgJAFQgKAHgTAAQgWAAgOgPQgNgOAAgMQAAgYARgVIBIhSQhYgRABhbQAAh0ChAAIBuAAQAmgBAPASQALAQAAAnIAAD2QAABJg4ABQgeAAgOgYgAgzhPQAAAsA/AAIAtAAIAAhYIgtAAQg/AAAAAsg");
	this.shape.setTransform(105.6,17.4,0.575,0.574);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiUEfQhIgzgBhOQAAgZATgWQATgVAZAAQAcAAAXAcIAoA1QAdAcAmAAQAfAAAXgYQAUgYAAghQABgmgdgRQgRgKgtgJQg7gKAAg0QAAgeAPgOQANgMAfgHQBBgPAAgyQAAg2gyAAQglAAgbAVIglAmQgTAUgVAAQgZABgSgTQgRgQAAgaQABgZAQgcQAaguA2gZQA0gaA1AAQBNAAA4AvQA3AxABBMQgBBMhHA0QBpA1AABrQAABahFA7QhBA3haAAQhQgBhCgtg");
	this.shape_1.setTransform(78.9,10.3,0.575,0.574);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiTE+QhAAAAAhCQAAhCBAAAIBPAAIAAlwQg2AAgOgFQgigJAAgoQAAgVATgQQAzgsBzAAQAYAAAHADQAXAGAEAoQACALAAAyIAAGJIBKAAQBAAAAABCQAABChAAAg");
	this.shape_2.setTransform(48.7,10.1,0.575,0.574);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0177B").s().p("ABFCuQgMgVAAgeIAAhXIgZAAIhmCGQgNAQgHAEQgLAGgSAAQgWAAgOgOQgNgOAAgMQAAgZARgTIBHhSQhWgTAAhaQAAh1ChABIBuAAQAmAAAPARQAMAQgBAoIAAD1QAABJg4AAQgdAAgPgWgAgzhPQAAArA/AAIAtAAIAAhWIgtAAQg/AAAAArg");
	this.shape_3.setTransform(108.1,20.2,0.575,0.574);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0177B").s().p("AiSEcQhIgzAAhNQAAgYATgWQASgVAZAAQAbAAAXAcIAoA0QAcAcAlAAQAgAAAWgYQAVgWgBgiQAAgmgcgSQgRgKgsgHQg6gLAAgzQAAgcAPgQQANgLAegHQBBgQAAgwQAAg1gygBQgkAAgbAVQgDABghAlQgUAUgVAAQgYAAgRgRQgRgRAAgaQAAgaAQgbQAZgsA3gaQAzgZA0AAQBMAAA4AvQA3AwAABLQAABLhIA0QBoA0AABpQAABZhEA6Qg/A3haAAQhQAAhAgtg");
	this.shape_4.setTransform(81.6,13.4,0.575,0.574);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0177B").s().p("AiSE6Qg/AAAAhBQAAhBA/AAIBOAAIAAlsQg0gBgOgEQgigKAAgmQAAgUATgRQAygrByAAQAXAAAIACQAVAHAFAnQACALAAAxIAAGFIBJAAQA/AAAABBQAABBg/AAg");
	this.shape_5.setTransform(51.8,13.2,0.575,0.574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.5,-8.7,81.4,41);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOCJQgtg6gBhOQABhPAvg6QAzhABOAAQA2AAAkApQATgkAjABQA4gBAABSIAADjQAABUg4AAQglAAgRgpQgkArg7ABQhMAAgyhAgAg0g+QgTAaAAAkQAAAkASAbQAVAdAiAAQAjAAAUgdQAQgbAAgkQAAglgQgZQgUgcgjAAQgiAAgUAcg");
	this.shape.setTransform(202.9,10.6,0.564,0.564);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3ByIAAjUIgwAAQhIAAABgxQgBgwBIAAIDPAAQBIAAAAAwQgBAxhHAAIgxAAIAADUQAABTg3AAQg4AAABhTg");
	this.shape_1.setTransform(181.7,10.6,0.564,0.564);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOCJQgtg6gBhOQAAhPAxg6QAxhABPAAQA2AAAkApQATgkAiABQA4gBAABSIAADjQAABUg4AAQglAAgQgpQgkArg7ABQhLAAgzhAgAg1g+QgSAaAAAkQAAAkASAbQAUAdAjAAQAkAAATgdQAQgbAAgkQAAglgQgZQgTgcgkAAQgiAAgVAcg");
	this.shape_2.setTransform(159.4,10.6,0.564,0.564);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABdCrQgJgTAAgmIAAjUIhUAAQgaAAAAAaIAACyQAAArgYAYQgXAYgrAAQgmgBgOgFQgagJAAgeQAAgeATgJQAOgHAfAAIAAiyQABhGAfgbQAcgaBGAAICLAAQAigBANAZQAJAQAAAlIAADnQAABUg4AAQghAAgNgag");
	this.shape_3.setTransform(134.6,10.6,0.564,0.564);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+ByIAAjUIh6AAIAADUQAABTg4AAQg5AAAAhUIAAjnQAAgmAKgQQANgYAiABIDqAAQAigBAMAZQAKAPAAAmIAADnQAABUg4AAQg4AAAAhTg");
	this.shape_4.setTransform(111.7,10.6,0.564,0.564);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai8C/IAAl8QABhSA5ABQAigBAUAkQAigmA6AAQBPAAAwA+QAtA6AABPQAAA8gbAwQgcA0gzAaQggAQgjAAQgzAAglghIgDAAIAABiQAABRg2AAQg5AAgBhTgAg2iTQgWAVAAA7QAAAmARAZQAVAbAmAAQAkAAAUgeQARgcAAgmQABglgTgbQgUgfgjAAQgfAAgXAVg");
	this.shape_5.setTransform(88.1,14.9,0.564,0.564);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiOCJQgtg5AAhPQAAhPAvg6QAyhABOAAQA4AAAiApQAUgkAiABQA4gBAABSIAADjQAABUg4AAQgkAAgSgpQgiArg8ABQhMAAgyhAgAg0g+QgSAaAAAkQAAAkARAbQAUAdAjAAQAjAAAUgdQARgcAAgjQAAgkgRgaQgUgcgjAAQgiAAgUAcg");
	this.shape_6.setTransform(62.5,10.6,0.564,0.564);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AijCRQAAgkAoAAQAMAAAfALQAfAKAlAAQA7AAAAgyQAAgYgLgJQgLgKgggBQgpgBgKgCQgYgHAAgaQAAgkA2AAQAkAAAMgEQAWgHgBgfQABgfgTgLQgMgIggAAQgZAAgYAJQgbAKgPAAQgpAAAAgnQAAg2CNAAQBNAAAnAXQAyAcABBJQgBAxguAZQA4AdAAA3QAAB7iwAAQiWAAgBg6g");
	this.shape_7.setTransform(40.4,10.6,0.564,0.564);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0177B").s().p("AiOCKQgtg7AAhPQgBhNAwg7QAzhABNABQA4AAAjApQATgkAjAAQA4AAAABSIAADjQAABSg4AAQgmABgQgoQgkArg7AAQhMgBgyg+gAg0g+QgSAbAAAjQAAAkARAaQAUAeAiAAQAkAAAUgeQAQgaABgkQgBglgQgZQgUgcgkgBQghABgUAcg");
	this.shape_8.setTransform(205.3,13.4,0.564,0.564);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0177B").s().p("Ag3ByIAAjUIgxAAQhGAAAAgxQAAgxBGABIDQAAQBHgBABAxQAAAxhIAAIgxAAIAADUQAABTg3gBQg4ABABhTg");
	this.shape_9.setTransform(184.2,13.5,0.564,0.564);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0177B").s().p("AiOCKQgug7AAhPQAAhNAwg7QAzhABOABQA2AAAkApQATgkAjAAQA3AAAABSIAADjQAABSg3AAQgmABgQgoQgkArg7AAQhNgBgxg+gAg1g+QgRAbgBAjQAAAkASAaQAVAeAhAAQAkAAATgeQASgagBgkQABglgSgZQgTgcgkgBQghABgVAcg");
	this.shape_10.setTransform(161.8,13.4,0.564,0.564);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0177B").s().p("ABcCqQgJgSAAgmIAAjUIhTAAQgaAAAAAaIAACyQAAArgYAYQgXAXgrAAQgnAAgNgEQgagKAAgfQAAgdATgJQANgHAgAAIAAiyQAAhFAfgbQAdgbBGAAICLAAQAigBANAYQAJARAAAlIAADoQAABSg4AAQghAAgOgag");
	this.shape_11.setTransform(137,13.5,0.564,0.564);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0177B").s().p("AA+ByIAAjUIh6AAIAADUQAABTg4gBQg4AAgBhSIAAjoQAAglAKgRQANgXAiAAIDpAAQAjgBANAYQAIARABAlIAADoQAABSg4AAQg4ABAAhTg");
	this.shape_12.setTransform(114.2,13.5,0.564,0.564);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0177B").s().p("Ai8C/IAAl7QABhSA5AAQAiAAAUAkQAhgnA7AAQBPAAAxA9QAsA6ABBPQgBA8gbAxQgcA0gzAZQggARgjAAQgyAAgmghIgDAAIAABiQAABRg2AAQg5AAgBhTgAg2iUQgWAVAAA7QAAAoARAYQAVAbAlAAQAkAAAVgeQARgcAAgmQAAgmgSgbQgUgegkAAQgeAAgXAUg");
	this.shape_13.setTransform(90.6,17.7,0.564,0.564);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0177B").s().p("AiOCKQgtg8AAhOQgBhOAxg6QAyhABNABQA4AAAiApQAUgkAiAAQA4AAAABSIAADjQAABSg4AAQglABgRgoQgjArg6AAQhMgBgzg+gAg0g+QgSAaAAAkQAAAkARAaQAUAeAjAAQAkAAATgeQARgaAAgkQAAglgRgZQgTgcgkgBQgiABgUAcg");
	this.shape_14.setTransform(65,13.4,0.564,0.564);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0177B").s().p("AijCRQAAgkAoAAQAMAAAfALQAgAKAkAAQA7AAAAgyQAAgYgLgJQgLgKgggBQgpAAgJgDQgZgHAAgaQAAgkA2AAQAkAAAMgEQAWgHAAgfQAAgfgTgLQgMgIgfAAQgZAAgZAJQgbAKgOAAQgqAAAAgnQAAg2CNAAQBOAAAmAXQAyAcAABJQAAAxguAZQA4AdAAA3QAAB7iwAAQiXAAAAg6g");
	this.shape_15.setTransform(42.9,13.4,0.564,0.564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.2,-0.8,184.8,34);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBRQgDgFAAgOIAAgnIgsA3QgKAMgJAAQgTAAAAgcIAAhLQAAgNADgGQAEgJAMAAQAMAAAEAJQACAGAAANIAAApIAtg5QAJgMAKAAQALAAAEAJQADAGAAANIAABLQAAANgDAGQgDAJgMAAQgMAAgEgJgAgZg8QgKgHAAgKQAAgMAMAAQAFAAAGAHQAEAHAIAAQAKAAAEgHQAEgHAGAAQAMAAAAAMQAAANgNAGQgKAGgNAAQgOAAgLgIg");
	this.shape.setTransform(180.6,-11.3,2.05,2.051);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvAuQgPgUAAgaQAAgaAQgTQARgVAaAAQASAAALAOQAHgMALAAQATAAAAAbIAABLQAAAcgTAAQgMAAgGgNQgMAOgTAAQgZAAgRgVgAgRgUQgGAJAAALQAAAMAGAJQAHAKALAAQALAAAHgKQAGgJAAgMQAAgLgGgJQgHgKgLAAQgLAAgHAKg");
	this.shape_1.setTransform(150.1,-6.5,2.05,2.051);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BAIAAh+QAAgcATAAQAMAAAGAMQAMgNATAAQAaAAAQAVQAPATAAAbQAAAUgJAPQgKATgRAHQgKAGgMAAQgQAAgMgLIgCAAIAAAgQABAcgTAAQgTAAAAgcgAgRgxQgIAHAAAUQABANAFAIQAIAJALAAQAMAAAHgKQAFgJABgNQAAgMgHgJQgGgLgMAAQgKAAgHAHg");
	this.shape_2.setTransform(121.9,-1.3,2.05,2.051);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAmIAAhLQAAgcATAAIAmAAQAYAAAAAQQAAARgYAAIgTAAIAABGQAAAcgTAAQgTAAAAgcg");
	this.shape_3.setTransform(98.6,-6.4,2.05,2.051);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaA5QgDgGAAgNIAAglIgtAlQAAAMgCAHQgFAJgLAAQgTAAAAgcIAAhLQAAgNADgGQAEgJAMAAQAMAAADAJQADAGAAANIAAApIAtgpQAAgNACgGQAFgJALAAQAMAAAEAJQADAGAAANIAABLQAAANgDAGQgDAJgNAAQgLAAgEgJg");
	this.shape_4.setTransform(73.5,-6.4,2.05,2.051);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxA6QgDgGAAgMIAAhMQAAgcATAAQASAAAAAcIAABMQAAAMgDAGQgEAHgLAAQgLAAgFgHgAg9BBQgVAAAAgZIAAhPQAAgZATAAQASAAAAAZIAAAbQAhAAAIABQAYAEAGAQQADAIAAAJQAAAXgRAJQgMAHgZAAgAgtAoIAQAAQAVAAAAgOQAAgJgHgEQgEgCgKAAIgQAAg");
	this.shape_5.setTransform(38.8,-6.6,2.05,2.051);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBBQgVABAAgaIAAhQQAAgZAVAAIAiAAQAZAAAMAHQAQAJAAAYQAAAQgQAIQAUAJgBATQAAAXgRAIQgMAIgbgBgAgSAoIAQAAQAUABAAgOQAAgKgHgDQgEgCgJAAIgQAAgAgSgMIAQAAQAIAAAEgCQAFgDABgIQgBgPgTAAIgOAAg");
	this.shape_6.setTransform(5.9,-6.4,2.05,2.051);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0177B").s().p("AAaBRQgDgFAAgOIAAgnIgsA3QgKAMgJAAQgTAAAAgcIAAhLQAAgNADgGQAEgJAMAAQAMAAAEAJQACAGAAANIAAApIAtg5QAJgMAKAAQALAAAEAJQADAGAAANIAABLQAAANgDAGQgDAJgMAAQgMAAgEgJgAgZg8QgKgHAAgKQAAgMAMAAQAFAAAGAHQAEAHAIAAQAKAAAEgHQAEgHAGAAQAMAAAAAMQAAANgNAGQgKAGgNAAQgOAAgLgIg");
	this.shape_7.setTransform(184.6,-9.4,2.05,2.051);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0177B").s().p("AgvAuQgPgUAAgaQAAgaAQgTQARgVAaAAQASAAALAOQAHgMALAAQATAAAAAbIAABLQAAAcgTAAQgMAAgGgNQgMAOgTAAQgZAAgRgVgAgRgUQgGAJAAALQAAAMAGAJQAHAKALAAQALAAAHgKQAGgJAAgMQAAgLgGgJQgHgKgLAAQgLAAgHAKg");
	this.shape_8.setTransform(154.1,-4.5,2.05,2.051);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0177B").s().p("Ag+BAIAAh+QAAgcATAAQAMAAAGAMQAMgNATAAQAaAAAQAVQAPATAAAbQAAAUgJAPQgKATgRAHQgKAGgMAAQgQAAgMgLIgCAAIAAAgQABAcgTAAQgTAAAAgcgAgRgxQgIAHAAAUQABANAFAIQAIAJALAAQAMAAAHgKQAFgJABgNQAAgMgHgJQgGgLgMAAQgKAAgHAHg");
	this.shape_9.setTransform(125.9,0.7,2.05,2.051);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0177B").s().p("AgoAmIAAhLQAAgcATAAIAmAAQAYAAAAAQQAAARgYAAIgTAAIAABGQAAAcgTAAQgTAAAAgcg");
	this.shape_10.setTransform(102.6,-4.4,2.05,2.051);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0177B").s().p("AAaA5QgDgGAAgNIAAglIgtAlQAAAMgCAHQgFAJgLAAQgTAAAAgcIAAhLQAAgNADgGQAEgJAMAAQAMAAADAJQADAGAAANIAAApIAtgpQAAgNACgGQAFgJALAAQAMAAAEAJQADAGAAANIAABLQAAANgDAGQgDAJgNAAQgLAAgEgJg");
	this.shape_11.setTransform(77.5,-4.4,2.05,2.051);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0177B").s().p("AAxA6QgDgGAAgMIAAhMQAAgcATAAQASAAAAAcIAABMQAAAMgDAGQgEAHgLAAQgLAAgFgHgAg9BBQgVAAAAgZIAAhPQAAgZATAAQASAAAAAZIAAAbQAhAAAIABQAYAEAGAQQADAIAAAJQAAAXgRAJQgMAHgZAAgAgtAoIAQAAQAVAAAAgOQAAgJgHgEQgEgCgKAAIgQAAg");
	this.shape_12.setTransform(42.8,-4.6,2.05,2.051);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0177B").s().p("AgiBBQgVABAAgaIAAhQQAAgZAVAAIAiAAQAZAAAMAHQAQAJAAAYQAAAQgQAIQAUAJgBATQAAAXgRAIQgMAIgbgBgAgSAoIAQAAQAUABAAgOQAAgKgHgDQgEgCgJAAIgQAAgAgSgMIAQAAQAIAAAEgCQAFgDABgIQgBgPgTAAIgOAAg");
	this.shape_13.setTransform(9.9,-4.5,2.05,2.051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-29.7,202.7,49.2);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAnQgCgDgBgFQABgFACgDQAEgCADAAQAFAAACACQADADAAAFQAAAFgDADQgDACgEAAQgDAAgEgCgAgCANIgHgtQAAgJAJAAQAJABAAAIIgGAtg");
	this.shape.setTransform(186.2,30.6,2.169,2.169);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558EC8").s().p("AgHAnQgDgDAAgFQAAgFADgDQAEgCADAAQAFAAADACQACADAAAFQAAAFgCADQgDACgFAAQgDAAgEgCgAgCANIgHgtQAAgJAJAAQAJABAAAIIgFAtg");
	this.shape_1.setTransform(187.2,30.6,2.169,2.169);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACACTQgHgKgDgWIgbirIgBAAIgpCeQgGAYgJAMQgMAPgWAAQgVAAgMgPQgIgLgHgZIgpieIAAAAIgbCrQgDAVgHALQgJAOgTAAQggAAAAgiIAljuQAEgWAPgOQAPgNAWAAQAUAAANALQAOALAEAUIAqCwIABAAIAqiwQAEgTAOgMQANgLAUAAQAWAAAPANQAQAOADAWIAjDWIACAYQAAAiggAAQgTAAgIgOg");
	this.shape_2.setTransform(169.9,32.5,0.565,0.565);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaBtIAAjZQAAgbALgMQALgMAcAAIBQAAQAzAAAAAjQAAAggzABIg6AAIAAA4IAyAAQAzAAAAAhQAAAggzAAIgyAAIAABPQAAAzgkAAQgkAAAAgzg");
	this.shape_3.setTransform(153.4,32.6,0.565,0.565);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuBzQgogsAAhHQAAhGAogsQApguBFAAQBGAAApAuQAoAsAABGQAABHgoAsQgqAuhFAAQhFAAgpgugAg5hAQgRAaAAAnQAAAmASAaQAUAeAkAAQAkAAAVgdQASgaAAgnQAAgmgRgbQgUgegmAAQgmAAgTAeg");
	this.shape_4.setTransform(129.2,32.5,0.565,0.565);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhyBtIAAjZQAAgbALgMQALgMAcAAIBAAAQA0ABAeAbQAhAcAAA0QAAAzgeAbQgdAcgzAAIgvAAIAAA2QAAAzgkAAQgkAAAAgzgAgqgJIAfAAQAwAAAAgqQAAgqgwAAIgfAAg");
	this.shape_5.setTransform(112.8,32.6,0.565,0.565);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBtIAAjIQgogBgIgCQgdgFgBgZQAAgjAzAAIB8AAQA0AAAAAjQAAAZgeAFQgIACgoABIAADIQAAAzgkAAQgjAAAAgzg");
	this.shape_6.setTransform(98.6,32.6,0.565,0.565);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqCeQgcAAgKgKQgLgJAAgbIAAjaQAAgcALgLQALgMAcAAIBQAAQAzAAAAAiQAAAhgzAAIg6AAIAAA5IAyAAQAzAAAAAhQAAAggzAAIgyAAIAAA8IA8AAQAzAAAAAhQAAAhgzAAg");
	this.shape_7.setTransform(86.6,32.5,0.565,0.565);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhyBtIAAjZQAAgbALgMQALgMAcAAIBAAAQA0ABAfAbQAgAdAAAzQAAAzgdAbQgfAcgyAAIgvAAIAAA2QAAAzgkAAQgkAAAAgzgAgqgJIAfAAQAwAAAAgqQAAgqgwAAIgfAAg");
	this.shape_8.setTransform(72.8,32.6,0.565,0.565);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCCAIgMglIhvAAIgMAnQgLAggYAAQgPAAgKgKQgJgKAAgOQAAgMADgJIBSjdQASguAkAAQAnAAAOAoIBQDiQAFAPAAAIQAAAOgKAKQgLAIgOABQgcgBgKghgAgkAbIBHAAIgjhuIAAAAg");
	this.shape_9.setTransform(48.6,32.5,0.565,0.565);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABCBuIAAhQIiDAAIAABQQAAAzgkAAQgkAAAAgzIAAjcQAAgyAkAAQAkAAAAAyIAABLICDAAIAAhLQAAgyAkAAQAkAAAAAyIAADcQAAAzgkAAQgkAAAAgzg");
	this.shape_10.setTransform(31.4,32.5,0.565,0.565);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVB2QgpgtAAhJQAAhFAqgvQAsgxBEAAQAbAAAVAHQAcAIAMARQAHAJAAAJQAAANgJAKQgJAJgNAAQgMAAgQgGQgQgHgTAAQgmAAgVAfQgSAbAAAoQAAAoAUAaQAVAcAmAAQARAAAWgHQAUgIAIAAQAMAAAJAKQAIAJAAAMQAAALgHAJQgZAihDAAQhGAAgrgwg");
	this.shape_11.setTransform(200.2,2.6,0.565,0.565);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABCCAIgMglIhvAAIgMAnQgLAggYAAQgPAAgKgKQgJgJAAgPQAAgMADgJIBSjdQASguAkAAQAngBAOApIBQDiQAFAPAAAHQAAAPgKAKQgLAIgOABQgcgBgKghgAgkAbIBGAAIgihuIAAAAg");
	this.shape_12.setTransform(184.8,2.5,0.565,0.565);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCCeQgcAAgKgKQgLgJAAgbIAAjaQAAgcALgLQAKgMAdAAIA6AAQArAAAdASQAkAVAAAoQABAzgmATIAAABQAcAIAMAQQAMARAAAdQAAAwghAZQgeAWgxAAgAgrBgIAkAAQAWAAALgGQAOgJAAgUQAAgZgNgIQgLgGgYAAIgjAAgAgrghIAfAAQAUAAAJgGQAMgGAAgUQAAgegpAAIgfAAg");
	this.shape_13.setTransform(169.7,2.6,0.565,0.565);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjBsIAAjHQgoAAgJgDQgcgFAAgZQAAgjAzAAIB7AAQAzAAAAAjQAAAZgcAFQgJADgoAAIAADHQAAA0gkAAQgjAAAAg0g");
	this.shape_14.setTransform(147.1,2.7,0.565,0.565);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqDPQgcAAgKgJQgLgJAAgbIAAjbQAAgcALgLQALgLAcAAIBQAAQAzAAAAAiQAAAhgzAAIg6AAIAAA3IAyAAQAzAAAAAhQAAAigzAAIgyAAIAAA7IA8AAQAzAAAAAhQAAAhgzAAgAAHiRQgHgLAAgOQAAgPAHgLQAJgKAPAAQAfAAAAAkQAAAjgfAAQgPAAgJgKgAhMiqQAAgkAfAAQAfAAAAAkQAAAjgfAAQgfAAAAgjg");
	this.shape_15.setTransform(135.1,-0.2,0.565,0.565);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABlCzQgJgJAAgOIAAgcIi3AAIAAAcQABAOgJAJQgKAJgOAAQgPAAgIgJQgJgJAAgOIAAg6QAAgeAcAAQAJAAAFgOQAEgNAAghIAAhzQAAgkAVgWQAVgWAkAAIBtAAQAXAAAKAPQAHAMAAAYIAADMQAmAAAAAeIAAA6QAAAgghAAQgOAAgIgJgAgthqIAAByQAAAfgKAdIBlAAIAAi/IhLAAQgQAAAAARg");
	this.shape_16.setTransform(119.2,4.3,0.565,0.565);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACECJIhdhwIgGAEIAABRQAAAzghAAQggAAAAgzIAAhRIgHgFIhdBxQgVAYgRAAQgNAAgKgKQgLgKAAgNQAAgOATgVIBehuIhZhYQgKgMAAgKQAAgNALgKQAKgKAOAAQAPAAAZAZIBTBVIAAg8QAAgyAgAAQAUAAAIAQQAFAMAAAWIAAA8IBThVQAZgZAPAAQAOAAAKAJQALALAAANQAAAKgKAMIhZBYIBeBuQATAUAAAPQAAANgLAKQgKAKgNAAQgSAAgVgYg");
	this.shape_17.setTransform(98.6,2.6,0.565,0.565);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABCCAIgMglIhvAAIgMAnQgKAggZAAQgPAAgKgKQgJgJAAgPQAAgMAEgJIBSjdQARguAlAAQAmgBAPApIBPDiQAFAOAAAIQAAAPgKAKQgKAIgPABQgbgBgLghgAgjAbIBFAAIgihuIAAAAg");
	this.shape_18.setTransform(70.9,2.5,0.565,0.565);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhCCeQgcAAgKgKQgLgJAAgbIAAjaQAAgcALgLQAKgMAcAAIA7AAQAqAAAeASQAkAVAAAoQAAAzglATIAAABQAcAIAMAQQAMARAAAdQAAAwghAZQgfAWgxAAgAgrBgIAkAAQAWAAALgGQAOgJAAgUQAAgZgOgIQgJgGgZAAIgjAAgAgrghIAfAAQAUAAAJgGQAMgHAAgTQAAgegpAAIgfAAg");
	this.shape_19.setTransform(55.8,2.6,0.565,0.565);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhuBzQgogsAAhHQAAhFAogtQApguBFAAQBGAAApAuQAoAsAABGQAABHgoAsQgqAuhFAAQhFAAgpgugAg5hAQgRAZAAAoQAAAnASAZQATAeAlAAQAkAAAWgdQARgaAAgnQAAgogRgZQgUgegmAAQgmAAgTAeg");
	this.shape_20.setTransform(38.4,2.6,0.565,0.565);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABCBuIAAhQIiDAAIAABQQAAAzgkAAQgkAAAAgzIAAjcQAAgyAkAAQAkAAAAAyIAABLICDAAIAAhLQAAgyAkAAQAkAAAAAyIAADcQAAAzgkAAQgkAAAAgzg");
	this.shape_21.setTransform(19.8,2.6,0.565,0.565);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhVB2QgpgtAAhJQAAhFAqgvQArgxBFAAQAbAAAVAHQAbAIANARQAHAJAAAJQAAANgJAKQgJAJgNAAQgMAAgQgGQgQgHgUAAQglAAgVAfQgSAbAAAoQAAAoAUAaQAUAcAnAAQARAAAWgHQAUgIAIAAQALAAAJAKQAJAKAAALQAAAKgHAKQgZAihEAAQhGAAgqgwg");
	this.shape_22.setTransform(2.8,2.6,0.565,0.565);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#64A5D7").s().p("AB/CTQgGgJgDgWIgbisIgBAAIgpCfQgGAYgJALQgMAPgWAAQgVAAgMgPQgIgLgHgYIgpifIAAAAIgbCsQgDAVgHAKQgJAOgTAAQggAAAAgiIAljuQAEgWAPgNQAPgOAWAAQATAAAOALQAOAMAEATIAqCwIABAAIAqiwQAEgSAOgMQAOgMATAAQAWAAAPAOQAPANAEAWIAjDWIACAYQAAAiggAAQgTAAgJgOg");
	this.shape_23.setTransform(171.5,32.5,0.565,0.565);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#64A5D7").s().p("AhaBtIAAjZQAAgbALgMQALgLAcAAIBQAAQAzAAAAAhQAAAigzAAIg6AAIAAA4IAyAAQAzAAAAAhQAAAggzAAIgyAAIAABPQAAAygkAAQgkAAAAgyg");
	this.shape_24.setTransform(155,32.7,0.565,0.565);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#64A5D7").s().p("AhvBzQgngsAAhGQAAhGAngtQAqguBFAAQBGAAApAuQAoAtAABGQAABGgoAtQgpAthGAAQhGAAgpgugAg6hAQgQAbAAAmQAAAoARAZQAVAdAkAAQAlAAAUgdQARgZAAgoQAAgmgQgbQgVgeglAAQglAAgVAeg");
	this.shape_25.setTransform(130.8,32.5,0.565,0.565);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#64A5D7").s().p("AhyBtIAAjZQAAgbALgMQAKgLAdAAIBAAAQA0AAAfAbQAgAcAAA0QAAAzgeAbQgcAcg0AAIgvAAIAAA2QAAAygkAAQgkAAAAgygAgqgJIAfAAQAwAAABgqQgBgpgwAAIgfAAg");
	this.shape_26.setTransform(114.4,32.7,0.565,0.565);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#64A5D7").s().p("AgjBtIAAjIQgmAAgLgDQgdgGAAgZQAAghA0AAIB8AAQAyAAAAAhQAAAZgdAGQgLADglAAIAADIQAAAygkAAQgjAAAAgyg");
	this.shape_27.setTransform(100.2,32.7,0.565,0.565);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#64A5D7").s().p("AgqCeQgbAAgLgKQgLgJAAgbIAAjaQAAgdALgLQALgLAcAAIBQAAQAzAAAAAiQAAAhgzAAIg6AAIAAA4IAyAAQAzAAAAAhQAAAggzAAIgyAAIAAA8IA8AAQAzAAAAAhQAAAigzAAg");
	this.shape_28.setTransform(88.2,32.6,0.565,0.565);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#64A5D7").s().p("AhyBtIAAjZQAAgcALgLQALgLAcAAIBAAAQA0AAAfAbQAgAcAAA0QAAAzgdAbQgeAcgzAAIgvAAIAAA2QAAAygkAAQgkAAAAgygAgqgJIAfAAQAwAAAAgqQAAgpgwAAIgfAAg");
	this.shape_29.setTransform(74.4,32.7,0.565,0.565);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#64A5D7").s().p("ABCCAIgMglIhvAAIgNAnQgJAfgZABQgPgBgKgIQgJgJAAgQQAAgMADgIIBSjeQASguAkAAQAnAAAOApIBQDiQAFAPAAAHQAAAPgKAJQgLAIgOABQgcAAgKgigAgkAcIBGAAIgihuIAAAAg");
	this.shape_30.setTransform(50.2,32.5,0.565,0.565);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#64A5D7").s().p("ABCBvIAAhRIiDAAIAABRQAAAygkAAQgkAAAAgyIAAjcQAAgzAkAAQAkAAAAAzIAABKICDAAIAAhKQAAgzAkAAQAkAAAAAzIAADcQAAAygkAAQgkAAAAgyg");
	this.shape_31.setTransform(33,32.5,0.565,0.565);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#64A5D7").s().p("AhVB2QgpgtAAhIQAAhFAqgwQAsgxBEAAQAYAAAYAHQAdAJALAQQAHAKAAAJQAAAMgJAKQgJAKgNAAQgKAAgSgHQgQgGgTAAQgmAAgVAfQgSAbAAAoQAAAoAUAZQAVAdAmAAQASAAAUgIQAWgIAHAAQAMAAAJAKQAIAJAAANQAAAKgHAKQgYAhhEAAQhGAAgrgwg");
	this.shape_32.setTransform(201.8,2.6,0.565,0.565);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#64A5D7").s().p("ABCCAIgMglIhvAAIgNAnQgJAggZAAQgPgBgKgIQgJgKAAgPQAAgMADgIIBSjeQASgvAkABQAnAAAOApIBQDiQAFAPAAAHQAAAOgKAKQgLAIgOABQgcgBgKghgAgkAcIBGAAIgihuIAAAAg");
	this.shape_33.setTransform(186.4,2.6,0.565,0.565);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#64A5D7").s().p("AhCCeQgbAAgLgKQgLgJAAgbIAAjaQAAgdALgLQALgLAcAAIA7AAQApAAAeASQAlAVAAAoQgBAzgkASIAAACQAbAHAMARQAMARAAAcQAAAxghAYQgeAXgxAAgAgrBgIAkAAQAWAAALgGQAPgJAAgVQAAgYgPgJQgKgGgZAAIgiAAgAgrgiIAfAAQAVAAAHgFQANgGAAgUQAAgegpAAIgfAAg");
	this.shape_34.setTransform(171.3,2.6,0.565,0.565);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#64A5D7").s().p("AgjBtIAAjIQglAAgLgDQgdgGAAgZQgBghAzAAIB8AAQA0AAAAAhQAAAZgdAGQgMADglAAIAADIQAAAygkAAQgjAAAAgyg");
	this.shape_35.setTransform(148.7,2.7,0.565,0.565);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#64A5D7").s().p("AgqCeQgbAAgLgKQgLgJAAgbIAAjaQAAgdALgLQALgLAcAAIBQAAQAzAAAAAiQAAAhgzAAIg6AAIAAA4IAyAAQAzAAAAAhQAAAggzAAIgyAAIAAA8IA8AAQAzAAAAAhQAAAigzAAg");
	this.shape_36.setTransform(136.7,2.6,0.565,0.565);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#64A5D7").s().p("ABkCzQgIgIgBgPIAAgcIi1AAIAAAcQgBAOgIAJQgJAJgPAAQgOAAgJgJQgIgJAAgOIAAg6QAAgfAbAAQAJAAAEgNQAFgNAAghIAAhzQAAgkAUgWQAVgWAlAAIBuAAQAXAAAIAPQAIAMAAAYIAADLQAmAAgBAfIAAA6QAAAggfAAQgPAAgJgJgAgthqIAAByQAAAggJAbIBkAAIAAi+IhLAAQgQAAAAARg");
	this.shape_37.setTransform(120.8,4.3,0.565,0.565);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#64A5D7").s().p("ACECJIhdhwIgGAFIAABRQAAAyghAAQghAAAAgyIAAhSIgGgEIhdBwQgVAYgRAAQgOAAgJgKQgLgJAAgOQAAgOATgVIBehtIhZhYQgKgNAAgKQAAgNALgKQALgKANAAQAOAAAaAZIBSBVIAAg7QAAgzAhAAQAUAAAIAQQAFAMAAAXIAAA7IBThVQAZgZAPAAQANAAALAKQALAJAAAOQAAAKgKANIhZBYIBeBtQATAWAAANQAAAOgLAJQgJAKgOAAQgSAAgVgYg");
	this.shape_38.setTransform(100.2,2.6,0.565,0.565);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#64A5D7").s().p("ABCCAIgMglIhuAAIgOAnQgJAggZAAQgOgBgKgIQgKgKAAgPQAAgMADgIIBSjeQASgvAkABQAmAAAPApIBQDiQAFAOAAAIQAAAOgKAKQgLAIgOABQgcgBgKghgAgkAcIBGAAIgihuIAAAAg");
	this.shape_39.setTransform(72.6,2.6,0.565,0.565);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#64A5D7").s().p("AhCCeQgbAAgLgKQgLgJAAgbIAAjaQAAgdALgLQALgLAbAAIA8AAQApAAAeASQAlAWAAAnQAAAzgmASIAAACQAcAHAMARQAMARAAAcQAAAxghAYQgeAXgxAAgAgrBgIAkAAQAWAAAKgGQAPgIABgWQgBgYgOgJQgLgGgYAAIgiAAgAgrgiIAfAAQAVAAAHgFQANgGAAgUQAAgegpAAIgfAAg");
	this.shape_40.setTransform(57.4,2.6,0.565,0.565);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#64A5D7").s().p("AhuBzQgogsAAhGQAAhFAoguQApguBFAAQBGAAAqAuQAnAsAABHQAABHgnAsQgqAthGAAQhGAAgogugAg5hAQgRAaAAAnQAAAnASAaQAUAdAkAAQAkAAAWgdQARgaAAgnQAAgngRgaQgUgegmAAQglAAgUAeg");
	this.shape_41.setTransform(40,2.6,0.565,0.565);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#64A5D7").s().p("ABCBvIAAhRIiDAAIAABRQAAAygkAAQgkAAAAgyIAAjcQAAgzAkAAQAkAAAAAzIAABKICDAAIAAhKQAAgzAkAAQAkAAAAAzIAADcQAAAygkAAQgkAAAAgyg");
	this.shape_42.setTransform(21.4,2.6,0.565,0.565);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#64A5D7").s().p("AhVB2QgpgsAAhJQAAhFAqgwQAsgxBFAAQAYAAAXAHQAdAKALAPQAHAKAAAJQAAAMgJAKQgJAKgNAAQgKAAgSgHQgQgGgTAAQgnAAgUAfQgSAbAAAoQAAAoATAZQAWAdAmAAQASAAAUgIQAVgIAIAAQALAAAKAKQAIAKAAAMQAAAKgHAKQgYAhhEAAQhHAAgqgwg");
	this.shape_43.setTransform(4.4,2.6,0.565,0.565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-11.9,213.4,53.6);


(lib.Snow11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0187B").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWABQgVgBgQgPg");
	this.shape.setTransform(-1.7,-3.5,0.38,0.38,0,0,0,-4.6,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4.1,4.1);


(lib.Snow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AAaAAQAAALgIAHQgHAIgLAAQgJAAgIgIQgIgHAAgLQAAgJAIgIQAIgHAJAAQALAAAHAHQAIAIAAAJg");
	this.shape.setTransform(0,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#528CCA").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKABQAKgBAIAIQAHAHABAKQgBAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_1.setTransform(0,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-1,7.1,7.1);


(lib.Snow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AATAAQAAAIgGAFQgFAHgIAAQgHAAgGgHQgFgFAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAHg");
	this.shape.setTransform(28.1,-114.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#528CCA").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAIgFAFQgGAGgIABQgHgBgGgGg");
	this.shape_1.setTransform(28.1,-114.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AAaAAQAAALgIAHQgHAIgLAAQgJAAgIgIQgIgHAAgLQAAgJAIgIQAIgHAJAAQALAAAHAHQAIAIAAAJg");
	this.shape_2.setTransform(-0.4,-103.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#528CCA").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKABQAKgBAIAIQAHAHABAKQgBAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_3.setTransform(-0.4,-103.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AAXAAQAAAKgHAGQgHAHgJAAQgJAAgHgHQgGgGAAgKQAAgJAGgHQAHgGAJAAQAJAAAHAGQAHAHAAAJg");
	this.shape_4.setTransform(-5.8,-113.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_5.setTransform(-5.8,-113.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AASAAQAAAIgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHg");
	this.shape_6.setTransform(-194.8,-110.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgGAGgGQAFgGAHABQAIgBAFAGQAGAGAAAGQAAAHgGAGQgFAFgIABQgHgBgFgFg");
	this.shape_7.setTransform(-194.8,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AAWAAQAAAJgHAHQgGAGgJAAQgIAAgHgGQgGgHAAgJQAAgIAGgGQAHgHAIAAQAJAAAGAHQAHAGAAAIg");
	this.shape_8.setTransform(6.2,-19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0177B").s().p("AgPAPQgGgGAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_9.setTransform(6.2,-19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AASAAQAAAIgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHg");
	this.shape_10.setTransform(-199.8,-13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0177B").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_11.setTransform(-199.8,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Слой 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66B3CC").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_12.setTransform(0,0,0.402,0.402);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snow1, new cjs.Rectangle(-202.6,-117.7,233.6,120.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EC8").s().p("AhtBvQguguAAhBQAAhAAugtQAtguBAAAQBBAAAtAuQAuAtAABAQAABBguAuQgtAthBAAQhAAAgtgtg");
	this.shape.setTransform(15.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,31.3,31.3), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79A3D4").s().p("Ah+EtQg7gZgtgtQgtgtgZg6Qgag+AAhCQAAhBAag9QAZg7AtgtQAtguA7gYQA9gaBBAAQBCAAA9AaQA7AZAtAtQAtAtAZA7QAaA9AABBQAABCgaA+QgZA6gtAtQgtAtg7AZQg8AahDAAQhBAAg9gag");
	this.shape.setTransform(32.7,32.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,65.4,65.4), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,10,1,1,0,0,0,0,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:1,y:11.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:2,y:13.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:3.1,y:15.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:4.2,y:16.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:5.2,y:18.5},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:6.3,y:20.2},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:7.3,y:21.8},0).wait(1).to({x:8.4,y:23.4},0).wait(1).to({x:9.4,y:25},0).wait(1).to({x:10.3,y:26.6},0).wait(1).to({x:11.2,y:28.3},0).wait(1).to({x:12,y:29.9},0).wait(1).to({x:12.7,y:31.7},0).wait(1).to({x:13.4,y:33.4},0).wait(1).to({x:13.9,y:35.2},0).wait(1).to({x:14.5,y:37},0).wait(1).to({x:14.9,y:38.8},0).wait(1).to({x:15.4,y:40.6},0).wait(1).to({x:15.7,y:42.5},0).wait(1).to({x:16,y:44.3},0).wait(1).to({x:16.3,y:46.2},0).wait(1).to({x:16.5,y:48},0).wait(1).to({x:16.6,y:49.9},0).wait(1).to({x:16.8,y:51.8},0).wait(1).to({y:53.6},0).wait(1).to({x:16.9,y:55.5},0).wait(1).to({y:57.4},0).wait(1).to({y:59.2},0).wait(1).to({x:16.8,y:61.1},0).wait(1).to({x:16.7,y:63},0).wait(1).to({x:16.6,y:64.8},0).wait(1).to({x:16.5,y:66.7},0).wait(1).to({x:16.3,y:68.6},0).wait(1).to({x:16.1,y:70.4},0).wait(1).to({x:15.9,y:72.3},0).wait(1).to({x:15.6,y:74.1},0).wait(1).to({x:15.3,y:76},0).wait(1).to({x:15,y:77.8},0).wait(1).to({x:14.7,y:79.7},0).wait(1).to({x:14.4,y:81.5},0).wait(1).to({x:14,y:83.4},0).wait(1).to({x:13.7,y:85.2},0).wait(1).to({x:13.3,y:87},0).wait(1).to({x:12.9,y:88.9},0).wait(1).to({x:12.4,y:90.7},0).wait(1).to({x:12,y:92.5},0).wait(1).to({x:11.5,y:94.3},0).wait(1).to({x:11.1,y:96.1},0).wait(1).to({x:10.6,y:97.9},0).wait(1).to({x:10.1,y:99.7},0).wait(1).to({x:9.6,y:101.5},0).wait(1).to({x:9.1,y:103.3},0).wait(1).to({x:8.6,y:105.2},0).wait(1).to({x:8.1,y:107},0).wait(1).to({x:7.6,y:108.8},0).wait(1).to({x:7.2,y:110.6},0).wait(1).to({x:6.8,y:112.4},0).wait(1).to({x:6.3,y:114.2},0).wait(1).to({x:5.9,y:116.1},0).wait(1).to({x:5.5,y:117.9},0).wait(1).to({x:5.1,y:119.7},0).wait(1).to({x:4.7,y:121.5},0).wait(1).to({x:4.3,y:123.4},0).wait(1).to({x:4,y:125.2},0).wait(1).to({x:3.6,y:127},0).wait(1).to({x:3.3,y:128.9},0).wait(1).to({x:2.9,y:130.7},0).wait(1).to({x:2.6,y:132.6},0).wait(1).to({x:2.3,y:134.4},0).wait(1).to({x:2,y:136.3},0).wait(1).to({x:1.7,y:138.1},0).wait(1).to({x:1.5,y:140},0).wait(1).to({x:1.2,y:141.8},0).wait(1).to({x:1,y:143.7},0).wait(1).to({x:0.7,y:145.5},0).wait(1).to({x:0.5,y:147.4},0).wait(1).to({x:0.3,y:149.3},0).wait(1).to({x:0.1,y:151.1},0).wait(1).to({x:0,y:153},0).wait(1).to({x:-0.1,y:154.8},0).wait(1).to({x:-0.3,y:156.7},0).wait(1).to({x:-0.4,y:158.6},0).wait(1).to({x:-0.5,y:160.4},0).wait(1).to({x:-0.6,y:162.3},0).wait(1).to({x:-0.7,y:164.2},0).wait(1).to({x:-0.8,y:166},0).wait(1).to({y:167.9},0).wait(1).to({x:-0.9,y:169.8},0).wait(1).to({y:171.7},0).wait(1).to({y:173.5},0).wait(1).to({x:-0.8,y:175.4},0).wait(1).to({y:177.3},0).wait(1).to({y:179.1},0).wait(1).to({x:-0.7,y:181},0).wait(1).to({x:-0.6,y:182.9},0).wait(1).to({x:-0.5,y:184.7},0).wait(1).to({x:-0.3,y:186.6},0).wait(1).to({x:-0.2,y:188.5},0).wait(1).to({x:0,y:190.3},0).wait(1).to({x:0.1,y:192.2},0).wait(1).to({x:0.4,y:194.1},0).wait(1).to({x:0.6,y:195.9},0).wait(1).to({x:0.9,y:197.8},0).wait(1).to({x:1.1,y:199.6},0).wait(1).to({x:1.5,y:201.5},0).wait(1).to({x:1.8,y:203.3},0).wait(1).to({x:2.1,y:205.1},0).wait(1).to({x:2.5,y:207},0).wait(1).to({x:2.9,y:208.8},0).wait(1).to({x:3.4,y:210.6},0).wait(1).to({x:3.8,y:212.4},0).wait(1).to({x:4.3,y:214.2},0).wait(1).to({x:4.8,y:216},0).wait(1).to({x:5.4,y:217.8},0).wait(1).to({x:6,y:219.6},0).wait(1).to({x:6.6,y:221.4},0).wait(1).to({x:7.2,y:223.1},0).wait(1).to({x:7.9,y:224.9},0).wait(1).to({x:8.5,y:226.6},0).wait(1).to({x:9.3,y:228.4},0).wait(1).to({x:10,y:230.1},0).wait(1).to({x:10.8,y:231.8},0).wait(1).to({x:11.5,y:233.5},0).wait(1).to({x:12.1,y:235.3},0).wait(1).to({x:12.7,y:237.1},0).wait(1).to({x:13.2,y:238.9},0).wait(1).to({x:13.7,y:240.7},0).wait(1).to({x:14.1,y:242.5},0).wait(1).to({x:14.6,y:244.3},0).wait(1).to({x:14.9,y:246.1},0).wait(1).to({x:15.3,y:248},0).wait(1).to({x:15.6,y:249.8},0).wait(1).to({x:15.9,y:251.7},0).wait(1).to({x:16.2,y:253.5},0).wait(1).to({x:16.4,y:255.4},0).wait(1).to({x:16.6,y:257.2},0).wait(1).to({x:16.8,y:259.1},0).wait(1).to({x:17,y:261},0).wait(1).to({x:17.2,y:262.8},0).wait(1).to({x:17.3,y:264.7},0).wait(1).to({x:17.4,y:266.6},0).wait(1).to({x:17.5,y:268.4},0).wait(1).to({x:17.6,y:270.3},0).wait(1).to({x:17.7,y:272.2},0).wait(1).to({x:17.8,y:274},0).wait(1).to({y:275.9},0).wait(1).to({y:277.8},0).wait(1).to({y:279.6},0).wait(1).to({x:17.9,y:281.5},0).wait(1).to({x:17.8,y:283.4},0).wait(1).to({y:285.3},0).wait(1).to({y:287.1},0).wait(1).to({y:289},0).wait(1).to({x:17.7,y:290.9},0).wait(1).to({y:292.7},0).wait(1).to({x:17.6,y:294.6},0).wait(1).to({x:17.5,y:296.5},0).wait(1).to({x:17.4,y:298.3},0).wait(1).to({x:17.3,y:300.2},0).wait(1).to({x:17.2,y:302.1},0).wait(1).to({x:17.1,y:304},0).wait(1).to({x:17,y:305.8},0).wait(1).to({x:16.9,y:307.7},0).wait(1).to({x:16.8,y:309.6},0).wait(1).to({x:16.6,y:311.4},0).wait(1).to({x:16.5,y:313.3},0).wait(1).to({x:16.3,y:315.2},0).wait(1).to({x:16.2,y:317},0).wait(1).to({x:16,y:318.9},0).wait(1).to({x:15.8,y:320.7},0).wait(1).to({x:15.6,y:322.6},0).wait(1).to({x:15.4,y:324.5},0).wait(1).to({x:15.3,y:326.3},0).wait(1).to({x:15.1,y:328.2},0).wait(1).to({x:14.9,y:330.1},0).wait(1).to({x:14.6,y:331.9},0).wait(1).to({x:14.4,y:333.8},0).wait(1).to({x:14.2,y:335.6},0).wait(1).to({x:14,y:337.5},0).wait(1).to({x:13.8,y:339.3},0).wait(1).to({x:13.5,y:341.2},0).wait(1).to({x:13.3,y:343.1},0).wait(1).to({x:13,y:344.9},0).wait(1).to({x:12.8,y:346.8},0).wait(1).to({x:12.5,y:348.6},0).wait(1).to({x:12.3,y:350.5},0).wait(1).to({x:12,y:352.3},0).wait(1).to({x:11.8,y:354.2},0).wait(1).to({x:11.5,y:356},0).wait(1).to({x:11.2,y:357.9},0).wait(1).to({x:10.9,y:359.7},0).wait(1).to({x:10.7,y:361.6},0).wait(1).to({x:10.4,y:363.4},0).wait(1).to({x:10.1,y:365.3},0).wait(1).to({x:9.8,y:367.1},0).wait(1).to({x:9.5,y:369},0).wait(1).to({x:9.2,y:370.8},0).wait(1).to({x:8.9,y:372.7},0).wait(1).to({x:8.6,y:374.5},0).wait(1).to({x:8.4,y:376.4},0).wait(1).to({x:8.1,y:378.2},0).wait(1).to({x:7.8,y:380.1},0).wait(1).to({x:7.5,y:381.9},0).wait(1).to({x:7.2,y:383.8},0).wait(1).to({x:6.9,y:385.6},0).wait(1).to({x:6.6,y:387.5},0).wait(1).to({x:6.4,y:389.3},0).wait(1).to({x:6.1,y:391.2},0).wait(1).to({x:5.8,y:393},0).wait(1).to({x:5.6,y:394.9},0).wait(1).to({x:5.3,y:396.7},0).wait(1).to({x:5.1,y:398.6},0).wait(1).to({x:4.9,y:400.4},0).wait(1).to({x:4.7,y:402.3},0).wait(1).to({x:4.5,y:404.2},0).wait(1).to({x:4.3,y:406},0).wait(1).to({x:4.1,y:407.9},0).wait(1).to({x:3.9,y:409.8},0).wait(1).to({x:3.8,y:411.6},0).wait(1).to({x:3.7,y:413.5},0).wait(1).to({x:3.6,y:415.4},0).wait(1).to({x:3.5,y:417.2},0).wait(1).to({x:3.4,y:419.1},0).wait(1).to({y:421},0).wait(1).to({x:3.5,y:422.8},0).wait(1).to({y:424.7},0).wait(1).to({x:3.7,y:426.6},0).wait(1).to({x:3.8,y:428.4},0).wait(1).to({x:4.1,y:430.3},0).wait(1).to({x:4.4,y:432.1},0).wait(1).to({x:4.8,y:434},0).wait(1).to({x:5.4,y:435.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,8.1,3.9,3.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-47.8,16.6,1.086,1.086,0,0,0,-0.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:2.3,x:-46.5,y:18.5},0).wait(1).to({x:-45.3,y:20.7},0).wait(1).to({x:-44.4,y:23},0).wait(1).to({x:-43.5,y:25.4},0).wait(1).to({x:-42.8,y:27.8},0).wait(1).to({x:-42.2,y:30.2},0).wait(1).to({x:-41.7,y:32.6},0).wait(1).to({x:-41.3,y:35.1},0).wait(1).to({x:-41.1,y:37.6},0).wait(1).to({x:-40.9,y:40},0).wait(1).to({y:42.5},0).wait(1).to({x:-41,y:45},0).wait(1).to({x:-41.1,y:47.5},0).wait(1).to({x:-41.4,y:50},0).wait(1).to({x:-41.7,y:52.5},0).wait(1).to({x:-42.2,y:54.9},0).wait(1).to({x:-42.7,y:57.4},0).wait(1).to({x:-43.3,y:59.8},0).wait(1).to({x:-43.9,y:62.2},0).wait(1).to({x:-44.4,y:64.6},0).wait(1).to({x:-45,y:67.1},0).wait(1).to({x:-45.6,y:69.5},0).wait(1).to({x:-46.1,y:71.9},0).wait(1).to({x:-46.6,y:74.4},0).wait(1).to({x:-47.1,y:76.8},0).wait(1).to({x:-47.5,y:79.3},0).wait(1).to({x:-47.9,y:81.7},0).wait(1).to({x:-48.2,y:84.2},0).wait(1).to({x:-48.5,y:86.7},0).wait(1).to({x:-48.8,y:89.1},0).wait(1).to({x:-49,y:91.6},0).wait(1).to({x:-49.1,y:94.1},0).wait(1).to({x:-49.2,y:96.6},0).wait(1).to({x:-49.3,y:99.1},0).wait(1).to({y:101.6},0).wait(1).to({x:-49.2,y:104.1},0).wait(1).to({x:-49.1,y:106.5},0).wait(1).to({x:-49,y:109},0).wait(1).to({x:-48.8,y:111.5},0).wait(1).to({x:-48.6,y:114},0).wait(1).to({x:-48.3,y:116.5},0).wait(1).to({x:-48,y:118.9},0).wait(1).to({x:-47.7,y:121.4},0).wait(1).to({x:-47.3,y:123.9},0).wait(1).to({x:-46.9,y:126.3},0).wait(1).to({x:-46.4,y:128.8},0).wait(1).to({x:-46,y:131.2},0).wait(1).to({x:-45.4,y:133.6},0).wait(1).to({x:-44.9,y:136.1},0).wait(1).to({x:-44.3,y:138.5},0).wait(1).to({x:-43.7,y:140.9},0).wait(1).to({x:-43.1,y:143.3},0).wait(1).to({x:-42.5,y:145.7},0).wait(1).to({x:-41.8,y:148.1},0).wait(1).to({x:-41.1,y:150.5},0).wait(1).to({x:-40.4,y:152.9},0).wait(1).to({x:-39.6,y:155.3},0).wait(1).to({x:-38.9,y:157.6},0).wait(1).to({x:-38.1,y:160},0).wait(1).to({x:-37.3,y:162.4},0).wait(1).to({x:-36.5,y:164.7},0).wait(1).to({x:-35.6,y:167.1},0).wait(1).to({x:-34.8,y:169.4},0).wait(1).to({x:-33.9,y:171.7},0).wait(1).to({x:-33,y:174.1},0).wait(1).to({x:-32.2,y:176.4},0).wait(1).to({x:-31.2,y:178.7},0).wait(1).to({x:-30.3,y:181},0).wait(1).to({x:-29.5,y:183.4},0).wait(1).to({x:-28.8,y:185.8},0).wait(1).to({x:-28.2,y:188.2},0).wait(1).to({x:-27.8,y:190.6},0).wait(1).to({x:-27.4,y:193.1},0).wait(1).to({x:-27.1,y:195.6},0).wait(1).to({x:-26.9,y:198},0).wait(1).to({x:-26.8,y:200.5},0).wait(1).to({x:-26.7,y:203},0).wait(1).to({y:205.5},0).wait(1).to({x:-26.8,y:208},0).wait(1).to({x:-27,y:210.5},0).wait(1).to({x:-27.2,y:213},0).wait(1).to({x:-27.5,y:215.4},0).wait(1).to({x:-27.8,y:217.9},0).wait(1).to({x:-28.2,y:220.4},0).wait(1).to({x:-28.6,y:222.8},0).wait(1).to({x:-29,y:225.3},0).wait(1).to({x:-29.5,y:227.7},0).wait(1).to({x:-30.1,y:230.1},0).wait(1).to({x:-30.6,y:232.6},0).wait(1).to({x:-31.2,y:235},0).wait(1).to({x:-31.9,y:237.4},0).wait(1).to({x:-32.5,y:239.8},0).wait(1).to({x:-33.2,y:242.2},0).wait(1).to({x:-33.9,y:244.6},0).wait(1).to({x:-34.6,y:247},0).wait(1).to({x:-35.4,y:249.3},0).wait(1).to({x:-36.2,y:251.7},0).wait(1).to({x:-37,y:254},0).wait(1).to({x:-37.8,y:256.4},0).wait(1).to({x:-38.6,y:258.7},0).wait(1).to({x:-39.5,y:261.1},0).wait(1).to({x:-40.4,y:263.4},0).wait(1).to({x:-41.3,y:265.7},0).wait(1).to({x:-42.1,y:268.1},0).wait(1).to({x:-42.8,y:270.5},0).wait(1).to({x:-43.5,y:272.9},0).wait(1).to({x:-44.1,y:275.3},0).wait(1).to({x:-44.7,y:277.7},0).wait(1).to({x:-45.2,y:280.1},0).wait(1).to({x:-45.6,y:282.6},0).wait(1).to({x:-46,y:285},0).wait(1).to({x:-46.4,y:287.5},0).wait(1).to({x:-46.7,y:290},0).wait(1).to({x:-46.9,y:292.5},0).wait(1).to({x:-47.1,y:294.9},0).wait(1).to({x:-47.2,y:297.4},0).wait(1).to({x:-47.3,y:299.9},0).wait(1).to({x:-47.4,y:302.4},0).wait(1).to({y:304.9},0).wait(1).to({y:307.4},0).wait(1).to({y:309.9},0).wait(1).to({x:-47.3,y:312.4},0).wait(1).to({x:-47.2,y:314.8},0).wait(1).to({x:-47.1,y:317.3},0).wait(1).to({x:-46.9,y:319.8},0).wait(1).to({x:-46.7,y:322.3},0).wait(1).to({x:-46.5,y:324.8},0).wait(1).to({x:-46.2,y:327.3},0).wait(1).to({x:-46,y:329.7},0).wait(1).to({x:-45.7,y:332.2},0).wait(1).to({x:-45.4,y:334.7},0).wait(1).to({x:-45,y:337.1},0).wait(1).to({x:-44.7,y:339.6},0).wait(1).to({x:-44.3,y:342.1},0).wait(1).to({x:-43.9,y:344.5},0).wait(1).to({x:-43.5,y:347},0).wait(1).to({x:-43.1,y:349.4},0).wait(1).to({x:-42.6,y:351.9},0).wait(1).to({x:-42.2,y:354.3},0).wait(1).to({x:-41.7,y:356.8},0).wait(1).to({x:-41.2,y:359.2},0).wait(1).to({x:-40.7,y:361.7},0).wait(1).to({x:-40.2,y:364.1},0).wait(1).to({x:-39.7,y:366.5},0).wait(1).to({x:-39.1,y:369},0).wait(1).to({x:-38.6,y:371.4},0).wait(1).to({x:-38,y:373.8},0).wait(1).to({x:-37.5,y:376.2},0).wait(1).to({x:-36.9,y:378.7},0).wait(1).to({x:-36.3,y:381.1},0).wait(1).to({x:-35.7,y:383.5},0).wait(1).to({x:-35.1,y:385.9},0).wait(1).to({x:-34.5,y:388.3},0).wait(1).to({x:-33.8,y:390.7},0).wait(1).to({x:-33.2,y:393.1},0).wait(1).to({x:-32.6,y:395.5},0).wait(1).to({x:-31.9,y:397.9},0).wait(1).to({x:-31.3,y:400.3},0).wait(1).to({x:-30.6,y:402.7},0).wait(1).to({x:-29.9,y:405.1},0).wait(1).to({x:-29.3,y:407.5},0).wait(1).to({x:-28.6,y:409.9},0).wait(1).to({x:-27.9,y:412.3},0).wait(1).to({x:-27.2,y:414.7},0).wait(1).to({x:-26.5,y:417.1},0).wait(1).to({x:-25.8,y:419.5},0).wait(1).to({x:-25.1,y:421.9},0).wait(1).to({x:-24.4,y:424.3},0).wait(1).to({x:-23.7,y:426.7},0).wait(1).to({x:-23,y:429.1},0).wait(1).to({x:-22.3,y:431.5},0).wait(1).to({x:-21.6,y:433.8},0).wait(1).to({x:-20.9,y:436.2},0).wait(1).to({x:-20.2,y:438.6},0).wait(1).to({x:-19.5,y:441},0).wait(1).to({x:-18.8,y:443.4},0).wait(1).to({x:-18.1,y:445.8},0).wait(1).to({x:-17.4,y:448.2},0).wait(1).to({x:-16.8,y:450.6},0).wait(1).to({x:-16.2,y:453},0).wait(1).to({x:-15.6,y:455.4},0).wait(1).to({x:-15.1,y:457.9},0).wait(1).to({x:-14.6,y:460.3},0).wait(1).to({x:-14.1,y:462.8},0).wait(1).to({x:-13.7,y:465.2},0).wait(1).to({x:-13.3,y:467.7},0).wait(1).to({x:-12.9,y:470.1},0).wait(1).to({x:-12.6,y:472.6},0).wait(1).to({x:-12.3,y:475.1},0).wait(1).to({x:-12,y:477.5},0).wait(1).to({x:-11.8,y:480},0).wait(1).to({x:-11.6,y:482.5},0).wait(1).to({x:-11.5,y:485},0).wait(1).to({x:-11.4,y:487.5},0).wait(1).to({y:490},0).wait(1).to({y:492.5},0).wait(1).to({x:-11.5,y:494.9},0).wait(1).to({x:-11.6,y:497.4},0).wait(1).to({x:-11.7,y:499.9},0).wait(1).to({x:-12,y:502.4},0).wait(1).to({x:-12.2,y:504.9},0).wait(1).to({x:-12.6,y:507.3},0).wait(1).to({x:-13,y:509.8},0).wait(1).to({x:-13.4,y:512.2},0).wait(1).to({x:-14,y:514.7},0).wait(1).to({x:-14.6,y:517.1},0).wait(1).to({x:-15.2,y:519.5},0).wait(1).to({x:-15.9,y:521.9},0).wait(1).to({x:-16.7,y:524.2},0).wait(1).to({x:-17.6,y:526.6},0).wait(1).to({x:-18.5,y:528.9},0).wait(1).to({x:-19.5,y:531.2},0).wait(1).to({x:-20.5,y:533.4},0).wait(1).to({x:-21.6,y:535.7},0).wait(1).to({x:-22.8,y:537.9},0).wait(1).to({x:-24,y:540},0).wait(1).to({x:-25.3,y:542.2},0).wait(1).to({x:-26.7,y:544.2},0).wait(1).to({x:-28.1,y:546.3},0).wait(1).to({x:-29.5,y:548.3},0).wait(1).to({x:-31,y:550.3},0).wait(1).to({x:-32.6,y:552.2},0).wait(1).to({x:-34.2,y:554.2},0).wait(1).to({x:-35.8,y:556},0).wait(1).to({x:-37.5,y:557.9},0).wait(1).to({x:-39.2,y:559.7},0).wait(1).to({x:-40.9,y:561.5},0).wait(1).to({x:-42.7,y:563.3},0).wait(1).to({x:-44.4,y:565},0).wait(1).to({x:-46.2,y:566.8},0).wait(1).to({x:-47.9,y:568.5},0).wait(1).to({x:-49.6,y:570.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,13.9,5.1,5);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVCTQgjgjAAgyIAAgBIABgTQAGgmAcgbIAJgIIAAhmQAAgUAOgPQAPgOAUABIA3AAQAUgBAPAOQAOAPAAAUIAABmIAIAIQAkAjAAAyQAAAygkAjQgjAkgygBQgyABgjgkgAAng0IAAhRQAAgFgDgDQgDgDgFAAIg3AAQgFAAgDADQgEADAAAFIAABRQAUgHATAAQATAAAUAHg");
	this.shape.setTransform(-29.7,-27.2,0.87,0.87);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97D1CF").s().p("AAAA0QgfAAgaATIAAhvQAAgMAJgJQAIgJANAAIA3AAQANAAAIAJQAJAJAAAMIAABvQgagTggAAg");
	this.shape_1.setTransform(-28.8,-35.1,0.87,0.87);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32569F").s().p("AhJCuQgigOgagaQgagagPgiQgPgkAAgmQAAhMA4g5QA3g4BOABQAngBAjAPQAiAOAaAbQA4A5AABMQAAAmgPAkQgPAigaAaQgaAagiAOQgjAPgnABQglgBgkgPg");
	this.shape_2.setTransform(-28.8,-21.6,0.87,0.87);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B6AAF").s().p("AhjDuQgvgUgkgkQgjgjgUgvQgUgwAAg0QAAg0AUgwQAUguAjgkQAkgkAvgTQAvgUA0AAQA1AAAwAUQAuATAkAkQAjAkAUAuQAUAwAAA0QAAA0gUAwQgUAvgjAjQgkAkguAUQgwAUg1AAQgzAAgwgUg");
	this.shape_3.setTransform(-28.8,-21.6,0.87,0.87);

	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(-30.1,-22.5,0.87,0.87,0,0,0,31.2,31.7);
	this.instance.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-50.1,56.9,56.9);


(lib.Snow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Snow3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-180,10.1,1,1,0,0,0,0,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.99,scaleY:0.99,x:-179,y:11.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-178,y:13.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-177.1,y:15.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-176.1,y:17.6},0).wait(1).to({x:-175.2,y:19.4},0).wait(1).to({x:-174.3,y:21.1},0).wait(1).to({x:-173.5,y:22.9},0).wait(1).to({x:-172.7,y:24.7},0).wait(1).to({x:-171.8,y:26.5},0).wait(1).to({x:-171.1,y:28.3},0).wait(1).to({x:-170.3,y:30.1},0).wait(1).to({x:-169.5,y:31.9},0).wait(1).to({x:-168.8,y:33.7},0).wait(1).to({x:-168.1,y:35.6},0).wait(1).to({x:-167.4,y:37.4},0).wait(1).to({x:-166.7,y:39.3},0).wait(1).to({x:-166.1,y:41.1},0).wait(1).to({x:-165.4,y:43},0).wait(1).to({x:-164.8,y:44.9},0).wait(1).to({x:-164.2,y:46.7},0).wait(1).to({x:-163.7,y:48.6},0).wait(1).to({x:-163.1,y:50.5},0).wait(1).to({x:-162.6,y:52.4},0).wait(1).to({x:-162.1,y:54.3},0).wait(1).to({x:-161.6,y:56.2},0).wait(1).to({x:-161.2,y:58.1},0).wait(1).to({x:-160.7,y:60.1},0).wait(1).to({x:-160.3,y:62},0).wait(1).to({x:-159.9,y:63.9},0).wait(1).to({x:-159.6,y:65.8},0).wait(1).to({x:-159.3,y:67.8},0).wait(1).to({x:-159,y:69.7},0).wait(1).to({x:-158.7,y:71.7},0).wait(1).to({x:-158.4,y:73.6},0).wait(1).to({x:-158.2,y:75.6},0).wait(1).to({x:-158,y:77.5},0).wait(1).to({x:-157.9,y:79.5},0).wait(1).to({x:-157.7,y:81.5},0).wait(1).to({x:-157.6,y:83.4},0).wait(1).to({y:85.4},0).wait(1).to({y:87.4},0).wait(1).to({y:89.3},0).wait(1).to({y:91.3},0).wait(1).to({x:-157.7,y:93.3},0).wait(1).to({x:-157.8,y:95.2},0).wait(1).to({x:-157.9,y:97.2},0).wait(1).to({x:-158.1,y:99.2},0).wait(1).to({x:-158.4,y:101.1},0).wait(1).to({x:-158.6,y:103.1},0).wait(1).to({x:-158.9,y:105},0).wait(1).to({x:-159.3,y:106.9},0).wait(1).to({x:-159.7,y:108.9},0).wait(1).to({x:-160.1,y:110.8},0).wait(1).to({x:-160.6,y:112.7},0).wait(1).to({x:-161,y:114.6},0).wait(1).to({x:-161.5,y:116.5},0).wait(1).to({x:-161.9,y:118.5},0).wait(1).to({x:-162.4,y:120.4},0).wait(1).to({x:-162.8,y:122.3},0).wait(1).to({x:-163.3,y:124.2},0).wait(1).to({x:-163.8,y:126.1},0).wait(1).to({x:-164.2,y:128},0).wait(1).to({x:-164.7,y:129.9},0).wait(1).to({x:-165.2,y:131.8},0).wait(1).to({x:-165.6,y:133.7},0).wait(1).to({x:-166.1,y:135.7},0).wait(1).to({x:-166.5,y:137.6},0).wait(1).to({x:-167,y:139.5},0).wait(1).to({x:-167.4,y:141.4},0).wait(1).to({x:-167.9,y:143.3},0).wait(1).to({x:-168.3,y:145.2},0).wait(1).to({x:-168.7,y:147.2},0).wait(1).to({x:-169.1,y:149.1},0).wait(1).to({x:-169.5,y:151},0).wait(1).to({x:-169.8,y:153},0).wait(1).to({x:-170.2,y:154.9},0).wait(1).to({x:-170.5,y:156.8},0).wait(1).to({x:-170.8,y:158.8},0).wait(1).to({x:-171,y:160.7},0).wait(1).to({x:-171.3,y:162.7},0).wait(1).to({x:-171.5,y:164.7},0).wait(1).to({x:-171.6,y:166.6},0).wait(1).to({x:-171.7,y:168.6},0).wait(1).to({x:-171.8,y:170.5},0).wait(1).to({y:172.5},0).wait(1).to({y:174.5},0).wait(1).to({y:176.4},0).wait(1).to({x:-171.6,y:178.4},0).wait(1).to({x:-171.4,y:180.4},0).wait(1).to({x:-171.2,y:182.3},0).wait(1).to({x:-170.9,y:184.3},0).wait(1).to({x:-170.5,y:186.2},0).wait(1).to({x:-170.1,y:188.1},0).wait(1).to({x:-169.6,y:190},0).wait(1).to({x:-169,y:191.9},0).wait(1).to({x:-168.4,y:193.8},0).wait(1).to({x:-167.7,y:195.6},0).wait(1).to({x:-167,y:197.4},0).wait(1).to({x:-166.2,y:199.2},0).wait(1).to({x:-165.3,y:201},0).wait(1).to({x:-164.4,y:202.8},0).wait(1).to({x:-163.5,y:204.5},0).wait(1).to({x:-162.5,y:206.2},0).wait(1).to({x:-161.4,y:207.8},0).wait(1).to({x:-160.4,y:209.5},0).wait(1).to({x:-159.2,y:211.1},0).wait(1).to({x:-158.2,y:212.8},0).wait(1).to({x:-157.2,y:214.5},0).wait(1).to({x:-156.3,y:216.2},0).wait(1).to({x:-155.5,y:218},0).wait(1).to({x:-154.8,y:219.8},0).wait(1).to({x:-154.1,y:221.7},0).wait(1).to({x:-153.4,y:223.5},0).wait(1).to({x:-152.9,y:225.4},0).wait(1).to({x:-152.4,y:227.3},0).wait(1).to({x:-151.9,y:229.2},0).wait(1).to({x:-151.5,y:231.2},0).wait(1).to({x:-151.2,y:233.1},0).wait(1).to({x:-150.9,y:235.1},0).wait(1).to({x:-150.6,y:237},0).wait(1).to({x:-150.4,y:239},0).wait(1).to({x:-150.3,y:240.9},0).wait(1).to({x:-150.2,y:242.9},0).wait(1).to({x:-150.1,y:244.9},0).wait(1).to({y:246.8},0).wait(1).to({y:248.8},0).wait(1).to({y:250.8},0).wait(1).to({y:252.7},0).wait(1).to({x:-150.2,y:254.7},0).wait(1).to({x:-150.3,y:256.7},0).wait(1).to({x:-150.5,y:258.6},0).wait(1).to({x:-150.6,y:260.6},0).wait(1).to({x:-150.8,y:262.5},0).wait(1).to({x:-151,y:264.5},0).wait(1).to({x:-151.3,y:266.4},0).wait(1).to({x:-151.5,y:268.4},0).wait(1).to({x:-151.8,y:270.3},0).wait(1).to({x:-152.1,y:272.3},0).wait(1).to({x:-152.4,y:274.2},0).wait(1).to({x:-152.7,y:276.2},0).wait(1).to({x:-153,y:278.1},0).wait(1).to({x:-153.3,y:280.1},0).wait(1).to({x:-153.7,y:282},0).wait(1).to({x:-154.1,y:283.9},0).wait(1).to({x:-154.4,y:285.9},0).wait(1).to({x:-154.8,y:287.8},0).wait(1).to({x:-155.2,y:289.7},0).wait(1).to({x:-155.6,y:291.6},0).wait(1).to({x:-156.1,y:293.6},0).wait(1).to({x:-156.5,y:295.5},0).wait(1).to({x:-156.9,y:297.4},0).wait(1).to({x:-157.4,y:299.3},0).wait(1).to({x:-157.8,y:301.2},0).wait(1).to({x:-158.3,y:303.1},0).wait(1).to({x:-158.7,y:305.1},0).wait(1).to({x:-159.2,y:307},0).wait(1).to({x:-159.7,y:308.9},0).wait(1).to({x:-160.1,y:310.8},0).wait(1).to({x:-160.6,y:312.7},0).wait(1).to({x:-161,y:314.6},0).wait(1).to({x:-161.5,y:316.5},0).wait(1).to({x:-161.9,y:318.5},0).wait(1).to({x:-162.3,y:320.4},0).wait(1).to({x:-162.7,y:322.3},0).wait(1).to({x:-163.1,y:324.2},0).wait(1).to({x:-163.4,y:326.2},0).wait(1).to({x:-163.8,y:328.1},0).wait(1).to({x:-164.1,y:330.1},0).wait(1).to({x:-164.5,y:332},0).wait(1).to({x:-164.8,y:333.9},0).wait(1).to({x:-165,y:335.9},0).wait(1).to({x:-165.3,y:337.8},0).wait(1).to({x:-165.6,y:339.8},0).wait(1).to({x:-165.8,y:341.7},0).wait(1).to({x:-166.1,y:343.7},0).wait(1).to({x:-166.3,y:345.7},0).wait(1).to({x:-166.5,y:347.6},0).wait(1).to({x:-166.6,y:349.6},0).wait(1).to({x:-166.8,y:351.5},0).wait(1).to({x:-166.9,y:353.5},0).wait(1).to({x:-167.1,y:355.5},0).wait(1).to({x:-167.2,y:357.4},0).wait(1).to({x:-167.3,y:359.4},0).wait(1).to({y:361.4},0).wait(1).to({x:-167.4,y:363.3},0).wait(1).to({y:365.3},0).wait(1).to({y:367.3},0).wait(1).to({y:369.2},0).wait(1).to({y:371.2},0).wait(1).to({y:373.2},0).wait(1).to({x:-167.3,y:375.1},0).wait(1).to({x:-167.2,y:377.1},0).wait(1).to({x:-167.1,y:379.1},0).wait(1).to({x:-166.9,y:381},0).wait(1).to({x:-166.7,y:383},0).wait(1).to({x:-166.5,y:384.9},0).wait(1).to({x:-166.3,y:386.9},0).wait(1).to({x:-166,y:388.8},0).wait(1).to({x:-165.7,y:390.8},0).wait(1).to({x:-165.4,y:392.7},0).wait(1).to({x:-165,y:394.6},0).wait(1).to({x:-164.6,y:396.6},0).wait(1).to({x:-164.1,y:398.5},0).wait(1).to({x:-163.6,y:400.4},0).wait(1).to({x:-163,y:402.3},0).wait(1).to({x:-162.4,y:404.1},0).wait(1).to({x:-161.7,y:406},0).wait(1).to({x:-161,y:407.8},0).wait(1).to({x:-160.2,y:409.6},0).wait(1).to({x:-159.3,y:411.3},0).wait(1).to({x:-158.4,y:413.1},0).wait(1).to({x:-157.5,y:414.9},0).wait(1).to({x:-156.7,y:416.6},0).wait(1).to({x:-155.8,y:418.4},0).wait(1).to({x:-154.9,y:420.1},0).wait(1).to({x:-154,y:421.9},0).wait(1).to({x:-153.1,y:423.7},0).wait(1).to({x:-152.3,y:425.4},0).wait(1).to({x:-151.4,y:427.2},0).wait(1).to({x:-150.5,y:429},0).wait(1).to({x:-149.6,y:430.7},0).wait(1).to({x:-148.7,y:432.5},0).wait(1).to({x:-147.9,y:434.2},0).wait(1).to({x:-147,y:436},0).wait(1).to({x:-146.1,y:437.8},0).wait(1).to({x:-145.2,y:439.5},0).wait(1).to({x:-144.3,y:441.3},0).wait(1).to({x:-143.5,y:443},0).wait(1).to({x:-142.6,y:444.8},0).wait(1).to({x:-141.7,y:446.6},0).wait(1).to({x:-140.8,y:448.4},0).wait(1).to({x:-140,y:450.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,6.5,7.1,7.1);


(lib.Snow10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Snow11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-19.6,0.4,1.255,1.255,0,0,0,-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:-19,y:3.3},0).wait(1).to({x:-18.5,y:5.6},0).wait(1).to({x:-18.1,y:8},0).wait(1).to({x:-17.6,y:10.3},0).wait(1).to({x:-17.2,y:12.7},0).wait(1).to({x:-16.9,y:15},0).wait(1).to({x:-16.6,y:17.4},0).wait(1).to({x:-16.3,y:19.7},0).wait(1).to({x:-16,y:22.1},0).wait(1).to({x:-15.7,y:24.5},0).wait(1).to({x:-15.5,y:26.8},0).wait(1).to({x:-15.3,y:29.2},0).wait(1).to({x:-15.2,y:31.6},0).wait(1).to({x:-15.1,y:33.9},0).wait(1).to({x:-15,y:36.3},0).wait(1).to({y:38.7},0).wait(1).to({x:-14.9,y:41.1},0).wait(1).to({x:-15,y:43.5},0).wait(1).to({y:45.8},0).wait(1).to({x:-15.2,y:48.2},0).wait(1).to({x:-15.3,y:50.6},0).wait(1).to({x:-15.5,y:52.9},0).wait(1).to({x:-15.8,y:55.3},0).wait(1).to({x:-16.1,y:57.7},0).wait(1).to({x:-16.5,y:60},0).wait(1).to({x:-16.9,y:62.4},0).wait(1).to({x:-17.4,y:64.7},0).wait(1).to({x:-17.9,y:67},0).wait(1).to({x:-18.6,y:69.3},0).wait(1).to({x:-19.3,y:71.6},0).wait(1).to({x:-20,y:73.8},0).wait(1).to({x:-20.7,y:76.1},0).wait(1).to({x:-21.4,y:78.4},0).wait(1).to({x:-22.1,y:80.6},0).wait(1).to({x:-22.7,y:82.9},0).wait(1).to({x:-23.3,y:85.2},0).wait(1).to({x:-23.9,y:87.5},0).wait(1).to({x:-24.5,y:89.8},0).wait(1).to({x:-25.1,y:92.2},0).wait(1).to({x:-25.6,y:94.5},0).wait(1).to({x:-26.1,y:96.8},0).wait(1).to({x:-26.6,y:99.1},0).wait(1).to({x:-27.1,y:101.5},0).wait(1).to({x:-27.5,y:103.8},0).wait(1).to({x:-28,y:106.1},0).wait(1).to({x:-28.4,y:108.5},0).wait(1).to({x:-28.7,y:110.8},0).wait(1).to({x:-29.1,y:113.2},0).wait(1).to({x:-29.4,y:115.5},0).wait(1).to({x:-29.7,y:117.9},0).wait(1).to({x:-30,y:120.2},0).wait(1).to({x:-30.3,y:122.6},0).wait(1).to({x:-30.5,y:125},0).wait(1).to({x:-30.7,y:127.3},0).wait(1).to({x:-30.9,y:129.7},0).wait(1).to({x:-31.1,y:132.1},0).wait(1).to({x:-31.2,y:134.5},0).wait(1).to({x:-31.3,y:136.8},0).wait(1).to({y:139.2},0).wait(1).to({y:141.6},0).wait(1).to({y:144},0).wait(1).to({x:-31.2,y:146.4},0).wait(1).to({x:-31.1,y:148.7},0).wait(1).to({x:-31,y:151.1},0).wait(1).to({x:-30.7,y:153.5},0).wait(1).to({x:-30.4,y:155.8},0).wait(1).to({x:-30.1,y:158.2},0).wait(1).to({x:-29.6,y:160.5},0).wait(1).to({x:-29.1,y:162.8},0).wait(1).to({x:-28.6,y:165.1},0).wait(1).to({x:-28,y:167.5},0).wait(1).to({x:-27.5,y:169.8},0).wait(1).to({x:-26.9,y:172.1},0).wait(1).to({x:-26.3,y:174.4},0).wait(1).to({x:-25.7,y:176.7},0).wait(1).to({x:-25.1,y:179},0).wait(1).to({x:-24.5,y:181.3},0).wait(1).to({x:-23.9,y:183.6},0).wait(1).to({x:-23.3,y:185.9},0).wait(1).to({x:-22.7,y:188.2},0).wait(1).to({x:-22,y:190.5},0).wait(1).to({x:-21.4,y:192.8},0).wait(1).to({x:-20.8,y:195.1},0).wait(1).to({x:-20.2,y:197.3},0).wait(1).to({x:-19.5,y:199.6},0).wait(1).to({x:-18.9,y:201.9},0).wait(1).to({x:-18.3,y:204.2},0).wait(1).to({x:-17.7,y:206.5},0).wait(1).to({x:-17.1,y:208.8},0).wait(1).to({x:-16.5,y:211.1},0).wait(1).to({x:-15.9,y:213.4},0).wait(1).to({x:-15.3,y:215.7},0).wait(1).to({x:-14.7,y:218},0).wait(1).to({x:-14.1,y:220.3},0).wait(1).to({x:-13.6,y:222.7},0).wait(1).to({x:-13,y:225},0).wait(1).to({x:-12.5,y:227.3},0).wait(1).to({x:-12,y:229.6},0).wait(1).to({x:-11.5,y:231.9},0).wait(1).to({x:-11,y:234.3},0).wait(1).to({x:-10.5,y:236.6},0).wait(1).to({x:-10.1,y:238.9},0).wait(1).to({x:-9.7,y:241.3},0).wait(1).to({x:-9.3,y:243.6},0).wait(1).to({x:-8.9,y:246},0).wait(1).to({x:-8.5,y:248.3},0).wait(1).to({x:-8.2,y:250.7},0).wait(1).to({x:-7.9,y:253},0).wait(1).to({x:-7.6,y:255.4},0).wait(1).to({x:-7.4,y:257.8},0).wait(1).to({x:-7.2,y:260.1},0).wait(1).to({x:-7,y:262.5},0).wait(1).to({x:-6.8,y:264.9},0).wait(1).to({x:-6.7,y:267.2},0).wait(1).to({x:-6.6,y:269.6},0).wait(1).to({x:-6.5,y:272},0).wait(1).to({x:-6.4,y:274.4},0).wait(1).to({y:276.7},0).wait(1).to({y:279.1},0).wait(1).to({y:281.5},0).wait(1).to({x:-6.5,y:283.9},0).wait(1).to({x:-6.6,y:286.2},0).wait(1).to({x:-6.7,y:288.6},0).wait(1).to({x:-6.9,y:291},0).wait(1).to({x:-7.1,y:293.4},0).wait(1).to({x:-7.3,y:295.7},0).wait(1).to({x:-7.5,y:298.1},0).wait(1).to({x:-7.7,y:300.5},0).wait(1).to({x:-8,y:302.8},0).wait(1).to({x:-8.3,y:305.2},0).wait(1).to({x:-8.7,y:307.5},0).wait(1).to({x:-9,y:309.9},0).wait(1).to({x:-9.4,y:312.2},0).wait(1).to({x:-9.8,y:314.6},0).wait(1).to({x:-10.2,y:316.9},0).wait(1).to({x:-10.6,y:319.3},0).wait(1).to({x:-10.9,y:321.6},0).wait(1).to({x:-11.3,y:324},0).wait(1).to({x:-11.6,y:326.3},0).wait(1).to({x:-12,y:328.7},0).wait(1).to({x:-12.3,y:331},0).wait(1).to({x:-12.6,y:333.4},0).wait(1).to({x:-12.9,y:335.8},0).wait(1).to({x:-13.2,y:338.1},0).wait(1).to({x:-13.5,y:340.5},0).wait(1).to({x:-13.8,y:342.8},0).wait(1).to({x:-14,y:345.2},0).wait(1).to({x:-14.3,y:347.6},0).wait(1).to({x:-14.5,y:349.9},0).wait(1).to({x:-14.7,y:352.3},0).wait(1).to({x:-14.9,y:354.7},0).wait(1).to({x:-15.1,y:357.1},0).wait(1).to({x:-15.3,y:359.4},0).wait(1).to({x:-15.4,y:361.8},0).wait(1).to({x:-15.5,y:364.2},0).wait(1).to({x:-15.7,y:366.5},0).wait(1).to({x:-15.8,y:368.9},0).wait(1).to({y:371.3},0).wait(1).to({x:-15.9,y:373.7},0).wait(1).to({y:376},0).wait(1).to({y:378.4},0).wait(1).to({y:380.8},0).wait(1).to({y:383.2},0).wait(1).to({x:-15.8,y:385.6},0).wait(1).to({x:-15.7,y:387.9},0).wait(1).to({x:-15.6,y:390.3},0).wait(1).to({x:-15.5,y:392.7},0).wait(1).to({x:-15.3,y:395.1},0).wait(1).to({x:-15.1,y:397.4},0).wait(1).to({x:-14.9,y:399.8},0).wait(1).to({x:-14.7,y:402.2},0).wait(1).to({x:-14.4,y:404.5},0).wait(1).to({x:-14.1,y:406.9},0).wait(1).to({x:-13.8,y:409.2},0).wait(1).to({x:-13.5,y:411.6},0).wait(1).to({x:-13.1,y:413.9},0).wait(1).to({x:-12.7,y:416.3},0).wait(1).to({x:-12.2,y:418.6},0).wait(1).to({x:-11.8,y:421},0).wait(1).to({x:-11.3,y:423.3},0).wait(1).to({x:-10.8,y:425.6},0).wait(1).to({x:-10.3,y:427.9},0).wait(1).to({x:-9.7,y:430.2},0).wait(1).to({x:-9.1,y:432.5},0).wait(1).to({x:-8.5,y:434.8},0).wait(1).to({x:-7.8,y:437.1},0).wait(1).to({x:-7.2,y:439.4},0).wait(1).to({x:-6.5,y:441.7},0).wait(1).to({x:-5.8,y:444},0).wait(1).to({x:-5.1,y:446.2},0).wait(1).to({x:-4.3,y:448.5},0).wait(1).to({x:-3.5,y:450.7},0).wait(1).to({x:-2.7,y:453},0).wait(1).to({x:-1.9,y:455.2},0).wait(1).to({x:-1.1,y:457.4},0).wait(1).to({x:-0.2,y:459.6},0).wait(1).to({x:0.6,y:461.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-1.6,5.2,5.1);


(lib.lifht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnJChQgDgZgFgQQgIgZgVgPQgMgJgNgCImvgRQmPgQgmgFIgWgDQgxgIgWADQghAFgbAcQgaAbgKA5QgHAmABAkIABAOIgdALIgNgHQgLgGgCgKQgBgGABgdQAFg1gDg2QgCgsgegWIgfgLIgBAAQgPgCmjggQmtgggugFQhKgIgiAEQgfAEgVASQgRAOgFBYIAAB6Ig0AAQgDhKADg0QgBhQgFgVQgJglgigPQhOgjmegeQjOgPi/gJIASgkQLeA2BjASQAmAHApAXIASAPQASARAMAbIAGgIQAmghAwgCQAggBBRAPQAQADFkARQFyARClAYQAdAEAaASQAiAVANAlIAEgEQAngpA2gHQAhgEA7AJIAUADQAVADFFAKQFyAOCVAJIADABQAJgBAVAJQAeANASAZQAKgOAOgIIAGgDQAmgTAqgFQAogEDGgDQEKgEF+gRIADAAIADAAQARABAQAIQAUAJAOAOQAMgPAQgKQAqgXHXgUQI9gYAPgBIADgBQAoABAgATQAPgjAkgKQAvgNGRgQQGhgQAMgCQAggDASALQANAHASAaQAAgMADgNQAEgcAPgHIAjgUQAWgJA8gJQBlgRFZgSQCsgKCcgHIARAlQgGAClLANQlbANhhAPQg4AJghATIgVASIgHChIgzgBQAHgygMguQgDgTgIgLQgFgGgLgEQgKgEgDABIj3ANIk0AMQkbAMgnAKQgQAEgHAbQgFAXACAlQADAYAAAZIgCAiIACAFIgnABIgIAAQgGAAAAgDQAAgWgDhJIgBgIQgCgbgZgMQgNgGgTgBQi/ARnZARQmAANgaAOQgdARgDA0IAIBHIgzAHQgMgkACgsIgCgZQgCgUgTgMQgKgIgOgDIj1ALQjyAIifADQi+ADgjADQglADgdAQIgGACQgKAFgHAWQgGATgCAdQAEArgCAnIg0ABQgGgoADgsg");
	this.shape.setTransform(326.8,-41.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	// Слой 4
	this.instance = new lib.Анимация24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(513.6,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9},19).to({y:-5.2},17).to({y:-7.5},3).wait(1));

	// Слой 3
	this.instance_1 = new lib.Анимация24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(284.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:283.9,y:3.2},14).to({x:283.8,y:4.8},12).to({x:284.1,y:6.2},13).wait(1));

	// FlashAICB
	this.instance_2 = new lib.Анимация24("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-4.9},12).to({x:45,y:-0.5},15).to({x:45.1,y:-2.8},12).wait(1));

	// FlashAICB
	this.instance_3 = new lib.Анимация22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(641.9,3.3,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:5.6},16).to({y:3.3},23).wait(1));

	// FlashAICB
	this.instance_4 = new lib.Анимация22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(420.6,16.2,1,1,-0.5,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:420.3,y:14.8},8).to({x:421.5,y:18.1},13).to({x:420.6,y:16.2},18).wait(1));

	// FlashAICB
	this.instance_5 = new lib.Анимация22("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(194.9,22.7,1,1,1.1,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:194.8,y:21.6},19).to({x:194.7,y:25.3},9).to({x:194.9,y:22.7},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-66.1,756,95);


// stage content:
(lib._13ZP_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(198));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AollOIRLAAIAAKdIxLAAg");
	this.shape.setTransform(55,123.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(198));

	// FlashAICB
	this.instance = new lib.Анимация13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(76,214.4,0.733,0.733,0,0,0,0.2,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({alpha:1},26).to({startPosition:0},46).to({alpha:0},13).wait(82));

	// FlashAICB
	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.5,190.2,0.733,0.733,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},26).to({regX:0.2,x:75.6},37).to({regX:0.1,x:75.5},9).to({alpha:0},13).to({y:185.2},21).to({regX:0.2,regY:0.4,x:75.6,y:185.3},12).to({regX:0.1,regY:0.2,x:75.5,y:185.2},18).wait(31));

	// FlashAICB
	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.1,157.6,0.044,0.044,0,0,0,2.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.8,regY:1,scaleX:0.83,scaleY:0.83,x:88.9,y:161.7},12).to({regX:0.4,regY:0.4,scaleX:0.69,scaleY:0.69,x:99,y:160.9},8).to({regX:0.5,regY:0.5},27).to({regX:0.3,regY:0.4,x:98.9},56).to({alpha:0},13).to({startPosition:0},33).to({startPosition:0},9).wait(40));

	// FlashAICB
	this.instance_3 = new lib.Анимация16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.6,157.3,0.044,0.044,0,0,0,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:1.1,regY:1.1,scaleX:0.83,scaleY:0.83,x:4.4,y:155.6},12).to({regX:0.4,regY:0.5,scaleX:0.69,scaleY:0.69,x:28.2,y:155.8},8).to({regY:0.4,y:155.7},83).to({alpha:0},13).to({startPosition:0},81).wait(1));

	// Слой 5
	this.instance_4 = new lib.logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(77,38,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(198));

	// FlashAICB
	this.instance_5 = new lib.Анимация19("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.3,199.8,0.792,0.792,0,0,0,0.2,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({alpha:1},11).to({regY:0.2},10).to({regY:0.1},9).wait(31));

	// FlashAICB
	this.instance_6 = new lib.Анимация18("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(74,167.1,1.976,1.976,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(127).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.79,scaleY:0.79,x:112.3,y:180.8},9).to({startPosition:0},31).wait(31));

	// FlashAICB
	this.instance_7 = new lib.Анимация17("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-87.4,167.9,1.837,1.837,0,0,0,-0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(127).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.79,scaleY:0.79,x:47.8,y:180.2},9).to({startPosition:0},4).to({x:47.5},27).wait(31));

	// FlashAICB
	this.instance_8 = new lib.Анимация14("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(142.8,159.4,0.075,0.075,0,0,0,0.7,1.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(111).to({_off:false},0).to({regX:0.4,regY:0.1,scaleX:1.02,scaleY:1.02,x:54.6,y:172},7).to({regX:0.1,regY:0.2,scaleX:0.79,scaleY:0.79,x:74.8,y:170.7},7).to({y:170.6},15).to({y:170.7},57).wait(1));

	// FlashAICB
	this.instance_9 = new lib.lifht("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.3,63,0.461,0.46,0,0,0,327.4,73.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(198));

	// FlashAICB
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B4E99").s().p("AglAvQgNgMAAgZIAAgsQAAgZARABQARgBAAAZIAAAlQAAALADAGQAEAIAJgBQAKABAFgIQADgGAAgLIAAglQAAgZARABQAQgBAAAZIAAAsQAAAYgNANQgNAMgZABQgXgBgOgMg");
	this.shape_1.setTransform(223.6,242.5,0.569,0.57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B4E99").s().p("AgkAiIAAhDQAAgZASABQAJAAAGAKQAKgLANAAQAHAAAFAEQAFAGAAAHQAAAHgIAGIgSAGQgKAEgBAFQgCADAAAKIAAAiQAAAZgQAAQgSAAAAgZg");
	this.shape_2.setTransform(218.2,242.5,0.569,0.57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B4E99").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAFAGABAHQAAAIgHAGQgFAGgIAAQgGAAgHgGg");
	this.shape_3.setTransform(214,244.7,0.569,0.57);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B4E99").s().p("AAyAiIAAglQAAgagPAAQgSAAAAAZIAAAmQAAAZgQAAQgQAAgBgZIAAglQAAgagPAAQgSAAAAAZIAAAmQAAAZgQAAQgRAAAAgZIAAhDQAAgZAQAAQALAAAGALQAKgLARAAQAWAAALAQQAOgQAUAAQAmAAAAAsIAAAwQAAAZgRAAQgQAAAAgZg");
	this.shape_4.setTransform(207.2,242.5,0.569,0.57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B4E99").s().p("AgOArIAAgsQgPAAAAgKQAAgLAPAAIAAgJQAAgNAGgIQAHgIAMAAQAQAAAAAMQAAALgLAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBADAAALQAUAAAAALQAAAHgHACIgNABIAAAsQAAASgMAAQgMAAAAgSg");
	this.shape_5.setTransform(199.2,240.9,0.777,0.777);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B4E99").s().p("AgoArQgQgRgBgaQAAgYARgSQAQgSAYAAQAaAAAQASQAQARAAAZQAAAagQARQgQASgaAAQgZAAgPgSgAgQgSQgFAHAAALQAAAMAFAIQAHAJAJAAQAMAAAFgJQAGgIAAgMQAAgKgGgIQgGgJgLAAQgKAAgGAJg");
	this.shape_6.setTransform(193.9,242.4,0.569,0.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B4E99").s().p("AgkAiIAAhDQAAgZARABQAKAAAHAKQAJgLAMAAQAIAAAFAEQAFAFAAAIQAAAIgJAFIgRAGQgJAEgCAFQgBAEAAAJIAAAiQAAAZgSAAQgRAAAAgZg");
	this.shape_7.setTransform(188.5,242.5,0.569,0.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B4E99").s().p("AgSA1IAAg8QgVAAAAgOQAAgOAVgBQAAgUABgFQADgPANAAQAMAAADAPQABAFAAAUQAYAAABAPQgBAOgYAAIAAA8QAAAYgQAAQgRAAAAgYg");
	this.shape_8.setTransform(183.7,241.4,0.569,0.57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B4E99").s().p("AgmArQgRgSAAgZQAAgYAQgSQAQgRAYAAQAMgBALAFQAOAHAJANQAKAOgBAOQABAHgHAGQgFADgJAAIg4AAQABALAHAEQAHAGAJAAQAJAAAMgGQAMgFADgBQANAAAAAOQAAAGgDAEQgHAKgPAEQgMAEgOABQgXgBgRgRgAgNgbQgGAHgCAJIAsAAQAAgKgHgFQgGgGgJAAQgHAAgHAFg");
	this.shape_9.setTransform(178.2,242.5,0.569,0.57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B4E99").s().p("AgkAiIAAhDQAAgZARABQAKAAAHAKQAJgLAMAAQAIAAAFAEQAFAFAAAIQAAAHgJAGIgRAGQgJAEgCAFQgBAEAAAJIAAAiQAAAZgSAAQgRAAAAgZg");
	this.shape_10.setTransform(172.8,242.5,0.569,0.57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B4E99").s().p("AgqApQgOgRAAgYQAAgXAOgRQAQgTAXAAQAQAAAKAMQAHgKAJAAQARgBAAAZIAABDQAAAZgRAAQgKAAgGgMQgKANgRAAQgXAAgPgTgAgPgSQgGAIAAAKQABAMAFAGQAFAJALAAQAKAAAGgJQAFgGAAgMQAAgLgFgHQgFgJgLAAQgKAAgGAJg");
	this.shape_11.setTransform(162.1,242.5,0.569,0.57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B4E99").s().p("AATAiIAAgXIgkAAIAAAXQAAAZgRAAQgRAAAAgZIAAhDQAAgZARAAQARAAAAAZIAAAVIAkAAIAAgVQAAgZARAAQAQAAAAAZIAABDQAAAZgQAAQgRAAAAgZg");
	this.shape_12.setTransform(155,242.5,0.569,0.57);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B4E99").s().p("AAXAzQgCgGAAgLIAAghIgoAhQAAAMgDAFQgDAIgLAAQgRAAAAgZIAAhDQAAgMADgFQAEgIAKAAQALAAADAIQADAGAAALIAAAkIAogkQAAgNACgEQAEgIAKAAQALAAAEAIQACAGAAALIAABDQAAALgCAGQgEAIgLAAQgKAAgEgIg");
	this.shape_13.setTransform(143.8,242.5,0.569,0.57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B4E99").s().p("AgQAiIAAg/IgOAAQgWAAAAgOQAAgPAWAAIA9AAQAWAAAAAPQAAAOgWAAIgOAAIAAA/QgBAZgQAAQgQAAAAgZg");
	this.shape_14.setTransform(137.2,242.5,0.569,0.57);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B4E99").s().p("AggArQgPgRAAgaQAAgZAQgRQAQgRAZAAQAOAAALAEQANAGAAAMQAAAGgEAEQgDAEgHAAIgKgCQgGgDgIAAQgKAAgGAJQgGAIAAALQAAAMAGAIQAGAIAMAAQAGAAAHgCQAGgDAEAAQAGAAADAFQAEAEAAAGQAAAKgOAHQgKAFgQAAQgZAAgPgRg");
	this.shape_15.setTransform(131.3,242.4,0.569,0.57);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B4E99").s().p("AgOAPQgFgGAAgJQAAgIAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgFAGQgGAGgJAAQgIAAgGgGgAgFgGQgCADAAADQAAAEACADQACADADAAQAEAAACgDQACgDAAgEQAAgDgCgDQgCgEgEAAQgDAAgCAEg");
	this.shape_16.setTransform(124.6,242.5,1.629,1.629);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B4E99").s().p("AAKATIAAgNIgUAAIAAANQAAAOgJAAQgKAAAAgOIAAgmQAAgNAKAAQAJAAAAANIAAAMIAUAAIAAgMQAAgNAKAAQAKAAAAANIAAAmQAAAOgKAAQgKAAAAgOg");
	this.shape_17.setTransform(117.5,242.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B4E99").s().p("AgpBCQgNgPABgcIAAgRQgBhAAfgKQALgCAZAAQAMAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQgBgDAGgBQADgDAEAAQAMABAAARQAAAHgHAGQgFAEgIABIgMABIgVAAQgMAAgFAIQgFAIAAAIIABAAQAKgHAQgBQAZAAANAQQALAOABAZQAAAbgPAQQgOAQgaAAQgagBgPgRgAgQAGQgFAIgBAKQABAeAVAAQAJAAAFgHQAHgFAAgSQAAgagVAAQgLAAgFAIg");
	this.shape_18.setTransform(110.5,241.1,0.569,0.57);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B4E99").s().p("AgpArQgPgRAAgaQAAgZAPgRQARgSAYAAQAZAAARASQAPARAAAZQAAAagPARQgQASgaAAQgZAAgQgSgAgRgTQgEAIgBALQABAMAEAIQAIAKAJAAQALAAAGgKQAGgJgBgLQABgKgGgJQgHgKgKAAQgJAAgIAKg");
	this.shape_19.setTransform(103.4,242.4,0.569,0.57);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B4E99").s().p("Ag3A5IAAhxQAAgYARAAQAKAAAGAKQALgLAQAAQAYAAAOASQANASAAAXQAAATgIANQgIAQgPAHQgKAFgKAAQgPAAgLgKIgBAAIAAAeQAAAYgQAAQgRAAAAgZgAgQgsQgGAHAAARQAAALAFAIQAHAIAKAAQALAAAGgJQAFgHAAgMQAAgMgFgIQgGgJgLAAQgJAAgHAGg");
	this.shape_20.setTransform(96.3,243.8,0.569,0.57);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B4E99").s().p("AAnA9IAAgQIhNAAIAAARQgCAJgJABQgQAAAAgRIAAgWQAAgJAFgEIAJgBQAFgCAAgMIAAgpQAAgTALgIQAIgIAUABIApAAQALgBADAIQADAFAAAKIAABDQAPAAAAAOIAAAWQAAARgQAAQgIAAgDgLgAgOgkIAAApQAAAGgEAIIAkAAIAAg+IgZAAQgHAAAAAHg");
	this.shape_21.setTransform(88.6,243.2,0.569,0.57);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B4E99").s().p("AgpArQgQgRAAgaQABgYAQgSQAQgSAYAAQAaAAAPASQAQARABAZQAAAZgQASQgQASgaAAQgZAAgQgSgAgQgTQgFAJgBAKQABALAFAJQAGAKAKAAQALAAAGgKQAFgJAAgLQAAgKgFgJQgGgKgLAAQgKAAgGAKg");
	this.shape_22.setTransform(81.4,242.4,0.569,0.57);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B4E99").s().p("AATAiIAAg/IgkAAIAAA/QAAAZgRAAQgRAAAAgZIAAhFQAAgLADgFQADgHALAAIBFAAQALAAADAHQADAGAAAKIAABFQAAAZgRAAQgQAAAAgZg");
	this.shape_23.setTransform(74.2,242.5,0.569,0.57);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AlsiAILZAAIAAEBIrZAAg");
	this.shape_24.setTransform(35.1,243.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(198));

	// Слой 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgzHAQpMAASghRQGQAdHuA/QPcB/HaCoQHtCwHNgEQCrgCCxgbQBegOCqgkQCXgfFKhRQEthFDEgUQCvgRC/AOQC7ANBVgKQDCgWMZiPIgTffg");
	this.shape_25.setTransform(152.2,246.4,0.468,0.232);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_10 = new lib.Символ3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(263.8,20.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_11 = new lib.Символ3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(263.6,-174,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_12 = new lib.Символ3("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(248.2,-196.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_13 = new lib.Символ3("synched",7);
	this.instance_13.parent = this;
	this.instance_13.setTransform(173,-162.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.instance_14 = new lib.Символ3("synched",7);
	this.instance_14.parent = this;
	this.instance_14.setTransform(254.4,-124.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_15 = new lib.Символ3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(229.3,-209.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_16 = new lib.Символ3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(175.1,-178.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_17 = new lib.Символ3("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(210.6,-203.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_18 = new lib.Символ3("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(162.6,-192.8,0.626,0.626,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_19 = new lib.Символ3("synched",4);
	this.instance_19.parent = this;
	this.instance_19.setTransform(185.8,-222.3,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_20 = new lib.Символ3("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(276.2,174,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_21 = new lib.Символ3("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(260.7,151.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_22 = new lib.Символ3("synched",7);
	this.instance_22.parent = this;
	this.instance_22.setTransform(266.9,223.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_23 = new lib.Символ3("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(241.9,138.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_24 = new lib.Символ3("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(187.6,169.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_25 = new lib.Символ3("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(223.2,144.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_26 = new lib.Символ3("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(175.1,155.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_27 = new lib.Символ3("synched",4);
	this.instance_27.parent = this;
	this.instance_27.setTransform(198.4,125.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_28 = new lib.Символ3("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(160.9,174,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_29 = new lib.Символ3("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(202.7,157.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_30 = new lib.Символ3("synched",9);
	this.instance_30.parent = this;
	this.instance_30.setTransform(213.2,241.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_31 = new lib.Символ3("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(160.2,207.5,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_32 = new lib.Символ3("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(192,213.4,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_33 = new lib.Символ3("synched",9);
	this.instance_33.parent = this;
	this.instance_33.setTransform(160.9,184,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_34 = new lib.Символ3("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(316.5,155.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_35 = new lib.Символ3("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(332.2,194.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_36 = new lib.Символ3("synched",9);
	this.instance_36.parent = this;
	this.instance_36.setTransform(302.1,165.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_37 = new lib.Символ3("synched",9);
	this.instance_37.parent = this;
	this.instance_37.setTransform(320.6,200.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_38 = new lib.Символ3("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(283,138.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_39 = new lib.Символ3("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(302.1,125.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_40 = new lib.Символ3("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(260.7,132,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_41 = new lib.Символ3("synched",9);
	this.instance_41.parent = this;
	this.instance_41.setTransform(285.5,147,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_42 = new lib.Символ3("synched",9);
	this.instance_42.parent = this;
	this.instance_42.setTransform(223.2,181.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_43 = new lib.Символ3("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(235.8,167.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_44 = new lib.Символ3("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(210.6,116.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(198));

	// снежинка - копия: 2
	this.instance_45 = new lib.Символ3("synched",19);
	this.instance_45.parent = this;
	this.instance_45.setTransform(219.7,167.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_46 = new lib.Символ3("synched",9);
	this.instance_46.parent = this;
	this.instance_46.setTransform(276.2,29.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_47 = new lib.Символ3("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(260.7,7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_48 = new lib.Символ3("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(266.9,79.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_49 = new lib.Символ3("synched",9);
	this.instance_49.parent = this;
	this.instance_49.setTransform(241.9,-5.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_50 = new lib.Символ3("synched",9);
	this.instance_50.parent = this;
	this.instance_50.setTransform(187.6,25.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_51 = new lib.Символ3("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(223.2,0.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_52 = new lib.Символ3("synched",9);
	this.instance_52.parent = this;
	this.instance_52.setTransform(175.1,11.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_53 = new lib.Символ3("synched",4);
	this.instance_53.parent = this;
	this.instance_53.setTransform(198.4,-18.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_54 = new lib.Символ3("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(160.9,29.9,0.626,0.626,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_55 = new lib.Символ3("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(202.7,13.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_56 = new lib.Символ3("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(213.2,97,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_57 = new lib.Символ3("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(160.2,63.4,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_58 = new lib.Символ3("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(192,69.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_59 = new lib.Символ3("synched",9);
	this.instance_59.parent = this;
	this.instance_59.setTransform(160.9,39.9,0.626,0.626,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_60 = new lib.Символ3("synched",9);
	this.instance_60.parent = this;
	this.instance_60.setTransform(316.5,11.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_61 = new lib.Символ3("synched",19);
	this.instance_61.parent = this;
	this.instance_61.setTransform(332.2,50.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_62 = new lib.Символ3("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(302.1,21.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_63 = new lib.Символ3("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(320.6,56.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_64 = new lib.Символ3("synched",9);
	this.instance_64.parent = this;
	this.instance_64.setTransform(283,-5.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_65 = new lib.Символ3("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(302.1,-18.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_66 = new lib.Символ3("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(260.7,-12.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(198));

	// снежинка - копия: 2
	this.instance_67 = new lib.Символ3("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(285.5,2.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_68 = new lib.Символ3("synched",9);
	this.instance_68.parent = this;
	this.instance_68.setTransform(223.2,37.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(198));

	// снежинка - копия: 2
	this.instance_69 = new lib.Символ3("synched",9);
	this.instance_69.parent = this;
	this.instance_69.setTransform(235.8,23.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(198));

	// снежинка - копия: 2
	this.instance_70 = new lib.Символ3("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(210.6,-27.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(198));

	// снежинка
	this.instance_71 = new lib.Символ3("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(219.7,23.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_72 = new lib.Символ1("synched",4);
	this.instance_72.parent = this;
	this.instance_72.setTransform(342.6,-306.4,0.626,0.626,0,0,0,1.2,1);
	this.instance_72.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_73 = new lib.Символ1("synched",14);
	this.instance_73.parent = this;
	this.instance_73.setTransform(347.7,-52.2,0.626,0.626,0,0,0,1.1,1.1);
	this.instance_73.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_74 = new lib.Символ1("synched",4);
	this.instance_74.parent = this;
	this.instance_74.setTransform(328.5,-161.5,0.626,0.626,0,0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_75 = new lib.Символ1("synched",14);
	this.instance_75.parent = this;
	this.instance_75.setTransform(348.8,-271,0.626,0.626,0,0,0,1.2,1);
	this.instance_75.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_76 = new lib.Символ1("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(311,-328,0.626,0.626,0,0,0,1.2,1);
	this.instance_76.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_77 = new lib.Символ1("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(317.7,-75.8,0.626,0.626,0,0,0,1.2,1);
	this.instance_77.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_78 = new lib.Символ1("synched",0);
	this.instance_78.parent = this;
	this.instance_78.setTransform(212.8,-208.1,0.626,0.626,0,0,0,1.2,1);
	this.instance_78.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_79 = new lib.Символ1("synched",4);
	this.instance_79.parent = this;
	this.instance_79.setTransform(342.6,-106.9,0.626,0.626,0,0,0,1.2,1);
	this.instance_79.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_80 = new lib.Символ1("synched",14);
	this.instance_80.parent = this;
	this.instance_80.setTransform(347.7,147.2,0.626,0.626,0,0,0,1.1,1.2);
	this.instance_80.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_81 = new lib.Символ1("synched",4);
	this.instance_81.parent = this;
	this.instance_81.setTransform(328.5,38,0.626,0.626,0,0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_82 = new lib.Символ1("synched",14);
	this.instance_82.parent = this;
	this.instance_82.setTransform(348.8,-71.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_82.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_83 = new lib.Символ1("synched",0);
	this.instance_83.parent = this;
	this.instance_83.setTransform(311,-128.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_83.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_84 = new lib.Символ1("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(317.7,123.7,0.626,0.626,0,0,0,1.2,1.1);
	this.instance_84.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_85 = new lib.Символ1("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(212.8,-8.6,0.626,0.626,0,0,0,1.2,1);
	this.instance_85.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_86 = new lib.Символ1("synched",14);
	this.instance_86.parent = this;
	this.instance_86.setTransform(184.2,-26.3,0.626,0.626,0,0,0,1.2,1);
	this.instance_86.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_87 = new lib.Символ1("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(218.4,-90.3,0.626,0.626,0,0,0,1.2,1);
	this.instance_87.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_88 = new lib.Символ1("synched",4);
	this.instance_88.parent = this;
	this.instance_88.setTransform(228.4,-58.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_88.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_89 = new lib.Символ1("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(193.9,-93.2,0.626,0.626,0,0,0,1.2,1);
	this.instance_89.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_90 = new lib.Символ1("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(266.2,-104,0.626,0.626,0,0,0,1.2,1);
	this.instance_90.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(198));

	// снежинка - копия: 2
	this.instance_91 = new lib.Символ1("synched",9);
	this.instance_91.parent = this;
	this.instance_91.setTransform(222.4,-183,0.626,0.626,0,0,0,-107.5,-321.1);
	this.instance_91.alpha = 0.801;

	this.instance_92 = new lib.Символ1("synched",9);
	this.instance_92.parent = this;
	this.instance_92.setTransform(309.2,-200.6,0.626,0.626,0,0,0,1.2,1);
	this.instance_92.alpha = 0.801;

	this.instance_93 = new lib.Символ1("synched",9);
	this.instance_93.parent = this;
	this.instance_93.setTransform(248.8,-40.2,0.626,0.626,0,0,0,1.2,1);
	this.instance_93.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_93},{t:this.instance_92},{t:this.instance_91}]}).wait(198));

	// снежинка - копия: 2
	this.instance_94 = new lib.Символ1("synched",0);
	this.instance_94.parent = this;
	this.instance_94.setTransform(292.4,-82.6,0.626,0.626,0,0,0,1.2,1);
	this.instance_94.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия
	this.instance_95 = new lib.Символ1("synched",0);
	this.instance_95.parent = this;
	this.instance_95.setTransform(186.1,121.2,0.626,0.626,0,0,0,1.2,1.2);
	this.instance_95.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(198));

	// снежинка - копия: 2 - копия
	this.instance_96 = new lib.Символ1("synched",4);
	this.instance_96.parent = this;
	this.instance_96.setTransform(211.3,129.5,0.626,0.626,0,0,0,1.2,1.1);
	this.instance_96.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_97 = new lib.Символ1("synched",0);
	this.instance_97.parent = this;
	this.instance_97.setTransform(237.4,-125.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_97.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(198));

	// снежинка - копия: 2
	this.instance_98 = new lib.Символ1("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(211.3,96.4,0.626,0.626,0,0,0,1.2,1.1);
	this.instance_98.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(198));

	// снежинка - копия: 2
	this.instance_99 = new lib.Символ1("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(255.4,126.6,0.626,0.626,0,0,0,1.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(198));

	// снежинка - копия
	this.instance_100 = new lib.Символ1("synched",4);
	this.instance_100.parent = this;
	this.instance_100.setTransform(269.1,-152.9,0.626,0.626,0,0,0,1.2,1);
	this.instance_100.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(198));

	// снежинка
	this.instance_101 = new lib.Символ1("synched",14);
	this.instance_101.parent = this;
	this.instance_101.setTransform(267.2,13,0.626,0.626,0,0,0,1.2,1);
	this.instance_101.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_102 = new lib.Snow10("synched",4);
	this.instance_102.parent = this;
	this.instance_102.setTransform(310.6,182.1,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_102.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_103 = new lib.Snow10("synched",0);
	this.instance_103.parent = this;
	this.instance_103.setTransform(331,388.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_104 = new lib.Snow10("synched",0);
	this.instance_104.parent = this;
	this.instance_104.setTransform(323.4,275.6,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_104.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_105 = new lib.Snow10("synched",0);
	this.instance_105.parent = this;
	this.instance_105.setTransform(293.1,374.5,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_105.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_106 = new lib.Snow10("synched",0);
	this.instance_106.parent = this;
	this.instance_106.setTransform(280.8,244.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_107 = new lib.Snow10("synched",0);
	this.instance_107.parent = this;
	this.instance_107.setTransform(204.4,440.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_108 = new lib.Snow10("synched",0);
	this.instance_108.parent = this;
	this.instance_108.setTransform(235.9,275.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_109 = new lib.Snow10("synched",0);
	this.instance_109.parent = this;
	this.instance_109.setTransform(217.2,372.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_109).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_110 = new lib.Snow10("synched",4);
	this.instance_110.parent = this;
	this.instance_110.setTransform(197.6,251.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_110).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_111 = new lib.Snow10("synched",0);
	this.instance_111.parent = this;
	this.instance_111.setTransform(180.3,312.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_111).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_112 = new lib.Snow10("synched",0);
	this.instance_112.parent = this;
	this.instance_112.setTransform(341.9,69.3,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_112.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_112).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_113 = new lib.Snow10("synched",0);
	this.instance_113.parent = this;
	this.instance_113.setTransform(362.3,275.9,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_113).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_114 = new lib.Snow10("synched",0);
	this.instance_114.parent = this;
	this.instance_114.setTransform(354.7,162.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_114).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_115 = new lib.Snow10("synched",0);
	this.instance_115.parent = this;
	this.instance_115.setTransform(324.4,261.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_115).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_116 = new lib.Snow10("synched",0);
	this.instance_116.parent = this;
	this.instance_116.setTransform(312.1,132,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_116).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_117 = new lib.Snow10("synched",0);
	this.instance_117.parent = this;
	this.instance_117.setTransform(235.8,327.9,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_117.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_117).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_118 = new lib.Snow10("synched",0);
	this.instance_118.parent = this;
	this.instance_118.setTransform(267.3,162.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_118).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_119 = new lib.Snow10("synched",0);
	this.instance_119.parent = this;
	this.instance_119.setTransform(248.6,259.4,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_119.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_120 = new lib.Snow10("synched",0);
	this.instance_120.parent = this;
	this.instance_120.setTransform(229,-154.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_120).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_121 = new lib.Snow10("synched",0);
	this.instance_121.parent = this;
	this.instance_121.setTransform(211.6,-93.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_122 = new lib.Snow10("synched",4);
	this.instance_122.parent = this;
	this.instance_122.setTransform(318.4,-180.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_122).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_123 = new lib.Snow10("synched",0);
	this.instance_123.parent = this;
	this.instance_123.setTransform(310.9,-293.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_123).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_124 = new lib.Snow10("synched",0);
	this.instance_124.parent = this;
	this.instance_124.setTransform(280.5,-194.3,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_124.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_125 = new lib.Snow10("synched",4);
	this.instance_125.parent = this;
	this.instance_125.setTransform(268.3,-324.1,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_125.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_125).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_126 = new lib.Snow10("synched",0);
	this.instance_126.parent = this;
	this.instance_126.setTransform(191.9,-128.2,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_126.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_127 = new lib.Snow10("synched",0);
	this.instance_127.parent = this;
	this.instance_127.setTransform(223.4,-293.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_128 = new lib.Snow10("synched",4);
	this.instance_128.parent = this;
	this.instance_128.setTransform(204.7,-196.6,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_128.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(198));

	// снежинка 3 - копия: 2
	this.instance_129 = new lib.Snow10("synched",0);
	this.instance_129.parent = this;
	this.instance_129.setTransform(229,138.9,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(198));

	// снежинка 3 - копия: 2
	this.instance_130 = new lib.Snow10("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(211.6,200,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_130).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_131 = new lib.Snow10("synched",4);
	this.instance_131.parent = this;
	this.instance_131.setTransform(318.4,113,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_131).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_132 = new lib.Snow10("synched",0);
	this.instance_132.parent = this;
	this.instance_132.setTransform(310.9,-0.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_132).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия
	this.instance_133 = new lib.Snow10("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(280.5,98.9,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_133.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_133).wait(198));

	// снежинка 3 - копия: 2 - копия
	this.instance_134 = new lib.Snow10("synched",4);
	this.instance_134.parent = this;
	this.instance_134.setTransform(268.3,-30.9,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_134.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_134).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_135 = new lib.Snow10("synched",0);
	this.instance_135.parent = this;
	this.instance_135.setTransform(191.9,165,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_135.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(198));

	// снежинка 3 - копия: 2
	this.instance_136 = new lib.Snow10("synched",0);
	this.instance_136.parent = this;
	this.instance_136.setTransform(223.4,-0.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_136).wait(198));

	// снежинка 3 - копия: 2
	this.instance_137 = new lib.Snow10("synched",4);
	this.instance_137.parent = this;
	this.instance_137.setTransform(204.7,96.5,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_137.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(198));

	// снежинка 3 - копия
	this.instance_138 = new lib.Snow10("synched",4);
	this.instance_138.parent = this;
	this.instance_138.setTransform(185.1,-23.9,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_138.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_138).wait(198));

	// снежинка 3
	this.instance_139 = new lib.Snow10("synched",0);
	this.instance_139.parent = this;
	this.instance_139.setTransform(167.8,37.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_139).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_140 = new lib.Snow2("synched",0);
	this.instance_140.parent = this;
	this.instance_140.setTransform(440.5,176.7,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_140.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_140).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_141 = new lib.Snow2("synched",7);
	this.instance_141.parent = this;
	this.instance_141.setTransform(424.2,278.5,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_141.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_141).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_142 = new lib.Snow2("synched",3);
	this.instance_142.parent = this;
	this.instance_142.setTransform(408,205.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_142).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_143 = new lib.Snow2("synched",0);
	this.instance_143.parent = this;
	this.instance_143.setTransform(391.7,144.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_143).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_144 = new lib.Snow2("synched",19);
	this.instance_144.parent = this;
	this.instance_144.setTransform(375.4,205.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_144).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_145 = new lib.Snow2("synched",4);
	this.instance_145.parent = this;
	this.instance_145.setTransform(359.1,180.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_145).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_146 = new lib.Snow2("synched",9);
	this.instance_146.parent = this;
	this.instance_146.setTransform(342.8,205.2,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_146.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_147 = new lib.Snow2("synched",14);
	this.instance_147.parent = this;
	this.instance_147.setTransform(326.5,205.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_147).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_148 = new lib.Snow2("synched",4);
	this.instance_148.parent = this;
	this.instance_148.setTransform(310.2,205.2,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_148.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_148).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_149 = new lib.Snow2("synched",19);
	this.instance_149.parent = this;
	this.instance_149.setTransform(293.9,229.7,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_149.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_149).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_150 = new lib.Snow2("synched",0);
	this.instance_150.parent = this;
	this.instance_150.setTransform(440.5,-132.7,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_150.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_151 = new lib.Snow2("synched",7);
	this.instance_151.parent = this;
	this.instance_151.setTransform(424.2,-30.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_151).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_152 = new lib.Snow2("synched",3);
	this.instance_152.parent = this;
	this.instance_152.setTransform(408,-104.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_152).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_153 = new lib.Snow2("synched",0);
	this.instance_153.parent = this;
	this.instance_153.setTransform(391.7,-165.3,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_153.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_153).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_154 = new lib.Snow2("synched",19);
	this.instance_154.parent = this;
	this.instance_154.setTransform(375.4,-104.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_154).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_155 = new lib.Snow2("synched",4);
	this.instance_155.parent = this;
	this.instance_155.setTransform(359.1,-128.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_155).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_156 = new lib.Snow2("synched",9);
	this.instance_156.parent = this;
	this.instance_156.setTransform(342.8,-104.2,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_156.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_156).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_157 = new lib.Snow2("synched",14);
	this.instance_157.parent = this;
	this.instance_157.setTransform(326.5,-104.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_157).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_158 = new lib.Snow2("synched",4);
	this.instance_158.parent = this;
	this.instance_158.setTransform(310.2,-104.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_158).wait(198));

	// Слой 6 - копия: 2
	this.instance_159 = new lib.Snow2("synched",19);
	this.instance_159.parent = this;
	this.instance_159.setTransform(293.9,-79.8,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_159.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_159).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_160 = new lib.Snow2("synched",9);
	this.instance_160.parent = this;
	this.instance_160.setTransform(257.3,-87.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_160).wait(198));

	// Слой 6 - копия: 2
	this.instance_161 = new lib.Snow2("synched",0);
	this.instance_161.parent = this;
	this.instance_161.setTransform(277.7,-124.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_161).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_162 = new lib.Snow2("synched",0);
	this.instance_162.parent = this;
	this.instance_162.setTransform(440.5,5.7,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_162.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_162).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_163 = new lib.Snow2("synched",7);
	this.instance_163.parent = this;
	this.instance_163.setTransform(424.2,107.5,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_163.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_163).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_164 = new lib.Snow2("synched",3);
	this.instance_164.parent = this;
	this.instance_164.setTransform(408,34.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_164).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_165 = new lib.Snow2("synched",0);
	this.instance_165.parent = this;
	this.instance_165.setTransform(391.7,-26.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_165).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_166 = new lib.Snow2("synched",19);
	this.instance_166.parent = this;
	this.instance_166.setTransform(375.4,-165.3,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_166).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_167 = new lib.Snow2("synched",4);
	this.instance_167.parent = this;
	this.instance_167.setTransform(412.9,-209.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.instance_168 = new lib.Snow2("synched",4);
	this.instance_168.parent = this;
	this.instance_168.setTransform(313,-158.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.instance_169 = new lib.Snow2("synched",4);
	this.instance_169.parent = this;
	this.instance_169.setTransform(359.1,-189.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_169},{t:this.instance_168},{t:this.instance_167}]}).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_170 = new lib.Snow2("synched",9);
	this.instance_170.parent = this;
	this.instance_170.setTransform(342.8,-165.3,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_170).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_171 = new lib.Snow2("synched",14);
	this.instance_171.parent = this;
	this.instance_171.setTransform(326.9,-275.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_171).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_172 = new lib.Snow2("synched",9);
	this.instance_172.parent = this;
	this.instance_172.setTransform(257.3,-149,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_172).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия
	this.instance_173 = new lib.Snow2("synched",19);
	this.instance_173.parent = this;
	this.instance_173.setTransform(375.4,34.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_173).wait(198));

	// Слой 6 - копия: 2 - копия
	this.instance_174 = new lib.Snow2("synched",4);
	this.instance_174.parent = this;
	this.instance_174.setTransform(359.1,9.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_174).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_175 = new lib.Snow2("synched",9);
	this.instance_175.parent = this;
	this.instance_175.setTransform(344.6,35.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_175).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_176 = new lib.Snow2("synched",14);
	this.instance_176.parent = this;
	this.instance_176.setTransform(326.9,-75.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_176).wait(198));

	// Слой 6 - копия: 2
	this.instance_177 = new lib.Snow2("synched",14);
	this.instance_177.parent = this;
	this.instance_177.setTransform(326.5,34.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_177).wait(198));

	// Слой 6 - копия: 2
	this.instance_178 = new lib.Snow2("synched",4);
	this.instance_178.parent = this;
	this.instance_178.setTransform(310.2,34.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_178).wait(198));

	// Слой 6 - копия
	this.instance_179 = new lib.Snow2("synched",19);
	this.instance_179.parent = this;
	this.instance_179.setTransform(293.9,58.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_179).wait(198));

	// Слой 6 - копия: 2
	this.instance_180 = new lib.Snow2("synched",9);
	this.instance_180.parent = this;
	this.instance_180.setTransform(257.3,50.5,0.626,0.626,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_180).wait(198));

	// Слой 6
	this.instance_181 = new lib.Snow2("synched",0);
	this.instance_181.parent = this;
	this.instance_181.setTransform(277.7,13.9,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_181.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_181).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_182 = new lib.Символ3("synched",0);
	this.instance_182.parent = this;
	this.instance_182.setTransform(97,-4.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_182).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_183 = new lib.Символ3("synched",0);
	this.instance_183.parent = this;
	this.instance_183.setTransform(96.8,-199.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_183).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_184 = new lib.Символ3("synched",0);
	this.instance_184.parent = this;
	this.instance_184.setTransform(81.4,-222.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_184).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_185 = new lib.Символ3("synched",7);
	this.instance_185.parent = this;
	this.instance_185.setTransform(6.2,-187.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.instance_186 = new lib.Символ3("synched",7);
	this.instance_186.parent = this;
	this.instance_186.setTransform(87.6,-149.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_186},{t:this.instance_185}]}).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_187 = new lib.Символ3("synched",0);
	this.instance_187.parent = this;
	this.instance_187.setTransform(62.5,-235.3,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_187).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_188 = new lib.Символ3("synched",0);
	this.instance_188.parent = this;
	this.instance_188.setTransform(8.3,-203.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_188).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_189 = new lib.Символ3("synched",0);
	this.instance_189.parent = this;
	this.instance_189.setTransform(43.8,-229,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_189).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_190 = new lib.Символ3("synched",0);
	this.instance_190.parent = this;
	this.instance_190.setTransform(-4.2,-218.3,0.626,0.626,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_190).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_191 = new lib.Символ3("synched",4);
	this.instance_191.parent = this;
	this.instance_191.setTransform(19,-247.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_191).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_192 = new lib.Символ3("synched",0);
	this.instance_192.parent = this;
	this.instance_192.setTransform(109.4,148.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_192).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_193 = new lib.Символ3("synched",0);
	this.instance_193.parent = this;
	this.instance_193.setTransform(93.9,125.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_193).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_194 = new lib.Символ3("synched",7);
	this.instance_194.parent = this;
	this.instance_194.setTransform(100.1,198.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_194).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_195 = new lib.Символ3("synched",0);
	this.instance_195.parent = this;
	this.instance_195.setTransform(75.1,112.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_195).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_196 = new lib.Символ3("synched",0);
	this.instance_196.parent = this;
	this.instance_196.setTransform(20.8,144,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_196).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_197 = new lib.Символ3("synched",0);
	this.instance_197.parent = this;
	this.instance_197.setTransform(56.4,119,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_197).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_198 = new lib.Символ3("synched",0);
	this.instance_198.parent = this;
	this.instance_198.setTransform(8.3,129.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_198).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_199 = new lib.Символ3("synched",4);
	this.instance_199.parent = this;
	this.instance_199.setTransform(31.6,100.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_199).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_200 = new lib.Символ3("synched",0);
	this.instance_200.parent = this;
	this.instance_200.setTransform(-5.9,148.5,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_200).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_201 = new lib.Символ3("synched",0);
	this.instance_201.parent = this;
	this.instance_201.setTransform(35.9,132,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_201).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_202 = new lib.Символ3("synched",9);
	this.instance_202.parent = this;
	this.instance_202.setTransform(46.4,215.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_202).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_203 = new lib.Символ3("synched",0);
	this.instance_203.parent = this;
	this.instance_203.setTransform(-6.6,182,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_203).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_204 = new lib.Символ3("synched",0);
	this.instance_204.parent = this;
	this.instance_204.setTransform(25.2,187.9,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_204).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_205 = new lib.Символ3("synched",9);
	this.instance_205.parent = this;
	this.instance_205.setTransform(-5.9,158.5,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_205).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_206 = new lib.Символ3("synched",0);
	this.instance_206.parent = this;
	this.instance_206.setTransform(149.7,129.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_206).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_207 = new lib.Символ3("synched",0);
	this.instance_207.parent = this;
	this.instance_207.setTransform(165.4,168.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_207).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_208 = new lib.Символ3("synched",9);
	this.instance_208.parent = this;
	this.instance_208.setTransform(135.3,140.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_208).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_209 = new lib.Символ3("synched",9);
	this.instance_209.parent = this;
	this.instance_209.setTransform(153.8,174.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_209).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_210 = new lib.Символ3("synched",0);
	this.instance_210.parent = this;
	this.instance_210.setTransform(116.2,112.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_210).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_211 = new lib.Символ3("synched",0);
	this.instance_211.parent = this;
	this.instance_211.setTransform(135.3,100.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_211).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_212 = new lib.Символ3("synched",0);
	this.instance_212.parent = this;
	this.instance_212.setTransform(93.9,106.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_212).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_213 = new lib.Символ3("synched",9);
	this.instance_213.parent = this;
	this.instance_213.setTransform(118.7,121.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_213).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_214 = new lib.Символ3("synched",9);
	this.instance_214.parent = this;
	this.instance_214.setTransform(56.4,156.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_214).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_215 = new lib.Символ3("synched",0);
	this.instance_215.parent = this;
	this.instance_215.setTransform(69,141.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_215).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_216 = new lib.Символ3("synched",0);
	this.instance_216.parent = this;
	this.instance_216.setTransform(43.8,91.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_216).wait(198));

	// снежинка - копия: 2
	this.instance_217 = new lib.Символ3("synched",19);
	this.instance_217.parent = this;
	this.instance_217.setTransform(52.9,141.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_217).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_218 = new lib.Символ3("synched",9);
	this.instance_218.parent = this;
	this.instance_218.setTransform(109.4,4.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_218).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_219 = new lib.Символ3("synched",0);
	this.instance_219.parent = this;
	this.instance_219.setTransform(93.9,-18.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_219).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_220 = new lib.Символ3("synched",0);
	this.instance_220.parent = this;
	this.instance_220.setTransform(100.1,54,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_220).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_221 = new lib.Символ3("synched",9);
	this.instance_221.parent = this;
	this.instance_221.setTransform(75.1,-31.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_221).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_222 = new lib.Символ3("synched",9);
	this.instance_222.parent = this;
	this.instance_222.setTransform(20.8,0,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_222).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_223 = new lib.Символ3("synched",0);
	this.instance_223.parent = this;
	this.instance_223.setTransform(56.4,-25.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_223).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_224 = new lib.Символ3("synched",9);
	this.instance_224.parent = this;
	this.instance_224.setTransform(8.3,-14.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_224).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_225 = new lib.Символ3("synched",4);
	this.instance_225.parent = this;
	this.instance_225.setTransform(31.6,-43.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_225).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_226 = new lib.Символ3("synched",0);
	this.instance_226.parent = this;
	this.instance_226.setTransform(-5.9,4.4,0.626,0.626,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_226).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_227 = new lib.Символ3("synched",0);
	this.instance_227.parent = this;
	this.instance_227.setTransform(35.9,-12,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_227).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_228 = new lib.Символ3("synched",0);
	this.instance_228.parent = this;
	this.instance_228.setTransform(46.4,71.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_228).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_229 = new lib.Символ3("synched",0);
	this.instance_229.parent = this;
	this.instance_229.setTransform(-6.6,37.9,0.626,0.626,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_229).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_230 = new lib.Символ3("synched",0);
	this.instance_230.parent = this;
	this.instance_230.setTransform(25.2,43.8,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_230).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_231 = new lib.Символ3("synched",9);
	this.instance_231.parent = this;
	this.instance_231.setTransform(-5.9,14.4,0.626,0.626,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_231).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_232 = new lib.Символ3("synched",9);
	this.instance_232.parent = this;
	this.instance_232.setTransform(149.7,-14.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_232).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_233 = new lib.Символ3("synched",19);
	this.instance_233.parent = this;
	this.instance_233.setTransform(165.4,24.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_233).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_234 = new lib.Символ3("synched",0);
	this.instance_234.parent = this;
	this.instance_234.setTransform(135.3,-3.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_234).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_235 = new lib.Символ3("synched",0);
	this.instance_235.parent = this;
	this.instance_235.setTransform(153.8,30.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_235).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_236 = new lib.Символ3("synched",9);
	this.instance_236.parent = this;
	this.instance_236.setTransform(116.2,-31.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_236).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_237 = new lib.Символ3("synched",0);
	this.instance_237.parent = this;
	this.instance_237.setTransform(135.3,-43.9,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_237).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_238 = new lib.Символ3("synched",0);
	this.instance_238.parent = this;
	this.instance_238.setTransform(93.9,-37.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_238).wait(198));

	// снежинка - копия: 2
	this.instance_239 = new lib.Символ3("synched",0);
	this.instance_239.parent = this;
	this.instance_239.setTransform(118.7,-22.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_239).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_240 = new lib.Символ3("synched",9);
	this.instance_240.parent = this;
	this.instance_240.setTransform(56.4,12,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_240).wait(198));

	// снежинка - копия: 2
	this.instance_241 = new lib.Символ3("synched",9);
	this.instance_241.parent = this;
	this.instance_241.setTransform(69,-2.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_241).wait(198));

	// снежинка - копия: 2
	this.instance_242 = new lib.Символ3("synched",0);
	this.instance_242.parent = this;
	this.instance_242.setTransform(43.8,-52.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_242).wait(198));

	// снежинка
	this.instance_243 = new lib.Символ3("synched",0);
	this.instance_243.parent = this;
	this.instance_243.setTransform(52.9,-2.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_243).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_244 = new lib.Символ1("synched",4);
	this.instance_244.parent = this;
	this.instance_244.setTransform(175.8,-331.9,0.626,0.626,0,0,0,1.2,1);
	this.instance_244.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_244).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_245 = new lib.Символ1("synched",14);
	this.instance_245.parent = this;
	this.instance_245.setTransform(180.9,-77.7,0.626,0.626,0,0,0,1.1,1.1);
	this.instance_245.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_245).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_246 = new lib.Символ1("synched",4);
	this.instance_246.parent = this;
	this.instance_246.setTransform(161.7,-187,0.626,0.626,0,0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_246).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_247 = new lib.Символ1("synched",14);
	this.instance_247.parent = this;
	this.instance_247.setTransform(182,-296.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_247.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_247).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_248 = new lib.Символ1("synched",0);
	this.instance_248.parent = this;
	this.instance_248.setTransform(144.2,-353.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_248.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_248).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_249 = new lib.Символ1("synched",0);
	this.instance_249.parent = this;
	this.instance_249.setTransform(150.9,-101.3,0.626,0.626,0,0,0,1.2,1);
	this.instance_249.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_249).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_250 = new lib.Символ1("synched",0);
	this.instance_250.parent = this;
	this.instance_250.setTransform(46,-233.6,0.626,0.626,0,0,0,1.2,1);
	this.instance_250.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_250).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_251 = new lib.Символ1("synched",4);
	this.instance_251.parent = this;
	this.instance_251.setTransform(175.8,-132.4,0.626,0.626,0,0,0,1.2,1);
	this.instance_251.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_251).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_252 = new lib.Символ1("synched",14);
	this.instance_252.parent = this;
	this.instance_252.setTransform(180.9,121.7,0.626,0.626,0,0,0,1.1,1.2);
	this.instance_252.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_252).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_253 = new lib.Символ1("synched",4);
	this.instance_253.parent = this;
	this.instance_253.setTransform(161.7,12.5,0.626,0.626,0,0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_253).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_254 = new lib.Символ1("synched",14);
	this.instance_254.parent = this;
	this.instance_254.setTransform(182,-97,0.626,0.626,0,0,0,1.2,1);
	this.instance_254.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_254).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_255 = new lib.Символ1("synched",0);
	this.instance_255.parent = this;
	this.instance_255.setTransform(144.2,-154,0.626,0.626,0,0,0,1.2,1);
	this.instance_255.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_255).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_256 = new lib.Символ1("synched",0);
	this.instance_256.parent = this;
	this.instance_256.setTransform(150.9,98.2,0.626,0.626,0,0,0,1.2,1.1);
	this.instance_256.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_256).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_257 = new lib.Символ1("synched",0);
	this.instance_257.parent = this;
	this.instance_257.setTransform(46,-34.1,0.626,0.626,0,0,0,1.2,1);
	this.instance_257.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_257).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_258 = new lib.Символ1("synched",14);
	this.instance_258.parent = this;
	this.instance_258.setTransform(17.4,-51.8,0.626,0.626,0,0,0,1.2,1);
	this.instance_258.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_258).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_259 = new lib.Символ1("synched",0);
	this.instance_259.parent = this;
	this.instance_259.setTransform(51.6,-115.8,0.626,0.626,0,0,0,1.2,1);
	this.instance_259.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_259).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия: 2
	this.instance_260 = new lib.Символ1("synched",4);
	this.instance_260.parent = this;
	this.instance_260.setTransform(61.6,-84,0.626,0.626,0,0,0,1.2,1);
	this.instance_260.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_260).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_261 = new lib.Символ1("synched",0);
	this.instance_261.parent = this;
	this.instance_261.setTransform(27.1,-118.7,0.626,0.626,0,0,0,1.2,1);
	this.instance_261.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_261).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_262 = new lib.Символ1("synched",0);
	this.instance_262.parent = this;
	this.instance_262.setTransform(99.4,-129.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_262.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_262).wait(198));

	// снежинка - копия: 2
	this.instance_263 = new lib.Символ1("synched",9);
	this.instance_263.parent = this;
	this.instance_263.setTransform(55.6,-208.5,0.626,0.626,0,0,0,-107.5,-321.1);
	this.instance_263.alpha = 0.801;

	this.instance_264 = new lib.Символ1("synched",9);
	this.instance_264.parent = this;
	this.instance_264.setTransform(142.4,-226.1,0.626,0.626,0,0,0,1.2,1);
	this.instance_264.alpha = 0.801;

	this.instance_265 = new lib.Символ1("synched",9);
	this.instance_265.parent = this;
	this.instance_265.setTransform(82,-65.7,0.626,0.626,0,0,0,1.2,1);
	this.instance_265.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_265},{t:this.instance_264},{t:this.instance_263}]}).wait(198));

	// снежинка - копия: 2
	this.instance_266 = new lib.Символ1("synched",0);
	this.instance_266.parent = this;
	this.instance_266.setTransform(125.6,-108.1,0.626,0.626,0,0,0,1.2,1);
	this.instance_266.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_266).wait(198));

	// снежинка - копия: 2 - копия: 2 - копия
	this.instance_267 = new lib.Символ1("synched",0);
	this.instance_267.parent = this;
	this.instance_267.setTransform(19.3,95.7,0.626,0.626,0,0,0,1.2,1.2);
	this.instance_267.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_267).wait(198));

	// снежинка - копия: 2 - копия
	this.instance_268 = new lib.Символ1("synched",4);
	this.instance_268.parent = this;
	this.instance_268.setTransform(44.5,104,0.626,0.626,0,0,0,1.2,1.1);
	this.instance_268.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_268).wait(198));

	// снежинка - копия: 2 - копия: 2
	this.instance_269 = new lib.Символ1("synched",0);
	this.instance_269.parent = this;
	this.instance_269.setTransform(70.6,-151,0.626,0.626,0,0,0,1.2,1);
	this.instance_269.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_269).wait(198));

	// снежинка - копия: 2
	this.instance_270 = new lib.Символ1("synched",0);
	this.instance_270.parent = this;
	this.instance_270.setTransform(44.5,70.9,0.626,0.626,0,0,0,1.2,1.1);
	this.instance_270.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_270).wait(198));

	// снежинка - копия: 2
	this.instance_271 = new lib.Символ1("synched",0);
	this.instance_271.parent = this;
	this.instance_271.setTransform(88.6,101.1,0.626,0.626,0,0,0,1.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_271).wait(198));

	// снежинка - копия
	this.instance_272 = new lib.Символ1("synched",4);
	this.instance_272.parent = this;
	this.instance_272.setTransform(102.3,-178.4,0.626,0.626,0,0,0,1.2,1);
	this.instance_272.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_272).wait(198));

	// снежинка
	this.instance_273 = new lib.Символ1("synched",14);
	this.instance_273.parent = this;
	this.instance_273.setTransform(100.4,-12.5,0.626,0.626,0,0,0,1.2,1);
	this.instance_273.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_273).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_274 = new lib.Snow10("synched",4);
	this.instance_274.parent = this;
	this.instance_274.setTransform(143.8,156.6,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_274.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_274).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_275 = new lib.Snow10("synched",0);
	this.instance_275.parent = this;
	this.instance_275.setTransform(164.2,363.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_275).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_276 = new lib.Snow10("synched",0);
	this.instance_276.parent = this;
	this.instance_276.setTransform(156.6,250.1,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_276.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_276).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_277 = new lib.Snow10("synched",0);
	this.instance_277.parent = this;
	this.instance_277.setTransform(126.3,349,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_277.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_277).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_278 = new lib.Snow10("synched",0);
	this.instance_278.parent = this;
	this.instance_278.setTransform(114,219.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_278).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_279 = new lib.Snow10("synched",0);
	this.instance_279.parent = this;
	this.instance_279.setTransform(37.6,415.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_279).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_280 = new lib.Snow10("synched",0);
	this.instance_280.parent = this;
	this.instance_280.setTransform(69.1,250.1,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_280).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_281 = new lib.Snow10("synched",0);
	this.instance_281.parent = this;
	this.instance_281.setTransform(50.4,346.6,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_281).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_282 = new lib.Snow10("synched",4);
	this.instance_282.parent = this;
	this.instance_282.setTransform(30.8,226.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_282).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_283 = new lib.Snow10("synched",0);
	this.instance_283.parent = this;
	this.instance_283.setTransform(13.5,287.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_283).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_284 = new lib.Snow10("synched",0);
	this.instance_284.parent = this;
	this.instance_284.setTransform(175.1,43.8,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_284.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_284).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_285 = new lib.Snow10("synched",0);
	this.instance_285.parent = this;
	this.instance_285.setTransform(195.5,250.4,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_285).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_286 = new lib.Snow10("synched",0);
	this.instance_286.parent = this;
	this.instance_286.setTransform(187.9,137.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_286).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_287 = new lib.Snow10("synched",0);
	this.instance_287.parent = this;
	this.instance_287.setTransform(157.6,236.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_287).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_288 = new lib.Snow10("synched",0);
	this.instance_288.parent = this;
	this.instance_288.setTransform(145.3,106.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_288).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_289 = new lib.Snow10("synched",0);
	this.instance_289.parent = this;
	this.instance_289.setTransform(69,302.4,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_289.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_289).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_290 = new lib.Snow10("synched",0);
	this.instance_290.parent = this;
	this.instance_290.setTransform(100.5,137.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_290).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_291 = new lib.Snow10("synched",0);
	this.instance_291.parent = this;
	this.instance_291.setTransform(81.8,233.9,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_291.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_291).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_292 = new lib.Snow10("synched",0);
	this.instance_292.parent = this;
	this.instance_292.setTransform(62.2,-179.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_292).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_293 = new lib.Snow10("synched",0);
	this.instance_293.parent = this;
	this.instance_293.setTransform(44.8,-118.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_293).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_294 = new lib.Snow10("synched",4);
	this.instance_294.parent = this;
	this.instance_294.setTransform(151.6,-205.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_294).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_295 = new lib.Snow10("synched",0);
	this.instance_295.parent = this;
	this.instance_295.setTransform(144.1,-318.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_295).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_296 = new lib.Snow10("synched",0);
	this.instance_296.parent = this;
	this.instance_296.setTransform(113.7,-219.8,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_296.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_296).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_297 = new lib.Snow10("synched",4);
	this.instance_297.parent = this;
	this.instance_297.setTransform(101.5,-349.6,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_297.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_297).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_298 = new lib.Snow10("synched",0);
	this.instance_298.parent = this;
	this.instance_298.setTransform(25.1,-153.7,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_298.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_298).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_299 = new lib.Snow10("synched",0);
	this.instance_299.parent = this;
	this.instance_299.setTransform(56.6,-318.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_299).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_300 = new lib.Snow10("synched",4);
	this.instance_300.parent = this;
	this.instance_300.setTransform(37.9,-222.1,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_300.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_300).wait(198));

	// снежинка 3 - копия: 2
	this.instance_301 = new lib.Snow10("synched",0);
	this.instance_301.parent = this;
	this.instance_301.setTransform(62.2,113.4,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_301).wait(198));

	// снежинка 3 - копия: 2
	this.instance_302 = new lib.Snow10("synched",0);
	this.instance_302.parent = this;
	this.instance_302.setTransform(44.8,174.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_302).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия: 2
	this.instance_303 = new lib.Snow10("synched",4);
	this.instance_303.parent = this;
	this.instance_303.setTransform(151.6,87.5,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_303).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_304 = new lib.Snow10("synched",0);
	this.instance_304.parent = this;
	this.instance_304.setTransform(144.1,-25.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_304).wait(198));

	// снежинка 3 - копия: 2 - копия: 2 - копия
	this.instance_305 = new lib.Snow10("synched",0);
	this.instance_305.parent = this;
	this.instance_305.setTransform(113.7,73.4,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_305.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_305).wait(198));

	// снежинка 3 - копия: 2 - копия
	this.instance_306 = new lib.Snow10("synched",4);
	this.instance_306.parent = this;
	this.instance_306.setTransform(101.5,-56.4,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_306.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_306).wait(198));

	// снежинка 3 - копия: 2 - копия: 2
	this.instance_307 = new lib.Snow10("synched",0);
	this.instance_307.parent = this;
	this.instance_307.setTransform(25.1,139.5,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_307.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_307).wait(198));

	// снежинка 3 - копия: 2
	this.instance_308 = new lib.Snow10("synched",0);
	this.instance_308.parent = this;
	this.instance_308.setTransform(56.6,-25.6,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_308).wait(198));

	// снежинка 3 - копия: 2
	this.instance_309 = new lib.Snow10("synched",4);
	this.instance_309.parent = this;
	this.instance_309.setTransform(37.9,71,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_309.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_309).wait(198));

	// снежинка 3 - копия
	this.instance_310 = new lib.Snow10("synched",4);
	this.instance_310.parent = this;
	this.instance_310.setTransform(18.3,-49.4,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_310.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_310).wait(198));

	// снежинка 3
	this.instance_311 = new lib.Snow10("synched",0);
	this.instance_311.parent = this;
	this.instance_311.setTransform(1,11.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_311).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_312 = new lib.Snow2("synched",0);
	this.instance_312.parent = this;
	this.instance_312.setTransform(273.7,151.2,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_312.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_312).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_313 = new lib.Snow2("synched",7);
	this.instance_313.parent = this;
	this.instance_313.setTransform(257.4,253,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_313.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_313).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_314 = new lib.Snow2("synched",3);
	this.instance_314.parent = this;
	this.instance_314.setTransform(241.2,179.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_314).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_315 = new lib.Snow2("synched",0);
	this.instance_315.parent = this;
	this.instance_315.setTransform(224.9,118.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_315).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_316 = new lib.Snow2("synched",19);
	this.instance_316.parent = this;
	this.instance_316.setTransform(208.6,179.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_316).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_317 = new lib.Snow2("synched",4);
	this.instance_317.parent = this;
	this.instance_317.setTransform(192.3,155.3,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_317).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_318 = new lib.Snow2("synched",9);
	this.instance_318.parent = this;
	this.instance_318.setTransform(176,179.7,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_318.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_318).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_319 = new lib.Snow2("synched",14);
	this.instance_319.parent = this;
	this.instance_319.setTransform(159.7,179.7,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_319).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_320 = new lib.Snow2("synched",4);
	this.instance_320.parent = this;
	this.instance_320.setTransform(143.4,179.7,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_320.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_320).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_321 = new lib.Snow2("synched",19);
	this.instance_321.parent = this;
	this.instance_321.setTransform(127.1,204.2,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_321.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_321).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_322 = new lib.Snow2("synched",0);
	this.instance_322.parent = this;
	this.instance_322.setTransform(273.7,-158.2,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_322.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_322).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_323 = new lib.Snow2("synched",7);
	this.instance_323.parent = this;
	this.instance_323.setTransform(257.4,-56.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_323).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_324 = new lib.Snow2("synched",3);
	this.instance_324.parent = this;
	this.instance_324.setTransform(241.2,-129.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_324).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_325 = new lib.Snow2("synched",0);
	this.instance_325.parent = this;
	this.instance_325.setTransform(224.9,-190.8,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_325.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_325).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_326 = new lib.Snow2("synched",19);
	this.instance_326.parent = this;
	this.instance_326.setTransform(208.6,-129.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_326).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_327 = new lib.Snow2("synched",4);
	this.instance_327.parent = this;
	this.instance_327.setTransform(192.3,-154.1,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_327).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_328 = new lib.Snow2("synched",9);
	this.instance_328.parent = this;
	this.instance_328.setTransform(176,-129.7,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_328.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_328).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_329 = new lib.Snow2("synched",14);
	this.instance_329.parent = this;
	this.instance_329.setTransform(159.7,-129.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_329).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_330 = new lib.Snow2("synched",4);
	this.instance_330.parent = this;
	this.instance_330.setTransform(143.4,-129.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_330).wait(198));

	// Слой 6 - копия: 2
	this.instance_331 = new lib.Snow2("synched",19);
	this.instance_331.parent = this;
	this.instance_331.setTransform(127.1,-105.3,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_331.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_331).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_332 = new lib.Snow2("synched",9);
	this.instance_332.parent = this;
	this.instance_332.setTransform(90.5,-113.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_332).wait(198));

	// Слой 6 - копия: 2
	this.instance_333 = new lib.Snow2("synched",0);
	this.instance_333.parent = this;
	this.instance_333.setTransform(110.9,-150,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_333).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_334 = new lib.Snow2("synched",0);
	this.instance_334.parent = this;
	this.instance_334.setTransform(273.7,-19.8,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_334.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_334).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_335 = new lib.Snow2("synched",7);
	this.instance_335.parent = this;
	this.instance_335.setTransform(257.4,82,0.626,0.626,0,0,0,0.1,0.1);
	this.instance_335.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_335).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_336 = new lib.Snow2("synched",3);
	this.instance_336.parent = this;
	this.instance_336.setTransform(241.2,8.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_336).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_337 = new lib.Snow2("synched",0);
	this.instance_337.parent = this;
	this.instance_337.setTransform(224.9,-52.3,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_337).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_338 = new lib.Snow2("synched",19);
	this.instance_338.parent = this;
	this.instance_338.setTransform(208.6,-190.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_338).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_339 = new lib.Snow2("synched",4);
	this.instance_339.parent = this;
	this.instance_339.setTransform(246.1,-235.4,0.626,0.626,0,0,0,0.1,-0.1);

	this.instance_340 = new lib.Snow2("synched",4);
	this.instance_340.parent = this;
	this.instance_340.setTransform(146.2,-184.3,0.626,0.626,0,0,0,0.1,-0.1);

	this.instance_341 = new lib.Snow2("synched",4);
	this.instance_341.parent = this;
	this.instance_341.setTransform(192.3,-215.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_341},{t:this.instance_340},{t:this.instance_339}]}).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_342 = new lib.Snow2("synched",9);
	this.instance_342.parent = this;
	this.instance_342.setTransform(176,-190.8,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_342).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия: 2
	this.instance_343 = new lib.Snow2("synched",14);
	this.instance_343.parent = this;
	this.instance_343.setTransform(160.1,-300.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_343).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_344 = new lib.Snow2("synched",9);
	this.instance_344.parent = this;
	this.instance_344.setTransform(90.5,-174.5,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_344).wait(198));

	// Слой 6 - копия: 2 - копия: 2 - копия
	this.instance_345 = new lib.Snow2("synched",19);
	this.instance_345.parent = this;
	this.instance_345.setTransform(208.6,8.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_345).wait(198));

	// Слой 6 - копия: 2 - копия
	this.instance_346 = new lib.Snow2("synched",4);
	this.instance_346.parent = this;
	this.instance_346.setTransform(192.3,-15.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_346).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_347 = new lib.Snow2("synched",9);
	this.instance_347.parent = this;
	this.instance_347.setTransform(177.8,10,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_347).wait(198));

	// Слой 6 - копия: 2 - копия: 2
	this.instance_348 = new lib.Snow2("synched",14);
	this.instance_348.parent = this;
	this.instance_348.setTransform(160.1,-101.2,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_348).wait(198));

	// Слой 6 - копия: 2
	this.instance_349 = new lib.Snow2("synched",14);
	this.instance_349.parent = this;
	this.instance_349.setTransform(159.7,8.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_349).wait(198));

	// Слой 6 - копия: 2
	this.instance_350 = new lib.Snow2("synched",4);
	this.instance_350.parent = this;
	this.instance_350.setTransform(143.4,8.7,0.626,0.626,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_350).wait(198));

	// Слой 6 - копия
	this.instance_351 = new lib.Snow2("synched",19);
	this.instance_351.parent = this;
	this.instance_351.setTransform(127.1,33.2,0.626,0.626,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_351).wait(198));

	// Слой 6 - копия: 2
	this.instance_352 = new lib.Snow2("synched",9);
	this.instance_352.parent = this;
	this.instance_352.setTransform(90.5,25,0.626,0.626,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_352).wait(198));

	// Слой 6
	this.instance_353 = new lib.Snow2("synched",0);
	this.instance_353.parent = this;
	this.instance_353.setTransform(110.9,-11.6,0.626,0.626,0,0,0,0.1,-0.1);
	this.instance_353.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_353).wait(198));

	// FlashAICB
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#303E71").s().p("AgDAhIAAgdIgcAAIAAgHIAcAAIAAgdIAHAAIAAAdIAcAAIAAAHIgcAAIAAAdg");
	this.shape_26.setTransform(18.5,200.2,0.641,0.646);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#303E71").s().p("AglA2IAAgJIANgLQAYgVAIgKQALgMAAgLQAAgVgXAAQgPAAgKAJIgFgKQAOgLAUAAQAQAAALAKQAIAIAAANQAAANgLAOQgJAKgUATIgKAHIAAABIA1AAIAAAMg");
	this.shape_27.setTransform(12.8,200.5,0.641,0.646);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#303E71").s().p("AAEA1IAAhcIgUAKIgDgLIAZgMIAOAAIAABpg");
	this.shape_28.setTransform(7.7,200.6,0.641,0.646);

	this.instance_354 = new lib.Path();
	this.instance_354.parent = this;
	this.instance_354.setTransform(13.4,200.3,0.566,0.566,0,0,0,15.9,15.9);
	this.instance_354.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_354},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(198));

	// FlashAICB
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("A6azkMA0agA+MAAbApFMg01gA+g");
	this.shape_29.setTransform(162.1,118.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2F3D72").s().p("A6aTlMAAAgnJMA0agA+MAAbApFg");
	this.shape_30.setTransform(162.1,118.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(184,184,184,0)").ss(1,1,1).p("AnBjjIODAAIAAHHIuDAAg");
	this.shape_31.setTransform(45,117.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnBDkIAAnHIODAAIAAHHg");
	this.shape_32.setTransform(45,117.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.8,-220.4,376.7,788.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./logo.png", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;