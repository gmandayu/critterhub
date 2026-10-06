import { ArrowRightIcon, CheckCircle2Icon, MoonStarIcon, PaletteIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';
import { ThemeSwitcher } from '../../shared/components/ThemeSwitcher';
import { Badge } from '../../shared/components/ui/Badge';
import { Button } from '../../shared/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import {
    InfiniteScrollTrigger,
    Input,
    ModalDialog,
    MultiSelectFilter,
    Pagination,
    SearchInput,
    Select,
    Skeleton,
    SkeletonText,
    Tabs,
    ToastProvider,
    Tooltip,
    useToast,
} from '../../shared/components/ui';
import { APP_NAME } from '../config/app-config';

const completedItems = [
    {
        title: 'Fondasi aplikasi',
        description:
            'React, Vite, Tailwind CSS, dan React Router sudah terpasang dan tersusun dalam struktur aplikasi.',
    },
    {
        title: 'Layout dan navigasi',
        description: 'Navbar responsif, layout halaman, breadcrumb, footer, dan halaman 404 sudah tersedia.',
    },
    {
        title: 'Tema terang dan gelap',
        description: 'Token warna dan ThemeSwitcher mendukung tampilan light maupun dark.',
    },
    {
        title: 'Komponen dasar',
        description: 'Button dengan beberapa varian, Badge elemen dan tier, serta Card komposabel sudah dibuat.',
    },
    {
        title: 'Rute awal CritterHub',
        description:
            'Halaman Home dan rute placeholder untuk Dex, detail Tatari, Planner, Tier List, About, Sources, dan License sudah disiapkan.',
    },
];

const elements = ['fire', 'water', 'grass', 'lightning', 'rock'];
const tiers = [
    { id: 'tier1', label: 'Common' },
    { id: 'tier2', label: 'Rare' },
    { id: 'tier3', label: 'Epic' },
    { id: 'tier4', label: 'Legendary' },
];

const buttonVariants = ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'];
const roleOptions = [
    { value: 'attacker', label: 'Attacker' },
    { value: 'support', label: 'Support' },
    { value: 'tank', label: 'Tank' },
];

function ToastDemo() {
    const { toast } = useToast();

    return (
        <Button
            onClick={() => toast({ title: 'Tersimpan', description: 'Contoh notifikasi dari Playground.' })}
            variant="secondary"
        >
            Tampilkan toast
        </Button>
    );
}

export function Playground() {
    const [isSaved, setIsSaved] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [role, setRole] = useState('');
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [visibleItems, setVisibleItems] = useState(5);

    return (
        <main className="bg-background text-foreground min-h-full">
            <div className="layout-page space-y-section py-page-y">
                <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                        <div className="text-primary-text mb-3 inline-flex items-center gap-2 text-sm font-semibold">
                            <PaletteIcon aria-hidden="true" className="size-4" />
                            Project playground
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{APP_NAME} Playground</h1>
                        <p className="text-foreground-secondary mt-3 leading-7">
                            Komponen UI yang sudah tersedia dan ringkasan progres fondasi aplikasi.
                        </p>
                    </div>
                    <div className="bg-surface border-border flex items-center gap-3 rounded-xl border px-4 py-3">
                        <SunIcon aria-hidden="true" className="text-warning size-4" />
                        <ThemeSwitcher />
                        <MoonStarIcon aria-hidden="true" className="text-info size-4" />
                        <span className="text-foreground-secondary text-sm">Tema</span>
                    </div>
                </header>

                <section aria-labelledby="completed-heading" className="space-y-4">
                    <div>
                        <p className="text-primary-text text-sm font-semibold">Progres saat ini</p>
                        <h2 id="completed-heading" className="mt-1 text-xl font-semibold">
                            Yang sudah selesai
                        </h2>
                    </div>
                    <div className="layout-grid-responsive">
                        {completedItems.map((item) => (
                            <Card key={item.title}>
                                <CardHeader className="flex items-start gap-3">
                                    <CheckCircle2Icon
                                        aria-hidden="true"
                                        className="text-success mt-0.5 size-5 shrink-0"
                                    />
                                    <div className="space-y-2">
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription className="leading-6">{item.description}</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="buttons-heading" className="space-y-4">
                    <div>
                        <h2 id="buttons-heading" className="text-xl font-semibold">
                            Button
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Varian yang tersedia di komponen Button.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="flex flex-wrap gap-3 pt-5">
                            {buttonVariants.map((variant) => (
                                <Button key={variant} variant={variant}>
                                    {variant[0].toUpperCase() + variant.slice(1)}
                                </Button>
                            ))}
                            <Button size="lg">Ukuran besar</Button>
                            <Button size="icon" aria-label="Lanjut">
                                <ArrowRightIcon aria-hidden="true" className="size-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </section>

                <section aria-labelledby="badges-heading" className="space-y-4">
                    <div>
                        <h2 id="badges-heading" className="text-xl font-semibold">
                            Badge
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">Badge elemen, tier, dan varian umum.</p>
                    </div>
                    <Card>
                        <CardContent className="flex flex-wrap gap-3 pt-5">
                            {elements.map((element) => (
                                <Badge key={element} element={element}>
                                    {element[0].toUpperCase() + element.slice(1)}
                                </Badge>
                            ))}
                            {tiers.map((tier) => (
                                <Badge key={tier.id} tier={tier.id}>
                                    {tier.label}
                                </Badge>
                            ))}
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </CardContent>
                    </Card>
                </section>

                <section aria-labelledby="cards-heading" className="space-y-4">
                    <div>
                        <h2 id="cards-heading" className="text-xl font-semibold">
                            Card
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Contoh susunan Card header, content, dan footer.
                        </p>
                    </div>
                    <Card className="max-w-xl">
                        <CardHeader>
                            <div className="mb-3 flex flex-wrap gap-2">
                                <Badge element="fire">Fire</Badge>
                                <Badge>Support</Badge>
                                <Badge tier="tier4">Legendary</Badge>
                            </div>
                            <CardTitle>Contoh kartu Tatari</CardTitle>
                            <CardDescription className="mt-2">
                                Komposisi menggunakan komponen yang sudah tersedia.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground-secondary leading-6">
                                Card dapat diisi deskripsi, label, statistik, atau aksi sesuai kebutuhan halaman.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                onClick={() => setIsSaved((saved) => !saved)}
                                variant={isSaved ? 'secondary' : 'primary'}
                            >
                                {isSaved ? 'Tersimpan' : 'Simpan contoh'}
                            </Button>
                            <Button variant="ghost">Detail</Button>
                        </CardFooter>
                    </Card>
                </section>

                <section aria-labelledby="modaldialog-heading" className="space-y-4">
                    <div>
                        <h2 id="modaldialog-heading" className="text-xl font-semibold">
                            Dialog dan Tooltip
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Dialog dapat ditutup dengan tombol, klik area luar, atau tombol Escape.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="flex flex-wrap items-center gap-4 pt-5">
                            <Button onClick={() => setIsDialogOpen(true)}>Buka dialog</Button>
                            <Tooltip content="Tooltip muncul saat hover atau fokus keyboard.">
                                <Button variant="outline">Arahkan atau fokus</Button>
                            </Tooltip>
                        </CardContent>
                    </Card>
                    <ModalDialog
                        description="Dialog contoh untuk mengecek tampilan dan perilaku dasarnya."
                        onOpenChange={setIsDialogOpen}
                        open={isDialogOpen}
                        title="Contoh dialog"
                    >
                        <div className="flex justify-end">
                            <Button onClick={() => setIsDialogOpen(false)}>Tutup</Button>
                        </div>
                    </ModalDialog>
                </section>

                <section aria-labelledby="tabs-heading" className="space-y-4">
                    <div>
                        <h2 id="tabs-heading" className="text-xl font-semibold">
                            Tabs
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Pindah tab dengan klik atau tombol panah kiri/kanan.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="pt-5">
                            <Tabs
                                defaultValue="overview"
                                tabs={[
                                    {
                                        value: 'overview',
                                        label: 'Ringkasan',
                                        content: <p className="text-foreground-secondary">Informasi ringkas Tatari.</p>,
                                    },
                                    {
                                        value: 'skills',
                                        label: 'Skill',
                                        content: <p className="text-foreground-secondary">Daftar skill Tatari.</p>,
                                    },
                                    {
                                        value: 'locked',
                                        label: 'Segera hadir',
                                        content: (
                                            <p className="text-foreground-secondary">Bagian ini belum tersedia.</p>
                                        ),
                                        disabled: true,
                                    },
                                ]}
                            />
                        </CardContent>
                    </Card>
                </section>

                <section aria-labelledby="inputs-heading" className="space-y-4">
                    <div>
                        <h2 id="inputs-heading" className="text-xl font-semibold">
                            Input dan filter
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Input teks, pencarian, pilihan tunggal, dan pilihan multi-select.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="layout-grid-responsive pt-5">
                            <Input aria-label="Nama Tatari" placeholder="Nama Tatari" />
                            <SearchInput aria-label="Cari Tatari" placeholder="Cari Tatari..." />
                            <Select
                                aria-label="Pilih role"
                                onChange={(event) => setRole(event.target.value)}
                                options={roleOptions}
                                placeholder="Pilih role"
                                value={role}
                            />
                            <MultiSelectFilter
                                aria-label="Filter role"
                                onChange={setSelectedRoles}
                                options={roleOptions}
                                value={selectedRoles}
                            />
                        </CardContent>
                        <CardFooter>
                            <p aria-live="polite" className="text-foreground-secondary text-sm">
                                Role terpilih: {role || 'belum ada'} · Multi-select: {selectedRoles.length}
                            </p>
                        </CardFooter>
                    </Card>
                </section>

                <section aria-labelledby="skeleton-heading" className="space-y-4">
                    <div>
                        <h2 id="skeleton-heading" className="text-xl font-semibold">
                            Skeleton loader
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Placeholder visual saat konten sedang dimuat.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="layout-grid-responsive pt-5">
                            <div className="space-y-3">
                                <Skeleton className="size-12 rounded-full" />
                                <SkeletonText />
                            </div>
                            <div className="space-y-3">
                                <Skeleton className="h-32 w-full" />
                                <Skeleton className="h-5 w-2/3" />
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section aria-labelledby="toast-heading" className="space-y-4">
                    <div>
                        <h2 id="toast-heading" className="text-xl font-semibold">
                            Toast / notification
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Notifikasi akan hilang otomatis setelah beberapa saat.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="pt-5">
                            <ToastProvider>
                                <ToastDemo />
                            </ToastProvider>
                        </CardContent>
                    </Card>
                </section>

                <section aria-labelledby="pagination-heading" className="space-y-4">
                    <div>
                        <h2 id="pagination-heading" className="text-xl font-semibold">
                            Pagination dan infinite scroll trigger
                        </h2>
                        <p className="text-foreground-secondary mt-1 text-sm">
                            Contoh kontrol halaman dan tombol untuk menambah item.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="space-y-5 pt-5">
                            <Pagination onPageChange={setActivePage} page={activePage} pageCount={4} />
                            <p aria-live="polite" className="text-foreground-secondary text-center text-sm">
                                Halaman aktif: {activePage}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <p className="text-foreground-secondary text-sm">Item ditampilkan: {visibleItems}</p>
                                <InfiniteScrollTrigger
                                    hasMore={visibleItems < 10}
                                    onLoadMore={() => setVisibleItems((count) => Math.min(count + 5, 10))}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}
