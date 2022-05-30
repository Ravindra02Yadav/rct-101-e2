import React, { useRef, useState } from "react";
import { Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
useDisclosure,
} from '@chakra-ui/react'

const AddProduct = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();
  const [value,setValue] = useState("1");
  const initialRef = useRef();
  const finalRef = useRef();
  // TODO: Remove below const and instead import them from chakra
  //  Button = () => <div />;
  //  Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Products</Button>
      <Modal initialFocusRef = {initialRef}
          finalFocusRef = {finalRef}
          isOpen = {isOpen}
          onClose = {onClose} >
        <ModalBody pb={6}>
          Title
          <Input data-cy="add-product-title" />
          Select Category
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">paint</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          select Gender 
          <RadioGroup data-cy="add-product-gender" 
          onChange={setValue}
          value = {value}
          >
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          Price
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
