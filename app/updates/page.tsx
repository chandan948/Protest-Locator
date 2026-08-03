import LatestProtests from "@/components/home/LatestProtests";

export default function UpdatesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-slate-900">
                        Latest Protest Updates
                    </h1>

                    <p className="mt-3 text-slate-600">
                        Stay informed with the latest verified protest activity across
                        India.
                    </p>
                </div>

                <LatestProtests />

            </div>
        </main>
    );
}