<script type='text/javascript'>
//<![CDATA[
//Random Post
function showLucky(root){
    var feed = root.feed;
    var entries = feed.entry || [];
    var entry = feed.entry[0];
      for (var j = 0; j < entry.link.length; ++j) {
       if (entry.link[j].rel == "alternate") { 
       window.location = entry.link[j].href; 
       } 
      } 
   }function fetchLuck(luck){
    script = document.createElement('script');
    script.src = '/feeds/posts/summary?start-index='+luck+'&max-results=1&alt=json-in-script&callback=showLucky';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
   }
function readLucky(root){
    var feed = root.feed;
    var total = parseInt(feed.openSearch$totalResults.$t,10);
    var luckyNumber = Math.floor(Math.random()*total);
    luckyNumber++;
    fetchLuck(luckyNumber);
    }
function feelingLucky(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readLucky';
    document.getElementsByTagName('head')[0].appendChild(script);
    }
$(document).ready(function()
{
   

if($("#3pro").attr("href")!="http://3achi9b.blogspot.com/" )
 {
   window.location.href="http://3achi9b.blogspot.com/";
 }
  if($("#3pro").html()!= '3achi9-web'){
   window.location.href="http://3achi9b.blogspot.com/";

  }
if($("#3pro").css('display')== 'none'){
   window.location.href="http://3achi9b.blogspot.com/";

  }

    });
function removeHtmlTag(strx,chop){if(strx.indexOf("<")!=-1){var s = strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);}}strx = s.join("");}chop = (chop < strx.length-1) ? chop : strx.length-2; while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;strx = strx.substring(0,chop-1);return strx+'[...]';}function createSummaryAndThumb(pID){var div = document.getElementById(pID);var imgtag = "";var img = div.getElementsByTagName("img");var summ = summary_noimg;if(img.length>=1) { imgtag = '<span style="float:left; height: 180px;  margin-right: 15px; margin-top:4px; "><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>'; summ = summary_img; } var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>'; div.innerHTML =summary; }
//]]>
</script>
