export const contact = {
  address: {
    street: "Industrial Park",
    city: "Kalumbila",
    province: "North-Western Province",
    country: "Zambia",
  },
  headOffice: {
    street: "1 Chila Road, DG Office Park",
    city: "Kabulonga, Lusaka",
    province: "Zambia",
    country: "Zambia",
  },
  phone: "+260 977 124 963",
  email: "info@meltz.co.zm",
  interestOptions: [
    "General Inquiry",
    "Products",
    "Technical Inquiry",
    "Sales",
    "Careers",
    "Supplier Inquiry",
  ],
  formFields: {
    name: { label: "Full Name", placeholder: "Your full name", required: true },
    company: {
      label: "Company",
      placeholder: "Your company name",
      required: false,
    },
    email: {
      label: "Email Address",
      placeholder: "your.email@company.com",
      required: true,
    },
    phone: {
      label: "Phone Number",
      placeholder: "+260 XXX XXXXXX",
      required: false,
    },
    country: { label: "Country", placeholder: "Your country", required: true },
    interest: {
      label: "Area of Interest",
      required: true,
    },
    message: {
      label: "Message",
      placeholder: "How can we help you?",
      required: true,
    },
  },
};
