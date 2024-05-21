import type { Metadata } from 'next'
import { Auth } from './Auth'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Background } from '@/components';


export const metadata: Metadata = {
    title: 'Auth',
    ...NO_INDEX_PAGE,
};

export default function AuthPage() {
    return (
        <>
            <Background />
            <Auth />
        </>
    );
}