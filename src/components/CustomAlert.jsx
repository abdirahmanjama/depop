import React from 'react';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { CloseButton } from '@chakra-ui/close-button';

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
