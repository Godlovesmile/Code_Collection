/*一.共享onload事件
 *1.把现有的window.onload事件处理函数的值保存入变量oldonload
 *2.如果在这个处理函数上还没有绑定任何函数,就把新函数添加给它
 *3.如果处理函数已经绑定了一些函数,就把新函数追加到现有指令的末尾
*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

/*二.编写insertAfter函数:DOM提供了insertBefore,但是没有insertAfter*/
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

/*三.编写一个函数为表格添加斑马线效果*/
function stripeTables() {
  if (!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName("table");
  for (var i=0; i<tables.length; i++) {
    var odd = false;
    var rows = tables[i].getElementsByTagName("tr");
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}


/*四.JS改变classname,从而实现行为与样式分离开发,不必在js中改变样式*/
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}

/*五.计算字符长度的js函数*/
function LEN(str){
  var i,sum = 0;
    for(i = 0;i < str.length;i++) {
      if((str.charCodeAt(i) >= 0) && (str.charCodeAt(i) <= 255))
        sum = sum + 1;
        else
        sum = sum + 2;
  }
  return sum;
}

/*六.去字符中前后的空格的js函数*/
function TRIM(value) {
  return value.replace(/^\s*/,'').replace(/\s*$/,'');
}

/*七.图片自适应大小函数代码*/
function imgAutoFit(imgObj,maxWidth,maxHeight){
    var heightWidth;
    var widthHeight;
    heightWidth = imgObj.offsetHeight/imgObj.offsetWidth;
    widthHeight = imgObj.offsetWidth/imgObj.offsetHeight;
    if(imgObj.offsetWidth>maxWidth){
        imgObj.width = maxWidth;
        imgObj.height = maxWidth*heightWidth;
    }
    if(imgObj.offsetHeight>maxHeight){
        imgObj.height = maxHeight;
        imgObj.width = maxHeight*widthHeight;
    }
}


/*八.阻止冒泡*/
function stopPropagation(e) {
        e = e || window.event;
        if(e.stopPropagation) { //W3C阻止冒泡方法
            e.stopPropagation();
        } else {
            e.cancelBubble = true; //IE阻止冒泡方法
        }
}
//阻止默认行为
e.preventDefault;

/*
  九.检测浏览器是否支持svg
 */
function hasSVG(){
    SVG_NS = 'http://www.w3.org/2000/svg';
    return !!document.createElementNS &&!!document.createElementNS(SVG_NS, 'svg').createSVGRect;
}


/*十.检测是否是微信浏览器*/
function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
     } else {
        return false;
    }
}


/*十一.js获取验证码倒计时效果*/
function getCode(obj,n){
    var t = obj.value;
    (function() {
        if(n>0) {
            obj.disabled = true
            obj.value = '倒计时' + (n--) + '秒';
            setTimeout(arguments.callee,1000);
        }else {
            obj.disabled = false;
            obj.value = t;
        }
    })();
}


