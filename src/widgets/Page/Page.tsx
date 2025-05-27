import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/UseInfiniteScroll/UseInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/UseThrottle/UseThrottle';


interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID='PAGE_ID';

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
        // console.log(e.currentTarget.scrollTop);
    }, 500);
    return (
        <section
            id={PAGE_ID}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
        </section>
    );
});
