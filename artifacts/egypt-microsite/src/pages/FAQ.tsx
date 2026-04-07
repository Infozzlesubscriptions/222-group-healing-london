import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

type FAQItem = {
  q: string;
  a: string | JSX.Element;
};

type FAQCategory = {
  title: string;
  icon: string;
  items: FAQItem[];
};

const categories: FAQCategory[] = [
  {
    title: "The Journey",
    icon: "✦",
    items: [
      {
        q: "What exactly is the Cosmic Ascension Tour of Egypt?",
        a: "The Cosmic Ascension Tour of Egypt is a 15-day sacred pilgrimage led by Jerry Sargeant (founder of Star Magic). It is a deeply immersive spiritual journey that takes you to the most energetically potent sites in Egypt — including the Great Pyramid, the Sphinx, Luxor Temple, Karnak, Abu Simbel, the Temple of Isis, and more. Each day combines site visits with activations, breathwork, group ceremony, and guided meditation. This is not a standard sightseeing tour — it is a full initiatory experience designed to activate your highest potential.",
      },
      {
        q: "When and where does the 2027 journey take place?",
        a: "The journey runs from 16th to 30th March 2027. You will travel across Egypt, beginning in Cairo (Memphis), journeying to Luxor, Aswan, Abu Simbel, and returning to Giza for the culmination of the journey. All internal flights, accommodation, and transfers within Egypt are included.",
      },
      {
        q: "How many people will be on the journey?",
        a: "We deliberately keep group sizes intimate — typically between 25 and 40 participants. This allows every person to have direct access to Jerry, to feel held by the group, and for the ceremonies and activations to carry maximum power. A small tribe also means you can move swiftly, access exclusive spaces, and build deep bonds with fellow travellers.",
      },
      {
        q: "Is this a religious pilgrimage?",
        a: "No — the journey is non-denominational and open to people of all faiths, backgrounds, and spiritual paths. We draw on the wisdom of ancient Egyptian cosmology, but we do not promote any specific religion. What we do share is a recognition that consciousness, energy, and intention are real forces — and that Egypt is one of the most powerful places on Earth to work with them.",
      },
      {
        q: "What is the optional Sinai extension?",
        a: "For those who feel called to go deeper, we offer an optional 4–5 day extension to the Sinai Peninsula after the main journey ends. This includes hiking Mount Sinai at dawn, time at the Red Sea for integration, and desert silence. It is available at an additional cost and limited to those who have completed the core 15-day journey.",
      },
      {
        q: "Will we get private or exclusive access to any sites?",
        a: "Yes. A significant part of what makes this journey extraordinary is the level of access we arrange. Past groups have had exclusive early-morning access to certain sites before they open to the public, private ceremonies within specific chambers, and guided access to areas not available on standard tours. Exact arrangements for 2027 will be confirmed closer to departure.",
      },
    ],
  },
  {
    title: "Booking & Payment",
    icon: "◈",
    items: [
      {
        q: "How do I secure my place on the journey?",
        a: "You can reserve your spot by clicking the 'Book Your Spot' button and completing the application form. A deposit is required to hold your place. Once we have reviewed your application, a member of our team will be in touch to confirm and guide you through the next steps.",
      },
      {
        q: "What is the total investment and what is included?",
        a: (
          <span>
            The full cost varies depending on your chosen room type (single, twin, or shared). The investment covers:
            <ul className="mt-3 space-y-2 list-none">
              {[
                "All accommodation throughout Egypt (15 nights, 4-5 star hotels)",
                "All internal flights within Egypt",
                "All transfers and group transportation",
                "All site entrance fees and private access arrangements",
                "Daily breakfast and most group meals",
                "All workshops, activations, meditations, and ceremonies led by Jerry",
                "Breathwork and Qigong sessions",
                "Welcome and closing ceremony",
                "24/7 support from the Star Magic team on the ground",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary shrink-0 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">International flights to and from Cairo are not included. Full pricing details are provided during the booking process.</p>
          </span>
        ),
      },
      {
        q: "Is a payment plan available?",
        a: "Yes. We understand this is a significant investment and we want it to be accessible. We offer flexible payment plans that allow you to spread the cost over several months. The deposit holds your spot, and the remaining balance can be paid in agreed instalments. Please speak to our team when you book and we will arrange a plan that works for you.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We understand that life can be unpredictable. Our standard cancellation policy is: deposits are non-refundable. Cancellations made more than 90 days before departure are eligible for a credit toward a future journey. Cancellations within 90 days of departure are non-refundable. We strongly recommend taking out comprehensive travel insurance that covers cancellation. Full terms are provided at booking.",
      },
      {
        q: "Do I need travel insurance?",
        a: "Travel insurance is mandatory for all participants. You must have a policy in place that covers medical emergencies, hospitalisation, evacuation, and ideally trip cancellation. We recommend purchasing this as soon as you make your deposit. We are happy to advise on suitable providers if needed.",
      },
      {
        q: "Can I bring a partner or friend who is not spiritually inclined?",
        a: "The journey is designed for those genuinely open to the experience. That said, 'spiritually inclined' means many different things — we welcome curious sceptics, beginners, and seasoned practitioners alike. If you have a partner or friend who would like to join, we encourage them to complete the application so we can have a conversation with them. The core requirement is openness and a willingness to engage.",
      },
    ],
  },
  {
    title: "Practical Matters",
    icon: "☥",
    items: [
      {
        q: "What level of physical fitness is required?",
        a: "The journey involves walking on uneven ground at temple sites, some early mornings, and occasional flights of stairs or inclines. You do not need to be an athlete, but a basic level of mobility is helpful. If you have any physical limitations, please let us know when you apply and we will do our best to accommodate you. The pace is intentional and unhurried — this is not a rush tour.",
      },
      {
        q: "What should I pack?",
        a: (
          <span>
            A detailed packing guide is sent to all confirmed participants. Key essentials include:
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Comfortable, breathable clothing in neutral tones (many sacred sites require modest dress)",
                "A high-quality shawl or light wrap for ceremonies and temple visits",
                "Comfortable walking shoes with good grip",
                "Sun hat, sunscreen, and sunglasses",
                "Reusable water bottle",
                "Journal and pens for integration writing",
                "Any personal sacred objects you wish to bring for ceremonies",
                "Prescription medication with documentation if required",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary shrink-0 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </span>
        ),
      },
      {
        q: "What are the visa requirements for Egypt?",
        a: "Most nationalities can obtain a visa on arrival in Egypt or via the official Egyptian e-visa portal online prior to travel. We recommend applying for your e-visa at least 2 weeks before departure. Full visa guidance specific to your nationality will be included in your pre-departure information pack.",
      },
      {
        q: "What vaccinations do I need?",
        a: "There are no mandatory vaccinations required for Egypt for most travellers. However, we recommend consulting your GP or a travel clinic at least 6–8 weeks before departure. Commonly recommended precautions include hepatitis A, typhoid, and ensuring your routine vaccinations are up to date. We are not medical advisors — please seek professional guidance for your specific health situation.",
      },
      {
        q: "What is the weather like in Egypt in March?",
        a: "March is one of the finest times to visit Egypt. Temperatures are warm and pleasant — typically 20–28°C (68–82°F) during the day, cooler in the evenings. The intense summer heat has not yet arrived. Occasional Khamsin winds (desert sand winds) can occur in spring, but they are usually brief. You will be outdoors at many sites so bring sun protection and a light layer for evenings.",
      },
      {
        q: "Are dietary requirements catered for?",
        a: "Yes. We ask all participants to let us know their dietary requirements at the time of booking. Egypt has wonderful options for vegetarians and most sites can accommodate vegans, gluten-free, and other requirements with advance notice. Our team liaises with all hotels and restaurants ahead of time to ensure your needs are met.",
      },
      {
        q: "Is Egypt safe to travel to?",
        a: "Egypt has a well-established tourism infrastructure and millions of visitors travel safely each year. The main tourist sites we visit are all within well-monitored areas. Our team has run multiple successful pilgrimages here and has deep knowledge of the country. We monitor travel advisories continuously and would never run a journey that we did not believe was safe. We also provide comprehensive pre-departure safety briefings.",
      },
    ],
  },
  {
    title: "The Spiritual Experience",
    icon: "◇",
    items: [
      {
        q: "I'm new to spiritual practice — is this journey right for me?",
        a: "Absolutely. Many of our most transformative testimonials come from people who described themselves as 'beginners' before they arrived. You do not need prior experience in meditation, energy work, or ceremony. What matters most is your openness and intention. Jerry and the Star Magic team meet each person exactly where they are — no spiritual experience is required.",
      },
      {
        q: "What is Star Magic healing and will it be part of the journey?",
        a: "Star Magic is a multi-dimensional healing modality developed by Jerry Sargeant. It works at the level of consciousness, accessing the quantum field to facilitate rapid and deep healing — physical, emotional, mental, and spiritual. Throughout the journey, Jerry weaves Star Magic into every activation, meditation, and ceremony. There may also be opportunities for individual healing sessions within the group context.",
      },
      {
        q: "What does a typical day look like?",
        a: (
          <span>
            Every day is unique, but a typical day might look like:
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Early morning breathwork or Qigong session (optional but encouraged)",
                "Breakfast as a group",
                "Morning visit to a sacred site with guided activation",
                "Lunch and free time for integration, rest, or exploration",
                "Afternoon ceremony, workshop, or second site visit",
                "Evening meal as a tribe",
                "Evening sharing circle, sound healing, or stargazing meditation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary shrink-0 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </span>
        ),
      },
      {
        q: "What is the 'planetary grid work' you mention?",
        a: "Planetary grid work is our practice of working with the Earth's energetic field — the lines of electromagnetic and subtle energy (sometimes called ley lines or dragon lines) that run across the planet. Egypt sits at one of the most powerful intersections of this grid. In practice, this means our group ceremonies and activations at key sites serve not only personal transformation — they contribute to anchoring elevated frequencies into the Earth's field for the benefit of all. Whether you relate to this literally or metaphorically, the activations at these sites are profound.",
      },
      {
        q: "Will I need to talk or share in front of the group?",
        a: "Sharing circles are a powerful part of the journey, but participation is always voluntary. You are never put on the spot or required to speak. Many people find that as the journey deepens, sharing becomes a natural and welcome part of their experience — but at your own pace and in your own time.",
      },
      {
        q: "What if I experience a strong emotional release during the journey?",
        a: "Deep emotional releases are a natural and healthy part of this kind of work. The sacred sites, activations, and group field often facilitate the surfacing of emotions that are ready to be released and healed. Jerry and the Star Magic team are highly experienced at holding space for these moments. You are never alone, and there is always loving, professional support available. This is one of the most healing aspects of the experience.",
      },
      {
        q: "How do I integrate the experience when I return home?",
        a: "Integration is something we take seriously. Before departure, you will receive a comprehensive integration guide. You will also have access to the Star Magic online community, where fellow travellers continue to support each other after the journey. Many participants find the weeks and months following Egypt to be a period of profound positive change — in relationships, careers, health, and creativity. We recommend keeping a journal, maintaining a daily practice, and giving yourself space and gentleness in the weeks that follow.",
      },
    ],
  },
  {
    title: "About Jerry & Star Magic",
    icon: "★",
    items: [
      {
        q: "Who is Jerry Sargeant?",
        a: "Jerry Sargeant is the founder of Star Magic Healing and one of the world's most recognised facilitators of consciousness expansion and energy healing. He has worked with tens of thousands of people across the globe — from elite athletes and entrepreneurs to individuals facing serious health challenges. Jerry's unique ability is to access and transmit elevated states of consciousness that catalyse transformation at the deepest levels of being. He has led multiple Egypt pilgrimages and has an intimate connection with the land and its sacred sites.",
      },
      {
        q: "What makes Jerry's approach different from other spiritual teachers?",
        a: "Jerry combines ancient wisdom with cutting-edge understanding of quantum physics, neuroscience, and consciousness. His facilitation style is direct, playful, and deeply loving. He has an ability to read the energy of a group and adapt the journey in real time — no two experiences are the same. He also has an extraordinary network of local experts, Egyptologists, and sacred site guardians who give the group access and insight unavailable through conventional channels.",
      },
      {
        q: "Will Jerry be present for the entire journey?",
        a: "Yes. Jerry is present for the entire 15-day journey. This is not a delegated event — he personally leads every activation, ceremony, and workshop from arrival to departure. This level of direct access to Jerry is part of what makes the Egypt journey particularly rare and transformative.",
      },
      {
        q: "Who else will be supporting the journey?",
        a: "Jerry is supported by a dedicated Star Magic facilitation team, an experienced Egypt-based ground team, and local Egyptologists and guides who provide deep historical and spiritual context at each site. Medical support is also available. The entire operation is coordinated so that you can be fully present without any logistical worries.",
      },
    ],
  },
  {
    title: "Still Have Questions?",
    icon: "◎",
    items: [
      {
        q: "I have a question that isn't answered here — what should I do?",
        a: "Please reach out to our team directly. You can book a free Discovery Call where a member of the Star Magic team will answer all your questions, understand your situation, and help you determine whether this journey is the right fit for you. There is absolutely no pressure — we want every person who joins us to feel completely informed and ready.",
      },
      {
        q: "Can I speak to someone who has been on a previous Egypt journey?",
        a: "Absolutely. We can connect you with past participants who are happy to share their experience. Visit our Transformations page to read and watch testimonials, or request a personal introduction when you book your Discovery Call.",
      },
    ],
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-border/50 transition-colors duration-200 ${isOpen ? "bg-secondary/30" : ""}`}>
      <button
        className="w-full text-left flex items-start justify-between gap-4 py-5 px-6 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 mt-0.5"
        >
          <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-[15px]">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">

      {/* Hero */}
      <motion.div
        className="text-center px-4 mb-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Everything You Need to Know</span>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          We know this is a big decision. Below you'll find honest, detailed answers to the most common questions we receive. If you still have questions, we'd love to speak with you directly.
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      {/* Quick category nav */}
      <div className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <a
                key={i}
                href={`#cat-${i}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
              >
                <span className="text-primary text-xs">{cat.icon}</span>
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 max-w-4xl mx-auto space-y-16">
        {categories.map((cat, ci) => (
          <motion.section
            key={ci}
            id={`cat-${ci}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary text-lg">{cat.icon}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
              </div>
              <div className="flex-1 h-px bg-border/50 ml-4" />
            </div>

            {/* Accordion */}
            <div className="rounded-2xl border border-border/50 overflow-hidden bg-card shadow-sm">
              {cat.items.map((item, ii) => {
                const key = `${ci}-${ii}`;
                return (
                  <FAQAccordion
                    key={key}
                    item={item}
                    isOpen={!!openItems[key]}
                    onToggle={() => toggle(key)}
                  />
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-24 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto bg-secondary/30 rounded-3xl border border-border/50 p-12">
          <div className="text-primary text-4xl mb-6">◈</div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Book a free Discovery Call with our team. We'll answer everything, understand your situation, and help you know if this journey is right for you — with zero pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-2027">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-base px-10 py-2">
                Book Discovery Call
              </Button>
            </Link>
            <Link href="/join-2027">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary font-semibold text-base px-10 py-2">
                Reserve Your Spot
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
