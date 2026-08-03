export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24">
            <div className="mx-auto max-w-5xl px-6">
                <h1 className="text-5xl font-bold text-slate-900">
                    About Protest Locator
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    Protest Locator is a platform designed to help citizens discover,
                    monitor, and stay informed about verified public protests across
                    India.
                </p>

                <div className="mt-12 rounded-3xl bg-white p-8 shadow">
                    <h2 className="text-2xl font-semibold">
                        Our Mission
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Provide transparent, real-time information about peaceful public
                        demonstrations through an interactive map, verified updates, and
                        community reporting.
                    </p>
                </div>
            </div>
        </main>
    );
}