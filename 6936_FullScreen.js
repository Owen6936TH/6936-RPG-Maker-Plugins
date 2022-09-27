/*:
 * @target MZ
 * @plugindesc [Version 1.0] [RPG Maker MZ] Make your game launch in full screen
 * @author Owen6936
 * @url https://store.steampowered.com/search/?developer=Owen6936
 * @help
 *
 * English Below
 * ====================
 * TH
 * ====================
  * ----- แนะนำปลั๊กอิน -----
 * เมื่อเปิดเกมมา ปลั๊กอินนี้จะทำให้เกมเป็นขนาดเต็มจอ โดยที่ผู้เล่นไม่ต้องกด F4
 *  
 * ----- ข้อที่ควรรู้ -----
  * ปลั๊กอินนี้เป็นเวอร์ชั่นที่ใช้ได้ทั้ง RPG Maker MV และ RPG Maker MZ
 * ท่านสามารถดาวน์โหลดปลั๊กอินอื่น ๆ ได้ที่ https://github.com/Owen6936TH/6936-RPG-Maker-Plugins
 *
 * หากท่านนำปลั๊กอินนี้ไปใช้ ขอความกรุณาให้เครดิตผู้จัดทำปลั๊กอินนี้ในเกมของท่านด้วย
 * ขอบพระคุณเป็นอย่างสูง
 *
 * ====================
 * EN
 * ====================
 * ----- Introduction -----
 * This plugin will make the game launch in full screen. Player don't have to press F4.
 *
 * -----  Things you should know -----
 * This plugin is works for both RPG Maker MV and RPG Maker MZ.
 * You can download other plugins at https://github.com/Owen6936TH/6936-RPG-Maker-Plugins
 *
 * Please give credit to the creators of this plugin in your game.
 * Thank you very much
 *
 */
 
var _6936_FullScreen_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	_6936_FullScreen_Scene_Boot_start.call(this);
	Graphics._requestFullScreen();
};