'use client';

import {
    ShadcnBreadcrumb,
    ShadcnBreadcrumbItem,
    ShadcnBreadcrumbLink,
    ShadcnBreadcrumbList,
    ShadcnBreadcrumbPage,
    ShadcnBreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

function Breadcrumbs() {
    return (
        <ShadcnBreadcrumb>
            <ShadcnBreadcrumbList>
                <ShadcnBreadcrumbItem>
                    <ShadcnBreadcrumbLink href="/">Home</ShadcnBreadcrumbLink>
                </ShadcnBreadcrumbItem>
                <ShadcnBreadcrumbSeparator />
                <ShadcnBreadcrumbItem>
                    <ShadcnBreadcrumbLink href="/components">Components</ShadcnBreadcrumbLink>
                </ShadcnBreadcrumbItem>
                <ShadcnBreadcrumbSeparator />
                <ShadcnBreadcrumbItem>
                    <ShadcnBreadcrumbPage>Breadcrumb</ShadcnBreadcrumbPage>
                </ShadcnBreadcrumbItem>
            </ShadcnBreadcrumbList>
        </ShadcnBreadcrumb>
    );
}

export default Breadcrumbs;
