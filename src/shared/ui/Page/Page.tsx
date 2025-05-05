import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/UseInfiniteScroll/UseInfiniteScroll';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: ()=>void;
}

export const Page = memo(({ className,children,onScrollEnd }: PageProps) => {
    const wrapperRef = useRef()as MutableRefObject<HTMLElement>;
    const triggerRef = useRef()as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({ triggerRef,wrapperRef,callback:onScrollEnd });
    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    );
});
