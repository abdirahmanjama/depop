import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { CloseButton } from "@chakra-ui/close-button";

/**
 * Custom Alert component created for displaying error info to users.
 *
 * @version 0.0.1
 * @author [Abdirahman Jama]
 */
function CustomAlert() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error:</AlertTitle>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
}

export default CustomAlert;
