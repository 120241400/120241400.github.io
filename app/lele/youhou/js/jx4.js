document.writeln("<script>function g(name) { var reg = new RegExp(\'(^|&)\' + name + \'=([^&]*)(&|$)\', \'i\'); var r = encodeURI(window.location.search).substr(1).match(reg); if (r != null) return unescape(r[2]); return \'\'; };let name = g(\'url\');let ifr = document.getElementsByTagName(\'iframe\')[0];ifr.src = `https://okjx.cc/?url=${name}`;</script>");
