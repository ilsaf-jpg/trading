import React from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Button } from 'react-bootstrap';
export const ChartsPage: React.FC = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Введите название"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Поиск!</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}
