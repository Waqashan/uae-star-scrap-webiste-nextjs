import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
          404
        </div>
        <h1 className="mt-2 text-2xl font-black text-slate-900">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary">
            Go home
          </ButtonLink>
          <ButtonLink href="/blog" variant="outline">
            Read our blog
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}

