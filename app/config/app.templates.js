angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","\n<section>\n	<div class=\"container-fluid\">\n		<div class=\"row\">\n			<div class=\"col-xs-12\">\n				<input type=\"text\" ng-model=\"$ctrl.query\" class=\"form-control search-input\" placeholder=\"Search...\">\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-12\">\n				<table class=\"table\">\n					<thead>\n						<tr>\n							<th>\n								Instrument\n							</th>\n							<th>\n								Genre\n							</th>\n							<th>\n								City\n							</th>\n							<th>\n								Country\n							</th>\n						</tr>\n					</thead>\n					<tbody>\n						<tr ng-repeat=\"ad in $ctrl.advertisements | filter:$ctrl.query\">\n							<td>\n								{{ ad.instrument }}\n							</td>\n							<td>\n								{{ ad.genre }}\n							</td>\n							<td>\n								{{ ad.city }}\n							</td>\n							<td>\n								{{ ad.country }}\n							</td>\n						</tr>\n					</tbody>\n				</table>\n			</div>\n		</div>\n	</div>\n</section>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div id=\"wrapper\">\n	<app-sidenav></app-sidenav>\n	<div id=\"page-content-wrapper\">\n	    <div class=\"page-content\">\n			<div ui-view></div>\n		</div>\n	</div>\n</div>\n\n<app-footer></app-footer>");
$templateCache.put("layout/footer.html","");
$templateCache.put("layout/header.html","\n<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n	<div class=\"navbar-header\">\n		<button type=\"button\" class=\"navbar-toggle\" ng-click=\"$ctrl.isNavCollapsed = !$ctrl.isNavCollapsed\">\n			<span class=\"sr-only\">Toggle navigation</span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n		</button>\n		<a class=\"navbar-brand\" href=\"#\">{{$ctrl.appName}}</a>\n	</div>\n</nav>\n");
$templateCache.put("layout/sidenav.html","<div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n        <li><a ui-sref=\"app.home\" ui-sref-active=\"active\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Another link</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Next link</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Last link</a></li>\n    </ul>\n</div>");}]);