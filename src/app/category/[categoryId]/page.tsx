import { redirect } from 'next/navigation';

export default function CategoryRedirect({ params }: { params: { categoryId: string } }) {
    redirect(`/category/${params.categoryId}/1`);
}
