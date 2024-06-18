import React, {memo} from 'react';
import {Button, HStack} from '@chakra-ui/react';

interface PageButtonsProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const PageButtonsImpl: React.FC<PageButtonsProps> = ({page, totalPages, setPage}) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => setPage(i)}
          colorScheme={page === i ? 'blue' : 'gray'}>
          {i}
        </Button>,
      );
    }
    return buttons;
  };

  return (
    <HStack spacing={2}>
      <Button
        onClick={handlePreviousPage}
        _hover={{}}
        _disabled={{opacity: 0.9, cursor: 'not-allowed', bg: 'gray'}}
        disabled={page === 1}
        bg={page === 1 ? 'grey' : 'blue.500'}
        color={page === 1 ? '#fff' : 'white'}>
        Преведущая
      </Button>
      {renderPageButtons()}
      <Button
        onClick={handleNextPage}
        _hover={{}}
        _disabled={{opacity: 0.9, cursor: 'not-allowed', bg: 'gray'}}
        disabled={page === totalPages}
        bg={page === totalPages ? 'grey' : 'blue.500'}
        color={page === totalPages ? '#fff' : 'white'}>
        Следующая
      </Button>
    </HStack>
  );
};

export const PageButtons = memo(PageButtonsImpl);
