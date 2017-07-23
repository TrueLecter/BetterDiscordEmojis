'use strict';

exports.API_BASE = 'https://discordapp.com/api';

/* May be changed with discord updates */
exports.EMOJI_PICKER_PATH = '#app-mount > div > div:nth-child(7)';
exports.EMOJI_BUTTON_CLASS = n(2116).emojiButton;
exports.LOCAL_STORAGE_MODULE = n(1595);
exports.EMOJI_STORAGE_MODULE = n(169).default;
exports.TRANSLATION_MODULE = n(3);
exports.TOKEN_KEY = n(0).TOKEN_KEY;
/* May be changed with discord updates.END */

exports.ELEMENT_SCROLLER_WRAP = '<div class="scroller-wrap tl-emoji-scroller-wrap"><div class="scroller"></div></div>';

exports.ELEMENT_SEARCH_INPUT = '<input type="text" placeholder="Find the perfect emoji" value="">';

exports.ELEMENT_SERVER_EMOJI_LIST = '<span class="server-emojis"><div class="category">server.name</div></span>';
exports.ELEMENT_SERVER_EMOJI_LIST_ROW = '<div class="row"></div>';
exports.ELEMENT_SERVER_EMOJI_LIST_ROW_ENTRY = '<div class="emoji-item"></div>'; // max 10 per row

exports.REACTION_POPOUT_REGEX = /TOGGLE_REACTION_POPOUT_(\d+)/;
exports.CURRENT_SELECTED_CHANNEL_REGEX = /.*\/.+\/(\d+)/;
exports.IS_INBOX_REGEX = /\/channels\/@me\/\d+/;

exports.IS_NUMBER_REGEX = /\d+/;

/**
 * Default options HTTP Fetch jQuery
 *
 * @type {Object}
 */
exports.defaultFetchOptions = {
	method: 'GET'
};

function n(id) {
	return webpackJsonp([], [], [id]);
}