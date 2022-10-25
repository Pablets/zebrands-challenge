import { useRouter } from 'next/router';
import React from 'react';
import TextLink from '../../src/components/molecules/textLink/TextLink';
import { useAppSelector, useAppDispatch } from '../../src/hooks/hooks';
import { resetResultsStore } from '../../src/redux/slices/results/resultsSlice';

const Error = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { error } = useAppSelector((state) => state.resultsSlice);

    const onClickCallback = () => {
        dispatch(resetResultsStore());
        router.push({
            pathname: '/',
        });
    };

    return (
        <div className="container">
            <div>
                <h1>An error ocurred</h1>
            </div>
            {typeof error === 'string' ? <h4>Message: {error}</h4> : <pre>{JSON.stringify(error, null, 2)}</pre>}
            <div>
                <TextLink clickCallback={onClickCallback}>Return to home</TextLink>
            </div>
        </div>
    );
};

export default Error;
