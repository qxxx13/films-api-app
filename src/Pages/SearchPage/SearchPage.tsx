import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Pagination, Stack, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { SearchField } from './SearchField/SearchField';
import { translate } from '../../common/translate/translate';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { getFilmsCurrentPage, getTotalPage, setFilmsCurrentPage } from '../../store/filmsData/filmsDataReducer';
import { getFilmsForList } from '../../store/selectors/filmsSelector';


export const SearchPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const films = useAppSelector(getFilmsForList);
    const totalPage = useAppSelector(getTotalPage);
    const currentPage = useAppSelector(getFilmsCurrentPage);
    const isLoading = useAppSelector(getIsLoading);

    const onPaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setFilmsCurrentPage(page));
    };

    return (
        <Stack direction='row' sx={{ m: '0 auto', maxWidth: 1200, maxHeight: 'calc(100vh - 64px)' }}>
            <Stack direction='column' sx={{ width: '100%' }}>
                <SearchField />
                {totalPage ?
                    <Pagination count={totalPage} sx={{ display: 'flex', justifyContent: 'center', m: '16px 0px 16px 0px' }} onChange={onPaginationChange} page={currentPage} />
                    :
                    <></>
                }
                <Scrollbars style={{ height: '100vh' }}>
                    {films.length < 1 && !isLoading
                        ?
                        <Typography color="textPrimary" variant='h3' sx={{ display: 'flex', justifyContent: 'center' }}>{translate('notFound')}</Typography>
                        :
                        <FilmsList films={films} />
                    }
                </Scrollbars>
            </Stack>
        </Stack>
    );
};
