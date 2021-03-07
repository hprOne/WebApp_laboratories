class Stats{
    data1;
    data2;
    data3;
    data4;

    min;
    max;
    avg;
    sum;
    constructor(){
        this.getElements();
        //this.bindEvent();
    }

    getElements(){
        this.data1 = document.querySelector('#data1')
        this.data2 = document.querySelector('#data2')
        this.data3 = document.querySelector('#data3')
        this.data4 = document.querySelector('#data4')
        //let e = a/b
    }
}

