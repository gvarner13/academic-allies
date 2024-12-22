import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function FaqDrawer() {
  return (
    <div className="mx-auto min-h-full px-4 pb-8 pt-8 md:w-1/2">
      <div>
        <Disclosure as="div" className="p-6" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium md:text-2xl">
              How much does it cost to work with Academic Allies?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[open]:rotate-180 group-data-[hover]:fill-black/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            Our fees vary depending on the services requested. Please contact us
            for more information.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium md:text-2xl">
              What are the qualifications of Academic Allies's consultants?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[open]:rotate-180 group-data-[hover]:fill-black/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            All of Academic Allies's consultants have advanced degrees in their
            respective fields and years of experience working in education. They
            also receive ongoing training to stay up-to-date on the latest
            trends and best practices in the industry.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium md:text-2xl">
              What is the process for working with Academic Allies?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[open]:rotate-180 group-data-[hover]:fill-black/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            We begin with an initial consultation to discuss your goals and
            needs. From there, we create a customized plan for you and provide
            ongoing support throughout the process.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium md:text-2xl">
              What services does Academic Allies provide?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[open]:rotate-180 group-data-[hover]:fill-black/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            Academic Allies offers a wide range of educational consulting
            services. For businesses we offer services tailored to product
            alignment, relationship building, and sales consulting. Our schools
            have access to consulting and trading related to technology,
            leadership, diversity, and classroom management.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium md:text-2xl">
              Does Academic Allies offer virtual consulting services?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[open]:rotate-180 group-data-[hover]:fill-black/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            Yes, Academic Allies offers virtual consulting services to clients
            all over the world. Meetings can be conducted via video conferencing
            or phone.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
