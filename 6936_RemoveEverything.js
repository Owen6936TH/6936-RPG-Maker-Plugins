/*:
 * @target MZ
 * @plugindesc [Version 1.2] [RPG Maker MZ] Remove Many Things From Your Game
 * @author Owen6936
 * @url https://store.steampowered.com/search/?developer=Owen6936
 * @help
 *
 * English Below
 * ====================
 * TH
 * ====================
 * ----- แนะนำปลั๊กอิน -----
 * ปลั๊กอินนี้จะช่วยลบสิ่งต่าง ๆ ที่ท่านไม่ต้องการออกจากหน้าเมนูของท่าน
 * เช่น หลอด HP, MP, TP หรือ Level และ Class
 * ซึ่งปลั๊กอินนี้จะเหมาะสำหรับเกมของท่านเป็นอย่างมาก ในกรณีที่ท่านต้องการทำเกมผี
 * เพราะเกมแนวนี้ ที่ไม่มีความจำเป็นที่จะต้องแจ้งข้อมูลเหล่านั้นให้ผู้เล่นทราบ
 *  
 * ----- ข้อที่ควรรู้ -----
  * ปลั๊กอินนี้เป็นเวอร์ชั่นที่ทถูกสร้างมาเพื่อ RPG Maker MZ และไม่สามารถใช้ได้ใน RPG Maker MV ได้
 * เพราะ RPG Maker MZ คือ RM เวอร์ชั่นที่ดีที่สุด และอยู่เหนือ RM เวอร์ชั่นอื่นทั่วโลก
 * หากต้องการใช้ปลั๊กอินนี้ในเวอร์ชั่น MV ท่านสามารถดาวน์โหลดของเวอร์ชั่น MV ได้ที่ https://github.com/Owen6936TH/6936-RPG-Maker-Plugin
 * และปลั๊กอินนี้ถูกออกแบบมาให้ช่วยลบข้อมูลต่าง ๆ ออกจากหน้า Menu
 * ของเอนจิ้นแบบ Vanila (ไม่ได้มีการลงปลั๊กอินหรือถูกปรับแต่งอะไรเพิ่มเติม)
 * ทางผู้จัดทำไม่ขอรับประกันว่าปลั๊กอินนี้จะใช้ร่วมกับปลั๊กอินอื่นที่มีหน้าที่จัดการเกี่ยวกับหน้า Menu ได้หรือไม่
 *
 * หากท่านนำปลั๊กอินนี้ไปใช้ ขอความกรุณาให้เครดิตผู้จัดทำปลั๊กอินนี้ในเกมของท่านด้วย
 * ขอบพระคุณเป็นอย่างสูง
 * 
 * ----- Parameter -----
 * Remove HP = ลบหลอด HP
 * Remove MP = ลบหลอด MP
 * Remove Class = ลบ Class
 * Remove Level = ลบ Level
 * Remove EXP Goal = ปิดการแสดงตัวเลข EXP ที่มีอยู่ และที่ต้องการเพื่อไปสู่เลเวลถัดไป ในหน้า Status
 * RemoveCommandRemember = ลบการตั้งค่า Command Rember ออกจากหน้าการตั้งค่า
 *
 * ----- Changelog -----
 * Version 1.2
 * - สามารถลบตัวเลือก Command Remember จากหน้าการตั้งค่าได้
 * Version 1.1
 * - สามารถลบหน้าต่าง Gold ได้
 * - สามารถลบหมวดหมู่ อาวุธ และ ชุดเกราะ ออกจากหน้า Item ได้
 * Version 1.0
 * - ปล่อยปลั๊กอิน
 *
 * ====================
 * EN
 * ====================
 * ----- Introduction -----
 * This plugin will help remove anything you don't want from your menu screen.
 * such as HP, MP, TP, Level and Class.
 * This plugin is very suitable for your game. In case you want to make a horror game
 * Because these game genre don't need to let player know these information
 *
 * -----  Things you should know -----
 * This plugin is works only in RPG Maker MZ.
 * MV Version is avaliable at https://github.com/Owen6936TH/6936-RPG-Maker-Plugins
 *
 * This plugin is designed to help you remove any information from the Menu screen.
 * in vanila engine (no plugins or tweaks added)
 * The author does not guarantee that this plugin will work with other plugins that manage the Menu screen or not.
 *
 * Please give credit to the creators of this plugin in your game.
 * Thank you very much
 *
 * ----- Parameter -----
 * (No further explanation needed. Go experience parameter yourself.)
 *
 * ----- Changelog -----
 * Version 1.2
 * - Command Remember from option window can be hidden.
 * Version 1.1
 * - Gold window can be hidden.
 * - Weapon and Armor categories can be hidden.
 * Version 1.0
 * - Release plugin.
 *
 * @param RemoveHP
 * @type boolean
 * @text Remove HP
 * @desc If True, It will remove Hp Bar.
 * @default true
 *
 * @param RemoveMP
 * @type boolean
 * @text Remove MP
 * @desc If True, It will remove Mp Bar.
 * @default true
 *
 * @param RemoveTP
 * @type boolean
 * @text Remove TP
 * @desc If True, It will remove Tp Bar.
 * @default true
 *
 * @param RemoveClass
 * @type boolean
 * @text Remove Class
 * @desc If True, It will remove Player Class.
 * @default true
 *
 * @param RemoveLevel
 * @type boolean
 * @text Remove Level
 * @desc If True, It will remove Player Level.
 * @default true
 *
 * @param RemoveEXPGoal
 * @type boolean
 * @text Remove EXP Goal
 * @desc If True, It will not display Exp goal to next Level.
 * @default true
 *
 * @param RemoveGold
 * @type boolean
 * @text Remove Gold
 * @desc If True, It will remove Gold Window from Menu Screen.
 * @default true
 *
 * @param RemoveItemCategory
 * @type boolean
 * @text Remove Weapon and Armor Category
 * @desc If True, It will remove Weapon and Armor Category from Item Screen.
 * @default true
 *
 * @param RemoveCommandRemember
 * @type boolean
 * @text Remove Command Remember
 * @desc If True, It will remove Command Remember from settings menu.
 * @default true
 */
////----- Declare Variable -----

var _6936 = _6936 || {};
_6936.RemoveEverything = _6936.RemoveEverything || {};
_6936.RemoveEverything.parameters = PluginManager.parameters('6936_RemoveEverything');

_6936.RemoveEverything.RemoveHP = (_6936.RemoveEverything.parameters["RemoveHP"] === "true");
_6936.RemoveEverything.RemoveMP = (_6936.RemoveEverything.parameters["RemoveMP"] === "true");
_6936.RemoveEverything.RemoveTP = (_6936.RemoveEverything.parameters["RemoveTP"] === "true");
_6936.RemoveEverything.RemoveClass = (_6936.RemoveEverything.parameters["RemoveClass"] === "true");
_6936.RemoveEverything.RemoveLevel = (_6936.RemoveEverything.parameters["RemoveLevel"] === "true");
_6936.RemoveEverything.RemoveEXPGoal = (_6936.RemoveEverything.parameters["RemoveEXPGoal"] === "true");
_6936.RemoveEverything.RemoveGold = (_6936.RemoveEverything.parameters["RemoveGold"] === "true");
_6936.RemoveEverything.RemoveItemCategory = (_6936.RemoveEverything.parameters["RemoveItemCategory"] === "true");
_6936.RemoveEverything.RemoveCommandRemember = (_6936.RemoveEverything.parameters["RemoveCommandRemember"] === "true");


var _6936_RemoveEverything_StatusBase_drawActorClass = Window_StatusBase.prototype.drawActorClass;
var _6936_RemoveEverything_Window_StatusBase_drawActorLevel = Window_StatusBase.prototype.drawActorLevel;
var _6936_RemoveEverything_Window_Status_drawExpInfo = Window_Status.prototype.drawExpInfo;
var _6936_RemoveEverything_Scene_Menu_createGoldWindow = Scene_Menu.prototype.createGoldWindow;
var _6936_RemoveEverything_Window_ItemCategory_maxCols = Window_ItemCategory.prototype.maxCols ;
var _6936_RemoveEverything_Window_ItemCategory_makeCommandList = Window_ItemCategory.prototype.makeCommandList;

//----- Remove HP MP -----

Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
	if (!_6936.RemoveEverything.RemoveHP) {this.placeGauge(actor, "hp", x, y)};
	if (!_6936.RemoveEverything.RemoveMP) {this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight())};
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    }
};

//----- Remove Class -----

Window_StatusBase.prototype.drawActorClass = function(actor, x, y, width) {
	if (!_6936.RemoveEverything.RemoveClass) {_6936_RemoveEverything_StatusBase_drawActorClass.call(this,actor, x, y, width)}; 
};

//----- Remove Level -----

Window_StatusBase.prototype.drawActorLevel = function(actor, x, y) {
    if (!_6936.RemoveEverything.RemoveLevel) {_6936_RemoveEverything_Window_StatusBase_drawActorLevel.call(this,actor, x, y)}; 
};


Window_Status.prototype.drawExpInfo = function(x, y) {
	if (!_6936.RemoveEverything.RemoveEXPGoal) {_6936_RemoveEverything_Window_Status_drawExpInfo.call(this, x, y)}; 
};

//----- Remove Gold -----

Scene_Menu.prototype.createGoldWindow = function() {
	if (!_6936.RemoveEverything.RemoveGold) {_6936_RemoveEverything_Scene_Menu_createGoldWindow.call(this)}; 
};

//----- Remove Item Category -----

Window_ItemCategory.prototype.maxCols = function() {
	if (!_6936.RemoveEverything.RemoveItemCategory) {
		return _6936_RemoveEverything_Window_ItemCategory_maxCols.call(this);
		} else {
		return 2
	};
};

Window_ItemCategory.prototype.makeCommandList = function() {
	if (!_6936.RemoveEverything.RemoveItemCategory) {
		_6936_RemoveEverything_Window_ItemCategory_makeCommandList.call(this);
		} else {
		this.addCommand(TextManager.item,    'item');
		this.addCommand(TextManager.keyItem, 'keyItem');
	};
   
};

Window_Options.prototype.addGeneralOptions = function() {
    this.addCommand(TextManager.alwaysDash, 'alwaysDash');
	if (!_6936.RemoveEverything.RemoveCommandRemember) {
		this.addCommand(TextManager.commandRemember, 'commandRemember');
	}
};