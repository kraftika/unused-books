import Link from "next/link";
// import { Button } from "@/components/ui/button"
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import {
  MenuIcon,
  X,
  ArrowRight,
  Check,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section>
          <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface dark:text-white">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Book title
              </h5>
              <h5 className="mb-4 text-base">Author</h5>
              <p className="mb-4 text-base">Description of the book</p>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Button
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <!-- Card Header --> */}
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800">
                Book Title by Author
              </h4>
            </div>

            {/* <!-- Card Image --> */}
            <div className="flex justify-center items-center py-4">
              <img
                src="image-url.jpg"
                alt="Book Cover"
                className="h-48 object-cover"
              />
            </div>

            {/* <!-- Card Description --> */}
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                This is a brief description of the book. It provides an overview
                of the content, themes, or any other relevant details that
                entice readers to explore more.
              </p>
            </div>

            {/* <!-- Card Footer --> */}
            <div className="px-6 py-4 flex justify-end">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
                Buy
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 BitbyBit SRL
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
