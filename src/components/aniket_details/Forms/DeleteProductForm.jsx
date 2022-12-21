import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text, Container, Alert, AlertIcon, AlertDescription
} from "@chakra-ui/react";
import React, { useState } from "react";
import { deleteReq_Products } from "../utils";

const DeleteProductForm = () => {
  const [id, setID] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //   on change
  const handleChange = (e) => {
    setID(e.target.value);
  };

  //   on submit
  const handleSubmit = () => {
    setLoading(true);
    deleteReq_Products(id)
      .then((res) => {
        setLoading(false);
        alert("Deleted successfully");
      })
      .catch((err) => {
        console.log("err");
        setLoading(false);
        setError(true);
        alert("Network request failed");
      });
    setID("");
  };

  if (error) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          xm: "container.xl",
          lg: "container.lg",
        }}
        centerContent={true}
      >
        <Alert
          status={"error"}
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
          px={{ base: 1, sm: 1, md: 4, lg: 6 }}
        >
          <AlertIcon />
          <AlertDescription>
            Something Went Wrong. Please Give Correct Input.
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  return (
    <Box border="none">
      <Heading as="h2" size="md">
        Delete Product
      </Heading>

      <FormControl>
        <Text color="red">Product ID is mandatory to delete a product.</Text>
        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="title"
            placeholder="product ID..."
            onChange={(e) => handleChange(e)}
            isRequired
          />
        </Box>
        <Button
          type="submit"
          onClick={handleSubmit}
          colorScheme="red"
          isLoading={loading}
          loadingText="SUBMITTING"
          disabled={id === ""}
        >
          DELETE PRODUCT
        </Button>
      </FormControl>
    </Box>
  );
};

export default DeleteProductForm;
