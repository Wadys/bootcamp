import addNumberValue from "./src/addNumber.js"
import addDecimal from "./src/addDecimal.js"
import useOperator from "./src/useOperator.js";
import { clearBtn, inputBtns} from "./src/selectors.js";
import { resetAll } from "./src/values.js";

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => addNumberValue(inputBtn.value)); //sendNumberValue(inputBtn.value
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));   
    }
    else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

clearBtn.addEventListener('click', resetAll);