var Stats = /** @class */ (function () {
    function Stats() {
        this.getElements();
    }
    Stats.prototype.getElements = function () {
        this.dataInput1 = document.querySelector('#data1');
        this.dataInput2 = document.querySelector('#data2');
        this.dataInput3 = document.querySelector('#data3');
        this.dataInput4 = document.querySelector('#data4');
        this.setOutputs();
    };
    Stats.prototype.setOutputs = function () {
        var data1 = parseInt(this.dataInput1.value);
        var data2 = parseInt(this.dataInput2.value);
        var data3 = parseInt(this.dataInput3.value);
        var data4 = parseInt(this.dataInput4.value);
        this.dataMin = document.querySelector('#min');
        this.dataMax = document.querySelector('#max');
        this.dataSum = document.querySelector('#sum');
        this.dataAvg = document.querySelector('#avg');
        var checkTable = [data1, data2, data3, data4];
        var max = Math.max.apply(Math, checkTable);
        var min = Math.min.apply(Math, checkTable);
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        this.setResult(this.dataMax, max);
        this.setResult(this.dataMin, min);
        this.setResult(this.dataSum, sum);
        this.setResult(this.dataAvg, avg);
    };
    Stats.prototype.setResult = function (output, result) {
        output.value = "" + result;
    };
    return Stats;
}());
var stats = new Stats();
