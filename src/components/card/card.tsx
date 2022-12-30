import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(({ id, title, snippet, image, tags }: CardProps) => {

    return (

        <div class="max-w-sm rounded overflow-hidden shadow-lg my-8">
            <Link href={`/blogs/${id}`}>
                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        {title}
                    </div>
                    <p class="text-gray-700 text-base">
                        {snippet}
                    </p>
                </div>
            </Link>

            <div class="px-6 pt-4 pb-2">
                {tags?.map((tag: string) => (
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>

                ))}
            </div>
        </div>

    );
});

interface CardProps {
    id: string
    title: string
    snippet: string
    image: string,
    tags?: string[]
}