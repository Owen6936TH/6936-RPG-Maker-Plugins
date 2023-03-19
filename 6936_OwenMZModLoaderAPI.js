/*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] Mod Loader API For RPG Maker MZ Created By Owen6936
 * @author Owen6936
 * @url https://store.steampowered.com/search/?developer=Owen6936
 * @help
  * ตอนนี้ขี้เกียจอยู่ เดี๋ยวมาเขียน Document ทีหลัง XD
  
 * ----- Change Log -----
 * - 1.0 Release Plugin
 */
 
//---------- Declare ----------
 
if (Utils.isNwjs()) {
	var fs = require('fs');
}

JSON.OwenTryParse = function (json) {
	try {
		return JSON.parse(json)
	} catch(e){
		return json
	}
}

function Owen_MZ_ModLoader() {
    this.initialize(...arguments);
}

var _6936_OwenMod_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	_6936_OwenMod_Scene_Boot_start.call(this);
	if (Utils.isNwjs()) {
		OwenModManager.LoadData();
	}
}

//---------- Mod Loader Class ----------

Owen_MZ_ModLoader.prototype.initialize = function() {
	this.InstalledMod = [];
	if (Utils.isNwjs()) {
		var ModFolder = fs.readdirSync('./mods/').filter((item) => {
			return fs.statSync('./mods/' + item).isDirectory();
		});
		for (i = 0; i < ModFolder.length ; i++) {
			var dict = {};
			dict.folder = ModFolder[i]
			if (fs.existsSync('./mods/' + ModFolder[i] + '/ModData.json' )) {
				dict.modID  = JSON.OwenTryParse(fs.readFileSync('./mods/' + ModFolder[i] + '/ModData.json', 'utf8')).ModID || ModFolder[i]
			} else {
				dict.modID = ModFolder[i]
			}
			dict.enable = true
			this.InstalledMod.push(dict);
		}
		this.LoadGameFont();
	}
};

Owen_MZ_ModLoader.prototype.GetInstalledModFolder = function() {
	return this.InstalledMod.map(ele => ele.folder);
}

Owen_MZ_ModLoader.prototype.GetInstalledModID = function() {
	return this.InstalledMod.map(ele => ele.modID);
}

Owen_MZ_ModLoader.prototype.GetModDatabaseStartID = function(ModID, Database) {
	switch(Database) {
		case "actor":
			var ModDatabase = 'actorData'
			break;
		case "class":
			var ModDatabase = 'classData'
			break;
		case "skill":
			var ModDatabase = 'skillData'
			break;
		case "item":
			var ModDatabase = 'itemData'
			break;
		case "weapon":
			var ModDatabase = 'weaponData'
			break;
		case "armor":
			var ModDatabase = 'armorData'
			break;
		case "enemy":
			var ModDatabase = 'enemyData'
			break;
		case "troop":
			var ModDatabase = 'troopData'
			break;
		case "state":
			var ModDatabase = 'stateData'
			break;
		case "animation":
			var ModDatabase = 'animationData'
			break;
		case "tileset":
			var ModDatabase = 'tilesetData'
			break;
		case "commonEvent":
			var ModDatabase = 'commonEventData'
			break;
		case "mapInfo":
			var ModDatabase = 'mapInfoData'
			break;
		default:
			var ModDatabase = 'itemData'
			break;
	}
	return this.InstalledMod[this.GetInstalledModID().indexOf(ModID)][ModDatabase]
}


Owen_MZ_ModLoader.prototype.LoadData = function() {
	for (i = 0; i < this.InstalledMod.length ; i++) {
		if (OwenModManager.InstalledMod[i].enable) {
			this.LoadDatabase(i, 'actor');
			this.LoadDatabase(i, 'class');
			this.LoadDatabase(i, 'skill');
			this.LoadDatabase(i, 'item');
			this.LoadDatabase(i, 'weapon');
			this.LoadDatabase(i, 'armor');
			this.LoadDatabase(i, 'enemy');
			this.LoadDatabase(i, 'troop');
			this.LoadDatabase(i, 'state');
			this.LoadDatabase(i, 'animation');
			this.LoadDatabase(i, 'tileset');
			this.LoadDatabase(i, 'commonEvent');
			this.LoadDatabase(i, 'mapInfo');
			this.LoadSystemDatabase(i);
		}
	}
}

Owen_MZ_ModLoader.prototype.LoadSystemDatabase = function(i) {
	if (fs.existsSync('./mods/' + this.GetInstalledModFolder()[i] + '/data/System.json')) {
		var AdditionalData = JSON.parse(fs.readFileSync('./mods/' + this.GetInstalledModFolder()[i] + '/data/System.json'));
		setObjectValue($dataSystem,AdditionalData)
	}
}
	
Owen_MZ_ModLoader.prototype.LoadDatabase = function(i, database) {
	switch(database) {
		case "actor":
			var dir = '/data/Actors.json'
			var ModIDRef = 'actorData'
			var gamedata = $dataActors;
			break;
		case "class":
			var dir = '/data/Classes.json'
			var ModIDRef = 'classData'
			var gamedata = $dataClasses;
			break;
		case "skill":
			var dir = '/data/Skills.json'
			var ModIDRef = 'skillData'
			var gamedata = $dataSkills;
			break;
		case "item":
			var dir = '/data/Items.json'
			var ModIDRef = 'itemData'
			var gamedata = $dataItems;
			break;
		case "weapon":
			var dir = '/data/Weapons.json'
			var ModIDRef = 'weaponData'
			var gamedata = $dataWeapons;
			break;
		case "armor":
			var dir = '/data/Armors.json'
			var ModIDRef = 'armorData'
			var gamedata = $dataArmors;
			break;
		case "enemy":
			var dir = '/data/Enemies.json'
			var ModIDRef = 'enemyData'
			var gamedata = $dataEnemies;
			break;
		case "troop":
			var dir = '/data/Troops.json'
			var ModIDRef = 'troopData'
			var gamedata = $dataTroops;
			break;
		case "state":
			var dir = '/data/States.json'
			var ModIDRef = 'stateData'
			var gamedata = $dataStates;
			break;
		case "animation":
			var dir = '/data/Animations.json'
			var ModIDRef = 'animationData'
			var gamedata = $dataAnimations;
			break;
		case "tileset":
			var dir = '/data/Tilesets.json'
			var ModIDRef = 'tilesetsData'
			var gamedata = $dataTilesets;
			break;
		case "commonEvent":
			var dir = '/data/CommonEvents.json'
			var ModIDRef = 'commonEventData'
			var gamedata = $dataCommonEvents;
			break;
		case "mapInfo":
			var dir = '/data/MapInfos.json'
			var ModIDRef = 'mapInfoData'
			var gamedata = $dataMapInfos;
			break;
		default:
			var dir = '/data/Items.json'
			var ModIDRef = 'itemData'
			var gamedata = $dataItems;
			break;
	}
	this.InstalledMod[i][ModIDRef] = gamedata.length
	if (fs.existsSync('./mods/' + this.GetInstalledModFolder()[i] + dir )) {
		var AdditionalData = JSON.parse(fs.readFileSync('./mods/' + this.GetInstalledModFolder()[i] + dir ));
		for (n = 0; n < AdditionalData.length ; n++) {
			if (typeof AdditionalData[n] === "object" && AdditionalData[n] !== null) {
				if (AdditionalData[n].hasOwnProperty('id')) {
					var id = eval(AdditionalData[n].id)
					if (!gamedata.hasOwnProperty(id)) {
						gamedata[id] = {}
					}
					this.setObjectValue((gamedata[id]),(AdditionalData[n]));
					DataManager.extractMetadata(gamedata[id])
				}
			}
		}
	}
}
                                                            
Owen_MZ_ModLoader.prototype.setObjectValue = function(bigObj, smallObj) {
	for (const key in smallObj) {
		if (JSON.stringify(smallObj[key]) == '{}') {
			bigObj[key] = {}
		} else if (JSON.stringify(smallObj[key]) == '[]') {
			bigObj[key] = []
		} else {
			if (typeof smallObj[key] === "object" && smallObj[key] !== null) {
				if (!bigObj.hasOwnProperty(key)) {
					if (Array.isArray(smallObj[key])) {
						bigObj[key] = []
					} else {
						bigObj[key] = {}	
					}
				}
				this.setObjectValue(bigObj[key],smallObj[key])
			} else {
				try {
					if (smallObj[key] == '') {
						bigObj[key] = smallObj[key]
					} else {
						bigObj[key] = eval(smallObj[key])
					}
				} catch (err) {
					bigObj[key] = smallObj[key]
				}
			}
		}
	}
}

//---------- Load Font ----------
Owen_MZ_ModLoader.prototype.LoadGameFont = function() {
	for (i = 0; i < this.GetInstalledModFolder().length ; i++) {
		if (fs.existsSync('./mods/' + this.GetInstalledModFolder()[i] + '/ModData.json' )) {
			var ModData = JSON.parse(fs.readFileSync('./mods/' + this.GetInstalledModFolder()[i] + '/ModData.json', 'utf8'));
			if (ModData.hasOwnProperty('ChangeGameFont')) {
				FontManager.startLoading('rmmz-mainfont', './mods/'+ this.GetInstalledModFolder()[i] +'/fonts/' +ModData.ChangeGameFont);
			}
			if (ModData.hasOwnProperty('ChangeNumberFont')) {
				FontManager.startLoading('rmmz-numberfont', './mods/'+ this.GetInstalledModFolder()[i] +'/fonts/' +ModData.ChangeNumberFont);
			}
		}
	}
};

OwenModManager = new Owen_MZ_ModLoader();


//---------- Load Image ----------
ImageManager.loadBitmap = function(folder, filename) {
    if (filename) {
        const url = folder + Utils.encodeURI(filename) + ".png";
		for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
			if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/' + url)) {
				return this.loadBitmapFromUrl('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/' + url);
			}
		}
        return this.loadBitmapFromUrl(url);
    } else {
        return this._emptyBitmap;
    }
};

//---------- Load Audio ----------
AudioManager.createBuffer = function(folder, name) {
    const ext = this.audioFileExt();
    const url = this._path + folder + Utils.encodeURI(name) + ext;
	var FinalUrl = url
	for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
		if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/' + url)) {
			var FinalUrl = ('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/' + url);
		}
	}
    const buffer = new WebAudio(FinalUrl);
    buffer.name = name;
    buffer.frameCount = Graphics.frameCount;
    return buffer;
};

//---------- Play Movie ----------
Video.play = function(src) {
	var FinalUrl = src
	for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
		if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/' + src)) {
			var FinalUrl = ('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/' + src);
		}
	}
    this._element.src = FinalUrl;
    this._element.onloadeddata = this._onLoad.bind(this);
    this._element.onerror = this._onError.bind(this);
    this._element.onended = this._onEnd.bind(this);
    this._element.load();
    this._loading = true;
};

//---------- Effekseer Animation ----------
EffectManager.makeUrl = function(filename) {
	
	for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
		if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/effects/' + Utils.encodeURI(filename) + ".efkefc")) {
			return ('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/effects/' + Utils.encodeURI(filename) + ".efkefc");
		}
	}
    return "effects/" + Utils.encodeURI(filename) + ".efkefc";
};

//---------- Load Map ----------
DataManager.loadDataFile = function(name, src) {
    const xhr = new XMLHttpRequest();
	var url = "data/" + src;
	if (name == '$dataMap') {
		var MapFile = fs.readdirSync('./data').filter((item) => {
				return (fs.statSync('./data/' + item).isFile()) && item.endsWith('.json') && item.startsWith('Map');
		});
		var VanillaMapCount = MapFile.length - 1
		
		if (VanillaMapCount >= parseFloat(src.replace(/[^0-9]/g, ""))) {
			for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
				if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/data')) {
					var MapFile = fs.readdirSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/data/').filter((item) => {
						return (fs.statSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/data/' + item).isFile()) && item.endsWith('.json') && item.startsWith('Map');
					});
					var MapFile = MapFile.map(str => parseFloat(str.replace(/[^0-9]/g, "")));
					if (MapFile.includes( parseFloat(src.replace(/[^0-9]/g, "")))) {
						var url = './mods/' + OwenModManager.GetInstalledModFolder()[i] + '/data/' + src;
						break;
					}
				}
			}
		} else {
			var MapModIndex = OwenModManager.InstalledMod.map(ele => ele.mapInfoData).map((element, index) => {{if(element > VanillaMapCount)return index;} return -1;}).filter(index => index !== -1)[0]
			var src = ('./mods' + OwenModManager.GetInstalledModFolder()[MapModIndex] + '/data/CustomMap/' + (parseFloat(src.replace(/[^0-9]/g, "")) - OwenModManager.InstalledMod.map(ele => ele.mapInfoData)[MapModIndex] + 1) + '.json')
		}
	}
	
    window[name] = null;
    xhr.open("GET", url);
    xhr.overrideMimeType("application/json");
    xhr.onload = () => this.onXhrLoad(xhr, name, src, url);
    xhr.onerror = () => this.onXhrError(name, src, url);
    xhr.send();
};


DataManager.onLoad = function(object) {
    if (this.isMapObject(object)) {
        this.extractMetadata(object);
        this.extractArrayMetadata(object.events);
    } else {
        this.extractArrayMetadata(object);
    }
};

//---------- Load Plugin ----------
PluginManager.makeUrl = function(filename) {
	for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
		if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/js/plugins/' + filename + '.js')) {
			return './mods/' + OwenModManager.GetInstalledModFolder()[i] + "/js/plugins/"+ Utils.encodeURI(filename) + ".js";
		}
	}
    return "js/plugins/" + Utils.encodeURI(filename) + ".js";
};

for (i = 0; i < OwenModManager.GetInstalledModFolder().length ; i++) {
	if (fs.existsSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/js/plugins.json')) {
		var ModPlugin = JSON.parse(fs.readFileSync('./mods/' + OwenModManager.GetInstalledModFolder()[i] + '/js/plugins.json', 'utf8'));
		for (const plugin of ModPlugin) {
			const pluginName = Utils.extractFileName(plugin.name);
			if (plugin.status && !PluginManager._scripts.includes(pluginName)) {
				PluginManager.setParameters(pluginName, plugin.parameters);
				PluginManager.loadScript(plugin.name);
				PluginManager._scripts.push(pluginName);
				$plugins.push(plugin);
			}
		}
	}
}