class Stats {

    //ilość pól liczydła
    inputFields: number = 0;
    //array for values from generated fields
    inputValuesTable: Array<number> = [];

    constructor() {
        const checkInputField: HTMLInputElement = document.querySelector('#inputFieldForGenerator');
        //event listener for checking the input field
        checkInputField.addEventListener('input', (event: Event) => 
        { 
            const target = event.target as HTMLInputElement;
            this.inputFields = Number(target.value);
            new ResultUI(this.inputFields, this.inputValuesTable);
        });
        new ResultUI(this.inputFields, this.inputValuesTable);
    }
}

class InputFieldContainerGenerator{

    numberInput: HTMLInputElement;
    delInputBtn: HTMLButtonElement;
    inputFieldsDiv: HTMLDivElement;
    inputNumber = document.createElement("b")
    inputfields: HTMLDivElement = document.querySelector("#inputFieldsDiv");
   
    constructor(inputId, count, inputValuesArray: Array<number>) 
    {
        
        // input-field generator
        this.inputNumber.innerText = inputId + 1 + ".";
        this.numberInput = document.createElement('input');
        this.numberInput.type = "number";
        this.numberInput.id = 'input' + inputId;
        this.numberInput.value = inputValuesArray[inputId] ? String(inputValuesArray[inputId]) : '0';
        inputValuesArray[inputId] = Number(this.numberInput.value);
        this.numberInput.addEventListener('input', (event: Event) => 
        {
            const target = event.target as HTMLInputElement;
            inputValuesArray[inputId] = Number(target.value);
            new ResultUI(count, inputValuesArray);
        });

        // delete-button generator
        this.delInputBtn = document.createElement('button');
        this.delInputBtn.innerText = "Delete";
        this.delInputBtn.addEventListener('click', (event: Event) => 
        {
            const countInput: HTMLInputElement = document.querySelector('#inputFieldsDiv') as HTMLInputElement;
            inputValuesArray[inputId] = 0;
            inputValuesArray.splice(inputId,1);
            count -= 1;
            countInput.value = count;
            new ResultUI(count, inputValuesArray);
        });
    }
    generateInputFields() : HTMLDivElement 
    {
        //one container per input-field + delete button
        const inputFieldContainer = document.createElement('div');
        inputFieldContainer.className = "inputFieldContainer";
        inputFieldContainer.appendChild(this.inputNumber);
        inputFieldContainer.appendChild(this.numberInput);
        inputFieldContainer.appendChild(this.delInputBtn);
        inputFieldContainer.style.marginBottom="5px"
        return inputFieldContainer;
    }
}

class ComputeResult {

    sum: number;
    avg: number;

    minResult(inputValues: Array<number>) 
    {
        return Math.min.apply(null,inputValues);
    }
    maxResult(inputValues: Array<number>) 
    {
        return Math.max.apply(null,inputValues);
    }
    sumResult(inputValues: Array<number>) 
    {
        this.sum = inputValues.reduce((a, b) => a + b, 0);
        return this.sum;
    }
    averageResult(inputValues: Array<number>) 
    {
        this.avg = inputValues.reduce((a, b) => a + b, 0);
        return Number((this.avg / inputValues.length).toFixed(3));
    }
}

class ResultUI {

    resultsDiv = document.querySelector('#resultsDiv');
    invalidInputDiv = document.querySelector('#invalidInputDiv')
    errorMessage = document.createElement('b');
    inputFieldsDiv = document.getElementById('inputFieldsDiv');

    constructor(inputsAmount: number, inputValues: Array<number>) 
    {
        let isValid = false;
        this.resultsDiv.innerHTML = null;

        if (inputValues && inputsAmount > 0) {
            isValid = inputValues.every((value) => typeof value === 'number');
            this.generateUI(inputsAmount, inputValues);
            this.invalidInputDiv.innerHTML = "";
        } else {
            this.invalidInputDiv.innerHTML = "";
            const inputsSection = document.getElementById('inputFieldsDiv');
            inputsSection.innerHTML = null;
            this.errorMessage.innerText = "Wpisz poprawną ilość liczb";
            this.invalidInputDiv.appendChild(this.errorMessage);
        }
    }

    generateInputs(inputsAmount: number, inputValues: Array<number>): void
    {        
        const breakLine = document.createElement('br');

        this.inputFieldsDiv.innerHTML = null;
        this.inputFieldsDiv.appendChild(breakLine);
        for (let i = 0; i < inputsAmount; i++) {
            const input = new InputFieldContainerGenerator(i,inputsAmount, inputValues).generateInputFields();
            this.inputFieldsDiv.appendChild(input);
        }
    }
    generateUI(inputsAmount: number, inputValues: Array<number>): void 
    {
        const stats = new ComputeResult;
        const resultDivs: Array<HTMLDivElement> = [];
        this.generateInputs(inputsAmount, inputValues);
        const valuesFromInputArray = inputValues.slice(0, inputsAmount);
        // push results into divs 
        resultDivs.push(this.generateResult('Suma: ', valuesFromInputArray, stats.sumResult))
        resultDivs.push(this.generateResult('Średnia: ', valuesFromInputArray, stats.averageResult))
        resultDivs.push(this.generateResult('Minimum:', valuesFromInputArray, stats.minResult))
        resultDivs.push(this.generateResult('Maksimum:', valuesFromInputArray, stats.maxResult))
        resultDivs.forEach((element: HTMLDivElement) => 
        {
            this.resultsDiv.appendChild(element);
        });
    }
    generateResult(name: string, inputValues: Array<number>, ComputeResult: Function): HTMLDivElement 
    {
        const resultName = document.createElement('p');
        const value = document.createElement('b');
        const container = document.createElement('div');

        resultName.innerText = name;
        value.innerText = ComputeResult(inputValues);
        container.style.float = "left";
        container.style.marginLeft = "20px"
        container.appendChild(resultName);
        container.appendChild(value);
        return container;
    }
}
const stats = new Stats();