var Stats = /** @class */ (function () {
    function Stats() {
        this.getElements();
        this.setOutputs();
    }
    Stats.prototype.getElements = function () {
        this.dataInput1 = document.querySelector('#data1');
        this.dataInput2 = document.querySelector('#data2');
        this.dataInput3 = document.querySelector('#data3');
        this.dataInput4 = document.querySelector('#data4');
    };
    Stats.prototype.setOutputs = function () {
        this.dataMin = document.querySelector('#min');
        this.dataMax = document.querySelector('#max');
        this.dataSum = document.querySelector('#sum');
        this.dataAvg = document.querySelector('#avg');
        var checkTable = [this.dataInput1, this.dataInput2, this.dataInput3, this.dataInput4];
        this.dataMax = Math.max.apply(Math, checkTable);
        this.dataMin = Math.min.apply(Math, checkTable);
        this.dataSum = this.dataInput1 + this.dataInput2 + this.dataInput3 + this.dataInput4;
        this.dataAvg = this.dataSum / 4;
    };
    return Stats;
}());
var stats = new Stats();
stats.run();
