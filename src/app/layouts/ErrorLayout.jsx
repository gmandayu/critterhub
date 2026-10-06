import { Outlet } from 'react-router-dom';
import { PageContainer } from './container/PageContainer';
import { ContentWrapper } from './wrapper/ContentWrapper';

export function ErrorLayout({ children }) {
    return (
        <main id="main-content" tabIndex="-1" className="bg-background grid min-h-dvh place-items-center">
            <PageContainer>
                <ContentWrapper width="reading">{children ?? <Outlet />}</ContentWrapper>
            </PageContainer>
        </main>
    );
}
