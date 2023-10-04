import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  LayoutProps,
  Textarea,
  useBoolean,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ConfigurationFieldExplanation } from '../../ConfigurationFieldExplanation';
import { FieldInputProps } from 'models/Form';
import {Eye, EyeSlash } from 'iconsax-react';

export interface StringInputProps extends FieldInputProps<string | undefined | string[]>, LayoutProps {
  isError: boolean;
  hideButton: boolean;
  isArea: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const _StringInput: React.FC<StringInputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  isError,
  error,
  hideButton,
  isRequired,
  element,
  isArea,
  isDisabled,
  definitionKey,
  h,
  ...props
}) => {
  const { t } = useTranslation();
  const [show, setShow] = useBoolean();

  if (isArea) {
    return (
      <FormControl isInvalid={isError} isRequired={isRequired} isDisabled={isDisabled}>
        <FormLabel ms="4px" fontSize="md" fontWeight="normal" _disabled={{ opacity: 0.8 }}>
          {label}
        </FormLabel>
        {element ?? (
          <InputGroup size="md">
            <Textarea
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              borderRadius="15px"
              fontSize="sm"
              h={h ?? '360px'}
              _disabled={{ opacity: 0.8, cursor: 'not-allowed' }}
            />
          </InputGroup>
        )}
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }

  return (
    <FormControl isInvalid={isError} isRequired={isRequired} isDisabled={isDisabled} {...props}>
      <FormLabel ms="4px" fontSize="md" fontWeight="normal" _disabled={{ opacity: 0.8 }}>
        {label}
        <ConfigurationFieldExplanation definitionKey={definitionKey} />
      </FormLabel>
      {element ?? (
        <InputGroup size="md">
          <Input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            borderRadius="5px"
            fontSize="sm"
            type={hideButton && !show ? 'password' : 'text'}
            autoComplete="off"
            border="2px solid"
            _disabled={{ opacity: 0.8, cursor: 'not-allowed' }}
            boxShadow="-1px -1px 1px 0px #F0F0F3 inset, 1px 1px 1px 0px rgba(174, 174, 192, 0.25) inset"
          />
          {hideButton && (
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={setShow.toggle}
                _disabled={{ opacity: 0.8, cursor: 'not-allowed' }}
                border="none"
                bg="transparent"
              >
                {show ? <EyeSlash/> : <Eye/>}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export const StringInput = React.memo(_StringInput);
