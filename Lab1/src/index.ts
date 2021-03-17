class Stats{
    dataInput1;
    dataInput2;
    dataInput3;
    dataInput4;

    dataMin;
    dataMax;
    dataAvg;
    dataSum;
    
    constructor(){
        this.getElements();
        this.setOutputs();
    }

    getElements(){
        this.dataInput1 = document.querySelector('#data1')
        this.dataInput2 = document.querySelector('#data2')
        this.dataInput3 = document.querySelector('#data3')
        this.dataInput4 = document.querySelector('#data4')
    }

    setOutputs(){
        this.dataMin = document.querySelector('#min')
        this.dataMax = document.querySelector('#max')
        this.dataSum = document.querySelector('#sum')
        this.dataAvg = document.querySelector('#avg')
    }
}

