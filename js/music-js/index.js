$(document).ready(function(){
  var playlist = [{
      title: "Sleep Alone",
      artist: "Eason Chan",
      mp3: "http://net4.ccs.neu.edu/home/haonan/gpower/music/peni.mp3",
      poster: "images/1.jpg"
    },{
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"http://rm.sina.com.cn/wm/VZ2010050511043310440VK/music/MUSIC1005051622027270.mp3",
      poster: "images/2.jpg"
    },{
      title:"Little Lucky",
	  artist:"Tian",
	  mp3: "http://net4.ccs.neu.edu/home/haonan/gpower/music/xiaoxingyun.mp3",
      poster: "images/3.jpg"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});