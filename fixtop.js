/**
 * @authors Anchen
 * @date    2014-10-28 14:15:46
 */

window.onload = (function() {
	var commonJs = {
		fixed: function() {
			var fixbar = document.getElementById('fixbar');
			var h = fixbar.offsetTop;
			var fix_h=h;
			window.onscroll = function() {
				var scroll_h = document.documentElement.scrollTop || document.body.scrollTop;
				if (fix_h <= scroll_h) {
					addClass();
				} else {
					removeClass();
				}
			};

			function hasClass() {
				return fixbar.className.match(new RegExp('(\\s|^)' + 'totop' + '(\\s|$)'));

			}

			function addClass() {
				if (!hasClass()) {
					fixbar.className += "" + "totop";
				}
			}

			function removeClass() {
				if (hasClass()) {
					fixbar.className = fixbar.className.replace(new RegExp("(\\s|^)" + "totop" + "(\\s|$)"), " ");
				}
			}


		}
	}
	commonJs.fixed();
})
