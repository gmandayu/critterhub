import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '../Button';

export function Pagination({ page, pageCount, onPageChange, className }) {
    if (pageCount < 2) return null;

    function changePage(nextPage) {
        if (nextPage >= 1 && nextPage <= pageCount && nextPage !== page) onPageChange?.(nextPage);
    }

    return (
        <nav aria-label="Pagination" className={className}>
            <ul className="flex items-center justify-center gap-1">
                <li>
                    <Button
                        aria-label="Halaman sebelumnya"
                        disabled={page <= 1}
                        onClick={() => changePage(page - 1)}
                        variant="outline"
                    >
                        <ChevronLeftIcon aria-hidden="true" className="size-4" />
                        Sebelumnya
                    </Button>
                </li>
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                    <li key={pageNumber}>
                        <Button
                            aria-current={pageNumber === page ? 'page' : undefined}
                            aria-label={`Halaman ${pageNumber}`}
                            onClick={() => changePage(pageNumber)}
                            variant={pageNumber === page ? 'primary' : 'ghost'}
                        >
                            {pageNumber}
                        </Button>
                    </li>
                ))}
                <li>
                    <Button
                        aria-label="Halaman berikutnya"
                        disabled={page >= pageCount}
                        onClick={() => changePage(page + 1)}
                        variant="outline"
                    >
                        Berikutnya
                        <ChevronRightIcon aria-hidden="true" className="size-4" />
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export function InfiniteScrollTrigger({ onLoadMore, loading = false, hasMore = true, className }) {
    if (!hasMore) return null;

    return (
        <div className={className}>
            <Button disabled={loading} onClick={onLoadMore} variant="outline">
                {loading ? 'Memuat...' : 'Muat lebih banyak'}
            </Button>
        </div>
    );
}
