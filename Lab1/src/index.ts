class Stats{
    dataInput1: HTMLInputElement;
    dataInput2: HTMLInputElement;
    dataInput3: HTMLInputElement;
    dataInput4: HTMLInputElement;

    dataMin: HTMLOutputElement;
    dataMax: HTMLOutputElement;
    dataAvg: HTMLOutputElement;
    dataSum: HTMLOutputElement;
    
    constructor(){
        this.getElements();
    }

    getElements(){
        this.dataInput1 = document.querySelector('#data1')
        this.dataInput2 = document.querySelector('#data2')
        this.dataInput3 = document.querySelector('#data3')
        this.dataInput4 = document.querySelector('#data4')
        this.setOutputs();
    }

    setOutputs(){
        const data1: number = parseInt(this.dataInput1.value)
        const data2: number = parseInt(this.dataInput2.value)
        const data3: number = parseInt(this.dataInput3.value)
        const data4: number = parseInt(this.dataInput4.value)

        this.dataMin = document.querySelector('#min')
        this.dataMax = document.querySelector('#max')
        this.dataSum = document.querySelector('#sum')
        this.dataAvg = document.querySelector('#avg')   

        let checkTable: number[] = [data1, data2, data3, data4];
        const max: number = Math.max(...checkTable);
        const min: number = Math.min(...checkTable);
        const sum: number = data1 + data2 + data3 + data4;
        const avg: number = sum/ 4;    

        this.setResult(this.dataMax, max);
        this.setResult(this.dataMin, min);
        this.setResult(this.dataSum, sum);
        this.setResult(this.dataAvg, avg); 

    }
    setResult(output: HTMLOutputElement, result: number) {
        output.value = `${result}`;
      }
}

const stats = new Stats();