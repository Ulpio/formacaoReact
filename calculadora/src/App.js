import Input from './components/Input';
import Button from './components/Button';

import { Container,Content,Row} from './styles';
import { useState } from 'react';

const App= () => {
  const [currentNumber,setCurrentNumber] = useState('0');
  const [firstNumber,setFirstNumber] = useState(0);
  const [operation,setOperation] = useState('');

  const handleAddNumber = (num) =>{
    setCurrentNumber(prev => `${prev === '0'? '': prev}${num}`)
  }
  
  const handleClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () =>{
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('+')
  }

  const handleDifNumbers = () =>{
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('dif')
  }

  const handleMultNumbers = () =>{
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('x')
  }

  const handleDivNumbers = () =>{
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('/')
  }

  const handleDel = () =>{
    setCurrentNumber(prev => prev.slice(0,prev.length-1))
  }

  const InvertNumber = () =>{
    setCurrentNumber(prev => prev * -1)
  }


  const handleEquals = () =>{
    if (operation === '+'){
      const sum = Number(firstNumber)+Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
    else if(operation === '-'){
      const sum = Number(firstNumber)-Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
    else if(operation === 'x'){
      const sum = Number(firstNumber)*Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
    else if(operation === '/'){
      const sum = Number(firstNumber)/Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
    else{
      setCurrentNumber('0');
      setFirstNumber('0');
      setOperation('')
    }
  
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="Del"onClick={handleDel}/>
          <Button label="+/-" onClick={InvertNumber}/>
          <Button label="÷" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddNumber('7')}/>
          <Button label="8" onClick={()=>handleAddNumber('8')}/>
          <Button label="9" onClick={()=>handleAddNumber('9')}/>
          <Button label="x" onClick={()=>handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleAddNumber('4')}/>
          <Button label="5" onClick={()=>handleAddNumber('5')}/>
          <Button label="6" onClick={()=>handleAddNumber('6')}/>
          <Button label="-" onClick={()=>handleDifNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>handleAddNumber('1')}/>
          <Button label="2" onClick={()=>handleAddNumber('2')}/>
          <Button label="3" onClick={()=>handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={()=>handleAddNumber('0')}/>
          <Button label="." onClick={()=>handleAddNumber('.')}/>
          <Button label="=" onClick={()=>handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
