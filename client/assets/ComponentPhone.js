define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentPhone = /** @class */ (function () {
        function ComponentPhone(elementRoot) {
            this.elementRoot = elementRoot;
            this.firstElementItem = elementRoot.querySelector('div.item');
            this.firstElementInputPhone = this.firstElementItem.querySelector('input[name=number]');
            this.addButton = elementRoot.querySelector('button.button-add');
            this.atachEvents();
        }
        ComponentPhone.prototype.atachEvents = function () {
            var _this = this;
            this.addButton.addEventListener('click', function (ev) {
                if (_this.firstElementInputPhone.value.trim() == "") {
                    ev.stopImmediatePropagation();
                    return;
                }
                var itemCloned = _this.firstElementItem.cloneNode(true);
                _this.elementRoot.insertBefore(itemCloned, _this.firstElementItem);
                _this.firstElementInputPhone.value = "";
                var button = itemCloned.querySelector('button.button-add');
                button.className = "";
                button.innerText = "-";
                button.addEventListener('click', function (ev) {
                    ev.target.closest('div.item').remove();
                });
            });
        };
        return ComponentPhone;
    }());
    exports.ComponentPhone = ComponentPhone;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50UGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L0NvbXBvbmVudFBob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0ksd0JBQ1ksV0FBMkI7WUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1lBRW5DLElBQUksQ0FBQyxnQkFBZ0IsR0FBbUIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUM3RSxJQUFJLENBQUMsc0JBQXNCLEdBQXFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUN6RyxJQUFJLENBQUMsU0FBUyxHQUFzQixXQUFXLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDbEYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RCLENBQUM7UUFFTyxvQ0FBVyxHQUFuQjtZQUFBLGlCQWlCQztZQWhCRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBLEVBQUU7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakQsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUE7b0JBQzdCLE1BQU0sQ0FBQTtnQkFDVixDQUFDO2dCQUVELElBQUksVUFBVSxHQUFtQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN0RSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7Z0JBQ2hFLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLE1BQU0sR0FBc0IsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO2dCQUM3RSxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtnQkFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQ3RCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxFQUFFO29CQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtnQkFDMUMsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDTCxxQkFBQztJQUFELENBQUMsQUFoQ0QsSUFnQ0M7SUFoQ1ksd0NBQWMifQ==