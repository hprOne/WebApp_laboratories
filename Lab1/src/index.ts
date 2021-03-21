class Stats{
    dataInput1;
    dataInput2;
    dataInput3;
    dataInput4;

    dataMin//: HTMLInputElement;
    dataMax//: HTMLInputElement;
    dataAvg//: HTMLInputElement;
    dataSum//: HTMLInputElement;
    
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
        
        let checkTable: number[] = [this.dataInput1, this.dataInput2, this.dataInput3, this.dataInput4]
        this.dataMax = Math.max(...checkTable);
        this.dataMin = Math.min(...checkTable);
        this.dataSum = this.dataInput1 + this.dataInput2 + this.dataInput3 + this.dataInput4;
        this.dataAvg = this.dataSum/ 4;
    }
}

const stats = new Stats();

stats.run()