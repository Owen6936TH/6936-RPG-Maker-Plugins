/*:
 * @plugindesc [Version 1.0] [RPG Maker MV] Show Actor Face In Message By Actor ID
 * https://store.steampowered.com/developer/owen6936/
 * @author Owen6936
 * @url 
 * @help
 *  ใส่โค้ดที่กำหนดไว้ลงในล่องข้อความ show message
 * Text Code สามารถกำหนดได้ใน plugin parameter "ChangeFaceEscapeCode"
 * ====================
 * EN
 * ====================
 * Use Text Code in Show Message
 * that specified from plugin parameter "ChangeFaceEscapeCode"
 * 
 *
 * ============================================================================
 * Change Log
 * ============================================================================
 * Version 1.0 
 * - Release Plugin
 *
 * @param ChangeFaceEscapeCode
 * @type string
 * @text Change Face Escape Code
 * @default <ActorFace:id>
 */
var _6936 = _6936 || {};
_6936.MessageActorFace = _6936.MessageActorFace || {};

_6936.MessageActorFace.parameters = PluginManager.parameters('6936_MV_MessageActorFace');
_6936.MessageActorFace.ChangeFaceEscapeCode = new RegExp('\\' + ((_6936.MessageActorFace.parameters["ChangeFaceEscapeCode"]).replace("id","(.*?)").replace("[","\\[").replace("]","\\]")))

_6936_MessageActorFace_Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
Window_Message.prototype.drawMessageFace = function() {
	const text = (this._textState) ? this._textState.text : '';
	const textMatch = text.match(_6936.MessageActorFace.ChangeFaceEscapeCode)
	if(textMatch) {
		this._textState.text = text.replace(_6936.MessageActorFace.ChangeFaceEscapeCode, '');
		const actorId = parseInt(textMatch[1]);
		if (actorId > 0) {
			this.drawFace($dataActors[actorId].faceName, $dataActors[actorId].faceIndex, 0, 0);
			ImageManager.releaseReservation(this._imageReservationId);
		} else {
			_6936_MessageActorFace_Window_Message_drawMessageFace.apply(this, arguments);
		}
	} else {
		_6936_MessageActorFace_Window_Message_drawMessageFace.apply(this, arguments);
	}
};

Window_Message.prototype.loadMessageFace = function() {
	const text = (this._textState) ? this._textState.text : '';
	const textMatch = text.match(_6936.MessageActorFace.ChangeFaceEscapeCode)
	if(textMatch) {
		if (parseInt(textMatch[1]) > 0) {
			this._faceBitmap = ImageManager.reserveFace($dataActors[parseInt(textMatch[1])].faceName, 0, this._imageReservationId);
		}
	} else {
		this._faceBitmap = ImageManager.reserveFace($gameMessage.faceName(), 0, this._imageReservationId);
	}
};

Window_Message.prototype.newLineX = function() {
	const text = (this._textState) ? this._textState.text : '';
	const textMatch = text.match(_6936.MessageActorFace.ChangeFaceEscapeCode)
    return ($gameMessage.faceName() !== '' || textMatch) ? 168 : 0 ;
};