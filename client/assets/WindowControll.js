define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindowControll = /** @class */ (function () {
        function WindowControll() {
            if (WindowControll.instance)
                return WindowControll.instance;
            this.windows = document.querySelectorAll('div.window');
            this.openByElement(this.windows[0]);
            return WindowControll.instance || (WindowControll.instance = this);
        }
        WindowControll.prototype.closeAll = function () {
            this.windows.forEach(function (el) { return el.classList.remove('open'); });
        };
        WindowControll.prototype.openByElement = function (element) {
            this.closeAll();
            this.currentWindow = element;
            element.classList.add('open');
        };
        WindowControll.prototype.open = function (querySelector) {
            return this.openByElement(document.querySelector(querySelector));
        };
        return WindowControll;
    }());
    exports.WindowControll = WindowControll;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93Q29udHJvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L1dpbmRvd0NvbnRyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0k7WUFDSSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO2dCQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQTtZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUE7UUFDdEUsQ0FBQztRQUVELGlDQUFRLEdBQVI7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUE7UUFDM0QsQ0FBQztRQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtZQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQTtZQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqQyxDQUFDO1FBRUQsNkJBQUksR0FBSixVQUFLLGFBQXFCO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUNwRSxDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQUFDLEFBMUJELElBMEJDO0lBMUJZLHdDQUFjIn0=