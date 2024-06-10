import { useState } from "react";
import "../Styles/calculator.css"

const Calculator = () => {
	const [input, setInput] = useState("0");
	const [output, setOutput] = useState("0");
	const [operation, setOperation] = useState("");

	const buttons = [
		{ id: "zero", value: "0" },
		{ id: "one", value: "1" },
		{ id: "two", value: "2" },
		{ id: "three", value: "3" },
		{ id: "four", value: "4" },
		{ id: "five", value: "5" },
		{ id: "six", value: "6" },
		{ id: "seven", value: "7" },
		{ id: "eight", value: "8" },
		{ id: "nine", value: "9" },
		{ id: "add", value: "+" },
		{ id: "equals", value: "=" },
		{ id: "subtract", value: "-" },
		{ id: "multiply", value: "*" },
		{ id: "divide", value: "/" },
		{ id: "decimal", value: "."},
		{ id: "clear", value: "AC" },
	];

	const clear = () => {
		setInput("0");
		setOutput("0");
		setOperation("");
	};

	const result = () => {
		switch(operation){
			case "+":
				setInput(parseInt(output) + parseInt(input));
				break;
			case "-":
				setInput(parseInt(output) - parseInt(input));
				break;	
		}
	};

	const outputResult = () => {
		switch(operation){
			case "+":
				setOutput(parseInt(output) + parseInt(input));
				break;
			case "-":
				setOutput(parseInt(output) - parseInt(input));
				break;
			case "*":
				setOutput(parseInt(output) * parseInt(input));
			case "/":
				setOutput(parseInt(output) / parseInt(input));	
		}
	}


	const calculate = (num) => {
		if(operation){
			outputResult()
		} else {
			console.log("no hay op");
			setOutput(num);
		}
	};

	const displayNum = (value) => {
		if (input == "0") {
			setInput(value)
		} else {
			setInput(input + value)
		}
	};

	const updateDisplay = (value) => {

		switch(value){
			case "AC":
				clear();
				break;
			case "+":
			case "-":
			case "/":
			case "*":
				setOperation(value);
				calculate(input);
				setInput("0");
				break;
			case "=":
				result();
				setOutput("0");
				setOperation("");
				break;
			default:
				displayNum(value);
				break;	
		}

	};

	return (
		<div>
			<main>
			<div>
				Input
				<input id="display" readOnly value={input}/><br></br>
				Output
				<input readOnly value={output}/>
			</div>
			<div className="pad">
				{
				buttons.map((elem) => 
					<button 
						id={elem.id} 
						onClick={()=>{updateDisplay(elem.value)}}
						>{elem.value}</button>)}
			</div>
			</main>
		</div>
	)
}

export default Calculator