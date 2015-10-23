angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("html/chat.html","<section class=\"view chatView container\">\n    <div class=\"panel chat\">\n        <div class=\"panel-heading chat__header\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <div class=\"chat__heading\">\n                        <i class=\"glyphicon glyphicon-comment\"></i> Chat\n                    </div>\n                </div>\n                <div class=\"col-xs-6\"><div class=\"btn btn-empty pull-right\">\n                    <i class=\"glyphicon glyphicon-facetime-video\"></i> Video Call\n                </div></div>\n            </div>\n        </div>\n        <div class=\"panel-body\">\n            <ul class=\"media-list\">\n                <li class=\"media chat__message--left\">\n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                            <img class=\"media-object chat__avatar\" src=\"img/agent_assets/agent_chat.png\" alt=\"Joe\">\n                        </a>\n                    </div>\n                    <div class=\"media-body container-fluid\">\n                        <div class=\"media-heading row\">\n                            <span class=\"col-xs-6 chat__sender\">Joe</span>\n                            <div class=\"col-xs-6 chat__timestamp\">\n                                <i class=\"glyphicon glyphicon-time\"></i> 15 mins ago\n                            </div>\n                        </div>\n                        Hi! I\'m Joe and I\'ll be helping you open an account today.<br>\n                        To begin with, we\'ll need your registered student number from UCAS please - do you have this to hand?\n                    </div>\n                </li>\n                <li class=\"media chat__message--right\">\n                    <div class=\"media-body container-fluid\">\n                        <div class=\"media-heading row\">\n                            <div class=\"col-xs-6 chat__timestamp\">\n                                <i class=\"glyphicon glyphicon-time\"></i> 15 mins ago\n                            </div>\n                            <span class=\"col-xs-6 chat__sender\">You</span>\n                        </div>\n                        No probs - my student number is 1234567890 and my email is test@test.com\n                    </div>\n                    <div class=\"media-right\">\n                        <a href=\"#\">\n                            <img class=\"media-object chat__avatar\" src=\"img/customer_assets/customer_chat.png\" alt=\"You\">\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"panel-footer chat__footer hidden-xs\">\n            <div class=\"chat__actions\">\n                <button class=\"btn btn-circle btn-danger\"><i class=\"glyphicon glyphicon-folder-open\"></i></button>\n                <button class=\"btn btn-circle btn-danger\"><i class=\"glyphicon glyphicon-camera\"></i></button>\n            </div>\n            <div class=\"input-group chat__input\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-danger\" type=\"button\">Send Message</button>\n                </span>\n            </div>\n        </div>\n        <div class=\"panel-footer chat__footer visible-xs\">\n            <div class=\"input-group chat__input\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"glyphicon glyphicon-envelope\"></i></button>\n                </span>\n            </div>\n            <div class=\"chat__actions\">\n                <i class=\"glyphicon glyphicon-folder-open\"></i>\n                <i class=\"glyphicon glyphicon-camera\"></i>\n            </div>\n        </div>\n    </div>\n</section>");
$templateCache.put("html/home.html","<section class=\"view homeView\">\n    <div class=\"container\">\n        <div class=\"jumbo\">\n            <div class=\"container\">\n                <h1 class=\"jumbo__heading\">Get Your Student Bank Account In Minutes!</h1>\n\n                <p>Save time by using your camera phone to send us a proof of address and a selfie.</p>\n                <p>We\'ll also need your UCAS student number, so make sure you have this to hand.</p>\n            </div>\n\n        </div>\n\n        <div class=\"ctaBlock\">\n            <div class=\"ctaBlock__row\">\n                <div class=\"btn btn-large btn-danger\" ui-sref=\"chat\">Video Call</div>\n                <div class=\"btn btn-large btn-empty\" ui-sref=\"chat\">Live Chat</div>\n            </div>\n            <div class=\"ctaBlock__row\">\n                <div class=\"btn btn-large btn-empty\">Visit Branch</div>\n            </div>\n        </div>\n    </div>\n</section>");}]);