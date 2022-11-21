 /*:
 * @target MZ
 * @plugindesc [Version 1.0] [RPG Maker MZ] Let player know when new version is avaliable
 * @author Owen6936
 * @url https://store.steampowered.com/search/?developer=Owen6936
 * @help
 *
 * English Below
 * ====================
 * TH
 * ====================
  * ----- แนะนำปลั๊กอิน -----
 * ปลั๊กอินนี้จะช่วยเตือนผู้เล่นว่า
 * ตัวเกมที่คุณเล่นอยู่ในขณะนี้ เป็นตัวเกมคนละเวอร์ชั่นกับตัวที่ทางผู้พัฒนาได้อัพโหลดไว้ล่าสุด
 * เพื่อให้ผู้เล่นได้รับประสบการณ์ที่ดีที่สุดและสดใหม่อยู่เสมอ
 *  
 * ----- ข้อที่ควรรู้ -----
  * ปลั๊กอินนี้เป็นเวอร์ชั่นที่ใช้ได้ทั้ง RPG Maker MV และ RPG Maker MZ
 * ท่านสามารถดาวน์โหลดปลั๊กอินอื่น ๆ ได้ที่ https://github.com/Owen6936TH/6936-RPG-Maker-Plugins
 *
 * ท่านจำเป็นต้องโฮสต์เว็บไซต์ เพื่อทำ JSON API ของท่านเอง
 *
 * หากท่านนำปลั๊กอินนี้ไปใช้ ขอความกรุณาให้เครดิตผู้จัดทำปลั๊กอินนี้ในเกมของท่านด้วย
 * ขอบพระคุณเป็นอย่างสูง
 *
 * ----- Parameter -----
 * Current Version = เวอร์ชั่นขอตัวเกมในปัจจุบัน
 * Warn Text = ข้อความที่ขึ้นเตือนเมื่อตัวเกมมีเวอร์ชั่นที่ใหม่กว่า
 * API Link = URL ของเว็บ API
 * Api Key = Key ของ  API ที่เก็บข้อมูลเวอร์ชั่นล่าสุดของเกม
 * Update Link = ลิงก์ดาวน์โหลดเกมสำหรับเวอร์ชั่นในอนาคต (จำเป็นต้องใช้ลิงก์เดิม)
 * Show Update Link = โชว์ลิงก์ดาวน์โหลดเกมเวอร์ชั่นล่าสุดให้กับผู้เล่น
 * Force New Version = บังคับให้ผู้เล่นไปโหลดเวอร์ชั่นล่าสุดก่อน โดยการปิดเกมหนี หากไม่ยอมไปดาวน์โหลด
 * Soft Force New Version = เกมจะปิดเมื่อผู้เล่นเลือกที่จะดาวน์โหลดเกมเวอร์ชั่นล่าสุด
 *
 * ====================
 * EN
 * ====================
 * ----- Introduction -----
 * This plugin will remind players that
 * The game you are currently playing It is a different version of the game that the developer has uploaded recently.
 * To provide players with the best and freshest experience alway
 *
 * -----  Things you should know -----
 * This plugin is works for both RPG Maker MV and RPG Maker MZ.
 * You can download other plugins at https://github.com/Owen6936TH/6936-RPG-Maker-Plugins.
 *
 * You need to host a website to make your own JSON API.
 *
 * Please give credit to the creators of this plugin in your game.
 * Thank you very much
 *
 * ----- Parameter -----
 * (No further explanation needed. Go experience parameter yourself.)
 *
 * @param CurrentVersion
 * @type text
 * @text Current Version
 * @desc Current Game Version.
 * @default 1.0
 *
 * @param WarnText
 * @type note
 * @text Warn Text
 * @desc Text that display when warning player that new version avaliable.
 * @default "ตัวเกมที่คุณเล่นอยู่ในขณะนี้ เป็นตัวเกมคนละเวอร์ชั่นกับตัวที่ทางผู้พัฒนาได้อัพโหลดไว้ล่าสุด\nต้องการไปยังหน้าดาวน์โหลดหรือไม่"
 * 
 * @param APILink
 * @type text
 * @text API Link
 * @desc URL that lead to API Website.
 * @default https://owen6936th.github.io/Github-Page-Testing/CheckGameUpdateDemo.json
 *
 * @param ApiKey
 * @type text
 * @text Api Key
 * @desc Key from API that contain data about current version
 * @default CurrentVersion
 *
 * @param UpdateLink
 * @type text
 * @text Update Link
 * @desc URL that lead to Update Website.
 * @default http://irpg.in.th/thread-3607.html
 * 
 * @param ShowUpdateLink
 * @type boolean
 * @text Show Update Link
 * @desc If True, The game will show update link to player
 * @default true
 * @on Yes
 * @off No
 *
 * @param ForceNewVersion
 * @type boolean
 * @text Force New Version
 * @desc If True, The game will not let player play game if that was not correct version
 * @default false
 * @on Yes
 * @off No
 * 
 * @param SoftForceNewVersion
 * @type boolean
 * @text Soft Force New Version
 * @desc If True, The game will close when player go to download link.
 * @default true
 * @on Yes
 * @off No
*/

var _6936 = _6936 || {};
_6936.CheckForUpdate = _6936.CheckForUpdate || {};
_6936.CheckForUpdate.parameters = PluginManager.parameters('6936_CheckForUpdate');

_6936.CheckForUpdate.CurrentVersion = _6936.CheckForUpdate.parameters["CurrentVersion"]
_6936.CheckForUpdate.WarnText = JSON.parse(_6936.CheckForUpdate.parameters["WarnText"])
_6936.CheckForUpdate.APILink = _6936.CheckForUpdate.parameters["APILink"]
_6936.CheckForUpdate.ApiKey = _6936.CheckForUpdate.parameters["ApiKey"]
_6936.CheckForUpdate.UpdateLink = _6936.CheckForUpdate.parameters["UpdateLink"]
_6936.CheckForUpdate.ShowUpdateLink = (_6936.CheckForUpdate.parameters["ShowUpdateLink"] == "true");
_6936.CheckForUpdate.ForceNewVersion = (_6936.CheckForUpdate.parameters["ForceNewVersion"] == "true");
_6936.CheckForUpdate.SoftForceNewVersion = (_6936.CheckForUpdate.parameters["SoftForceNewVersion"] == "true");

var https = require('https')
https.get((_6936.CheckForUpdate.APILink), res => {
	var data = [];
	
	res.on('data', chunk => {
		data.push(chunk);
	});
	
	res.on('end', () => {
		var output = JSON.parse(Buffer.concat(data).toString());
		if (output[_6936.CheckForUpdate.ApiKey] != _6936.CheckForUpdate.CurrentVersion){
			if (_6936.CheckForUpdate.ShowUpdateLink) {
				if (confirm(_6936.CheckForUpdate.WarnText)) {
					open(_6936.CheckForUpdate.UpdateLink);
					if (_6936.CheckForUpdate.SoftForceNewVersion || _6936.CheckForUpdate.ForceNewVersion) {
						close();
					}
				} else {
					if (_6936.CheckForUpdate.ForceNewVersion) {
						close();
					}
				}
			} else {
				alert(_6936.CheckForUpdate.WarnText);
				if (_6936.CheckForUpdate.ForceNewVersion) {
					close();
				}
			}
		}

	})
});
