export function PagePlaceholder({ title, detail }) {
    return (
        <section className="max-w-reading mx-auto w-full text-center">
            <h1 className="text-foreground text-3xl font-semibold tracking-tight">{title}</h1>
            {detail ? <p className="text-foreground-secondary mt-3">{detail}</p> : null}
            <p className="text-foreground-muted mt-2 text-sm">This page is being prepared.</p>
        </section>
    );
}
