import React, {memo} from 'react';
import {Button, HStack} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPage} from '@/store';
import {decrementPage, incrementPage, setPage} from '@/store/pageSlice';

interface PageButtonsProps {
  totalPages: number | undefined;
}

const PageButtonsImpl = ({totalPages}: PageButtonsProps) => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    if (page.currentPage > 1) {
      dispatch(decrementPage());
    }
  };

  const handleNextPage = () => {
    if (page.currentPage < totalPages) {
      dispatch(incrementPage());
    }
  };

  const renderPageButtons = () => {
    if (typeof totalPages !== undefined) {
      const buttons = [];
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            onClick={() => dispatch(setPage(i))}
            colorScheme={page.currentPage === i ? 'blue' : 'gray'}>
            {i}
          </Button>,
        );
      }
      return buttons;
    }
    return <h1>eror</h1>;
  };

  return (
    <HStack spacing={2} justify='center'>
      <Button
        onClick={handlePreviousPage}
        _hover={{}}
        _disabled={{opacity: 0.9, cursor: 'not-allowed', bg: 'gray'}}
        disabled={page.currentPage === 1}
        bg={page.currentPage === 1 ? 'grey' : 'blue.500'}
        color={page.currentPage === 1 ? '#fff' : 'white'}>
        Преведущая
      </Button>
      {renderPageButtons()}
      <Button
        onClick={handleNextPage}
        _hover={{}}
        _disabled={{opacity: 0.9, cursor: 'not-allowed', bg: 'gray'}}
        disabled={page.currentPage === totalPages}
        bg={page.currentPage === totalPages ? 'grey' : 'blue.500'}
        color={page.currentPage === totalPages ? '#fff' : 'white'}>
        Следующая
      </Button>
    </HStack>
  );
};

export const PageButtons = memo(PageButtonsImpl);
