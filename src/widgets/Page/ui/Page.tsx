import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/UseInfiniteScroll/UseInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/provider/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/UseThrottle/UseThrottle';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    isLoading?: boolean;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd, isLoading } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: isLoading ? undefined : onScrollEnd,
    });
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        );
        // console.log(e.currentTarget.scrollTop);
    }, 500);
    return (
        <main
            id={PAGE_ID}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger} />
            ) : null}
        </main>
    );
});
