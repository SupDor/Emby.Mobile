﻿(function(document,$){var currentOwnerId;var currentThemeIds=[];function playThemeSongs(items,ownerId){var player=getPlayer();if(items.length&&player.isDefaultPlayer&&player.canAutoPlayAudio()){if(!currentOwnerId&&player.isPlaying()){return;}
currentThemeIds=items.map(function(i){return i.Id;});currentOwnerId=ownerId;player.play({items:items});}else{currentOwnerId=null;}}
function onPlayItem(item){if(currentThemeIds.indexOf(item.Id)==-1){currentOwnerId=null;}}
function enabled(){var userId=Dashboard.getCurrentUserId();var val=appStorage.getItem('enableThemeSongs-'+userId);var localAutoPlayers=MediaController.getPlayers().filter(function(p){return p.isLocalPlayer&&p.canAutoPlayAudio();});return val=='1'||(val!='0'&&localAutoPlayers.length);}
function getPlayer(){return MediaController.getCurrentPlayer();}
$(document).on('thememediadownload',".libraryPage",function(e,themeMediaResult){if(!enabled()){return;}
var ownerId=themeMediaResult.ThemeSongsResult.OwnerId;if(ownerId!=currentOwnerId){playThemeSongs(themeMediaResult.ThemeSongsResult.Items,ownerId);}});})(document,jQuery);