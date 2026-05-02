import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={logo} alt="BulldogEx" className="h-32 w-32 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A student-friendly shop built for everyday campus life.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop is designed for students who want practical school items,
              easy product browsing, and a cleaner way to explore campus-inspired essentials
              without extra steps.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              From daily carry items to study tools and school apparel, the store focuses
              on products that feel useful, familiar, and relevant to student routines.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Why students shop here</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Student Focused
            </p>
            <h3 className="mt-3 text-xl font-bold text-zinc-900">Made for daily campus routines</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The catalog highlights items students actually bring, wear, and use throughout the week.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Easy Browsing
            </p>
            <h3 className="mt-3 text-xl font-bold text-zinc-900">Simple layout, quick scanning</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Product cards, category sections, and direct actions help shoppers find items faster.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Budget Aware
            </p>
            <h3 className="mt-3 text-xl font-bold text-zinc-900">Practical picks for students</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The product mix is built around useful choices instead of unnecessary extras.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Friendly
            </p>
            <h3 className="mt-3 text-xl font-bold text-zinc-900">Clear from browse to order</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Students can explore online, choose what they need, and prepare for campus pickup with less hassle.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">How BulldogEx Shop helps students</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are organized by student need so browsing feels quicker and more familiar.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Simple Shopping Flow</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Each product page keeps the details clear, from price and stock to quick action buttons.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Campus Ready</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  The store keeps the experience direct and practical for students managing busy schedules.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Shop Values</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  BulldogEx Shop values usefulness, student budget awareness, easy browsing, and campus-centered products.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border-2 border-zinc-900 bg-amber-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Daily Essentials
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">Grab-and-go items</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Everyday campus picks like tumblers, lanyards, and carry bags.
                </p>
              </div>
              <div className="rounded-[1.25rem] border-2 border-zinc-900 bg-sky-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Study Supplies
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">Focused review tools</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Notes, organizers, and kits that help during lectures and exam prep.
                </p>
              </div>
              <div className="rounded-[1.25rem] border-2 border-zinc-900 bg-rose-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Campus Apparel
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">Wearable school style</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Comfortable clothing picks for class, events, and everyday campus use.
                </p>
              </div>
              <div className="rounded-[1.25rem] border-2 border-zinc-900 bg-emerald-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Desk Setup
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">Small-space upgrades</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Lamps and workspace helpers for better studying at home or in the dorm.
                </p>
              </div>
            </div>
            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
