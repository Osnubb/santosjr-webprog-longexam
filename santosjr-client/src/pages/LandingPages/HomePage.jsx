import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import dailyEssentialsImage from '../../assets/img/14865301505_a5f670bec1_b.jpg';
import studySuppliesImage from '../../assets/img/GettyImages-829436700-5b297785fa6bcc0036065232.jpg';
import campusApparelImage from '../../assets/img/487866008_1070423875119749_5109726727153867597_n.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Category Grid
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Browse by student need</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Daily Essentials
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-zinc-900">Carry the basics</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Tumblers, tote bags, and lanyards that students use from first class to last.
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Study Supplies
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-zinc-900">Stay review-ready</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Notes, organizers, and care-pack items designed for busy school weeks.
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Campus Apparel
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-zinc-900">Wear school pride</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Hoodie and uniform-inspired picks for class days, events, and cool-weather commutes.
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Desk Setup
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-zinc-900">Build a better study corner</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Lamps and workspace tools that make small dorm or home desks easier to use.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                            <img
                                src={dailyEssentialsImage}
                                alt="Daily essentials products"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                            <img
                                src={studySuppliesImage}
                                alt="Study supplies on a desk"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                            <img
                                src={campusApparelImage}
                                alt="Campus apparel display"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
