// Contact settings used by the WhatsApp buttons. Change the number or message here.
export const site = {
  name: "Sehar Faiz",
  title: "Sehar Faiz | Clinical Psychologist",
  description:
    "Clinical Psychologist and Behavior Therapist in Lahore, offering compassionate, evidence-based care for children, adolescents, and adults.",
  // WhatsApp chat link: https://wa.me/<country code + number, digits only>
  whatsapp: "https://wa.me/923038810635",
  whatsappMessage: "Hello Sehar, I would like to book an appointment.",
};

export const whatsappMessageHref = `${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
