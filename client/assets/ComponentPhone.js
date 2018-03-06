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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50UGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L0NvbXBvbmVudFBob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0ksd0JBQ1ksV0FBMkI7WUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1lBRW5DLElBQUksQ0FBQyxnQkFBZ0IsR0FBbUIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUM3RSxJQUFJLENBQUMsc0JBQXNCLEdBQXFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUN6RyxJQUFJLENBQUMsU0FBUyxHQUFzQixXQUFXLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDbEYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RCLENBQUM7UUFFTyxvQ0FBVyxHQUFuQjtZQUFBLGlCQWFDO1lBWkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxFQUFFO2dCQUN2QyxJQUFJLFVBQVUsR0FBbUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2dCQUNoRSxLQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxNQUFNLEdBQXNCLFVBQVUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtnQkFDN0UsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7Z0JBQ3JCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2dCQUV0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUEsRUFBRTtvQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQzFDLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQUFDLEFBNUJELElBNEJDO0lBNUJZLHdDQUFjIn0=