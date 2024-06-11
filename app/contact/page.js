import { Suspense } from 'react';
import ProjectList from './components/project-list';
import ProjectListLoading from './components/project-list-loading';
import { ErrorBoundary } from "react-error-boundary";

export default function ContactPage() {
    return (
        <div>
            <h1 className="mb-8 text-xl">APIs</h1>
            <div className="mb-8">Hello, this is the list of apis to use track the price </div>
            <ErrorBoundary fallback={<div>Cannot fetch currently</div>}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}