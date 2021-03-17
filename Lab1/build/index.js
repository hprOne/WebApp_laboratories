var Stats = /** @class */ (function () {
    function Stats() {
        this.getElements();
        this.watchInputs();
    }
    Stats.prototype.getElements = function () {
        this.dataInput1 = document.querySelector('#data1');
        this.dataInput2 = document.querySelector('#data2');
        this.dataInput3 = document.querySelector('#data3');
        this.dataInput4 = document.querySelector('#data4');
    };
    Stats.prototype.watchInputs = function () {
    };
    return Stats;
}());
